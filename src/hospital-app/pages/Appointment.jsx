import { useSearchParams } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  Phone,
  FileCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import AppointmentForm from "../components/AppointmentForm";

export default function Appointment() {
  const [searchParams] = useSearchParams();
  const initialDept = searchParams.get("dept") || "";
  const initialDoctor = searchParams.get("doctor") || "";

  return (
    <main className="w-full bg-slate-50/60 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 py-16 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <CalendarDays size={14} />
            <span>Online Booking System</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Book a Doctor Appointment
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reserve your consultation with our board-certified medical specialists. Instant confirmation with SMS reminder.
          </p>
        </div>
      </section>

      {/* Main Booking Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Main Booking Form */}
          <div className="lg:col-span-8">
            <AppointmentForm
              initialDepartment={initialDept}
              initialDoctor={initialDoctor}
            />
          </div>

          {/* Right Information & Policy Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Checklist */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm text-xs text-gray-600 space-y-4">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <FileCheck size={18} className="text-blue-600" />
                What to Bring to Your Visit
              </h3>

              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>Valid National Identity Card (CNIC) or Passport.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>Previous diagnostic reports, X-rays, MRI scans, or lab slips.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>Current medication bottles or prescriptions you are taking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>Corporate health insurance panel card (if applicable).</span>
                </li>
              </ul>
            </div>

            {/* Arrival & Rescheduling policy */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm text-xs text-gray-600 space-y-3">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Clock size={18} className="text-teal-600" />
                Important Patient Guidelines
              </h3>

              <p className="leading-relaxed">
                Please arrive at the clinic reception <strong className="text-gray-900">15 minutes prior</strong> to your scheduled appointment slot for vitals registration.
              </p>

              <div className="rounded-xl bg-amber-50 p-3 border border-amber-100 text-amber-800 flex items-start gap-2">
                <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                <span>Need to reschedule? Call our reception at least 2 hours in advance.</span>
              </div>
            </div>

            {/* Need Phone Support Box */}
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-md">
              <h4 className="text-base font-bold">Prefer Booking via Phone?</h4>
              <p className="mt-1 text-xs text-blue-100 leading-relaxed">
                Our 24/7 patient booking desk is available to assist you in selecting the right medical specialist.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[11px] text-blue-200 block">General OPD Helpline</span>
                  <a
                    href="tel:+92518440100"
                    className="font-bold text-sm text-white hover:underline"
                  >
                    +92 (51) 844-0100
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}