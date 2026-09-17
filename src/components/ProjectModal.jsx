import { useState } from "react";
import { X, ExternalLink, Check, Coffee, Watch, HeartPulse, Clock, Calendar, Users, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Link } from "react-router-dom";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  // State for Cafe interactive preview
  const [cafeMenuCategory, setCafeMenuCategory] = useState("espresso");
  const [reservationParty, setReservationParty] = useState(2);
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  // State for Smart Watch interactive preview
  const [watchColor, setWatchColor] = useState("slate");
  const [watchStrap, setWatchStrap] = useState("sport");

  // State for copied source code notification
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(project.githubPlaceholder);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const cafeMenu = {
    espresso: [
      { name: "Signature Espresso", desc: "Double shot of single-origin Colombian beans with notes of hazelnut", price: "$3.50" },
      { name: "Velvet Flat White", desc: "Silky steamed whole milk poured over rich ristretto", price: "$4.75" },
      { name: "Vanilla Bean Latte", desc: "Madagascar vanilla extract infused with espresso & microfoam", price: "$5.25" },
    ],
    brews: [
      { name: "Ethiopian Pour-Over", desc: "Floral jasmine aroma with crisp bergamot and lemon notes", price: "$4.50" },
      { name: "Cold Drip 18-Hour", desc: "Slow steeped cold brew served over handcrafted ice sphere", price: "$5.00" },
      { name: "Aeropress Blend", desc: "Full-bodied immersion brew with dark chocolate finish", price: "$4.25" },
    ],
    bakery: [
      { name: "Almond Croissant", desc: "Twice-baked butter croissant filled with frangipane cream", price: "$4.50" },
      { name: "Wild Berry Scone", desc: "Served warm with clotted cream and strawberry compote", price: "$4.00" },
      { name: "Avocado Toast", desc: "Poached free-range egg, chili flakes, feta on sourdough", price: "$8.50" },
    ],
  };

  const watchColors = [
    { id: "slate", name: "Midnight Charcoal", bg: "bg-slate-900", border: "border-slate-600", previewBg: "from-slate-950 via-slate-900 to-slate-800" },
    { id: "silver", name: "Titanium Silver", bg: "bg-slate-300", border: "border-white", previewBg: "from-slate-800 via-slate-700 to-slate-600" },
    { id: "blue", name: "Deep Ocean", bg: "bg-blue-600", border: "border-blue-400", previewBg: "from-blue-950 via-slate-900 to-blue-900" },
    { id: "amber", name: "Champagne Gold", bg: "bg-amber-400", border: "border-amber-200", previewBg: "from-amber-950 via-slate-900 to-amber-900" },
  ];

  const watchStraps = [
    { id: "sport", name: "Sport Silicone", desc: "Breathable & waterproof" },
    { id: "braided", name: "Braided Loop", desc: "Ultra-stretch polyester" },
    { id: "leather", name: "Artisan Leather", desc: "Hand-stitched premium calfskin" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-600 dark:text-slate-300">
          {/* Top Description & Tech */}
          <div>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider mr-1">
                Technologies:
              </span>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-200 dark:border-slate-800/80">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check size={14} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* INTERACTIVE PREVIEWS DEPENDING ON PROJECT */}
          {/* 1. HOSPITAL WEBSITE PREVIEW */}
          {project.id === "hospital-website" && (
            <div className="p-5 rounded-xl bg-blue-50/60 dark:bg-slate-950/80 border border-blue-200/70 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-blue-200/70 dark:border-slate-800">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <HeartPulse size={18} className="text-blue-600 dark:text-blue-400" />
                  <span>MediCare Hospital — Live Application Preview</span>
                </div>
                <span className="text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-2.5 py-0.5 rounded-full font-medium">
                  Fully Built React App
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-xs">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-1">Departments Directory</span>
                  <span className="text-slate-600 dark:text-slate-400">Cardiology, Neurology, Pediatrics, Orthopedics, and more.</span>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-xs">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-1">Doctor Profiles</span>
                  <span className="text-slate-600 dark:text-slate-400">Consultation schedules, bios, qualifications, and badges.</span>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-xs">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-1">Interactive Booking</span>
                  <span className="text-slate-600 dark:text-slate-400">Date/time slot picker, doctor selection, and validation.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/demo/hospital"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-md shadow-blue-600/30"
                >
                  <ExternalLink size={14} />
                  <span>Launch Live Hospital Application</span>
                </Link>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Opens full healthcare application with 15+ subpages and appointment workflows.
                </span>
              </div>
            </div>
          )}

          {/* 2. CAFE WEBSITE INTERACTIVE PREVIEW */}
          {project.id === "cafe-website" && (
            <div className="p-5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-amber-200 dark:border-amber-900/30">
                <div className="flex items-center gap-2 text-sm font-semibold text-amber-950 dark:text-amber-200">
                  <Coffee size={18} className="text-amber-600 dark:text-amber-400" />
                  <span>Artisan Brew & Bites — Interactive Concept</span>
                </div>
                <span className="text-xs text-amber-700 dark:text-amber-400 bg-amber-100/70 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 px-2.5 py-0.5 rounded-full font-medium">
                  Interactive Menu & Table Preview
                </span>
              </div>

              {/* Menu Categories Switcher */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {[
                    { id: "espresso", label: "Espresso Bar" },
                    { id: "brews", label: "Manual Brews" },
                    { id: "bakery", label: "Bakery & Brunch" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCafeMenuCategory(cat.id)}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                        cafeMenuCategory === cat.id
                          ? "bg-amber-600 text-white"
                          : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-amber-200 dark:border-slate-800 hover:bg-amber-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {cafeMenu[cafeMenuCategory].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white dark:bg-slate-900/90 border border-amber-200/70 dark:border-slate-800 shadow-xs">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-slate-900 dark:text-white text-xs">{item.name}</span>
                        <span className="font-bold text-amber-600 dark:text-amber-400 text-xs">{item.price}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reservation simulation */}
              <div className="p-3.5 rounded-lg bg-white dark:bg-slate-900/90 border border-amber-200/70 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-xs">
                <div>
                  <span className="text-xs font-semibold text-slate-900 dark:text-white block">Simulate Table Booking</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Party size: {reservationParty} guests</span>
                </div>
                <div className="flex items-center gap-2">
                  {[2, 4, 6, 8].map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setReservationParty(size);
                        setReservationSubmitted(false);
                      }}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        reservationParty === size
                          ? "bg-amber-600 text-white font-semibold"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {size}p
                    </button>
                  ))}
                  <button
                    onClick={() => setReservationSubmitted(true)}
                    className="text-xs font-medium px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
              {reservationSubmitted && (
                <p className="text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 p-2 rounded-md">
                  ✓ Table reservation for {reservationParty} guests confirmed in UI demo mode!
                </p>
              )}
            </div>
          )}

          {/* 3. SMART WATCH INTERACTIVE PREVIEW */}
          {project.id === "smart-watch-website" && (
            <div className="p-5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-indigo-200 dark:border-indigo-900/30">
                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-950 dark:text-indigo-200">
                  <Watch size={18} className="text-indigo-600 dark:text-indigo-400" />
                  <span>Aura Chrono — Interactive Product Customizer</span>
                </div>
                <span className="text-xs text-indigo-700 dark:text-indigo-400 bg-indigo-100/70 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-2.5 py-0.5 rounded-full font-medium">
                  Dynamic Spec & Color Preview
                </span>
              </div>

              {/* Product Visualizer */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-5 p-6 rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-indigo-200/70 dark:border-slate-800 flex flex-col items-center justify-center text-center shadow-xs">
                  <div className="w-24 h-24 rounded-full border-4 border-indigo-500/40 flex items-center justify-center bg-slate-100 dark:bg-slate-950 shadow-inner mb-3">
                    <Watch size={44} className="text-indigo-600 dark:text-indigo-400 animate-pulse" />
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Aura Chrono Series 2</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 capitalize">
                    {watchColors.find((c) => c.id === watchColor)?.name} • {watchStraps.find((s) => s.id === watchStrap)?.name}
                  </span>
                </div>

                <div className="sm:col-span-7 space-y-3">
                  {/* Case Color Selector */}
                  <div>
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
                      Case Color
                    </label>
                    <div className="flex items-center gap-2">
                      {watchColors.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => setWatchColor(color.id)}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                            watchColor === color.id
                              ? "bg-indigo-100/70 dark:bg-indigo-600/30 border-indigo-500 text-indigo-900 dark:text-white"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                          }`}
                        >
                          <span className={`w-2.5 h-2.5 rounded-full ${color.bg} border ${color.border}`}></span>
                          <span>{color.name.split(" ")[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Strap Selector */}
                  <div>
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
                      Strap Material
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {watchStraps.map((strap) => (
                        <button
                          key={strap.id}
                          onClick={() => setWatchStrap(strap.id)}
                          className={`p-2 rounded-lg text-left border text-xs transition-colors cursor-pointer ${
                            watchStrap === strap.id
                              ? "bg-indigo-100/70 dark:bg-indigo-600/20 border-indigo-500 text-indigo-900 dark:text-white"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                          }`}
                        >
                          <span className="font-semibold block text-slate-800 dark:text-slate-200">{strap.name.split(" ")[0]}</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">{strap.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GitHub Source Code / Repository Info */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white mb-0.5">
                <GithubIcon size={14} className="text-slate-500 dark:text-slate-400" />
                <span>Source Code Repository</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {project.githubPlaceholder}
              </p>
            </div>

            <button
              onClick={handleCopyGithub}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-transparent transition-colors cursor-pointer"
            >
              {copiedCode ? (
                <>
                  <Check size={13} className="text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied Link!</span>
                </>
              ) : (
                <>
                  <span>Copy Repo URL</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Moeed Shah Portfolio Project Showcase
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-xs font-medium transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
