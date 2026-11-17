import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Calendar } from "lucide-react";
import { GoldLeafCorner } from "./Ornaments";
import { WEDDING_DATA } from "../config/weddingData";

export function SaveTheDateCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsFlipped(true), 650);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // December 2026: Dec 1 is Tuesday (day 2, so 2 leading empty cells)
  // Total days = 31 days
  const year = 2026;
  const monthIndex = 11; // 0-indexed: 11 = December
  const firstDay = new Date(year, monthIndex, 1).getDay(); // 2
  const totalDays = new Date(year, monthIndex + 1, 0).getDate(); // 31
  const weddingDayNumber = parseInt(WEDDING_DATA.dateDetails.dayNumber, 10);

  return (
    <div ref={cardRef} className="mx-auto w-full max-w-md px-2 text-center">
      <p className="font-serif text-lg sm:text-xl italic text-[#dfba73] mb-3">
        By the grace of the Almighty
      </p>

      <div
        className="card-flip-container relative min-h-[380px] w-full cursor-pointer select-none"
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <div
          className={`card-flip-inner min-h-[380px] w-full ${
            isFlipped ? "flipped" : ""
          }`}
        >
          {/* FRONT FACE */}
          <div className="card-face-front absolute inset-0 rounded-sm border border-[#dfba73]/40 bg-[#041c16]/90 p-6 sm:p-8 flex flex-col justify-between items-center shadow-2xl overflow-hidden">
            <div className="pointer-events-none absolute inset-2.5 border border-[#dfba73]/50" />
            <div className="pointer-events-none absolute inset-4 border border-[#dfba73]/25" />
            <GoldLeafCorner className="absolute left-1 top-1 h-20 w-20 text-[#dfba73] pointer-events-none opacity-85" />
            <GoldLeafCorner className="absolute right-1 top-1 h-20 w-20 -scale-x-100 text-[#dfba73] pointer-events-none opacity-85" />

            <div className="pt-2">
              <p className="font-['Cinzel'] text-xs tracking-[0.4em] text-[#dfba73] uppercase font-semibold">
                SAVE THE DATE
              </p>
              <div className="mt-1 flex items-center justify-center gap-1.5">
                <span className="h-px w-8 bg-[#dfba73]/40" />
                <span className="h-1 w-1 rotate-45 bg-[#dfba73]" />
                <span className="h-px w-8 bg-[#dfba73]/40" />
              </div>
            </div>

            <div className="pulse-gold relative flex items-center justify-center my-auto">
              <div className="relative flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#dfba73] via-[#05261e] to-[#031812] p-2 shadow-2xl border-2 border-[#dfba73]">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#05261e] border border-[#dfba73]/70 p-2 text-center shadow-inner">
                  <span className="font-['Cinzel'] text-[10px] tracking-widest text-[#f5d58f] uppercase">
                    ✦ {WEDDING_DATA.dateDetails.monthShort} ✦
                  </span>
                  <span className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#dfba73] leading-none my-0.5 drop-shadow">
                    {WEDDING_DATA.dateDetails.dayNumber}
                  </span>
                  <span className="font-['Cinzel'] text-[9px] tracking-widest text-[#dfba73] uppercase">
                    {WEDDING_DATA.dateDetails.dayOfWeek}
                  </span>
                </div>
              </div>
            </div>

            <div className="pb-2">
              <p className="font-['Cinzel'] text-[11px] tracking-[0.3em] text-[#f5d58f] uppercase flex items-center gap-1.5 justify-center font-medium">
                <Sparkles className="h-3 w-3 text-[#dfba73]" />
                TAP TO VIEW CALENDAR
                <Sparkles className="h-3 w-3 text-[#dfba73]" />
              </p>
            </div>
          </div>

          {/* BACK FACE */}
          <div className="card-face-back absolute inset-0 rounded-sm border border-[#dfba73]/45 bg-[#041c16]/95 p-5 sm:p-6 flex flex-col justify-between items-center shadow-2xl overflow-hidden">
            <div className="pointer-events-none absolute inset-2 border border-[#dfba73]/40" />

            <div className="w-full">
              <div className="grid grid-cols-4 divide-x divide-[#dfba73]/30 rounded-sm border border-[#dfba73]/40 bg-[#05261e]/80 py-3 shadow-lg">
                {WEDDING_DATA.dateBadges.map((badge) => (
                  <div key={badge.l} className="px-1 text-center">
                    <div className="font-['Cinzel'] text-lg sm:text-xl text-[#fdfbf7] font-bold">
                      {badge.v}
                    </div>
                    <div className="mt-0.5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#dfba73]">
                      {badge.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full my-auto px-1">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#dfba73]/30">
                <span className="font-['Cinzel'] text-xs font-bold tracking-widest text-[#dfba73]">
                  {WEDDING_DATA.dateDetails.monthName} {WEDDING_DATA.dateDetails.year}
                </span>
                <span className="font-serif text-xs italic text-[#f5d58f]">
                  Thursday · The Wedding Day
                </span>
              </div>

              <div className="grid grid-cols-7 text-center pt-2 text-[10px] font-['Cinzel'] font-bold text-[#dfba73]/80">
                {daysOfWeek.map((day, idx) => (
                  <div key={idx} className={idx === 0 ? "text-[#f5d58f]" : ""}>
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 pt-1.5 text-center text-xs font-serif text-[#fdfbf7]/80">
                {/* Empty offset padding for days before month start */}
                {Array.from({ length: firstDay }, (_, i) => (
                  <div key={`empty-${i}`} className="h-6 sm:h-7" />
                ))}

                {/* Days of the month */}
                {Array.from({ length: totalDays }, (_, idx) => {
                  const day = idx + 1;
                  const isWeddingDay = day === weddingDayNumber;
                  return (
                    <div
                      key={day}
                      className={`h-6 sm:h-7 flex items-center justify-center rounded-full transition-all ${
                        isWeddingDay
                          ? 'pulse-gold bg-[#dfba73] text-[#041c16] font-bold font-["Cinzel"] shadow-md scale-110 z-10'
                          : "hover:bg-[#dfba73]/10"
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full flex items-center justify-center gap-3 pt-1">
              <a
                href={WEDDING_DATA.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#dfba73] bg-[#0b3a2d] px-5 py-2 font-['Cinzel'] text-[11px] tracking-widest text-[#f5d58f] transition hover:bg-[#072920] shadow-md cursor-pointer"
              >
                <Calendar className="h-3.5 w-3.5 text-[#dfba73]" />
                ADD TO CALENDAR
              </a>
              <span className="text-[10px] font-['Cinzel'] tracking-widest text-[#dfba73]/60 uppercase">
                ✦ Click to Flip ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
