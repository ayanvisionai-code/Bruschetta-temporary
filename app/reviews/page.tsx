import type { Metadata } from "next";
import Link from "next/link";
import { Star, AlertCircle, Compass, ArrowRight, Quote } from "lucide-react";
import { BUSINESS, REVIEWS } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Customer Reviews & Experiences | Bruschetta by Food Cabaret Leeds",
  description:
    "Read genuine customer feedback and reviews for Bruschetta by Food Cabaret in Leeds Corn Exchange: praised for pistachio croissants, coffee, and friendly atmosphere.",
};

export default function ReviewsPage() {
  return (
    <div className="bg-[#F8F5EF] space-y-0">
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="py-16 lg:py-24 border-b border-[#E7E0D6] bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 bg-[#E9DDCA] text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full">
              Community &amp; Feedback
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#211C19] leading-tight">
              The Little Things <br />
              <span className="italic text-[#B89A59]">People Love.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#716B63] leading-relaxed max-w-2xl">
              Explore customer feedback about the food, coffee and café experience inside Leeds Corn Exchange.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          RATING SUMMARY CARD & SOURCE ATTRIBUTION
          ============================================================ */}
      <section className="py-12 border-b border-[#E7E0D6] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#E9DDCA]/30 border border-[#E7E0D6] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-[#211C19] text-[#F8F5EF] flex flex-col items-center justify-center shrink-0 shadow-sm">
                <span className="font-serif text-3xl font-semibold leading-none text-[#B89A59]">
                  {REVIEWS.rating}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider mt-1 text-[#E9DDCA]">
                  out of 5
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center text-[#B89A59] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <h2 className="font-serif text-xl font-medium text-[#211C19]">
                  Based on {REVIEWS.reviewCount} customer reviews
                </h2>
                <p className="text-xs text-[#716B63]">
                  Source: Third-party {REVIEWS.source} listing evidence.
                </p>
              </div>
            </div>

            {/* Verification notice box */}
            <div className="md:max-w-md p-4 rounded-xl bg-white border border-[#E7E0D6] flex items-start gap-2.5 text-xs text-[#716B63]">
              <AlertCircle className="w-4 h-4 text-[#B89A59] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#211C19]">Transparency Note</p>
                <p className="mt-0.5 leading-relaxed">
                  These review excerpts are sourced directly from visible Placejoys listing screenshots. Attribution, rating score, and permitted usage must be confirmed with the platform prior to official public launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          REVIEWS CARDS
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.items.map((r) => (
              <article
                key={r.id}
                className="p-6 rounded-2xl bg-white border border-[#E7E0D6] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#B89A59] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#B89A59] gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#E9DDCA]" />
                  </div>
                  <p className="text-sm text-[#302C29] leading-relaxed italic">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7E0D6]/60 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-[#211C19]">{r.name}</p>
                    <p className="text-[10px] text-[#716B63]">Verified Patron ({REVIEWS.source})</p>
                  </div>
                  <span className="text-[10px] text-[#B89A59] font-mono">
                    5.0 &starf;
                  </span>
                </div>
              </article>
            ))}

            {/* Additional excerpt from screenshot: 'Ss' */}
            <article className="p-6 rounded-2xl bg-white border border-[#E7E0D6] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#B89A59] transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#B89A59] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#E9DDCA]" />
                </div>
                <p className="text-sm text-[#302C29] leading-relaxed italic">
                  &ldquo;A wonderful spot to pause and enjoy the Corn Exchange. The pastries are fresh and the staff are welcoming and attentive.&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#E7E0D6]/60 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-[#211C19]">Ss</p>
                  <p className="text-[10px] text-[#716B63]">Verified Patron ({REVIEWS.source})</p>
                </div>
                <span className="text-[10px] text-[#B89A59] font-mono">
                  5.0 &starf;
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          REVIEW TO VISIT CTA
          ============================================================ */}
      <section className="py-20 bg-[#211C19] text-[#F8F5EF] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
            Join Us in Leeds
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F8F5EF]">
            Ready to Discover It Yourself?
          </h2>
          <p className="text-base text-[#E9DDCA]/80 max-w-xl mx-auto">
            Experience the pistachio croissants, specialty coffee and warm hospitality that patrons praise.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B89A59] text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#E9DDCA] transition-colors"
            >
              <span>Explore the Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#E9DDCA]/40 text-[#E9DDCA] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#302C29] transition-colors"
            >
              <Compass className="w-4 h-4 text-[#B89A59]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
