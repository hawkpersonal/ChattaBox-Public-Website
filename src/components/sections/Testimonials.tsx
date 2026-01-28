import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Since we set up ChattaBox, Dad has someone to chat with every day. He tells it about his day, and it remembers to ask about his woodworking projects. As a daughter who lives hours away, it's such a relief.",
    author: "Sarah M.",
    role: "Daughter",
  },
  {
    quote: "Mum was skeptical at first, but now she talks to ChattaBox every morning. It helps her with her routine and asks about her garden. She seems genuinely happier, and I love the daily insights.",
    author: "James T.",
    role: "Son",
  },
  {
    quote: "I can't visit my grandmother as often as I'd like. Knowing ChattaBox checks in daily gives me peace of mind. The insights help me understand how she's really doing without constantly worrying about her.",
    author: "Emma L.",
    role: "Granddaughter",
  },
  {
    quote: "My mum doesn't do well with technology, but this just uses her regular phone. She can call ChattaBox whenever she's feeling lonely, and it remembers her stories and the little things she cares about. It's been genuinely wonderful for her.",
    author: "Michael R.",
    role: "Son",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-14 md:py-24 bg-[#EFEDE5]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-serif">
            Real Stories from Families
          </h2>
          <p className="text-lg text-[#5F5B55] leading-relaxed">
            Real stories from families using ChattaBox with their loved ones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-[18px] border border-[#E6E2DA] p-6 shadow-elegant"
            >
              <Quote className="h-8 w-8 text-[#C06040]/40 mb-4" />
              <blockquote className="text-lg leading-relaxed font-serif text-[#1B1B1A] mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-[#E6E2DA]">
                <Avatar>
                  <AvatarImage
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=C06040&color=fff&size=128&bold=true&font-size=0.5`}
                    alt={testimonial.author}
                  />
                  <AvatarFallback className="bg-[#EFEDE5] text-[#C06040]">
                    {testimonial.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-[#1B1B1A]">{testimonial.author}</p>
                  <p className="text-sm text-[#5F5B55]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
