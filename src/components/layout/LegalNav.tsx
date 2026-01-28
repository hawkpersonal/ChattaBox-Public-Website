import { Link, useLocation } from "react-router-dom";
import { FileText } from "lucide-react";

const legalPages = [
  { path: "/privacy", label: "Privacy" },
  { path: "/cookies", label: "Cookies" },
  { path: "/terms", label: "Terms" },
  { path: "/company-details", label: "Company Details" },
];

export function LegalNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#E6E2DA] shadow-sm">
        <FileText className="h-4 w-4 text-[#5F5B55]" />
        <div className="flex items-center gap-1">
          {legalPages.map((page, index) => (
            <div key={page.path} className="flex items-center">
              {index > 0 && (
                <span className="text-[#C8C4BE] mx-1">•</span>
              )}
              <Link
                to={page.path}
                className={`text-sm transition-colors ${
                  currentPath === page.path
                    ? "text-[#C06040] font-semibold"
                    : "text-[#5F5B55] hover:text-accent-green"
                }`}
              >
                {page.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
