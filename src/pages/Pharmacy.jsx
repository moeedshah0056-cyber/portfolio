import { useState, useMemo } from "react";
import {
  Pill,
  Upload,
  Phone,
  ShieldCheck,
  Truck,
  Clock,
  ShoppingCart,
  Check,
} from "lucide-react";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";

const staticMedicines = [
  {
    id: "panadol",
    name: "Paracetamol 500mg (Pain / Fever Relief)",
    category: "Pain Relief",
    manufacturer: "GSK",
    form: "Tablets (Box of 200)",
    price: "Rs. 450",
    prescriptionRequired: false,
  },
  {
    id: "aug",
    name: "Co-Amoxiclav 625mg",
    category: "Antibiotics",
    manufacturer: "GSK",
    form: "Tablets (Strip of 14)",
    price: "Rs. 580",
    prescriptionRequired: true,
  },
  {
    id: "lip",
    name: "Atorvastatin 20mg (Lipid Regulator)",
    category: "Cardiovascular",
    manufacturer: "Pfizer",
    form: "Tablets (Pack of 30)",
    price: "Rs. 720",
    prescriptionRequired: true,
  },
  {
    id: "met",
    name: "Metformin HCl 500mg Extended Release",
    category: "Diabetes",
    manufacturer: "Merck",
    form: "Tablets (Pack of 50)",
    price: "Rs. 380",
    prescriptionRequired: true,
  },
  {
    id: "nex",
    name: "Esomeprazole 40mg (Acid Reflux / GERD)",
    category: "Gastrointestinal",
    manufacturer: "Getz Pharma",
    form: "Capsules (Pack of 14)",
    price: "Rs. 460",
    prescriptionRequired: false,
  },
  {
    id: "vit-c",
    name: "Vitamin C + Zinc Effervescent 1000mg",
    category: "Vitamins & Supplements",
    manufacturer: "Bayer",
    form: "Tubes of 20 Tabs",
    price: "Rs. 650",
    prescriptionRequired: false,
  },
  {
    id: "inhaler",
    name: "Salbutamol 100mcg Evohaler",
    category: "Respiratory",
    manufacturer: "GSK",
    form: "200 Metered Doses",
    price: "Rs. 320",
    prescriptionRequired: true,
  },
  {
    id: "firstaid",
    name: "Sterile Gauze & Povidone Iodine Dressing Kit",
    category: "First Aid",
    manufacturer: "MediCare Surgical",
    form: "Sterile First Aid Box",
    price: "Rs. 890",
    prescriptionRequired: false,
  },
];

export default function Pharmacy() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [prescriptionModal, setPrescriptionModal] = useState(false);
  const [orderedItems, setOrderedItems] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const categories = ["All", "Pain Relief", "Antibiotics", "Cardiovascular", "Diabetes", "Vitamins & Supplements", "First Aid"];

  const filteredMedicines = useMemo(() => {
    return staticMedicines.filter((m) => {
      const matchQuery =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchQuery) return false;
      if (activeCategory === "All") return true;
      return m.category.toLowerCase() === activeCategory.toLowerCase();
    });
  }, [searchQuery, activeCategory]);

  const handleAddToCart = (id) => {
    setOrderedItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const totalCartCount = Object.values(orderedItems).reduce((a, b) => a + b, 0);

  return (
    <main className="w-full bg-slate-50/70 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 py-16 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <Pill size={14} />
            <span>24/7 Clinical Pharmacy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Hospital Pharmacy & Prescription Delivery
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            100% genuine medications, temperature-controlled biological cold chains, registered clinical pharmacists, and express home delivery.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setPrescriptionModal(true)}
              icon={Upload}
            >
              Upload Prescription for Refill
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="tel:+92518440109"
              className="border-slate-700 bg-slate-800/60 text-slate-200 hover:bg-slate-800"
              icon={Phone}
            >
              Call Pharmacy: +92 (51) 844-0109
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3.5 rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">100% Authentic Products</h4>
              <p className="text-[11px] text-gray-500">Sourced directly from licensed pharma companies</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <Truck size={20} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Express Delivery</h4>
              <p className="text-[11px] text-gray-500">Same-day doorstep delivery within twin cities</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Open 24 Hours</h4>
              <p className="text-[11px] text-gray-500">Round-the-clock emergency medicines counter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-[69px] z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md py-4 shadow-xs mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:max-w-md">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search medicines by brand name or generic..."
              />
            </div>

            <div className="flex items-center justify-between gap-3">
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

              {totalCartCount > 0 && (
                <span className="flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-xs">
                  <ShoppingCart size={13} />
                  <span>{totalCartCount} item(s)</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Medicines Catalog */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMedicines.map((med) => (
            <div
              key={med.id}
              className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-100"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                    {med.category}
                  </span>
                  {med.prescriptionRequired && (
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
                      Rx Required
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-base font-bold text-gray-900 leading-snug">
                  {med.name}
                </h3>

                <p className="mt-1 text-xs text-blue-600 font-medium">
                  {med.manufacturer} • {med.form}
                </p>

                <div className="mt-4 border-t border-gray-100 pt-3 flex items-baseline justify-between">
                  <span className="text-xs text-gray-400">Retail Price:</span>
                  <span className="text-lg font-black text-gray-900">{med.price}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100">
                <Button
                  variant={orderedItems[med.id] ? "success" : "primary"}
                  size="sm"
                  fullWidth
                  onClick={() => handleAddToCart(med.id)}
                  icon={orderedItems[med.id] ? Check : ShoppingCart}
                >
                  {orderedItems[med.id] ? `Added (${orderedItems[med.id]})` : "Add to Order"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prescription Upload Modal */}
      {prescriptionModal && (
        <Modal
          isOpen={prescriptionModal}
          onClose={() => {
            setPrescriptionModal(false);
            setSubmitted(false);
          }}
          title="Upload Doctor's Prescription"
          maxWidth="max-w-md"
        >
          {submitted ? (
            <div className="text-center py-6">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Check size={32} />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Prescription Uploaded!</h4>
              <p className="mt-2 text-xs text-gray-600">
                Our clinical pharmacist will review the prescription, verify dosages, and call you to arrange dispatch.
              </p>
              <div className="mt-6">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setPrescriptionModal(false);
                    setSubmitted(false);
                  }}
                >
                  Close
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
              <div>
                <label className="mb-1 block font-bold text-gray-700">Patient Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Fatima Tariq"
                  className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-bold text-gray-700">Delivery Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +92 300 1234567"
                  className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-bold text-gray-700">Delivery Address *</label>
                <textarea
                  required
                  rows="2"
                  placeholder="Complete street address for dispatch"
                  className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <div>
                <label className="mb-1 block font-bold text-gray-700">Select Prescription File (Photo / PDF) *</label>
                <input
                  type="file"
                  required
                  accept="image/*,.pdf"
                  className="w-full rounded-xl border border-dashed border-gray-300 p-3 text-xs text-gray-500 bg-slate-50"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2 border-t border-gray-100">
                <Button variant="outline" size="sm" onClick={() => setPrescriptionModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Submit Prescription
                </Button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </main>
  );
}
