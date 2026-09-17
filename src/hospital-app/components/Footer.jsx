import { Link } from "react-router-dom";
import {
  HeartPulse,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-slate-900 text-slate-300">
      {/* Top Emergency CTA Strip in Footer */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/20 text-red-500 border border-red-500/30">
              <ShieldAlert size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                24/7 Trauma & Emergency Hotline
              </div>
              <p className="text-xs text-slate-400">
                Immediate response with fully equipped mobile ICU ambulances
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:1122"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-red-700 transition"
            >
              <Phone size={15} />
              <span>Call Emergency: 1122</span>
            </a>
            <a
              href="tel:+92518440100"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition"
            >
              <Phone size={15} className="text-blue-400" />
              <span>OPD: +92 (51) 844-0100</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                <HeartPulse size={26} />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Medi<span className="text-blue-500">Care</span>
                </span>
                <p className="text-xs text-slate-400">Hospital & Healthcare</p>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
              Providing compassionate, patient-centered healthcare delivered by world-class specialists, state-of-the-art medical technology, and 24/7 emergency response.
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-800/50 p-3 max-w-sm">
              <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">Internationally Accredited</span>
                <p className="text-[11px] text-slate-400">Committed to highest patient safety standards</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About MediCare
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-blue-400 transition">
                  Our Specialists
                </Link>
              </li>
              <li>
                <Link to="/departments" className="hover:text-blue-400 transition">
                  Clinical Departments
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition">
                  Hospital Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-blue-400 transition">
                  Health Checkup Packages
                </Link>
              </li>
              <li>
                <Link to="/patient-portal" className="hover:text-blue-400 transition">
                  Patient Portal & Reports
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition">
                  Health Advice & Articles
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinical Departments */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Departments
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/departments?dept=cardiology" className="hover:text-blue-400 transition">
                  Cardiology & Heart Care
                </Link>
              </li>
              <li>
                <Link to="/departments?dept=neurology" className="hover:text-blue-400 transition">
                  Neurology & Brain Care
                </Link>
              </li>
              <li>
                <Link to="/departments?dept=orthopedics" className="hover:text-blue-400 transition">
                  Orthopedics & Joint Surgery
                </Link>
              </li>
              <li>
                <Link to="/departments?dept=pediatrics" className="hover:text-blue-400 transition">
                  Pediatrics & Neonatology
                </Link>
              </li>
              <li>
                <Link to="/departments?dept=dermatology" className="hover:text-blue-400 transition">
                  Dermatology & Skin Care
                </Link>
              </li>
              <li>
                <Link to="/departments?dept=gynecology" className="hover:text-blue-400 transition">
                  Obstetrics & Gynecology
                </Link>
              </li>
              <li>
                <Link to="/departments?dept=oncology" className="hover:text-blue-400 transition">
                  Oncology & Cancer Care
                </Link>
              </li>
              <li>
                <Link to="/laboratory" className="hover:text-blue-400 transition">
                  Diagnostic Pathology Lab
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact & Location
            </h4>
            <ul className="mt-4 space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <span>Sector H-8/4, Kashmir Highway, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-blue-400 shrink-0" />
                <span>+92 (51) 844-0100 / 0101</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-blue-400 shrink-0" />
                <span>info@medicare.demo</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">OPD Clinics:</p>
                  <p>Mon - Sat: 8:00 AM - 9:00 PM</p>
                  <p className="text-emerald-400 font-semibold mt-0.5">Emergency: 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Disclaimer */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center sm:text-left">
            © 2026 MediCare Hospital & Healthcare. Fictional demo healthcare website.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/faq" className="hover:text-white transition">
              Patient Guidelines
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}