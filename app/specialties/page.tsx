import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, Star, Coffee, Utensils } from "lucide-react";
import { BUSINESS } from "@/lib/data/business";
import { IMAGES } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Our Signature Specialties | Bruschetta by Food Cabaret Leeds",
  description:
    "Discover the signature pistachio croissants, Algerian m'hajeb crêpes, Tunisian chakchouka, specialty flat whites and vibrant brunch at Bruschetta inside Leeds Corn Exchange.",
};

export default function SpecialtiesPage() {
  return (
    <div className="bg-[#F8F5EF] space-y-0">
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="py-16 lg:py-24 border-b border-[#E7E0D6] bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 bg-[#E9DDCA] text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full">
              House Signatures
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#211C19] leading-tight">
              Meet Your Next <br />
              <span className="italic text-[#B89A59]">Favourite.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#716B63] leading-relaxed max-w-2xl">
              From pistachio-filled pastries and beautifully made coffee to globally inspired brunch, explore a few of the flavours that make Bruschetta distinctive.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURE 1: PISTACHIO CROISSANT
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={IMAGES.pistachioCroissantPlated.src}
                  alt={IMAGES.pistachioCroissantPlated.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#69735A]/15 text-[#69735A] rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Vegetarian (V) &bull; Customer Favourite</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#211C19]">
                The Pistachio Croissant
              </h2>
              <p className="text-sm sm:text-base text-[#716B63] leading-relaxed">
                A warmed, golden all-butter croissant generously filled with homemade pistachio paste, finished with a gentle drizzle of Yorkshire honey, pistachio coulis and roasted crushed pistachios. Crisp, flaky pastry balances the rich, nutty richness inside.
              </p>
              <div className="pt-2">
                <Link
                  href="/menu#croissant-erie"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#211C19] text-[#F8F5EF] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#B89A59] hover:text-[#211C19] transition-colors"
                >
                  <span>Find It on the Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURE 2: BREAKFAST & BRUNCH ARTISTRY
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
                Brunch &amp; Savoury Grills
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#211C19]">
                Croque-Madame &amp; Morning Plates
              </h2>
              <p className="text-sm sm:text-base text-[#716B63] leading-relaxed">
                Brunch at Bruschetta balances decadence and freshness. Pan-fried buttered brioche topped with smoky beef, Emmental cheese, rocket, a blowtorched Marmite béchamel and a golden fried egg. Or indulge in our classic Pain Perdu French toast served with dulce de leche and Yorkshire butter.
              </p>
              <div className="pt-2">
                <Link
                  href="/menu#croque"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#211C19] text-[#F8F5EF] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#B89A59] hover:text-[#211C19] transition-colors"
                >
                  <span>View Brunch Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={IMAGES.croqueMadame.src}
                  alt={IMAGES.croqueMadame.alt}
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
          FEATURE 3: GLOBAL FLAVOURS (North Africa & Mediterranean)
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={IMAGES.laHaineHotdog.src}
                  alt={IMAGES.laHaineHotdog.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
                Originals &amp; Moreish Crêpes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#211C19]">
                La Haine &amp; Algerian M&apos;hajeb
              </h2>
              <p className="text-sm sm:text-base text-[#716B63] leading-relaxed">
                Experience dishes rarely found on high-street menus: La Haine, our warm brioche bun filled with homemade lamb merguez, caramelised onions, harissa coulis and &apos;ayo&apos;; Loubia, our low-and-slow braised harissa cannellini beans; and traditional Algerian m&apos;hajeb crêpes filled with spiced tomatoes, spinach or Palestinian cheese.
              </p>
              <div className="pt-2">
                <Link
                  href="/menu#originals"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#211C19] text-[#F8F5EF] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#B89A59] hover:text-[#211C19] transition-colors"
                >
                  <span>Explore Originals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURE 4: COFFEE & DRINKS RITUALS
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-[#211C19] text-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
                The Beverage Bar
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F8F5EF]">
                Espresso, Matcha &amp; Cold Press.
              </h2>
              <p className="text-sm sm:text-base text-[#E9DDCA]/80 leading-relaxed">
                Whether you order a silky Flat White (£3.10), an indulgent Spanish Latte (£4.20) with condensed milk, or stone-ground Matcha (£4.50), every drink is prepared with precision and care.
              </p>
              <div className="pt-2">
                <Link
                  href="/menu#hot-drinks"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#B89A59] text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#E9DDCA] transition-colors"
                >
                  <span>View All Drinks &amp; Smoothies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-[#302C29]">
                <Image
                  src={IMAGES.twoCoffeesArt.src}
                  alt={IMAGES.twoCoffeesArt.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-[#302C29]">
                <Image
                  src={IMAGES.freshSmoothies.src}
                  alt={IMAGES.freshSmoothies.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURE 5: CURATED GALLERY
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
              Atmosphere &amp; Plates
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#211C19]">
              Moments from the Café.
            </h2>
            <p className="text-sm text-[#716B63]">
              Authentic photography from our daily service inside Leeds Corn Exchange.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-[#E7E0D6]">
              <Image
                src={IMAGES.croissantHotChocDip.src}
                alt={IMAGES.croissantHotChocDip.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-[#E7E0D6]">
              <Image
                src={IMAGES.frenchToastChocolat.src}
                alt={IMAGES.frenchToastChocolat.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-[#E7E0D6]">
              <Image
                src={IMAGES.strawberryScone.src}
                alt={IMAGES.strawberryScone.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-[#E7E0D6]">
              <Image
                src={IMAGES.hotChocStirring.src}
                alt={IMAGES.hotChocStirring.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className="py-20 bg-[#E9DDCA]/40 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#211C19]">
            There Is More on the Menu.
          </h2>
          <p className="text-base text-[#716B63] max-w-xl mx-auto">
            View all 15 categories, dietary indicators, and drinks prices in our complete menu.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#211C19] text-[#F8F5EF] hover:bg-[#B89A59] hover:text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
            >
              <span>Explore the Full Menu</span>
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
