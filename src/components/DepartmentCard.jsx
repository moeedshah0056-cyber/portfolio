import { Link } from "react-router-dom";
import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Activity,
  Stethoscope,
  Eye,
  ShieldPlus,
  Pill,
  Syringe,
  Flame,
  Microscope,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const iconMap = {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Activity,
  Stethoscope,
  Eye,
  ShieldPlus,
  Pill,
  Syringe,
  Flame,
  Microscope,
};

export default function DepartmentCard({ department }) {
  if (!department) return null;

  const IconComponent = iconMap[department.iconName] || Stethoscope;

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10">
      <div>
        {/* Header with Icon */}
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white shadow-sm">
            <IconComponent size={28} />
          </div>

          {department.emergencyAvailable && (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-600 border border-red-100">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              24/7 Care
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          <Link to={`/departments?dept=${department.id}`}>
            {department.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {department.description}
        </p>

        {/* Treatment Highlights */}
        {department.treatments && department.treatments.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-gray-100 pt-4 text-xs text-gray-600">
            {department.treatments.slice(0, 3).map((treatment, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-teal-500 shrink-0" />
                <span className="truncate">{treatment}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer link */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-xs font-medium text-gray-500">
          Head: <span className="font-semibold text-gray-800">{department.headDoctor}</span>
        </span>

        <Link
          to={`/departments?dept=${department.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition-transform group-hover:translate-x-1"
        >
          <span>Explore</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
