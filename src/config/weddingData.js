export const WEDDING_DATA = {
  // Couple Information
  groom: {
    fullName: "Ismail Shamnad",
    shortName: "Ismail",
    parents: "Sainudheen & Maimoona",
    address: "", // Can be filled if provided
  },
  bride: {
    fullName: "Hiba Sherin",
    shortName: "Hiba",
    parents: "Musthafa & Misriya",
    address: "", // Can be filled if provided
  },
  coupleTitle: "Ismail & Hiba",
  monogram: "I ♡ H",

  // Wedding Ceremony Details
  ceremonyType: "Nikah", // Wedding Type: Nikah (To be confirmed)
  eventDate: new Date("2026-12-17T12:00:00+05:30").getTime(),
  dateDetails: {
    dayNumber: "17",
    dayOfWeek: "THURSDAY",
    monthName: "DECEMBER",
    monthShort: "DEC",
    year: "2026",
    timeText: "12:00 PM",
    timeSubtitle: "12:00 PM onwards",
    fullDateText: "Thursday, 17 December 2026",
  },

  // Save the Date badge grid items
  dateBadges: [
    { v: "17", l: "Date" },
    { v: "DEC", l: "Month" },
    { v: "2026", l: "Year" },
    { v: "12:00 PM", l: "Onwards" },
  ],

  // Venue & Location
  venue: {
    name: "City Plaza Auditorium",
    city: "Unniyal Road",
    state: "Kerala",
    fullAddress: "City Plaza Auditorium, Unniyal Road",
    mapsUrl: "https://maps.app.goo.gl/hGjmiVDbyfRW1hen7?g_st=iw",
  },

  // Google Calendar URL
  googleCalendarUrl:
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding:+Ismail+Shamnad+%26+Hiba+Sherin&dates=20261217T063000Z/20261217T103000Z&details=With+the+blessings+of+our+families,+you+are+warmly+invited+to+celebrate+the+wedding+of+Ismail+Shamnad+%26+Hiba+Sherin.&location=City+Plaza+Auditorium,+Unniyal+Road",

  // Assets
  assets: {
    coupleImage: "/assets/couple.jpg",
    petalImage: "/assets/petal.png",
    sealImage: "/assets/seal.png",
    musicAudio: "/audio/wedding-invitation.mp3",
  },

  // Guestbook Initial Wishes
  initialWishes: [
    {
      id: "w1",
      guest_name: "Uncle & Family",
      message:
        "May Allah bless this beautiful union with endless love, peace, and prosperity. Baarakallaahu lakuma!",
    },
    {
      id: "w2",
      guest_name: "Family & Friends",
      message:
        "Heartiest congratulations to dearest Ismail & Hiba! Wishing you both a lifetime of eternal happiness.",
    },
  ],
  wishesStorageKey: "ismail_hiba_wishes",
};
