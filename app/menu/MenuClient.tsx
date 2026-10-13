"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  X,
  Compass,
  ExternalLink,
  AlertTriangle,
  Info,
  Coffee,
  UtensilsCrossed,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { MENU_CATEGORIES, ALLERGEN_DISCLAIMER, MenuCategory, MenuItem } from "@/lib/data/menu";
import { BUSINESS } from "@/lib/data/business";

export function MenuClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "food" | "drinks" | "extras">("all");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Filtered categories and items
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return MENU_CATEGORIES.map((category) => {
      // Filter by type if not 'all'
      if (selectedType !== "all" && category.type !== selectedType) {
        return { ...category, items: [] };
      }

      // Filter by active category if not 'all'
      if (activeCategory !== "all" && category.id !== activeCategory) {
        return { ...category, items: [] };
      }

      // If no search query, return all items in this category
      if (!query) {
        return category;
      }

      // Filter items matching query
      const matchingItems = category.items.filter((item) => {
        const nameMatch = item.name.toLowerCase().includes(query);
        const descMatch = item.description?.toLowerCase().includes(query) ?? false;
        const notesMatch = item.notes?.toLowerCase().includes(query) ?? false;
        return nameMatch || descMatch || notesMatch;
      });

      return {
        ...category,
        items: matchingItems,
      };
    }).filter((category) => category.items.length > 0);
  }, [searchQuery, selectedType, activeCategory]);

  const totalMatchingItems = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* ============================================================
          PAGE HEADER
          ============================================================ */}
      <section className="bg-[#F8F5EF] pt-12 pb-8 border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 bg-[#E9DDCA] text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full">
            Full Café Menu
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#211C19]">
            Food, Coffee &amp; Infusions.
          </h1>
          <p className="text-sm sm:text-base text-[#716B63] max-w-2xl mx-auto leading-relaxed">
            Every dish and beverage crafted at Bruschetta, from morning viennoiserie and French toast to globally inspired savoury plates and specialty coffee.
          </p>

          {/* Quick Action Links */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BUSINESS.orderingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#211C19] text-[#F8F5EF] text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-[#B89A59] hover:text-[#211C19] transition-colors"
            >
              <span>Order Online via Official Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-[#211C19] text-[#211C19] text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-[#E9DDCA] transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-[#B89A59]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          INTERACTIVE CONTROLS BAR (Sticky Search & Category Navigation)
          ============================================================ */}
      <div className="sticky top-20 z-30 bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#E7E0D6] py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#716B63] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, drinks, ingredients (e.g. pistachio, matcha, harissa)..."
                className="w-full pl-10 pr-9 py-2 rounded-full border border-[#E7E0D6] bg-white text-xs sm:text-sm text-[#211C19] placeholder:text-[#716B63]/60 focus:outline-none focus:ring-2 focus:ring-[#B89A59] focus:border-transparent transition-all"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#716B63] hover:text-[#211C19]"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Type Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-[#E9DDCA]/50 p-1 rounded-full self-start sm:self-auto overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => {
                  setSelectedType("all");
                  setActiveCategory("all");
                }}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  selectedType === "all" && activeCategory === "all"
                    ? "bg-[#211C19] text-[#F8F5EF]"
                    : "text-[#716B63] hover:text-[#211C19]"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedType("food");
                  setActiveCategory("all");
                }}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  selectedType === "food"
                    ? "bg-[#211C19] text-[#F8F5EF]"
                    : "text-[#716B63] hover:text-[#211C19]"
                }`}
              >
                Food
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedType("drinks");
                  setActiveCategory("all");
                }}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  selectedType === "drinks"
                    ? "bg-[#211C19] text-[#F8F5EF]"
                    : "text-[#716B63] hover:text-[#211C19]"
                }`}
              >
                Drinks
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedType("extras");
                  setActiveCategory("all");
                }}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  selectedType === "extras"
                    ? "bg-[#211C19] text-[#F8F5EF]"
                    : "text-[#716B63] hover:text-[#211C19]"
                }`}
              >
                Extras
              </button>
            </div>
          </div>

          {/* Category Jump Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 px-3 py-1 rounded-full border transition-colors ${
                activeCategory === "all"
                  ? "border-[#211C19] bg-[#211C19] text-[#F8F5EF] font-semibold"
                  : "border-[#E7E0D6] bg-white text-[#716B63] hover:border-[#B89A59]"
              }`}
            >
              All Categories ({MENU_CATEGORIES.length})
            </button>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedType("all");
                }}
                className={`shrink-0 px-3 py-1 rounded-full border transition-colors ${
                  activeCategory === cat.id
                    ? "border-[#211C19] bg-[#211C19] text-[#F8F5EF] font-semibold"
                    : "border-[#E7E0D6] bg-white text-[#716B63] hover:border-[#B89A59]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          MAIN MENU LISTING
          ============================================================ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Allergen & Dietary Information Notice */}
        <div className="p-4 rounded-xl bg-[#E9DDCA]/50 border border-[#E7E0D6] flex items-start gap-3 text-xs text-[#302C29]">
          <Info className="w-4 h-4 text-[#B89A59] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-[#211C19]">Dietary &amp; Allergen Notice</p>
            <p className="text-[#716B63] leading-relaxed">{ALLERGEN_DISCLAIMER}</p>
            <div className="flex items-center gap-4 pt-1 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1">
                <span className="w-4 h-4 rounded bg-[#69735A] text-white flex items-center justify-center font-bold text-[9px]">
                  V
                </span>
                <span>Vegetarian marker (as supplied)</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="w-4 h-4 rounded bg-[#211C19] text-white flex items-center justify-center font-bold text-[9px]">
                  Ve
                </span>
                <span>Vegan marker (as supplied)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Results summary if searching */}
        {searchQuery && (
          <div className="flex items-center justify-between text-xs text-[#716B63] border-b border-[#E7E0D6] pb-3">
            <span>
              Found <strong>{totalMatchingItems}</strong> items matching &ldquo;{searchQuery}&rdquo;
            </span>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-[#B89A59] font-semibold hover:underline"
            >
              Reset search
            </button>
          </div>
        )}

        {/* Categories Sections */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 space-y-4">
            <UtensilsCrossed className="w-12 h-12 text-[#B89A59] mx-auto opacity-60" />
            <h3 className="font-serif text-2xl text-[#211C19]">No menu items found</h3>
            <p className="text-sm text-[#716B63]">
              No dishes or drinks match your query &ldquo;{searchQuery}&rdquo;. Try another term.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
                setSelectedType("all");
              }}
              className="px-5 py-2 bg-[#211C19] text-[#F8F5EF] rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#B89A59] transition-colors"
            >
              Show Full Menu
            </button>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="space-y-6 pt-4 scroll-mt-36"
            >
              {/* Category Heading */}
              <div className="border-b border-[#211C19] pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#211C19]">
                    {category.name}
                  </h2>
                  {category.subtitle && (
                    <p className="text-xs text-[#716B63] mt-0.5">{category.subtitle}</p>
                  )}
                </div>
                <span className="text-xs font-mono text-[#716B63]">
                  {category.items.length} {category.items.length === 1 ? "item" : "items"}
                </span>
              </div>

              {/* Category Notes if any (e.g. Specials condensed milk note) */}
              {category.notes && (
                <div className="p-3 rounded-lg bg-[#E9DDCA]/60 border border-[#E7E0D6] flex items-start gap-2 text-xs text-[#302C29]">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#B89A59] shrink-0 mt-0.5" />
                  <span>{category.notes}</span>
                </div>
              )}

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <article
                    key={item.id}
                    className="p-5 rounded-2xl bg-white border border-[#E7E0D6] shadow-sm hover:border-[#B89A59] transition-all flex flex-col justify-between space-y-3"
                  >
                    <div>
                      {/* Optional authentic dish photo */}
                      {item.image && (
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3 bg-[#E9DDCA]/30">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      )}

                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-serif text-xl font-medium text-[#211C19]">
                          {item.name}
                        </h3>
                        {item.price && (
                          <span className="font-mono text-sm font-semibold text-[#211C19] shrink-0">
                            {item.price}
                          </span>
                        )}
                      </div>

                      {item.description && (
                        <p className="text-xs text-[#716B63] mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {item.notes && (
                        <p className="text-[11px] text-[#B89A59] font-medium mt-1">
                          {item.notes}
                        </p>
                      )}

                      {/* Verification flag notice if present */}
                      {item.verificationFlag && (
                        <div className="mt-2 p-2 bg-[#E9DDCA]/40 rounded text-[10px] text-[#716B63] border border-[#E7E0D6]">
                          {item.verificationFlag}
                        </div>
                      )}
                    </div>

                    {/* Dietary Markers & Footer info */}
                    <div className="pt-2 border-t border-[#E7E0D6]/60 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        {item.dietary?.map((code) => (
                          <span
                            key={code}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              code === "V"
                                ? "bg-[#69735A] text-white"
                                : "bg-[#211C19] text-[#F8F5EF]"
                            }`}
                            title={code === "V" ? "Vegetarian (as supplied)" : "Vegan (as supplied)"}
                          >
                            {code}
                          </span>
                        ))}
                      </div>
                      {!item.price && category.type === "food" && (
                        <span className="text-[11px] text-[#716B63] italic">
                          Price at till
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))
        )}

        {/* ============================================================
            BOTTOM CONVERSION CTA
            ============================================================ */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#211C19] text-[#F8F5EF] text-center space-y-5">
          <span className="text-xs uppercase tracking-widest text-[#B89A59] font-semibold">
            Visit Bruschetta in Leeds
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F8F5EF]">
            Ready to Taste Something Special?
          </h2>
          <p className="text-sm text-[#E9DDCA]/80 max-w-lg mx-auto">
            Find us on the Concourse of Leeds Corn Exchange. Walk-ins welcome every day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B89A59] text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#E9DDCA] transition-colors"
            >
              <Compass className="w-4 h-4 text-[#211C19]" />
              <span>Get Directions</span>
            </a>
            <a
              href={BUSINESS.orderingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#E9DDCA]/40 text-[#E9DDCA] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#302C29] transition-colors"
            >
              <span>Visit Online Ordering</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
