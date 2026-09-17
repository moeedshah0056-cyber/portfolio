import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Calendar,
  Clock,
  Stethoscope,
  Award,
} from "lucide-react";
import Button from "./Button";

export default function DoctorCard({ doctor }) {
  const [imgError, setImgError] = useState(false);

  if (!doctor) return null;

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-200">
      <div>
        {/* Doctor Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100">
          {!imgError && doctor.image ? (
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${doctor.avatarColor || "from-blue-600 to-indigo-700"} text-white`}>
              <div className="text-center p-4">
                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Stethoscope size={32} />
                </div>
                <span className="text-xl font-bold tracking-wide">{doctor.name}</span>
              </div>
            </div>
          )}

          {/* Rating Badge */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-gray-900 shadow-md backdrop-blur-sm">
            <Star size={13} className="fill-amber-400 text-amber-400" />
            <span>{doctor.rating}</span>
            <span className="text-gray-400 font-normal">({doctor.reviewsCount})</span>
          </div>

          {/* Department Tag */}
          <div className="absolute top-3 right-3 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-sm">
            {doctor.department}
          </div>
        </div>

        {/* Doctor Info */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            <Link to={`/doctors/${doctor.id}`}>{doctor.name}</Link>
          </h3>

          <p className="mt-1 text-sm font-medium text-blue-600 line-clamp-1">
            {doctor.specialty}
          </p>

          <p className="mt-2 text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {doctor.qualification}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 border-y border-gray-100 py-3 text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <Award size={14} className="text-blue-500 shrink-0" />
              <span>{doctor.experience}</span>
            </div>

            <div className="flex items-center gap-1.5 justify-end text-gray-500">
              <Clock size={14} className="text-teal-500 shrink-0" />
              <span className="truncate">{doctor.availableDays}</span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-gray-500 font-medium">Consultation Fee</span>
            <span className="font-bold text-gray-900 text-sm">{doctor.consultationFee}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 p-5 pt-0">
        <Button
          variant="outline"
          size="sm"
          to={`/doctors/${doctor.id}`}
          className="text-xs"
        >
          Profile
        </Button>

        <Button
          variant="primary"
          size="sm"
          to={`/appointment?doctor=${doctor.id}&dept=${doctor.departmentId}`}
          icon={Calendar}
          iconPosition="left"
          className="text-xs"
        >
          Book
        </Button>
      </div>
    </div>
  );
}
