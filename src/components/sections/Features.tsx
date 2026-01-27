import { useState, useRef, useEffect } from "react";
import {
  Phone,
  Heart,
  Sparkles,
  Bell,
  TrendingUp,
  Layout,
  MessageCircle,
  FileText,
} from "lucide-react";

const cadenceSteps = [
  {
    icon: Bell,
    timeLabel: "Morning",
    title: "Gentle reminders",
    detail: "ChattaBox calls with helpful reminders for medications, meals, or daily routines. Simple, friendly prompts that feel like a caring check-in.",
    example: "\"Good morning! It's time for your morning vitamins. How did you sleep?\"",
    linkedBenefits: ["Works on Their Phone", "Helpful Reminders"],
  },
  {
    icon: MessageCircle,
    timeLabel: "Midday",
    title: "Friendly check-in",
    detail: "A warm conversation during the day to see how things are going. ChattaBox asks about their day and listens to what matters to them.",
    example: "\"How's your day going? Did you get a chance to work on your garden today?\"",
    linkedBenefits: ["Daily Companionship", "Remembers What Matters"],
  },
  {
    icon: Heart,
    timeLabel: "Evening",
    title: "A comforting chat",
    detail: "An evening conversation to wind down the day. ChattaBox remembers their stories and asks about the things they care about.",
    example: "\"Tell me about your day. I remember you mentioned your woodworking project yesterday.\"",
    linkedBenefits: ["Daily Companionship", "Remembers What Matters"],
  },
  {
    icon: Phone,
    timeLabel: "Anytime",
    title: "They can call",
    detail: "Your loved one can call ChattaBox whenever they want to talk. No schedules, no waiting — just a friendly voice ready to chat.",
    example: "\"I'm here whenever you'd like to talk. What's on your mind today?\"",
    linkedBenefits: ["Daily Companionship", "Works on Their Phone"],
  },
  {
    icon: FileText,
    timeLabel: "Daily summary",
    title: "Your daily update",
    detail: "You receive a gentle summary of how your loved one is doing. Mood patterns, engagement levels, and any notable moments — all in one simple update.",
    example: "\"Your loved one had a positive day with good engagement. They mentioned feeling happy about their garden progress.\"",
    linkedBenefits: ["Daily Summary / Insights", "Family Portal"],
  },
];

const parentBenefits = [
  {
    id: "Works on Their Phone",
    icon: Phone,
    title: "Works on Their Phone",
    description: "ChattaBox calls their mobile or landline. No new devices. No apps. Just their phone.",
  },
  {
    id: "Daily Companionship",
    icon: Heart,
    title: "Daily Companionship",
    description: "Friendly conversations whenever they want. They can call ChattaBox anytime to chat.",
  },
  {
    id: "Remembers What Matters",
    icon: Sparkles,
    title: "Remembers What Matters",
    description: "Remembers their stories and preferences. Asks about the things they care about.",
  },
];

const youBenefits = [
  {
    id: "Helpful Reminders",
    icon: Bell,
    title: "Helpful Reminders",
    description: "You set gentle reminders through the family portal — medications, meals, or daily habits.",
  },
  {
    id: "Daily Summary / Insights",
    icon: TrendingUp,
    title: "Daily Summary / Insights",
    description: "See how they're doing with daily insights. Mood patterns, engagement, and notable moments.",
  },
  {
    id: "Family Portal",
    icon: Layout,
    title: "Family Portal",
    description: "Configure everything from an easy web portal. Set reminders, view insights, adjust preferences.",
  },
];

export function Features() {
  const [activeStep, setActiveStep] = useState(4); // Default to "Daily summary" (index 4)
  const [benefitAudience, setBenefitAudience] = useState<'parent' | 'you'>('parent');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto-scroll active step into view on mobile
  useEffect(() => {
    if (stepRefs.current[activeStep] && scrollContainerRef.current) {
      stepRefs.current[activeStep]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  const activeStepData = cadenceSteps[activeStep];

  return (
    <section id="features" className="pt-16 pb-16 bg-[#F9F8F4]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <h2 className="font-serif">
            How It Helps
          </h2>
          <p className="text-lg text-[#5F5B55] leading-relaxed">
            Simple <span className="underline-wiggly">companionship & routine</span> support that brings <span className="underline-wiggly">help & comfort</span> to older adults & <span className="underline-wiggly">peace of mind</span> to families
          </p>
        </div>

        {/* Block 1: A day with ChattaBox */}
        <div className="mb-12 md:mb-16">
          {/* Daily Cadence Strip */}
          <div className="mb-8">
          <div className="rounded-2xl border border-[#E6E2DA] bg-[#EFEDE5] p-4 md:p-5">
            {/* Desktop: Horizontal timeline */}
            <div className="hidden md:block relative">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#E6E2DA] -translate-y-1/2" />
              <div className="relative flex justify-between items-center">
                {cadenceSteps.map((step, index) => {
                  const isActive = index === activeStep;
                  const Icon = step.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleStepClick(index)}
                      aria-pressed={isActive}
                      className="flex flex-col items-center relative z-10 min-h-[44px] focus:outline-none rounded-lg transition-all"
                      style={{ outline: 'none' }}
                    >
                      <div className={`flex flex-col items-center mb-2 ${isActive ? "px-3 py-2 rounded-lg border border-[#DED9D0] bg-[#F9F8F4]" : ""}`}>
                        <Icon className={`h-5 w-5 mb-2 ${isActive ? "text-[#C06040]" : "text-[#8A857E]"}`} strokeWidth={2} />
                        <span className={`text-xs mb-1 ${isActive ? "text-[#1B1B1A]" : "text-[#8A857E]"}`}>
                          {step.timeLabel}
                        </span>
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${
                            isActive
                              ? "bg-[#C06040]"
                              : "bg-[#DED9D0]"
                          }`}
                        />
                      </div>
                      <span className={`text-sm font-medium text-center max-w-[120px] ${isActive ? "text-[#1B1B1A]" : "text-[#8A857E]"}`}>
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile: Horizontal scrollable timeline */}
            <div className="md:hidden">
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
              >
                <div className="flex gap-8 min-w-max">
                  {cadenceSteps.map((step, index) => {
                    const isActive = index === activeStep;
                    const Icon = step.icon;
                    return (
                      <button
                        key={index}
                        ref={(el) => {
                          stepRefs.current[index] = el;
                        }}
                        onClick={() => handleStepClick(index)}
                        aria-pressed={isActive}
                        className="snap-center flex flex-col items-center min-w-[100px] min-h-[44px] focus:outline-none rounded-lg transition-all"
                        style={{ outline: 'none' }}
                      >
                        <div className={`flex flex-col items-center mb-2 ${isActive ? "px-2 py-1.5 rounded-lg border border-[#DED9D0] bg-[#F9F8F4]" : ""}`}>
                          <Icon className={`h-5 w-5 mb-2 ${isActive ? "text-[#C06040]" : "text-[#8A857E]"}`} strokeWidth={2} />
                          <span className={`text-xs mb-1 ${isActive ? "text-[#1B1B1A]" : "text-[#8A857E]"}`}>
                            {step.timeLabel}
                          </span>
                          <div
                            className={`w-2.5 h-2.5 rounded-full ${
                              isActive
                                ? "bg-[#C06040]"
                                : "bg-[#DED9D0]"
                            }`}
                          />
                        </div>
                        <span className={`text-sm font-medium text-center ${isActive ? "text-[#1B1B1A]" : "text-[#8A857E]"}`}>
                          {step.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Detail Panel */}
          <div className="rounded-2xl border border-[#E6E2DA] bg-[#F9F8F4] p-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-base text-[#1B1B1A]">
                {activeStepData.title}
              </h4>
              <p className="text-sm text-[#5F5B55] leading-relaxed">
                {activeStepData.detail}
              </p>
              {activeStepData.example && (
                <blockquote className="text-sm text-[#5F5B55] italic border-l-2 border-[#E6E2DA] pl-3">
                  {activeStepData.example}
                </blockquote>
              )}
            </div>
          </div>
        </div>

        {/* Block 2: Benefits */}
        <div>
          <div className="mx-auto max-w-3xl mb-8">
            <h3 className="text-2xl font-serif font-semibold text-[#1B1B1A] mb-2 text-center">
              Benefits
            </h3>
            <p className="text-sm text-[#8A857E] text-center">
              Designed for both sides: your parent and you.
            </p>
          </div>

          {/* Mobile: Segmented Toggle */}
          <div className="lg:hidden mb-8">
            <div className="flex bg-[#EFEDE5] border border-[#E6E2DA] rounded-full p-1 max-w-md mx-auto">
              <button
                onClick={() => setBenefitAudience('parent')}
                aria-pressed={benefitAudience === 'parent'}
                className={`flex-1 px-4 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] focus:outline-none ${
                  benefitAudience === 'parent'
                    ? "bg-[#F9F8F4] border border-[#DED9D0] text-[#1B1B1A]"
                    : "text-[#8A857E]"
                }`}
                style={{ outline: 'none' }}
              >
                For your parent
              </button>
              <button
                onClick={() => setBenefitAudience('you')}
                aria-pressed={benefitAudience === 'you'}
                className={`flex-1 px-4 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] focus:outline-none ${
                  benefitAudience === 'you'
                    ? "bg-[#F9F8F4] border border-[#DED9D0] text-[#1B1B1A]"
                    : "text-[#8A857E]"
                }`}
                style={{ outline: 'none' }}
              >
                For you
              </button>
            </div>
          </div>

          {/* Desktop: Two Columns */}
          <div className="hidden lg:grid grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Column: For your parent */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-serif font-semibold text-[#1B1B1A] mb-2">
                  For your parent
                </h4>
                <p className="text-sm text-[#5F5B55]">
                  Simple, daily companionship that fits into their routine
                </p>
              </div>
              <div className="space-y-0">
                {parentBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-4 py-5 border-b border-[#E6E2DA] last:border-b-0"
                      style={{ borderColor: 'rgba(230, 226, 218, 0.3)' }}
                    >
                      <div className="flex-shrink-0 h-11 w-11 rounded-xl border border-[#E6E2DA] bg-[#EFEDE5] flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[#C06040]" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-base text-[#1B1B1A] mb-1">
                          {benefit.title}
                        </h5>
                        <p className="text-sm text-[#5F5B55] leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: For you */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-serif font-semibold text-[#1B1B1A] mb-2">
                  For you
                </h4>
                <p className="text-sm text-[#5F5B55]">
                  Peace of mind through gentle insights and simple tools
                </p>
              </div>
              <div className="space-y-0">
                {youBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-4 py-5 border-b border-[#E6E2DA] last:border-b-0"
                      style={{ borderColor: 'rgba(230, 226, 218, 0.3)' }}
                    >
                      <div className="flex-shrink-0 h-11 w-11 rounded-xl border border-[#E6E2DA] bg-[#EFEDE5] flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[#C06040]" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-base text-[#1B1B1A] mb-1">
                          {benefit.title}
                        </h5>
                        <p className="text-sm text-[#5F5B55] leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Single List Based on Toggle */}
          <div className="lg:hidden max-w-2xl mx-auto">
            {benefitAudience === 'parent' ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-serif font-semibold text-[#1B1B1A] mb-2">
                    For your parent
                  </h4>
                  <p className="text-sm text-[#5F5B55]">
                    Simple, daily companionship that fits into their routine
                  </p>
                </div>
                <div className="space-y-0">
                  {parentBenefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={benefit.title}
                        className="flex items-start gap-4 py-5 border-b border-[#E6E2DA] last:border-b-0"
                        style={{ borderColor: 'rgba(230, 226, 218, 0.3)' }}
                      >
                        <div className="flex-shrink-0 h-11 w-11 rounded-xl border border-[#E6E2DA] bg-[#EFEDE5] flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[#C06040]" strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-base text-[#1B1B1A] mb-1">
                            {benefit.title}
                          </h5>
                          <p className="text-sm text-[#5F5B55] leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-serif font-semibold text-[#1B1B1A] mb-2">
                    For you
                  </h4>
                  <p className="text-sm text-[#5F5B55]">
                    Peace of mind through gentle insights and simple tools
                  </p>
                </div>
                <div className="space-y-0">
                  {youBenefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={benefit.title}
                        className="flex items-start gap-4 py-5 border-b border-[#E6E2DA] last:border-b-0"
                        style={{ borderColor: 'rgba(230, 226, 218, 0.3)' }}
                      >
                        <div className="flex-shrink-0 h-11 w-11 rounded-xl border border-[#E6E2DA] bg-[#EFEDE5] flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[#C06040]" strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-base text-[#1B1B1A] mb-1">
                            {benefit.title}
                          </h5>
                          <p className="text-sm text-[#5F5B55] leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
