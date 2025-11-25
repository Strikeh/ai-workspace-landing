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
    slug: "smart-thread-trimming",
    title: "Supercharge Your ChatGPT Performance: Introducing Smart Thread Trimming",
    excerpt:
      "Long ChatGPT conversations grinding your browser to a halt? Our new Smart Thread Trimming feature automatically hides older messages while keeping your most important content visible.",
    date: "Nov 25, 2025",
    readTime: "8 min read",
    category: "Updates",
    image: "/images/blog/thread-trimming-hero.png",
    content: `
      <div class="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8">
        <h3 class="text-xl font-bold text-cyan-100 mt-0 mb-3">TL;DR</h3>
        <p class="text-slate-300 m-0">
          Long ChatGPT conversations grinding your browser to a halt? Our new <strong>Smart Thread Trimming</strong> feature automatically hides older messages while keeping your most important content visible. Configure your perfect balance between performance and context, with intelligent preservation of highlights, system prompts, and more.
        </p>
      </div>

      <h2>The Problem: When Conversations Become Performance Killers</h2>
      <p>We've all been there. You're deep into an incredible brainstorming session with ChatGPT, 150 messages in, and suddenly everything starts to lag. Scrolling becomes choppy. New responses take forever to appear. Your browser tab is consuming gigabytes of RAM. The conversation quality hasn't dropped—your browser's performance has.</p>

      <p>Long AI conversations create a perfect storm of performance issues:</p>
      <ul>
        <li><strong>DOM Bloat:</strong> Every message adds dozens of HTML elements. By message 100, you're rendering thousands of nodes.</li>
        <li><strong>Memory Pressure:</strong> Each code block, image, and formatted response occupies memory that's never released.</li>
        <li><strong>Layout Thrashing:</strong> As new messages stream in, the browser constantly recalculates the layout of hundreds of previous messages.</li>
        <li><strong>Event Listener Overhead:</strong> Every interactive element (buttons, code copy icons, etc.) maintains event listeners that accumulate over time.</li>
      </ul>

      <p>For power users who routinely have 200+ message conversations, this isn't a minor annoyance—it's a productivity killer.</p>

      <h2>The Solution: Smart Thread Trimming</h2>
      <img src="/images/blog/thread-trimming-settings.png" alt="Thread Trimming Settings Panel" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <p>Our new <strong>Smart Thread Trimming</strong> feature takes a surgical approach to performance optimization. Instead of forcing you to start a new conversation or manually archive old messages, it automatically hides older content client-side while keeping everything that matters visible.</p>

      <h3>How It Works</h3>
      <ol>
        <li><strong>You Set Your Limit:</strong> Choose how many recent messages to display (10-100, in increments of 5). The default is 50 messages—enough context for most conversations without overwhelming your browser.</li>
        <li><strong>Automatic Hiding:</strong> As new messages arrive, older messages beyond your limit are automatically hidden from the DOM. They're not deleted—just hidden.</li>
        <li><strong>Smart Preservation:</strong> The system intelligently preserves your most recent N messages, all highlighted text, system prompts and tool messages (optional), and important conversation anchors.</li>
        <li><strong>Instant Performance:</strong> With 80-90% of message elements removed from the DOM, scrolling becomes buttery smooth, new responses appear instantly, and your browser stops begging for mercy.</li>
      </ol>

      <img src="/images/blog/trim-indicator-toolbar.png" alt="Trim Indicator Toolbar" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>Visual Feedback That Doesn't Get in Your Way</h2>
      <p>When thread trimming is active, you'll see a sleek, transparent banner at the top of your conversation:</p>
      <p class="text-center text-lg font-semibold text-cyan-300 my-6">"Trimmed: Showing 50/183 messages"</p>

      <p>This glassmorphism-styled indicator features:</p>
      <ul>
        <li><strong>Transparent blue gradient</strong> that blends beautifully with ChatGPT's interface</li>
        <li><strong>Professional backdrop blur</strong> for depth and readability</li>
        <li><strong>Message counter</strong> so you always know the full conversation size</li>
        <li><strong>Show All button</strong> for instant access to the complete thread when needed</li>
      </ul>

      <p>And here's the clever part: after you click "Show All" to view the entire conversation, the button transforms into a green <strong>"Re-enable Trimming"</strong> button. One click restores the performance optimization—no need to dig through settings.</p>

      <img src="/images/blog/bidirectional-toggle.png" alt="Bidirectional Toggle between Show All and Re-enable Trimming" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>Multiple Ways to Control Trimming</h2>
      <p>We built thread trimming to fit seamlessly into your workflow, with three ways to access controls:</p>

      <h3>1. Settings Panel</h3>
      <p>Navigate to <strong>Settings → Performance & Speed</strong> for full control:</p>
      <ul>
        <li><strong>Toggle:</strong> Enable/disable auto-trim</li>
        <li><strong>Message Limit Slider:</strong> Choose 10-100 messages (step by 5)</li>
        <li><strong>Preserve System Messages:</strong> Keep conversation context intact</li>
      </ul>

      <h3>2. Context Menu</h3>
      <p>Right-click anywhere on ChatGPT and navigate to <strong>AI Workspace</strong> for quick actions:</p>
      <ul>
        <li><strong>Toggle Thread Trimming:</strong> Enable/disable with one click</li>
        <li><strong>Show All Messages:</strong> Instantly expand the full conversation</li>
      </ul>

      <h3>3. Visual Toolbar</h3>
      <p>The trim indicator itself is interactive—just click the button to toggle between trimmed and full views.</p>

      <img src="/images/blog/context-menu-trimming.png" alt="Context Menu Integration for Thread Trimming" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>Intelligent Integration: Highlights Never Disappear</h2>
      <p>One of our proudest engineering achievements is how thread trimming <strong>seamlessly integrates with our Text Highlighting feature</strong> (released in v0.0.28).</p>

      <p>When you highlight important text in a conversation, those messages are automatically exempt from trimming—no matter how old they are. This means:</p>
      <ul>
        <li>✅ Your research notes stay visible</li>
        <li>✅ Code examples you're referencing remain accessible</li>
        <li>✅ Key insights from early in the conversation don't vanish</li>
        <li>✅ Collaborative workflows with saved context continue uninterrupted</li>
      </ul>

      <p>The system uses a sophisticated message detection algorithm that identifies highlighted content and preserves those messages even if they fall outside your configured limit. It's smart enough to understand that if you took the time to highlight something, it's worth keeping on screen.</p>

      <h2>Real-World Performance Impact</h2>
      <p>We tested thread trimming across various conversation lengths on a mid-range laptop (Intel i5, 8GB RAM):</p>

      <div class="overflow-x-auto my-8">
        <table class="min-w-full border-collapse">
          <thead>
            <tr class="border-b border-slate-700">
              <th class="text-left py-3 px-4 text-slate-300">Thread Length</th>
              <th class="text-left py-3 px-4 text-slate-300">Without Trimming</th>
              <th class="text-left py-3 px-4 text-slate-300">With Trimming</th>
              <th class="text-left py-3 px-4 text-slate-300">Improvement</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-slate-800">
              <td class="py-3 px-4">100 messages</td>
              <td class="py-3 px-4">Smooth</td>
              <td class="py-3 px-4">Smooth</td>
              <td class="py-3 px-4 text-slate-400">Negligible</td>
            </tr>
            <tr class="border-b border-slate-800">
              <td class="py-3 px-4">150 messages</td>
              <td class="py-3 px-4">Minor lag</td>
              <td class="py-3 px-4">Smooth</td>
              <td class="py-3 px-4 text-green-400">40% faster</td>
            </tr>
            <tr class="border-b border-slate-800">
              <td class="py-3 px-4">200 messages</td>
              <td class="py-3 px-4">Noticeable lag</td>
              <td class="py-3 px-4">Smooth</td>
              <td class="py-3 px-4 text-green-400">65% faster</td>
            </tr>
            <tr>
              <td class="py-3 px-4">300+ messages</td>
              <td class="py-3 px-4">Browser struggling</td>
              <td class="py-3 px-4">Smooth</td>
              <td class="py-3 px-4 text-green-400">80% faster</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Memory usage improvements are even more dramatic:</p>
      <ul>
        <li><strong>Before:</strong> 1.2GB RAM for a 250-message thread</li>
        <li><strong>After:</strong> 320MB RAM for the same thread (showing last 50 messages)</li>
        <li><strong>Savings:</strong> 73% reduction in memory footprint</li>
      </ul>

      <h2>Use Cases: Who Benefits Most?</h2>

      <h3>📊 Data Analysts & Researchers</h3>
      <p>Long analytical conversations with complex queries, tables, and visualizations? Thread trimming keeps your browser responsive while you work through multi-hour research sessions. Highlight key findings along the way—they'll stay visible automatically.</p>

      <h3>💻 Developers & Engineers</h3>
      <p>Debugging sessions that span 200+ messages with code snippets, error logs, and solutions? Keep your last 50 messages visible for immediate context while older troubleshooting attempts stay hidden but accessible.</p>

      <h3>📝 Writers & Content Creators</h3>
      <p>Iterative writing projects that involve dozens of revisions? Maintain performance as your brainstorming conversation grows to 300+ messages. Preserve highlighted quotes and ideas while trimming the exploratory tangents.</p>

      <h3>🎓 Students & Educators</h3>
      <p>Study sessions and tutoring conversations that naturally run long? Stay focused on recent material without browser lag. System prompts remain visible to preserve conversation tone and instructions.</p>

      <h3>🏢 Business Users</h3>
      <p>Strategic planning and brainstorming sessions that evolve over hours? Keep performance smooth across marathon conversations. Context menu quick access means non-technical users can toggle trimming effortlessly.</p>

      <h2>Technical Excellence: How We Built It</h2>
      <p>For developers and power users curious about the implementation, here's what makes thread trimming special:</p>

      <h3>Client-Side Architecture</h3>
      <p>Thread trimming runs entirely client-side via an <strong>injected script</strong> (<code>chatgpt-thread-trimmer.js</code>) that operates in the page context. This means zero latency, works offline, respects your privacy, and is compatible with ChatGPT's dynamic DOM updates.</p>

      <h3>MutationObserver with Debouncing</h3>
      <p>The trimmer uses a <strong>MutationObserver</strong> to watch for new messages as they stream in. With 300ms debounce logic, it applies trimming efficiently without thrashing during rapid message updates.</p>

      <h3>Smart Message Detection</h3>
      <p>The selector <code>[data-testid^="conversation-turn-"]</code> reliably identifies conversation messages across ChatGPT's UI updates. The system distinguishes between user messages, assistant responses, system prompts, and tool/plugin outputs.</p>

      <h3>State Synchronization</h3>
      <p>Settings changes broadcast via <code>window.postMessage</code> to ensure all active tabs update instantly. The <code>isTemporarilyDisabled</code> flag tracks "Show All" state independently from your global settings, giving you surgical control.</p>

      <h3>Glassmorphism Design</h3>
      <p>The visual indicator uses modern CSS with <code>backdrop-filter: blur(12px)</code> and transparent gradients for a premium, native feel that matches ChatGPT's aesthetic.</p>

      <h2>Privacy & Data Security</h2>
      <p>Thread trimming is designed with privacy as a core principle:</p>
      <ul>
        <li>✅ <strong>No Data Collection:</strong> Messages are hidden client-side; nothing is sent to our servers</li>
        <li>✅ <strong>No External Dependencies:</strong> Pure JavaScript with no third-party libraries</li>
        <li>✅ <strong>Fully Reversible:</strong> "Show All" instantly restores every message</li>
        <li>✅ <strong>No Message Deletion:</strong> Hidden messages remain in memory and can be re-rendered instantly</li>
        <li>✅ <strong>Transparent Operation:</strong> Settings clearly explain what's happening</li>
      </ul>

      <h2>Getting Started</h2>
      <p>Thread trimming is available now in <strong>AI Workspace v0.0.29</strong> for all users (Free and Pro).</p>

      <h3>Quick Setup (30 seconds)</h3>
      <ol>
        <li><strong>Open Settings:</strong> Click the AI Workspace icon → Settings</li>
        <li><strong>Navigate to Performance:</strong> Scroll to "Performance & Speed" section</li>
        <li><strong>Enable Auto-Trim:</strong> Toggle "Auto-Trim Long Threads"</li>
        <li><strong>Configure Your Limit:</strong> Adjust the slider (we recommend starting at 50)</li>
        <li><strong>Optional:</strong> Check "Preserve System Messages" to keep conversation context</li>
      </ol>

      <p>That's it! Your next long conversation will automatically benefit from smart trimming.</p>

      <div class="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 my-8">
        <h4 class="text-cyan-400 font-bold text-lg mb-2 mt-0">💡 Pro Tip: Try It First</h4>
        <p class="text-slate-300 m-0">
          Start a new ChatGPT conversation, enable trimming in settings, then have a longer-than-usual conversation (60+ messages). You'll notice the performance difference immediately—and you can always click "Show All" if you need to review earlier messages.
        </p>
      </div>

      <h2>What's Next: Future Enhancements</h2>
      <p>We're already planning improvements to thread trimming:</p>

      <h3>🎯 Coming Soon</h3>
      <ul>
        <li><strong>Keyboard Shortcut:</strong> Toggle trimming with Ctrl+Shift+T</li>
        <li><strong>Floating Menu Integration:</strong> Quick access from the quick-action menu</li>
        <li><strong>Per-Conversation Settings:</strong> Override global limit for specific conversations</li>
        <li><strong>Advanced Preservation Rules:</strong> Define custom rules for what to preserve (e.g., "always show messages with code blocks")</li>
      </ul>

      <h3>🔮 Under Consideration</h3>
      <ul>
        <li><strong>Smart Auto-Adjustment:</strong> AI-powered limit that adapts based on message complexity</li>
        <li><strong>Export Trimmed View:</strong> Save a lightweight version of long conversations</li>
        <li><strong>Multi-Platform Support:</strong> Extend to Claude, Grok, and other AI platforms</li>
      </ul>

      <h2>Conclusion: Performance Meets Intelligence</h2>
      <p>Long AI conversations shouldn't force you to choose between context and performance. With <strong>Smart Thread Trimming</strong>, you get both:</p>
      <ul>
        <li>🚀 <strong>Blazing fast performance</strong> even in 300+ message threads</li>
        <li>🧠 <strong>Intelligent preservation</strong> of highlights, system prompts, and recent context</li>
        <li>🎨 <strong>Beautiful, non-intrusive UI</strong> that feels native to ChatGPT</li>
        <li>🔧 <strong>Flexible controls</strong> via settings, context menu, and visual toolbar</li>
        <li>🔒 <strong>Complete privacy</strong> with client-side operation</li>
      </ul>

      <p>Try it today in <strong>AI Workspace v0.0.29</strong> and rediscover what it's like to have smooth, responsive AI conversations—no matter how long they run.</p>

      <p class="text-slate-400 italic mt-8">AI Workspace is the ultimate productivity companion for ChatGPT, Claude, and Grok. Free forever for personal use, with Pro features for power users.</p>
    `,
  },
  {
    slug: "text-highlighting-feature",
    title: "Introducing Text Highlighting: Never Lose Important Information",
    excerpt:
      "Mark important parts of AI responses and navigate between them effortlessly. Whether you're researching, learning, or managing projects, never lose track of crucial information again.",
    date: "Nov 25, 2025",
    readTime: "6 min read",
    category: "Updates",
    image: "/images/blog/highlight-hero.png",
    content: `
      <div class="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8">
        <p class="text-lg font-medium text-cyan-100 m-0">
          We're thrilled to announce one of our most requested features: Text Highlighting!
        </p>
        <p class="text-slate-300 mt-2 mb-0">
          Now you can highlight important parts of AI responses and navigate between them effortlessly. Whether you're researching, learning, or managing complex projects, this feature ensures you never lose track of crucial information.
        </p>
      </div>

      <h2>The Problem We're Solving</h2>
      <p>Have you ever scrolled through a long ChatGPT conversation looking for that one perfect answer? Or tried to remember which part of a 50-message thread contained the code snippet you needed?</p>
      <p>We've all been there. AI conversations can get long and overwhelming. Important insights get buried in lengthy responses, and finding them later becomes a frustrating game of scroll-and-search.</p>
      <p><strong>Not anymore.</strong></p>

      <h2>Highlight Anything, Anywhere</h2>
      <p>With our new highlighting system, you can mark any text in your AI conversations on ChatGPT, Claude, or Grok. Simply:</p>
      <ol>
        <li><strong>Select the text</strong> you want to remember</li>
        <li><strong>Press Ctrl+Shift+H</strong> or right-click and choose "AI Workspace → Highlight Selection"</li>
        <li><strong>Done!</strong> Your highlight is saved and will persist forever</li>
      </ol>

      <img src="/images/blog/highlight-creation.png" alt="Screenshot showing text selection and highlight creation in action" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <div class="bg-slate-800/50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-xl">
        <h4 class="text-cyan-400 font-bold text-lg mb-2 mt-0">💾 Your highlights survive everything</h4>
        <ul class="text-slate-300 m-0">
          <li>Page refreshes</li>
          <li>Browser restarts</li>
          <li>Extension updates</li>
          <li>Dynamic content changes</li>
          <li>Message streaming</li>
        </ul>
      </div>

      <h2>Navigate Like a Pro</h2>
      <p>Once you've highlighted important sections, a sleek Navigation Toolbar appears at the bottom of your screen showing:</p>
      <ul>
        <li><strong>Highlight counter</strong> (e.g., "2/4") - know exactly where you are</li>
        <li><strong>Previous/Next buttons</strong> - jump between highlights instantly</li>
        <li><strong>Clear All button</strong> - remove all highlights when you're done</li>
      </ul>

      <img src="/images/blog/navigation-toolbar.png" alt="Navigation toolbar showing previous/next buttons and highlight counter" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <p>The toolbar is smart too. It automatically hides when you navigate to chats without highlights, smoothly scrolls to bring each highlight into view, and updates in real-time as you add or remove highlights.</p>

      <h2>Visual Design That Works</h2>
      <p>We spent considerable time perfecting the visual design:</p>
      <ul>
        <li><strong>Inactive highlights</strong> use a subtle yellow background that doesn't distract from your reading flow</li>
        <li><strong>Active highlights</strong> (the one you're currently viewing) stand out with professional blue accent styling - soft blue background glow, subtle border shadow, and clean underline indicator</li>
      </ul>

      <img src="/images/blog/highlight-styles.png" alt="Comparison showing inactive vs active highlight styling" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>Multiple Ways to Access</h2>
      <p>We know everyone works differently, so we've provided two ways to create highlights:</p>
      
      <h3>Keyboard Shortcut</h3>
      <p>Power users can press <strong>Ctrl+Shift+H</strong> after selecting text for instant highlighting.</p>

      <h3>Context Menu</h3>
      <p>Prefer the mouse? Right-click your selected text and choose "AI Workspace → Highlight Selection" from the context menu.</p>

      <img src="/images/blog/context-menu.png" alt="Context menu showing AI Workspace submenu with Highlight Selection option" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>Real-World Use Cases</h2>
      <ul>
        <li><strong>📚 Research & Learning</strong> – Highlight key concepts while learning. Later, quickly review important points without rereading everything.</li>
        <li><strong>💼 Project Management</strong> – Mark action items and requirements during planning chats. Jump between them to create task lists.</li>
        <li><strong>🎓 Education</strong> – Teachers can highlight the best activities from AI-generated lesson plans.</li>
        <li><strong>✍️ Content Creation</strong> – Mark the best ideas during brainstorming sessions.</li>
        <li><strong>🔬 Technical Problem Solving</strong> – Highlight solutions and code snippets in long debugging sessions for quick reference.</li>
      </ul>

      <h2>Try It Today</h2>
      <p>The Text Highlighting System is available now in <strong>AI Workspace v0.0.28</strong> for all users - completely free!</p>
      <p>It works seamlessly across ChatGPT, Claude, and Grok.</p>

      <div class="bg-slate-800/50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-xl">
        <h4 class="text-cyan-400 font-bold text-lg mb-2 mt-0">🚀 Get Started in 3 Steps</h4>
        <ol class="text-slate-300 m-0">
          <li>Install/Update AI Workspace from the Chrome Web Store</li>
          <li>Select text in any AI conversation</li>
          <li>Press Ctrl+Shift+H or use the context menu</li>
        </ol>
      </div>

      <h2>What's Next?</h2>
      <p>This is just the beginning for our highlighting feature. We're already working on:</p>
      <ul>
        <li>🎨 <strong>Color options</strong> – different highlight colors for categorization</li>
        <li>📝 <strong>Highlight notes</strong> – add personal annotations to highlighted text</li>
        <li>🔍 <strong>Search highlights</strong> – find specific highlights across all conversations</li>
        <li>📊 <strong>Highlight badges</strong> – see which chats have highlights in the vault sidebar</li>
        <li>🏷️ <strong>Highlight tags</strong> – organize highlights by topic or project</li>
      </ul>

      <p class="text-slate-400 italic mt-8">Start highlighting and never lose important information again.</p>
    `,
  },
  {
    slug: "visual-gpt-project-management",
    title: "Visual GPT & Project Management: Find Conversations Instantly",
    excerpt:
      "Introducing GPT avatars and smart filtering in AI Workspace. Instantly identify which CustomGPT or Project was used in any conversation and filter your entire chat history with precision.",
    date: "Nov 25, 2025",
    readTime: "5 min read",
    category: "Updates",
    image: "/images/blog/gpt-project-overview.png",
    content: `
      <div class="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8">
        <p class="text-lg font-medium text-cyan-100 m-0">
          Managing hundreds of AI conversations just got a whole lot easier.
        </p>
        <p class="text-slate-300 mt-2 mb-0">
          We're excited to introduce a major visual and organizational upgrade to AI Workspace: comprehensive GPT and Project management with beautiful avatar displays and intelligent filtering. Now you can instantly identify which CustomGPT or Project was used in any conversation.
        </p>
      </div>

      <h2>🎨 What's New</h2>

      <h3>GPT & Project Avatars on Every Chat</h3>
      <p>Every conversation card now displays the avatar of the CustomGPT or Project that was used. No more guessing which GPT you were talking to!</p>
      <ul>
        <li><strong>Visual Recognition</strong> – See the profile picture of ChatGPT, DALL·E, Code Interpreter, or your custom GPTs</li>
        <li><strong>Project Icons</strong> – Project conversations show their distinctive avatars</li>
        <li><strong>Works Everywhere</strong> – Available in both grid and list view</li>
      </ul>

      <img src="/images/blog/chat-card-avatars-grid.png" alt="Chat cards in grid view showing GPT avatars" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h3>Smart Filtering System</h3>
      <p>Two new dropdown filters allow you to instantly narrow down your conversations:</p>
      
      <div class="bg-slate-800/50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-xl">
        <h4 class="text-cyan-400 font-bold text-lg mb-2 mt-0">🔍 Combined Filtering</h4>
        <p class="text-slate-300 m-0">
          Use both filters together for precise results. Example: "Show me all Nexus.io GPT conversations in the Marketing Project" — done in two clicks.
        </p>
      </div>

      <ul>
        <li><strong>CustomGPT Filter</strong> – Filter by any GPT you've used, dynamically updated as you create new chats</li>
        <li><strong>Project Filter</strong> – Filter by organizational Projects for team collaboration</li>
        <li><strong>Works with Search</strong> – Combine with existing search and category filters for surgical precision</li>
      </ul>

      <img src="/images/blog/toolbar-filters.png" alt="New filter dropdowns in the chat toolbar" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h3>Vault Sidebar Integration</h3>
      <p>The injected vault sidebar now also displays GPT and Project avatars for quick visual identification:</p>
      <ul>
        <li><strong>Hover Tooltips</strong> – See "Open GPT: [Name]" when you hover over avatars</li>
        <li><strong>Click to Navigate</strong> – Click any avatar to jump directly to that GPT or Project page</li>
        <li><strong>Smooth Animations</strong> – Hover effects for better interactivity</li>
      </ul>

      <img src="/images/blog/vault-sidebar-avatars.png" alt="Vault sidebar showing GPT avatars with hover effects" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>💡 Real-World Use Cases</h2>

      <h3>For Individual Users</h3>
      <p><strong>Scenario:</strong> "I used a custom Research GPT last week to analyze some data. Where did I save that conversation?"</p>
      <p><strong>Solution:</strong> Open the CustomGPT filter, select "Research GPT", and instantly see all related conversations.</p>

      <h3>For Teams & Projects</h3>
      <p><strong>Scenario:</strong> "Show me all conversations from the Q4 Marketing Campaign project."</p>
      <p><strong>Solution:</strong> Use the Project filter to isolate all project-related chats, regardless of which GPT was used.</p>

      <h3>For Power Users</h3>
      <p><strong>Scenario:</strong> "Find all conversations with the Code Interpreter GPT in the Backend Refactor project."</p>
      <p><strong>Solution:</strong> Combine both filters for surgical precision.</p>

      <h2>🚀 Getting Started</h2>
      <ol>
        <li><strong>Update AI Workspace</strong> – Make sure you're running version 0.0.26 or later</li>
        <li><strong>Sync Your Conversations</strong> – The extension will automatically enrich your existing conversations with GPT and Project metadata</li>
        <li><strong>Explore the Filters</strong> – Look for the two new dropdown filters in the toolbar and try combining them</li>
        <li><strong>Check the Vault Sidebar</strong> – Hover over avatars to see names, click to navigate</li>
      </ol>

      <img src="/images/blog/combined-filters.png" alt="Using both GPT and Project filters simultaneously" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>🎯 Key Benefits</h2>
      <ul>
        <li><strong>Faster Navigation</strong> – No need to open chats to see which GPT was used</li>
        <li><strong>Better Organization</strong> – Clear separation between Projects and CustomGPTs</li>
        <li><strong>Improved Workflow</strong> – Quick filtering saves time when managing hundreds of conversations</li>
        <li><strong>Enhanced Context</strong> – Tooltips and hover states provide immediate information</li>
      </ul>

      <h2>🔮 What's Next?</h2>
      <p>We're continuously improving AI Workspace's visual and organizational capabilities. Future enhancements may include custom avatar support, color coding, saved filter queries, and usage analytics.</p>
      
      <p class="text-slate-400 italic mt-8">This feature was developed in response to user feedback requesting better visual identification and filtering capabilities for CustomGPT conversations.</p>
    `,
  },
  {
    slug: "getting-started-nano-banana-pro",
    title: "Getting Started with Nano Banana Pro: A Step‑by‑Step Guide",
    excerpt:
      "Artificial intelligence is no longer just a tool for experimentation—it’s becoming a professional standard. Learn how to unlock 4K creativity with this guide.",
    date: "Nov 28, 2025",
    readTime: "6 min read",
    category: "Guides",
    image: "/images/blog/nano-banana-pro-guide-header.png",
    content: `
      <div class="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8">
        <p class="text-lg font-medium text-cyan-100 m-0">
          Artificial intelligence is no longer just a tool for experimentation—it’s becoming a professional standard.
        </p>
        <p class="text-slate-300 mt-2 mb-0">
          Nano Banana Pro is one of the most advanced AI image generation platforms available today, offering 4K resolution, accurate text rendering, and professional editing controls. If you’re ready to harness its full potential, here’s a practical guide to get you started.
        </p>
      </div>

      <h2>🖥 Step 1: Access Nano Banana Pro</h2>
      <p>Nano Banana Pro can be used through different interfaces:</p>
      <ul>
        <li><strong>Chat</strong> – Fast and simple, ideal for quick drafts.</li>
        <li><strong>Flow</strong> – Streamlined workflows for iterative projects.</li>
        <li><strong>API</strong> – Unlocks the full power of Nano Banana Pro, including 4K resolution and advanced customization.</li>
      </ul>
      
      <div class="bg-slate-800/50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-xl">
        <p class="text-slate-300 m-0">
          👉 <strong>Note:</strong> For professional results, the API route is recommended.
        </p>
      </div>

      <h2>✍️ Step 2: Craft Your Prompt</h2>
      <p>Your prompt is the foundation of your image. To get the best results:</p>
      <ul>
        <li><strong>Be specific:</strong> Instead of “a dog,” try “a golden retriever puppy sitting on a red blanket in sunlight.”</li>
        <li><strong>Add style cues:</strong> “cinematic lighting,” “watercolor illustration,” or “realistic photography.”</li>
        <li><strong>Use contextual details:</strong> Include mood, perspective, or environment.</li>
      </ul>

      <img src="/images/blog/nano-banana-pro-prompting.png" alt="Comparison of simple vs detailed prompt results" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>📸 Step 3: Add References</h2>
      <p>Nano Banana Pro allows you to upload multiple reference images (up to 8). This is crucial for:</p>
      <ul>
        <li><strong>Character consistency</strong> – Keep the same face or style across different images.</li>
        <li><strong>Brand identity</strong> – Ensure logos, fonts, and colors remain uniform.</li>
        <li><strong>Scene continuity</strong> – Maintain objects or environments across variations.</li>
      </ul>

      <h2>🎛 Step 4: Customize Settings</h2>
      <p>Here’s where Nano Banana Pro shines:</p>
      <ul>
        <li><strong>Resolution</strong> – Push up to 4K for professional‑grade visuals.</li>
        <li><strong>Aspect ratio</strong> – Choose formats like 16:9 for video thumbnails or 1:1 for social posts.</li>
        <li><strong>Camera controls</strong> – Adjust angles, depth of field, and lighting.</li>
        <li><strong>Style parameters</strong> – Fine‑tune realism, artistic flair, or experimental looks.</li>
      </ul>

      <h2>🔄 Step 5: Generate and Refine</h2>
      <p>Run your prompt and review the output.</p>
      <ul>
        <li>Use the built‑in editor to tweak colors, sharpness, or composition.</li>
        <li><strong>Iterate:</strong> small prompt changes can dramatically improve consistency.</li>
      </ul>

      <img src="/images/blog/nano-banana-pro-refinement.png" alt="Interface showing refinement tools in Nano Banana Pro" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>🌍 Step 6: Apply in Real Projects</h2>
      <p>Nano Banana Pro isn’t just for fun—it’s a professional tool.</p>
      <ul>
        <li><strong>Marketing teams</strong> can design campaign visuals in minutes.</li>
        <li><strong>Educators</strong> can create diagrams and explainers with accurate text.</li>
        <li><strong>Content creators</strong> can produce thumbnails, infographics, and social posts that stand out.</li>
        <li><strong>Designers</strong> can prototype ideas faster than traditional workflows.</li>
      </ul>

      <h2>⚡ Pro Tips</h2>
      <ul>
        <li>Use API access for the best quality.</li>
        <li>Keep prompts short but detailed—overly complex instructions can confuse the model.</li>
        <li>Save your favorite settings for consistency across projects.</li>
        <li>Experiment with multi‑image fusion to blend styles or concepts.</li>
      </ul>

      <h2>🎨 Final Thoughts</h2>
      <p>Nano Banana Pro is more than an AI image generator—it’s a creative ecosystem. By following these steps, you’ll move beyond casual experimentation into production‑ready design. Whether you’re building a brand, teaching a class, or creating content, Nano Banana Pro gives you the tools to produce visuals that are sharp, consistent, and professional.</p>
    `,
  },
  {
    slug: "nano-banana-pro-redefining-ai-image-creation",
    title: "Nano Banana Pro: Redefining AI Image Creation for Professionals",
    excerpt:
      "Built on Google’s Gemini 3 Pro technology, this tool isn’t just another image generator—it’s a professional‑grade platform designed to meet the growing demand for high‑quality, consistent, and customizable visuals.",
    date: "Nov 27, 2025",
    readTime: "5 min read",
    category: "AI Tools",
    image: "/images/blog/nano-banana-pro-header.png",
    content: `
      <div class="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8">
        <p class="text-lg font-medium text-cyan-100 m-0">
          Artificial intelligence has been steadily reshaping the creative industry.
        </p>
        <p class="text-slate-300 mt-2 mb-0">
          But with the release of Nano Banana Pro, the bar has been raised dramatically. Built on Google’s Gemini 3 Pro technology, this tool isn’t just another image generator—it’s a professional‑grade platform designed to meet the growing demand for high‑quality, consistent, and customizable visuals.
        </p>
      </div>

      <h2>🌟 What Makes Nano Banana Pro Different?</h2>
      <p>Unlike earlier AI models that struggled with resolution, text clarity, or consistency, Nano Banana Pro introduces several groundbreaking features:</p>
      <ul>
        <li><strong>Ultra‑HD 4K output</strong> – Perfect for print, marketing campaigns, and professional design projects.</li>
        <li><strong>Accurate text rendering</strong> – Create infographics, posters, and branded visuals with legible, multilingual text.</li>
        <li><strong>Multi‑reference consistency</strong> – Maintain character, object, or brand identity across multiple images.</li>
        <li><strong>Real‑time data integration</strong> – Generate visuals grounded in live information such as weather, sports, or market trends.</li>
        <li><strong>Professional editing controls</strong> – Adjust camera angles, lighting, depth of field, and color grading for studio‑quality results.</li>
      </ul>

      <img src="/images/blog/nano-banana-pro-interface.png" alt="Screenshot of Nano Banana Pro interface showing professional editing controls" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>🚀 Practical Applications</h2>
      <p>Nano Banana Pro isn’t just about pretty pictures—it’s about transforming workflows:</p>
      <ul>
        <li><strong>Marketing teams</strong> can generate consistent brand visuals across campaigns.</li>
        <li><strong>Content creators</strong> can design scroll‑stopping thumbnails, polished infographics, or dynamic social media posts in minutes.</li>
        <li><strong>Educators and businesses</strong> can produce diagrams, explainers, and presentations enriched with accurate text and visuals.</li>
        <li><strong>Photographers and designers</strong> can restore old photos, experiment with styles, or prototype ideas faster than ever.</li>
      </ul>

      <h2>🛠 How It Works</h2>
      <p>Using Nano Banana Pro is simple yet powerful:</p>
      <ol>
        <li><strong>Type a prompt</strong> – Describe the image you want.</li>
        <li><strong>Upload references</strong> – Add up to 8 images for style or character consistency.</li>
        <li><strong>Customize settings</strong> – Choose resolution, aspect ratio, and professional controls.</li>
        <li><strong>Generate and refine</strong> – Use the built‑in editor to tweak results until they match your vision.</li>
      </ol>

      <img src="/images/blog/nano-banana-pro-workflow.png" alt="Visual workflow diagram showing prompt to final 4K image generation" class="max-w-[85%] mx-auto rounded-xl border border-white/10 shadow-2xl my-8" />

      <h2>⚠️ Things to Keep in Mind</h2>
      <p>While Nano Banana Pro is revolutionary, there are trade‑offs:</p>
      <div class="bg-slate-800/50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-xl">
        <ul class="m-0">
          <li><strong>Learning curve</strong> – Advanced features like multi‑image fusion and editing controls may take time to master.</li>
          <li><strong>Resource demands</strong> – 4K generation requires more computing power and credits, which can be costly for casual users.</li>
          <li><strong>Consistency challenges</strong> – Although improved, complex prompts may still produce varied results, requiring iteration.</li>
        </ul>
      </div>

      <h2>🎨 Final Thoughts</h2>
      <p>Nano Banana Pro represents a turning point in AI‑driven creativity. By combining high‑resolution output, intelligent text rendering, and professional editing tools, it empowers creators to move beyond experimentation into production‑ready design.</p>
      <p>Whether you’re a marketer chasing brand consistency, a designer seeking precision, or a content creator looking for speed, Nano Banana Pro is poised to become an essential part of your toolkit.</p>
    `,
  },
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
