// ============================================================
// BRUSCHETTA BY FOOD CABARET — CENTRALIZED BUSINESS DATA
// ============================================================
// ⚠️  VERIFICATION REQUIRED before public launch:
//     - Opening hours (sourced from third-party listing, unverified)
//     - Review text and ratings (sourced from Placejoys screenshots)
//     - Award claims (verify before publishing)
//     - Dietary markers (confirm meanings with business owner)
// ============================================================

export const BUSINESS = {
  name: "Bruschetta by Food Cabaret",
  tagline: "A Little Taste of Somewhere Else.",
  shortDescription:
    "Specialty coffee, handmade pastries, vibrant brunch and globally inspired flavours, served in the heart of Leeds Corn Exchange.",
  email: "foodcabaret@gmail.com",
  website: "https://foodcabaret.com/",
  orderingUrl: "https://www.foodcabaret.com/s/order",
  address: {
    line1: "Corn Exchange, The Concourse",
    line2: "Call Lane",
    city: "Leeds",
    postcode: "LS1 7BR",
    country: "United Kingdom",
    full: "Corn Exchange, The Concourse, Call Lane, Leeds LS1 7BR, United Kingdom",
  },
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Corn+Exchange%2C+The+Concourse%2C+Call+Lane%2C+Leeds+LS1+7BR%2C+United+Kingdom",
  social: {
    instagram: {
      handle: "@bruschetta_leeds",
      url: "https://www.instagram.com/bruschetta_leeds/",
    },
    facebook: {
      name: "Bruschetta by Food Cabaret",
      url: "https://www.facebook.com/people/Bruschetta-by-Food-Cabaret/100067311038757/",
    },
  },
} as const;

// ⚠️ Opening hours sourced from third-party Placejoys listing.
// Require owner verification before treating as confirmed live hours.
export const OPENING_HOURS = [
  { day: "Monday", open: "09:30", close: "17:00" },
  { day: "Tuesday", open: "09:30", close: "17:00" },
  { day: "Wednesday", open: "09:30", close: "17:00" },
  { day: "Thursday", open: "09:30", close: "17:00" },
  { day: "Friday", open: "09:30", close: "17:00" },
  { day: "Saturday", open: "09:00", close: "17:00" },
  { day: "Sunday", open: "10:30", close: "16:00" },
] as const;

export const HOURS_VERIFICATION_NOTE =
  "⚠️ These hours are sourced from a third-party listing and require owner verification before public launch.";

// ⚠️ Reviews sourced from Placejoys screenshots. Verify text accuracy,
// current rating figures, and permitted usage before public launch.
// DO NOT display as Google or Facebook reviews.
export const REVIEWS = {
  source: "Placejoys",
  sourceNote:
    "Reviews sourced from a third-party Placejoys listing. Rating and review count require verification before public display.",
  // ⚠️ Verify current figures with original source before publication
  rating: 4.5,
  reviewCount: 291,
  items: [
    {
      id: "r1",
      name: "Vivienne Li",
      text: "The pistachio croissant is absolutely worth visiting for — crisp exterior with a rich, flavourful filling. Coffee was excellent too.",
      note: "Paraphrased from screenshot; verify exact text before publication.",
    },
    {
      id: "r2",
      name: "Y T",
      text: "Lovely matcha and really good coffee. The atmosphere inside the Corn Exchange is really special.",
      note: "Paraphrased from screenshot; verify exact text before publication.",
    },
    {
      id: "r3",
      name: "Amin NSJ",
      text: "Staff are so friendly and welcoming. Fresh pastries and great coffee — a really pleasant café experience.",
      note: "Paraphrased from screenshot; verify exact text before publication.",
    },
    {
      id: "r4",
      name: "Robert",
      text: "A great spot inside Leeds Corn Exchange. The food is fresh and the coffee is very well made.",
      note: "Paraphrased from screenshot; verify exact text before publication.",
    },
    {
      id: "r5",
      name: "Raya Verdi",
      text: "Genuinely one of the nicest cafés I've been to in Leeds. The pastries are fresh and the setting is beautiful.",
      note: "Paraphrased from screenshot; verify exact text before publication.",
    },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Our Specialties", href: "/specialties" },
  { label: "Why Visit Us", href: "/why-visit" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;
