# Ismail & Hiba — Wedding Invitation Website

A luxury emerald-and-gold Islamic wedding invitation web application cloned and customized for **Ismail Shamnad & Hiba Sherin**.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## ✨ Features

- **3D Gatefold Invitation Card**: Interactive velvet doors with gold ribbons and custom wax seal emblem (`I ♡ H`) that swings open in 3D perspective to reveal the couple's invitation.
- **Background Music with Auto Fade-In**: Automatically starts and smoothly fades in volume upon opening the invitation, with a floating gold play/pause toggle at the bottom right.
- **Interactive Particle Effects**:
  - Continuous floating gold leaves, curved leaves, petals, and sparkles.
  - Interactive tap/touch physics burst emitting golden leaves and shimmer wherever the user clicks or taps.
- **3D Flippable "Save the Date" Card**:
  - Front: Ornate gold seal with the date.
  - Back: Interactive December 2026 calendar highlighting Thursday, 17 December, plus a 1-click **Add to Google Calendar** button.
- **Live Countdown Timer**: Real-time days, hours, minutes, and seconds countdown to the wedding ceremony.
- **The Celebration & Venue**:
  - City Plaza Auditorium, Unniyal Road.
  - Integrated 1-click Google Maps navigation link.
- **Family Blessings & Sacred Covenant**: Quranic verse from Surah Ar-Rum (30:21) with Arabic calligraphy and translation.
- **Interactive Guestbook (Wishes & Blessings)**:
  - Guests can leave custom wishes and du'a.
  - Supports adding, editing, and deleting wishes with persistence via `localStorage`.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 2. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization

All wedding details are centralized in [`src/config/weddingData.js`](./src/config/weddingData.js):

- **Couple Details**: Names, parent names, addresses.
- **Ceremony Details**: Date (`2026-12-17`), time (`12:00 PM`), type (`Nikah`).
- **Venue & Google Maps**: Auditorium name, location, and Google Maps URL.
- **Google Calendar link**: Pre-configured calendar event URL.
- **Photos & Music**: Located in `public/assets/` and `public/audio/`.
  - Replace `public/assets/couple.jpg` with the couple's photo.
  - Replace `public/audio/wedding-invitation.mp3` with your preferred wedding track or nasheed.

---

## 🌐 Deployment

You can deploy the `dist/` directory or connect this repository directly to:
- **Vercel**: Framework preset `Vite`, build command `npm run build`, output directory `dist`.
- **Netlify**: Build command `npm run build`, publish directory `dist`.
- **GitHub Pages / Cloudflare Pages**: Point to `dist/`.
