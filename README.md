# 🚀 OpenAI Realtime API - Voice Agents with Agents SDK

Build intelligent voice-powered agents using OpenAI's Realtime API and the Agents SDK. This project demonstrates a full-stack implementation of real-time voice conversations with AI.

---

## 🎯 Project Overview

This is a complete example of building voice agents that can:
- Engage in real-time voice conversations
- Execute tools and functions dynamically
- Maintain conversation context and history
- Handle interruptions gracefully
- Provide guardrails and safety controls

---

## 📁 Project Structure

```
openai-realtime-api-building-voice-agents-with-realtime-api-and-the-agents-sdk/
├── auth-server/              # Node.js token server for authentication
│   ├── server.js
│   └── package.json
├── mcp-server/               # Model Context Protocol server (Python)
│   ├── mcp_open_meteo/       # Weather data provider
│   │   ├── server.py
│   │   ├── tools.py
│   │   ├── api_client.py
│   │   └── ...
│   └── pyproject.toml
├── sandbox/                  # Next.js frontend application
│   ├── src/
│   │   ├── app/              # Next.js app router
│   │   ├── components/       # React components
│   │   │   ├── realtime/     # Realtime chat components
│   │   │   └── ui/           # Reusable UI components
│   │   ├── lib/              # Utilities and hooks
│   │   │   └── useRealtimeAgent.ts  # Main React hook
│   │   └── tools/            # Client-side tools
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

---

## ⚙️ Tech Stack

### Backend
- **Node.js** - Authentication server for token generation
- **Python** - MCP server for data sources and tool execution
- **OpenAI Realtime API** - Voice interaction engine

### Frontend
- **Next.js 15+** - React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Styling
- **WebRTC** - Audio streaming

### APIs & Services
- OpenAI Realtime API
- Model Context Protocol (MCP)
- Ephemeral token authentication

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.10+
- OpenAI API key
- npm or yarn package manager

### 1️⃣ Setup Authentication Server

```bash
cd auth-server
npm install

# Create .env file
echo "OPENAI_API_KEY=your_api_key_here" > .env

# Start auth server
npm start
```
Server runs on `http://localhost:3000` by default.

### 2️⃣ Setup MCP Server (Optional - for data tools)

```bash
cd mcp-server
pip install -e .

# Start MCP server
python -m mcp_open_meteo
```

### 3️⃣ Setup Frontend

```bash
cd sandbox
npm install

# Create .env.local
echo "NEXT_PUBLIC_AUTH_SERVER_URL=http://localhost:3000/token" > .env.local

# Start development server
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 🎤 Key Features

### Real-time Voice Interaction
- WebRTC audio streaming for low-latency conversations
- Automatic speech recognition
- Natural speech synthesis with multiple voice options

### Agent Configuration
- Customizable instructions and behavior
- Configurable voice output (cedar, marin, etc.)
- Configurable language model (gpt-realtime)

### Tool Integration
- Execute tools during conversations
- Function calling with parameter validation
- Tool result handling and context injection

### Safety & Guardrails
- Banned phrase detection
- Response filtering
- Error handling and recovery

### Session Management
- Connect/disconnect controls
- Audio mute toggle
- Conversation interruption
- Event logging and history

---

## 📚 Main Components

### React Hook: `useRealtimeAgent`

The primary hook for managing realtime sessions:

```typescript
const {
  connect,           // Establish connection
  disconnect,        // Close connection
  toggleMute,        // Toggle audio input
  interrupt,         // Stop current response
  connectionState,   // Current connection status
  isConnected,       // Boolean: connected state
  isMuted,           // Boolean: mute state
  error,             // Error message if any
  config             // Current configuration
} = useRealtimeAgent();
```

### Configuratio
Customize behavior via `RealtimeConfig`:

```typescript
{
  instructions: string;        // Agent system prompt
  voice: string;              // Output voice (cedar, marin, etc.)
  model: string;              // AI model (gpt-realtime)
  authUrl: string;            // Token server URL
  eventLogSize: number;       // History size
  greeting: string;           // Initial message
  bannedPhrases: string[];    // Blocked outputs
}
```

---

## 🛠️ API Endpoints

### Authentication Server
```
POST /token
  Returns: { client_secret: { value: "ephemeral-token" } }
```

### MCP Server Tools
- `get_weather` - Fetch weather data
- And more based on MCP configuration

---

## 📖 Usage Example

```typescript
import { useRealtimeAgent } from '@/lib/useRealtimeAgent';

export function VoiceAgent() {
  const {
    connect,
    disconnect,
    isConnected,
    error
  } = useRealtimeAgent();

  return (
    <div>
      <button onClick={connect}>
        {isConnected ? 'Disconnect' : 'Connect'}
      </button>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
```

---

## 🔐 Security

- **Ephemeral Tokens**: Short-lived API tokens generated by auth server
- **No API Keys in Frontend**: Keys stay server-side only
- **CORS**: Configure as needed for your domain
- **Input Validation**: Guardrails prevent problematic outputs

---

## 🐛 Troubleshooting

### Connection Fails
- Verify auth server is running
- Check `OPENAI_API_KEY` is set correctly
- Ensure `NEXT_PUBLIC_AUTH_SERVER_URL` matches auth server URL

### No Audio
- Check microphone permissions
- Verify audio input is enabled in browser
- Check browser console for WebRTC errors

### MCP Tools Not Working
- Verify MCP server is running
- Check MCP server logs for errors
- Validate tool configuration

---

## 📚 Resources

- [OpenAI Realtime API Docs](https://platform.openai.com/docs/guides/realtime-webrtc)
- [Agents SDK Documentation](https://openai.github.io/openai-agents-js/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Next.js Documentation](https://nextjs.org/docs)

---

## 📝 License

Licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🙋 Support

For issues and questions:
1. Check the troubleshooting section above
2. Review console logs and error messages
3. Verify all environment variables are set correctly
4. Check official documentation links

