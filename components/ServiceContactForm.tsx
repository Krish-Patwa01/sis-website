"use client";

import { useState } from "react";
import { Phone, Mail, CheckCircle2 } from "lucide-react";

type ServiceContactFormProps = {
  serviceName: string;
  heading: string;
  subtext: string;
};

export default function ServiceContactForm({ serviceName, heading, subtext }: ServiceContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-2xl bg-white p-7 shadow-2xl lg:p-8">
      <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-electric">
        <span className="h-[2px] w-4 bg-electric" aria-hidden />
        {heading}
      </span>

      <h3 className="mt-4 font-display text-[26px] font-bold leading-tight text-snow">
        Talk to a {serviceName} Expert
      </h3>
      <p className="mt-3 text-[13.5px] leading-relaxed text-mist">{subtext}</p>

      {submitted ? (
        <div className="mt-8 flex flex-col items-center rounded-xl border border-electric/20 bg-electric/5 px-6 py-10 text-center">
          <CheckCircle2 size={40} className="text-electric" aria-hidden />
          <h4 className="mt-4 font-display text-[18px] font-bold text-snow">Thank you!</h4>
          <p className="mt-2 text-[13.5px] text-mist">
            Your enquiry about <span className="font-semibold text-snow">{serviceName}</span> has been received. Our team
            will reach out shortly.
          </p>
        </div>
      ) : (
        <form
          className="mt-7 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full rounded-lg border border-line/60 bg-white px-4 py-3 text-[14px] text-snow placeholder-mist transition-colors focus:border-electric focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Work Email"
            className="w-full rounded-lg border border-line/60 bg-white px-4 py-3 text-[14px] text-snow placeholder-mist transition-colors focus:border-electric focus:outline-none"
          />
          <input
            type="text"
            placeholder="Company / Organization"
            className="w-full rounded-lg border border-line/60 bg-white px-4 py-3 text-[14px] text-snow placeholder-mist transition-colors focus:border-electric focus:outline-none"
          />
          {/* Service is pre-filled and locked to this page's service */}
          <input
            type="text"
            value={serviceName}
            readOnly
            aria-label="Service of interest"
            className="w-full rounded-lg border border-electric/30 bg-electric/5 px-4 py-3 text-[14px] font-semibold text-electric focus:outline-none"
          />
          <textarea
            placeholder={`Tell us about your ${serviceName.toLowerCase()} requirement...`}
            rows={4}
            className="w-full resize-none rounded-lg border border-line/60 bg-white px-4 py-3 text-[14px] text-snow placeholder-mist transition-colors focus:border-electric focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-electric px-6 py-3.5 font-display text-[15px] font-bold text-white transition-all hover:bg-[#c8163d] active:scale-95"
          >
            Request a Free Consultation →
          </button>
        </form>
      )}

      {/* Quick contact */}
      <div className="mt-7 space-y-3 border-t border-line/60 pt-6">
        <a href="tel:+919328667642" className="flex items-center gap-3 text-[13.5px] text-mist transition-colors hover:text-electric">
          <Phone size={16} className="text-electric" aria-hidden /> +91 932-866-7642
        </a>
        <a href="mailto:info@shridharinfosec.com" className="flex items-center gap-3 text-[13.5px] text-mist transition-colors hover:text-electric">
          <Mail size={16} className="text-electric" aria-hidden /> info@shridharinfosec.com
        </a>
      </div>
    </div>
  );
}
