import { Phone, Flame, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmergencyBanner({ className = "" }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-900/10">
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-red-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Icon & Text */}
          <div className="flex items-center gap-5 lg:col-span-8">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/30">
              <Phone size={30} className="animate-pulse" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400 border border-red-500/30 mb-1.5">
                <Flame size={13} />
                24/7 Critical Care & Trauma Service
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Need Immediate Emergency Medical Assistance?
              </h3>

              <p className="mt-1 text-sm text-slate-300 max-w-2xl leading-relaxed">
                Our trauma unit, emergency physicians, and ACLS mobile ICU ambulances operate round-the-clock without appointment.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:col-span-4 lg:justify-end">
            <a
              href="tel:1122"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-all hover:bg-red-700 hover:-translate-y-0.5 active:bg-red-800"
            >
              <Phone size={18} />
              <span>Call Emergency: 1122</span>
            </a>

            <Link
              to="/emergency"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700 hover:text-white hover:-translate-y-0.5"
            >
              <span>Emergency Info</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
