"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

const scenarios = [
  {
    id: 1,
    title: "Organization",
    description: "From a messy list to structured folders",
    beforeImage: "/images/comparison/before1.png",
    afterImage: "/images/comparison/after1.png",
    beforeLabel: "Before: Chaos",
    afterLabel: "After: Organized",
  },
  {
    id: 2,
    title: "Prompt Library",
    description: "Stop rewriting the same prompts",
    beforeImage: "/images/comparison/before2.png",
    afterImage: "/images/comparison/after2.png",
    beforeLabel: "Before: Notes App",
    afterLabel: "After: One Click",
  },
  {
    id: 3,
    title: "Search",
    description: "Find any conversation instantly",
    beforeImage: "/images/comparison/before3.png",
    afterImage: "/images/comparison/after3.png",
    beforeLabel: "Before: Endless Scroll",
    afterLabel: "After: Instant Find",
  },
  {
    id: 4,
    title: "Highlighting",
    description: "Mark what matters",
    beforeImage: "/images/comparison/before4.png",
    afterImage: "/images/comparison/after4.png",
    beforeLabel: "Before: Lost Info",
    afterLabel: "After: Highlighted",
  },
  {
    id: 5,
    title: "Trimming",
    description: "Keep long chats clean",
    beforeImage: "/images/comparison/before5.png",
    afterImage: "/images/comparison/after5.png",
    beforeLabel: "Before: Cluttered",
    afterLabel: "After: Focused",
  },
  {
    id: 6,
    title: "Themes",
    description: "Customize your workspace",
    beforeImage: "/images/comparison/before6.png",
    afterImage: "/images/comparison/after6.png",
    beforeLabel: "Before: Default",
    afterLabel: "After: Custom",
  },
];

export const BeforeAfterSlider = () => {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeScenario = scenarios[activeScenarioIndex];

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    // ... existing logic ...
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  // Add global event listeners for smoother dragging outside container
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const position =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const position =
        ((e.touches[0].clientX - containerRect.left) / containerRect.width) *
        100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    if (isDragging) {
      window.addEventListener("mouseup", handleGlobalMouseUp);
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("touchend", handleGlobalMouseUp);
      window.addEventListener("touchmove", handleGlobalTouchMove);
    }

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("touchend", handleGlobalMouseUp);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
    };
  }, [isDragging]);

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See the <span className="text-cyan-400">Difference</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            {activeScenario.description}
          </p>

          {/* Navigation Bullets */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {scenarios.map((scenario, index) => (
              <button
                key={scenario.id}
                onClick={() => {
                  setActiveScenarioIndex(index);
                  setSliderPosition(50); // Reset slider to center on switch
                }}
                className={`
                  flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 font-bold text-sm
                  ${
                    activeScenarioIndex === index
                      ? "bg-cyan-500 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-110"
                      : "bg-slate-800 border-white/10 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400"
                  }
                `}
              >
                {scenario.id}
              </button>
            ))}
          </div>

          {/* Active Scenario Title (Optional, for clarity) */}
          <div
            className="text-cyan-400 font-medium text-sm uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
            key={activeScenario.id}
          >
            {activeScenario.title}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full select-none cursor-ew-resize group"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* After Image (Base) */}
            <div className="absolute inset-0">
              <Image
                key={`after-${activeScenario.id}`} // Force re-render for animation
                src={activeScenario.afterImage}
                alt={activeScenario.afterLabel}
                fill
                className="object-cover object-left-top animate-in fade-in duration-500"
                draggable={false}
              />
              <div className="absolute top-4 right-4 bg-cyan-500/90 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                {activeScenario.afterLabel}
              </div>
            </div>

            {/* Before Image (Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden border-r-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] z-20"
              style={{ width: `${sliderPosition}%` }}
            >
              <Image
                key={`before-${activeScenario.id}`} // Force re-render for animation
                src={activeScenario.beforeImage}
                alt={activeScenario.beforeLabel}
                fill
                className="object-cover object-left-top animate-in fade-in duration-500"
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-slate-800/90 backdrop-blur text-slate-300 px-3 py-1 rounded-full text-sm font-bold shadow-lg border border-white/10">
                {activeScenario.beforeLabel}
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-transparent cursor-ew-resize z-30"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-xl border-4 border-slate-900 transition-transform group-hover:scale-110">
                <MoveHorizontal className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-slate-500 flex items-center justify-center gap-2">
            <MoveHorizontal className="w-4 h-4 animate-pulse" />
            <span>Drag the slider to compare</span>
          </div>
        </div>
      </div>
    </section>
  );
};
