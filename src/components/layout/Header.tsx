import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Header() {
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

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                // TODO: Wire up login functionality
              }}
              className="text-accent-green hover:text-accent-green"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
