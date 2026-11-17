import React, { useState, useEffect } from "react";
import { WEDDING_DATA } from "../config/weddingData";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const updateCountdown = () => {
      const remaining = Math.max(0, WEDDING_DATA.eventDate - Date.now());
      setTimeLeft({
        Days: Math.floor(remaining / 86400000),
        Hours: Math.floor((remaining / 3600000) % 24),
        Minutes: Math.floor((remaining / 60000) % 60),
        Seconds: Math.floor((remaining / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = ["Days", "Hours", "Minutes", "Seconds"];

  return (
    <div className="mx-auto grid max-w-md grid-cols-4 gap-2.5 px-2">
      {units.map((unit) => (
        <div
          key={unit}
          className="rounded-sm border border-[#dfba73]/40 bg-[#05241c]/80 py-3.5 sm:py-4 text-center shadow-lg"
        >
          <div className="font-['Cinzel'] text-xl sm:text-2xl text-[#fdfbf7] font-bold">
            {timeLeft === null ? "--" : String(timeLeft[unit]).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#dfba73]">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}
