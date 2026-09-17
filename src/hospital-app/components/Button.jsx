import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  to,
  href,
  icon: Icon,
  iconPosition = "left",
  fullWidth = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-sm",
  };

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-600/20 hover:-translate-y-0.5 focus-visible:ring-blue-500",
    secondary: "bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 shadow-md shadow-teal-600/20 hover:-translate-y-0.5 focus-visible:ring-teal-500",
    outline: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5 focus-visible:ring-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-md shadow-red-600/20 hover:-translate-y-0.5 focus-visible:ring-red-500",
    ghost: "bg-transparent text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus-visible:ring-blue-500",
    success: "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-md shadow-emerald-600/20 hover:-translate-y-0.5 focus-visible:ring-emerald-500",
    white: "bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:-translate-y-0.5 focus-visible:ring-white",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${fullWidth ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 15 : size === "lg" ? 20 : 17} className="shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 15 : size === "lg" ? 20 : 17} className="shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
