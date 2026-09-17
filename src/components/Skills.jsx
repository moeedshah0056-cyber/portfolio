import { Code2, Layers, Cpu, Check, Terminal, FileCode2, Palette, Zap } from "lucide-react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
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
      </div>
    </section>
  );
}
