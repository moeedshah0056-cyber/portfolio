import { useState } from "react";
import { TrendingUp, BookOpenCheck, ArrowRight, RefreshCw, Sparkles, Terminal, CheckCircle2, Laptop } from "lucide-react";
import { learningData } from "../data/portfolioData";
import AnimatedList from "./AnimatedList";

export default function Learning() {
  const learningStream = [
    "React 19 & Custom Hooks Architecture",
    "Tailwind CSS v4 Utility & Token Systems",
    "JavaScript ES6+ Asynchronous Logic & APIs",
    "Mobile-First Responsive Layouts & Edge Cases",
    "Reusable Component Modularization & Architecture",
    "Git Feature Branching & PR Workflows",
    "Web Accessibility (a11y) & Semantic Tags",
    "Vite Build Pipeline & Performance Optimization",
    "Client-Side Form Validation & Real-Time Feedback",
    "Vercel Production Deployments & CI/CD Setup",
  ];

  const topicDetails = {
    "React 19 & Custom Hooks Architecture": {
      focus: "State management, useEffect cleanup cycles, and decomposing complex views into modular custom hooks.",
      practicalNote: "Refactored portfolio components to separate data logic from view rendering.",
      tag: "React",
    },
    "Tailwind CSS v4 Utility & Token Systems": {
      focus: "CSS theme tokens, media queries, CSS variables, and building sleek glassmorphic UI.",
      practicalNote: "Applied cohesive slate/charcoal dark-mode palette across all pages.",
      tag: "Styling",
    },
    "JavaScript ES6+ Asynchronous Logic & APIs": {
      focus: "Async/await patterns, JSON payload formatting, and robust error handling for external APIs.",
      practicalNote: "Connected live Formspree endpoint with asynchronous validation and feedback states.",
      tag: "Core JS",
    },
    "Mobile-First Responsive Layouts & Edge Cases": {
      focus: "Fluid typography, touch targets, hamburger drawers, and eliminating horizontal overflow.",
      practicalNote: "Tested across smartphone, tablet, and desktop breakpoints.",
      tag: "UI / UX",
    },
    "Reusable Component Modularization & Architecture": {
      focus: "Props design, clean component contracts, and keeping project code DRY and beginner-maintainable.",
      practicalNote: "Structured navbar, modals, cards, and data files into organized subfolders.",
      tag: "Architecture",
    },
    "Git Feature Branching & PR Workflows": {
      focus: "Meaningful commit messages, branch naming conventions, and GitHub repository hygiene.",
      practicalNote: "Practicing clean commits and branch-based changes for each feature.",
      tag: "Workflow",
    },
    "Web Accessibility (a11y) & Semantic Tags": {
      focus: "Keyboard focus rings, ARIA roles, high-contrast text ratios, and screen-reader friendliness.",
      practicalNote: "Ensured visible outline-offsets and semantic article/section elements.",
      tag: "Accessibility",
    },
    "Vite Build Pipeline & Performance Optimization": {
      focus: "Fast HMR, rollup chunking, asset caching, and lightning-fast production builds.",
      practicalNote: "Achieved sub-1.2s production build time for the entire project bundle.",
      tag: "Tooling",
    },
    "Client-Side Form Validation & Real-Time Feedback": {
      focus: "Input sanitization, regex email validation, character counters, and animated error states.",
      practicalNote: "Built interactive contact form with instant validation before submission.",
      tag: "Frontend",
    },
    "Vercel Production Deployments & CI/CD Setup": {
      focus: "Git push deployment triggers, preview branches, and custom domain setup.",
      practicalNote: "Configured clean build script for seamless one-click Vercel hosting.",
      tag: "DevOps",
    },
  };

  const [selectedTopic, setSelectedTopic] = useState(learningStream[0]);
  const currentDetail = topicDetails[selectedTopic] || topicDetails[learningStream[0]];

  return (
    <section id="learning" className="py-20 bg-slate-100/40 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
            <TrendingUp size={14} />
            <span>Active Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Currently Learning & Improving
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            I don’t pretend to know everything. Great developers are relentless learners. Here is what I am actively digging into every single day to expand my skillset.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {learningData.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                    {item.progress}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <RefreshCw size={12} className="animate-spin-slow text-slate-400" />
                    <span>Active</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Growth area</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">{item.status}</span>
              </div>
            </div>
          ))}

          {/* Real-world client focus note */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-blue-200 dark:border-blue-500/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                <BookOpenCheck size={18} />
                <span className="text-xs font-semibold uppercase tracking-wider">Next Milestone</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Collaborative Projects
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Transitioning from isolated sandbox builds to actual client workflows, real user feedback, and tangible business solutions.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1">
              <span>Ready for initial freelance engagements</span>
              <ArrowRight size={12} />
            </div>
          </div>
        </div>

        {/* Interactive React Bits AnimatedList Showcase */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                <Terminal size={14} />
                <span>Interactive Learning Feed</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Daily Focus Stream
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                Navigate with keyboard arrow keys or click any topic to inspect current practice details.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 self-start sm:self-auto shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              <span>Use ↑ / ↓ arrow keys to navigate</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* AnimatedList Component Container (7 cols) */}
            <div className="lg:col-span-7">
              <AnimatedList
                items={learningStream}
                onItemSelect={(item) => setSelectedTopic(item)}
                showGradients={true}
                enableArrowNavigation={true}
                displayScrollbar={true}
                initialSelectedIndex={0}
                className="w-full max-w-full"
              />
            </div>

            {/* Selected Item Detail Inspector (5 cols) */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                    {currentDetail.tag}
                  </span>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle2 size={13} />
                    <span>Actively Practicing</span>
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2.5">
                  {selectedTopic}
                </h4>

                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                      Concept Focus
                    </span>
                    <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                      {currentDetail.focus}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                      Application in Portfolio
                    </span>
                    <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                      {currentDetail.practicalNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Laptop size={13} className="text-blue-600 dark:text-blue-400" />
                  <span>Moeed Shah's Dev Notes</span>
                </span>
                <span className="text-slate-500 dark:text-slate-400">GCU Lahore • Web Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
