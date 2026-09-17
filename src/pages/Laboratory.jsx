import { useState, useMemo } from "react";
import {
  Microscope,
  Home,
  Check,
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Modal from "../components/Modal";

const staticLabTests = [
  {
    id: "cbc",
    name: "Complete Blood Count (CBC / CP with ESR)",
    category: "Hematology",
    sample: "Blood (EDTA)",
    turnaround: "3 - 4 Hours",
    price: "Rs. 950",
    fasting: "No fasting required",
    description: "Evaluates red blood cells, white blood cells, platelets, and hemoglobin to screen for anemia, infections, and clotting disorders.",
  },
  {
    id: "lft",
    name: "Liver Function Tests (LFTs Comprehensive)",
    category: "Biochemistry",
    sample: "Blood (Serum)",
    turnaround: "4 - 6 Hours",
    price: "Rs. 1,800",
    fasting: "8 hours fasting recommended",
    description: "Measures ALT, AST, Bilirubin, Alkaline Phosphatase, Total Protein, and Albumin to assess liver cell integrity and bile clearance.",
  },
  {
    id: "rft",
    name: "Renal / Kidney Function Tests (RFTs / Electrolytes)",
    category: "Biochemistry",
    sample: "Blood (Serum)",
    turnaround: "4 - 6 Hours",
    price: "Rs. 1,600",
    fasting: "No fasting required",
    description: "Measures Serum Creatinine, Blood Urea Nitrogen, Sodium, Potassium, and Chloride to evaluate renal filtration efficiency.",
  },
  {
    id: "lipid",
    name: "Lipid Profile Extended (Cholesterol / Triglycerides)",
    category: "Biochemistry",
    sample: "Blood (Serum)",
    turnaround: "4 - 6 Hours",
    price: "Rs. 1,900",
    fasting: "10 - 12 hours overnight fasting mandatory",
    description: "Comprehensive breakdown of Total Cholesterol, HDL (good), LDL (bad), VLDL, and Triglycerides for cardiovascular risk evaluation.",
  },
  {
    id: "hba1c",
    name: "HbA1c (Glycated Hemoglobin)",
    category: "Diabetes",
    sample: "Blood (Whole Blood)",
    turnaround: "3 - 4 Hours",
    price: "Rs. 1,400",
    fasting: "No fasting required",
    description: "Gold standard diagnostic test reflecting average blood glucose control over the preceding 3-month period.",
  },
  {
    id: "tsh",
    name: "Thyroid Profile (TSH, Free T3, Free T4)",
    category: "Hormones",
    sample: "Blood (Serum)",
    turnaround: "6 - 8 Hours",
    price: "Rs. 2,800",
    fasting: "Early morning sample preferred",
    description: "Diagnoses hyperthyroidism, hypothyroidism, and autoimmune thyroid gland irregularities.",
  },
  {
    id: "vit-d",
    name: "Vitamin D3 (25-Hydroxy Vitamin D)",
    category: "Hormones",
    sample: "Blood (Serum)",
    turnaround: "Same Day",
    price: "Rs. 3,200",
    fasting: "No fasting required",
    description: "Accurate quantitative measurement of body vitamin D stores crucial for calcium absorption and bone density.",
  },
  {
    id: "urine-re",
    name: "Urine Routine & Microscopic Examination (R/E)",
    category: "Routine Diagnostics",
    sample: "Urine (Clean Catch Midstream)",
    turnaround: "2 Hours",
    price: "Rs. 500",
    fasting: "First morning urine preferred",
    description: "Screens for urinary tract infections (UTIs), kidney stones, proteinuria, and metabolic kidney abnormalities.",
  },
];

export default function Laboratory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [homeSamplingModal, setHomeSamplingModal] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const categories = ["All", "Hematology", "Biochemistry", "Diabetes", "Hormones", "Routine Diagnostics"];

  const filteredTests = useMemo(() => {
    return staticLabTests.filter((t) => {
      const matchQuery =
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.description.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchQuery) return false;
      if (activeCategory === "All") return true;
      return t.category.toLowerCase() === activeCategory.toLowerCase();
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="w-full bg-slate-50/70 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 py-16 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <Microscope size={14} />
            <span>Automated Pathology Lab</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Diagnostic Laboratory & Pathology Services
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            International-standard automated analyzers, fast turnaround times, digital online report delivery, and doorstep sample collection.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setHomeSamplingModal(true)}
              icon={Home}
            >
              Book Home Sample Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-[69px] z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md py-4 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:max-w-md">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search diagnostic tests, hormones, or blood work..."
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
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

      {/* Tests Listing */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-100"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
                    {test.category}
                  </span>
                  <span className="font-extrabold text-gray-900 text-base">
                    {test.price}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-gray-900 leading-snug">
                  {test.name}
                </h3>

                <p className="mt-2 text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {test.description}
                </p>

                <div className="mt-4 space-y-1 border-t border-gray-100 pt-3 text-[11px] text-gray-500">
                  <p><strong>Sample:</strong> {test.sample}</p>
                  <p><strong>Turnaround:</strong> {test.turnaround}</p>
                  <p><strong>Fasting:</strong> {test.fasting}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => {
                    setSelectedTest(test);
                    setHomeSamplingModal(true);
                  }}
                  icon={Home}
                >
                  Book Home Sampling
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home Sampling Modal */}
      {homeSamplingModal && (
        <Modal
          isOpen={homeSamplingModal}
          onClose={() => {
            setHomeSamplingModal(false);
            setSubmitted(false);
          }}
          title="Book Home Blood Sample Collection"
          maxWidth="max-w-md"
        >
          {submitted ? (
            <div className="text-center py-6">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Check size={32} />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Home Sampling Request Received!</h4>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Our certified phlebotomist will contact you to confirm the time slot and address. All samples are transported with strict cold-chain protocols.
              </p>
              <div className="mt-6">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setHomeSamplingModal(false);
                    setSubmitted(false);
                  }}
                >
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 text-xs"
            >
              {selectedTest && (
                <div className="rounded-xl bg-blue-50 p-3 text-blue-900 border border-blue-100 flex justify-between items-center">
                  <span>{selectedTest.name}</span>
                  <span className="font-bold">{selectedTest.price}</span>
                </div>
              )}

              <div>
                <label className="mb-1 block font-bold text-gray-700">Patient Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ali Ahmed"
                  className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-bold text-gray-700">Contact Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +92 300 1234567"
                  className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-bold text-gray-700">Home Address & Landmark *</label>
                <textarea
                  required
                  rows="2"
                  placeholder="House #, Street, Sector / Area in Islamabad/Rawalpindi"
                  className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <div>
                <label className="mb-1 block font-bold text-gray-700">Preferred Collection Date & Time *</label>
                <input
                  type="datetime-local"
                  required
                  className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2 border-t border-gray-100">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setHomeSamplingModal(false);
                    setSelectedTest(null);
                  }}
                >
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Confirm Sampling Request
                </Button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </main>
  );
}
