import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Coffee, Sparkles, MapPin, Heart } from "lucide-react";
import { BUSINESS } from "@/lib/data/business";
import { IMAGES } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "About Our Café | Bruschetta by Food Cabaret Leeds",
  description:
    "Learn about Bruschetta by Food Cabaret: our specialty coffee, artisanal pastries, and globally inspired food inside Leeds Corn Exchange.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F8F5EF] space-y-0">
      {/* ============================================================
          SECTION 1: EDITORIAL HERO
          ============================================================ */}
      <section className="py-16 lg:py-24 border-b border-[#E7E0D6] bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 bg-[#E9DDCA] text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full">
                About Bruschetta by Food Cabaret
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#211C19] leading-[1.15]">
                A Café with a <br />
                <span className="italic text-[#B89A59]">World of Flavour.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#716B63] leading-relaxed max-w-xl">
                Bruschetta by Food Cabaret brings specialty coffee, brunch and globally inspired food together in the distinctive surroundings of Leeds Corn Exchange.
              </p>
              <div className="flex items-center gap-3 pt-2 text-xs text-[#716B63]">
                <MapPin className="w-4 h-4 text-[#B89A59]" />
                <span>The Concourse, Leeds Corn Exchange, Call Lane &bull; Leeds LS1 7BR</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={IMAGES.cornExchangePatron.src}
                  alt={IMAGES.cornExchangePatron.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: THE CAFÉ'S APPROACH
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
              Our Culinary Identity
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#211C19]">
              Familiar Comforts Meet Global Influences.
            </h2>
            <p className="text-base text-[#716B63] leading-relaxed">
              At Bruschetta, we believe a café visit should be both comforting and inspiring. Our menu bridges classic European café favourites with vibrant culinary elements from North Africa, the Levant, and the Mediterranean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E7E0D6] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#E9DDCA] flex items-center justify-center font-serif font-semibold text-[#211C19] text-sm">
                01
              </span>
              <h3 className="font-serif text-xl font-medium text-[#211C19]">Coffee Culture</h3>
              <p className="text-xs text-[#716B63] leading-relaxed">
                Specialty espresso extraction, silky flat whites, Spanish lattes with condensed milk, matcha, and loose leaf teas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E7E0D6] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#E9DDCA] flex items-center justify-center font-serif font-semibold text-[#211C19] text-sm">
                02
              </span>
              <h3 className="font-serif text-xl font-medium text-[#211C19]">Pastries &amp; Croissant-Erie</h3>
              <p className="text-xs text-[#716B63] leading-relaxed">
                Signature warmed pistachio croissants with Yorkshire honey, almond purée, flaked almonds, and sweet fruit preserves.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E7E0D6] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#E9DDCA] flex items-center justify-center font-serif font-semibold text-[#211C19] text-sm">
                03
              </span>
              <h3 className="font-serif text-xl font-medium text-[#211C19]">Brunch Favourites</h3>
              <p className="text-xs text-[#716B63] leading-relaxed">
                From brioche French toast (Pain Perdu) with dulce de leche to rich Croque-Monsieur and Croque-Madame with Marmite béchamel.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E7E0D6] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#E9DDCA] flex items-center justify-center font-serif font-semibold text-[#211C19] text-sm">
                04
              </span>
              <h3 className="font-serif text-xl font-medium text-[#211C19]">Global Heritage</h3>
              <p className="text-xs text-[#716B63] leading-relaxed">
                Algerian m&apos;hajeb crêpes, Tunisian chakchouka, Lebanese flatbread with pomegranate houmous, and lamb merguez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: FOOD AND DRINK PHILOSOPHY
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={IMAGES.bakeryDisplay.src}
                  alt={IMAGES.bakeryDisplay.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <p className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
                Carefully Conceived Dishes
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#211C19]">
                Every Plate Has Character.
              </h2>
              <div className="space-y-4 text-sm text-[#716B63] leading-relaxed">
                <p>
                  Rather than serving predictable café formulas, our kitchen brings together distinctive textures and ingredients. Sweet cream cheese meets local Yorkshire honey and strawberries on our Petra toast. Spiced harissa coulis and caramelised onions lift our lamb merguez in La Haine.
                </p>
                <p>
                  Whether you are in search of a quick espresso before work, a relaxed lunch on the concourse, or a decadent slice of French toast with stewed espresso cherries, our team is ready to welcome you.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/specialties"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#211C19] hover:text-[#B89A59] border-b border-[#211C19] pb-1"
                >
                  <span>Explore Our Signature Dishes &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: THE CAFÉ ATMOSPHERE
          ============================================================ */}
      <section className="py-20 border-b border-[#E7E0D6] bg-[#211C19] text-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
              The Physical Setting
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F8F5EF]">
              Under Cuthbert Brodrick&apos;s Dome.
            </h2>
            <p className="text-sm sm:text-base text-[#E9DDCA]/80 leading-relaxed">
              Leeds Corn Exchange is one of Britain&apos;s most celebrated Victorian buildings — a beacon of creative independent business in Leeds. Seated on the concourse, you are enveloped by natural light, domed acoustic serenity, and the vibrant life of the city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#302C29]">
              <Image
                src={IMAGES.cornExchangeGuests.src}
                alt={IMAGES.cornExchangeGuests.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#302C29]">
              <Image
                src={IMAGES.baristaCounter.src}
                alt={IMAGES.baristaCounter.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: MENU DISCOVERY CTA
          ============================================================ */}
      <section className="py-20 bg-[#E9DDCA]/40 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#211C19]">
            Come Find Your Favourite.
          </h2>
          <p className="text-base text-[#716B63] max-w-xl mx-auto">
            From our signature pistachio croissants to savoury Algerian m&apos;hajeb, there is always something new to try.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#211C19] text-[#F8F5EF] hover:bg-[#B89A59] hover:text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
            >
              <span>Explore the Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#211C19] text-[#211C19] hover:bg-[#E9DDCA] text-xs font-semibold tracking-widest uppercase rounded-full transition-colors"
            >
              <Compass className="w-4 h-4 text-[#B89A59]" />
              <span>Plan Your Visit</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
