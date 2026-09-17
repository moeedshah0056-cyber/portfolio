import { Loader2 } from "lucide-react";

export default function LoadingSpinner({
  size = "md",
  label = "Loading...",
  className = "",
  fullPage = false,
}) {
  const sizeMap = {
    sm: 18,
    md: 28,
    lg: 42,
  };

  const content = (
    <div className={`flex flex-col items-center justify-center gap-3 p-6 text-center ${className}`}>
      <Loader2
        size={sizeMap[size] || 28}
        className="animate-spin text-blue-600"
      />
      {label && <p className="text-sm font-medium text-gray-500">{label}</p>}
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-xs">
        {content}
      </div>
    );
  }

  return content;
}
