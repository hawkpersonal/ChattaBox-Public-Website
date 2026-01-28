import { Wrench, Phone, FileText, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Wrench,
    title: "You Set It Up (10mins)",
    description: "- Share info about your loved one to help ChattaBox to settle in\n- Configure reminders & check-ins & preferences through the family portal",
  },
  {
    number: "2",
    icon: Phone,
    title: "ChattaBox Calls Them",
    description: "- ChattaBox calls as you configured\n- They can call ChattaBox whenever they want to talk too.\nIt remembers their conversations and preferences.",
  },
  {
    number: "3",
    icon: FileText,
    title: "You Get Updates",
    description: "- Receive simple daily summaries about your loved ones progress\n- Receive insights in how best you can help their wellbeing",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 md:py-24 bg-[#EFEDE5]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-serif">
            How It Works
          </h2>
          <p className="text-lg text-[#5F5B55] leading-relaxed">
            Simple setup, daily calls, and peace of mind for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-[#E6E2DA]"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-[12px] p-6 border border-[#E6E2DA] shadow-elegant">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full bg-[#EFEDE5] border border-[#E6E2DA] flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-[#C06040]" strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-[#1B1B1A]">
                      {step.title}
                    </h3>
                    <ul className="text-sm text-[#5F5B55] leading-relaxed space-y-2 text-left w-full">
                      {step.number === "1" ? (
                        <>
                          <li className="flex items-baseline gap-2">
                            <span className="text-accent-green">•</span>
                            <span>Share info about your loved one to help ChattaBox to settle in</span>
                          </li>
                          <li className="flex items-baseline gap-2">
                            <span className="text-accent-green">•</span>
                            <span>Configure reminders & check-ins & preferences through the family portal</span>
                          </li>
                        </>
                      ) : step.number === "2" ? (
                        <>
                          <li className="flex items-baseline gap-2">
                            <span className="text-accent-green">•</span>
                            <span>ChattaBox calls as you configured</span>
                          </li>
                          <li className="flex items-baseline gap-2">
                            <span className="text-accent-green">•</span>
                            <span>They can call ChattaBox whenever they want to talk too.</span>
                          </li>
                          <li className="flex items-baseline gap-2">
                            <span className="text-accent-green">•</span>
                            <span>It remembers their conversations and preferences.</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-baseline gap-2">
                            <span className="text-accent-green">•</span>
                            <span>Receive simple daily summaries about your loved ones progress</span>
                          </li>
                          <li className="flex items-baseline gap-2">
                            <span className="text-accent-green">•</span>
                            <span>Receive insights in how best you can help their wellbeing</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-7 w-9 h-9 items-center justify-center">
                    <div className="rounded-full bg-[#EFEDE5] border border-[#E6E2DA] w-7 h-7 flex items-center justify-center shadow-elegant">
                      <ChevronRight className="h-5 w-5 text-accent-green" strokeWidth={2.5} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
