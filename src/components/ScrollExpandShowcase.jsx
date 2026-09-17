import { useState } from "react";
import { Sparkles, ArrowDown, ExternalLink, Layers, Eye, Smartphone, Monitor } from "lucide-react";
import ScrollExpand from "./ScrollExpand";

export default function ScrollExpandShowcase() {
  const [mode, setMode] = useState("window"); // "window" or "container"

  return (
    <section id="showcase" className="relative w-full border-t border-slate-200 dark:border-slate-900 bg-slate-900 text-white overflow-hidden">
      {/* Mode Switcher Banner */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-semibold text-blue-400 mb-2">
            <Sparkles size={13} />
            <span>React Bits • Kinetic ScrollExpand</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Cinematic Scroll Media Expansion
          </h2>
        </div>

        {/* Mode Toggle Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-800/80 border border-slate-700/80 rounded-xl shadow-xs">
          <button
            type="button"
            onClick={() => setMode("window")}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              mode === "window"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor size={14} />
            <span>Page Scroll Mode</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("container")}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              mode === "container"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone size={14} />
            <span>Embedded Scroller</span>
          </button>
        </div>
      </div>

      {mode === "window" ? (
        /* Full Window Scroll Expansion */
        <div className="w-full">
          <ScrollExpand
            src="/showcase-hero.jpg"
            alt="Frontend Architecture Dashboard Showcase"
            title="BUILT TO SCALE"
            scrollHint="Scroll to expand frame ↓"
            useWindowScroll={true}
            startWidth={46}
            startHeight={60}
            startRadius={28}
            endRadius={0}
            mediaZoom={1.35}
            scrollDistance={1.0}
            holdDistance={0.35}
            overlayScrim={0.55}
          >
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
                <span>Frontend Systems Architecture</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
                Every Pixel, Everywhere
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-xl mx-auto drop-shadow">
                The frame smoothly opens up as you scroll and hands the whole stage to your media. Handcrafted with responsive clip-paths, continuous easing, and zero layout shift.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-lg"
                >
                  View Featured Projects
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 text-xs font-semibold backdrop-blur-md transition-colors shadow-lg"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </ScrollExpand>
        </div>
      ) : (
        /* Container Scroller Mode */
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="p-4 sm:p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
            <div className="text-center mb-4">
              <span className="text-xs text-slate-400">
                Scroll inside the container below to drive the frame expansion:
              </span>
            </div>
            <div style={{ height: "540px", borderRadius: "20px", overflow: "hidden", position: "relative" }}>
              <ScrollExpand
                src="/showcase-hero.jpg"
                alt="Product hero"
                title="BUILT TO SCALE"
                scrollHint="Scroll inside ↓"
                useWindowScroll={false}
                mediaZoom={1.35}
                startWidth={45}
                startHeight={60}
                startRadius={24}
                overlayScrim={0.5}
              >
                <div className="max-w-md mx-auto px-4 text-center">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                    Every Pixel, Everywhere
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                    The frame opens up as you scroll and hands the whole stage to your media.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-md"
                  >
                    Connect With Me
                  </a>
                </div>
              </ScrollExpand>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
