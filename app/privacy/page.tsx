import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Privacy Information | Bruschetta by Food Cabaret Leeds",
  description:
    "Privacy and data protection information for the Bruschetta by Food Cabaret website concept.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
            Legal &amp; Transparency
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#211C19] mt-2">
            Privacy Information
          </h1>
          <p className="text-sm text-[#716B63] mt-2">
            Last updated: October 2026 &bull; Bruschetta by Food Cabaret Website Concept
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E7E0D6] space-y-6 text-sm text-[#716B63] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-medium text-[#211C19]">
              1. Website Concept Status
            </h2>
            <p>
              This website is a bespoke concept demonstration crafted for Bruschetta by Food Cabaret, located in Leeds Corn Exchange, Leeds, United Kingdom. It is designed to showcase an editorial, conversion-focused online presence for the business.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-medium text-[#211C19]">
              2. Data Collection &amp; Cookies
            </h2>
            <p>
              This demonstration website does not collect personal information, does not deploy tracking cookies or third-party advertising pixels, and does not operate user accounts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-medium text-[#211C19]">
              3. External Links &amp; Third-Party Services
            </h2>
            <p>
              This website includes links to external third-party platforms for the convenience of visitors:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>
                <strong>Official Online Ordering:</strong> Links to {BUSINESS.orderingUrl}. Any transaction performed through that system is governed by Food Cabaret&apos;s respective privacy policy and terms.
              </li>
              <li>
                <strong>Mapping &amp; Directions:</strong> Links to Google Maps for finding directions to Leeds Corn Exchange.
              </li>
              <li>
                <strong>Social Media:</strong> Links to official Instagram and Facebook pages.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-medium text-[#211C19]">
              4. Contact Inquiries
            </h2>
            <p>
              If you email {BUSINESS.email}, your email address and message content will only be used to reply to your inquiry.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-medium text-[#211C19]">
              5. Content Verification
            </h2>
            <p>
              Opening hours, customer reviews, and ingredient terms are presented as reference data and require confirmation from the business owner prior to official production launch.
            </p>
          </section>

          <div className="pt-6 border-t border-[#E7E0D6] flex justify-between items-center text-xs">
            <Link href="/" className="font-semibold text-[#211C19] hover:text-[#B89A59]">
              &larr; Back to Homepage
            </Link>
            <Link href="/contact" className="font-semibold text-[#211C19] hover:text-[#B89A59]">
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
