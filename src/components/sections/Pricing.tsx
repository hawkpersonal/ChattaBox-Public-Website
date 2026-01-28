import { Button } from "@/components/ui/button";
import { Check, Building2 } from "lucide-react";

const plans = [
  {
    name: "For Families",
    description: "Chattabox is in early pilot. Join early access and we'll invite families in small batches as we refine the experience.",
    price: "Free (early access)",
    priceNote: "Free while we refine the experience.",
    badge: "Limited Availability",
    features: [
      "Daily phone calls for your loved one",
      "Customizable reminders",
      "Daily wellbeing updates",
      "Family portal access",
      "Priority support",
    ],
    buttonText: "Get early access",
    buttonAction: "contact",
    highlighted: true,
  },
  {
    name: "For Care Providers",
    description: "Help your clients stay connected and supported. We'll work with you to understand your needs and show you how Chattabox can support your care delivery.",
    price: "Flexible pricing",
    priceNote: "Custom pricing based on number of clients and support needs.",
    badge: "Now taking enquiries",
    features: [
      "Support for multiple clients",
      "Care team coordination",
      "Flexible scheduling and reminders",
      "Overview of wellbeing trends",
      "Dedicated support",
    ],
    buttonText: "Contact for care providers",
    buttonAction: "mailto",
    highlighted: false,
  },
];

export function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleButtonClick = (plan: typeof plans[0]) => {
    if (plan.buttonAction === "mailto") {
      const subject = "Chattabox for care providers";
      window.location.href = `mailto:hello@chattabox.io?subject=${encodeURIComponent(subject)}`;
    } else {
      scrollToSection("contact");
    }
  };

  return (
    <section id="pricing" className="py-14 md:py-24 bg-[#EFEDE5]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-serif">
            Get early access
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-[18px] shadow-elegant p-6 md:p-8 flex flex-col ${
                plan.highlighted
                  ? "border-2 border-[#C06040]"
                  : "border border-[#E6E2DA]"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    plan.highlighted
                      ? "bg-[#C06040] text-white"
                      : "bg-[#EFEDE5] text-[#5F5B55]"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>

              <h3 className="text-xl font-serif font-semibold text-[#1B1B1A] mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-[#5F5B55] mb-6 min-h-[4rem]">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-serif font-semibold text-[#C06040]">
                  {plan.price}
                </span>
                {plan.priceNote && (
                  <p className="text-xs text-[#8A857E] mt-1">
                    {plan.priceNote}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check
                      className="h-4 w-4 text-accent-green flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="text-sm text-[#1B1B1A]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                onClick={() => handleButtonClick(plan)}
                className="w-full mt-auto"
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
