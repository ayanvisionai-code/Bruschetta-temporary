"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/data/business";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F5EF]/95 backdrop-blur-md shadow-sm border-b border-[#E7E0D6]"
          : "bg-[#F8F5EF] border-b border-[#E7E0D6]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A59] rounded py-1"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#211C19] group-hover:text-[#B89A59] transition-colors leading-none">
              BRUSCHETTA
            </span>
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#716B63] font-sans font-medium mt-1">
              BY FOOD CABARET &bull; LEEDS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#211C19] bg-[#E9DDCA] font-semibold"
                      : "text-[#716B63] hover:text-[#211C19] hover:bg-[#E9DDCA]/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wider uppercase text-[#211C19] hover:text-[#B89A59] transition-colors"
              title="Get directions to Leeds Corn Exchange"
            >
              <Compass className="w-4 h-4 text-[#B89A59]" />
              <span>Directions</span>
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#211C19] text-[#F8F5EF] hover:bg-[#B89A59] hover:text-[#211C19] text-xs font-semibold tracking-widest uppercase rounded-full transition-all duration-200 shadow-sm"
            >
              <span>Explore Menu</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/menu"
              className="px-3 py-1.5 bg-[#211C19] text-[#F8F5EF] text-xs font-medium rounded-full uppercase tracking-wider"
            >
              Menu
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#211C19] hover:text-[#B89A59] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A59]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-[113px] z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#211C19]/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative bg-[#F8F5EF] border-b border-[#E7E0D6] p-6 shadow-xl max-h-[calc(100vh-120px)] overflow-y-auto">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 px-4 rounded-lg text-base tracking-wide font-medium transition-colors ${
                      isActive
                        ? "bg-[#E9DDCA] text-[#211C19] font-semibold"
                        : "text-[#302C29] hover:bg-[#E9DDCA]/40"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 pt-6 border-t border-[#E7E0D6] flex flex-col gap-3">
              <Link
                href="/menu"
                className="w-full text-center py-3 bg-[#211C19] text-[#F8F5EF] font-semibold rounded-full uppercase tracking-widest text-xs hover:bg-[#B89A59] hover:text-[#211C19] transition-colors"
              >
                Explore Full Menu
              </Link>
              <a
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 border border-[#211C19] text-[#211C19] font-semibold rounded-full uppercase tracking-widest text-xs hover:bg-[#E9DDCA] transition-colors inline-flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#B89A59]" />
                Get Directions to Corn Exchange
              </a>
            </div>

            <div className="mt-6 text-center text-xs text-[#716B63] space-y-1">
              <p>Inside Leeds Corn Exchange &bull; The Concourse</p>
              <p>Call Lane, Leeds LS1 7BR</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
