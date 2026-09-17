import { useState } from "react";
import { CheckCircle2, ShieldCheck, HeartHandshake, Snowflake, Sparkles, Wind, Gauge } from "lucide-react";
import { whyWorkWithMe } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import PixelSnow from "./PixelSnow";

const SNOW_COLORS = [
  { id: "ice", name: "Ice Blue", color: "#38bdf8" },
  { id: "white", name: "Pure White", color: "#ffffff" },
  { id: "cyan", name: "Cyan", color: "#06b6d4" },
  { id: "amber", name: "Gold Dust", color: "#fbbf24" },
];

export default function WhyWorkWithMe() {
  const { theme } = useTheme();
  const [activeColor, setActiveColor] = useState(SNOW_COLORS[0]);
  const [variant, setVariant] = useState("snowflake");
  const [speed, setSpeed] = useState(1.25);
  const [density, setDensity] = useState(0.3);
  const [direction, setDirection] = useState(125);

  return (
    <section className="py-20 border-t border-slate-200 dark:border-slate-900 bg-slate-100/60 dark:bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
            <HeartHandshake size={14} />
            <span>Collaboration Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What I bring to a project
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            No corporate buzzwords or inflated claims. Just an honest, disciplined work ethic and respect for clean frontend code.
          </p>
        </div>

        {/* Value Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMe.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive PixelSnow Shaders Showcase from React Bits */}
        <div className="mt-14 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden transition-all duration-300">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-slate-100/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800/90 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Snowflake size={14} className="animate-spin" />
              </div>
              <span className="text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold">
                three.js // pixel-snow.shader
              </span>
            </div>

            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
              <Sparkles size={11} />
              <span>React Bits • WebGL Three.js</span>
            </span>
          </div>

          {/* Interactive Canvas Viewport */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
            <PixelSnow
              color={activeColor.color}
              flakeSize={0.015}
              minFlakeSize={1.25}
              pixelResolution={180}
              speed={speed}
              density={density}
              direction={direction}
              brightness={1}
              variant={variant}
            />

            {/* Futuristic Overlay Badge */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
              <div className="text-center max-w-md p-5 rounded-2xl bg-black/60 dark:bg-black/75 border border-white/10 backdrop-blur-md shadow-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono uppercase tracking-widest mb-2 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
                  <span>Interactive Shader Sandbox</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  High-Performance Shaders
                </h4>
                <p className="text-xs text-slate-300 mt-1 font-mono leading-relaxed">
                  Real-time procedural GPU snow with ray-striding depth, wind vector physics, and custom flake geometry.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Controls Bar */}
          <div className="px-5 py-4 bg-slate-50/90 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            {/* Color Selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Color:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {SNOW_COLORS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveColor(c)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      activeColor.id === c.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Shape Variant */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Variant:</span>
              {["snowflake", "round", "square"].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium capitalize border transition-colors cursor-pointer ${
                    variant === v
                      ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Speed & Density */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSpeed((prev) => (prev === 0.75 ? 1.25 : prev === 1.25 ? 2.2 : 0.75))}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
              >
                Speed: {speed === 0.75 ? "0.75x (Gentle)" : speed === 1.25 ? "1.25x (Default)" : "2.2x (Storm)"}
              </button>

              <button
                type="button"
                onClick={() => setDensity((prev) => (prev === 0.15 ? 0.3 : prev === 0.3 ? 0.55 : 0.15))}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
              >
                Density: {density === 0.15 ? "Low" : density === 0.3 ? "Medium" : "Dense"}
              </button>

              <button
                type="button"
                onClick={() => setDirection((prev) => (prev === 125 ? 90 : prev === 90 ? 180 : prev === 180 ? 45 : 125))}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
              >
                <Wind size={12} />
                <span>Wind: {direction}°</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
