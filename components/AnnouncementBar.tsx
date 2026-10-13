import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Location notice"
      className="bg-[#211C19] text-[#E9DDCA] border-b border-[#302C29] text-xs py-2 px-4 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <MapPin className="w-3.5 h-3.5 text-[#B89A59] shrink-0" aria-hidden="true" />
          <span className="font-medium tracking-wide">
            Find us inside Leeds Corn Exchange &bull; The Concourse, Call Lane, Leeds LS1 7BR
          </span>
        </div>
        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center gap-1 text-[#B89A59] hover:text-[#E9DDCA] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A59]"
        >
          <span>Plan your visit</span>
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
