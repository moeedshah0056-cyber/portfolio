import {
  FileQuestion,
  Home,
  CalendarDays,
} from "lucide-react";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] w-full items-center justify-center bg-slate-50/70 px-4 py-16">
      <div className="mx-auto max-w-lg rounded-3xl border border-gray-100 bg-white p-8 sm:p-12 text-center shadow-xl shadow-blue-900/5">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 shadow-inner">
          <FileQuestion size={44} />
        </div>

        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
          Error 404
        </span>

        <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Page Not Found
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
          The page or hospital directory resource you are looking for might have been removed, renamed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button variant="primary" size="md" to="/" icon={Home}>
            Back to Home
          </Button>

          <Button variant="outline" size="md" to="/appointment" icon={CalendarDays}>
            Book Appointment
          </Button>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 text-xs text-gray-500">
          <p>
            Need urgent medical help? Dial emergency hotline{" "}
            <a href="tel:1122" className="font-bold text-red-600 hover:underline">
              1122
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}