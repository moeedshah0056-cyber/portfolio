import { useState } from "react";
import {
  CalendarDays,
  User,
  Phone,
  Mail,
  Building,
  Stethoscope,
  Clock,
  FileText,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Button from "./Button";
import { departments } from "../data/departments";
import { doctors } from "../data/doctors";

export default function AppointmentForm({
  initialDepartment = "",
  initialDoctor = "",
  onSuccess,
  className = "",
}) {
  const [formData, setFormData] = useState(() => ({
    fullName: "",
    email: "",
    phone: "",
    department: initialDepartment || "",
    doctor: initialDoctor || "",
    appointmentDate: "",
    appointmentTime: "",
    message: "",
  }));

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Filter doctors based on selected department
  const filteredDoctors = formData.department
    ? doctors.filter(
        (doc) =>
          doc.departmentId === formData.department ||
          doc.department.toLowerCase().includes(formData.department.toLowerCase())
      )
    : doctors;

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your contact phone number";
    } else if (formData.phone.trim().length < 8) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.department) errs.department = "Please select a medical department";
    if (!formData.doctor) errs.doctor = "Please select a doctor";
    if (!formData.appointmentDate) errs.appointmentDate = "Please choose a consultation date";
    if (!formData.appointmentTime) errs.appointmentTime = "Please pick a preferred time slot";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "department") {
        // Clear doctor if doctor is not in selected department
        const docObj = doctors.find((d) => d.id === prev.doctor);
        if (docObj && docObj.departmentId !== value) {
          updated.doctor = "";
        }
      }
      return updated;
    });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async API confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) {
        onSuccess(formData);
      }
    }, 800);
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    const selectedDoc = doctors.find((d) => d.id === formData.doctor);
    const selectedDept = departments.find((d) => d.id === formData.department);

    return (
      <div className="rounded-3xl border border-emerald-100 bg-white p-8 text-center shadow-lg animate-scale-in">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          <CheckCircle2 size={36} />
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Appointment Confirmed!
        </h3>

        <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
          Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. Your appointment request has been received. Our patient desk will send an SMS & email confirmation shortly.
        </p>

        <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-left text-xs sm:text-sm text-gray-700 max-w-md mx-auto space-y-2 border border-slate-100">
          <div className="flex justify-between py-1 border-b border-gray-200/60">
            <span className="text-gray-500">Doctor:</span>
            <span className="font-bold text-gray-900">{selectedDoc?.name || formData.doctor}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-200/60">
            <span className="text-gray-500">Department:</span>
            <span className="font-medium text-gray-800">{selectedDept?.name || formData.department}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-200/60">
            <span className="text-gray-500">Date:</span>
            <span className="font-semibold text-blue-600">{formData.appointmentDate}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-500">Time Slot:</span>
            <span className="font-semibold text-blue-600">{formData.appointmentTime}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button
            variant="outline"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                department: "",
                doctor: "",
                appointmentDate: "",
                appointmentTime: "",
                message: "",
              });
            }}
          >
            Book Another Appointment
          </Button>

          <Button variant="primary" to="/patient-portal">
            Go to Patient Portal
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 shadow-xl shadow-blue-900/5 ${className}`}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
            <User size={14} className="text-blue-600" />
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:outline-none ${
              errors.fullName
                ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-200 bg-slate-50/50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle size={12} /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
            <Mail size={14} className="text-blue-600" />
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:outline-none ${
              errors.email
                ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-200 bg-slate-50/50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            }`}
          />
          {errors.email && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
            <Phone size={14} className="text-blue-600" />
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +92 300 1234567"
            className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:outline-none ${
              errors.phone
                ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-200 bg-slate-50/50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle size={12} /> {errors.phone}
            </p>
          )}
        </div>

        {/* Department */}
        <div>
          <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
            <Building size={14} className="text-blue-600" />
            Department <span className="text-red-500">*</span>
          </label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-900 transition focus:outline-none ${
              errors.department
                ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-200 bg-slate-50/50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            }`}
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
          {errors.department && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle size={12} /> {errors.department}
            </p>
          )}
        </div>

        {/* Doctor */}
        <div>
          <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
            <Stethoscope size={14} className="text-blue-600" />
            Doctor <span className="text-red-500">*</span>
          </label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-900 transition focus:outline-none ${
              errors.doctor
                ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-200 bg-slate-50/50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            }`}
          >
            <option value="">Select Doctor</option>
            {filteredDoctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} — {doc.specialty} ({doc.consultationFee})
              </option>
            ))}
          </select>
          {errors.doctor && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle size={12} /> {errors.doctor}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
            <CalendarDays size={14} className="text-blue-600" />
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="appointmentDate"
            min={today}
            value={formData.appointmentDate}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-900 transition focus:outline-none ${
              errors.appointmentDate
                ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-200 bg-slate-50/50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            }`}
          />
          {errors.appointmentDate && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle size={12} /> {errors.appointmentDate}
            </p>
          )}
        </div>

        {/* Time Slot */}
        <div className="sm:col-span-2">
          <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
            <Clock size={14} className="text-blue-600" />
            Select Time Slot <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {timeSlots.map((slot, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, appointmentTime: slot }));
                  if (errors.appointmentTime) {
                    setErrors((prev) => ({ ...prev, appointmentTime: "" }));
                  }
                }}
                className={`rounded-xl border py-2.5 px-3 text-xs font-semibold transition text-center ${
                  formData.appointmentTime === slot
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                    : "border-gray-200 bg-slate-50/60 text-gray-700 hover:border-blue-300 hover:bg-white"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
          {errors.appointmentTime && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle size={12} /> {errors.appointmentTime}
            </p>
          )}
        </div>

        {/* Message / Symptoms */}
        <div className="sm:col-span-2">
          <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
            <FileText size={14} className="text-blue-600" />
            Symptoms or Reason for Consultation (Optional)
          </label>
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe your symptoms, previous medical history, or specific requests..."
            className="w-full rounded-xl border border-gray-200 bg-slate-50/50 p-4 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
          ></textarea>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-6">
        <p className="text-xs text-gray-500">
          <span className="font-semibold text-gray-700">Need immediate help?</span> Call emergency hotline <span className="font-bold text-red-600">1122</span>.
        </p>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[200px]"
          icon={CalendarDays}
        >
          {isSubmitting ? "Confirming..." : "Confirm Appointment"}
        </Button>
      </div>
    </form>
  );
}
