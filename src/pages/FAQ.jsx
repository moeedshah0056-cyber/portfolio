import { useState, useMemo } from "react";
import {
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

const staticFaqs = [
  {
    category: "Appointments & OPD",
    question: "How can I book an appointment with a specialist doctor?",
    answer: "You can book an appointment online anytime through our website by visiting the 'Book Appointment' page, selecting your desired department and consultant, and picking a convenient date and time. Alternatively, you can call our 24/7 OPD helpline at +92 (51) 844-0100.",
  },
  {
    category: "Appointments & OPD",
    question: "Can I reschedule or cancel my booked appointment?",
    answer: "Yes, you can easily reschedule your appointment through the Patient Portal or by calling our appointment desk at least 2 hours prior to your scheduled consultation time.",
  },
  {
    category: "Emergency & Critical Care",
    question: "Do I need an appointment or prior call for emergency care?",
    answer: "No. Our Emergency and Trauma Center operates 24 hours a day, 7 days a week, 365 days a year. Walk-in emergency cases and ambulance arrivals are received immediately without any appointment.",
  },
  {
    category: "Emergency & Critical Care",
    question: "How can I request a MediCare Mobile ICU Ambulance?",
    answer: "In any life-threatening emergency, dial 1122 or call our hospital emergency dispatch desk directly at +92 (51) 844-1122. Our ambulance dispatch team is deployed instantly with an emergency medical technician (EMT) and life-support ventilator.",
  },
  {
    category: "Billing & Insurance",
    question: "Which health insurance panel companies and corporate plans are accepted?",
    answer: "MediCare is paneled with all major insurance providers in Pakistan, including Jubilee Life, EFU General, State Life, Askari Health, and leading multinational corporate panels. Please present your original panel insurance card at the admissions desk for cashless processing.",
  },
  {
    category: "Diagnostics & Reports",
    question: "How and when can I collect my laboratory and radiology reports?",
    answer: "Most routine blood test results are available within 3 to 4 hours. You can view and download verified PDF reports directly through our Patient Portal without needing to visit the hospital in person. Physical hard copies are also available at the lab reception.",
  },
  {
    category: "Diagnostics & Reports",
    question: "Does MediCare provide home blood sample collection?",
    answer: "Yes! Our certified phlebotomists provide sterile, cold-chain home blood sample collection across Islamabad and Rawalpindi. You can book home sampling online through our Laboratory page.",
  },
  {
    category: "Visiting Hours & Inpatient",
    question: "What are the hospital inpatient visiting hours?",
    answer: "To ensure patient rest and optimal recovery, general ward visiting hours are from 04:00 PM to 07:00 PM daily. For ICU and CCU patients, strictly one immediate family member is permitted from 05:00 PM to 06:00 PM.",
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItems, setOpenItems] = useState({ 0: true });

  const categories = ["All", "Appointments & OPD", "Emergency & Critical Care", "Billing & Insurance", "Diagnostics & Reports", "Visiting Hours & Inpatient"];

  const filteredFaqs = useMemo(() => {
    return staticFaqs.filter((f) => {
      const matchQuery =
        f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.category.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchQuery) return false;
      if (activeCategory === "All") return true;
      return f.category === activeCategory;
    });
  }, [searchQuery, activeCategory]);

  const toggleItem = (idx) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <main className="w-full bg-slate-50/70 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 py-16 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <HelpCircle size={14} />
            <span>Help Center & Guidelines</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about doctor appointments, laboratory tests, hospital visiting rules, emergency care, and insurance panels.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-[69px] z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md py-4 shadow-xs">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Type your question or topic..."
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-3 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
                      : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = Boolean(openItems[idx]);
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-xs transition duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left text-sm sm:text-base font-bold text-gray-900 hover:text-blue-600 transition focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 leading-snug">{faq.question}</span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${isOpen ? "bg-blue-50 text-blue-600 rotate-180" : "bg-slate-50 text-gray-400"}`}>
                    <ChevronDown size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-gray-100 px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-600 leading-relaxed animate-fade-in">
                    <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-600 mb-2">
                      {faq.category}
                    </span>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center">
            <HelpCircle size={32} className="mx-auto text-gray-400 mb-2" />
            <h3 className="font-bold text-gray-900 text-sm">No matching questions found</h3>
            <p className="text-xs text-gray-500 mt-1">Try another keyword or contact our support team directly.</p>
          </div>
        )}

        {/* Still Have Questions Box */}
        <div className="mt-12 rounded-3xl bg-blue-50/80 border border-blue-100 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Still have questions or need clinical advice?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-600">
              Our patient relations team is available 24/7 to assist with your medical inquiries.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <Button variant="primary" size="md" to="/contact">
              Contact Patient Desk
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
