"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Check,
  FileDown,
  Folder,
  FolderOpen,
  MessageSquare,
  Search,
  Sparkles,
  Tag,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

/*
 * Looping hero motion graphic: scattered chats (chaos) fly into folders,
 * a folder expands with tags, the prompt library pops up, and a chat gets
 * exported. Everything is drawn in a fixed stage and scaled to fit. The
 * `compact` layout is a smaller stage with fewer cards for phones/tablets.
 */

// Phases of one loop, in ms from loop start
const T = {
  organize: 2400,
  expand: 5200,
  prompt: 7400,
  export: 10600,
  reset: 13800,
  loop: 14800,
};

const PHASE = {
  chaos: 0,
  organize: 1,
  expand: 2,
  prompt: 3,
  export: 4,
  reset: 5,
} as const;

const folders = [
  { name: "Acme · Client", color: "#22d3ee", base: 21 },
  { name: "Marketing", color: "#3b82f6", base: 34 },
  { name: "Dev & Code", color: "#a78bfa", base: 27 },
  { name: "Research", color: "#34d399", base: 15 },
];
const LOOSE_CHATS = folders.reduce((sum, f) => sum + f.base, 0);

const platformColor = {
  gpt: "#10a37f",
  claude: "#d97757",
  grok: "#e2e8f0",
};

type Chat = {
  title: string;
  folder: number;
  platform: keyof typeof platformColor;
  x: number;
  y: number;
  r: number;
};

type Layout = {
  stage: { w: number; h: number };
  win: { x: number; y: number; w: number; h: number };
  card: { w: number; h: number };
  chats: Chat[];
};

const FULL: Layout = {
  stage: { w: 520, h: 600 },
  win: { x: 30, y: 70, w: 460, h: 440 },
  card: { w: 176, h: 58 },
  chats: [
    { title: "Acme Q3 launch plan", folder: 0, platform: "gpt", x: 18, y: 64, r: -9 },
    { title: "Rewrite landing copy", folder: 1, platform: "claude", x: 300, y: 36, r: 7 },
    { title: "Fix useEffect loop", folder: 2, platform: "gpt", x: 196, y: 150, r: -4 },
    { title: "Competitor pricing", folder: 3, platform: "grok", x: 336, y: 196, r: 12 },
    { title: "Acme proposal v2", folder: 0, platform: "claude", x: 6, y: 226, r: 6 },
    { title: "LinkedIn post ideas", folder: 1, platform: "gpt", x: 150, y: 286, r: -13 },
    { title: "SQL window functions", folder: 2, platform: "gpt", x: 330, y: 330, r: -6 },
    { title: "Summarize 3 papers", folder: 3, platform: "claude", x: 40, y: 384, r: 10 },
    { title: "Acme meeting notes", folder: 0, platform: "gpt", x: 214, y: 420, r: 4 },
    { title: "Email sequence draft", folder: 1, platform: "grok", x: 318, y: 470, r: -10 },
    { title: "Regex for emails", folder: 2, platform: "gpt", x: 12, y: 500, r: -3 },
    { title: "Market sizing EU", folder: 3, platform: "claude", x: 172, y: 520, r: 9 },
  ],
};

const COMPACT: Layout = {
  stage: { w: 360, h: 500 },
  win: { x: 0, y: 48, w: 360, h: 400 },
  card: { w: 160, h: 52 },
  chats: [
    { title: "Acme Q3 launch", folder: 0, platform: "gpt", x: 4, y: 56, r: -8 },
    { title: "Rewrite homepage", folder: 1, platform: "claude", x: 190, y: 78, r: 7 },
    { title: "Fix useEffect loop", folder: 2, platform: "gpt", x: 92, y: 158, r: -4 },
    { title: "Competitor pricing", folder: 3, platform: "grok", x: 196, y: 222, r: 10 },
    { title: "Acme proposal v2", folder: 0, platform: "claude", x: 0, y: 262, r: 6 },
    { title: "LinkedIn post ideas", folder: 1, platform: "gpt", x: 150, y: 316, r: -11 },
    { title: "SQL query help", folder: 2, platform: "gpt", x: 14, y: 376, r: 5 },
    { title: "Summarize 3 papers", folder: 3, platform: "claude", x: 190, y: 396, r: -7 },
  ],
};

const FLY_DELAY = 0.11; // stagger between cards, seconds
const FLY_DURATION = 0.75;

const acmeChats = [
  { title: "Q3 launch plan", tags: ["launch"] },
  { title: "Proposal v2", tags: ["sales", "urgent"] },
  { title: "Meeting notes", tags: ["weekly"] },
];

const prompts = [
  "Summarize for an exec",
  "Summarize as bullet points",
  "Summarize & draft a reply",
];
const PROMPT_QUERY = "summar";

const exportFormats = ["MD", "PDF", "JSON", "TXT"];

const steps = ["Chaos", "Organize", "Reuse", "Export"];
const stepForPhase = (phase: number) =>
  phase <= PHASE.chaos || phase === PHASE.reset
    ? 0
    : phase <= PHASE.expand
      ? 1
      : phase === PHASE.prompt
        ? 2
        : 3;

const spring = { type: "spring" as const, stiffness: 260, damping: 26 };

export default function HeroMotion({ compact = false }: { compact?: boolean }) {
  const L = compact ? COMPACT : FULL;
  const { stage, win: WIN, card, chats } = L;
  const totalChats = LOOSE_CHATS + chats.length;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { margin: "-10% 0px" });
  const [scale, setScale] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);

  const [cycle, setCycle] = useState(0);
  const [phase, setPhase] = useState<number>(PHASE.chaos);
  const [arrived, setArrived] = useState(0);
  const [typed, setTyped] = useState(0);
  const [promptInserted, setPromptInserted] = useState(false);
  const [exportStep, setExportStep] = useState(0);

  // Fit the fixed stage into whatever width the column gives us
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(1.15, entry.contentRect.width / stage.w));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [stage.w]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const running = inView && !reducedMotion;

  // Timeline: schedule every beat of one loop, then bump `cycle` to repeat
  useEffect(() => {
    if (reducedMotion) {
      setPhase(PHASE.expand);
      setArrived(chats.length);
      return;
    }
    if (!running) return;

    setPhase(PHASE.chaos);
    setArrived(0);
    setTyped(0);
    setPromptInserted(false);
    setExportStep(0);

    const timers: number[] = [];
    const at = (ms: number, fn: () => void) =>
      timers.push(window.setTimeout(fn, ms));

    at(T.organize, () => setPhase(PHASE.organize));
    chats.forEach((_, i) => {
      const landMs =
        T.organize + (0.35 + i * FLY_DELAY + FLY_DURATION * 0.85) * 1000;
      at(landMs, () => setArrived((n) => n + 1));
    });
    at(T.expand, () => setPhase(PHASE.expand));
    at(T.prompt, () => setPhase(PHASE.prompt));
    for (let i = 1; i <= PROMPT_QUERY.length; i++) {
      at(T.prompt + 700 + i * 110, () => setTyped(i));
    }
    at(T.prompt + 2300, () => setPromptInserted(true));
    at(T.export, () => setPhase(PHASE.export));
    at(T.export + 500, () => setExportStep(1));
    at(T.export + 1500, () => setExportStep(2));
    at(T.export + 2000, () => setExportStep(3));
    at(T.reset, () => setPhase(PHASE.reset));
    at(T.loop, () => setCycle((c) => c + 1));

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [running, reducedMotion, cycle, chats]);

  const windowVisible = phase >= PHASE.organize && phase < PHASE.reset;
  const cardsInFolders = windowVisible;
  const expanded = phase >= PHASE.expand && phase < PHASE.reset;
  const step = stepForPhase(phase);

  const folderCount = (f: number) =>
    folders[f].base +
    chats.slice(0, arrived).filter((c) => c.folder === f).length;

  return (
    <div
      ref={wrapperRef}
      className="relative w-full select-none"
      style={{ height: stage.h * scale }}
      aria-hidden="true"
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: stage.w,
          height: stage.h,
          transform: `scale(${scale})`,
        }}
      >
        {/* Backdrop glow + grid */}
        <div
          className="absolute inset-0 rounded-[32px] opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 45%, rgba(34,211,238,0.18) 0%, rgba(59,130,246,0.08) 45%, transparent 75%)",
          }}
        />
        <div className="hm-grid absolute inset-0 rounded-[32px]" />

        {/* Status chip */}
        <div className="absolute top-[18px] h-8" style={{ left: WIN.x }}>
          <AnimatePresence mode="wait">
            {windowVisible ? (
              <motion.div
                key="calm"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300"
              >
                <Check className="h-3.5 w-3.5" />4 folders · {totalChats} chats · 0
                lost
              </motion.div>
            ) : (
              <motion.div
                key="chaos"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-1.5 text-xs font-semibold text-rose-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-400" />
                </span>
                {LOOSE_CHATS} chats · where was that one again?
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Workspace window */}
        <motion.div
          className="absolute overflow-hidden rounded-2xl border border-white/10 bg-slate-900/75 shadow-[0_30px_80px_-20px_rgba(6,182,212,0.35)] backdrop-blur-xl"
          style={{ left: WIN.x, top: WIN.y, width: WIN.w, height: WIN.h }}
          initial={false}
          animate={
            windowVisible
              ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, scale: 0.92, y: 16, filter: "blur(6px)" }
          }
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <BorderBeam
            size={140}
            duration={7}
            colorFrom="#22d3ee"
            colorTo="#3b82f6"
          />

          {/* Header */}
          <div className="flex h-12 items-center gap-3 border-b border-white/5 px-4">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <span className="text-[13px] font-semibold text-slate-100">
              AI Workspace
            </span>
            <div
              className={`ml-auto flex h-7 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 text-[11px] text-slate-400 ${compact ? "w-28" : "w-44"}`}
            >
              <Search className="h-3.5 w-3.5" />
              {compact ? "Search…" : `Search ${totalChats} chats…`}
            </div>
          </div>

          {/* Folder tree */}
          <div className="flex flex-col gap-2 p-4">
            {folders.map((folder, f) => (
              <motion.div key={folder.name} layout transition={spring}>
                <FolderRow
                  folder={folder}
                  count={folderCount(f)}
                  open={f === 0 && expanded}
                  pulseKey={`${cycle}-${folderCount(f)}`}
                  active={phase === PHASE.organize}
                />
                <AnimatePresence>
                  {f === 0 && expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="ml-7 mt-2 flex flex-col gap-1.5 border-l border-cyan-400/20 pl-3">
                        {acmeChats.map((chat, i) => (
                          <motion.div
                            key={chat.title}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + i * 0.12 }}
                            className={`relative flex h-[34px] items-center gap-2 rounded-lg px-2.5 text-[12px] transition-colors duration-300 ${
                              i === 1 && phase === PHASE.export
                                ? "bg-cyan-400/15 text-white ring-1 ring-cyan-400/50"
                                : "bg-white/[0.03] text-slate-300"
                            }`}
                          >
                            <MessageSquare className="h-3.5 w-3.5 text-slate-500" />
                            {chat.title}
                            <span className="ml-auto flex gap-1">
                              {chat.tags.map((tag, t) => (
                                <motion.span
                                  key={tag}
                                  initial={{ opacity: 0, scale: 0.6 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    delay: 0.5 + i * 0.12 + t * 0.1,
                                    ...spring,
                                  }}
                                  className="flex items-center gap-1 rounded-full bg-cyan-400/10 px-1.5 py-0.5 text-[10px] font-medium text-cyan-300"
                                >
                                  <Tag className="h-2.5 w-2.5" />
                                  {tag}
                                </motion.span>
                              ))}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Prompt library palette */}
          <AnimatePresence>
            {phase === PHASE.prompt && (
              <motion.div
                key="palette-scrim"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 top-12 bg-slate-950/50 backdrop-blur-[2px]"
              />
            )}
            {phase === PHASE.prompt && (
              <motion.div
                key="palette"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={spring}
                className="absolute bottom-5 left-5 right-5 overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-black/60"
              >
                <div className="flex items-center gap-2 border-b border-white/5 px-3.5 py-3 text-[13px]">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono text-cyan-300">/</span>
                  <span className="text-slate-100">
                    {PROMPT_QUERY.slice(0, typed)}
                  </span>
                  <span className="hm-caret -ml-1 h-4 w-[2px] bg-cyan-300" />
                  <span className="ml-auto rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-400">
                    Prompt library
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  {promptInserted ? (
                    <motion.div
                      key="inserted"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={spring}
                      className="flex items-center gap-2 px-3.5 py-5 text-[13px] font-semibold text-emerald-300"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      Prompt inserted into ChatGPT
                    </motion.div>
                  ) : (
                    <motion.ul key="list" exit={{ opacity: 0 }} className="p-1.5">
                      {prompts.map((prompt, i) => (
                        <motion.li
                          key={prompt}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{
                            opacity: typed >= 3 ? 1 : 0.35,
                            y: 0,
                          }}
                          transition={{ delay: 0.2 + i * 0.08 }}
                          className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] ${
                            i === 0 && typed === PROMPT_QUERY.length
                              ? "bg-cyan-400/15 text-white"
                              : "text-slate-400"
                          }`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
                          {prompt}
                          {i === 0 && typed === PROMPT_QUERY.length && (
                            <span className="ml-auto text-[10px] text-slate-400">
                              ↵ Enter
                            </span>
                          )}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Export menu + toast */}
          <AnimatePresence>
            {phase === PHASE.export && exportStep >= 1 && (
              <motion.div
                key="export-menu"
                initial={{ opacity: 0, x: 16, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={spring}
                className="absolute right-4 top-[150px] w-[150px] rounded-xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl shadow-black/60"
              >
                <div className="mb-1.5 flex items-center gap-1.5 px-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  <FileDown className="h-3 w-3" /> Export as
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {exportFormats.map((format, i) => (
                    <motion.div
                      key={format}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.08, ...spring }}
                      className={`rounded-md py-1.5 text-center text-[11px] font-bold transition-all duration-300 ${
                        i === 0 && exportStep >= 2
                          ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/40"
                          : "bg-white/5 text-slate-300"
                      }`}
                    >
                      {format}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            {phase === PHASE.export && exportStep >= 3 && (
              <motion.div
                key="export-toast"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={spring}
                className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-3 backdrop-blur-md"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/20">
                  <Check className="h-4 w-4 text-emerald-300" />
                </span>
                <div className="leading-tight">
                  <div className="text-[13px] font-semibold text-white">
                    acme-proposal-v2.md
                  </div>
                  <div className="text-[11px] text-emerald-300/80">
                    Exported · 2,418 words · with highlights
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Flying document during export */}
        <AnimatePresence>
          {phase === PHASE.export && exportStep >= 2 && (
            <motion.div
              key={`doc-${cycle}`}
              className="absolute flex h-12 w-10 items-center justify-center rounded-md border border-cyan-300/60 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 text-[9px] font-bold text-white shadow-lg shadow-cyan-500/40"
              style={{ left: WIN.x + WIN.w - 110, top: WIN.y + 190 }}
              initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.4, 1, 1, 0.6],
                x: [0, 20, 60, 90],
                y: [0, -60, -150, -220],
                rotate: [0, -8, 6, 12],
              }}
              transition={{ duration: 1.3, ease: "easeOut" }}
            >
              .MD
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat cards */}
        {chats.map((chat, i) => {
          const target = folderTarget(L, chat.folder);
          const order = cardsInFolders ? i : chats.length - 1 - i;
          return (
            <motion.div
              key={chat.title}
              className="absolute left-0 top-0"
              style={{ width: card.w, height: card.h, zIndex: 20 + i }}
              initial={{
                x: chat.x,
                y: chat.y + 40,
                rotate: chat.r,
                opacity: 0,
                scale: 0.9,
              }}
              animate={
                cardsInFolders
                  ? {
                      x: target.x,
                      y: target.y,
                      rotate: 0,
                      scale: 0.16,
                      opacity: 0,
                    }
                  : { x: chat.x, y: chat.y, rotate: chat.r, scale: 1, opacity: 1 }
              }
              transition={{
                delay: (cardsInFolders ? 0.35 : 0.05) + order * FLY_DELAY * (cardsInFolders ? 1 : 0.5),
                duration: FLY_DURATION,
                ease: [0.65, 0, 0.35, 1],
                opacity: {
                  delay:
                    (cardsInFolders ? 0.35 + FLY_DURATION * 0.55 : 0.05) +
                    order * FLY_DELAY * (cardsInFolders ? 1 : 0.5),
                  duration: cardsInFolders ? FLY_DURATION * 0.45 : 0.4,
                },
              }}
            >
              <div
                className="hm-float h-full w-full"
                style={{
                  animationDuration: `${5 + (i % 4)}s`,
                  animationDelay: `${-i * 0.7}s`,
                }}
              >
                <ChatCard title={chat.title} platform={chat.platform} />
              </div>
            </motion.div>
          );
        })}

        {/* Step indicator */}
        <div
          className="absolute bottom-0 flex gap-3"
          style={{ left: WIN.x, right: stage.w - WIN.x - WIN.w }}
        >
          {steps.map((label, i) => (
            <div key={label} className="flex-1">
              <div className="relative h-1 overflow-hidden rounded-full bg-white/10">
                {i === step && running ? (
                  <motion.div
                    key={`${cycle}-${i}`}
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: stepDuration(i) / 1000,
                      ease: "linear",
                    }}
                  />
                ) : (
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                    style={{ width: i < step || !running ? "100%" : "0%" }}
                  />
                )}
              </div>
              <div
                className={`mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                  i === step ? "text-cyan-300" : "text-slate-500"
                }`}
              >
                {!compact && (
                  <span className="mr-1.5 font-mono text-slate-600">
                    0{i + 1}
                  </span>
                )}
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function stepDuration(step: number) {
  switch (step) {
    case 0:
      return T.organize;
    case 1:
      return T.prompt - T.organize;
    case 2:
      return T.export - T.prompt;
    default:
      return T.reset - T.export;
  }
}

// Where a card has to land so its centre hits the folder icon
function folderTarget({ win, card }: Layout, folder: number) {
  const rowTop = win.y + 48 + 16; // header + body padding
  const rowCy = rowTop + folder * 50 + 21;
  const iconCx = win.x + 16 + 12 + 14;
  return { x: iconCx - card.w / 2, y: rowCy - card.h / 2 };
}

function FolderRow({
  folder,
  count,
  open,
  pulseKey,
  active,
}: {
  folder: (typeof folders)[number];
  count: number;
  open: boolean;
  pulseKey: string;
  active: boolean;
}) {
  const Icon = open ? FolderOpen : Folder;
  return (
    <div className="relative flex h-[42px] items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3">
      <motion.span
        key={pulseKey}
        initial={active ? { scale: 1.35 } : false}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
        className="flex h-7 w-7 items-center justify-center rounded-lg"
        style={{
          background: `${folder.color}22`,
          boxShadow: active ? `0 0 18px ${folder.color}55` : "none",
        }}
      >
        <Icon className="h-4 w-4" style={{ color: folder.color }} />
      </motion.span>
      <span className="text-[13px] font-medium text-slate-100">
        {folder.name}
      </span>
      <span
        className="ml-auto min-w-[28px] rounded-full px-2 py-0.5 text-center text-[11px] font-semibold tabular-nums"
        style={{ background: `${folder.color}1f`, color: folder.color }}
      >
        {count}
      </span>
    </div>
  );
}

function ChatCard({
  title,
  platform,
}: {
  title: string;
  platform: keyof typeof platformColor;
}) {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-1.5 rounded-xl border border-white/15 bg-slate-800/70 px-3 shadow-xl shadow-black/40 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <span
          className="h-2 w-2 flex-shrink-0 rounded-full"
          style={{ background: platformColor[platform] }}
        />
        <span className="truncate text-[12px] font-semibold text-slate-100">
          {title}
        </span>
      </div>
      <div className="flex gap-1.5 pl-4">
        <span className="h-1.5 w-16 rounded-full bg-white/15" />
        <span className="h-1.5 w-10 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
