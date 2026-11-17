import React from "react";
import { WEDDING_DATA } from "../config/weddingData";

export function GoldLeafCorner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d58f" />
          <stop offset="50%" stopColor="#dfba73" />
          <stop offset="100%" stopColor="#a8823c" />
        </linearGradient>
      </defs>
      <path
        d="M0,0 Q60,30 110,80 T150,150"
        stroke="url(#goldLeafGrad)"
        strokeWidth="1.8"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M0,0 Q30,60 70,115 T120,160"
        stroke="url(#goldLeafGrad)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.75"
      />
      <path
        d="M0,0 Q80,15 140,40"
        stroke="url(#goldLeafGrad)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M35,18 Q45,8 55,20 Q48,32 35,18 Z"
        fill="url(#goldLeafGrad)"
        opacity="0.9"
      />
      <path
        d="M65,36 Q80,24 90,38 Q80,52 65,36 Z"
        fill="url(#goldLeafGrad)"
        opacity="0.9"
      />
      <path
        d="M98,64 Q116,52 124,68 Q112,82 98,64 Z"
        fill="url(#goldLeafGrad)"
        opacity="0.95"
      />
      <path
        d="M125,100 Q145,88 152,106 Q138,120 125,100 Z"
        fill="url(#goldLeafGrad)"
        opacity="0.95"
      />
      <path
        d="M20,40 Q10,55 25,68 Q38,55 20,40 Z"
        fill="url(#goldLeafGrad)"
        opacity="0.9"
      />
      <path
        d="M45,75 Q32,92 50,105 Q62,90 45,75 Z"
        fill="url(#goldLeafGrad)"
        opacity="0.9"
      />
      <path
        d="M72,118 Q60,136 78,148 Q90,132 72,118 Z"
        fill="url(#goldLeafGrad)"
        opacity="0.9"
      />
      <path
        d="M70,15 Q88,5 98,18 Q86,28 70,15 Z"
        fill="url(#goldLeafGrad)"
        opacity="0.85"
      />
      <path
        d="M115,30 Q135,22 142,36 Q130,48 115,30 Z"
        fill="url(#goldLeafGrad)"
        opacity="0.85"
      />
      <circle cx="50" cy="50" r="3.2" fill="url(#goldLeafGrad)" />
      <circle cx="85" cy="80" r="2.8" fill="url(#goldLeafGrad)" />
      <circle cx="115" cy="60" r="2.5" fill="url(#goldLeafGrad)" />
      <circle cx="35" cy="100" r="3" fill="url(#goldLeafGrad)" />
      <circle cx="138" cy="135" r="3.2" fill="url(#goldLeafGrad)" />
    </svg>
  );
}

export function LeafDivider({ className = "" }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-current opacity-60" />
      <svg viewBox="0 0 40 20" className="h-4 w-8" fill="currentColor">
        <path d="M20 2 c2 4 6 6 10 6 c-4 0-8 2-10 6 c-2-4-6-6-10-6 c4 0 8-2 10-6z" />
        <circle cx="4" cy="8" r="1.4" />
        <circle cx="36" cy="8" r="1.4" />
      </svg>
      <span className="h-px w-16 bg-current opacity-60" />
    </div>
  );
}

export function DiamondDivider({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 12"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth=".8"
      aria-hidden="true"
    >
      <path d="M0 6 H80 M120 6 H200" />
      <path d="M100 0 L106 6 L100 12 L94 6 Z" />
      <path d="M86 6 L90 2 L94 6 L90 10 Z M106 6 L110 2 L114 6 L110 10 Z" />
    </svg>
  );
}

export function SlenderLeaf() {
  return (
    <svg
      viewBox="0 0 24 36"
      fill="none"
      className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]"
    >
      <defs>
        <linearGradient id="slenderGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff3d1" />
          <stop offset="35%" stopColor="#dfba73" />
          <stop offset="75%" stopColor="#b88f42" />
          <stop offset="100%" stopColor="#7a5a22" />
        </linearGradient>
      </defs>
      <path
        d="M12 2 C19 10 23 21 12 34 C1 21 5 10 12 2 Z"
        fill="url(#slenderGoldGrad)"
      />
      <path
        d="M12 4 Q12 18 12 32"
        stroke="#fff8e7"
        strokeWidth="0.8"
        opacity="0.65"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CurvedLeaf() {
  return (
    <svg
      viewBox="0 0 32 36"
      fill="none"
      className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]"
    >
      <defs>
        <linearGradient id="curvedGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf3d6" />
          <stop offset="40%" stopColor="#dfba73" />
          <stop offset="85%" stopColor="#a37a30" />
          <stop offset="100%" stopColor="#5c4314" />
        </linearGradient>
      </defs>
      <path
        d="M4 33 C11 23 14 13 28 4 C25 18 18 29 4 33 Z"
        fill="url(#curvedGoldGrad)"
      />
      <path
        d="M6 31 Q15 20 25 8"
        stroke="#fff"
        strokeWidth="0.75"
        opacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M12 24 Q16 22 19 23"
        stroke="#fff"
        strokeWidth="0.6"
        opacity="0.4"
      />
      <path
        d="M17 18 Q21 16 23 17"
        stroke="#fff"
        strokeWidth="0.6"
        opacity="0.4"
      />
    </svg>
  );
}

export function PetalLeaf() {
  return (
    <img
      src={WEDDING_DATA.assets.petalImage}
      alt=""
      className="w-full h-full object-contain"
      style={{
        filter:
          "sepia(1) hue-rotate(5deg) saturate(2.8) brightness(1.28) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.45))",
      }}
    />
  );
}

export function SparkleDust() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-full h-full drop-shadow-[0_0_6px_rgba(223,186,115,0.9)]"
    >
      <defs>
        <linearGradient id="sparkleDustGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#f5d58f" />
          <stop offset="100%" stopColor="#dfba73" />
        </linearGradient>
      </defs>
      <path
        d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
        fill="url(#sparkleDustGrad)"
      />
      <circle cx="12" cy="12" r="2.2" fill="#ffffff" />
    </svg>
  );
}
