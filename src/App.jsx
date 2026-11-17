import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { FloatingLeaves } from "./components/FloatingLeaves";
import { ParticleBurst } from "./components/ParticleBurst";
import { GatefoldInvitation } from "./components/GatefoldInvitation";
import { MainInvitation } from "./components/MainInvitation";
import { WEDDING_DATA } from "./config/weddingData";

export default function App() {
  const [stage, setStage] = useState("closed");
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleStartOpen = () => {
    setHasInteracted(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          let currentVol = 0;
          const interval = setInterval(() => {
            currentVol = Math.min(0.7, currentVol + 0.035);
            audio.volume = currentVol;
            if (currentVol >= 0.7) {
              clearInterval(interval);
            }
          }, 120);
        })
        .catch(() => {});
    }

    setTimeout(() => {
      setStage("open");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1850);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  const showParticles = hasInteracted || stage !== "closed";

  return (
    <div className="min-h-screen bg-[#031812] text-[#fdfbf7] selection:bg-[#0b3a2d] selection:text-[#f5d58f] relative">
      <audio
        ref={audioRef}
        src={WEDDING_DATA.assets.musicAudio}
        loop
        preload="auto"
      >
        <source src="/audio/wedding-invitation.m4a" type="audio/mp4" />
        <source src="/audio/wedding-invitation.mp3" type="audio/mpeg" />
      </audio>

      {showParticles && <FloatingLeaves count={18} />}
      <ParticleBurst onTap={() => setHasInteracted(true)} />

      {stage === "open" ? (
        <MainInvitation />
      ) : (
        <GatefoldInvitation stage={stage} onStartOpen={handleStartOpen} />
      )}

      {stage === "open" && (
        <button
          onClick={toggleMusic}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className="pulse-gold fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#dfba73] bg-[#072920]/95 text-[#dfba73] shadow-2xl backdrop-blur transition hover:scale-105 cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="ml-0.5 h-5 w-5" />
          )}
        </button>
      )}
    </div>
  );
}
