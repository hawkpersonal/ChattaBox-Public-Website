import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalNav } from "@/components/layout/LegalNav";
import { ChevronLeft } from "lucide-react";

export function Privacy() {
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
            Privacy Notice (ChattaBox)
          </h1>
          <p className="text-sm text-[#8A857E] mb-10">
            Effective date: 29 January 2026
          </p>

          <div className="prose prose-neutral max-w-none text-[#5F5B55] space-y-6">
            <p>
              Chattabox is a product/service operated by SN PARTNERS LIMITED
              (trading as ChattaBox). ChattaBox (“we”, “us”) is responsible for
              how we use personal information (the “data controller”).
            </p>

            <ul className="list-none space-y-1 text-[#5F5B55]">
              <li>
                <strong className="text-[#1B1B1A]">Contact:</strong>{" "}
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
              <li>
                <strong className="text-[#1B1B1A]">Company details:</strong> See
                our{" "}
                <Link
                  to="/company-details"
                  className="text-[#C06040] hover:text-accent-green underline"
                >
                  Company Details
                </Link>{" "}
                page.
              </li>
            </ul>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              What ChattaBox does
            </h2>
            <p>
              ChattaBox provides a friendly voice companion service for older
              adults, with optional updates for family members. ChattaBox is not
              an emergency service and does not provide medical advice. If
              you’re worried about someone’s immediate safety, call emergency
              services.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              1) The personal information we collect
            </h2>
            <h3 className="font-semibold text-[#1B1B1A] mt-4 mb-2">
              Information you give us
            </h3>
            <p>
              <strong className="text-[#1B1B1A]">Family member (account holder):</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email address, phone number</li>
              <li>Relationship to the older adult</li>
              <li>Account and support communications</li>
            </ul>
            <p className="mt-4">
              <strong className="text-[#1B1B1A]">Older adult (set up by family):</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and phone number</li>
              <li>Call preferences (e.g., preferred times)</li>
              <li>
                Any preferences shared to help ChattaBox feel personal (e.g.,
                interests, routine reminders)
              </li>
            </ul>

            <h3 className="font-semibold text-[#1B1B1A] mt-6 mb-2">
              Information created when the service runs
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Call details (e.g., date/time, whether the call connected, call
                duration and technical call information)
              </li>
              <li>
                Transcripts of calls (a written version of what was said), used
                to operate and improve the service and to generate service
                analytics (see Section 2)
              </li>
            </ul>
            <p className="font-medium text-[#1B1B1A]">
              Important: We do not record calls (no audio recordings).
            </p>

            <h3 className="font-semibold text-[#1B1B1A] mt-6 mb-2">
              Website information
            </h3>
            <p>
              If we use analytics on our website, we may collect information
              about how the site is used (for example, pages viewed and
              device/browser information). See our Cookie Policy for details.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              2) How we use personal information (and our lawful bases)
            </h2>
            <p>We use personal information to:</p>

            <p className="mt-4">
              <strong className="text-[#1B1B1A]">A) Provide ChattaBox and support users</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Set up accounts and call schedules</li>
              <li>Place and manage calls</li>
              <li>Provide customer support</li>
            </ul>
            <p className="text-sm italic">
              Lawful basis: performance of a contract (or steps taken at your
              request before entering a contract).
            </p>

            <p className="mt-4">
              <strong className="text-[#1B1B1A]">B) Create family-friendly updates (without sharing transcripts)</strong>
            </p>
            <p>
              Families may receive high-level updates such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Overview of general topics discussed (e.g., “gardening”, “family”,
                “TV”)
              </li>
              <li>
                Sentiment or “how the chat seemed to go” (e.g.,
                upbeat/neutral/low)
              </li>
            </ul>
            <p>
              Families do not get access to full transcripts, and we do not
              share word-for-word call content with families.
            </p>
            <p className="text-sm italic">
              Lawful basis: performance of a contract and/or legitimate
              interests (providing peace of mind and improving support around the
              older adult).
            </p>

            <p className="mt-4">
              <strong className="text-[#1B1B1A]">C) Analytics to improve the service</strong>
            </p>
            <p>We use transcripts to power internal analytics such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service quality and reliability checks</li>
              <li>
                Understanding how conversations are going in aggregate (e.g.,
                common issues, trends)
              </li>
              <li>
                Improving prompts and responses so the experience feels helpful
                and natural
              </li>
            </ul>
            <p className="text-sm italic">
              Lawful basis: legitimate interests (running, maintaining and
              improving ChattaBox).
            </p>

            <p className="mt-4">
              <strong className="text-[#1B1B1A]">D) Safety, fraud prevention and legal compliance</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Protecting ChattaBox against misuse</li>
              <li>
                Responding to lawful requests from regulators or law
                enforcement
              </li>
            </ul>
            <p className="text-sm italic">
              Lawful basis: legitimate interests and/or legal obligation.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              3) Sensitive information
            </h2>
            <p>
              Sometimes, conversations may include sensitive topics (for
              example, health). We don’t ask for this, but it may be shared
              naturally in conversation. We apply additional care and safeguards
              when this happens, and we use it only where necessary to provide
              and improve the service.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              4) Who we share information with
            </h2>
            <p>
              We share personal information only with trusted suppliers who
              help us run ChattaBox, for example:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hosting and database providers (to store service data)</li>
              <li>Telephony providers (to place calls)</li>
              <li>
                AI/voice processing providers (to generate responses and produce
                high-level summaries/sentiment)
              </li>
              <li>Email providers (to send service emails)</li>
            </ul>
            <p>
              We require suppliers to protect personal information and to use it
              only to provide services to us.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              5) International transfers
            </h2>
            <p>
              Some suppliers may process or store data outside the UK. Where
              this happens, we use appropriate safeguards designed to protect
              your information (for example, recognised contractual
              protections).
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              6) How long we keep information
            </h2>
            <p>
              We keep personal information only as long as needed for the
              purposes in this notice.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="text-[#1B1B1A]">Account and service details:</strong> kept
                while the account is active, then kept for a reasonable period
                afterwards for support and record-keeping.
              </li>
              <li>
                <strong className="text-[#1B1B1A]">Transcripts:</strong> kept only for as long
                as needed to provide the service and run analytics, then deleted
                or anonymised.
              </li>
            </ul>
            <p>
              You can ask for more detail about our retention periods at{" "}
              <a
                href="mailto:privacy@chattabox.io"
                className="text-[#C06040] hover:text-accent-green underline"
              >
                privacy@chattabox.io
              </a>
              .
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              7) Security
            </h2>
            <p>
              We take security seriously. We use measures designed to protect
              information from unauthorised access, loss or misuse. This
              includes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Restricted access to transcripts (available only through
                protected admin access)
              </li>
              <li>
                Technical and organisational safeguards appropriate to the
                nature of the information
              </li>
            </ul>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              8) Your rights
            </h2>
            <p>
              You have rights over your personal information, including the
              right to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your information</li>
              <li>Correct inaccurate information</li>
              <li>Ask us to delete information (in some situations)</li>
              <li>Object to, or ask us to restrict, certain processing</li>
              <li>
                Receive a copy of certain information in a portable format (in
                some situations)
              </li>
              <li>Withdraw consent where we rely on consent</li>
            </ul>
            <p>
              To exercise your rights, contact{" "}
              <a
                href="mailto:privacy@chattabox.io"
                className="text-[#C06040] hover:text-accent-green underline"
              >
                privacy@chattabox.io
              </a>
              .
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              9) Complaints
            </h2>
            <p>
              If you have concerns, please contact us first and we’ll do our best
              to resolve them. You also have the right to complain to the UK
              Information Commissioner’s Office (ICO).
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              10) Children
            </h2>
            <p>
              ChattaBox is designed for adults and is not intended for children
              under 18.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              11) Cookies
            </h2>
            <p>
              For information about cookies and similar technologies, see our{" "}
              <Link
                to="/cookies"
                className="text-[#C06040] hover:text-accent-green underline"
              >
                Cookie Policy
              </Link>
              .
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              12) Changes to this notice
            </h2>
            <p>
              We may update this Privacy Notice from time to time. We’ll post the
              latest version on our website and update the effective date above.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
