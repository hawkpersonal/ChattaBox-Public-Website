import { useState, useEffect, useRef } from "react";

const sectionIds = [
  "features",
  "family-portal",
  "how-it-works",
  "testimonials",
  "pricing",
  "about",
  "contact",
];

export function SectionRail() {
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleSection = "";

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        // Simple, stable behaviour: only switch when a section
        // is clearly in view (at least ~40%).
        if (mostVisibleSection && maxRatio > 0.4) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div
      className="hidden lg:flex fixed right-3 top-1/2 -translate-y-1/2 z-40"
      aria-hidden="true"
    >
      <ul className="flex flex-col gap-3" role="presentation">
        {sectionIds.map((id) => {
          const isActive = activeSection === id;
          return (
            <li key={id}>
              <span
                className={`block w-2 h-2 rounded-full transition-all duration-200 ${
                  isActive ? "bg-accent-green w-3 h-3" : "bg-[#DED9D0]"
                }`}
                aria-hidden="true"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
