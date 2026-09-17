import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HeartPulse,
  Phone,
  CalendarDays,
  Menu,
  X,
  User,
  ShieldAlert,
} from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Departments", to: "/departments" },
    { name: "Doctors", to: "/doctors" },
    { name: "Services", to: "/services" },
    { name: "Packages", to: "/packages" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md transition-all">
      {/* Top emergency & information micro-bar */}
      <div className="hidden border-b border-slate-100 bg-slate-900 px-4 py-1.5 text-xs text-slate-300 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-2 sm:px-4 lg:px-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 Hospital & Emergency Care Active</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <span>Main Campus: Sector H-8/4, Islamabad</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Link
              to="/emergency"
              className="flex items-center gap-1.5 font-bold text-red-400 hover:text-red-300 transition"
            >
              <ShieldAlert size={13} />
              <span>Emergency: 1122</span>
            </Link>

            <span className="text-slate-600">|</span>

            <Link
              to="/patient-portal"
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <User size={13} />
              <span>Patient Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar Container */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0" onClick={closeMenu}>
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <HeartPulse size={24} />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 leading-none">
              Medi<span className="text-blue-600">Care</span>
            </div>
            <p className="text-[10px] sm:text-xs font-medium text-gray-500 tracking-wide mt-0.5">
              Hospital & Healthcare
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 xl:gap-2 lg:flex" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex shrink-0">
          <a
            href="tel:+92518440100"
            className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition"
            title="Helpline"
          >
            <Phone size={15} className="text-blue-600" />
            <span className="hidden xl:inline">+92 (51) 844-0100</span>
          </a>

          <Button
            variant="primary"
            size="sm"
            to="/appointment"
            icon={CalendarDays}
            className="shadow-sm"
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/emergency"
            className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100 transition"
            aria-label="Emergency"
          >
            <ShieldAlert size={20} />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-gray-200 p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-6 shadow-xl lg:hidden animate-fade-in max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`
                }
              >
                <span>{link.name}</span>
              </NavLink>
            ))}

            <div className="my-3 border-t border-gray-100 pt-3 space-y-2">
              <Link
                to="/patient-portal"
                onClick={closeMenu}
                className="flex items-center gap-2.5 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <User size={18} className="text-blue-600" />
                <span>Patient Portal & Reports</span>
              </Link>

              <Link
                to="/emergency"
                onClick={closeMenu}
                className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50/50 px-4 py-3 text-sm font-bold text-red-600"
              >
                <ShieldAlert size={18} />
                <span>24/7 Emergency Care (1122)</span>
              </Link>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  to="/appointment"
                  onClick={closeMenu}
                  icon={CalendarDays}
                  fullWidth
                >
                  Book Appointment Now
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}