import { useState, useRef, useEffect, useCallback } from "react";
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

const STEP_DURATION_MS = 10000;
const PAUSE_AFTER_MANUAL_MS = 12000;

const cadenceSteps = [
  {
    key: 'morning',
    icon: Bell,
    timeLabel: "9am",
    title: "Gentle reminders",
    audience: "For your parent",
    how: "ChattaBox calls with helpful reminders for medications, meals, or daily routines — friendly prompts that feel like a caring check-in.",
    impact: "Your loved one stays on track with important routines, and you get reassurance that the essentials are being covered.",
    example: "\"Good morning! It's time for your vitamins. How did you sleep?\"",
    linkedBenefits: ["Works on Their Phone", "Helpful Reminders"],
  },
  {
    key: 'midday',
    icon: MessageCircle,
    timeLabel: "2pm",
    title: "Friendly check-in",
    audience: "For your parent",
    how: "A warm conversation during the day to see how things are going. ChattaBox asks about their day and listens to what matters to them.",
    impact: "Small check-ins catch issues early and help them feel supported — without you needing to call constantly.",
    example: "\"How's your day going? Did you get a chance to work on your garden today?\"",
    linkedBenefits: ["Daily Companionship", "Remembers What Matters"],
  },
  {
    key: 'evening',
    icon: Heart,
    timeLabel: "6pm",
    title: "A comforting chat",
    audience: "For your parent",
    how: "An evening conversation to wind down the day. ChattaBox remembers their stories and asks about the things they care about.",
    impact: "Regular conversation helps reduce loneliness and keeps their day feeling connected and positive.",
    example: "\"Tell me about your day. I remember you mentioned your woodworking project yesterday.\"",
    linkedBenefits: ["Daily Companionship", "Remembers What Matters"],
  },
  {
    key: 'anytime',
    icon: Phone,
    timeLabel: "Anytime",
    title: "They can call",
    audience: "For your parent",
    how: "Your loved one can call ChattaBox whenever they want to talk. No schedules, no waiting — just a friendly voice ready to chat.",
    impact: "They can reach a friendly voice whenever they want, building confidence and reducing reliance on you for every small need.",
    example: "\"I'm here whenever you'd like to talk. What's on your mind today?\"",
    linkedBenefits: ["Daily Companionship", "Works on Their Phone"],
  },
  {
    key: 'daily-summary',
    icon: FileText,
    timeLabel: "Daily summary",
    title: "Your daily update",
    audience: "For you",
    how: "You receive a gentle summary of how your loved one is doing. Mood patterns, engagement levels, and any notable moments — all in one simple update.",
    impact: "You get a simple, readable snapshot of how they're doing — plus gentle suggestions if a call might help.",
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
  const [activeStep, setActiveStep] = useState(0); // Start at Morning
  const [benefitAudience, setBenefitAudience] = useState<'parent' | 'you'>('parent');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingProgrammatically = useRef(false);
  const prefersReducedMotion = useRef(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;
  }, []);

  // Sync scroll position with activeStep (when changed programmatically)
  useEffect(() => {
    if (scrollContainerRef.current && isScrollingProgrammatically.current) {
      const track = scrollContainerRef.current.querySelector('.flex') as HTMLElement;
      if (track) {
        const cardElement = track.children[activeStep] as HTMLElement;
        if (cardElement) {
          cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          // Reset flag after scroll completes
          setTimeout(() => {
            isScrollingProgrammatically.current = false;
          }, 500);
        }
      }
    }
  }, [activeStep]);

  // Handle scroll events to update activeStep (only for user-initiated scrolls)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Don't update if we're programmatically scrolling
      if (isScrollingProgrammatically.current) return;
      
      const track = container.querySelector('.flex') as HTMLElement;
      if (!track) return;
      
      const cards = track.children;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;

        if (Math.abs(cardCenter - containerCenter) < cardRect.width / 2) {
          if (activeStep !== i) {
            setActiveStep(i);
          }
          break;
        }
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeStep]);


  const handleStepClick = (index: number) => {
    if (index === activeStep) return;
    isScrollingProgrammatically.current = true;
    setActiveStep(index);
  };

  return (
    <section id="features" className="pt-16 pb-16 bg-[#EFEDE5]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <h2 className="font-serif">
            How we help
          </h2>
          <p className="text-lg text-[#5F5B55] leading-relaxed">
            Simple <span className="underline-wiggly">companionship & routine</span> support that brings <span className="underline-wiggly">help & comfort</span> to older adults & <span className="underline-wiggly">peace of mind</span> to families
          </p>
        </div>

        {/* Block 1: Card Carousel */}
        <div className="mb-12 md:mb-16">
          <div className="relative group">
            {/* Carousel container */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {/* Card track */}
              <div className="flex gap-4 pb-4">
                {cadenceSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === activeStep;
                  return (
                    <div
                      key={index}
                      className="snap-center flex-shrink-0 w-full"
                      onClick={() => handleStepClick(index)}
                    >
                      <div
                        className={`rounded-3xl border border-[#E6E2DA] bg-white p-5 md:p-6 transition-all duration-300 ${
                          isActive
                            ? 'scale-100 opacity-100'
                            : 'scale-95 opacity-60'
                        }`}
                        style={{
                          transition: prefersReducedMotion.current
                            ? 'none'
                            : 'transform 300ms ease-out, opacity 300ms ease-out',
                        }}
                      >
                        <div className="text-center">
                          {/* Top row: Icon + Title */}
                          <div className="flex flex-col items-center gap-3 mb-6">
                            <div className="flex-shrink-0 p-3 rounded-xl bg-[#EFEDE5] border border-[#E6E2DA]">
                              <Icon className="h-6 w-6 text-[#C06040]" strokeWidth={2} />
                            </div>
                            <h4 className="font-semibold text-base text-[#1B1B1A]">
                              {step.title}
                            </h4>
                          </div>

                          {/* How section */}
                          <div className="mb-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1A] mb-1.5">
                              How:
                            </p>
                            <p className="text-sm text-[#5F5B55] leading-relaxed">
                              {step.how}
                            </p>
                          </div>

                          {/* Impact section */}
                          <div className="mb-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1A] mb-1.5">
                              Impact:
                            </p>
                            <p className="text-sm text-[#5F5B55] leading-relaxed">
                              {step.impact}
                            </p>
                          </div>

                          {/* Optional example quote */}
                          {step.example && (
                            <div className="pt-3 border-t border-[#E6E2DA]">
                              <p className="text-xs text-[#8A857E] italic leading-relaxed">
                                {step.example}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation arrows - Desktop only, show on hover */}
            <button
              onClick={() => handleStepClick(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-[#E6E2DA] hover:bg-[#F9F8F4] disabled:opacity-30 disabled:cursor-not-allowed transition-all opacity-0 group-hover:opacity-100 shadow-sm z-10"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-[#1B1B1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleStepClick(Math.min(cadenceSteps.length - 1, activeStep + 1))}
              disabled={activeStep === cadenceSteps.length - 1}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-[#E6E2DA] hover:bg-[#F9F8F4] disabled:opacity-30 disabled:cursor-not-allowed transition-all opacity-0 group-hover:opacity-100 shadow-sm z-10"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-[#1B1B1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dot menu indicator */}
            <div className="mt-6 flex justify-center items-center gap-2">
              {cadenceSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className="focus:outline-none transition-all"
                  aria-label={`Go to step ${index + 1}`}
                >
                  {index === activeStep ? (
                    <div className="w-8 h-0.5 bg-[#C06040] rounded-full" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-[#DED9D0] hover:bg-[#C06040] transition-colors" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Block 2: Benefits */}
        <div>
          <div className="mx-auto max-w-3xl mb-8">
            <h3 className="text-2xl font-serif font-semibold text-[#1B1B1A] mb-2 text-center">
              Benefits
            </h3>
          </div>

          {/* Segmented Toggle - Always visible */}
          <div className="mb-8">
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

          {/* Single List Based on Toggle - Always visible */}
          <div className="max-w-2xl mx-auto">
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
