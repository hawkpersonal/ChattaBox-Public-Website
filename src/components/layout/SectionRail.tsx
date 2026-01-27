import { useState, useEffect, useRef } from "react";

const sections = [
  { id: "features", label: "How It Helps" },
  { id: "family-portal", label: "Family Portal" },
  { id: "how-it-works", label: "How It Works" },
  { id: "testimonials", label: "Stories" },
  { id: "pricing", label: "Pilot" },
  { id: "contact", label: "Contact" },
];

export function SectionRail() {
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        let maxRatio = 0;
        let mostVisibleSection = "";

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection && maxRatio > 0.4) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      
      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40"
      aria-label="Section navigation"
    >
      <ul className="flex flex-col gap-4">
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                aria-current={isActive ? "true" : undefined}
                className="flex items-center gap-3 group"
                aria-label={`Navigate to ${label}`}
              >
                {/* Dot */}
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-accent-green w-3 h-3"
                      : "bg-[#DED9D0] group-hover:bg-accent-green group-hover:w-2.5 group-hover:h-2.5"
                  }`}
                />
                
                {/* Label */}
                <span
                  className={`text-xs transition-all duration-200 ${
                    isActive
                      ? "text-accent-green font-medium opacity-100"
                      : "text-[#8A857E] opacity-0 group-hover:opacity-100 group-hover:text-accent-green"
                  }`}
                >
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
