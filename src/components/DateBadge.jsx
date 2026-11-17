import React from "react";
import { WEDDING_DATA } from "../config/weddingData";

export function DateBadge() {
  const { dateDetails } = WEDDING_DATA;

  // Space out month name letters: "D E C E M B E R"
  const spacedMonth = dateDetails.monthName.split("").join(" ");
  // Space out day of week letters: "T H U R S D A Y"
  const spacedDay = dateDetails.dayOfWeek.split("").join(" ");
  // Space out year: "2 0 2 6"
  const spacedYear = dateDetails.year.split("").join(" ");

  return (
    <div className="mx-auto max-w-xs text-center py-2">
      <p className="font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-medium">
        {spacedMonth}
      </p>
      <div className="my-2.5 flex items-center justify-center gap-2">
        <span className="h-px flex-1 bg-[#dfba73]/50" />
        <span className="h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" />
        <span className="h-px flex-1 bg-[#dfba73]/50" />
      </div>
      <div className="flex items-center justify-between px-2 py-1">
        <span className="font-['Cinzel'] text-xs sm:text-[13px] tracking-[0.25em] text-[#dfba73] uppercase font-medium">
          {spacedDay}
        </span>
        <span className="font-['Cinzel'] text-3xl sm:text-4xl text-[#dfba73] font-bold px-3">
          {dateDetails.dayNumber}
        </span>
        <span className="font-['Cinzel'] text-xs sm:text-[13px] tracking-[0.25em] text-[#dfba73] uppercase font-medium">
          AT {dateDetails.timeText.replace(":00", "")}
        </span>
      </div>
      <div className="my-2.5 flex items-center justify-center gap-2">
        <span className="h-px flex-1 bg-[#dfba73]/50" />
        <span className="h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" />
        <span className="h-px flex-1 bg-[#dfba73]/50" />
      </div>
      <p className="font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-medium">
        {spacedYear}
      </p>
    </div>
  );
}
