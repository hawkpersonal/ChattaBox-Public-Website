import { Heart, MessageCircle, Sparkles, Bell, Check } from "lucide-react";

const valueBullets = [
  "A quick snapshot of how they're doing",
  "Gentle suggestions for when a call might help",
  "Trends over time, without overwhelming detail",
  "Alerts when reminders and check-ins are missed",
];

const dailyUpdateRows = [
  {
    icon: Heart,
    label: "Mood",
    value: "Steady",
  },
  {
    icon: MessageCircle,
    label: "Connection",
    value: "18 mins · 2 chats",
  },
  {
    icon: Sparkles,
    label: "Highlight",
    value: "Talked about the garden",
  },
  {
    icon: Bell,
    label: "Suggestion",
    value: "A quick call tomorrow morning",
    subtext: "They sounded a little tired by evening.",
  },
];

export function FamilyPortal() {
  return (
    <section id="family-portal" className="py-14 md:py-24 bg-[#F9F8F4]">
      <div className="container">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12 md:mb-16">
          <h2 className="font-serif">
            Peace of Mind for Families
          </h2>
        </div>

        {/* Main Content: 2-column on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Copy Block */}
          <div className="max-w-[520px] space-y-6">
            <div>
              <p className="text-lg text-[#5F5B55] leading-relaxed mb-6">
                A simple daily update — so you can stay in the loop and have peace of mind.
              </p>
            </div>

            <div className="space-y-4">
              {valueBullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="h-5 w-5 text-accent-green" strokeWidth={2} />
                  </div>
                  <p className="text-base text-[#5F5B55] leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Daily Update Hero Card */}
          <div className="w-full max-w-[560px]">
            {/* Daily Update Card */}
            <div className="rounded-3xl border border-[#E6E2DA] bg-white p-5 md:p-6 shadow-elegant">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-medium text-[#5F5B55] bg-[#EFEDE5] border border-[#E6E2DA] px-3 py-1 rounded-full">
                  Daily update
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#1B1B1A] mb-6">
                Your loved one's day
              </h3>

              {/* Compact Rows */}
              <div className="space-y-4 mb-6">
                {dailyUpdateRows.map((row, index) => {
                  const Icon = row.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-[#C06040] flex-shrink-0" strokeWidth={2} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="text-xs text-[#8A857E]">{row.label}</span>
                          <span className="text-sm font-semibold text-[#1B1B1A]">{row.value}</span>
                        </div>
                        {row.subtext && (
                          <p className="text-xs text-[#5F5B55] leading-relaxed mt-1">{row.subtext}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="border-t border-[#E6E2DA] mb-4"></div>

              {/* Footer Chips */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-[#5F5B55] bg-[#EFEDE5] border border-[#E6E2DA] px-2.5 py-1 rounded-md">
                  Mood: stable
                </span>
                <span className="text-xs text-[#5F5B55] bg-[#EFEDE5] border border-[#E6E2DA] px-2.5 py-1 rounded-md">
                  Routine: on track
                </span>
                <span className="text-xs text-[#5F5B55] bg-[#EFEDE5] border border-[#E6E2DA] px-2.5 py-1 rounded-md">
                  Engagement: normal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
