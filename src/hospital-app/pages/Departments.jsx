import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Building2,
  Search,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import DepartmentCard from "../components/DepartmentCard";
import Button from "../components/Button";
import Modal from "../components/Modal";

import { departments } from "../data/departments";
import { doctors } from "../data/doctors";

export default function Departments() {
  const [searchParams] = useSearchParams();
  const activeDeptParam = searchParams.get("dept");

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDept, setSelectedDept] = useState(
    activeDeptParam ? departments.find((d) => d.id === activeDeptParam) || null : null
  );

  const categories = [
    "All",
    "Emergency & Critical Care",
    "Surgical Specialties",
    "Medicine & Pediatrics",
    "Diagnostics & Therapy",
  ];

  const filteredDepartments = useMemo(() => {
    return departments.filter((dept) => {
      const matchesSearch =
        dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.treatments.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (activeCategory === "All") return true;
      if (activeCategory === "Emergency & Critical Care") {
        return dept.emergencyAvailable || dept.id === "emergency-medicine" || dept.id === "cardiology";
      }
      if (activeCategory === "Surgical Specialties") {
        return dept.id.includes("surgery") || dept.id === "orthopedics" || dept.id === "urology" || dept.id === "ophthalmology";
      }
      if (activeCategory === "Medicine & Pediatrics") {
        return dept.id === "pediatrics" || dept.id === "dermatology" || dept.id === "gynecology" || dept.id === "gastroenterology" || dept.id === "oncology";
      }
      return true;
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
            <Building2 size={14} />
            <span>Clinical Wings</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Specialized Medical Departments
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Equipped with cutting-edge medical technology and headed by certified consultants delivering world-class tertiary healthcare.
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
                placeholder="Search departments, treatments, or symptoms..."
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

      {/* Departments Grid */}
      <section className="bg-slate-50/70 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Results Summary */}
          <div className="mb-6 flex items-center justify-between text-xs text-gray-500">
            <span>
              Showing <strong className="text-gray-900">{filteredDepartments.length}</strong> medical departments
            </span>
            {(searchQuery || activeCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="font-bold text-blue-600 hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredDepartments.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDepartments.map((dept) => (
                <div
                  key={dept.id}
                  onClick={() => setSelectedDept(dept)}
                  className="cursor-pointer"
                >
                  <DepartmentCard department={dept} />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-xs">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Search size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">No departments found</h3>
              <p className="mt-1 text-xs text-gray-500 max-w-sm mx-auto">
                No clinical departments matched &quot;{searchQuery}&quot;. Try searching for &quot;heart&quot;, &quot;bone&quot;, &quot;baby&quot;, or &quot;surgery&quot;.
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
                  Reset Search Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Department Detail Modal */}
      {selectedDept && (
        <Modal
          isOpen={Boolean(selectedDept)}
          onClose={() => setSelectedDept(null)}
          title={selectedDept.name}
          maxWidth="max-w-2xl"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
              {selectedDept.tagline}
            </p>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {selectedDept.overview || selectedDept.description}
            </p>

            {/* Department Stats */}
            <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100 text-center text-xs">
              <div>
                <span className="text-gray-400 block">Beds</span>
                <span className="font-bold text-gray-900 text-sm">{selectedDept.stats.beds}</span>
              </div>
              <div className="border-x border-gray-200">
                <span className="text-gray-400 block">Surgeries</span>
                <span className="font-bold text-gray-900 text-sm">{selectedDept.stats.surgeriesYearly}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Success Rate</span>
                <span className="font-bold text-emerald-600 text-sm">{selectedDept.stats.recoveryRate}</span>
              </div>
            </div>

            {/* Treatments Offered */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                Key Diagnostic & Surgical Procedures:
              </h4>
              <div className="grid gap-2 sm:grid-cols-2 text-xs text-gray-700">
                {selectedDept.treatments.map((treatment, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-xl bg-slate-50/70 p-2.5 border border-slate-100">
                    <CheckCircle2 size={14} className="text-teal-500 shrink-0 mt-0.5" />
                    <span>{treatment}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Doctors in Department */}
            <div className="mt-6 border-t border-gray-100 pt-5">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                Specialists in {selectedDept.name}:
              </h4>
              <div className="space-y-2">
                {doctors
                  .filter((doc) => doc.departmentId === selectedDept.id)
                  .map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-2xs"
                    >
                      <div>
                        <Link
                          to={`/doctors/${doc.id}`}
                          className="text-xs font-bold text-gray-900 hover:text-blue-600"
                        >
                          {doc.name}
                        </Link>
                        <p className="text-[11px] text-gray-500">{doc.specialty}</p>
                      </div>

                      <Button
                        variant="primary"
                        size="sm"
                        to={`/appointment?doctor=${doc.id}&dept=${selectedDept.id}`}
                        className="text-xs py-1 px-3"
                      >
                        Book
                      </Button>
                    </div>
                  ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-100 pt-5">
              <Button variant="outline" size="sm" onClick={() => setSelectedDept(null)}>
                Close Window
              </Button>
              <Button
                variant="primary"
                size="sm"
                to={`/appointment?dept=${selectedDept.id}`}
                icon={CalendarDays}
              >
                Book Appointment in {selectedDept.name}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}