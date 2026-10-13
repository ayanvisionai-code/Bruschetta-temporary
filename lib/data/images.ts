// ============================================================
// BRUSCHETTA BY FOOD CABARET — IMAGE MANIFEST
// ============================================================
// Maps authentic business photography to components & sections.
// All images reside in /public/images/
// ============================================================

export interface ImageAsset {
  src: string;
  alt: string;
  title: string;
  subject:
    | "corn-exchange"
    | "coffee"
    | "croissant"
    | "brunch"
    | "sandwich"
    | "drinks"
    | "pastry"
    | "people";
  aspect: "landscape" | "portrait" | "square";
}

export const IMAGES = {
  // Atmosphere & Location
  cornExchangeBar: {
    src: "/images/bruschetta_leeds_1660377610_2903780315869271804_47398422433.jpg",
    alt: "Coffee bar at Bruschetta looking out at the grand domed architecture and arches of Leeds Corn Exchange",
    title: "Leeds Corn Exchange Dome & Coffee Bar",
    subject: "corn-exchange",
    aspect: "portrait",
  },
  cornExchangePatron: {
    src: "/images/bruschetta_leeds_1655482675_2862718628291156062_47398422433.jpg",
    alt: "Patron relaxing over coffee on the concourse under the historic Leeds Corn Exchange roof",
    title: "Coffee Break in Leeds Corn Exchange",
    subject: "people",
    aspect: "square",
  },
  cornExchangeGuests: {
    src: "/images/bruschetta_leeds_1657038910_2875773272856942435_47398422433.jpg",
    alt: "Guests smiling and enjoying coffee and drinks at Bruschetta on the Corn Exchange concourse",
    title: "Guests at Bruschetta",
    subject: "people",
    aspect: "square",
  },
  baristaCounter: {
    src: "/images/bruschetta_leeds_1662653035_2922867969739651790_47398422433.jpg",
    alt: "Bruschetta team member preparing orders at the counter inside Leeds Corn Exchange",
    title: "Welcoming Counter Service",
    subject: "people",
    aspect: "square",
  },
  bakeryDisplay: {
    src: "/images/8973-oy-photo-1.jpg",
    alt: "Freshly baked artisan loaves and breads in wooden crates at Bruschetta",
    title: "Artisan Bread Display",
    subject: "pastry",
    aspect: "landscape",
  },

  // Pastries & Croissants
  pistachioCroissantPlated: {
    src: "/images/8973-oy-photo-10.jpg",
    alt: "Signature warmed pistachio croissant with rich homemade pistachio paste and roasted pistachio crumbs",
    title: "Pistachio Croissant",
    subject: "croissant",
    aspect: "portrait",
  },
  pistachioCroissantTakeaway: {
    src: "/images/bruschetta_leeds_1657958550_2883487776083934168_47398422433.jpg",
    alt: "Golden pistachio croissant served alongside an iced coffee drink",
    title: "Croissant & Iced Coffee",
    subject: "croissant",
    aspect: "square",
  },
  croissantHotChocDip: {
    src: "/images/bruschetta_leeds_1663399806_2929132336625908760_47398422433.jpg",
    alt: "Golden croissant being dipped into a rich Parisian hot chocolate bowl",
    title: "Croissant Dipped in Hot Chocolate",
    subject: "croissant",
    aspect: "portrait",
  },
  strawberryScone: {
    src: "/images/bruschetta_leeds_1654258168_2852446717950930914_47398422433.jpg",
    alt: "Fresh cream and strawberry pastry dusted with icing sugar on marble café table",
    title: "Fresh Strawberry Pastry",
    subject: "pastry",
    aspect: "square",
  },

  // Brunch & Food
  pancakeBruschettaSign: {
    src: "/images/8973-oy-photo-2.jpg",
    alt: "Stack of fluffy fruit pancakes with berries and cream in front of the Bruschetta by Food Cabaret sign",
    title: "Pancakes with Bruschetta Sign",
    subject: "brunch",
    aspect: "portrait",
  },
  pancakeDusting: {
    src: "/images/8973-oy-photo-9.jpg",
    alt: "Stack of warm pancakes being dusted with sweet topping at Bruschetta",
    title: "Pancakes with Crumb Topping",
    subject: "brunch",
    aspect: "square",
  },
  frenchToastBerry: {
    src: "/images/bruschetta_leeds_1644432332_2770021633689375021_47398422433.jpg",
    alt: "Thick slice of golden French toast topped with berry compote and fresh fruits",
    title: "Frosted French Toast with Berries",
    subject: "brunch",
    aspect: "square",
  },
  frenchToastChocolat: {
    src: "/images/bruschetta_leeds_1647623251_2796789004386807264_47398422433.jpg",
    alt: "Hand pouring dark chocolate ganache over freshly prepared French toast with banana",
    title: "Chocolat French Toast Pour",
    subject: "brunch",
    aspect: "square",
  },
  croqueMadame: {
    src: "/images/bruschetta_leeds_1657818008_2882308817669369945_47398422433.jpg",
    alt: "Croque-Madame with pan-fried brioche, smoky beef, melted cheese, and a golden fried egg with espresso",
    title: "Croque-Madame with Espresso",
    subject: "brunch",
    aspect: "square",
  },
  laHaineHotdog: {
    src: "/images/480872144_954474976806195_3706878560484030132_n.jpg",
    alt: "La Haine Algerian Hotdog with grilled lamb merguez, caramelised onions, 'ayo' and harissa coulis",
    title: "La Haine (Algerian Hotdog)",
    subject: "sandwich",
    aspect: "portrait",
  },
  laRueDesRosiers: {
    src: "/images/1666693446_2956761389037890602_47398422433.jpg".length > 0
      ? "/images/bruschetta_leeds_1666693446_2956761389037890602_47398422433.jpg"
      : "/images/bruschetta_leeds_1666693446_2956761389037890602_47398422433.jpg",
    alt: "La Rue Des Rosiers cured beef bagel sandwich with fresh rocket and pickles",
    title: "La Rue Des Rosiers Bagel",
    subject: "sandwich",
    aspect: "square",
  },

  // Drinks & Coffee
  twoCoffeesArt: {
    src: "/images/480912390_954476080139418_3317512428694914376_n.jpg",
    alt: "Two specialty flat whites with intricate latte art on a round café table",
    title: "Specialty Coffees with Latte Art",
    subject: "coffee",
    aspect: "square",
  },
  steamingMugTea: {
    src: "/images/bruschetta_leeds_1667497178_2963503580431118562_47398422433.jpg",
    alt: "Steaming white ceramic mug of hot tea or coffee served with a sweet biscuit",
    title: "Steaming Hot Mug with Biscuit",
    subject: "drinks",
    aspect: "square",
  },
  freshSmoothies: {
    src: "/images/8973-oy-photo-7.jpg",
    alt: "Freshly pressed vibrant yellow passionfruit smoothie and green kale smoothie with straws",
    title: "Fresh Yellow & Green Smoothies",
    subject: "drinks",
    aspect: "portrait",
  },
  hotChocBrownieOver: {
    src: "/images/bruschetta_leeds_1649262648_2810541262119292911_47398422433.jpg",
    alt: "Decadent brownie held over a warm cup of chocolate with latte art",
    title: "Brownie & Specialty Hot Drink",
    subject: "drinks",
    aspect: "portrait",
  },
  hotChocPourSplash: {
    src: "/images/bruschetta_leeds_1649262648_2810541261951541679_47398422433.jpg",
    alt: "Action pour of velvety hot chocolate over a dessert bowl",
    title: "Parisian Hot Chocolate Pour",
    subject: "drinks",
    aspect: "portrait",
  },
  hotChocStirring: {
    src: "/images/bruschetta_leeds_1654011036_2850373628043925358_47398422433.jpg",
    alt: "Customer stirring a cup of hot chocolate with sweet treat alongside",
    title: "Afternoon Coffee & Hot Chocolate",
    subject: "drinks",
    aspect: "portrait",
  },
} as const satisfies Record<string, ImageAsset>;
