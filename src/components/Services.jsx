import { Layout, Code2, Sparkles, MonitorCheck, Rocket, Briefcase, Check } from "lucide-react";
import { servicesData } from "../data/portfolioData";

export default function Services() {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case "Layout":
        return <Layout size={22} className="text-blue-400" />;
      case "Code2":
        return <Code2 size={22} className="text-sky-400" />;
      case "Sparkles":
        return <Sparkles size={22} className="text-amber-400" />;
      case "MonitorCheck":
        return <MonitorCheck size={22} className="text-emerald-400" />;
      case "Rocket":
        return <Rocket size={22} className="text-indigo-400" />;
      default:
        return <Briefcase size={22} className="text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
            <Briefcase size={14} />
            <span>Freelance & Development Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I can help with your next website
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            Honest, focused freelance services tailored around modern frontend technologies and clean responsive user interfaces.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-5">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check size={14} className="text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Quick collaboration banner card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50/40 dark:from-blue-900/30 dark:via-slate-900 dark:to-slate-900 border border-blue-200 dark:border-blue-500/20 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-2">
                Have a unique requirement?
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Open to custom project ideas
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Whether it's refactoring an existing layout, converting Figma designs, or building a brand-new page from scratch, I'm ready to learn what your project requires.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              <span>Discuss Your Idea</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
