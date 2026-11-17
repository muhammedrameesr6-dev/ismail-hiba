import React, { useState } from "react";
import { GoldLeafCorner } from "./Ornaments";
import { WEDDING_DATA } from "../config/weddingData";

export function GatefoldInvitation({ stage, onStartOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpenDoors, setIsOpenDoors] = useState(false);

  const handleClick = () => {
    if (stage !== "closed" || isOpening) return;
    setIsOpening(true);
    onStartOpen();
    setTimeout(() => {
      setIsOpenDoors(true);
    }, 380);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-3 sm:p-6 overflow-hidden">
      <div className="relative flex flex-col items-center">
        {/* Top Header Text */}
        <div
          className={`mb-5 text-center transition-all duration-700 ${
            isOpening ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <p className="font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-semibold">
            WEDDING INVITATION
          </p>
          <p className="font-serif text-sm sm:text-base italic text-[#fdfbf7]/75 mt-0.5">
            {WEDDING_DATA.coupleTitle}
          </p>
        </div>

        {/* 3D Gatefold Card Container */}
        <div
          className="gatefold-perspective relative w-[90vw] max-w-[420px] sm:max-w-[450px] h-[580px] sm:h-[630px] rounded-sm shadow-[0_35px_100px_-15px_rgba(0,0,0,0.98)] cursor-pointer select-none"
          onClick={handleClick}
        >
          {/* Inside Card (Revealed upon opening) */}
          <div
            className="emerald-texture absolute inset-0 rounded-sm border border-[#dfba73]/40 p-6 sm:p-7 text-center overflow-hidden flex flex-col justify-between transition-transform duration-1000"
            style={{ transform: isOpenDoors ? "scale(1.02)" : "scale(0.96)" }}
          >
            <div className="pointer-events-none absolute inset-2.5 border border-[#dfba73]/60" />
            <div className="pointer-events-none absolute inset-4 border border-[#dfba73]/25" />
            <GoldLeafCorner className="absolute left-1 top-1 h-24 w-24 text-[#dfba73] pointer-events-none" />
            <GoldLeafCorner className="absolute right-1 top-1 h-24 w-24 -scale-x-100 text-[#dfba73] pointer-events-none" />

            {/* Subtle shimmering gold light beam */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="animate-gold-beam absolute -top-1/2 left-0 h-[200%] w-24 bg-gradient-to-r from-transparent via-[#f5d58f]/20 to-transparent" />
            </div>

            <div className="relative pt-3">
              <p
                className="font-['Amiri'] text-2xl text-[#dfba73] leading-relaxed drop-shadow"
                dir="rtl"
                lang="ar"
              >
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>
              <div className="my-1 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" />
              </div>
              <p className="font-['Cinzel'] text-[11px] tracking-[0.35em] text-[#dfba73] font-semibold uppercase">
                WEDDING INVITATION
              </p>
            </div>

            <div className="relative mx-auto my-2 max-w-[210px] sm:max-w-[240px] overflow-hidden rounded-sm border border-[#dfba73]/50 shadow-2xl">
              <img
                src={WEDDING_DATA.assets.coupleImage}
                alt={`${WEDDING_DATA.coupleTitle} Couple`}
                width={853}
                height={1024}
                className="w-full object-cover"
              />
            </div>

            <div className="relative pb-3">
              <h2 className="font-['Great_Vibes'] text-3xl sm:text-4xl text-[#dfba73] leading-tight drop-shadow">
                {WEDDING_DATA.coupleTitle}
              </h2>
              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="h-px w-10 bg-[#dfba73]/40" />
                <span className="font-['Cinzel'] text-[10px] sm:text-[11px] tracking-[0.3em] text-[#fdfbf7]/80 uppercase">
                  {WEDDING_DATA.dateDetails.dayNumber} {WEDDING_DATA.dateDetails.monthName} {WEDDING_DATA.dateDetails.year}
                </span>
                <span className="h-px w-10 bg-[#dfba73]/40" />
              </div>
              <p className="mt-1 font-serif text-[11px] sm:text-xs text-[#dfba73] italic">
                {WEDDING_DATA.venue.name}, {WEDDING_DATA.venue.city}
              </p>
            </div>
          </div>

          {/* Left Door */}
          <div
            className={`gatefold-left-door velvet absolute inset-y-0 left-0 w-1/2 border-y border-l border-[#dfba73]/60 rounded-l-sm shadow-2xl overflow-hidden z-20 ${
              isOpenDoors ? "open" : ""
            }`}
          >
            <div className="pointer-events-none absolute inset-2.5 border border-[#dfba73]/50" />
            <div className="pointer-events-none absolute inset-4 border border-[#dfba73]/25" />
            <GoldLeafCorner className="absolute left-1 top-1 h-28 w-28 text-[#dfba73] pointer-events-none opacity-90" />
            <GoldLeafCorner className="absolute left-1 bottom-1 h-28 w-28 -scale-y-100 text-[#dfba73] pointer-events-none opacity-90" />

            <div
              className="silk-gold-ribbon absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 border-y border-[#dfba73]/70 flex items-center justify-end pr-2 transition-all duration-700 ease-out"
              style={{
                transform: isOpening ? "translateX(-115%)" : "none",
                opacity: isOpening ? 0 : 1,
              }}
            >
              <span className="h-0.5 w-8 bg-[#8f6a2b]/35 rounded-full" />
            </div>
            <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" />
          </div>

          {/* Right Door */}
          <div
            className={`gatefold-right-door velvet absolute inset-y-0 right-0 w-1/2 border-y border-r border-[#dfba73]/60 rounded-r-sm shadow-2xl overflow-hidden z-20 ${
              isOpenDoors ? "open" : ""
            }`}
          >
            <div className="pointer-events-none absolute inset-2.5 border border-[#dfba73]/50" />
            <div className="pointer-events-none absolute inset-4 border border-[#dfba73]/25" />
            <GoldLeafCorner className="absolute right-1 top-1 h-28 w-28 -scale-x-100 text-[#dfba73] pointer-events-none opacity-90" />
            <GoldLeafCorner className="absolute right-1 bottom-1 h-28 w-28 -scale-x-100 -scale-y-100 text-[#dfba73] pointer-events-none opacity-90" />

            <div
              className="silk-gold-ribbon absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 border-y border-[#dfba73]/70 flex items-center justify-start pl-2 transition-all duration-700 ease-out"
              style={{
                transform: isOpening ? "translateX(115%)" : "none",
                opacity: isOpening ? 0 : 1,
              }}
            >
              <span className="h-0.5 w-8 bg-[#8f6a2b]/35 rounded-full" />
            </div>
            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
          </div>

          {/* Central Wax Seal Emblem */}
          <div
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none transition-all duration-700"
            style={{
              opacity: isOpening ? 0 : 1,
              transform: `scale(${isOpening ? 1.3 : 1})`,
            }}
          >
            <div className="pulse-gold relative flex items-center justify-center rounded-full">
              <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#dfba73] via-[#05241c] to-[#041c16] p-1.5 shadow-[0_14px_32px_rgba(0,0,0,0.9)] border-2 border-[#dfba73]">
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#05261e] border border-[#dfba73]/70 shadow-inner">
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-[#dfba73]/40" />
                  <div className="text-center select-none">
                    <p className="font-['Cinzel'] text-sm sm:text-base font-bold tracking-widest text-[#dfba73] drop-shadow-md">
                      {WEDDING_DATA.monogram}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
