import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E6E2DA] bg-[#F9F8F4]/95 backdrop-blur-sm h-16">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Chattabox logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-[19px] font-semibold font-wordmark tracking-tight" style={{ letterSpacing: '-0.02em' }}>Chattabox</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                window.location.href = 'https://app.chattabox.io';
              }}
              className="rounded-full border border-accent-green text-accent-green font-medium px-4 py-2 text-sm transition-colors hover:bg-accent-green/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F8F4]"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
