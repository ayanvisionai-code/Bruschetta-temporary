"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Compass, Mail, ExternalLink, Clock, AlertCircle } from "lucide-react";
import { BUSINESS, OPENING_HOURS } from "@/lib/data/business";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#211C19] text-[#F8F5EF] pt-16 pb-12 border-t border-[#302C29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#302C29]">
          {/* Brand & Story */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A59]">
              <span className="font-serif text-3xl font-semibold tracking-wider text-[#F8F5EF] block">
                BRUSCHETTA
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#B89A59] font-sans font-medium block mt-1">
                BY FOOD CABARET &bull; LEEDS
              </span>
            </Link>
            <p className="text-sm text-[#E9DDCA]/80 leading-relaxed max-w-sm">
              Specialty coffee, handmade pastries, vibrant brunch and globally inspired flavours, served in the heart of Leeds Corn Exchange.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#302C29] flex items-center justify-center text-[#E9DDCA] hover:text-[#211C19] hover:bg-[#B89A59] transition-all"
                aria-label="Follow Bruschetta on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#302C29] flex items-center justify-center text-[#E9DDCA] hover:text-[#211C19] hover:bg-[#B89A59] transition-all"
                aria-label="Visit Bruschetta Facebook Page"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#B89A59] hover:text-[#F8F5EF] flex items-center gap-1 font-medium transition-colors ml-2"
              >
                <span>foodcabaret.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-medium text-[#E9DDCA] tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#E9DDCA]/75">
              <li>
                <Link href="/" className="hover:text-[#B89A59] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B89A59] transition-colors">
                  About Our Café
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#B89A59] transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link href="/specialties" className="hover:text-[#B89A59] transition-colors">
                  Signature Specialties
                </Link>
              </li>
              <li>
                <Link href="/why-visit" className="hover:text-[#B89A59] transition-colors">
                  Why Visit Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#B89A59] transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B89A59] transition-colors">
                  Find & Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit & Location */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-medium text-[#E9DDCA] tracking-wide">
              Visit Us
            </h3>
            <div className="text-sm text-[#E9DDCA]/75 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-[#F8F5EF]">{BUSINESS.name}</p>
              <p>{BUSINESS.address.line1}</p>
              <p>{BUSINESS.address.line2}</p>
              <p>{BUSINESS.address.city} {BUSINESS.address.postcode}</p>
              <p>{BUSINESS.address.country}</p>
            </div>
            <div className="pt-2">
              <a
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B89A59] hover:text-[#F8F5EF] transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Hours & Ordering */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-medium text-[#E9DDCA] tracking-wide flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#B89A59]" />
                <span>Opening Hours</span>
              </h3>
            </div>
            <ul className="text-xs text-[#E9DDCA]/75 space-y-1 font-mono">
              {OPENING_HOURS.map((h) => (
                <li key={h.day} className="flex justify-between py-0.5 border-b border-[#302C29]/50">
                  <span className="font-sans text-[#E9DDCA]/90">{h.day}</span>
                  <span>{h.open} – {h.close}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 flex items-start gap-1.5 text-[11px] text-[#B89A59]/90 bg-[#302C29]/60 p-2 rounded border border-[#302C29]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>Reference hours from public listing; verify with café before visit.</span>
            </div>
            <div className="pt-2">
              <a
                href={BUSINESS.orderingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B89A59] hover:text-[#F8F5EF] transition-colors"
              >
                <span>Online Ordering (Official)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#716B63]">
          <p>
            &copy; {currentYear} Bruschetta by Food Cabaret. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${BUSINESS.email}`}
              className="hover:text-[#E9DDCA] transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{BUSINESS.email}</span>
            </a>
            <Link href="/privacy" className="hover:text-[#E9DDCA] transition-colors">
              Privacy Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
