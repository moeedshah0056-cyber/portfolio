import {
  Phone,
  Flame,
  Clock,
  HeartPulse,
  Activity,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import Button from "../components/Button";

export default function Emergency() {
  const triageLevels = [
    {
      level: "Level 1: Immediate Resuscitation",
      color: "bg-red-600 text-white",
      time: "Immediate (0 minutes)",
      cases: "Cardiac arrest, severe respiratory failure, massive hemorrhaging, unconscious polytrauma.",
    },
    {
      level: "Level 2: Emergent Critical",
      color: "bg-orange-500 text-white",
      time: "Within 10 minutes",
      cases: "Acute chest pain, severe stroke signs, high-grade burns, severe asthma, poisoning.",
    },
    {
      level: "Level 3: Urgent",
      color: "bg-amber-500 text-white",
      time: "Within 30 minutes",
      cases: "Moderate fractures, severe abdominal pain, persistent high fever with dehydration.",
    },
    {
      level: "Level 4: Less Urgent",
      color: "bg-blue-500 text-white",
      time: "Within 60 minutes",
      cases: "Minor lacerations requiring suturing, sprains, mild allergic reactions.",
    },
  ];

  const firstAidTips = [
    {
      condition: "Suspected Heart Attack",
      steps: [
        "Call Emergency 1122 immediately.",
        "Have the person sit down, rest in a semi-upright posture, and remain calm.",
        "Chew an aspirin tablet (300mg) if not allergic.",
        "Loosen tight clothing around neck and waist.",
      ],
    },
    {
      condition: "Acute Stroke (F.A.S.T)",
      steps: [
        "Face: Look for facial droop when smiling.",
        "Arms: Check if one arm drifts downward when raised.",
        "Speech: Check for slurred or strange speech.",
        "Time: Call 1122 immediately; note the exact time symptoms started.",
      ],
    },
    {
      condition: "Severe Bleeding & Wounds",
      steps: [
        "Apply direct, firm pressure on the wound using a clean cloth or sterile gauze.",
        "Do not remove foreign objects embedded deeply in tissue.",
        "Elevate the injured limb above heart level if no fracture is suspected.",
        "Keep the person warm and lying down.",
      ],
    },
    {
      condition: "Severe Burns",
      steps: [
        "Cool the burn immediately with cool running tap water for at least 15-20 minutes.",
        "Do not apply ice, butter, or oil to the wound.",
        "Cover the burn loosely with sterile non-stick plastic wrap or clean dressing.",
        "Seek emergency room medical attention.",
      ],
    },
  ];

  return (
    <main className="w-full bg-slate-50/70 pb-20">
      {/* High-Alert Emergency Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-slate-900 to-slate-950 py-16 sm:py-24 text-white">
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-red-600/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/15 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-red-400 mb-6">
            <Flame size={16} className="animate-pulse" />
            <span>24/7 Level 1 Trauma & Resuscitation Center</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            24/7 Emergency & Trauma Care
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            No appointment needed. Our emergency room is open 24 hours a day, 365 days a year with board-certified trauma surgeons, emergency physicians, and ACLS mobile ICU ambulances.
          </p>

          {/* Quick Emergency Phone Actions */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:1122"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-red-600/40 transition hover:bg-red-700 hover:-translate-y-0.5"
            >
              <Phone size={22} className="animate-pulse" />
              <span>Call Emergency: 1122</span>
            </a>

            <a
              href="tel:+92518441122"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/80 px-6 py-4 text-base font-bold text-slate-200 transition hover:bg-slate-700 hover:text-white"
            >
              <Phone size={18} className="text-red-400" />
              <span>Direct ER Desk: +92 (51) 844-1122</span>
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Department Key Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-base font-bold text-gray-900">Zero Wait-Time Triage</h3>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Immediate clinical assessment by certified emergency triage nurses upon arrival.
            </p>
          </div>

          <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 mb-4">
              <HeartPulse size={24} />
            </div>
            <h3 className="text-base font-bold text-gray-900">Dedicated Cath Lab</h3>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Door-to-balloon primary angioplasty under 40 minutes for acute heart attacks.
            </p>
          </div>

          <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 mb-4">
              <Activity size={24} />
            </div>
            <h3 className="text-base font-bold text-gray-900">Stroke Rescue Team</h3>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Rapid multi-slice CT scanning and thrombolytic intravenous tissue plasminogen activator (tPA).
            </p>
          </div>

          <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-base font-bold text-gray-900">Mobile ICU Ambulances</h3>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              On-board transport ventilators, cardiac monitors, and emergency life support technicians.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Triage Levels */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">
            Emergency Protocols
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            Emergency Triage Classification
          </h2>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl">
            Patients arriving at the emergency room are prioritized based on clinical severity according to the international Emergency Severity Index (ESI).
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {triageLevels.map((lvl, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm flex flex-col justify-between"
            >
              <div className={`p-4 font-bold text-xs ${lvl.color}`}>
                {lvl.level}
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between text-xs">
                <div>
                  <span className="text-gray-400 block mb-1">Target Response Time:</span>
                  <span className="font-bold text-gray-900 text-sm block mb-3">{lvl.time}</span>
                  <span className="text-gray-400 block mb-1">Representative Cases:</span>
                  <p className="text-gray-700 leading-relaxed">{lvl.cases}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* First Aid Guidelines */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-10 shadow-sm">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Immediate Action
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">
              First Aid Steps While Waiting for Emergency Services
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Calm and correct immediate response can prevent critical complications.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {firstAidTips.map((tip, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-50 p-5 border border-slate-100 text-xs">
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-amber-500" />
                  {tip.condition}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {tip.steps.map((st, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-teal-500 shrink-0 mt-0.5" />
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Address & Emergency Access */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Emergency Gate & Ambulance Bay
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                MediCare Hospital emergency entrance is located on the North Wing with direct drive-in ramp for rapid vehicle drop-off and stretcher access.
              </p>

              <div className="mt-6 space-y-2 text-xs text-slate-300">
                <p><strong>Physical Address:</strong> Emergency Wing, Sector H-8/4, Kashmir Highway, Islamabad</p>
                <p><strong>Ambulance Dispatch:</strong> 1122 (Toll Free) / +92 (51) 844-1122</p>
                <p><strong>Helipad Available:</strong> For air ambulance evacuation transfers.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-4">
              <a
                href="tel:1122"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-red-700 transition"
              >
                <Phone size={18} />
                <span>Call Ambulance Now</span>
              </a>
              <Button
                variant="outline"
                to="/contact"
                className="border-slate-700 text-slate-200 hover:bg-slate-800"
              >
                View Driving Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
