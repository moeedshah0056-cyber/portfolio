import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  CalendarDays,
  Users,
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import DoctorCard from "../components/DoctorCard";
import Button from "../components/Button";

import { doctors } from "../data/doctors";
import { departments } from "../data/departments";

export default function Doctors() {
  const [searchParams] = useSearchParams();
  const initialDept = searchParams.get("dept") || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState(initialDept);
  const [experienceFilter, setExperienceFilter] = useState("All");

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const matchesSearch =
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.expertise.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedDept !== "All" && doc.departmentId !== selectedDept && !doc.department.toLowerCase().includes(selectedDept.toLowerCase())) {
        return false;
      }

      if (experienceFilter === "15+") {
        const expNum = parseInt(doc.experience, 10);
        if (expNum < 15) return false;
      }
      if (experienceFilter === "20+") {
        const expNum = parseInt(doc.experience, 10);
        if (expNum < 20) return false;
      }

      return true;
    });
  }, [searchQuery, selectedDept, experienceFilter]);

  return (
    <main className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 py-16 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <Users size={14} />
            <span>Medical Specialists Directory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Find & Book Top Medical Specialists
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Over 150 certified consultants, surgeons, and pediatricians dedicated to compassionate, world-class healthcare.
          </p>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="sticky top-[69px] z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md py-4 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-12 items-center">
            {/* Search Bar */}
            <div className="md:col-span-6">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search doctors by name, specialty, or condition..."
              />
            </div>

            {/* Department Filter */}
            <div className="md:col-span-4">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-xs sm:text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="All">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience Filter */}
            <div className="md:col-span-2">
              <select
                value={experienceFilter}
                onChange={(e) => setExperienceFilter(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-xs sm:text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="All">Experience: All</option>
                <option value="15+">15+ Years</option>
                <option value="20+">20+ Years</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="bg-slate-50/70 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Results Summary */}
          <div className="mb-6 flex items-center justify-between text-xs text-gray-500">
            <span>
              Showing <strong className="text-gray-900">{filteredDoctors.length}</strong> medical specialists
            </span>
            {(searchQuery || selectedDept !== "All" || experienceFilter !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDept("All");
                  setExperienceFilter("All");
                }}
                className="font-bold text-blue-600 hover:underline"
              >
                Reset all filters
              </button>
            )}
          </div>

          {filteredDoctors.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDoctors.map((doc) => (
                <DoctorCard key={doc.id} doctor={doc} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-xs">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Search size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">No doctors match your criteria</h3>
              <p className="mt-1 text-xs text-gray-500 max-w-sm mx-auto">
                Try clearing your search term or choosing &quot;All Departments&quot; to see available consultants.
              </p>
              <div className="mt-5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDept("All");
                    setExperienceFilter("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Appointment CTA Banner */}
      <section className="bg-blue-600 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Can&apos;t decide which specialist to visit?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-blue-100">
              Call our patient helpline for free clinical guidance and immediate doctor matching.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="white"
              size="md"
              to="/appointment"
              icon={CalendarDays}
            >
              Book General OPD
            </Button>
            <Button
              variant="outline"
              size="md"
              href="tel:+92518440100"
              className="bg-blue-700/80 text-white border-blue-400/40 hover:bg-blue-800 hover:text-white"
            >
              Call Helpline
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}