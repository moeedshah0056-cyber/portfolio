import {
  ShieldCheck,
  Award,
  HeartPulse,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Stats from "../components/Stats";

export default function About() {
  const milestones = [
    {
      year: "2001",
      title: "Foundation of MediCare",
      description: "Established as a 50-bed multi-specialty community hospital with full general medicine and surgery wings.",
    },
    {
      year: "2008",
      title: "Dedicated Cardiac & Cath Lab Center",
      description: "Inaugurated state-of-the-art cardiac catheterization laboratory and round-the-clock primary PCI services.",
    },
    {
      year: "2015",
      title: "Level III NICU & Neuro-ICU Wing",
      description: "Expanded critical care capabilities with high-frequency ventilators and dedicated pediatric/neonatal units.",
    },
    {
      year: "2020",
      title: "JCI International Accreditation",
      description: "Awarded international healthcare quality certification for rigorous adherence to global patient safety standards.",
    },
    {
      year: "2024",
      title: "Robotic Surgical & 3T MRI Pavilion",
      description: "Introduced computer-navigated robotic joint replacements and ultra-high-resolution 3.0 Tesla magnetic resonance imaging.",
    },
  ];

  const values = [
    {
      title: "Compassionate Care",
      description: "Treating every patient and their loved ones with dignity, kindness, and holistic emotional support.",
      icon: HeartPulse,
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: "Clinical Excellence",
      description: "Upholding evidence-based medical practices led by certified consultants and specialized clinical teams.",
      icon: Award,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Patient Safety & Integrity",
      description: "Zero-compromise approach to infection control, strict medication verification, and transparent ethical billing.",
      icon: ShieldCheck,
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Medical Innovation",
      description: "Investing continually in advanced robotic surgery, precision diagnostics, and telemedicine accessibility.",
      icon: Sparkles,
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  const leadership = [
    {
      name: "Dr. Mansoor Tariq",
      role: "Chief Executive Officer & Medical Director",
      qualification: "FRCS (Edin), MHA (Harvard)",
      bio: "Over 30 years of clinical and hospital administration leadership across top healthcare systems.",
      avatarColor: "from-blue-700 to-indigo-800",
    },
    {
      name: "Dr. Samina Rizvi",
      role: "Chief Medical Officer",
      qualification: "MBBS, FCPS (Internal Medicine), FACP (USA)",
      bio: "Champion of clinical audit, patient outcome tracking, and multi-departmental medical coordination.",
      avatarColor: "from-teal-600 to-emerald-700",
    },
    {
      name: "Engr. Haroon Rasheed",
      role: "Chief Operations & Technology Officer",
      qualification: "MS Biomedical Engineering (Imperial College)",
      bio: "Spearheading modern hospital digital infrastructure, electronic health records, and AI diagnostics.",
      avatarColor: "from-slate-700 to-slate-900",
    },
  ];

  return (
    <main className="w-full">
      {/* Page Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 py-16 sm:py-20 text-white">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <Building2 size={14} />
            <span>About MediCare Hospital</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Dedicated to Healing, Driven by Clinical Excellence
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Since 2001, MediCare has stood as a beacon of compassionate healthcare, advanced medical technology, and patient-centered healing.
          </p>
        </div>
      </section>

      {/* Hospital Overview & Mission / Vision */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Story */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 border border-blue-100 mb-4">
                <Target size={14} />
                <span>Our Heritage & Purpose</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-snug">
                Pioneering Modern Healthcare with a Human Touch
              </h2>

              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Founded with a singular commitment to provide international-standard healthcare to every patient, MediCare has grown into a premier tertiary care hospital with over 350 beds, 25 specialized clinical departments, and an esteemed faculty of more than 150 medical specialists.
              </p>

              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                We combine continuous investments in medical innovations—including robotic surgery, ultra-high-definition imaging, and precision oncology—with deep empathy, clear patient communication, and accessible care.
              </p>

              {/* Mission & Vision Cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-base mb-2">
                    <Target size={18} />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To deliver compassionate, world-class healthcare with integrity, precision, and patient safety at the center of every decision.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-teal-600 font-bold text-base mb-2">
                    <Eye size={18} />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To be the nation&apos;s most trusted healthcare destination, recognized globally for clinical excellence, research, and medical innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Hospital Highlights */}
            <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-blue-50/50 via-white to-teal-50/30 p-6 sm:p-8 shadow-lg shadow-blue-900/5">
              <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Building2 size={20} className="text-blue-600" />
                Hospital Infrastructure & Key Facts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-gray-100 shadow-2xs">
                  <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">350+ Inpatient Bed Capacity</span>
                    <p className="text-xs text-gray-500">Including luxury executive suites, semi-private rooms, and isolation units.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-gray-100 shadow-2xs">
                  <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">12 Modular Operation Theaters</span>
                    <p className="text-xs text-gray-500">HEPA-filtered laminar airflow, robotic orthopedic navigation, 4K endoscopy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-gray-100 shadow-2xs">
                  <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">60-Bed Critical Care Complex</span>
                    <p className="text-xs text-gray-500">Integrated Medical ICU, Coronary CCU, Neuro ICU, and Level III Neonatal NICU.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-gray-100 shadow-2xs">
                  <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">24/7 Automated Pathology & Blood Bank</span>
                    <p className="text-xs text-gray-500">Fully computerized diagnostic testing and real-time online report portal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Stats */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stats />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Principles"
            title="The Core Values That Guide Our Care"
            description="Every physician, nurse, and support staff member at MediCare is driven by these fundamental values."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-100"
                >
                  <div>
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${val.color}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{val.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline & Milestones */}
      <section className="bg-slate-50/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Journey of Excellence"
            title="25 Years of Healing Milestones"
            description="A timeline of our persistent growth and dedication to bringing world-standard healthcare home."
          />

          <div className="relative mx-auto max-w-4xl">
            {/* Center line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-blue-200" />

            <div className="space-y-8">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    idx % 2 === 0 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Pin Dot */}
                  <div className="absolute left-4 sm:left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-md z-10">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>

                  {/* Content Box */}
                  <div
                    className={`ml-10 sm:ml-0 sm:w-1/2 ${
                      idx % 2 === 0 ? "sm:pl-10 text-left" : "sm:pr-10 sm:text-right"
                    }`}
                  >
                    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs transition hover:shadow-md">
                      <span className="inline-block rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600 mb-2">
                        {m.year}
                      </span>
                      <h4 className="text-base font-bold text-gray-900">
                        {m.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Leadership"
            title="Hospital Executive & Clinical Leadership"
            description="Our executive board pairs veteran clinical expertise with modern healthcare management to ensure exceptional patient outcomes."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((lead, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-100 flex flex-col justify-between"
              >
                <div>
                  <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${lead.avatarColor} text-white font-bold text-xl shadow-md`}>
                    {lead.name.split(" ")[1]?.[0] || "D"}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    {lead.name}
                  </h3>

                  <p className="text-xs font-semibold text-blue-600 mt-0.5">
                    {lead.role}
                  </p>

                  <p className="text-xs text-gray-400 mt-1 font-medium">
                    {lead.qualification}
                  </p>

                  <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                    {lead.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-600 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Experience the MediCare Difference
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-blue-100">
              Schedule your consultation with our board-certified medical faculty today.
            </p>
          </div>

          <Button
            variant="white"
            size="lg"
            to="/appointment"
            icon={CalendarDays}
            iconPosition="left"
          >
            Book Appointment
          </Button>
        </div>
      </section>
    </main>
  );
}