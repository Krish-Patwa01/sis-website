import { Phone, Mail } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-0" aria-label="Contact">
      <div className="relative min-h-screen flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80')",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#122441]/85 via-[#122441]/75 to-transparent" aria-hidden />

        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_420px] lg:gap-16">
            {/* Left side — Content */}
            <Reveal>
              <div>
                <span className="inline-block text-[13px] font-bold uppercase tracking-[0.12em] text-electric">
                  Get In Touch
                </span>

                <h2 className="mt-6 font-display text-[42px] font-bold leading-tight text-white sm:text-[52px]">
                  Experience The Evolution Of Your <span className="text-gradient">Cybersecurity</span>
                </h2>

                <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-slate-100">
                  Protect your organization from cyber threats and secure your future with Shridhar InfoSec
                  Solutions&apos;s cybersecurity solutions for your sector. Contact us today to learn more about our
                  services and schedule a consultation with one of our cybersecurity experts.
                </p>

                <div className="mt-10 flex gap-8 lg:gap-12">
                  {/* Call Us */}
                  <a href="tel:+919328667642" className="group">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg border border-electric/40 bg-electric/15 transition-all group-hover:bg-electric/25">
                      <Phone size={24} className="text-electric" aria-hidden />
                    </div>
                    <div className="mt-4">
                      <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-slate-300">Call Us Today</div>
                      <div className="mt-2 text-[17px] font-bold text-white">+91 932-866-7642</div>
                    </div>
                  </a>

                  {/* Email Us */}
                  <a href="mailto:info@shridharinfosec.com" className="group">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg border border-electric/40 bg-electric/15 transition-all group-hover:bg-electric/25">
                      <Mail size={24} className="text-electric" aria-hidden />
                    </div>
                    <div className="mt-4">
                      <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-slate-300">Email Us</div>
                      <div className="mt-2 text-[17px] font-bold text-white">info@shridharinfosec.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right side — Form */}
            <Reveal delay={200}>
              <div className="rounded-2xl bg-white p-8 shadow-2xl lg:p-10">
                <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-electric">
                  <span className="h-[2px] w-4 bg-electric" aria-hidden />
                  Get In Touch
                </span>

                <h3 className="mt-4 font-display text-[32px] font-bold text-snow">Free Consultation</h3>

                <form className="mt-8 space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-line/50 bg-white px-4 py-3.5 text-[14px] text-snow placeholder-mist transition-colors focus:border-electric focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your e-mail"
                    className="w-full rounded-lg border border-line/50 bg-white px-4 py-3.5 text-[14px] text-snow placeholder-mist transition-colors focus:border-electric focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-lg border border-line/50 bg-white px-4 py-3.5 text-[14px] text-snow placeholder-mist transition-colors focus:border-electric focus:outline-none"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full rounded-lg border border-line/50 bg-white px-4 py-3.5 text-[14px] text-snow placeholder-mist transition-colors focus:border-electric focus:outline-none resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-electric px-6 py-3.5 font-display text-[15px] font-bold text-white transition-all hover:bg-[#c8163d] active:scale-95"
                  >
                    Free Consultation →
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
