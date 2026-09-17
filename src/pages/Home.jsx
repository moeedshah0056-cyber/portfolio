import { Link } from "react-router-dom";
import {
  CalendarDays,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Clock3,
  ArrowRight,
  Sparkles,
  HeartPulse,
  Award,
  Hospital,
  BadgeCheck,
} from "lucide-react";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import EmergencyBanner from "../components/EmergencyBanner";
import Stats from "../components/Stats";
import DepartmentCard from "../components/DepartmentCard";
import DoctorCard from "../components/DoctorCard";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import BlogCard from "../components/BlogCard";
import AppointmentForm from "../components/AppointmentForm";

import { departments } from "../data/departments";
import { doctors } from "../data/doctors";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { blogs } from "../data/blogs";
import { healthPackages } from "../data/packages";

export default function Home() {
  const featuredDoctors = doctors.filter((d) => d.featured).slice(0, 4);
  const featuredDepartments = departments.slice(0, 6);
  const featuredServices = services.slice(0, 6);
  const featuredBlogs = blogs.slice(0, 3);
  const featuredPackages = healthPackages.slice(0, 3);

  return (
    <main className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50/30 py-12 sm:py-16 lg:py-20">
        {/* Background decorative ambient glows */}
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
            {/* Left Hero Content */}
            <div className="max-w-2xl">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-blue-700 shadow-xs mb-6">
                <ShieldCheck size={16} className="text-blue-600" />
                <span>Trusted Healthcare Since 2001 • JCI Accredited</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
                Your Health Is Our{" "}
                <span className="text-blue-600 block sm:inline">
                  Highest Priority
                </span>
              </h1>

              {/* Supporting Subtext */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl">
                Experience compassionate healthcare delivered by world-class doctors,
                cutting-edge medical technology, and a dedicated team committed to
                your family&apos;s lifelong wellbeing.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  to="/appointment"
                  icon={CalendarDays}
                  iconPosition="left"
                  className="shadow-lg shadow-blue-600/20"
                >
                  Book Appointment
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href="tel:+92518440100"
                  icon={Phone}
                  iconPosition="left"
                >
                  Call: +92 (51) 844-0100
                </Button>
              </div>

              {/* Trust Points */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0" />
                  <span>150+ Doctors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0" />
                  <span>Modern Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0" />
                  <span>24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0" />
                  <span>Patient-First</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-3 sm:p-4 shadow-2xl shadow-blue-900/10">
                {/* Central Gradient Card */}
                <div className="relative flex aspect-[4/3] sm:aspect-[16/11] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white p-6 sm:p-8 text-center shadow-inner">
                  {/* Background lines */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="relative z-10">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                      <Stethoscope size={42} className="text-white" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      Center of Clinical Excellence
                    </h2>

                    <p className="mt-2 text-xs sm:text-sm text-blue-100 max-w-sm mx-auto">
                      Dedicated multidisciplinary clinics equipped with advanced 3T MRI, Cath Labs, and robotic surgical suites.
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-xs border border-white/20">
                      <Sparkles size={14} className="text-amber-300" />
                      <span>Over 99% Patient Satisfaction Rate</span>
                    </div>
                  </div>
                </div>

                {/* Floating Emergency Badge */}
                <div className="absolute -bottom-4 -left-3 sm:-left-6 rounded-2xl border border-gray-100 bg-white p-3 sm:p-4 shadow-xl shadow-slate-900/10 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Clock3 size={22} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Emergency Room
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      Open 24 Hours / 7 Days
                    </p>
                  </div>
                </div>

                {/* Floating Specialist Badge */}
                <div className="absolute -right-3 -top-4 sm:-right-6 rounded-2xl border border-gray-100 bg-white p-3 sm:p-4 shadow-xl shadow-slate-900/10 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Award size={22} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Medical Faculty
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      150+ Top Specialists
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EMERGENCY BANNER */}
      <section className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EmergencyBanner />
        </div>
      </section>

      {/* 3. HOSPITAL KEY STATISTICS */}
      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stats />
        </div>
      </section>

      {/* 4. CLINICAL DEPARTMENTS */}
      <section className="bg-slate-50/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <SectionTitle
              eyebrow="Clinical Excellence"
              title="Specialized Medical Departments"
              description="From preventative health to advanced surgical interventions, our specialized units deliver comprehensive healthcare."
              align="left"
              className="mb-0 max-w-2xl"
            />

            <div className="mt-4 md:mt-0">
              <Button
                variant="outline"
                to="/departments"
                icon={ArrowRight}
                iconPosition="right"
              >
                View All Departments
              </Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDepartments.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE CLINICAL SERVICES */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Comprehensive Care"
            title="Hospital Services & Diagnostics"
            description="Round-the-clock emergency medical response, modern diagnostic laboratories, and robotic surgery facilities."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" to="/services" icon={ArrowRight} iconPosition="right">
              Explore All Hospital Services
            </Button>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-teal-600/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Info */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-700/60 bg-blue-900/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
                <BadgeCheck size={14} className="text-blue-400" />
                Why Patients Trust MediCare
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Setting New Benchmarks in Patient Safety & Clinical Outcomes
              </h2>

              <p className="mt-5 text-base text-slate-300 leading-relaxed">
                We blend international medical standards with deep empathy. Our patient-first philosophy ensures every individual receives personalized attention from diagnosis to complete rehabilitation.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-800/40 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Board-Certified Specialist Physicians
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Over 150 experienced consultants with training from renowned institutions across the UK, USA, and Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-800/40 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
                    <Hospital size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Ultra-Modern Diagnostics & 3T MRI
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Precision robotic navigation, high-throughput pathology, and digital cath lab facilities for accurate diagnoses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-800/40 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-600 text-white">
                    <Clock3 size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      24/7 Rapid Emergency Triage
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Zero-delay emergency triage, life-support resuscitation bays, and dedicated ICU ambulances on standby.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Highlights Box */}
            <div className="rounded-3xl border border-slate-800 bg-slate-800/60 p-6 sm:p-8 backdrop-blur-xs">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <HeartPulse size={22} className="text-red-400" />
                MediCare Quality Guarantees
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold text-blue-400">99.4%</div>
                  <p className="mt-1 text-xs font-semibold text-white">Hygiene & Sterility Rate</p>
                  <p className="mt-1 text-[11px] text-slate-400">Strict laminar airflow positive pressure theaters</p>
                </div>

                <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold text-teal-400">&lt; 40 min</div>
                  <p className="mt-1 text-xs font-semibold text-white">Door-to-Balloon PCI</p>
                  <p className="mt-1 text-[11px] text-slate-400">Rapid life-saving primary angioplasty for heart attacks</p>
                </div>

                <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold text-amber-400">1:1</div>
                  <p className="mt-1 text-xs font-semibold text-white">ICU Nursing Ratio</p>
                  <p className="mt-1 text-[11px] text-slate-400">Dedicated critical care monitoring for every bed</p>
                </div>

                <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold text-indigo-400">100%</div>
                  <p className="mt-1 text-xs font-semibold text-white">Digital Health Records</p>
                  <p className="mt-1 text-[11px] text-slate-400">Instant online reports on secure patient portal</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-blue-600/20 border border-blue-500/30 p-4 text-center">
                <p className="text-xs text-blue-200">
                  Ready to consult with our specialized doctors?
                </p>
                <div className="mt-3 flex justify-center">
                  <Button variant="primary" size="md" to="/appointment">
                    Book Doctor Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR TOP SPECIALIST DOCTORS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <SectionTitle
              eyebrow="Our Medical Team"
              title="Meet Our Leading Specialists"
              description="Compassionate, world-renowned doctors providing expert care in cardiology, pediatrics, neurology, and surgery."
              align="left"
              className="mb-0 max-w-2xl"
            />

            <div className="mt-4 md:mt-0">
              <Button
                variant="outline"
                to="/doctors"
                icon={ArrowRight}
                iconPosition="right"
              >
                View All Doctors
              </Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. PREVENTIVE HEALTH PACKAGES */}
      <section className="bg-slate-50/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Preventive Health"
            title="Comprehensive Health Checkup Packages"
            description="Catch potential health issues early with our discounted executive checkups, cardiac profiles, and wellness plans."
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  pkg.popular
                    ? "border-blue-600 ring-2 ring-blue-600/20 shadow-blue-900/10"
                    : "border-gray-100"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {pkg.testsIncludedCount}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {pkg.discount}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {pkg.name}
                  </h3>

                  <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-gray-900">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {pkg.originalPrice}
                    </span>
                  </div>

                  <div className="mt-6 space-y-2 border-t border-gray-100 pt-5 text-xs text-gray-600">
                    <p className="font-semibold text-gray-900 mb-2">Key Inclusions:</p>
                    {pkg.categories[0].tests.slice(0, 4).map((test, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-teal-500 shrink-0 mt-0.5" />
                        <span>{test}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-100 pt-5">
                  <Button
                    variant={pkg.popular ? "primary" : "outline"}
                    to="/packages"
                    fullWidth
                  >
                    View Package Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/packages"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Explore all customized health packages</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. APPOINTMENT BOOKING INTERACTIVE FORM */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left CTA text */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 border border-blue-100 mb-4">
                <CalendarDays size={14} />
                <span>Instant Consultation Booking</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Schedule an Appointment with Top Medical Specialists
              </h2>

              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Avoid queues by booking online. Select your preferred department, doctor, and convenient time slot for priority hospital consultation.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    Instant SMS & Email Appointment Confirmation
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    Flexible Rescheduling via Patient Portal
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    Access to Digital Prescription & Lab History
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-gray-100 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Need phone assistance?</p>
                    <p className="text-base font-bold text-gray-900">+92 (51) 844-0100</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* 10. PATIENT TESTIMONIALS */}
      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Patient Stories"
            title="Real Stories of Healing and Hope"
            description="Read verified experiences from patients who entrusted their health and recovery to MediCare."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((test) => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. HEALTH ARTICLES & BLOG */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <SectionTitle
              eyebrow="Health Library"
              title="Latest Health Advice & Medical Insights"
              description="Physician-written wellness guides, preventative care tips, and updates in medical treatments."
              align="left"
              className="mb-0 max-w-2xl"
            />

            <div className="mt-4 md:mt-0">
              <Button variant="outline" to="/blog" icon={ArrowRight} iconPosition="right">
                View All Articles
              </Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CTA BANNER */}
      <section className="bg-blue-600 text-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Compassionate Healthcare You Can Rely On
              </h2>
              <p className="mt-2 text-sm sm:text-base text-blue-100">
                Whether you need routine checkups, specialist consultation, or emergency care, our medical team is here for you 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
              <Button
                variant="white"
                size="lg"
                to="/appointment"
                icon={CalendarDays}
                iconPosition="left"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/contact"
                className="bg-blue-700/80 text-white border-blue-400/40 hover:bg-blue-800 hover:text-white"
              >
                Contact Hospital
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}