import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E6E2DA] bg-[#F9F8F4]/95 backdrop-blur-sm h-16">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="ChattaBox logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold font-serif">ChattaBox</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-[#5F5B55] hover:text-[#1B1B1A] transition-colors text-sm"
            >
              How It Helps
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-[#5F5B55] hover:text-[#1B1B1A] transition-colors text-sm"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#5F5B55] hover:text-[#1B1B1A] transition-colors text-sm"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => scrollToSection("contact")}
            >
              Request a Pilot
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
