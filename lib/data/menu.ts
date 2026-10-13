// ============================================================
// BRUSCHETTA BY FOOD CABARET — COMPLETE MENU DATA
// ============================================================
// Sourced directly from business menu cards and specifications.
// Every item from Category A through Category O is preserved.
// ⚠️ Do not invent missing food prices. Only supplied drink prices are shown.
// ⚠️ Ambiguous ingredients ('ayo') and awards are explicitly flagged.
// ============================================================

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string; // Formatted price e.g. "£3.10" or undefined if unsupplied
  dietary?: ("V" | "Ve")[];
  notes?: string;
  image?: string;
  verificationFlag?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle?: string;
  type: "food" | "drinks" | "extras";
  notes?: string;
  items: MenuItem[];
}

export const ALLERGEN_DISCLAIMER =
  "Please inform our team of any allergies or dietary requirements when ordering. Cross-contamination risks may exist in a shared café kitchen. Food prices are available at the counter.";

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "at-a-glance",
    name: "At a Glance",
    subtitle: "A quick selection of café favourites",
    type: "food",
    items: [
      {
        id: "ag-brioche-toast",
        name: "Brioche Toast",
        description: "Tinned brioche bread toasted and served with butter and/or strawberry jam.",
        dietary: ["V"],
      },
      {
        id: "ag-classic-french-toast",
        name: "Classic",
        description: "Our classic French toast, served with dulce de leche, a knob of Yorkshire butter and a drizzle of maple syrup.",
        image: "/images/bruschetta_leeds_1644432332_2770021633689375021_47398422433.jpg",
      },
      {
        id: "ag-petra",
        name: "Petra",
        description: "Toasted bread, with sweet cream cheese placed on top, topped with sliced strawberries, pistachio crumbs and a drizzle of Yorkshire honey.",
        dietary: ["V"],
      },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast",
    subtitle: "Warm beginnings and morning pastries",
    type: "food",
    items: [
      {
        id: "bf-brioche-toast",
        name: "Brioche Toast",
        description: "Tinned brioche bread toasted and served with butter and/or strawberry jam.",
        dietary: ["V"],
      },
      {
        id: "bf-yoghurt-granola",
        name: "Yoghurt & Granola",
        description: "Seasonal special, ask at the till for today's flavours and toppings!",
        dietary: ["Ve"],
      },
      {
        id: "bf-breakfast-croissant",
        name: "The Breakfast Croissant",
        description: "A fresh buttery croissant, sliced in half, filled with homemade scrambled eggs, lime-infused smashed avocado, topped with chilli flakes and za'atar.",
        dietary: ["V"],
      },
      {
        id: "bf-all-butter-croissant",
        name: "All-Butter Croissant",
        dietary: ["V"],
      },
      {
        id: "bf-almond-croissant",
        name: "Almond Croissant",
        description: "A warmed croissant served with homemade almond paste inside, and topped with flaked almonds.",
        dietary: ["V"],
      },
      {
        id: "bf-croissant-pistachio",
        name: "Croissant Pistachio",
        description: "Homemade pistachio paste placed inside a warmed croissant, topped with Yorkshire honey, pistachio drizzle and crushed pistachios.",
        dietary: ["V"],
        image: "/images/8973-oy-photo-10.jpg",
      },
    ],
  },
  {
    id: "pain-perdu",
    name: "Pain Perdu",
    subtitle: "French toast crafted with golden brioche",
    type: "food",
    items: [
      {
        id: "pp-classic",
        name: "Classic",
        description: "Our classic French toast, served with dulce de leche, a knob of Yorkshire butter and a drizzle of maple syrup.",
        image: "/images/bruschetta_leeds_1644432332_2770021633689375021_47398422433.jpg",
      },
      {
        id: "pp-frosted",
        name: "Frosted French Toast",
        description: "French toast with house-espresso stewed cherries, flaked toasted almonds, homemade whipped cream and topped with icing sugar.",
      },
      {
        id: "pp-chocolat",
        name: "Chocolat",
        description: "Warmed homemade dark chocolate sauce drizzled on top of freshly made French toast. Topped with a scoop of vanilla ice cream and chocolate shavings.",
        image: "/images/bruschetta_leeds_1647623251_2796789004386807264_47398422433.jpg",
      },
    ],
  },
  {
    id: "light-bites",
    name: "Light Bites",
    subtitle: "Sweet and savoury brioche bites",
    type: "food",
    items: [
      {
        id: "lb-petra",
        name: "Petra",
        description: "Toasted bread, with sweet cream cheese placed on top, topped with sliced strawberries, pistachio crumbs and a drizzle of Yorkshire honey.",
        dietary: ["V"],
      },
      {
        id: "lb-baptiste",
        name: "Baptiste",
        description: "Toasted brioche bread, with tahini and perfectly placed date syrup drizzle.",
        dietary: ["V"],
      },
    ],
  },
  {
    id: "croissant-erie",
    name: "Croissant-Erie",
    subtitle: "Handcrafted croissants baked and filled with care",
    type: "food",
    items: [
      {
        id: "ce-all-butter",
        name: "All Butter Croissant",
      },
      {
        id: "ce-avec-jam",
        name: "Croissant Avec Jam",
      },
      {
        id: "ce-chocolat",
        name: "Croissant Chocolat",
        description: "Croissant with homemade chocolate ganache and topped with crushed hazelnuts.",
      },
      {
        id: "ce-almond",
        name: "Croissant Almond",
        description: "Croissant with a homemade almond purée and topped with roasted almonds.",
      },
      {
        id: "ce-pistachio",
        name: "Croissant Pistachio",
        description: "Croissant with homemade pistachio spread, topped with Yorkshire honey and roasted pistachios.",
        image: "/images/8973-oy-photo-10.jpg",
      },
    ],
  },
  {
    id: "croque",
    name: "Croque-Monsieur & Croque-Madame",
    subtitle: "Comforting French grill sandwiches with rich béchamel",
    type: "food",
    items: [
      {
        id: "cq-monsieur",
        name: "Croque-Monsieur",
        description: "Pan-fried and buttered brioche bread with slices of smoky beef and 'ayo'. Topped with grilled goat's cheese, caramelised onion, rocket salad and a blowtorched Marmite béchamel sauce.",
        verificationFlag: "⚠️ 'ayo' ingredient description to be confirmed with café owner prior to publication.",
      },
      {
        id: "cq-madame",
        name: "Croque-Madame",
        description: "Pan-fried and buttered brioche bread with slices of smoky beef and 'ayo'. Topped with Emmental cheese, a fried egg, rocket salad and blowtorched béchamel sauce.",
        image: "/images/bruschetta_leeds_1657818008_2882308817669369945_47398422433.jpg",
        verificationFlag: "⚠️ 'ayo' ingredient description to be confirmed with café owner prior to publication.",
      },
    ],
  },
  {
    id: "brunch",
    name: "Brunch",
    subtitle: "Substantial plates with Mediterranean & North African character",
    type: "food",
    items: [
      {
        id: "br-toast",
        name: "Toast",
        description: "Brioche bread, toasted and served with butter and/or strawberry jam.",
      },
      {
        id: "br-palestina",
        name: "Palestina",
        description: "Crispy bread served traditionally with za'atar and cold-pressed olive oil. Accompanied with strips of grilled halloumi.",
      },
      {
        id: "br-loubia",
        name: "Loubia",
        description: "Homemade low-and-slow harissa-spiced cannellini beans. Think of beans on toast, Algerian style.",
      },
      {
        id: "br-bruschetta-verde",
        name: "Bruschetta Verde",
        description: "Sliced avocado infused with freshly squeezed lime juice and olive oil, topped with a poached egg, on a bed of wild spinach and drizzled with crème of dill.",
      },
      {
        id: "br-chakchouka",
        name: "Chakchouka",
        description: "Classic Tunisian chakchouka topped with a poached egg and finished with a drizzle of olive oil.",
      },
      {
        id: "br-full-algerian",
        name: "Full Algerian Breakfast",
        description: "Harissa-spiced cannellini beans with merguez and a poached egg nestled on top of a freshly sliced and toasted bruschetta.",
      },
    ],
  },
  {
    id: "originals",
    name: "Originals",
    subtitle: "Signature creations with distinct global identity",
    type: "food",
    items: [
      {
        id: "orig-la-haine",
        name: "La Haine (Algerian Hotdog)",
        description: "A warmed brioche bun filled with caramelised onions and homemade lamb merguez, topped with 'ayo' and a harissa coulis.",
        image: "/images/480872144_954474976806195_3706878560484030132_n.jpg",
        verificationFlag: "⚠️ 'ayo' ingredient description to be confirmed with café owner.",
      },
      {
        id: "orig-le-holy-houmous",
        name: "Le Holy Houmous",
        description: "Homemade smooth houmous with pomegranate sauce, served with a fattoush salad and Lebanese flatbread.",
      },
      {
        id: "orig-la-rue-des-rosiers",
        name: "La Rue Des Rosiers",
        description: "El buey cured beef 'Great Taste Winner 2019', served in a toasted bagel with sliced gherkins, fresh rocket and 'ayo'. Served with a fattoush salad on the side.",
        image: "/images/bruschetta_leeds_1666693446_2956761389037890602_47398422433.jpg",
        verificationFlag: "⚠️ Great Taste Winner 2019 award claim requires owner verification prior to public publication.",
      },
    ],
  },
  {
    id: "moreish-crepe",
    name: "The Moreish Crepe",
    subtitle: "Traditional Algerian m'hajeb crêpes filled to order",
    type: "food",
    items: [
      {
        id: "mc-plain",
        name: "Plain",
        description: "Drizzled with Yorkshire honey.",
      },
      {
        id: "mc-classic",
        name: "Classic",
        description: "The traditional Algerian m'hajeb, filled with plum tomato and caramelised onion.",
      },
      {
        id: "mc-spinach-cheese",
        name: "Spinach And Palestinian Cheese",
        description: "Stuffed with fresh spinach and Palestinian cheese.",
      },
      {
        id: "mc-zatar-oil",
        name: "Za'tar And Olive Oil",
        description: "M'hajeb served with an aromatic and nutty za'tar.",
      },
      {
        id: "mc-ratatouille",
        name: "Ratatouille",
        description: "The 'end-of-summer' French stew placed inside an Algerian crepe.",
      },
    ],
  },
  {
    id: "bruschettas",
    name: "Bruschettas",
    subtitle: "Artisanal open-topped creations & savoury toasts",
    type: "food",
    items: [
      {
        id: "bsh-margherita",
        name: "Margherita",
        description: "Our take on the classic cheese toastie. Feta, rocket, tomato, and balsamic glaze sandwiched inside brioche bread smothered in our homemade Margherita sauce and melted cheddar cheese slices.",
        dietary: ["V"],
      },
      {
        id: "bsh-la-rue-des-rosiers",
        name: "La Rue Des Rosiers",
        description: "A toasted brioche bagel, filled with pastrami, sliced gherkins, mustard and harissa 'ayo', and rocket. Served with seasonal side salad.",
        image: "/images/bruschetta_leeds_1666693446_2956761389037890602_47398422433.jpg",
      },
      {
        id: "bsh-le-holy-houmous",
        name: "Le Holy Houmous",
        description: "Homemade classic Lebanese-style houmous, served with a selection of seasonal toppings, and placed with grilled flatbread. Topped with extra virgin olive oil, za'tar and a sprinkle of sumac.",
        dietary: ["Ve"],
      },
      {
        id: "bsh-chakchouka",
        name: "Chakchouka",
        description: "Traditionally sliced bread and perfectly balanced Tunisian chakchouka, topped with a poached egg and garnished with fresh herbs.",
        dietary: ["V"],
      },
      {
        id: "bsh-loubia",
        name: "Loubia",
        description: "Our love letter to Algeria; a low-and-slow braised cannellini bean laced with North African influence. Think of beans on toast, bruschetta style.",
        dietary: ["V"],
      },
      {
        id: "bsh-mole-tostada",
        name: "Molé Tostada",
        description: "Crispy brioche bread, topped with homemade pesto, smashed avocado, rocket, sweet baby peppers and a poached egg.",
        dietary: ["V"],
      },
      {
        id: "bsh-palestina",
        name: "Palestina",
        description: "Toasted brioche bread covered in Lebanese-style houmous, and freshly grilled halloumi strips. Topped with Palestinian za'atar.",
        dietary: ["V"],
      },
      {
        id: "bsh-toast-butter",
        name: "Toast — With Butter",
        dietary: ["V"],
      },
      {
        id: "bsh-toast-jam",
        name: "Toast — With Jam",
        dietary: ["V"],
      },
      {
        id: "bsh-baptiste",
        name: "Baptiste",
        description: "A thin layer of tahini on brioche toast with a drizzle of date coulis.",
        dietary: ["V"],
      },
      {
        id: "bsh-petra",
        name: "Petra",
        description: "Cream cheese spread onto brioche toast, with a helpful drizzle of local honey on top.",
        dietary: ["V"],
      },
    ],
  },
  {
    id: "hot-drinks",
    name: "Hot Drinks",
    subtitle: "Specialty espresso, artisanal teas & warming infusions",
    type: "drinks",
    items: [
      { id: "hd-espresso", name: "Double Espresso", price: "£2.80" },
      { id: "hd-long-black", name: "Long Black", price: "£3.10" },
      { id: "hd-americano", name: "Americano", price: "£3.60" },
      { id: "hd-macchiato", name: "Macchiato", price: "£3.30" },
      { id: "hd-cortado", name: "Cortado", price: "£2.90" },
      {
        id: "hd-flat-white",
        name: "Flat White",
        price: "£3.10",
        image: "/images/480912390_954476080139418_3317512428694914376_n.jpg",
      },
      { id: "hd-cappuccino", name: "Cappuccino", price: "£3.50" },
      { id: "hd-latte", name: "Latte", price: "£4.00" },
      { id: "hd-mocha", name: "Mocha", price: "£4.20", notes: "See also Specials category" },
      { id: "hd-spanish-latte", name: "Spanish Latte", price: "£4.20", notes: "See also Specials category" },
      { id: "hd-chai-latte", name: "Chai Latte", price: "£4.20" },
      { id: "hd-dirty-chai", name: "Dirty Chai", price: "£4.70" },
      { id: "hd-matcha", name: "Matcha", price: "£4.50" },
      {
        id: "hd-hot-chocolate",
        name: "Hot Chocolate",
        price: "£5.90",
        image: "/images/bruschetta_leeds_1649262648_2810541261942994200_47398422433.jpg",
      },
      { id: "hd-chocolate-chai", name: "Chocolate Chai", price: "£4.20" },
      { id: "hd-babyccino", name: "Babyccino", price: "£1.00" },
      {
        id: "hd-yorkshire-tea",
        name: "Yorkshire Tea",
        price: "£2.30",
        image: "/images/bruschetta_leeds_1667497178_2963503580431118562_47398422433.jpg",
      },
      { id: "hd-earl-grey", name: "Earl Grey", price: "£2.70" },
      {
        id: "hd-loose-leaf",
        name: "Loose Leaf Tea",
        price: "£3.00",
        description: "Selection of fragrant botanical blends and infusions.",
        verificationFlag: "⚠️ Confirmation needed: verify whether specific blends below are exclusively Loose Leaf varieties.",
      },
      {
        id: "hd-tea-green",
        name: "Green Tea Infusion",
        description: "Green tea, orange blossom, honey verbena, saffron.",
      },
      {
        id: "hd-tea-mint",
        name: "Traditional Mint Tea",
        description: "Moroccan gunpowder green, fresh mint.",
      },
      {
        id: "hd-tea-strawberry",
        name: "Strawberry Lemonade Infusion",
        description: "Strawberry, elderberries, lime, hibiscus.",
      },
      {
        id: "hd-tea-lemon-ginger",
        name: "Lemon & Ginger Infusion",
        description: "Ginger, apple, rosehip, lemon peel.",
      },
      {
        id: "hd-tea-sleepy",
        name: "Sleepy Blend Infusion",
        description: "Chamomile, hibiscus, rose, lavender.",
      },
    ],
  },
  {
    id: "iced-drinks",
    name: "Iced Drinks",
    subtitle: "Chilled espresso, teas and chocolate over ice",
    type: "drinks",
    items: [
      { id: "id-iced-americano", name: "Iced Americano", price: "£3.60" },
      { id: "id-iced-latte", name: "Iced Latte", price: "£4.30" },
      { id: "id-iced-mocha", name: "Iced Mocha", price: "£4.50" },
      { id: "id-iced-spanish", name: "Iced Spanish Latte", price: "£4.50" },
      { id: "id-iced-chai", name: "Iced Chai", price: "£4.50" },
      { id: "id-iced-matcha", name: "Iced Matcha", price: "£4.50" },
      { id: "id-iced-chocolate", name: "Iced Chocolate", price: "£4.50" },
      { id: "id-iced-chocolate-chai", name: "Iced Chocolate Chai", price: "£4.50" },
      { id: "id-iced-dirty-chai", name: "Iced Dirty Chai", price: "£4.70" },
    ],
  },
  {
    id: "cold-drinks",
    name: "Cold Drinks",
    subtitle: "Freshly pressed juices, pure waters & smoothies",
    type: "drinks",
    items: [
      { id: "cd-still-water", name: "Still Water", price: "£2.50" },
      { id: "cd-sparkling-water", name: "Sparkling Water", price: "£2.50" },
      { id: "cd-orange-juice", name: "Fresh Orange Juice", price: "£3.50" },
      { id: "cd-pressed-apple", name: "Pago Pressed Apple", price: "£3.00" },
      {
        id: "cd-smoothie-yellow",
        name: "Yellow Smoothie",
        price: "£5.90",
        description: "Passionfruit, pineapple and mango.",
        image: "/images/8973-oy-photo-7.jpg",
      },
      {
        id: "cd-smoothie-green",
        name: "Green Smoothie",
        price: "£5.90",
        description: "Kale, spinach and mango.",
        image: "/images/8973-oy-photo-7.jpg",
      },
      {
        id: "cd-smoothie-pink",
        name: "Pink Smoothie",
        price: "£5.90",
        description: "Blackberry, raspberry and strawberry.",
      },
    ],
  },
  {
    id: "specials",
    name: "Specials",
    subtitle: "Signature sweet indulgences with condensed milk",
    type: "drinks",
    notes:
      "⚠️ Note from menu: These specialty drinks contain condensed milk. Dairy-free options are available (to be confirmed with team). Note price difference with general menu.",
    items: [
      {
        id: "sp-parisian-hot-choc",
        name: "Parisian Hot Choc",
        price: "£3.80",
        description: "Rich Parisian style chocolate made with condensed milk. Dairy-free option available upon request.",
        image: "/images/bruschetta_leeds_1649262648_2810541261942994200_47398422433.jpg",
      },
      {
        id: "sp-mocha",
        name: "Mocha (Specials)",
        price: "£3.90",
        description: "Crafted with condensed milk. (Note: listed at £4.20 in general Hot Drinks; confirm current special pricing).",
      },
      {
        id: "sp-spanish-latte",
        name: "Spanish Latte (Specials)",
        price: "£3.90",
        description: "Crafted with condensed milk. (Note: listed at £4.20 in general Hot Drinks; confirm current special pricing).",
      },
    ],
  },
  {
    id: "extras",
    name: "Extras & Customisations",
    subtitle: "Milk alternatives, syrups and espresso additions",
    type: "extras",
    items: [
      {
        id: "ex-syrup",
        name: "Syrup",
        price: "£0.50",
        description: "Available in Sugar, Vanilla, or Caramel.",
      },
      { id: "ex-extra-shot", name: "Extra Espresso Shot", price: "£1.50" },
      { id: "ex-hot-water", name: "Cup of Hot Water", price: "£0.50" },
      {
        id: "ex-alt-milk",
        name: "Alternative Milk / Decaf",
        price: "£0.00",
        description: "Included as supplied on menu. Specific plant milks to be confirmed at till.",
      },
    ],
  },
];
