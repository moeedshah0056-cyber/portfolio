import { Search, X } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  onClear,
  className = "",
}) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Search
        size={18}
        className="absolute left-3.5 text-gray-400 pointer-events-none"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-10 text-sm text-gray-900 placeholder:text-gray-400 shadow-2xs transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      />

      {value && (
        <button
          type="button"
          onClick={() => {
            if (onClear) onClear();
            else onChange("");
          }}
          className="absolute right-3 rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
