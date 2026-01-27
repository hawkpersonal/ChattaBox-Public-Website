import { Heart, Shield, Users } from "lucide-react";

const highlights = [
  {
    icon: Heart,
    title: "Built with care",
    description: "We started ChattaBox because too many older adults spend their days alone.",
  },
  {
    icon: Shield,
    title: "Privacy first",
    description: "ChattaBox is designed to fill the quiet moments with friendly conversation,",
  },
  {
    icon: Users,
    title: "Family-focused",
    description: "while giving families gentle insights — not intrusive monitoring.",
  },
];

export function About() {
  return (
    <section id="about" className="py-14 md:py-24 bg-[#F9F8F4]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-serif">
            About ChattaBox
          </h2>
          <p className="text-lg text-[#5F5B55] leading-relaxed">
            We believe everyone deserves daily companionship and families deserve peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[18px] border border-[#E6E2DA] p-6 shadow-elegant hover:shadow-elegant-hover transition-all"
              >
                <div className="h-12 w-12 rounded-[12px] bg-[#EFEDE5] flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-[#C06040]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1B1B1A] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-[#5F5B55] leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
