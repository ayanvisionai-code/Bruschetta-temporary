import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ArrowUpRight,
  Star,
  Coffee,
  Croissant,
  Sparkles,
  MapPin,
  ExternalLink,
  Clock,
  Heart,
  Quote,
} from "lucide-react";
import { BUSINESS, OPENING_HOURS, REVIEWS } from "@/lib/data/business";
import { IMAGES } from "@/lib/data/images";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* ============================================================
          SECTION 1: HERO (Image-Led Editorial)
          ============================================================ */}
      <section className="relative overflow-hidden bg-[#F8F5EF] pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 space-y-6 lg:pr-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9DDCA] text-[#211C19] text-xs font-semibold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#B89A59]" />
                <span>BRUSCHETTA BY FOOD CABARET &bull; LEEDS</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#211C19] leading-[1.1]">
                A Little Taste of <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#B89A59]">Somewhere Else.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#716B63] leading-relaxed max-w-xl">
                Specialty coffee, handmade pastries, vibrant brunch and globally inspired flavours, served in the heart of Leeds Corn Exchange.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#211C19] text-[#F8F5EF] hover:bg-[#B89A59] hover:text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full transition-all duration-200 shadow-sm"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#211C19] text-[#211C19] hover:bg-[#E9DDCA] text-xs font-semibold tracking-widest uppercase rounded-full transition-all duration-200"
                >
                  <MapPin className="w-4 h-4 text-[#B89A59]" />
                  <span>Find Us in Leeds</span>
                </Link>
              </div>

              {/* Small location tag */}
              <div className="pt-4 flex items-center gap-3 text-xs text-[#716B63] border-t border-[#E7E0D6]/80 max-w-md">
                <div className="w-2 h-2 rounded-full bg-[#69735A]" />
                <span>Located on the Concourse inside the historic Leeds Corn Exchange</span>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Hero Photo: Corn Exchange Bar Rotunda */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={IMAGES.cornExchangeBar.src}
                    alt={IMAGES.cornExchangeBar.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211C19]/60 via-transparent to-transparent" />
                  
                  {/* Floating Architectural Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#F8F5EF]/95 backdrop-blur-md border border-[#E7E0D6] shadow-lg">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#B89A59]">
                      Iconic Architecture &bull; Independent Café
                    </p>
                    <p className="font-serif text-lg text-[#211C19] font-medium mt-0.5">
                      Leeds Corn Exchange, Call Lane
                    </p>
                    <p className="text-xs text-[#716B63] mt-1">
                      Enjoy your coffee under Cuthbert Brodrick&apos;s breathtaking 1863 domed roof.
                    </p>
                  </div>
                </div>

                {/* Overlapping Accent Photo: Pistachio Croissant */}
                <div className="hidden sm:block absolute -bottom-8 -left-8 w-44 aspect-square rounded-xl overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={IMAGES.pistachioCroissantPlated.src}
                    alt={IMAGES.pistachioCroissantPlated.alt}
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: COMPACT TRUST & DISCOVERY STRIP
          ============================================================ */}
      <section className="bg-[#E9DDCA]/40 border-b border-[#E7E0D6] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2 p-2">
              <div className="w-10 h-10 rounded-full bg-[#E9DDCA] flex items-center justify-center text-[#211C19]">
                <Coffee className="w-5 h-5 text-[#B89A59]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#211C19]">Specialty Coffee</h3>
              <p className="text-xs text-[#716B63] max-w-[200px]">
                Carefully extracted espresso, flat whites, iced drinks &amp; matcha.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 p-2">
              <div className="w-10 h-10 rounded-full bg-[#E9DDCA] flex items-center justify-center text-[#211C19]">
                <Croissant className="w-5 h-5 text-[#B89A59]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#211C19]">Brunch &amp; Pastries</h3>
              <p className="text-xs text-[#716B63] max-w-[200px]">
                Famous pistachio croissants, French toast &amp; savoury brioche.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 p-2">
              <div className="w-10 h-10 rounded-full bg-[#E9DDCA] flex items-center justify-center text-[#211C19]">
                <Sparkles className="w-5 h-5 text-[#B89A59]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#211C19]">Global Flavours</h3>
              <p className="text-xs text-[#716B63] max-w-[200px]">
                North African, Mediterranean, French &amp; Middle Eastern inspiration.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 p-2">
              <div className="w-10 h-10 rounded-full bg-[#E9DDCA] flex items-center justify-center text-[#211C19]">
                <MapPin className="w-5 h-5 text-[#B89A59]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#211C19]">Leeds Corn Exchange</h3>
              <p className="text-xs text-[#716B63] max-w-[200px]">
                The Concourse, Call Lane &bull; Leeds LS1 7BR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: SIGNATURE DISH SHOWCASE
          ============================================================ */}
      <section className="py-20 bg-[#F8F5EF] border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold mb-2">
                Handcrafted &bull; Authentic Recipes
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#211C19]">
                A Few Things Worth Coming For.
              </h2>
            </div>
            <Link
              href="/specialties"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#211C19] hover:text-[#B89A59] transition-colors pb-1 border-b border-[#211C19]"
            >
              <span>Explore All Specialties</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Asymmetric Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Croissant Pistachio */}
            <article className="group bg-white rounded-2xl overflow-hidden border border-[#E7E0D6] shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9DDCA]/30">
                <Image
                  src={IMAGES.pistachioCroissantPlated.src}
                  alt={IMAGES.pistachioCroissantPlated.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#211C19] text-[#F8F5EF] text-[10px] font-semibold tracking-wider uppercase rounded-full">
                  House Favourite
                </span>
                <span className="absolute top-4 right-4 px-2 py-0.5 bg-[#69735A] text-[#F8F5EF] text-[10px] font-bold rounded">
                  V
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-2xl font-medium text-[#211C19]">Croissant Pistachio</h3>
                <p className="text-sm text-[#716B63] leading-relaxed">
                  Homemade pistachio paste placed inside a warmed croissant, topped with Yorkshire honey, pistachio drizzle and crushed pistachios.
                </p>
                <div className="pt-3 flex items-center justify-between text-xs">
                  <span className="text-[#716B63] italic">Category: Croissant-Erie</span>
                  <Link href="/menu#croissant-erie" className="font-semibold text-[#B89A59] hover:underline">
                    View on menu &rarr;
                  </Link>
                </div>
              </div>
            </article>

            {/* 2. Chocolat Pain Perdu */}
            <article className="group bg-white rounded-2xl overflow-hidden border border-[#E7E0D6] shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9DDCA]/30">
                <Image
                  src={IMAGES.frenchToastChocolat.src}
                  alt={IMAGES.frenchToastChocolat.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#211C19] text-[#F8F5EF] text-[10px] font-semibold tracking-wider uppercase rounded-full">
                  Pain Perdu
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-2xl font-medium text-[#211C19]">Chocolat French Toast</h3>
                <p className="text-sm text-[#716B63] leading-relaxed">
                  Warmed homemade dark chocolate sauce drizzled on top of freshly made French toast. Topped with a scoop of vanilla ice cream and chocolate shavings.
                </p>
                <div className="pt-3 flex items-center justify-between text-xs">
                  <span className="text-[#716B63] italic">Category: Pain Perdu</span>
                  <Link href="/menu#pain-perdu" className="font-semibold text-[#B89A59] hover:underline">
                    View on menu &rarr;
                  </Link>
                </div>
              </div>
            </article>

            {/* 3. La Haine (Algerian Hotdog) */}
            <article className="group bg-white rounded-2xl overflow-hidden border border-[#E7E0D6] shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9DDCA]/30">
                <Image
                  src={IMAGES.laHaineHotdog.src}
                  alt={IMAGES.laHaineHotdog.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#B89A59] text-[#211C19] text-[10px] font-semibold tracking-wider uppercase rounded-full">
                  Original
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-2xl font-medium text-[#211C19]">La Haine (Algerian Hotdog)</h3>
                <p className="text-sm text-[#716B63] leading-relaxed">
                  A warmed brioche bun filled with caramelised onions and homemade lamb merguez, topped with &apos;ayo&apos; and a harissa coulis.
                </p>
                <div className="pt-3 flex items-center justify-between text-xs">
                  <span className="text-[#716B63] italic">Category: Originals</span>
                  <Link href="/menu#originals" className="font-semibold text-[#B89A59] hover:underline">
                    View on menu &rarr;
                  </Link>
                </div>
              </div>
            </article>

            {/* 4. Croque-Madame */}
            <article className="group bg-white rounded-2xl overflow-hidden border border-[#E7E0D6] shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9DDCA]/30">
                <Image
                  src={IMAGES.croqueMadame.src}
                  alt={IMAGES.croqueMadame.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#211C19] text-[#F8F5EF] text-[10px] font-semibold tracking-wider uppercase rounded-full">
                  French Comfort
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-2xl font-medium text-[#211C19]">Croque-Madame</h3>
                <p className="text-sm text-[#716B63] leading-relaxed">
                  Pan-fried buttered brioche with smoky beef and &apos;ayo&apos;, topped with Emmental cheese, a fried egg, rocket and blowtorched béchamel sauce.
                </p>
                <div className="pt-3 flex items-center justify-between text-xs">
                  <span className="text-[#716B63] italic">Category: Croque</span>
                  <Link href="/menu#croque" className="font-semibold text-[#B89A59] hover:underline">
                    View on menu &rarr;
                  </Link>
                </div>
              </div>
            </article>

            {/* 5. La Rue Des Rosiers */}
            <article className="group bg-white rounded-2xl overflow-hidden border border-[#E7E0D6] shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9DDCA]/30">
                <Image
                  src={IMAGES.laRueDesRosiers.src}
                  alt={IMAGES.laRueDesRosiers.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#211C19] text-[#F8F5EF] text-[10px] font-semibold tracking-wider uppercase rounded-full">
                  Original Bagel
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-2xl font-medium text-[#211C19]">La Rue Des Rosiers</h3>
                <p className="text-sm text-[#716B63] leading-relaxed">
                  El buey cured beef in a toasted bagel with sliced gherkins, fresh rocket and &apos;ayo&apos;. Served with a fattoush salad on the side.
                </p>
                <div className="pt-3 flex items-center justify-between text-xs">
                  <span className="text-[#716B63] italic">Category: Originals &bull; Award Cured Beef</span>
                  <Link href="/menu#originals" className="font-semibold text-[#B89A59] hover:underline">
                    View on menu &rarr;
                  </Link>
                </div>
              </div>
            </article>

            {/* 6. Parisian Hot Choc / Artisan Drink */}
            <article className="group bg-white rounded-2xl overflow-hidden border border-[#E7E0D6] shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9DDCA]/30">
                <Image
                  src={IMAGES.croissantHotChocDip.src}
                  alt={IMAGES.croissantHotChocDip.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#211C19] text-[#F8F5EF] text-[10px] font-semibold tracking-wider uppercase rounded-full">
                  Specials &bull; £3.80
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-2xl font-medium text-[#211C19]">Parisian Hot Chocolate</h3>
                <p className="text-sm text-[#716B63] leading-relaxed">
                  Velvety and decadent hot chocolate crafted with condensed milk. A comforting signature ritual alongside our freshly baked croissants.
                </p>
                <div className="pt-3 flex items-center justify-between text-xs">
                  <span className="text-[#716B63] italic">Category: Specials &bull; Dairy-free on request</span>
                  <Link href="/menu#specials" className="font-semibold text-[#B89A59] hover:underline">
                    View on menu &rarr;
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: BRAND INTRODUCTION (Split Editorial)
          ============================================================ */}
      <section className="py-20 lg:py-28 bg-[#F8F5EF] border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={IMAGES.baristaCounter.src}
                  alt={IMAGES.baristaCounter.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -top-6 -right-6 p-4 rounded-xl bg-[#211C19] text-[#F8F5EF] shadow-lg max-w-[200px]">
                <p className="font-serif text-2xl font-normal leading-tight text-[#B89A59]">
                  Every Day
                </p>
                <p className="text-[11px] text-[#E9DDCA] mt-1">
                  Freshly ground coffee &amp; warm pastries on the concourse.
                </p>
              </div>
            </div>

            {/* Story Copy */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 lg:pl-6">
              <p className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
                Our Character &amp; Setting
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#211C19] leading-tight">
                More Than Your <br />Everyday Café.
              </h2>
              <p className="text-base sm:text-lg text-[#716B63] leading-relaxed">
                Bruschetta brings together specialty coffee, comforting café favourites and flavours inspired by different food cultures. From buttery croissants and carefully made coffee to vibrant brunch and distinctive bruschettas, there is something here for a slow morning, a catch-up or a little break in the city.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#211C19] text-[#F8F5EF] hover:bg-[#B89A59] hover:text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
                >
                  <span>Get to Know Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: EXPLORE THE MENU (Category Discovery)
          ============================================================ */}
      <section className="py-20 bg-[#E9DDCA]/30 border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
              The Full Selection
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#211C19]">
              Explore the Menu.
            </h2>
            <p className="text-sm sm:text-base text-[#716B63]">
              From morning croissants to savoury lunchtime bruschettas and cold-pressed drinks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Category 1: Breakfast & Pastries */}
            <Link
              href="/menu#breakfast"
              className="group block p-4 bg-white rounded-xl border border-[#E7E0D6] text-center hover:border-[#B89A59] hover:shadow-md transition-all"
            >
              <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-3 bg-[#E9DDCA]/50">
                <Image
                  src={IMAGES.pistachioCroissantTakeaway.src}
                  alt="Breakfast and pastries"
                  fill
                  sizes="160px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#211C19] group-hover:text-[#B89A59] transition-colors">
                Breakfast &amp; Pastries
              </h3>
              <p className="text-[11px] text-[#716B63] mt-1">Croissants &amp; toast</p>
            </Link>

            {/* Category 2: French Toast & Light Bites */}
            <Link
              href="/menu#pain-perdu"
              className="group block p-4 bg-white rounded-xl border border-[#E7E0D6] text-center hover:border-[#B89A59] hover:shadow-md transition-all"
            >
              <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-3 bg-[#E9DDCA]/50">
                <Image
                  src={IMAGES.frenchToastBerry.src}
                  alt="French toast and light bites"
                  fill
                  sizes="160px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#211C19] group-hover:text-[#B89A59] transition-colors">
                French Toast
              </h3>
              <p className="text-[11px] text-[#716B63] mt-1">Pain perdu &amp; bites</p>
            </Link>

            {/* Category 3: Brunch */}
            <Link
              href="/menu#brunch"
              className="group block p-4 bg-white rounded-xl border border-[#E7E0D6] text-center hover:border-[#B89A59] hover:shadow-md transition-all"
            >
              <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-3 bg-[#E9DDCA]/50">
                <Image
                  src={IMAGES.croqueMadame.src}
                  alt="Brunch plates"
                  fill
                  sizes="160px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#211C19] group-hover:text-[#B89A59] transition-colors">
                Brunch
              </h3>
              <p className="text-[11px] text-[#716B63] mt-1">Chakchouka &amp; eggs</p>
            </Link>

            {/* Category 4: Bruschettas */}
            <Link
              href="/menu#bruschettas"
              className="group block p-4 bg-white rounded-xl border border-[#E7E0D6] text-center hover:border-[#B89A59] hover:shadow-md transition-all"
            >
              <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-3 bg-[#E9DDCA]/50">
                <Image
                  src={IMAGES.laRueDesRosiers.src}
                  alt="Bruschettas"
                  fill
                  sizes="160px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#211C19] group-hover:text-[#B89A59] transition-colors">
                Bruschettas
              </h3>
              <p className="text-[11px] text-[#716B63] mt-1">Artisan toasts</p>
            </Link>

            {/* Category 5: Originals & Moreish Crêpes */}
            <Link
              href="/menu#originals"
              className="group block p-4 bg-white rounded-xl border border-[#E7E0D6] text-center hover:border-[#B89A59] hover:shadow-md transition-all"
            >
              <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-3 bg-[#E9DDCA]/50">
                <Image
                  src={IMAGES.laHaineHotdog.src}
                  alt="Originals and crêpes"
                  fill
                  sizes="160px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#211C19] group-hover:text-[#B89A59] transition-colors">
                Originals &amp; Crêpes
              </h3>
              <p className="text-[11px] text-[#716B63] mt-1">M&apos;hajeb &amp; merguez</p>
            </Link>

            {/* Category 6: Coffee & Drinks */}
            <Link
              href="/menu#hot-drinks"
              className="group block p-4 bg-white rounded-xl border border-[#E7E0D6] text-center hover:border-[#B89A59] hover:shadow-md transition-all"
            >
              <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-3 bg-[#E9DDCA]/50">
                <Image
                  src={IMAGES.twoCoffeesArt.src}
                  alt="Coffee and drinks"
                  fill
                  sizes="160px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#211C19] group-hover:text-[#B89A59] transition-colors">
                Coffee &amp; Drinks
              </h3>
              <p className="text-[11px] text-[#716B63] mt-1">Espresso &amp; juices</p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#211C19] text-[#F8F5EF] hover:bg-[#B89A59] hover:text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
            >
              <span>View the Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: SIGNATURE EXPERIENCE (Dark Editorial Feature)
          ============================================================ */}
      <section className="py-24 bg-[#211C19] text-[#F8F5EF] border-b border-[#302C29]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-[#302C29] text-[#B89A59] text-xs font-semibold tracking-widest uppercase rounded-full border border-[#B89A59]/30">
                Global Inspirations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#F8F5EF]">
                Familiar Comfort. <br />
                <span className="text-[#B89A59] italic">Unexpected Flavours.</span>
              </h2>
              <p className="text-base text-[#E9DDCA]/80 leading-relaxed">
                Bruschetta celebrates international food traditions. Our menu pairs French café artistry with North African warmth and Mediterranean spice — including traditional Algerian m&apos;hajeb crêpes, Tunisian-style chakchouka with poached egg, Lebanese flatbread with pomegranate houmous, fragrant Palestinian za&apos;atar, and decadent pistachio pastries.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 text-sm text-[#E9DDCA]/90">
                <div className="border-l-2 border-[#B89A59] pl-3">
                  <p className="font-semibold text-white">Algerian M&apos;hajeb</p>
                  <p className="text-xs text-[#E9DDCA]/70">Flaky layered crêpes filled to order</p>
                </div>
                <div className="border-l-2 border-[#B89A59] pl-3">
                  <p className="font-semibold text-white">Tunisian Chakchouka</p>
                  <p className="text-xs text-[#E9DDCA]/70">Rich tomato &amp; pepper stew with poached egg</p>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/specialties"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B89A59] text-[#211C19] hover:bg-[#E9DDCA] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
                >
                  <span>Discover Our Specialties</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#302C29]">
                <Image
                  src={IMAGES.pancakeBruschettaSign.src}
                  alt={IMAGES.pancakeBruschettaSign.alt}
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
          SECTION 7: COFFEE & DRINKS SHOWCASE
          ============================================================ */}
      <section className="py-20 bg-[#F8F5EF] border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visuals */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-[#E7E0D6] shadow-sm">
                <Image
                  src={IMAGES.twoCoffeesArt.src}
                  alt={IMAGES.twoCoffeesArt.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-[#E7E0D6] shadow-sm mt-6">
                <Image
                  src={IMAGES.freshSmoothies.src}
                  alt={IMAGES.freshSmoothies.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Drink Menu Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold mb-2">
                  Specialty Bar
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#211C19]">
                  Coffee, Teas &amp; Fresh Juices.
                </h2>
                <p className="text-sm text-[#716B63] mt-2">
                  Carefully pulled espresso, soothing infusions, iced specialties and fresh smoothies.
                </p>
              </div>

              <div className="space-y-3 divide-y divide-[#E7E0D6]">
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#211C19]">Flat White</h3>
                    <p className="text-xs text-[#716B63]">Double shot espresso with silky microfoam</p>
                  </div>
                  <span className="font-mono text-sm font-semibold text-[#211C19]">£3.10</span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#211C19]">Spanish Latte</h3>
                    <p className="text-xs text-[#716B63]">Espresso with condensed milk for subtle sweetness</p>
                  </div>
                  <span className="font-mono text-sm font-semibold text-[#211C19]">£4.20</span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#211C19]">Matcha</h3>
                    <p className="text-xs text-[#716B63]">Stone-ground green tea whisked with milk</p>
                  </div>
                  <span className="font-mono text-sm font-semibold text-[#211C19]">£4.50</span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#211C19]">Fresh Orange Juice</h3>
                    <p className="text-xs text-[#716B63]">Freshly pressed pure citrus</p>
                  </div>
                  <span className="font-mono text-sm font-semibold text-[#211C19]">£3.50</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/menu#hot-drinks"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B89A59] hover:text-[#211C19] transition-colors"
                >
                  <span>See complete drinks &amp; smoothie menu &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: CUSTOMER FEEDBACK
          ============================================================ */}
      <section className="py-20 bg-[#E9DDCA]/40 border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center text-[#B89A59]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#211C19]">{REVIEWS.rating} / 5.0</span>
                <span className="text-xs text-[#716B63]">({REVIEWS.reviewCount} public reviews)</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#211C19]">
                Good Food. Good Coffee. Good Company.
              </h2>
            </div>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#211C19] hover:text-[#B89A59] transition-colors pb-1 border-b border-[#211C19]"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.items.slice(0, 3).map((r) => (
              <div
                key={r.id}
                className="bg-white p-6 rounded-2xl border border-[#E7E0D6] shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#B89A59]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#302C29] leading-relaxed italic">
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

          <p className="mt-8 text-center text-xs text-[#716B63]">
            {REVIEWS.sourceNote}
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 9: LOCATION AND VISIT INFORMATION
          ============================================================ */}
      <section className="py-20 bg-[#F8F5EF] border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Location Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
                Visit Us in Leeds
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#211C19]">
                Find Your Little Corner in Leeds.
              </h2>
              <div className="space-y-3 text-sm text-[#302C29]">
                <p className="font-semibold text-base text-[#211C19]">{BUSINESS.name}</p>
                <p>{BUSINESS.address.line1}</p>
                <p>{BUSINESS.address.line2}</p>
                <p>{BUSINESS.address.city} {BUSINESS.address.postcode}</p>
                <p>{BUSINESS.address.country}</p>
              </div>

              {/* Hours snippet */}
              <div className="p-4 rounded-xl bg-[#E9DDCA]/40 border border-[#E7E0D6] space-y-2 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-[#211C19]">
                  <Clock className="w-4 h-4 text-[#B89A59]" />
                  <span>Weekly Schedule (Reference Hours)</span>
                </div>
                <p className="text-[#716B63]">
                  Mon &ndash; Fri: 09:30 &ndash; 17:00 &bull; Sat: 09:00 &ndash; 17:00 &bull; Sun: 10:30 &ndash; 16:00
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#211C19] text-[#F8F5EF] hover:bg-[#B89A59] hover:text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#B89A59]" />
                  <span>Get Directions in Maps</span>
                </a>
                <a
                  href={BUSINESS.orderingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-6 py-3 border border-[#211C19] text-[#211C19] hover:bg-[#E9DDCA] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
                >
                  <span>Online Ordering</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Atmosphere Photo */}
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
          SECTION 10: FINAL CONVERSION SECTION
          ============================================================ */}
      <section className="py-24 bg-[#211C19] text-[#F8F5EF] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <p className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
            We Look Forward to Welcoming You
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F8F5EF]">
            Your Next Coffee Stop?
          </h2>
          <p className="text-base sm:text-lg text-[#E9DDCA]/80 leading-relaxed max-w-xl mx-auto">
            Explore the menu, discover a new favourite, and find us inside Leeds Corn Exchange.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B89A59] text-[#211C19] hover:bg-[#E9DDCA] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
            >
              <span>Explore the Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#E9DDCA]/40 text-[#E9DDCA] hover:bg-[#302C29] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
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
