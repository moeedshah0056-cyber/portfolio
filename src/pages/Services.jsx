import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Activity,
  Clock,
  Phone,
  CheckCircle2,
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { services } from "../data/services";

export default function Services() {
  const [searchParams] = useSearchParams();
  const activeServiceParam = searchParams.get("service");

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(
    activeServiceParam ? services.find((s) => s.id === activeServiceParam) || null : null
  );

  const categories = [
    "All",
    "Critical Care",
    "Surgical Care",
    "Diagnostics",
    "Clinical Services",
    "Rehabilitation",
    "Digital Health",
  ];

  const filteredServices = useMemo(() => {
    return services.filter((srv) => {
      const matchesSearch =
        srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.fullDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (activeCategory === "All") return true;
      return srv.category.toLowerCase() === activeCategory.toLowerCase();
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 py-16 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <Activity size={14} />
            <span>Hospital Capabilities</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Clinical Services & Diagnostic Facilities
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From 24/7 critical trauma resuscitation to advanced 3T MRI diagnostics and outpatient rehabilitation.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-[69px] z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md py-4 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Input */}
            <div className="w-full md:max-w-md">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search hospital services, diagnostics, or scans..."
              />
            </div>

            {/* Category Filter Pills */}
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

      {/* Services Grid */}
      <section className="bg-slate-50/70 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Results Summary */}
          <div className="mb-6 flex items-center justify-between text-xs text-gray-500">
            <span>
              Showing <strong className="text-gray-900">{filteredServices.length}</strong> clinical services
            </span>
            {(searchQuery || activeCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="font-bold text-blue-600 hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="cursor-pointer"
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-xs">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Activity size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">No services found</h3>
              <p className="mt-1 text-xs text-gray-500 max-w-sm mx-auto">
                No matching medical services were found for &quot;{searchQuery}&quot;.
              </p>
              <div className="mt-5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={Boolean(selectedService)}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          maxWidth="max-w-2xl"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                {selectedService.category}
              </span>
              <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                <Clock size={13} className="text-teal-600" />
                {selectedService.timing}
              </span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              {selectedService.fullDescription}
            </p>

            <div className="mt-6 border-t border-gray-100 pt-4">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                Key Features & Clinical Highlights:
              </h4>
              <div className="space-y-2">
                {selectedService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3 text-xs text-gray-700 border border-slate-100">
                    <CheckCircle2 size={15} className="text-teal-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-blue-50/60 p-4 border border-blue-100 flex items-center justify-between text-xs">
              <div>
                <span className="text-blue-900 font-bold block">Department Desk Direct Line:</span>
                <span className="text-blue-700">{selectedService.contactPhone}</span>
              </div>
              <a
                href={`tel:${selectedService.contactPhone}`}
                className="rounded-xl bg-blue-600 px-3.5 py-2 font-bold text-white shadow-xs hover:bg-blue-700 transition flex items-center gap-1.5"
              >
                <Phone size={13} />
                <span>Call Desk</span>
              </a>
            </div>

            <div className="mt-8 flex justify-end gap-3 border-t border-gray-100 pt-4">
              <Button variant="outline" size="sm" onClick={() => setSelectedService(null)}>
                Close
              </Button>
              <Button variant="primary" size="sm" to="/appointment">
                Book Consultation
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}