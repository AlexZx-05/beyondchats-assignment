require("dotenv").config();
const axios = require("axios");
const cheerio = require("cheerio");

// Laravel API
const API = "http://127.0.0.1:8000/api/articles";

// DUCKDUCKGO SEARCH
async function searchDuckDuckGo(query) {
  const url = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`;

  const res = await axios.get(url, {
    headers: { "User-Agent": "Mozilla/5.0" }
  });

  const $ = cheerio.load(res.data);
  let links = [];

  $("a.result__a").each((i, el) => {
    if (i < 2) links.push($(el).attr("href"));
  });

  return links;
}


// MAIN FUNCTION
async function start() {

  console.log("Fetching articles from Laravel...");
  const res = await axios.get(API);
  let articles = res.data;

  console.log("Total articles found:", articles.length);

  for (let article of articles) {

    console.log("\nProcessing:", article.title);

    if (!article.title || article.title.trim() === "") {
      console.log("Skipping because title is empty...");
      continue;
    }

    // -------------------- SEARCH --------------------
    let rawLinks = await searchDuckDuckGo(article.title);

    let blogLinks = rawLinks.map(link => {
      try {
        const urlObj = new URL("https:" + link);
        const realUrl = urlObj.searchParams.get("uddg");
        return decodeURIComponent(realUrl);
      } catch {
        return null;
      }
    }).filter(l => l && l.startsWith("http"));

    console.log("Clean Links:", blogLinks);

    if (blogLinks.length === 0) {
      console.log("No valid links found. Skipping...");
      continue;
    }


    // -------------------- SCRAPE --------------------
    let scrapedTexts = [];

    for (let link of blogLinks) {
      try {

        const page = await axios.get(link, {
          headers: { "User-Agent": "Mozilla/5.0" }
        });

        const $ = cheerio.load(page.data);

        $("nav, header, footer, script, style, noscript, form, button, aside,.menu,.navbar,.navigation,.breadcrumbs,.sidebar,.widget,.mega-menu,.dropdown,.language-switcher,.subscribe,.newsletter,.social,.share,.contact,.footer-links").remove();

        let contentRoot =
          $("article").first().length
            ? $("article").first()
            : $(".entry-content").first().length
              ? $(".entry-content").first()
              : $(".post-content").first().length
                ? $(".post-content").first()
                : $("main").first().length
                  ? $("main").first()
                  : $("body");

        let paragraphs = [];

        const BAD_WORDS = [
          "about","company","services","solutions","portfolio",
          "join","career","contact","menu","faq",
          "privacy","terms","cookies","newsletter","subscribe",
          "english","login","signup","home","articles"
        ];

        contentRoot.find("p").each((i, el) => {
          let text = $(el).text().trim().replace(/\s+/g, " ");

          if (text.length < 60) return;

          let lower = text.toLowerCase();
          if (BAD_WORDS.some(w => lower.includes(w))) return;

          paragraphs.push(text);
        });

        if (paragraphs.length === 0) {
          $("p").each((i, el) => {
            let text = $(el).text().trim().replace(/\s+/g, " ");
            if (text.length > 60) paragraphs.push(text);
          });
        }

        paragraphs.sort((a, b) => b.length - a.length);

        let cleanArticleText = paragraphs.slice(0, 6).join("\n\n");

        scrapedTexts.push(cleanArticleText);

      } catch (err) {
        console.log("Failed to scrape:", link);
      }
    }


    // ---------------- CLEAN ORIGINAL ----------------
    let original = article.content || "";

    if (original.includes("Reference Content Summaries:")) {
      original = original.split("Reference Content Summaries:")[0];
    }

    if (original.includes("UPDATED ARTICLE")) {
      original = original.split("UPDATED ARTICLE")[0];
    }

    if (!original.trim()) {
      original = "Original blog content not available.";
    }


    // ---------------- OPENROUTER AI ----------------
    console.log("Calling AI...");

    const prompt = `
Rewrite the blog professionally using this original content & references.
Make it SEO friendly, well structured, readable.
Do NOT copy. Create a refined unique rewritten article.

Original Article:
${original}

Reference Content:
${scrapedTexts.join("\n\n")}
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_KEY}`
        }
      }
    );

const improvedArticle =
  (response.data.choices[0].message.content || "AI failed...") +
  `\n\n\n###  Reference Sources\n` +
  blogLinks.map((l, i) => `${i+1}. ${l}`).join("\n");


    // ---------------- UPDATE DB ----------------
    await axios.put(`${API}/${article.id}`, {
      content: improvedArticle,
      is_updated: true,
      references: JSON.stringify(blogLinks)
    });

    console.log("AI Article Updated Successfully 🚀");
  }

  console.log("\nPHASE-2 PROCESS COMPLETED SUCCESSFULLY 🎉");
}

start();
