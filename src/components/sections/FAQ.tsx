import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What does my parent need?",
    answer:
      "Just their regular phone — mobile or landline. No apps, no screens, no new device to learn.",
  },
  {
    question: "Can they call Chattabox whenever they want?",
    answer:
      "Yes. They can call whenever they feel like a chat. You can also set scheduled check-ins and reminders.",
  },
  {
    question: "Do you record calls?",
    answer:
      "No — we don't record audio. We do create written transcripts to help Chattabox remember context, but these aren't viewable and are only used to power service analytics.",
  },
  {
    question: "What will I see as a family member?",
    answer:
      "You'll get a gentle overview — like general topics discussed, mood trends, and helpful flags (for example, missed check-ins). You won't see word-for-word transcripts.",
  },
  {
    question: "How do reminders work?",
    answer:
      "You set reminders in the family portal (e.g., medication, meals, routines). Chattabox weaves them into friendly calls — like a caring nudge, not an alarm.",
  },
  {
    question: "Is Chattabox an emergency or medical service?",
    answer:
      "No. Chattabox is for companionship and routine support. If you're concerned about immediate safety or health, contact a professional or emergency services.",
  },
  {
    question: "How quickly can we set it up?",
    answer:
      "Usually in about 10 minutes. You share a few basics, pick call times, and choose any reminders — then Chattabox starts calling.",
  },
  {
    question: "Is my family's information private?",
    answer: (
      <>
        Yes. We minimise what we collect, protect it with encryption and restricted access, and we never sell your data. You can contact{" "}
        <a
          href="mailto:privacy@chattabox.io"
          className="text-[#C06040] hover:text-accent-green underline"
        >
          privacy@chattabox.io
        </a>{" "}
        any time.
      </>
    ),
  },
  {
    question: "What does Chattabox cost?",
    answer:
      "Chattabox is free during early access while we refine the experience. After that, we plan to offer a small range of simple plans — including a more affordable option — so most families can find something that fits their budget. We'll always be clear on pricing before anything changes.",
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
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-semibold text-[#1B1B1A] py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
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
