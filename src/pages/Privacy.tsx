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
            Privacy Notice (Chattabox)
          </h1>
          <p className="text-sm text-[#8A857E] mb-10">
            Effective date: 21 February 2026
            <br />
            Last updated: 21 February 2026
          </p>

          <div className="prose prose-neutral max-w-none text-[#5F5B55] space-y-6">
            <p>
              Chattabox is a product/service operated by SN PARTNERS LIMITED
              (trading as Chattabox). Chattabox ("we", "us") is responsible for
              how we use personal information (the "data controller").
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
                <strong className="text-[#1B1B1A]">Company details:</strong> See our{" "}
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
              What Chattabox does
            </h2>
            <p>
              Chattabox provides a friendly voice companion service for older
              adults, with optional updates for family members. Chattabox also includes a
              web-based dashboard (the "App") that family members/account holders can use
              to manage the service, view high-level insights, configure interactions,
              manage devices, and handle billing. Chattabox is not an emergency service
              and does not provide medical advice. If you are worried about someone's
              immediate safety, call emergency services.
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
              <li>Account credentials (email address, password stored in hashed form), email verification status</li>
              <li>Billing and payment information (via Stripe), including plan selection, billing history, and invoices. We do not store full payment card numbers.</li>
            </ul>
            <p className="mt-4">
              <strong className="text-[#1B1B1A]">Older adult (set up by family):</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and phone number</li>
              <li>Date of birth, location, language, timezone</li>
              <li>Preferred AI companion persona</li>
              <li>Call preferences (for example preferred times)</li>
              <li>Optional personal details provided during onboarding to help Chattabox feel personal (for example spouse/partner name, children, hobbies, daily routine, and communication preferences)</li>
            </ul>

            <h3 className="font-semibold text-[#1B1B1A] mt-6 mb-2">
              Information created when the service runs
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Call details (for example date/time, whether the call connected, call duration, and technical call information)</li>
              <li>Transcripts of calls (a written version of what was said), used to operate and improve the service and to generate service analytics (see Section 2)</li>
              <li>AI-generated memories/facts extracted from conversations (for example interests and preferences), including confidence scores where used internally</li>
              <li>AI personality profile data (for example personality trait scores derived from conversations)</li>
              <li>AI-generated wellbeing insights and mood trends, notable changes, and suggested check-ins</li>
              <li>AI-generated daily summaries of conversations</li>
              <li>Device information (for example device name, type, status, and activity logs for connected devices)</li>
              <li>Interaction records (for example scheduled reminders, check-ins, and their delivery status)</li>
              <li>Consent records (timestamp and version of Terms of Service/Privacy Notice acceptance)</li>
              <li>Usage data (for example call minutes used, cost tracking, and session timing)</li>
            </ul>
            <p className="font-medium text-[#1B1B1A]">
              Important: We do not record calls (no audio recordings).
            </p>

            <h3 className="font-semibold text-[#1B1B1A] mt-6 mb-2">
              Website information
            </h3>
            <p>
              If we use analytics on our website, we may collect information about how the
              site is used (for example, pages viewed and device/browser information). See
              our{" "}
              <Link to="/cookies" className="text-[#C06040] hover:text-accent-green underline">
                Cookie Policy
              </Link>{" "}
              for details.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              2) How we use personal information (and our lawful bases)
            </h2>
            <p>
              <strong className="text-[#1B1B1A]">A) Provide Chattabox and support users</strong>
              <br />
              Set up accounts and call schedules, place and manage calls, and provide customer support. Lawful basis: performance of a contract (or steps taken at your request before entering a contract).
            </p>
            <p>
              <strong className="text-[#1B1B1A]">B) Create family-friendly updates (without sharing transcripts)</strong>
              <br />
              Families may receive high-level updates such as general topics discussed and sentiment (for example upbeat/neutral/low). Families do not get access to full transcripts, and we do not share word-for-word call content with families. Lawful basis: performance of a contract and/or legitimate interests (providing peace of mind and improving support around the older adult).
            </p>
            <p>
              <strong className="text-[#1B1B1A]">C) Analytics to improve the service</strong>
              <br />
              We use transcripts and service data to run service quality and reliability checks, understand how conversations are going in aggregate, and improve prompts and responses so the experience feels helpful and natural. Lawful basis: legitimate interests (running, maintaining and improving Chattabox).
            </p>
            <p>
              <strong className="text-[#1B1B1A]">D) Safety, fraud prevention and legal compliance</strong>
              <br />
              Protecting Chattabox against misuse and responding to lawful requests from regulators or law enforcement. Lawful basis: legitimate interests and/or legal obligation.
            </p>
            <p>
              <strong className="text-[#1B1B1A]">E) AI-powered insights and personalisation</strong>
              <br />
              We use conversation transcripts to generate memories, personality profiles, wellbeing trends, and daily summaries. These help the AI companion become more personal over time and provide family members with high-level insights. Lawful basis: legitimate interests (improving the service and providing value to families) and, for wellbeing/health-adjacent data, explicit consent obtained during onboarding.
            </p>
            <p>
              <strong className="text-[#1B1B1A]">F) Billing and payments</strong>
              <br />
              We process payments through Stripe to manage subscriptions. We do not store payment card details — these are handled by Stripe as a PCI-compliant processor. Lawful basis: performance of a contract.
            </p>
            <p>
              <strong className="text-[#1B1B1A]">G) Account management and security</strong>
              <br />
              Email verification, password resets, and session/account management. Lawful basis: performance of a contract and legitimate interests.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              3) Sensitive information
            </h2>
            <p>
              Our service may process information that touches on health and wellbeing. For example, our AI generates mood trends and wellbeing insights from conversations. We obtain consent for this processing during account setup. We apply additional safeguards including restricted access, encryption in transit and at rest, and data minimisation.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              4) Who we share information with
            </h2>
            <p>
              We share personal information only with trusted suppliers who help us run Chattabox, for example:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hosting and database providers (to store service data)</li>
              <li>Telephony providers (to place calls)</li>
              <li>AI/voice processing providers (to generate responses and produce high-level summaries/sentiment)</li>
              <li>Email providers (to send service emails)</li>
              <li>Payment processors (Stripe — to process subscription payments; Stripe is PCI-DSS compliant)</li>
            </ul>
            <p>
              We require suppliers to protect personal information and to use it only to provide services to us.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              5) International transfers
            </h2>
            <p>
              Some suppliers may process or store data outside the UK. Where this happens, we use appropriate safeguards designed to protect your information (for example, recognised contractual protections).
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              6) How long we keep information
            </h2>
            <p>
              We keep personal information only as long as needed for the purposes in this notice and to meet legal and regulatory obligations.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#8A857E]">
                    <th className="text-left py-2 pr-4 font-semibold text-[#1B1B1A]">Data type</th>
                    <th className="text-left py-2 font-semibold text-[#1B1B1A]">Retention</th>
                  </tr>
                </thead>
                <tbody className="text-[#5F5B55]">
                  <tr className="border-b border-[#C8C4BE]">
                    <td className="py-2 pr-4">Account and profile data</td>
                    <td className="py-2">While account is active + 12 months after closure</td>
                  </tr>
                  <tr className="border-b border-[#C8C4BE]">
                    <td className="py-2 pr-4">Conversation transcripts</td>
                    <td className="py-2">While account is active, then deleted on account closure</td>
                  </tr>
                  <tr className="border-b border-[#C8C4BE]">
                    <td className="py-2 pr-4">AI memories and personality data</td>
                    <td className="py-2">While account is active, then deleted on account closure</td>
                  </tr>
                  <tr className="border-b border-[#C8C4BE]">
                    <td className="py-2 pr-4">Billing records</td>
                    <td className="py-2">6 years after last transaction (UK tax/legal requirements)</td>
                  </tr>
                  <tr className="border-b border-[#C8C4BE]">
                    <td className="py-2 pr-4">Consent records</td>
                    <td className="py-2">6 years after acceptance (to demonstrate compliance)</td>
                  </tr>
                  <tr className="border-b border-[#C8C4BE]">
                    <td className="py-2 pr-4">Daily summaries and insights</td>
                    <td className="py-2">While account is active, then deleted on account closure</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              7) Security
            </h2>
            <p>
              All data is encrypted in transit (TLS 1.2+) and at rest. Access to client data is controlled through role-based access policies. Administrative actions are logged in an audit trail.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              8) Your rights
            </h2>
            <p>
              You have rights over your personal information, including the right to access, correct inaccurate information, ask us to delete information (in some situations), object to or restrict certain processing, receive certain information in a portable format (in some situations), and withdraw consent where we rely on consent.
            </p>
            <p>
              You can exercise your right to data portability and erasure through the Chattabox App (Settings &gt; Data Management) or by contacting{" "}
              <a
                href="mailto:privacy@chattabox.io"
                className="text-[#C06040] hover:text-accent-green underline"
              >
                privacy@chattabox.io
              </a>
              . Data exports are provided in machine-readable JSON format.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              9) Automated decision-making
            </h2>
            <p>
              Chattabox uses AI to generate conversation summaries, mood assessments, personality profiles, and wellbeing insights. These are provided for informational purposes only and are not used to make decisions that have a legal or similarly significant effect on you. You can contact us if you have questions about how these work.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              10) Complaints
            </h2>
            <p>
              If you have concerns, please contact us first and we will do our best to resolve them. You also have the right to complain to the UK Information Commissioner's Office (ICO).
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              11) Children
            </h2>
            <p>
              Chattabox is designed for adults and is not intended for children under 18.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              12) Cookies
            </h2>
            <p>
              For information about cookies and similar technologies, see our{" "}
              <Link to="/cookies" className="text-[#C06040] hover:text-accent-green underline">
                Cookie Policy
              </Link>
              .
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              13) Changes to this notice
            </h2>
            <p>
              We may update this Privacy Notice from time to time. We will post the latest version on our website and update the effective date above.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
