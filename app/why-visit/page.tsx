import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Star, MapPin, Coffee, Sparkles, Heart } from "lucide-react";
import { BUSINESS, REVIEWS } from "@/lib/data/business";
import { IMAGES } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Why Visit Us | Bruschetta by Food Cabaret Leeds",
  description:
    "Discover why visitors love Bruschetta by Food Cabaret: distinctive global flavours, specialty coffee, and a welcoming café setting inside Leeds Corn Exchange.",
};

export default function WhyVisitPage() {
  return (
    <div className="bg-[#F8F5EF] space-y-0">
      {/* ============================================================
          SECTION 1: HERO
          ============================================================ */}
      <section className="py-16 lg:py-24 border-b border-[#E7E0D6] bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 bg-[#E9DDCA] text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full">
              Why Choose Bruschetta
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#211C19] leading-tight">
              Make Room for a <br />
              <span className="italic text-[#B89A59]">Better Coffee Break.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#716B63] leading-relaxed max-w-2xl">
              Discover specialty coffee, distinctive pastries and satisfying brunch in the characterful surroundings of Leeds Corn Exchange.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: DISTINCTIVE MENU BEYOND THE ORDINARY
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
              The Menu Advantage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#211C19]">
              More Than Generic Café Fare.
            </h2>
            <p className="text-sm text-[#716B63] leading-relaxed">
              Leeds has many coffee spots, but Bruschetta is defined by its unexpected culinary range.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E7E0D6] space-y-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={IMAGES.pistachioCroissantPlated.src}
                  alt={IMAGES.pistachioCroissantPlated.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#211C19]">Pistachio Pastries</h3>
              <p className="text-xs text-[#716B63] leading-relaxed">
                Handmade pistachio paste inside warmed croissants, finished with local Yorkshire honey and crushed pistachios.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E7E0D6] space-y-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={IMAGES.laHaineHotdog.src}
                  alt={IMAGES.laHaineHotdog.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#211C19]">Algerian &amp; Mediterranean Plates</h3>
              <p className="text-xs text-[#716B63] leading-relaxed">
                Traditional m&apos;hajeb crêpes, Tunisian chakchouka, lamb merguez in brioche, and harissa spiced beans on toast.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E7E0D6] space-y-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={IMAGES.twoCoffeesArt.src}
                  alt={IMAGES.twoCoffeesArt.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#211C19]">Specialty Bar Drinks</h3>
              <p className="text-xs text-[#716B63] leading-relaxed">
                Carefully pulled double shots, Spanish lattes, matcha, rich Parisian hot chocolates, and freshly made fruit smoothies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: A PLACE TO PAUSE
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-[#211C19] text-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
                Atmosphere &amp; Light
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#F8F5EF]">
                A Calm Respite in the Heart of Leeds.
              </h2>
              <p className="text-sm sm:text-base text-[#E9DDCA]/80 leading-relaxed">
                Positioned on the main concourse of Leeds Corn Exchange, our tables offer a front-row seat to one of Yorkshire&apos;s architectural marvels. Natural light streams down through the grand glazed ceiling, creating an open, unhurried space whether you are catching up with friends or taking a quiet break alone.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#B89A59] text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#E9DDCA] transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-[#211C19]" />
                  <span>Plan Your Visit</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#302C29]">
                <Image
                  src={IMAGES.cornExchangeBar.src}
                  alt={IMAGES.cornExchangeBar.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: REAL CUSTOMER EXPERIENCES
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
              Guest Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#211C19]">
              What Visitors Say.
            </h2>
            <p className="text-sm text-[#716B63]">
              Verifiable testimonials from our third-party public listing on {REVIEWS.source}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.items.map((r) => (
              <div
                key={r.id}
                className="bg-white p-6 rounded-2xl border border-[#E7E0D6] shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center text-[#B89A59]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#302C29] leading-relaxed italic">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E7E0D6]/60 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#211C19]">{r.name}</span>
                  <span className="text-[#716B63] text-[11px]">{REVIEWS.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: EASY TO FIND
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
                Central Leeds Location
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#211C19]">
                Effortless to Reach.
              </h2>
              <p className="text-sm sm:text-base text-[#716B63] leading-relaxed">
                Located right in Leeds city centre, Leeds Corn Exchange is just a short 7-minute walk from Leeds Railway Station, close to Leeds Kirkgate Market and Call Lane. Walk in through the main entrances and find us right on The Concourse.
              </p>
              <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E7E0D6] space-y-1 text-xs">
                <p className="font-semibold text-[#211C19]">{BUSINESS.address.full}</p>
                <p className="text-[#716B63]">No bookings required &bull; Walk-ins warmly welcomed</p>
              </div>
              <div className="pt-2">
                <a
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#211C19] text-[#F8F5EF] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#B89A59] hover:text-[#211C19] transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-[#B89A59]" />
                  <span>Open Directions in Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={IMAGES.cornExchangeGuests.src}
                  alt={IMAGES.cornExchangeGuests.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: FINAL CTA
          ============================================================ */}
      <section className="py-20 bg-[#E9DDCA]/40 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#211C19]">
            See What You Think.
          </h2>
          <p className="text-base text-[#716B63] max-w-xl mx-auto">
            Take a look at the menu, find your way to Leeds Corn Exchange, and discover Bruschetta for yourself.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#211C19] text-[#F8F5EF] hover:bg-[#B89A59] hover:text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
            >
              <span>View the Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#211C19] text-[#211C19] hover:bg-[#E9DDCA] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
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
