import { GraduationCap, BookOpen, Compass, Code, CheckCircle, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
            <Compass size={14} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learning through building, one project at a time.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story (Left Column - 7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            <p>
              I am currently an <strong className="text-slate-900 dark:text-white font-semibold">I.Com student at Government College University Lahore</strong>. Beside my academic coursework, my real passion lies in modern web development — taking an idea, structuring it logically, and turning it into a responsive, accessible interface that works smoothly on any device.
            </p>

            <p>
              I believe the most effective way to understand programming isn't by endlessly watching tutorials, but by <strong className="text-slate-900 dark:text-white font-semibold">getting your hands dirty with actual code</strong>. Over the past months, I’ve dedicated my daily focus to mastering HTML5, CSS3, modern JavaScript, React, and Tailwind CSS through project-based learning.
            </p>

            <p>
              Rather than claiming years of industry tenure, I am completely upfront about where I stand: I am a disciplined student of web development who loves solving frontend challenges, respects clean code, and is excited to take on real freelance client projects and collaborative opportunities.
            </p>

            {/* Core Values / What I Care About */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3.5">
                My Core Approach to Development
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Mobile-first responsive styling",
                  "Modular & reusable component structure",
                  "Accessible HTML & semantic tags",
                  "Fast page load with clean asset handling",
                  "Clear, prompt communication with clients",
                  "Consistent daily practice & learning",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education Card & Quick Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-lg dark:shadow-black/20">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <GraduationCap size={20} />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                  {personalInfo.education.status}
                </span>
              </div>

              <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
                Current Education
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-1">
                {personalInfo.education.institution}
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                {personalInfo.education.degree}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-3 border-t border-slate-200 dark:border-slate-800">
                {personalInfo.education.note}
              </p>
            </div>

            {/* Quick Summary Card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-xs dark:shadow-none">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                At a Glance
              </h4>
              <dl className="space-y-3 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200/70 dark:border-slate-800/50">
                  <dt className="text-slate-500 dark:text-slate-400">Based in</dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200">Lahore, Pakistan</dd>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200/70 dark:border-slate-800/50">
                  <dt className="text-slate-500 dark:text-slate-400">Primary Focus</dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200">Frontend Web Development</dd>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200/70 dark:border-slate-800/50">
                  <dt className="text-slate-500 dark:text-slate-400">Core Technologies</dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200">React, Tailwind CSS, JS</dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt className="text-slate-500 dark:text-slate-400">Work Status</dt>
                  <dd className="font-semibold text-blue-600 dark:text-blue-400">Open for Freelance & Projects</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
