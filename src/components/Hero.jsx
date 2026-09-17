import { ArrowDown, ArrowRight, Sparkles, MapPin, Mail, Eye } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import SplitFlapText from "./SplitFlapText";
import ElectricBorder from "./ElectricBorder";

export default function Hero() {
  const { theme } = useTheme();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle ambient lighting grid (developer aesthetic, crisp in light mode) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f060_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f060_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle blue accent glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability & Location Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.availability}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400 shadow-xs">
            <MapPin size={13} className="text-blue-600 dark:text-blue-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-blue-400 dark:via-sky-300 dark:to-blue-500">Moeed Shah</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 mb-5 max-w-3xl mx-auto">
          {personalInfo.role}
        </p>

        {/* Interactive React Bits SplitFlap Mechanical Display with ElectricBorder */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <ElectricBorder
            color={theme === 'dark' ? '#38bdf8' : '#2563eb'}
            speed={0.85}
            chaos={0.08}
            borderRadius={18}
            className="inline-block max-w-full"
          >
            <div className="inline-flex flex-col items-center px-4 py-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800/90 shadow-md backdrop-blur-md max-w-full">
              <div className="flex items-center gap-1.5 mb-2 text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>LIVE DISPATCH // CURRENT STATUS</span>
              </div>
              <div className="overflow-x-auto max-w-full px-1 py-1">
                <SplitFlapText
                  words={['FRONTEND DEV', 'REACT MAKER ', 'CLEAN CODER ', 'OPEN TO WORK']}
                  flipDuration={0.12}
                  stagger={0.05}
                  cycleDelay={2400}
                  flipsPerChar={6}
                  tileColor={theme === 'dark' ? '#0f172a' : '#1e293b'}
                  textColor={theme === 'dark' ? '#38bdf8' : '#f8fafc'}
                  tileRadius={6}
                  gap={5}
                  fontSize="clamp(16px, 3.8vw, 24px)"
                  padTo={12}
                  loop
                />
              </div>
            </div>
          </ElectricBorder>
        </div>

        {/* Natural, honest introductory paragraph */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.heroParagraph}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <Eye size={16} />
            <span>View My Work</span>
            <ArrowRight size={15} />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white border border-slate-200 dark:border-slate-800 text-sm font-semibold transition-all duration-200 shadow-xs"
          >
            <Mail size={16} className="text-blue-600 dark:text-blue-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Developer Tech Stack Pills (Clean, practical) */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/60 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-3">
            Core Frontend Stack & Toolkit
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
            {["React", "Tailwind CSS", "JavaScript (ES6+)", "Vite", "Responsive Design", "Git & GitHub"].map(
              (item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-md bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Subtle explore link */}
        <div className="mt-10">
          <a
            href="#skills"
            onClick={(e) => handleScrollTo(e, "skills")}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors group"
          >
            <span>Explore my skills</span>
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
