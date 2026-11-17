import React, { useEffect } from "react";
import { MapPin, Calendar, Clock, Navigation } from "lucide-react";
import {
  GoldLeafCorner,
  LeafDivider,
  DiamondDivider,
} from "./Ornaments";
import { DateBadge } from "./DateBadge";
import { SaveTheDateCard } from "./SaveTheDateCard";
import { Countdown } from "./Countdown";
import { Wishes } from "./Wishes";
import { WEDDING_DATA } from "../config/weddingData";

function SectionTitle({ children }) {
  return (
    <div className="mb-8 text-center">
      <p className="font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-semibold">
        {children}
      </p>
      <DiamondDivider className="mx-auto mt-3 h-3 w-40 text-[#dfba73]/70" />
    </div>
  );
}

function Section({ children, className = "" }) {
  return (
    <section className={`reveal relative px-4 sm:px-6 py-16 text-center ${className}`}>
      {children}
    </section>
  );
}

export function MainInvitation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto max-w-[560px] animate-fade-in emerald-texture border-x border-[#dfba73]/25 lg:max-w-none lg:border-x-0 shadow-2xl relative overflow-hidden">
      <GoldLeafCorner className="absolute left-0 top-0 h-40 w-40 text-[#dfba73] pointer-events-none opacity-85" />
      <GoldLeafCorner className="absolute right-0 top-0 h-40 w-40 -scale-x-100 text-[#dfba73] pointer-events-none opacity-85" />

      {/* Hero Section */}
      <Section className="pt-20 pb-12 relative">
        <p
          className="font-['Amiri'] text-3xl sm:text-4xl leading-loose text-[#dfba73] drop-shadow"
          dir="rtl"
          lang="ar"
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <div className="my-2 flex items-center justify-center">
          <span className="h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" />
        </div>
        <p className="mt-6 text-base sm:text-lg text-[#fdfbf7]/90 max-w-sm mx-auto font-serif leading-relaxed">
          With hearts full of joy,
          <br />
          we warmly invite you to celebrate
          <br />
          the wedding of
        </p>

        <div className="mt-8 space-y-1">
          <h2 className="font-['Great_Vibes'] text-5xl sm:text-7xl leading-tight text-[#dfba73] drop-shadow-lg">
            {WEDDING_DATA.groom.shortName}
          </h2>
          <p className="font-serif text-2xl sm:text-3xl text-[#f5d58f] italic py-1">
            &
          </p>
          <h2 className="font-['Great_Vibes'] text-5xl sm:text-7xl leading-tight text-[#dfba73] drop-shadow-lg">
            {WEDDING_DATA.bride.shortName}
          </h2>
        </div>

        <div className="mt-8">
          <DateBadge />
        </div>

        <div className="mt-4 font-['Cinzel'] tracking-wider text-[#dfba73]">
          <p className="text-sm sm:text-base font-bold uppercase">
            {WEDDING_DATA.venue.name}
          </p>
          <p className="text-xs sm:text-sm text-[#fdfbf7]/80 uppercase">
            {WEDDING_DATA.venue.city}
          </p>
        </div>

        <LeafDivider className="mt-12 text-[#dfba73]" />
      </Section>

      {/* Save The Date 3D Flippable Card Section */}
      <Section className="py-12">
        <SaveTheDateCard />
      </Section>

      {/* Moments Countdown Section */}
      <Section className="py-12">
        <SectionTitle>COUNTING THE MOMENTS</SectionTitle>
        <Countdown />
      </Section>

      {/* The Celebration Venue Section */}
      <Section className="py-12">
        <SectionTitle>THE CELEBRATION</SectionTitle>
        <div className="emerald-card mx-auto max-w-md rounded-sm p-6 sm:p-8 text-[#fdfbf7] shadow-2xl bg-[#041c16]/75 border border-[#dfba73]/40">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#dfba73]/15 text-[#dfba73]">
            <MapPin className="h-6 w-6 text-[#dfba73]" />
          </div>
          <p className="mt-3 font-['Cinzel'] text-xl sm:text-2xl tracking-wider text-[#dfba73] font-bold">
            {WEDDING_DATA.venue.name}
          </p>
          <p className="mt-1 text-base sm:text-lg font-serif text-[#fdfbf7]/90">
            {WEDDING_DATA.venue.fullAddress}
          </p>

          <DiamondDivider className="mx-auto my-4 h-3 w-32 text-[#dfba73]/70" />

          <div className="space-y-1 font-serif text-lg">
            <p className="flex items-center justify-center gap-2 text-[#dfba73] font-medium">
              <Calendar className="h-4 w-4" /> {WEDDING_DATA.dateDetails.fullDateText}
            </p>
            <p className="flex items-center justify-center gap-2 text-[#fdfbf7]/80">
              <Clock className="h-4 w-4" /> {WEDDING_DATA.dateDetails.timeSubtitle}
            </p>
          </div>

          <a
            href={WEDDING_DATA.venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#dfba73] bg-[#072920] px-7 py-3 font-['Cinzel'] text-xs tracking-[0.3em] text-[#f5d58f] transition hover:bg-[#0b3a2d] shadow-lg cursor-pointer"
          >
            <Navigation className="h-3.5 w-3.5" />
            VENUE LOCATION
          </a>
        </div>
      </Section>

      {/* Family Blessings Section */}
      <Section className="py-12">
        <SectionTitle>WITH THE BLESSINGS OF OUR FAMILIES</SectionTitle>
        <div className="space-y-8 max-w-md mx-auto">
          <div>
            <p className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#dfba73]">
              {WEDDING_DATA.groom.fullName}
            </p>
            <p className="mt-1 text-base sm:text-lg text-[#fdfbf7]/85 font-serif">
              Son of {WEDDING_DATA.groom.parents}
            </p>
            {WEDDING_DATA.groom.address && (
              <p className="text-sm text-[#dfba73] font-serif italic">
                {WEDDING_DATA.groom.address}
              </p>
            )}
          </div>

          <LeafDivider className="text-[#dfba73]/70" />

          <div>
            <p className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#dfba73]">
              {WEDDING_DATA.bride.fullName}
            </p>
            <p className="mt-1 text-base sm:text-lg text-[#fdfbf7]/85 font-serif">
              Daughter of {WEDDING_DATA.bride.parents}
            </p>
            {WEDDING_DATA.bride.address && (
              <p className="text-sm text-[#dfba73] font-serif italic">
                {WEDDING_DATA.bride.address}
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* Sacred Covenant Section */}
      <Section className="py-12">
        <SectionTitle>A SACRED COVENANT</SectionTitle>
        <div className="space-y-6 max-w-lg mx-auto">
          <div className="rounded-sm border border-[#dfba73]/40 bg-[#041c16]/75 p-6 shadow-2xl">
            <p
              className="font-['Amiri'] text-xl sm:text-2xl leading-loose text-[#dfba73]"
              dir="rtl"
              lang="ar"
            >
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm sm:text-base italic text-[#fdfbf7]/90 font-serif">
              “And among His signs is that He created for you spouses from among
              yourselves so that you may find tranquility in them, and He placed
              between you affection and mercy.”
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-[#dfba73] font-['Cinzel']">
              — Surah Ar-Rum (30:21)
            </p>
          </div>
        </div>
      </Section>

      {/* Wishes and Guestbook Section */}
      <Section className="py-12">
        <SectionTitle>WISHES & BLESSINGS</SectionTitle>
        <Wishes />
      </Section>

      {/* Closing Du'a & Footer */}
      <Section className="pt-12 pb-28">
        <LeafDivider className="text-[#dfba73]" />
        <div className="mt-8 space-y-4 max-w-md mx-auto">
          <p
            className="font-['Amiri'] text-2xl sm:text-3xl leading-loose text-[#dfba73]"
            dir="rtl"
            lang="ar"
          >
            بَارَكَ ٱللَّٰهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm sm:text-base italic text-[#fdfbf7]/85 font-serif">
            “May Allah bless you both, shower His blessings upon you, and unite you in goodness.”
          </p>
          <p className="font-serif text-lg text-[#dfba73] pt-2">
            Your presence and prayers will make our day even more special.
          </p>
          <div className="pt-6">
            <p className="font-['Great_Vibes'] text-5xl sm:text-6xl text-[#dfba73]">
              {WEDDING_DATA.coupleTitle}
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
