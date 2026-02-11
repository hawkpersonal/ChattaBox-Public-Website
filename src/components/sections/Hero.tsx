import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F9F8F4] py-8 md:py-16 pb-24 md:pb-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">
          {/* 1. Headline + intro + bullets — first on mobile, left column top on desktop */}
          <div className="space-y-8 order-1 lg:col-start-1 lg:row-start-1">
            <h1 className="font-serif">
              A Friendly Voice
              <br />
              <span className="text-[#C06040]">For Your Loved Ones</span>
            </h1>
            <div className="space-y-4">
              <p className="text-lg text-[#5F5B55] leading-relaxed">
                Chattabox is an AI-powered companion that calls your loved one for check-ins, friendly chats and gentle reminders.
              </p>
              <ul className="space-y-2 text-base text-[#5F5B55] leading-relaxed">
                <li className="flex items-baseline gap-2">
                  <span className="text-accent-green">•</span>
                  <span>
                    Works on <span className="underline-wiggly">any phone</span> — no apps
                  </span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-accent-green">•</span>
                  <span>
                    Warm <span className="underline-wiggly">daily calls</span> with reminders
                  </span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-accent-green">•</span>
                  <span>
                    Family dashboard with <span className="underline-wiggly">daily updates</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. Image — second on mobile (below bullets), right column on desktop */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:col-start-2 lg:row-start-1 lg:row-end-3 lg:flex lg:items-center">
            <div className="relative w-full max-w-lg border-0">
              <img
                src="/images/hero/hero-illustration.png"
                alt="Family connection and peace of mind — through simple phone calls"
                className="w-full h-auto rounded-[24px] border-0 outline-none"
                style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                loading="eager"
              />
            </div>
          </div>

          {/* 3. CTA — third on mobile (below image), left column bottom on desktop */}
          <div className="space-y-3 pt-2 order-3 lg:col-start-1 lg:row-start-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" onClick={() => scrollToSection("contact")} className="group">
                Get early access
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
