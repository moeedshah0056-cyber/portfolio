import { useState } from "react";
import { ExternalLink, Layers, ArrowUpRight, HeartPulse, Coffee, Watch, Sparkles, RefreshCw, Play, Pause } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Link } from "react-router-dom";
import { projectsData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import Carousel from "./Carousel";

const carouselItems = [
  {
    id: "hospital",
    title: "CarePulse Portal",
    description: "Next-gen clinical dashboard with triage queue, patient records, and doctor scheduling.",
    icon: <HeartPulse className="carousel-icon text-blue-500" size={16} />
  },
  {
    id: "cafe",
    title: "Velvet & Bean",
    description: "Artisan coffee shop digital experience with interactive menu and reservation booking.",
    icon: <Coffee className="carousel-icon text-amber-500" size={16} />
  },
  {
    id: "watch",
    title: "ChronoCraft Luxury",
    description: "Precision luxury timepiece catalog with dynamic specification filters and detail views.",
    icon: <Watch className="carousel-icon text-indigo-500" size={16} />
  },
  {
    id: "react-bits",
    title: "React Bits Motion",
    description: "Interactive kinetic UI animations including SplitFlap text, ElectricBorder and 3D Carousel.",
    icon: <Sparkles className="carousel-icon text-purple-500" size={16} />
  },
  {
    id: "architecture",
    title: "Frontend Architecture",
    description: "Modular React 19 architecture with Tailwind CSS styling and theme switching.",
    icon: <Layers className="carousel-icon text-emerald-500" size={16} />
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [isRound, setIsRound] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.technologies.some((t) => t.toLowerCase().includes(activeTab)));

  const handleOpenDemo = (project) => {
    setSelectedProject(project);
  };

  const getProjectIcon = (type) => {
    switch (type) {
      case "hospital":
        return <HeartPulse className="text-blue-400" size={24} />;
      case "cafe":
        return <Coffee className="text-amber-400" size={24} />;
      case "watch":
        return <Watch className="text-indigo-400" size={24} />;
      default:
        return <Layers className="text-slate-400" size={24} />;
    }
  };

  const getProjectAccentGradient = (type) => {
    switch (type) {
      case "hospital":
        return "from-blue-100/70 via-sky-50 to-white border-blue-200/70 dark:from-blue-600/20 dark:via-sky-500/10 dark:to-transparent dark:border-blue-500/20";
      case "cafe":
        return "from-amber-100/70 via-orange-50 to-white border-amber-200/70 dark:from-amber-600/20 dark:via-orange-500/10 dark:to-transparent dark:border-amber-500/20";
      case "watch":
        return "from-indigo-100/70 via-purple-50 to-white border-indigo-200/70 dark:from-indigo-600/20 dark:via-purple-500/10 dark:to-transparent dark:border-indigo-500/20";
      default:
        return "from-slate-100 via-slate-50 to-white border-slate-200 dark:from-slate-700/20 dark:via-slate-800/10 dark:to-transparent dark:border-slate-700/20";
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-100/40 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
              <Layers size={14} />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Web Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
              Real frontend projects built with React, Tailwind CSS, and modern web standards. Focus on responsiveness, component reusability, and clean UI.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs self-start md:self-auto">
            {[
              { id: "all", label: "All Projects" },
              { id: "react", label: "React" },
              { id: "tailwind", label: "Tailwind CSS" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive 3D Carousel Showcase from React Bits */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-md text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                <Sparkles size={13} />
                <span>React Bits • 3D Motion Carousel</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Interactive 3D Project Deck
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                Drag or swipe to rotate through project highlights in 3D space with continuous looping, velocity physics, and smooth perspective.
              </p>

              {/* Interactive Controls */}
              <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsRound((prev) => !prev)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                    isRound
                      ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                      : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <RefreshCw size={13} className={isRound ? "animate-spin" : ""} />
                  <span>{isRound ? "Switch to Card Deck" : "Switch to Round 1:1"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAutoplayEnabled((prev) => !prev)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                    autoplayEnabled
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                      : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  {autoplayEnabled ? <Pause size={13} /> : <Play size={13} />}
                  <span>Autoplay: {autoplayEnabled ? "ON (3s)" : "PAUSED"}</span>
                </button>
              </div>
            </div>

            {/* 3D Carousel Component Instance */}
            <div className="flex justify-center items-center py-2 w-full lg:w-auto">
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <Carousel
                  items={carouselItems}
                  baseWidth={320}
                  autoplay={autoplayEnabled}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  loop={true}
                  round={isRound}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl shadow-sm transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Project Visual Header Banner */}
                <div
                  className={`h-44 p-6 bg-gradient-to-b ${getProjectAccentGradient(
                    project.previewType
                  )} border-b flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shadow-xs">
                      {getProjectIcon(project.previewType)}
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 shadow-xs">
                      {project.category.split(" ")[0]}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-200/80 dark:border-slate-800/60 mt-4 flex items-center justify-between gap-3">
                {/* Live Demo Action */}
                {project.id === "hospital-website" ? (
                  <Link
                    to="/demo/hospital"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-xs"
                  >
                    <span>Live App</span>
                    <ArrowUpRight size={14} />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleOpenDemo(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-xs cursor-pointer"
                  >
                    <span>View Demo</span>
                    <ExternalLink size={13} />
                  </button>
                )}

                {/* Source Code / Details Action */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-slate-700/60 transition-colors cursor-pointer"
                >
                  <GithubIcon size={13} />
                  <span>Source Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail & Live Preview Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
