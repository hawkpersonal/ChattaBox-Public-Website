import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  PhoneIncoming,
  MicOff,
  LayoutDashboard,
  Bell,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Wallet,
  MapPin,
  type LucideIcon,
} from "lucide-react";

const faqItems: Array<{
  question: string;
  answer: string | React.ReactNode;
  icon: LucideIcon;
}> = [
  {
    question: "What does my loved one need?",
    answer:
      "Just their regular phone — mobile or landline. No apps, no screens, no new device to learn.",
    icon: Phone,
  },
  {
    question: "Can they call Chattabox whenever they want?",
    answer:
      "Yes. They can call whenever they feel like a chat. You can also set scheduled check-ins and reminders.",
    icon: PhoneIncoming,
  },
  {
    question: "Do you record calls?",
    answer:
      "No. We don't store call audio. We create a private text transcript so Chattabox can remember context and improve the experience. Families don't see word-for-word transcripts, and access is tightly restricted.",
    icon: MicOff,
  },
  {
    question: "What will I see as a family member?",
    answer:
      "You'll get a gentle daily update with general topics, mood and engagement trends, and practical flags like missed check-ins or repeated low mood. You won't see word-for-word transcripts.",
    icon: LayoutDashboard,
  },
  {
    question: "How do reminders work?",
    answer:
      "You set reminders in the family portal (e.g., medication, meals, routines). Chattabox weaves them into friendly calls — like a caring nudge, not an alarm.",
    icon: Bell,
  },
  {
    question: "Is Chattabox an emergency or medical service?",
    answer:
      "No. Chattabox is for companionship and routine support. If you're concerned about immediate safety or health, contact a professional or emergency services.",
    icon: AlertTriangle,
  },
  {
    question: "How quickly can we set it up?",
    answer:
      "Usually in about 10 minutes. You share a few basics, pick call times, and choose any reminders — then Chattabox starts calling.",
    icon: Clock,
  },
  {
    question: "Is my family's information private?",
    answer: (
      <>
        Yes. We minimise what we collect, protect it with encryption and restricted access, and we never sell your data. You can request deletion at any time. You can contact{" "}
        <a
          href="mailto:privacy@chattabox.io"
          className="text-[#C06040] hover:text-accent-green underline"
        >
          privacy@chattabox.io
        </a>{" "}
        whenever you need.
      </>
    ),
    icon: ShieldCheck,
  },
  {
    question: "What does Chattabox cost?",
    answer:
      "Chattabox is free during early access while we refine the experience. We'll introduce simple paid plans later, and we'll always share pricing clearly and give notice before anything changes.",
    icon: Wallet,
  },
  {
    question: "Where is Chattabox available?",
    answer:
      "Chattabox is currently UK-focused, and we're onboarding families here first during early access. Once we've refined the experience, we plan to expand to Europe and then the US.",
    icon: MapPin,
  },
];

export function FAQ() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="faq" className="py-14 md:py-24 bg-[#F9F8F4]">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif">FAQ</h2>
            <p className="text-lg text-[#5F5B55] leading-relaxed">
              Everything you need to know before you try Chattabox.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-0">
            {faqItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base font-semibold text-[#1B1B1A] py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Icon className="h-[18px] w-[18px] md:h-5 md:w-5 shrink-0 text-accent-green" strokeWidth={2} />
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-base text-[#5F5B55] mb-6">
              Still got questions?
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
