import Link from "next/link";
import { Compass, BookOpen } from "lucide-react";
import { BUSINESS } from "@/lib/data/business";

export function MobileBottomBar() {
  return (
    <aside
      aria-label="Quick mobile actions"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#211C19]/95 backdrop-blur-md border-t border-[#302C29] p-3 lg:hidden transition-transform duration-300"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <Link
          href="/menu"
          className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#B89A59] text-[#211C19] text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm hover:bg-[#E9DDCA] transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Explore Menu</span>
        </Link>
        <a
          href={BUSINESS.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#302C29] text-[#F8F5EF] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#302C29]/80 transition-colors border border-[#E7E0D6]/20"
        >
          <Compass className="w-3.5 h-3.5 text-[#B89A59]" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  );
}
