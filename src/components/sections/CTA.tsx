import { Button } from "@/components/ui/button";

export function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-14 md:py-24 bg-[#EFEDE5]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-[24px] bg-[#C06040] p-12 md:p-20 shadow-elegant">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white">
                Ready to Bring ChattaBox Home?
              </h2>
              <p className="text-lg text-white/95 leading-relaxed max-w-2xl mx-auto">
                If you think ChattaBox could help your loved one, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-white text-[#C06040] hover:bg-white/95"
                >
                  Request a Pilot
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("how-it-works")}
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white hover:border-white/50"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
