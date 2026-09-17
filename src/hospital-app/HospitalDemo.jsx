import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, ShieldCheck, HeartPulse } from "lucide-react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function HospitalDemo() {
  return (
    <div className="min-h-screen bg-[#F8FBFF] text-[#172033] antialiased">
      <ScrollToTop />
      {/* Top Banner linking back to portfolio */}
      <div className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950 text-slate-800 dark:text-white px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm backdrop-blur-md shadow-xs">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors shadow-xs"
          >
            <ArrowLeft size={14} />
            <span>Back to Portfolio</span>
          </Link>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-700 dark:text-slate-300 font-medium">
            Live Project Demo: <strong>MediCare Hospital System</strong>
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
          <span>Built with React + Tailwind CSS</span>
        </div>
      </div>

      {/* Hospital App */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
