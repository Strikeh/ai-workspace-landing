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
    slug: "gemini-3-pro-future-of-ai",
    title: "Gemini 3 Pro: The Next Leap in Multimodal AI",
    excerpt:
      "Explore the capabilities of Gemini 3 Pro and how it redefines reasoning, coding, and multimodal interaction.",
    date: "Nov 26, 2025",
    readTime: "4 min read",
    category: "AI News",
    image: "/images/blog/gemini-3-pro-header.png",
    content: `
      <div class="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8">
        <p class="text-lg font-medium text-cyan-100 m-0">
          The AI landscape is shifting beneath our feet.
        </p>
        <p class="text-slate-300 mt-2 mb-0">
          Just when we thought we understood the limits of Large Language Models, Google DeepMind introduces Gemini 3 Pro. It's not just an iteration; it's a fundamental step forward in how AI perceives and reasons about the world.
        </p>
      </div>

      <h2>Beyond Text: Native Multimodality</h2>
      <p>Gemini 3 Pro isn't just a text processor. It's natively multimodal from the ground up. It sees video, hears audio, and understands code with a fluidity that mimics human perception.</p>
      <p>Unlike previous models that "patched" vision onto a language core, Gemini 3 Pro processes all inputs simultaneously. This means you can show it a video of a coding error, and it understands the context instantly.</p>

      <img src="/images/blog/gemini-multimodal-stream.png" alt="Abstract visualization of code, video, and audio merging into a single stream of light" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>Reasoning at Scale</h2>
      <p>The "Pro" moniker signifies a balance of performance and cost, but Gemini 3 Pro punches above its weight. Its ability to handle complex reasoning tasks—breaking down multi-step problems without losing the thread—is a game changer for developers and power users.</p>
      
      <div class="bg-slate-800/50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-xl">
        <h4 class="text-cyan-400 font-bold text-lg mb-2 mt-0">🚀 Performance Boost</h4>
        <p class="text-slate-300 m-0">
          Early benchmarks show a 40% improvement in complex coding tasks compared to the previous generation, with significantly lower latency.
        </p>
      </div>

      <h2>The Agentic Future</h2>
      <p>This model is designed for action. With improved function calling and tool use, Gemini 3 Pro is the engine for the next generation of AI Agents. It doesn't just answer questions; it gets work done.</p>
      <p>Imagine an AI that can:</p>
      <ul>
        <li>Plan a travel itinerary and book the flights.</li>
        <li>Debug a codebase and open a Pull Request.</li>
        <li>Analyze a financial report and generate a slide deck.</li>
      </ul>

      <img src="/images/blog/gemini-agentic-workflow.png" alt="Minimal isometric illustration of a digital assistant organizing files and executing tasks" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>Conclusion</h2>
      <p>Gemini 3 Pro represents the future we've been waiting for—an AI that is not just a chatbot, but a true collaborative partner. As we integrate these capabilities into tools like AI Workspace, the gap between idea and execution becomes smaller than ever.</p>
    `,
  },
  {
    slug: "how-to-create-custom-gpt",
    title: "How to Create Your Own Custom GPT in Minutes",
    excerpt:
      "There is a simple trick inside ChatGPT that most overlook. Learn how to build your own AI assistant in 5 easy steps—no coding required.",
    date: "Nov 25, 2025",
    readTime: "3 min read",
    category: "Guides",
    image: "/images/blog/custom-gpt-creation.png",
    content: `
      <div class="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8">
        <p class="text-lg font-medium text-cyan-100 m-0">
          Most people don't realise this 👇
        </p>
        <p class="text-slate-300 mt-2 mb-0">
          There is a simple trick inside ChatGPT that most overlook: You can create your own custom GPT in minutes. No coding, no setup, no technical steps.
        </p>
      </div>

      <p>Here’s how to do it:</p>

      <h2>1. Go to GPTs → Create</h2>
      <p>Open ChatGPT on the web, click <strong>GPTs</strong> in the sidebar, then hit <strong>Create</strong>.</p>

      <h2>2. Customise your GPT</h2>
      <ul>
        <li>Give it a name.</li>
        <li>Write a short description.</li>
        <li>Add instructions so it behaves the way you want.</li>
      </ul>

      <h2>3. Train it</h2>
      <ul>
        <li>Upload background files.</li>
        <li>Set rules and constraints.</li>
        <li>Define the tone and style of its outputs.</li>
        <li>Test it with a few examples.</li>
      </ul>

      <img src="/images/blog/custom-gpt-creation.png" alt="Interface showing the configuration screen of a custom GPT" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>4. Refine it</h2>
      <p>If you want to change anything, click <strong>Edit GPT</strong> and adjust the behaviour.</p>

      <div class="bg-slate-800/50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-xl">
        <h4 class="text-cyan-400 font-bold text-lg mb-2 mt-0">💡 Pro Tip</h4>
        <p class="text-slate-300 m-0">
          You can update your custom GPT at any time. As you use it, you'll notice areas for improvement. Just go back to "Edit GPT" and refine the instructions.
        </p>
      </div>

      <h2>5. Use it</h2>
      <p>That is it. You have just built your own AI assistant.</p>

      <p class="text-center italic text-slate-400 mt-12">
        Want a bespoke custom GPT created? <a href="mailto:contact@aiworkspace.com">Send me a message</a>.
      </p>
    `,
  },
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
