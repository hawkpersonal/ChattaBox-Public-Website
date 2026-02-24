import { ArrowRight } from "lucide-react";
import { PILOT_URL } from "@/lib/constants";

export function AnnouncementBanner() {
  return (
    <a
      href={PILOT_URL}
      className="block bg-[#C06040] text-white text-center py-2.5 px-4 text-sm font-medium hover:bg-[#A8543A] transition-colors"
    >
      We're now accepting pilot participants —{" "}
      <span className="inline-flex items-center gap-1 underline underline-offset-2">
        Join the pilot
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}
