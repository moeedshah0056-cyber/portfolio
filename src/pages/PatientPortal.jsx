import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  FileText,
  Pill,
  Download,
  Activity,
  CalendarDays,
  LogOut,
} from "lucide-react";
import Button from "../components/Button";

export default function PatientPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const patient = {
    name: "Muhammad Usman",
    mrn: "MC-894210",
    dob: "14 May 1984 (41 yrs)",
    bloodGroup: "B +ve",
    phone: "+92 (300) 555-8921",
    email: "usman.m@example.com",
    vitals: {
      bp: "120/80 mmHg",
      heartRate: "72 bpm",
      glucose: "98 mg/dL (Fasting)",
      bmi: "23.4 (Normal)",
    },
  };

  const upcomingAppointments = [
    {
      id: "APT-1092",
      doctor: "Dr. Ahmed Khan",
      specialty: "Cardiology",
      date: "Tomorrow, 10:30 AM",
      room: "Suite 302, 3rd Floor",
      status: "Confirmed",
    },
    {
      id: "APT-1088",
      doctor: "Dr. Ayesha Malik",
      specialty: "Dermatology",
      date: "08 March 2026, 03:00 PM",
      room: "Derma Clinic 204",
      status: "Scheduled",
    },
  ];

  const labReports = [
    {
      id: "LAB-7741",
      test: "Comprehensive Metabolic & Lipid Panel",
      date: "22 February 2026",
      doctor: "Dr. Ahmed Khan",
      status: "Normal / Verified",
      fileSize: "1.2 MB",
    },
    {
      id: "LAB-7620",
      test: "Complete Blood Count (CBC) with ESR",
      date: "10 January 2026",
      doctor: "Dr. Mansoor Tariq",
      status: "Normal",
      fileSize: "840 KB",
    },
    {
      id: "LAB-7401",
      test: "2D Echocardiography & Doppler Study",
      date: "15 December 2025",
      doctor: "Dr. Ahmed Khan",
      status: "Verified",
      fileSize: "3.4 MB",
    },
  ];

  const prescriptions = [
    {
      medicine: "Atorvastatin 20mg",
      dosage: "1 tablet daily at night",
      doctor: "Dr. Ahmed Khan",
      refillsLeft: 2,
      duration: "Ongoing (3 Months)",
    },
    {
      medicine: "Metformin HCl 500mg",
      dosage: "1 tablet twice daily with meals",
      doctor: "Dr. Ahmed Khan",
      refillsLeft: 1,
      duration: "Ongoing",
    },
  ];

  return (
    <main className="w-full bg-slate-50/70 pb-20 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Card */}
        <div className="mb-8 rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white font-bold text-2xl shadow-md">
                MU
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-gray-900">{patient.name}</h1>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
                    Active Patient
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-gray-500">
                  MRN: <strong className="text-gray-900">{patient.mrn}</strong> • Blood Group: <strong className="text-gray-900">{patient.bloodGroup}</strong> • {patient.dob}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <Button variant="primary" size="sm" to="/appointment" icon={CalendarDays}>
                Book New Appointment
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => alert("Report download simulated")}
                icon={Download}
              >
                Download All Records
              </Button>
            </div>
          </div>
        </div>

        {/* Portal Body with Tabs */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-gray-100 bg-white p-3 shadow-sm space-y-1">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-xs font-bold transition text-left ${
                  activeTab === "dashboard"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-slate-50"
                }`}
              >
                <Activity size={17} />
                <span>Health Overview</span>
              </button>

              <button
                onClick={() => setActiveTab("appointments")}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-xs font-bold transition text-left ${
                  activeTab === "appointments"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-slate-50"
                }`}
              >
                <Calendar size={17} />
                <span>Appointments ({upcomingAppointments.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("reports")}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-xs font-bold transition text-left ${
                  activeTab === "reports"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-slate-50"
                }`}
              >
                <FileText size={17} />
                <span>Diagnostic Lab Reports</span>
              </button>

              <button
                onClick={() => setActiveTab("prescriptions")}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-xs font-bold transition text-left ${
                  activeTab === "prescriptions"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-slate-50"
                }`}
              >
                <Pill size={17} />
                <span>Active Prescriptions</span>
              </button>

              <div className="border-t border-gray-100 pt-2 mt-2">
                <Link
                  to="/"
                  className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-xs font-semibold text-gray-500 hover:bg-slate-50 hover:text-red-600"
                >
                  <LogOut size={16} />
                  <span>Exit Portal</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Tab Content */}
          <div className="lg:col-span-9 space-y-6">
            {activeTab === "dashboard" && (
              <>
                {/* Vitals Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-2xs">
                    <span className="text-[11px] font-semibold text-gray-400">Blood Pressure</span>
                    <p className="mt-1 text-lg font-bold text-gray-900">{patient.vitals.bp}</p>
                    <span className="text-[10px] text-emerald-600 font-bold">Optimal Range</span>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-2xs">
                    <span className="text-[11px] font-semibold text-gray-400">Heart Rate</span>
                    <p className="mt-1 text-lg font-bold text-gray-900">{patient.vitals.heartRate}</p>
                    <span className="text-[10px] text-emerald-600 font-bold">Normal Resting</span>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-2xs">
                    <span className="text-[11px] font-semibold text-gray-400">Fasting Glucose</span>
                    <p className="mt-1 text-lg font-bold text-gray-900">{patient.vitals.glucose}</p>
                    <span className="text-[10px] text-emerald-600 font-bold">Controlled</span>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-2xs">
                    <span className="text-[11px] font-semibold text-gray-400">Body Mass Index</span>
                    <p className="mt-1 text-lg font-bold text-gray-900">{patient.vitals.bmi}</p>
                    <span className="text-[10px] text-blue-600 font-bold">Healthy BMI</span>
                  </div>
                </div>

                {/* Upcoming Appointment Widget */}
                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Calendar size={18} className="text-blue-600" />
                      Upcoming Consultation
                    </span>
                    <Link to="/appointment" className="text-xs font-bold text-blue-600 hover:underline">
                      + Book Another
                    </Link>
                  </h3>

                  <div className="rounded-2xl bg-blue-50/50 p-5 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-blue-600">
                        {upcomingAppointments[0].specialty} Department
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                        {upcomingAppointments[0].doctor}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {upcomingAppointments[0].date} • {upcomingAppointments[0].room}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                        {upcomingAppointments[0].status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recent Lab Reports Widget */}
                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText size={18} className="text-teal-600" />
                      Recent Lab Reports
                    </span>
                    <button
                      onClick={() => setActiveTab("reports")}
                      className="text-xs font-bold text-blue-600 hover:underline"
                    >
                      View All
                    </button>
                  </h3>

                  <div className="space-y-3">
                    {labReports.slice(0, 2).map((rep) => (
                      <div
                        key={rep.id}
                        className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-slate-50 transition"
                      >
                        <div>
                          <h4 className="text-xs font-bold text-gray-900">{rep.test}</h4>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            {rep.date} • Ordered by {rep.doctor}
                          </p>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => alert(`Downloading ${rep.test} PDF report...`)}
                          icon={Download}
                        >
                          PDF
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "appointments" && (
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Your Scheduled Appointments</h3>
                {upcomingAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-gray-100 p-5 gap-4"
                  >
                    <div>
                      <span className="text-xs font-semibold text-blue-600">{apt.specialty}</span>
                      <h4 className="text-base font-bold text-gray-900">{apt.doctor}</h4>
                      <p className="text-xs text-gray-500 mt-1">{apt.date} • {apt.room}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                        {apt.status}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => alert("Appointment rescheduling helpline: +92 (51) 844-0100")}
                      >
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reports" && (
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Diagnostic Reports & Scans</h3>
                {labReports.map((rep) => (
                  <div
                    key={rep.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-gray-100 p-5 gap-4 hover:bg-slate-50 transition"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-slate-400">{rep.id}</span>
                      <h4 className="text-sm font-bold text-gray-900">{rep.test}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{rep.date} • {rep.doctor} • {rep.fileSize}</p>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => alert(`Downloading verified PDF for ${rep.test}...`)}
                      icon={Download}
                    >
                      Download Report
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "prescriptions" && (
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Active Prescriptions & Medication Refills</h3>
                {prescriptions.map((rx, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-gray-100 p-5 gap-4"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{rx.medicine}</h4>
                      <p className="text-xs text-blue-600 font-medium mt-0.5">{rx.dosage}</p>
                      <p className="text-xs text-gray-500 mt-1">Prescribed by {rx.doctor} • Duration: {rx.duration}</p>
                    </div>

                    <Button
                      variant="secondary"
                      size="sm"
                      to="/pharmacy"
                      icon={Pill}
                    >
                      Order Refill
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
