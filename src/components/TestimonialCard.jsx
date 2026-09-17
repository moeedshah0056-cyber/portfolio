import { Star, CheckCircle2, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  if (!testimonial) return null;

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100">
      <div>
        {/* Rating and Quote Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < testimonial.rating
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-200"
                }
              />
            ))}
          </div>

          <Quote size={24} className="text-blue-100" />
        </div>

        {/* Comment */}
        <p className="mt-4 text-sm text-gray-600 italic leading-relaxed">
          &ldquo;{testimonial.comment}&rdquo;
        </p>
      </div>

      {/* Patient info */}
      <div className="mt-6 flex items-center gap-3.5 border-t border-gray-100 pt-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white font-bold text-sm shadow-sm ${
            testimonial.avatarBg || "bg-blue-600"
          }`}
        >
          {testimonial.initials || testimonial.name.substring(0, 2).toUpperCase()}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-bold text-gray-900 truncate">
              {testimonial.name}
            </h4>
            <CheckCircle2 size={13} className="text-teal-500 shrink-0" title="Verified Patient" />
          </div>

          <p className="text-xs text-blue-600 truncate font-medium">
            {testimonial.treatment}
          </p>

          <p className="text-[11px] text-gray-400">
            {testimonial.location} • {testimonial.date}
          </p>
        </div>
      </div>
    </div>
  );
}
