import { useState } from "react";
import { Mail, MapPin, Copy, Check, Send, MessageSquare, AlertCircle, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Website Project",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a short message about your project";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Please provide at least 15 characters";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const endpoint = personalInfo.formspreeEndpoint || "https://formspree.io/f/xbglryjn";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "Website Project",
          message: "",
        });
      } else {
        const data = await response.json();
        setSubmitError(data.error || "Failed to deliver message via Formspree. Please try again or email directly.");
      }
    } catch (err) {
      setSubmitError("Network connection error. Please check your internet or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                <MessageSquare size={14} />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Let's Build Something
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-3 text-base leading-relaxed">
                If you have a website idea, project, or collaboration in mind, feel free to get in touch. I am responsive, friendly, and always open to discussing web solutions.
              </p>
            </div>

            {/* Email Card with Copy Button */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Mail size={16} />
                  </div>
                  <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
                    Direct Email
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.contactEmail}`}
                className="text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors block mt-1"
              >
                {personalInfo.contactEmail}
              </a>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                (Click to open your mail client, or copy using the button above)
              </span>
            </div>

            {/* Location & Availability */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">
                  <MapPin size={14} className="text-blue-600 dark:text-blue-400" />
                  <span>Location</span>
                </div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white block">
                  {personalInfo.location}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Pakistan Standard Time (PKT)</span>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                  <span>Availability</span>
                </div>
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 block">
                  Accepting Projects
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Freelance & Part-time</span>
              </div>
            </div>

            {/* Social Link Placeholders */}
            <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-xs">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Social & Code Profiles (Placeholders)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3.5">
                Ready for your personal URLs in <code className="text-blue-700 dark:text-blue-300 font-mono text-[11px]">src/data/portfolioData.js</code>:
              </p>

              <div className="space-y-2">
                <a
                  href={personalInfo.socials.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon size={16} />
                    <span className="font-medium">{personalInfo.socials.github.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center gap-1">
                    <span>{personalInfo.socials.github.note}</span>
                    <ArrowUpRight size={12} />
                  </span>
                </a>

                <a
                  href={personalInfo.socials.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon size={16} />
                    <span className="font-medium">{personalInfo.socials.linkedin.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center gap-1">
                    <span>{personalInfo.socials.linkedin.note}</span>
                    <ArrowUpRight size={12} />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill out the form below with your project details or inquiries.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Thank you for reaching out!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your message has been captured. Moeed will get back to you as soon as possible via email.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 text-xs font-semibold px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-300 text-xs flex items-start gap-2">
                      <AlertCircle size={15} className="text-red-500 dark:text-red-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-red-800 dark:text-red-200">Unable to send message</p>
                        <p className="mt-0.5">{submitError}</p>
                      </div>
                    </div>
                  )}

                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-950 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
                        errors.name ? "border-red-500/80 bg-red-50/50 dark:bg-red-950/10" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 dark:text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-950 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
                        errors.email ? "border-red-500/80 bg-red-50/50 dark:bg-red-950/10" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 dark:text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject / Project Category */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Topic or Project Scope
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-sm text-slate-900 dark:text-white focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    >
                      <option value="Website Project">New Website Project</option>
                      <option value="Frontend Development">Frontend UI / React Task</option>
                      <option value="Landing Page">Landing Page Concept</option>
                      <option value="Freelance Consultation">Freelance Opportunity</option>
                      <option value="General Hello">General Question / Hello</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="contact-message" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder="Describe what you have in mind (e.g. goals, timeline, design ideas)..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-950 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
                        errors.message ? "border-red-500/80 bg-red-50/50 dark:bg-red-950/10" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 dark:text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-600/25 hover:shadow-blue-500/35 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
