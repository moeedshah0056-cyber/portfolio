export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  badgeIcon: BadgeIcon,
  light = false,
  className = "",
}) {
  const alignClass = {
    center: "text-center mx-auto items-center",
    left: "text-left items-start",
    right: "text-right ml-auto items-end",
  }[align] || "text-center mx-auto items-center";

  return (
    <div className={`max-w-3xl flex flex-col ${alignClass} mb-12 lg:mb-16 ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-xs ${
            light
              ? "bg-blue-900/60 text-blue-200 border border-blue-700/50"
              : "bg-blue-50 text-blue-700 border border-blue-100"
          }`}
        >
          {BadgeIcon && <BadgeIcon size={14} className="shrink-0 text-blue-600" />}
          <span>{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
            light ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
