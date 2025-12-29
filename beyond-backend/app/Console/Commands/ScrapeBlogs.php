<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;
use App\Models\Article;

class ScrapeBlogs extends Command
{
    protected $signature = 'app:scrape-blogs';
    protected $description = 'Scrape 5 oldest BeyondChats blogs';

    public function handle()
    {
        $client = new Client([
            'base_uri' => 'https://beyondchats.com',
            'headers' => [
                'User-Agent' => 'Mozilla/5.0'
            ]
        ]);

        $url = "/blogs/";
        $html = $client->get($url)->getBody()->getContents();
        $crawler = new Crawler($html);

        $links = [];

        // Get blog links
        $crawler->filter('a')->each(function ($node) use (&$links) {
            $href = $node->attr('href');

            if (!$href) return;

            // Normalize to absolute URLs
            if (str_starts_with($href, '/')) {
                $href = "https://beyondchats.com" . $href;
            }

            // Only real blog posts
            if (
                str_contains($href, '/blogs/') &&
                !str_ends_with($href, '/blogs/') &&
                !str_contains($href, '?')
            ) {
                $links[] = $href;
            }
        });

        $links = array_unique($links);
        $links = array_slice($links, -5);   // 5 oldest

        if (count($links) === 0) {
            $this->error("No blog links found");
            return;
        }

        foreach ($links as $link) {
            try {
                $pageHtml = $client->get($link)->getBody()->getContents();
                $page = new Crawler($pageHtml);

                $title = $page->filter('h1')->first()->text('');

                // Try multiple selectors for content
                $content = '';
                if ($page->filter('.elementor-widget-container')->count()) {
                    $content = $page->filter('.elementor-widget-container')->text();
                } elseif ($page->filter('article')->count()) {
                    $content = $page->filter('article')->text();
                } else {
                    $content = $page->filter('body')->text();
                }

                Article::create([
                    'title' => trim($title),
                    'url' => $link,
                    'content' => trim($content)
                ]);

                $this->info("Saved: $title");

            } catch (\Exception $e) {
                $this->error("Failed for link: $link");
            }
        }

        $this->info("Scraping completed & articles saved!");
    }
}
