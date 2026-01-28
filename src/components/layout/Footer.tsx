import { Link } from "react-router-dom";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#E6E2DA] bg-[#101010] text-[#F0F0F0]">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
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
            <p className="text-sm text-[#8A857E] leading-relaxed">
              A friendly voice companion for older adults and peace of mind for families.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#F0F0F0]">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-[#8A857E] hover:text-accent-green transition-colors">
                  How It Helps
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-[#8A857E] hover:text-accent-green transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-[#8A857E] hover:text-accent-green transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#F0F0F0]">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-[#8A857E] hover:text-accent-green transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-[#8A857E] hover:text-accent-green transition-colors">
                  Early Access
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#F0F0F0]">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-[#8A857E] hover:text-accent-green transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-[#8A857E] hover:text-accent-green transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-[#8A857E] hover:text-accent-green transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/company-details" className="text-sm text-[#8A857E] hover:text-accent-green transition-colors">
                  Company details
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#F0F0F0]">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@chattabox.io" className="text-sm text-[#8A857E] hover:text-accent-green transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  hello@chattabox.io
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-[#8A857E] hover:text-accent-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E6E2DA]/20 mt-12 pt-8 text-center space-y-2">
          <p className="text-sm text-[#8A857E]">
            Chattabox is operated by SN PARTNERS LIMITED (Company No. 13400816).
            Registered office: The Warehouse, Anchor Quay, Penryn, Cornwall,
            TR10 8GZ.
          </p>
          <p className="text-sm text-[#8A857E]">
            © {new Date().getFullYear()} ChattaBox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
