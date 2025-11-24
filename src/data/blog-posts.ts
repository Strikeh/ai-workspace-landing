export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string; // In a real app, this might be MDX or HTML
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-local-privacy-matters-for-ai",
    title: "Why Local Privacy Matters for AI Workflows",
    excerpt:
      "Discover why keeping your prompts and conversation history stored locally is the safest way to use AI tools like ChatGPT and Claude.",
    date: "Nov 24, 2025",
    readTime: "5 min read",
    category: "Privacy",
    image: "/images/carousel/BrandBird 2025-11-20 19.46.23.png", // Reusing an existing image
    content: `
      <p>In the age of AI, data privacy has become a paramount concern for individuals and businesses alike. As we increasingly rely on Large Language Models (LLMs) like ChatGPT, Claude, and Grok for our daily tasks, the question of where our data goes is more important than ever.</p>
      
      <h2>The Cloud vs. Local Storage</h2>
      <p>Most browser extensions and third-party AI tools operate by sending your data to their own servers before it even reaches the AI provider. This "middleman" approach introduces significant security risks:</p>
      
      <img src="/images/blog/cloud-vs-local-diagram.png" alt="Diagram showing the difference between cloud storage and local storage data flow" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <ul>
        <li><strong>Data Breaches:</strong> If the extension's server is hacked, your prompts and history are exposed.</li>
        <li><strong>Data Selling:</strong> Some "free" tools monetize your usage patterns and content.</li>
        <li><strong>Latency:</strong> sending data back and forth adds unnecessary delay.</li>
      </ul>

      <h2>The AI Workspace Approach: 100% Local</h2>
      <p>AI Workspace takes a different approach. We believe your data belongs to you. That's why we built our extension with a "Local-First" architecture.</p>
      <p>When you save a prompt, organize a folder, or search your history in AI Workspace, everything happens directly on your device. Your data is stored in your browser's local storage (IndexedDB), encrypted and secure.</p>

      <img src="/images/blog/privacy-shield-concept.png" alt="3D illustration of a digital shield protecting data on a laptop" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>Benefits of Local Storage</h2>
      <ol>
        <li><strong>Security:</strong> Your sensitive prompts never leave your machine (except to go directly to OpenAI/Anthropic when you execute them).</li>
        <li><strong>Speed:</strong> Instant search and retrieval without waiting for server responses.</li>
        <li><strong>Ownership:</strong> You can export your entire workspace as a JSON file at any time. You are not locked in.</li>
      </ol>

      <p>Privacy isn't just a feature; it's a fundamental right. By choosing tools that respect your data sovereignty, you can leverage the power of AI without compromising your security.</p>
    `,
  },
  {
    slug: "top-5-productivity-hacks-chatgpt",
    title: "Top 5 Productivity Hacks for ChatGPT Power Users",
    excerpt:
      "Level up your AI game with these essential workflow tips, from prompt chaining to advanced folder organization.",
    date: "Nov 20, 2025",
    readTime: "7 min read",
    category: "Productivity",
    image: "/images/carousel/BrandBird 2025-11-20 12.01.36.png",
    content: `
      <p>ChatGPT is a powerful tool, but are you using it to its full potential? Most users barely scratch the surface of what's possible with proper organization and workflow management.</p>

      <h2>1. Build a Prompt Library</h2>
      <p>Stop typing the same context over and over. Create a "Master Prompt" for your most common tasks (e.g., "Coding Assistant", "Email Polisher") and save it in your AI Workspace vault. Use variables like <code>{{topic}}</code> to make them reusable.</p>

      <img src="/images/blog/prompt-library-interface.png" alt="Interface showing a well organized prompt library" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>2. Organize with Folders</h2>
      <p>A cluttered sidebar kills productivity. Group your chats by project, client, or topic. AI Workspace allows you to create nested folders, keeping your "Marketing" chats separate from your "Coding" chats.</p>

      <h2>3. Use Keyboard Shortcuts</h2>
      <p>Speed matters. Learn the shortcuts to quickly copy code blocks, regenerate responses, or switch between models. AI Workspace adds custom hotkeys to streamline these actions.</p>

      <img src="/images/blog/productivity-flow.png" alt="Abstract illustration of a streamlined workflow with glowing lines" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>4. Search Your History</h2>
      <p>We've all been there: "I know I asked ChatGPT about this three weeks ago..." Instead of scrolling endlessly, use a tool that indexes your conversation history for instant full-text search.</p>

      <h2>5. Chain Your Prompts</h2>
      <p>Break complex tasks into smaller steps. Instead of one massive prompt, use a sequence. Save this sequence as a "Workflow" in your notes to execute it consistently every time.</p>

      <p>By implementing these simple hacks, you can turn ChatGPT from a novelty into a serious productivity engine.</p>
    `,
  },
];
