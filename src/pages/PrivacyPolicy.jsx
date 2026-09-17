import { Shield, CheckCircle2, ArrowLeft } from "lucide-react";
import Button from "../components/Button";

export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-slate-50/60 pb-20 pt-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Button variant="outline" size="sm" to="/" icon={ArrowLeft}>
            Back to Home
          </Button>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 sm:p-12 shadow-sm">
          <div className="flex items-center gap-3 text-blue-600 mb-4">
            <Shield size={28} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Hospital Governance & Compliance
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Patient Privacy Policy & Data Protection
          </h1>

          <p className="mt-2 text-xs text-gray-400">
            Last Updated: January 01, 2026 • Policy Version 3.2
          </p>

          <div className="my-8 rounded-2xl bg-amber-50 p-4 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <strong>Disclaimer Notice:</strong> MediCare is a fictional hospital created for frontend application demonstration purposes. No real medical records or payment transactions are collected or stored.
          </div>

          <div className="space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                1. Collection of Health & Personal Information
              </h2>
              <p>
                When you schedule consultations, request home lab sampling, or register on our patient portal, MediCare securely processes identifying details (Full Name, Contact Number, CNIC, Email Address) and relevant clinical symptoms solely to coordinate medical care.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                2. Medical Record Confidentiality & Access
              </h2>
              <p>
                All diagnostic pathology results, surgical notes, and electronic prescriptions are treated with strictest clinical confidentiality. Access to patient records is strictly restricted to authorized attending physicians, clinical nursing teams, and registered hospital pharmacists directly involved in your treatment plan.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                3. Patient Rights & Informed Consent
              </h2>
              <ul className="mt-2 space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>Right to full transparency regarding proposed medical diagnoses and therapeutic options.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>Right to receive copies of all verified lab and radiology reports through the digital patient portal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>Right to request second medical opinions from alternate department specialists.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-900 mb-2">
                4. Data Security & Encryption Standards
              </h2>
              <p>
                MediCare applies 256-bit SSL transport encryption to safeguard all digital interactions and patient portal credentials. We never disclose, sell, or commercialize patient contact data or medical records to third-party commercial marketing entities.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
