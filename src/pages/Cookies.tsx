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
            Cookie Policy
          </h1>
          <p className="text-sm text-[#8A857E] mb-10">
            Effective date: 21 February 2026
            <br />
            Last updated: 21 February 2026
          </p>

          <div className="prose prose-neutral max-w-none text-[#5F5B55] space-y-6">
            <p>
              Chattabox is operated by SN PARTNERS LIMITED (trading as Chattabox). This Cookie Policy explains how we use cookies and similar technologies on our website and the Chattabox App (web-based dashboard).
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              What are cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites work properly and, in some cases, help website owners understand how the site is used. The same rules can apply to other technologies that store or access information on your device.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              Do we use a cookie banner?
            </h2>
            <p>
              We only need to ask for consent where we use non-essential cookies/technologies. Cookies and storage that are strictly necessary to provide a service you request (for example, security-related cookies or authentication tokens) do not require consent.
            </p>
            <p>
              Because our analytics setup on the public website is cookieless (see below), and the Chattabox App only uses strictly necessary storage, we do not currently show an "accept cookies" banner for analytics.
            </p>
            <p>
              This applies to both our public website and the Chattabox App. Neither uses non-essential cookies, so no consent banner is required under UK PECR.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              Cookies and similar technologies we use
            </h2>

            <h3 className="font-semibold text-[#1B1B1A] mt-4 mb-2">
              1) Public website
            </h3>
            <p>
              <strong className="text-[#1B1B1A]">Strictly necessary cookies (always on)</strong>
              <br />
              These are needed to make the website work (for example, security, page navigation, and remembering essential settings). Because they are essential, they do not require consent.
            </p>
            <p>
              <strong className="text-[#1B1B1A]">Analytics (cookieless) — Vercel Web Analytics</strong>
              <br />
              We use Vercel Web Analytics to understand overall website traffic (for example, which pages are visited) so we can improve the site. Vercel Web Analytics is designed to work without third-party cookies. Instead, it identifies visits using a hash created from the incoming request, and the session identification is discarded after 24 hours.
            </p>

            <h3 className="font-semibold text-[#1B1B1A] mt-6 mb-2">
              The Chattabox App
            </h3>
            <p>
              In addition to our public website, we operate the Chattabox App (a web-based dashboard). The App uses the following technologies:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#8A857E]">
                    <th className="text-left py-2 pr-4 font-semibold text-[#1B1B1A]">Technology</th>
                    <th className="text-left py-2 pr-4 font-semibold text-[#1B1B1A]">Purpose</th>
                    <th className="text-left py-2 font-semibold text-[#1B1B1A]">Type</th>
                  </tr>
                </thead>
                <tbody className="text-[#5F5B55]">
                  <tr className="border-b border-[#C8C4BE]">
                    <td className="py-2 pr-4">Authentication tokens</td>
                    <td className="py-2 pr-4">Stored in browser local storage to keep you signed in</td>
                    <td className="py-2">Strictly necessary</td>
                  </tr>
                  <tr className="border-b border-[#C8C4BE]">
                    <td className="py-2 pr-4">Session storage</td>
                    <td className="py-2 pr-4">Temporary data needed during your current browser session</td>
                    <td className="py-2">Strictly necessary</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The App does not use any tracking cookies, advertising cookies, or third-party analytics. All storage used by the App is strictly necessary for it to function.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              Your choices
            </h2>
            <p>
              You can control cookies through your browser settings (block or delete cookies). If you block strictly necessary cookies or local storage, parts of the website or App may not work properly.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              Third parties
            </h2>
            <p>
              Our website is hosted on Vercel and uses Vercel Web Analytics as described above.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              Updates to this policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. We will post the latest version on our website and update the effective date above — especially if we add any analytics or marketing tools that use cookies and require consent.
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
