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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-serif">
              A Friendly Voice
              <br />
              <span className="text-[#C06040]">For Your Loved Ones</span>
            </h1>
            
            <p className="text-lg text-[#5F5B55] leading-relaxed">
              Regular check-ins <span className="underline-wiggly">by phone</span> for your parents. Warm chats and gentle reminders — no screens,
              no confusion. <span className="underline-wiggly">Peace of mind for you.</span>
            </p>

            {/* Definition Lines */}
            <div className="space-y-1">
              <p className="text-base text-[#1B1B1A] leading-relaxed max-w-[65ch]">
                ChattaBox is an AI-powered phone companion that calls your parent — and sends you a simple daily update.
              </p>
              <p className="text-sm text-[#8A857E] leading-relaxed max-w-[65ch]">
                No apps. No screens. Works on mobiles and landlines.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" onClick={() => scrollToSection("contact")} className="group">
                Request a Pilot
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg border-0">
              <img
                src="/images/hero/hero-illustration.png"
                alt="Older adult and younger person connected through a smart device, with communication and care icons, representing family connection and peace of mind"
                className="w-full h-auto rounded-[24px] border-0 outline-none"
                style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
