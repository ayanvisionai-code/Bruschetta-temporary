import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Mail,
  ExternalLink,
  Compass,
  AlertCircle,
  HelpCircle,
  Info,
} from "lucide-react";
import { BUSINESS, OPENING_HOURS, HOURS_VERIFICATION_NOTE } from "@/lib/data/business";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Location, Hours & Contact | Bruschetta by Food Cabaret Leeds",
  description:
    "Find Bruschetta by Food Cabaret inside Leeds Corn Exchange. View our address, reference opening hours, directions link, online ordering, and FAQs.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "Where is Bruschetta located?",
      a: "We are located on The Concourse inside the historic Leeds Corn Exchange, Call Lane, Leeds LS1 7BR, United Kingdom. Enter through any of the main doors and you will find our coffee bar and seating area on the main floor.",
    },
    {
      q: "What kind of food and drinks do you serve?",
      a: "We serve specialty coffee, loose-leaf teas, matcha, fresh smoothies, cold drinks, artisanal pastries (including our signature pistachio croissants), brioche French toast, Algerian m'hajeb crêpes, Tunisian chakchouka, and savoury bruschettas.",
    },
    {
      q: "Where can I view the full menu?",
      a: "You can view our complete digital menu on our website at /menu, which details all 15 categories, descriptions, drink prices, and dietary markers.",
    },
    {
      q: "How can I get directions to the café?",
      a: "Leeds Corn Exchange is a 7-minute walk from Leeds Railway Station, close to Leeds Kirkgate Market. You can tap the 'Open in Google Maps' button on this page to get walking, driving, or public transport directions directly to our doors.",
    },
    {
      q: "Where can I find Bruschetta online?",
      a: "You can follow our daily updates and photos on Instagram (@bruschetta_leeds), find our Facebook page (Bruschetta by Food Cabaret), visit our umbrella site at foodcabaret.com, and order online through our official platform.",
    },
    {
      q: "How can I ask about allergens or dietary requirements?",
      a: "Please speak directly to our café staff at the counter before placing your order, or email us at foodcabaret@gmail.com in advance. We provide vegetarian (V) and vegan (Ve) indicators on our menu as supplied, but please always confirm ingredients if you have an allergy.",
    },
    {
      q: "How can I check current opening hours?",
      a: "Our reference opening hours are displayed on this page. As hours may vary on bank holidays or during special events at Leeds Corn Exchange, please contact us at foodcabaret@gmail.com or check our Instagram before your visit if you need up-to-the-minute confirmation.",
    },
    {
      q: "Do you take table reservations?",
      a: "Bruschetta operates on a relaxed walk-in basis with seating on the open Corn Exchange concourse. For any special enquiries or group visits, please email foodcabaret@gmail.com.",
    },
  ];

  return (
    <div className="bg-[#F8F5EF] space-y-0">
      {/* ============================================================
          SECTION 1: HERO
          ============================================================ */}
      <section className="py-16 lg:py-24 border-b border-[#E7E0D6] bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 bg-[#E9DDCA] text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full">
              Location &bull; Opening Times &bull; Inquiries
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#211C19] leading-tight">
              Come Find Us <br />
              <span className="italic text-[#B89A59]">in Leeds.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#716B63] leading-relaxed max-w-2xl">
              Bruschetta by Food Cabaret is located inside Leeds Corn Exchange, ready for your next coffee break or brunch.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 & 3 & 4: DETAILS, HOURS, MAPS & ORDERING
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Address & Contact */}
            <div className="lg:col-span-6 space-y-8">
              {/* Address Card */}
              <div className="p-8 rounded-2xl bg-[#F8F5EF] border border-[#E7E0D6] space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase font-semibold text-[#B89A59] tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Location</span>
                </div>
                <h2 className="font-serif text-2xl font-medium text-[#211C19]">
                  {BUSINESS.name}
                </h2>
                <div className="text-sm text-[#302C29] space-y-1">
                  <p>{BUSINESS.address.line1}</p>
                  <p>{BUSINESS.address.line2}</p>
                  <p>{BUSINESS.address.city}</p>
                  <p className="font-semibold">{BUSINESS.address.postcode}</p>
                  <p>{BUSINESS.address.country}</p>
                </div>
                <div className="pt-2">
                  <a
                    href={BUSINESS.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#211C19] text-[#F8F5EF] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#B89A59] hover:text-[#211C19] transition-colors"
                  >
                    <Compass className="w-4 h-4 text-[#B89A59]" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Contact & Social Links */}
              <div className="p-8 rounded-2xl bg-[#F8F5EF] border border-[#E7E0D6] space-y-4">
                <h3 className="font-serif text-xl font-medium text-[#211C19]">
                  Digital Contact &amp; Channels
                </h3>
                <div className="space-y-3 text-sm text-[#302C29]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#B89A59]" />
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="hover:text-[#B89A59] underline transition-colors"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-4 h-4 text-[#B89A59]" />
                    <a
                      href={BUSINESS.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B89A59] underline transition-colors"
                    >
                      foodcabaret.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <InstagramIcon className="w-4 h-4 text-[#B89A59]" />
                    <a
                      href={BUSINESS.social.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B89A59] underline transition-colors"
                    >
                      {BUSINESS.social.instagram.handle} (Instagram)
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FacebookIcon className="w-4 h-4 text-[#B89A59]" />
                    <a
                      href={BUSINESS.social.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B89A59] underline transition-colors"
                    >
                      {BUSINESS.social.facebook.name} (Facebook)
                    </a>
                  </div>
                </div>

                {/* Online Ordering CTA */}
                <div className="pt-4 border-t border-[#E7E0D6]">
                  <p className="text-xs text-[#716B63] mb-2 font-medium">Official Online Ordering:</p>
                  <a
                    href={BUSINESS.orderingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B89A59] text-[#211C19] text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-[#E9DDCA] transition-colors"
                  >
                    <span>Visit Online Ordering Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Opening Hours Schedule & Verification Warning */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-2xl bg-[#211C19] text-[#F8F5EF] border border-[#302C29] space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#B89A59]" />
                    <h2 className="font-serif text-2xl font-medium text-[#F8F5EF]">
                      Opening Hours Schedule
                    </h2>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded bg-[#302C29] text-[#E9DDCA]">
                    UK Time (Europe/London)
                  </span>
                </div>

                <div className="divide-y divide-[#302C29] text-sm">
                  {OPENING_HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="py-3 flex items-center justify-between"
                    >
                      <span className="font-medium text-[#E9DDCA]">{h.day}</span>
                      <span className="font-mono text-[#F8F5EF]">{h.open} &ndash; {h.close}</span>
                    </div>
                  ))}
                </div>

                {/* Mandatory Pre-publication Verification Warning */}
                <div className="p-4 rounded-xl bg-[#302C29]/80 border border-[#B89A59]/40 flex items-start gap-3 text-xs text-[#E9DDCA]">
                  <AlertCircle className="w-4 h-4 text-[#B89A59] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-[#F8F5EF]">Verification Required Before Public Launch</p>
                    <p className="text-[11px] leading-relaxed text-[#E9DDCA]/80">
                      {HOURS_VERIFICATION_NOTE} These hours represent reference data from public directories. A live &ldquo;Open now&rdquo; badge is intentionally omitted to avoid misleading customers before owner verification.
                    </p>
                  </div>
                </div>
              </div>

              {/* Transit & Arrival info */}
              <div className="p-6 rounded-2xl bg-[#E9DDCA]/30 border border-[#E7E0D6] space-y-2 text-xs text-[#716B63]">
                <p className="font-semibold text-[#211C19] flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#B89A59]" />
                  <span>How to Find Us Inside the Corn Exchange</span>
                </p>
                <p className="leading-relaxed">
                  Head inside through either the Call Lane or Crown Street entrances. Follow the gentle ramp down to the main Concourse floor. Bruschetta is centrally located under the dome, surrounded by open seating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: FREQUENTLY ASKED QUESTIONS
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-[#F8F5EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#211C19]">
              Visiting Information &amp; Advice.
            </h2>
            <p className="text-sm text-[#716B63]">
              Clear answers based strictly on confirmed business details.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-[#E7E0D6] p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200"
              >
                <summary className="flex items-center justify-between cursor-pointer font-serif text-lg font-medium text-[#211C19] group-hover:text-[#B89A59]">
                  <span>{faq.q}</span>
                  <span className="ml-4 shrink-0 text-[#B89A59] text-xl font-mono group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-[#E7E0D6]/60 text-xs sm:text-sm text-[#716B63] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
