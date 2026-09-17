import { useEffect } from "react";
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from "lucide-react";

export default function Toast({
  show = false,
  type = "success",
  title,
  message,
  onClose,
  duration = 4000,
}) {
  useEffect(() => {
    if (show && duration && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  const typeConfig = {
    success: {
      icon: CheckCircle2,
      bgColor: "bg-emerald-50 border-emerald-200 text-emerald-900",
      iconColor: "text-emerald-600",
    },
    error: {
      icon: AlertCircle,
      bgColor: "bg-red-50 border-red-200 text-red-900",
      iconColor: "text-red-600",
    },
    warning: {
      icon: AlertTriangle,
      bgColor: "bg-amber-50 border-amber-200 text-amber-900",
      iconColor: "text-amber-600",
    },
    info: {
      icon: Info,
      bgColor: "bg-blue-50 border-blue-200 text-blue-900",
      iconColor: "text-blue-600",
    },
  }[type] || {
    icon: Info,
    bgColor: "bg-blue-50 border-blue-200 text-blue-900",
    iconColor: "text-blue-600",
  };

  const IconComponent = typeConfig.icon;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-md animate-slide-up transition-all duration-300">
      <div
        className={`flex items-start gap-3 rounded-2xl border p-4 shadow-xl backdrop-blur-sm ${typeConfig.bgColor}`}
        role="alert"
      >
        <IconComponent size={22} className={`shrink-0 ${typeConfig.iconColor}`} />

        <div className="flex-1 pr-2">
          {title && <h4 className="text-sm font-bold">{title}</h4>}
          {message && <p className="mt-0.5 text-xs opacity-90 leading-relaxed">{message}</p>}
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-500 hover:bg-black/5 hover:text-gray-900 focus:outline-none"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
