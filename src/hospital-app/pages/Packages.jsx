import { useState } from "react";
import {
  CheckCircle2,
  CalendarDays,
  Sparkles,
  Check,
} from "lucide-react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { healthPackages } from "../data/packages";

export default function Packages() {
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [bookingPkg, setBookingPkg] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    packageId: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleBookPackage = (pkg) => {
    setBookingPkg(pkg);
    setFormData((prev) => ({ ...prev, packageId: pkg.id }));
    setSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.preferredDate) {
      alert("Please fill in your name, phone number, and preferred date.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="w-full bg-slate-50/70 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 py-16 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <Sparkles size={14} />
            <span>Preventive Wellness</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Preventive Health Checkup Packages
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Early detection transforms lives. Choose from comprehensive, discounted wellness packages designed for every age group.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {healthPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-3xl border bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                pkg.popular
                  ? "border-blue-600 ring-2 ring-blue-600/20 shadow-blue-900/10"
                  : "border-gray-100"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  Most Popular Choice
                </span>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    {pkg.testsIncludedCount}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-600">
                    {pkg.discount}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {pkg.name}
                </h3>

                <p className="mt-2 text-xs text-gray-600 leading-relaxed min-h-[36px]">
                  {pkg.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-2 border-y border-gray-100 py-4">
                  <span className="text-3xl font-black text-gray-900">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {pkg.originalPrice}
                  </span>
                  <span className="ml-auto text-xs text-gray-500">
                    Duration: {pkg.duration}
                  </span>
                </div>

                {/* Fasting & Ideal for metadata */}
                <div className="mt-4 space-y-1.5 text-xs text-gray-500">
                  <p><strong>Fasting Required:</strong> {pkg.fastingRequired}</p>
                  <p><strong>Doctor Review:</strong> {pkg.doctorConsultation}</p>
                  <p><strong>Ideal For:</strong> {pkg.idealFor}</p>
                </div>

                {/* Test Categories Breakdown */}
                <div className="mt-6 space-y-3 border-t border-gray-100 pt-4 text-xs">
                  <p className="font-bold text-gray-900">Key Diagnostic Inclusions:</p>
                  {pkg.categories.map((cat, idx) => (
                    <div key={idx}>
                      <span className="font-semibold text-blue-600">{cat.name}:</span>
                      <ul className="mt-1 space-y-1 pl-2 text-gray-600">
                        {cat.tests.slice(0, 3).map((t, ti) => (
                          <li key={ti} className="flex items-start gap-1.5">
                            <CheckCircle2 size={13} className="text-teal-500 shrink-0 mt-0.5" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 grid grid-cols-2 gap-2 border-t border-gray-100 pt-5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedPkg(pkg)}
                >
                  Full Details
                </Button>

                <Button
                  variant={pkg.popular ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => handleBookPackage(pkg)}
                  icon={CalendarDays}
                >
                  Book Package
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Detail Modal */}
      {selectedPkg && (
        <Modal
          isOpen={Boolean(selectedPkg)}
          onClose={() => setSelectedPkg(null)}
          title={selectedPkg.name}
          maxWidth="max-w-2xl"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-2xl font-bold text-gray-900">{selectedPkg.price}</span>
                <span className="text-xs text-gray-400 line-through ml-2">{selectedPkg.originalPrice}</span>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                {selectedPkg.discount}
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-600">
              {selectedPkg.tagline}
            </p>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100 text-xs">
              <div>
                <span className="text-gray-400 block">Duration</span>
                <span className="font-bold text-gray-800">{selectedPkg.duration}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Fasting</span>
                <span className="font-bold text-gray-800">{selectedPkg.fastingRequired}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Reports</span>
                <span className="font-bold text-blue-600">{selectedPkg.reportDelivery}</span>
              </div>
            </div>

            {/* Complete Test Catalog */}
            <div className="mt-6 space-y-4">
              <h4 className="font-bold text-gray-900 text-sm">All Included Diagnostic Panels:</h4>
              {selectedPkg.categories.map((cat, idx) => (
                <div key={idx} className="rounded-2xl border border-gray-100 bg-white p-4">
                  <h5 className="font-bold text-blue-600 text-xs mb-2">{cat.name}</h5>
                  <div className="grid gap-1.5 sm:grid-cols-2 text-xs text-gray-700">
                    {cat.tests.map((t, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 size={13} className="text-teal-500 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end gap-3 border-t border-gray-100 pt-4">
              <Button variant="outline" size="sm" onClick={() => setSelectedPkg(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  const p = selectedPkg;
                  setSelectedPkg(null);
                  handleBookPackage(p);
                }}
                icon={CalendarDays}
              >
                Proceed to Book Package
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Booking Form Modal */}
      {bookingPkg && (
        <Modal
          isOpen={Boolean(bookingPkg)}
          onClose={() => setBookingPkg(null)}
          title={`Book: ${bookingPkg.name}`}
          maxWidth="max-w-md"
        >
          {submitted ? (
            <div className="text-center py-6">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Check size={32} />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Package Booking Confirmed!</h4>
              <p className="mt-2 text-xs text-gray-600">
                Thank you, <strong>{formData.fullName}</strong>. Our health package coordinator will call you to confirm your slot and fasting instructions.
              </p>
              <div className="mt-6">
                <Button variant="primary" size="sm" onClick={() => setBookingPkg(null)}>
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-900 border border-blue-100 flex justify-between items-center">
                <span>{bookingPkg.name}</span>
                <span className="font-bold">{bookingPkg.price}</span>
              </div>

              <div>
                <label className="mb-1 block font-bold text-gray-700">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-bold text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-bold text-gray-700">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="For digital report delivery"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-bold text-gray-700">Preferred Checkup Date *</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="pt-4 flex justify-end gap-2 border-t border-gray-100">
                <Button variant="outline" size="sm" onClick={() => setBookingPkg(null)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Confirm Package Booking
                </Button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </main>
  );
}
