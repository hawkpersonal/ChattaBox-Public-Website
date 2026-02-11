import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials?: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Since we set up Chattabox, Dad has someone to chat with every day. He tells it about his day, and it remembers to ask about his woodworking projects. As a daughter who lives hours away, it's such a relief.",
    author: "Sarah M.",
    role: "Daughter",
  },
  {
    quote: "Mum was skeptical at first, but now she talks to Chattabox every morning. It helps her with her routine and asks about her garden. She seems genuinely happier, and I love the daily insights.",
    author: "James T.",
    role: "Son",
  },
  {
    quote: "I support older clients every day. Chattabox is simple and works on a regular phone, so there's no tech barrier. It offers a friendly voice between visits and gives families reassurance.",
    author: "Hannah P.",
    role: "Professional Carer",
    initials: "HP",
  },
  {
    quote: "I can't visit my grandmother as often as I'd like. Knowing Chattabox checks in daily gives me peace of mind. The insights help me understand how she's really doing without constantly worrying about her.",
    author: "Emma L.",
    role: "Granddaughter",
  },
  {
    quote: "My mum doesn't do well with technology, but this just uses her regular phone. She can call Chattabox whenever she's feeling lonely, and it remembers her stories and the little things she cares about. It's been genuinely wonderful for her.",
    author: "Michael R.",
    role: "Son",
  },
];

function TestimonialCard({
  quote,
  author,
  role,
  initials,
}: {
  quote: string;
  author: string;
  role: string;
  initials?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    const check = () => setHasOverflow(el.scrollHeight > el.clientHeight);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [quote, expanded]);

  return (
    <div className="bg-white rounded-[18px] border border-[#E6E2DA] p-6 shadow-elegant flex flex-col min-h-[320px]">
      <Quote className="h-8 w-8 text-[#C06040]/40 mb-4 shrink-0" />
      <blockquote className="flex-1 min-h-0 flex flex-col">
        <p
          ref={quoteRef}
          className={cn(
            "text-lg leading-relaxed font-serif text-[#1B1B1A] mb-6 flex-1",
            !expanded && "line-clamp-6"
          )}
        >
          {quote}
        </p>
        {hasOverflow && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="text-sm text-accent-green hover:underline text-left font-medium mb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/30 focus-visible:ring-offset-2 rounded"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </blockquote>
      <div className="flex items-center gap-4 pt-6 border-t border-[#E6E2DA] shrink-0">
        <Avatar>
          <AvatarImage
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=C06040&color=fff&size=128&bold=true&font-size=0.5`}
            alt={author}
          />
          <AvatarFallback className="bg-[#EFEDE5] text-[#C06040]">
            {initials ?? author.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-[#1B1B1A]">{author}</p>
          <p className="text-sm text-[#5F5B55]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
    },
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnapList, setScrollSnapList] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnapList(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  return (
    <section id="testimonials" className="py-14 md:py-24 bg-[#EFEDE5]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-serif">Real Stories from Families</h2>
          <p className="text-lg text-[#5F5B55] leading-relaxed">
            Real stories from families using Chattabox with their loved ones
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative group">
          <div
            className="overflow-hidden outline-none"
            ref={emblaRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label="Testimonials carousel. Use arrow keys to navigate."
          >
            <div className="flex gap-8 touch-pan-y">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-1rem)]"
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    initials={testimonial.initials}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 md:-left-4 w-10 h-10 rounded-full bg-white border border-[#E6E2DA] shadow-elegant flex items-center justify-center text-[#1B1B1A] hover:bg-[#F9F8F4] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/30 focus-visible:ring-offset-2 disabled:opacity-50 z-10"
            aria-label="Previous testimonials"
            disabled={selectedIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 md:-right-4 w-10 h-10 rounded-full bg-white border border-[#E6E2DA] shadow-elegant flex items-center justify-center text-[#1B1B1A] hover:bg-[#F9F8F4] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/30 focus-visible:ring-offset-2 disabled:opacity-50 z-10"
            aria-label="Next testimonials"
            disabled={scrollSnapList.length > 0 && selectedIndex === scrollSnapList.length - 1}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {scrollSnapList.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/30 focus-visible:ring-offset-2 rounded-full transition-colors",
                  index === selectedIndex
                    ? "w-8 h-1 bg-accent-green"
                    : "w-2 h-2 rounded-full bg-[#DED9D0] hover:bg-accent-green/70"
                )}
                aria-label={`Go to slide ${index + 1} of ${scrollSnapList.length}`}
                aria-current={index === selectedIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
