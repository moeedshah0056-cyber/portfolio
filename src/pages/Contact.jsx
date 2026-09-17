import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Building,
  ShieldAlert,
  MessageSquare,
} from "lucide-react";
import Button from "../components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) errs.phone = "Please enter your phone number";
    if (!formData.subject) errs.subject = "Please select a department or subject";
    if (!formData.message.trim()) errs.message = "Please enter your inquiry message";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const departmentExtensions = [
    { name: "Emergency & Trauma (24/7)", number: "Ext. 1122 / 100" },
    { name: "General OPD Appointments", number: "Ext. 101 / 102" },
    { name: "Diagnostic Pathology Lab", number: "Ext. 107" },
    { name: "Radiology & MRI Desk", number: "Ext. 108" },
    { name: "24/7 Hospital Pharmacy", number: "Ext. 109" },
    { name: "Inpatient Admissions & Billing", number: "Ext. 120" },
  ];

  return (
    <main className="w-full bg-slate-50/70 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 py-16 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <MessageSquare size={14} />
            <span>Connect with MediCare</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Contact & Hospital Information
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about doctor appointments, medical records, or hospital visits? Our patient support team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Contacts Box */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Hospital Contact Hub</h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Hospital Campus Address</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Sector H-8/4, Kashmir Highway, Islamabad, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <ShieldAlert size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-600">24/7 Emergency Dispatch</h4>
                    <p className="text-xs font-bold text-gray-900 mt-0.5">
                      1122 (Toll Free) • +92 (51) 844-1122
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">General OPD Helpline</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      +92 (51) 844-0100 / 0101 (Mon - Sat: 8 AM - 9 PM)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Official Email Support</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      info@medicare.demo • opd@medicare.demo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Extensions Table */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Building size={16} className="text-blue-600" />
                Department Direct Extensions
              </h3>

              <div className="divide-y divide-gray-100 text-xs">
                {departmentExtensions.map((ext, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2.5">
                    <span className="text-gray-600">{ext.name}</span>
                    <span className="font-bold text-gray-900">{ext.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Inquiry Form & Campus Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Inquiry Form */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Send Us an Inquiry</h3>
              <p className="text-xs text-gray-500 mb-6">
                Fill out the form below and our patient relations desk will reply within 2 business hours.
              </p>

              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 p-6 text-center border border-emerald-100 animate-scale-in">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Message Delivered!</h4>
                  <p className="mt-1 text-xs text-gray-600 max-w-sm mx-auto">
                    Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your inquiry has been routed to our patient services team.
                  </p>
                  <div className="mt-5">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block font-bold text-gray-700">Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Asad Malik"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full rounded-xl border p-3 text-xs text-gray-900 focus:outline-none ${
                          errors.name ? "border-red-400 bg-red-50/20" : "border-gray-200 bg-slate-50/50 focus:border-blue-500"
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="mb-1 block font-bold text-gray-700">Email Address *</label>
                      <input
                        type="email"
                        placeholder="e.g. asad@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full rounded-xl border p-3 text-xs text-gray-900 focus:outline-none ${
                          errors.email ? "border-red-400 bg-red-50/20" : "border-gray-200 bg-slate-50/50 focus:border-blue-500"
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="mb-1 block font-bold text-gray-700">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="e.g. +92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full rounded-xl border p-3 text-xs text-gray-900 focus:outline-none ${
                          errors.phone ? "border-red-400 bg-red-50/20" : "border-gray-200 bg-slate-50/50 focus:border-blue-500"
                        }`}
                      />
                      {errors.phone && <p className="mt-1 text-[11px] text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="mb-1 block font-bold text-gray-700">Subject / Department *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full rounded-xl border p-3 text-xs text-gray-900 focus:outline-none ${
                          errors.subject ? "border-red-400 bg-red-50/20" : "border-gray-200 bg-slate-50/50 focus:border-blue-500"
                        }`}
                      >
                        <option value="">Select Inquiring Department</option>
                        <option value="General OPD Consultation">General OPD Consultation</option>
                        <option value="Diagnostic Lab & Pathology">Diagnostic Lab & Pathology</option>
                        <option value="Radiology & MRI / CT Scan">Radiology & MRI / CT Scan</option>
                        <option value="Billing & Insurance Panels">Billing & Insurance Panels</option>
                        <option value="Medical Records & Reports">Medical Records & Reports</option>
                        <option value="Patient Feedback / Suggestion">Patient Feedback / Suggestion</option>
                      </select>
                      {errors.subject && <p className="mt-1 text-[11px] text-red-500">{errors.subject}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block font-bold text-gray-700">Your Message *</label>
                    <textarea
                      rows="4"
                      placeholder="Write your inquiry or question in detail..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full rounded-xl border p-3 text-xs text-gray-900 focus:outline-none ${
                        errors.message ? "border-red-400 bg-red-50/20" : "border-gray-200 bg-slate-50/50 focus:border-blue-500"
                      }`}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <Button variant="primary" size="md" type="submit" icon={Send}>
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Interactive Campus Map Card Placeholder */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" />
                Hospital Location & Access
              </h3>

              <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center p-6 text-center border border-slate-700">
                <div>
                  <MapPin size={36} className="mx-auto text-red-500 mb-2 animate-bounce" />
                  <p className="font-bold text-base">MediCare Main Campus</p>
                  <p className="text-xs text-slate-300 mt-1">Sector H-8/4, Kashmir Highway, Islamabad</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1 text-[11px] font-semibold text-white">
                    <span>GPS Coordinates: 33.6844° N, 73.0479° E</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}