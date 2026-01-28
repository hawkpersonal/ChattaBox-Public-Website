import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalNav } from "@/components/layout/LegalNav";
import { ChevronLeft } from "lucide-react";

export function Cookies() {
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
            Cookie Policy (ChattaBox)
          </h1>
          <p className="text-sm text-[#8A857E] mb-10">
            Effective date: 29 January 2026
          </p>

          <div className="prose prose-neutral max-w-none text-[#5F5B55] space-y-6">
            <p>
              Chattabox is operated by SN PARTNERS LIMITED (trading as
              Chattabox). This Cookie Policy explains how we use cookies and
              similar technologies on our website (hosted on Vercel).
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              What are cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help websites work properly and, if you allow them,
              help website owners understand how the site is used.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              Cookies we use
            </h2>

            <h3 className="font-semibold text-[#1B1B1A] mt-4 mb-2">
              1) Strictly necessary cookies (always on)
            </h3>
            <p>
              These cookies are needed to make the website work (for example,
              security, page navigation, and remembering essential settings).
              Because they are essential, they don’t require consent.
            </p>

            <h3 className="font-semibold text-[#1B1B1A] mt-6 mb-2">
              2) Analytics cookies (optional) — Google Analytics
            </h3>
            <p>
              If you choose “Accept analytics”, we use Google Analytics to
              understand how people use our website (for example, which pages
              are visited most, and how visitors move around the site). This
              helps us improve the website.
            </p>
            <p>
              We do not load Google Analytics unless you opt in via our cookie
              banner (and you can change your choice at any time). UK guidance
              requires non-essential cookies (like analytics) to be opt-in, and
              for rejecting to be as easy as accepting.
            </p>
            <p className="font-medium text-[#1B1B1A] mt-4">
              Google Analytics cookies commonly include:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#8A857E]">
                    <th className="text-left py-2 pr-4 font-semibold text-[#1B1B1A]">
                      Cookie
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold text-[#1B1B1A]">
                      What it does
                    </th>
                    <th className="text-left py-2 font-semibold text-[#1B1B1A]">
                      Default expiry
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#C8C4BE]">
                    <td className="py-2 pr-4 font-mono text-[#1B1B1A]">_ga</td>
                    <td className="py-2 pr-4">Helps distinguish visitors</td>
                    <td className="py-2">2 years</td>
                  </tr>
                  <tr className="border-b border-[#C8C4BE]">
                    <td className="py-2 pr-4 font-mono text-[#1B1B1A]">
                      _ga_&lt;container-id&gt;
                    </td>
                    <td className="py-2 pr-4">Helps maintain session state</td>
                    <td className="py-2">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              Your choices
            </h2>
            <p>
              When you first visit our website, you’ll see a cookie banner where
              you can:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Accept analytics</li>
              <li>Reject analytics</li>
            </ul>
            <p className="mt-4">
              You can also change your choice later using Cookie settings
              (linked in the website footer). UK guidance emphasises that
              consent must be a clear, positive choice.
            </p>
            <p>
              You can also manage cookies through your browser settings (block
              or delete cookies). If you block strictly necessary cookies, parts
              of the website may not work properly.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              Third parties
            </h2>
            <p>
              Google Analytics is provided by Google. Google may process
              information about your visit according to its own documentation
              and policies.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              Updates to this policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. We’ll post the
              latest version on our website and update the effective date above.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              Contact
            </h2>
            <p>
              Questions about cookies or privacy? Email{" "}
              <a
                href="mailto:privacy@chattabox.io"
                className="text-[#C06040] hover:text-accent-green underline"
              >
                privacy@chattabox.io
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
