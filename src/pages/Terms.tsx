import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalNav } from "@/components/layout/LegalNav";
import { ChevronLeft } from "lucide-react";

export function Terms() {
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
            Terms of Service (Chattabox)
          </h1>
          <p className="text-sm text-[#8A857E] mb-10">
            Effective date: 21 February 2026
            <br />
            Last updated: 21 February 2026
          </p>

          <div className="prose prose-neutral max-w-none text-[#5F5B55] space-y-6">
            <p>
              These Terms of Service ("Terms") govern your use of the Chattabox website and service (together, the "Service"). By using the Service, you agree to these Terms.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              1) Who we are
            </h2>
            <p>
              The Service is operated by SN PARTNERS LIMITED (trading as Chattabox).
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
              2) What Chattabox is (and isn't)
            </h2>
            <p>
              Chattabox provides friendly phone conversations for older adults and optional high-level updates for family members. Chattabox also includes a web-based dashboard (the "App") for family members/account holders to manage the service, view insights, configure interactions, and handle billing.
            </p>
            <p className="font-medium text-[#1B1B1A] mt-4">
              Chattabox is not:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>an emergency service</li>
              <li>a medical or clinical service</li>
              <li>a substitute for professional care</li>
            </ul>
            <p className="mt-4">
              If you believe someone is at immediate risk, call emergency services.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              3) Who can use the Service
            </h2>
            <p>The Service is intended for adults (18+).</p>
            <p>
              The family account holder must ensure they have the older adult's permission to set up Chattabox for them and to receive any updates.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              4) Accounts and setup
            </h2>
            <p>You may need an account to use parts of the Service. You agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>provide accurate information</li>
              <li>keep login details secure</li>
              <li>notify us if you suspect unauthorised access</li>
            </ul>
            <p>
              During setup, you will be asked to accept our Terms of Service and Privacy Notice. Your acceptance is recorded.
            </p>
            <p>
              Account holders are responsible for ensuring they have appropriate authority to provide personal information about the older adult, including details such as hobbies, family members, and daily routines.
            </p>
            <p>
              Account holders may invite additional family members as carers, granting them access to insights and updates.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              5) AI-Generated Content
            </h2>
            <p>
              Chattabox uses AI to generate conversation responses, memories, personality assessments, mood insights, and daily summaries. This content is generated automatically and may not always be accurate. It is provided for informational and companionship purposes only. You should not rely on AI-generated insights for medical, legal, or emergency decisions.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              6) Family updates
            </h2>
            <p>
              Chattabox may provide family members with high-level updates such as topics discussed and sentiment (for example upbeat/neutral/low). We do not share full call transcripts with family members via the Service.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              7) Calls, transcripts and privacy
            </h2>
            <p>We do not record calls (no audio recordings).</p>
            <p>
              We may create and store transcripts of calls to operate the Service and to generate analytics and quality improvements.
            </p>
            <p>
              Transcripts are accessible only through protected internal/admin access and are not shared with families through the Service.
            </p>
            <p>
              For more information, see our{" "}
              <Link
                to="/privacy"
                className="text-[#C06040] hover:text-accent-green underline"
              >
                Privacy Notice
              </Link>
              .
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              8) Acceptable use
            </h2>
            <p>
              You must not misuse the Service. For example, you must not:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>use the Service for illegal, harmful, or abusive purposes</li>
              <li>attempt to interfere with the Service or access it without permission</li>
              <li>upload or share content that is offensive, harassing, or infringes someone else's rights</li>
              <li>attempt to reverse engineer or scrape the Service (except as permitted by law)</li>
            </ul>
            <p>
              We may suspend or terminate access if we reasonably believe you have breached these Terms.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              9) Availability and changes
            </h2>
            <p>
              We aim to provide a reliable Service, but we do not guarantee uninterrupted availability. From time to time we may change features, pause or withdraw the Service (including for maintenance), or introduce new requirements or limits. We will try to give reasonable notice where practical.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              10) Intellectual property
            </h2>
            <p>
              We own (or license) all rights in the Service, including the website, branding, and underlying software. You may use the Service for your personal, non-commercial use only (unless we agree otherwise in writing).
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              11) Feedback
            </h2>
            <p>
              If you provide feedback or suggestions, you allow us to use them to improve Chattabox without compensation or restriction.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              12) Payments
            </h2>
            <p>
              Chattabox offers subscription plans with different call minute allowances. Payments are processed securely through Stripe. You can manage your subscription, view billing history, and update your plan through the App.
            </p>
            <p>
              <strong className="text-[#1B1B1A]">Refund and cancellation policies:</strong> you may cancel your subscription at any time; access continues until the end of the current billing period. We do not offer pro-rata refunds for partial months.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              13) Limitation of liability
            </h2>
            <p>
              Nothing in these Terms limits or excludes our liability where it would be unlawful to do so (including for fraud, or for death or personal injury caused by negligence).
            </p>
            <p className="mt-4">
              <strong className="text-[#1B1B1A]">Subject to that:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The Service is provided on an "as is" basis.</li>
              <li>We are not responsible for losses caused by events outside our reasonable control.</li>
              <li>To the extent permitted by law, we are not liable for indirect or consequential losses (such as loss of profits, loss of business, or loss of data).</li>
              <li>We are not liable for decisions you make based on summaries or sentiment updates. Chattabox is designed to support connection and peace of mind, not to provide professional judgement.</li>
            </ul>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              14) Termination
            </h2>
            <p>
              You can stop using the Service at any time. We may suspend or terminate your access if you breach these Terms, if we need to do so to protect the Service or other users, or if we withdraw the Service.
            </p>
            <p>
              When an account is terminated, we will delete or anonymise client data in accordance with our{" "}
              <Link
                to="/privacy"
                className="text-[#C06040] hover:text-accent-green underline"
              >
                Privacy Notice
              </Link>
              . You may request a data export before account closure.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              15) Data Management
            </h2>
            <p>
              Account holders can request deletion of a specific client's data or export of all data associated with a client through the App or by contacting us. See our{" "}
              <Link
                to="/privacy"
                className="text-[#C06040] hover:text-accent-green underline"
              >
                Privacy Notice
              </Link>{" "}
              for details on data retention and your rights.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              16) Governing law
            </h2>
            <p>
              These Terms are governed by the laws of England and Wales, and the courts of England and Wales will have exclusive jurisdiction, except where consumer protection laws in your country of residence apply.
            </p>

            <h2 className="font-serif text-xl text-[#1B1B1A] mt-8 mb-2">
              17) Changes to these Terms
            </h2>
            <p>
              We may update these Terms from time to time. We will post the latest version on our website and update the effective date above. If changes are material, we will take reasonable steps to notify you.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
