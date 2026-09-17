import { Link } from "react-router-dom";
import {
  Flame,
  Activity,
  Syringe,
  Microscope,
  Scan,
  Pill,
  HeartPulse,
  Stethoscope,
  Clock3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Flame,
  Activity,
  Syringe,
  Microscope,
  Scan,
  Pill,
  HeartPulse,
  Stethoscope,
  Clock3,
};

export default function ServiceCard({ service }) {
  if (!service) return null;

  const IconComponent = iconMap[service.iconName] || Stethoscope;

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white shadow-xs">
            <IconComponent size={26} />
          </div>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {service.category}
          </span>
        </div>

        <h3 className="mt-5 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {service.shortDescription}
        </p>

        {service.features && service.features.length > 0 && (
          <div className="mt-4 space-y-1.5 border-t border-gray-100 pt-4">
            {service.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                <CheckCircle2 size={14} className="text-teal-500 shrink-0 mt-0.5" />
                <span className="leading-tight">{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
          <Clock3 size={13} className="text-blue-500" />
          <span>{service.timing.split("|")[0]}</span>
        </div>

        <Link
          to={`/services?service=${service.id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 transition-transform group-hover:translate-x-1"
        >
          <span>Details</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
