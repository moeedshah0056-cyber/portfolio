import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  CalendarDays,
  Clock,
  Award,
  GraduationCap,
  CheckCircle2,
  Phone,
  Mail,
  ArrowLeft,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import Button from "../components/Button";
import AppointmentForm from "../components/AppointmentForm";
import Modal from "../components/Modal";
import { doctors } from "../data/doctors";

export default function DoctorDetails() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!doctor) {
    return (
      <main className="w-full py-20 text-center">
        <div className="mx-auto max-w-md p-8 rounded-3xl border border-gray-200 bg-white shadow-xs">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Stethoscope size={36} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Doctor Profile Not Found</h2>
          <p className="mt-2 text-sm text-gray-600">
            The doctor profile you requested could not be located.
          </p>
          <div className="mt-6">
            <Button variant="primary" to="/doctors" icon={ArrowLeft}>
              Back to Doctors Directory
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-slate-50/60 pb-16">
      {/* Back Navigation Bar */}
      <div className="border-b border-gray-200 bg-white py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft size={14} />
            <span>Back to All Doctors</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Doctor Profile Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
              {/* Doctor Image */}
              <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                {!imgError && doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${doctor.avatarColor || "from-blue-600 to-indigo-800"} text-white`}>
                    <Stethoscope size={64} />
                  </div>
                )}

                <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  {doctor.department}
                </div>
              </div>

              {/* Basic Info */}
              <div className="p-6">
                <h1 className="text-2xl font-extrabold text-gray-900">
                  {doctor.name}
                </h1>

                <p className="mt-1 text-sm font-semibold text-blue-600">
                  {doctor.specialty}
                </p>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-bold text-gray-900">{doctor.rating}</span>
                  </div>
                  <span className="text-xs text-gray-400">
                    ({doctor.reviewsCount} verified patient reviews)
                  </span>
                </div>

                <div className="mt-6 space-y-3 border-t border-gray-100 pt-5 text-xs text-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Experience:</span>
                    <span className="font-bold text-gray-900">{doctor.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Consultation Fee:</span>
                    <span className="font-bold text-blue-600 text-sm">{doctor.consultationFee}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Languages:</span>
                    <span className="font-medium text-gray-800">{doctor.languages.join(", ")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Clinic Room:</span>
                    <span className="font-medium text-gray-800">{doctor.room}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={() => setBookingModalOpen(true)}
                    icon={CalendarDays}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs text-xs space-y-3">
              <h3 className="font-bold text-gray-900 text-sm mb-2">Hospital Extension</h3>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={14} className="text-blue-600" />
                <span>{doctor.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={14} className="text-blue-600" />
                <span>{doctor.email}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Clinical Profile */}
          <div className="lg:col-span-8 space-y-8">
            {/* About Doctor */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                <Stethoscope size={22} className="text-blue-600" />
                About {doctor.name}
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {doctor.bio}
              </p>

              <div className="mt-6 rounded-2xl bg-blue-50/60 p-4 border border-blue-100 text-xs text-blue-900 flex items-start gap-3">
                <ShieldCheck size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Certified Medical Specialist</span>
                  <p className="mt-0.5 text-blue-800 leading-relaxed">
                    Registered with Pakistan Medical & Dental Council (PMDC) and affiliated international medical colleges.
                  </p>
                </div>
              </div>
            </div>

            {/* Areas of Clinical Expertise */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                <CheckCircle2 size={20} className="text-teal-600" />
                Areas of Clinical Expertise
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {doctor.expertise.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3 text-xs sm:text-sm text-gray-700 border border-slate-100"
                  >
                    <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Qualifications */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                <GraduationCap size={20} className="text-blue-600" />
                Education & Fellowships
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                {doctor.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="leading-snug">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards & Recognitions */}
            {doctor.awards && doctor.awards.length > 0 && (
              <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <Award size={20} className="text-amber-500" />
                  Honors & Awards
                </h3>

                <div className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  {doctor.awards.map((award, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <Award size={16} className="text-amber-500 shrink-0" />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Consultation Schedule Card */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                <Clock size={20} className="text-teal-600" />
                OPD Schedule & Clinic Timings
              </h3>

              <div className="rounded-2xl border border-gray-100 bg-slate-50 p-4 text-xs sm:text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-400 block text-xs">Available Days:</span>
                    <span className="font-bold text-gray-900">{doctor.availableDays}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs">Clinic Hours:</span>
                    <span className="font-bold text-blue-600">{doctor.availableHours}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-500">
                  Slots fill quickly. We recommend booking in advance.
                </p>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setBookingModalOpen(true)}
                  icon={CalendarDays}
                >
                  Book with {doctor.name.split(" ")[1] || "Doctor"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Booking Modal */}
      {bookingModalOpen && (
        <Modal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          title={`Book Appointment with ${doctor.name}`}
          maxWidth="max-w-2xl"
        >
          <AppointmentForm
            initialDepartment={doctor.departmentId}
            initialDoctor={doctor.id}
            onSuccess={() => {
              setTimeout(() => {
                setBookingModalOpen(false);
              }, 2500);
            }}
          />
        </Modal>
      )}
    </main>
  );
}
