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
  const [progress, setProgress] = useState(0); // 0 to 1
  const [pausedUntil, setPausedUntil] = useState<number | null>(null);
  const [benefitAudience, setBenefitAudience] = useState<'parent' | 'you'>('parent');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefersReducedMotion = useRef(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;
  }, []);

  // Auto-advance with progress tracking (steps every 1 second)
  useEffect(() => {
    if (prefersReducedMotion.current) {
      return; // Disable autoplay for reduced motion
    }

    const intervalId = setInterval(() => {
      const now = Date.now();
      
      // Check if paused
      if (pausedUntil && now < pausedUntil) {
        return;
      }
      
      // Clear pause if time has passed
      if (pausedUntil && now >= pausedUntil) {
        setPausedUntil(null);
      }

      setProgress((prev) => {
        // Increment by 0.1 (10%) every second (10 seconds total = 1.0)
        const newProgress = prev + 0.1;

        if (newProgress >= 1) {
          // Move to next step
          setActiveStep((prevStep) => (prevStep + 1) % cadenceSteps.length);
          return 0;
        }

        return newProgress;
      });
    }, 1000); // Update every 1 second

    return () => {
      clearInterval(intervalId);
    };
  }, [pausedUntil]);

  // Reset progress when step changes (from auto-advance)
  useEffect(() => {
    setProgress(0);
  }, [activeStep]);


  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
    // Pause autoplay for 12 seconds
    setPausedUntil(Date.now() + PAUSE_AFTER_MANUAL_MS);
  };

  const activeStepData = cadenceSteps[activeStep];
  
  // Calculate overall progress (0 to 1) across all steps
  const overallProgress = Math.min((activeStep + progress) / (cadenceSteps.length - 1), 1);

  return (
    <section id="features" className="pt-16 pb-16 bg-[#EFEDE5]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <h2 className="font-serif">
            How It Helps
          </h2>
          <p className="text-lg text-[#5F5B55] leading-relaxed">
            Simple <span className="underline-wiggly">companionship & routine</span> support that brings <span className="underline-wiggly">help & comfort</span> to older adults & <span className="underline-wiggly">peace of mind</span> to families
          </p>
        </div>

        {/* Block 1: Carousel */}
        <div className="mb-12 md:mb-16">
          <div className="mb-8">
            <div className="rounded-2xl border border-[#E6E2DA] bg-[#EFEDE5] p-4 md:p-5">
              {/* Carousel */}
              <div className="relative">
                {/* Carousel container */}
                <div
                  ref={scrollContainerRef}
                  className="overflow-hidden relative"
                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    scrollContainerRef.current?.setAttribute('data-touch-start', touch.clientX.toString());
                  }}
                  onTouchMove={(e) => {
                    const touch = e.touches[0];
                    const startX = parseFloat(scrollContainerRef.current?.getAttribute('data-touch-start') || '0');
                    const diff = startX - touch.clientX;
                    if (Math.abs(diff) > 50) {
                      if (diff > 0 && activeStep < cadenceSteps.length - 1) {
                        handleStepClick(activeStep + 1);
                      } else if (diff < 0 && activeStep > 0) {
                        handleStepClick(activeStep - 1);
                      }
                      scrollContainerRef.current?.removeAttribute('data-touch-start');
                    }
                  }}
                >
                  <div 
                    className="flex transition-transform duration-300 ease-out"
                    style={{
                      transform: `translateX(-${activeStep * 100}%)`,
                    }}
                  >
                    {cadenceSteps.map((step, index) => {
                      const Icon = step.icon;
                      const isActive = index === activeStep;
                      return (
                        <div
                          key={index}
                          className="min-w-full flex flex-col items-center justify-center px-4 py-6"
                        >
                          <div className="flex flex-col items-center gap-3">
                            <div className={`p-4 rounded-2xl transition-all ${
                              isActive 
                                ? 'bg-white border-2 border-[#DED9D0]' 
                                : 'bg-transparent'
                            }`}>
                              <Icon 
                                className={`h-8 w-8 transition-colors ${
                                  isActive ? 'text-[#C06040]' : 'text-[#8A857E]'
                                }`} 
                                strokeWidth={2} 
                              />
                            </div>
                            <div className="text-center">
                              <p className={`text-sm font-medium mb-1 transition-colors ${
                                isActive ? 'text-[#1B1B1A]' : 'text-[#8A857E]'
                              }`}>
                                {step.timeLabel}
                              </p>
                              <p className={`text-base font-semibold transition-colors ${
                                isActive ? 'text-[#1B1B1A]' : 'text-[#8A857E]'
                              }`}>
                                {step.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {cadenceSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleStepClick(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === activeStep
                          ? 'w-8 bg-[#C06040]'
                          : 'w-2 bg-[#DED9D0]'
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={() => handleStepClick(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-[#E6E2DA] hover:bg-[#F9F8F4] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous"
                >
                  <svg className="w-5 h-5 text-[#1B1B1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => handleStepClick(Math.min(cadenceSteps.length - 1, activeStep + 1))}
                  disabled={activeStep === cadenceSteps.length - 1}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-[#E6E2DA] hover:bg-[#F9F8F4] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Next"
                >
                  <svg className="w-5 h-5 text-[#1B1B1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Detail Panel */}
          <div className="rounded-2xl border border-[#E6E2DA] bg-white p-5 md:p-6">
            <div className="space-y-4">
              {/* Title with Icon */}
              <div className="flex items-center justify-center gap-3">
                {(() => {
                  const Icon = activeStepData.icon;
                  return (
                    <Icon 
                      className="h-6 w-6 text-[#C06040] flex-shrink-0" 
                      strokeWidth={2} 
                    />
                  );
                })()}
                <h4 className="font-semibold text-base text-[#1B1B1A]">
                  {activeStepData.title}
                </h4>
              </div>

              {/* How Section */}
              <div className="text-center">
                <h5 className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1A] mb-2">
                  How:
                </h5>
                <p className="text-sm text-[#5F5B55] leading-relaxed">
                  {activeStepData.how}
                </p>
              </div>

              {/* Impact Section */}
              <div className="text-center">
                <h5 className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1A] mb-2">
                  Impact:
                </h5>
                <p className="text-sm text-[#5F5B55] leading-relaxed">
                  {activeStepData.impact}
                </p>
              </div>
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
