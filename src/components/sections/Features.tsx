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

const STEP_DURATION_MS = 10000;
const PAUSE_AFTER_MANUAL_MS = 12000;

const cadenceSteps = [
  {
    key: 'morning',
    icon: Bell,
    timeLabel: "Morning",
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
    timeLabel: "Midday",
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
    timeLabel: "Evening",
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
    setProgress(0);
    // Pause autoplay for 12 seconds
    setPausedUntil(Date.now() + PAUSE_AFTER_MANUAL_MS);
  };

  const activeStepData = cadenceSteps[activeStep];
  
  // Calculate overall progress for the progress line (0 to 1)
  const overallProgress = Math.min(
    (activeStep + progress) / (cadenceSteps.length - 1),
    1
  );

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

        {/* Block 1: A day with ChattaBox */}
        <div className="mb-12 md:mb-16">
          {/* Daily Cadence Strip */}
          <div className="mb-8">
          <div className="rounded-2xl border border-[#E6E2DA] bg-[#EFEDE5] p-4 md:p-5">
            {/* Desktop: Horizontal timeline */}
            <div className="hidden md:block relative">
              <div className="relative flex justify-between items-center">
                {/* Base connecting lines between dots */}
                {cadenceSteps.slice(0, -1).map((_, index) => {
                  // Calculate progress for this specific segment (0 to 1)
                  const segmentStart = index / (cadenceSteps.length - 1);
                  const segmentEnd = (index + 1) / (cadenceSteps.length - 1);
                  const segmentProgress = Math.max(0, Math.min(1, (overallProgress - segmentStart) / (segmentEnd - segmentStart)));
                  const isSegmentComplete = index < activeStep;
                  
                  // Position: each segment spans from one dot center to the next
                  // With justify-between, dots are at 0%, 25%, 50%, 75%, 100%
                  const segmentWidth = 100 / (cadenceSteps.length - 1);
                  const leftPercent = index * segmentWidth;
                  
                  return (
                    <div
                      key={`line-${index}`}
                      className="absolute top-1/2 h-[1px] -translate-y-1/2"
                      style={{
                        left: `${leftPercent}%`,
                        width: `${segmentWidth}%`,
                      }}
                    >
                      {/* Base line */}
                      <div className="absolute inset-0 h-[1px] bg-[#E6E2DA]" />
                      {/* Progress line */}
                      {(isSegmentComplete || segmentProgress > 0) && (
                        <div
                          className="absolute left-0 h-[1px] bg-[#C06040] transition-all duration-500 ease-out"
                          style={{
                            width: isSegmentComplete ? '100%' : `${segmentProgress * 100}%`,
                            opacity: 0.85,
                          }}
                        />
                      )}
                    </div>
                  );
                })}
                
                {cadenceSteps.map((step, index) => {
                  const isActive = index === activeStep;
                  const isCompleted = index < activeStep;
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
                        <Icon className={`h-5 w-5 mb-2 ${isActive || isCompleted ? "text-[#C06040]" : "text-[#8A857E]"}`} strokeWidth={2} />
                        <span className={`text-xs mb-1 ${isActive ? "text-[#1B1B1A]" : "text-[#8A857E]"}`}>
                          {step.timeLabel}
                        </span>
                        <div
                          className={`w-2.5 h-2.5 rounded-full relative z-20 ${
                            isActive
                              ? "bg-[#C06040] ring-2 ring-[#DED9D0] ring-offset-1"
                              : isCompleted
                              ? "bg-[#C06040]"
                              : "bg-[#DED9D0]"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile: Horizontal scrollable timeline */}
            <div className="md:hidden">
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 relative"
              >
                {/* Progress line for mobile (horizontal) */}
                <div className="absolute top-12 left-4 right-4 h-[1px] bg-[#E6E2DA]" />
                <div 
                  className="absolute top-12 left-4 h-[1px] bg-[#C06040] transition-all duration-500 ease-out"
                  style={{ 
                    width: `calc(${overallProgress * 100}% - 2rem)`,
                    opacity: 0.85
                  }}
                />
                <div className="flex gap-8 min-w-max relative z-10">
                  {cadenceSteps.map((step, index) => {
                    const isActive = index === activeStep;
                    const isCompleted = index < activeStep;
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
                          <Icon className={`h-5 w-5 mb-2 ${isActive || isCompleted ? "text-[#C06040]" : "text-[#8A857E]"}`} strokeWidth={2} />
                          <span className={`text-xs mb-1 ${isActive ? "text-[#1B1B1A]" : "text-[#8A857E]"}`}>
                            {step.timeLabel}
                          </span>
                          <div
                            className={`w-2.5 h-2.5 rounded-full ${
                              isActive
                                ? "bg-[#C06040] ring-2 ring-[#DED9D0] ring-offset-1"
                                : isCompleted
                                ? "bg-[#C06040]"
                                : "bg-[#DED9D0]"
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Detail Panel */}
          <div className="rounded-2xl border border-[#E6E2DA] bg-white p-5 md:p-6">
            <div className="space-y-4 text-center">
              {/* Title */}
              <h4 className="font-semibold text-base text-[#1B1B1A]">
                {activeStepData.title}
              </h4>

              {/* How Section */}
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wide text-[#1B1B1A] mb-2">
                  How:
                </h5>
                <p className="text-sm text-[#5F5B55] leading-relaxed">
                  {activeStepData.how}
                </p>
              </div>

              {/* Impact Section */}
              <div>
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
