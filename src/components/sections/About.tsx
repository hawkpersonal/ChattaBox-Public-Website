import { Heart, Shield, Users } from "lucide-react";

const highlights = [
  {
    iconImage: "/icons/Built with care.png",
    icon: Heart,
    title: "Built with care",
    description: "We started Chattabox because too many older adults spend their days alone, and we think families need more support too.",
  },
  {
    iconImage: "/icons/Privacy first.png",
    icon: Shield,
    title: "Privacy first",
    description:
      "Your family’s information is encrypted and stored securely, with restricted access so only authorised systems can use it to run our service. We only collect what we need, and we never sell your data.",
  },
  {
    iconImage: "/icons/Family-focused.png",
    icon: Users,
    title: "Family-focused",
    description:
      "We share gentle summaries and important flags (like missed check-ins) to help you support your loved one — not intrusive monitoring or constant surveillance.",
  },
];

export function About() {
  return (
    <section id="about" className="py-14 md:py-24 bg-[#F9F8F4]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-serif">
            About Chattabox
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
                className="bg-white rounded-[18px] border border-[#E6E2DA] p-6 shadow-elegant hover:shadow-elegant-hover transition-all text-center"
              >
                {"iconImage" in highlight && highlight.iconImage ? (
                  <div className="flex justify-center mb-4">
                    <img
                      src={highlight.iconImage}
                      alt={`${highlight.title} icon`}
                      className="h-36 w-36 object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-[12px] bg-[#EFEDE5] flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-6 w-6 text-[#C06040]" strokeWidth={2} />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[#1B1B1A] mb-2">
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
