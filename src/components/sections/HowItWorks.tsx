import { Settings, Phone, MessageSquare } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Settings,
    title: "You Set It Up",
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
    icon: MessageSquare,
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
                <div className="bg-[#EFEDE5] rounded-[12px] p-6 border border-[#E6E2DA] shadow-elegant">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full bg-[#E6E2DA] flex items-center justify-center mb-4">
                        <span className="text-2xl font-serif text-[#E6E2DA] font-bold">
                          {step.number}
                        </span>
                      </div>
                      <div className="absolute -top-2 -right-2 h-12 w-12 rounded-[12px] bg-[#EFEDE5] flex items-center justify-center">
                        <Icon className="h-6 w-6 text-[#C06040]" strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-[#1B1B1A]">
                      {step.title}
                    </h3>
                    <div className="text-sm text-[#5F5B55] leading-relaxed space-y-1">
                      {step.number === "1" ? (
                        <>
                          <p>- Share info about your loved one to help ChattaBox to settle in</p>
                          <p>- Configure reminders & check-ins & preferences through the family portal</p>
                        </>
                      ) : step.number === "2" ? (
                        <>
                          <p>- ChattaBox calls as you configured</p>
                          <p>- They can call ChattaBox whenever they want to talk too.</p>
                          <p>It remembers their conversations and preferences.</p>
                        </>
                      ) : (
                        <>
                          <p>- Receive simple daily summaries about your loved ones progress</p>
                          <p>- Receive insights in how best you can help their wellbeing</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-[1px] bg-[#E6E2DA]"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
