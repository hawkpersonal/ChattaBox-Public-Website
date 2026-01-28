import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plan = {
  name: "Early Pilot Program",
  description: "Join our early pilot and help shape ChattaBox",
  price: "Free",
  features: [
    "Daily phone calls for your loved one",
    "Customizable reminders",
    "Daily wellbeing updates",
    "Family portal access",
    "Priority support",
  ],
};

export function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="pricing" className="py-14 md:py-24 bg-[#F9F8F4]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-serif">
            Join Our Pilot Program
          </h2>
          <p className="text-lg text-[#5F5B55] leading-relaxed">
            We're working with a limited number of families to refine ChattaBox. Pilot participants get early access and help shape the product.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-[18px] border-2 border-[#C06040] shadow-elegant p-8 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <span className="bg-[#C06040] text-white px-3 py-1 rounded-full text-xs font-medium">
                Limited Availability
              </span>
            </div>

            <h3 className="text-2xl font-serif font-semibold text-[#1B1B1A] mb-2">
              {plan.name}
            </h3>
            <p className="text-base text-[#5F5B55] mb-6">
              {plan.description}
            </p>

            <div className="mb-8">
              <span className="text-4xl font-serif font-semibold text-[#C06040]">
                {plan.price}
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent-green flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-base text-[#1B1B1A]">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full"
            >
              Join Our Pilot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
