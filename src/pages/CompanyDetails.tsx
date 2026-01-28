import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalNav } from "@/components/layout/LegalNav";
import { ChevronLeft } from "lucide-react";

export function CompanyDetails() {
  return (
    <main>
      <Header />
      <section className="py-14 md:py-24 bg-[#F9F8F4] min-h-[60vh]">
        <div className="container max-w-3xl">
          <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
            <LegalNav />
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm text-[#5F5B55] hover:text-accent-green transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to main page
            </Link>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-[#1B1B1A] mb-2">
            Company Details
          </h1>
          <div className="prose prose-neutral max-w-none text-[#5F5B55] space-y-4 mt-6">
            <p>
              Chattabox is operated by SN PARTNERS LIMITED (trading as
              “Chattabox”).
            </p>
            <ul className="list-none space-y-1 text-[#5F5B55]">
              <li>
                <strong className="text-[#1B1B1A]">Company number:</strong>{" "}
                13400816
              </li>
              <li>
                <strong className="text-[#1B1B1A]">Registered office:</strong>{" "}
                The Warehouse, Anchor Quay, Penryn, Cornwall, United Kingdom,
                TR10 8GZ
              </li>
              <li>
                <strong className="text-[#1B1B1A]">Email:</strong>{" "}
                <a
                  href="mailto:hello@chattabox.io"
                  className="text-[#C06040] hover:text-accent-green underline"
                >
                  hello@chattabox.io
                </a>
              </li>
              <li>
                <strong className="text-[#1B1B1A]">Privacy enquiries:</strong>{" "}
                <a
                  href="mailto:privacy@chattabox.io"
                  className="text-[#C06040] hover:text-accent-green underline"
                >
                  privacy@chattabox.io
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
