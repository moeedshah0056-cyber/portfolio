import { useState } from "react";
import { Code2, Layers, Cpu, Check, Terminal, FileCode2, Palette, Zap, Sparkles, Gauge } from "lucide-react";
import { skillsData } from "../data/portfolioData";
import LetterGlitch from "./LetterGlitch";

const COLOR_PRESETS = [
  {
    id: "cyan-emerald",
    name: "Cyber Cyan",
    colors: ['#2b4539', '#61dca3', '#61b3dc']
  },
  {
    id: "neon-purple",
    name: "Neon Violet",
    colors: ['#4c1d95', '#a855f7', '#ec4899']
  },
  {
    id: "matrix-green",
    name: "Matrix Green",
    colors: ['#003b00', '#008f11', '#00ff41']
  },
  {
    id: "electric-blue",
    name: "Electric Blue",
    colors: ['#1e3a8a', '#2563eb', '#60a5fa']
  }
];

export default function Skills() {
  const [activePreset, setActivePreset] = useState(COLOR_PRESETS[0]);
  const [glitchSpeed, setGlitchSpeed] = useState(50);
  const [centerVignette, setCenterVignette] = useState(false);
  const [outerVignette, setOuterVignette] = useState(true);
  const [smoothMode, setSmoothMode] = useState(true);
  const categories = [
    {
      title: "Languages",
      description: "Core web standards and programming syntax used in everyday development.",
      icon: <FileCode2 size={20} className="text-sky-400" />,
      items: skillsData.languages,
    },
    {
      title: "Frameworks & Tools",
      description: "Modern frontend ecosystems and build tooling for rapid, clean interfaces.",
      icon: <Layers size={20} className="text-blue-400" />,
      items: skillsData.frameworks,
    },
    {
      title: "Development Practices",
      description: "Key principles, workflows, and deployment methods applied across projects.",
      icon: <Cpu size={20} className="text-indigo-400" />,
      items: skillsData.practices,
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
            <Terminal size={14} />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tools and technologies I actually work with.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
            No exaggerated skill percentages or inflated metrics. Just clean, honest frontend tools and workflows I actively practice and build with.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Items List */}
                <div className="space-y-4">
                  {cat.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/90 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                          {skill.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive LetterGlitch Canvas Terminal from React Bits */}
        <div className="mt-14 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden transition-all duration-300">
          {/* Terminal Window Title Bar */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-slate-100/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800/90 gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/30 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/30 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/30 inline-block"></span>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">
                matrix-stream // letter-glitch.canvas
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                <Sparkles size={11} />
                <span>React Bits • LetterGlitch</span>
              </span>
            </div>
          </div>

          {/* Canvas Viewport */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
            <LetterGlitch
              glitchColors={activePreset.colors}
              glitchSpeed={glitchSpeed}
              centerVignette={centerVignette}
              outerVignette={outerVignette}
              smooth={smoothMode}
            />

            {/* Futuristic Overlay Badge */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
              <div className="text-center max-w-lg p-5 rounded-2xl bg-black/65 dark:bg-black/80 border border-white/10 backdrop-blur-md shadow-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono uppercase tracking-widest mb-2 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Interactive Glitch Matrix</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  Creative Frontend Engineering
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-mono leading-relaxed">
                  Real-time HTML5 2D Canvas rendering procedural letter transitions and radial illumination.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Controls Bar */}
          <div className="px-5 py-4 bg-slate-50/90 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            {/* Color Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Palette:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setActivePreset(preset)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      activePreset.id === preset.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Speed & Vignette Toggles */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Speed */}
              <button
                type="button"
                onClick={() => setGlitchSpeed((prev) => (prev === 30 ? 60 : prev === 60 ? 100 : 30))}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
              >
                Speed: {glitchSpeed === 30 ? "Fast (30ms)" : glitchSpeed === 60 ? "Normal (60ms)" : "Chill (100ms)"}
              </button>

              {/* Center Vignette */}
              <button
                type="button"
                onClick={() => setCenterVignette((prev) => !prev)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  centerVignette
                    ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                Center Glow: {centerVignette ? "ON" : "OFF"}
              </button>

              {/* Outer Vignette */}
              <button
                type="button"
                onClick={() => setOuterVignette((prev) => !prev)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  outerVignette
                    ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                Edge Vignette: {outerVignette ? "ON" : "OFF"}
              </button>

              {/* Smooth Transitions */}
              <button
                type="button"
                onClick={() => setSmoothMode((prev) => !prev)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  smoothMode
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                Smooth: {smoothMode ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
