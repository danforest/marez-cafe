import { dishImages } from "@/lib/dishImages";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  ingredients: string[];
  tags: string[];
  image: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  description: string;
  hours: string;
  image: string;
  ctaLabel: string;
  items: MenuItem[];
};

export type ShowcaseSlide = {
  name: string;
  image: string;
  href: string;
};

export type Review = {
  id: string;
  locationId: string;
  quote: string;
  author: string;
};

export type Location = {
  id: string;
  name: string;
  address: string;
  postcode: string;
  phone: string;
  coords: { lat: number; lng: number };
  image: string;
};

export const siteConfig = {
  name: "Marez",
  tagline: "Feel-Good Feasting",
  description:
    "North African sunshine on every plate. A home-from-home café for friends, family, colleagues, solo diners and neighbours.",
  hours: {
    weekday: "Mon to Sat: 8:00am – 5:00pm",
    sunday: "Sun: 9:00am – 4:00pm",
    note: "Last orders are taken 30 minutes before closing.",
  },
  phone: "020 3632 8345",
  email: "hello@marez.co.uk",
  bookingNote:
    "We primarily welcome walk-ins on a first-come, first-served basis. Bookings accepted for 1 or more.",
  challenge25:
    "Alcohol is not for sale to persons under the age of 18. We operate with a Challenge 25 Policy.",
};

export const orderLinks = {
  deliveroo:
    "https://deliveroo.co.uk/menu/london/teddington/marez-brasserie/?utm_medium=affiliate&utm_source=google_maps_link&fulfillment_type=DELIVERY",
};

export const topNavigation = [
  { label: "Join Our Team", href: "#join" },
  { label: "Book", href: "#book" },
  { label: "Catering", href: "#catering" },
  { label: "Reservations", href: "#contact" },
];

export const announcement = {
  text: "Introducing Marez After Dark. Bold North African flavours, great music & warm lighting.",
  href: "#promos",
  storageKey: "marez-announcement-dismissed",
};

export const promoModal = {
  title: "Marez After Dark Supper Clubs",
  description:
    "A brand new series of evening events from the team behind Marez Café. Think bold North African flavours, great music, warm lighting, and a room full of people who came for the food and stayed for the atmosphere.",
  cta: { label: "Get Your Tickets", href: "#contact" },
  storageKey: "marez-promo-modal-seen",
};

export const navPromo = {
  title: "Marez After Dark",
  description:
    "Our new evening supper clubs. Bold flavours, great music, and the warmth you know from Marez.",
  image:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
  cta: { label: "Find out more", href: "#promos" },
};

export const bakehouseNavLinks = [
  { label: "Sourdough Loaves", href: "#menus" },
  { label: "Pastries & Viennoiserie", href: "#menus" },
  { label: "Cakes & Treats", href: "#menus" },
  { label: "Order for Collection", href: orderLinks.deliveroo },
];

export const menuNavLinks = [
  { label: "Breakfast", href: "#menus" },
  { label: "Lunch", href: "#menus" },
  { label: "Kids", href: "#menus" },
  { label: "Drinks", href: "#menus" },
];

export const navigation: NavItem[] = [
  {
    label: "Bakehouse",
    href: "#menus",
    children: bakehouseNavLinks,
  },
  {
    label: "Catering",
    href: "#contact",
    children: [
      { label: "Events & Private Hire", href: "#contact" },
      { label: "Office Lunch", href: "#contact" },
      { label: "Enquire Now", href: "#contact" },
    ],
  },
  {
    label: "About",
    href: "#philosophy",
    children: [
      { label: "Our Story", href: "#philosophy" },
      { label: "Join Our Team", href: "#join" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

export const hero = {
  headline: "Your local café for everyday living",
  subhead:
    "Marez is a home-from-home where it doesn't matter who you are, all are welcome.",
  badgeText:
    "With friends, family, work colleagues, solo diners or neighbours…it's the café for everyone!",
  primaryCta: { label: "Browse Our Menus", href: "#menus" },
};

export const mealsSection = {
  eyebrow: "Featured dishes",
  title: "What's On The Menu",
};

export const showcaseSlides: ShowcaseSlide[] = [
  {
    name: "Shakshuka",
    href: "/menu/breakfast/shakshuka",
    image: dishImages.shakshukaMarez,
  },
  {
    name: "Helena's Bap",
    href: "/menu/breakfast/helenas-bap",
    image: dishImages.helenasBap,
  },
  {
    name: "Acai Bowl",
    href: "/menu/breakfast/acai-bowl",
    image: dishImages.acaiBowl,
  },
  {
    name: "Crunchy Nut French Toast",
    href: "/menu/breakfast/crunchy-nut-french-toast",
    image: dishImages.crunchyNutFrenchToast,
  },
  {
    name: "Ranchero",
    href: "/menu/breakfast/ranchero",
    image: dishImages.ranchero,
  },
  {
    name: "Spicy Scrambled Eggs",
    href: "/menu/breakfast/the-spicy-scrambled",
    image: dishImages.spicyScrambledEggs,
  },
];

export const philosophy = {
  sectionTitle: "Who we are",
  headline: "Open To Everyone",
  intro:
    "Marez was born from a childhood where food is generous, hospitality is instinctive, and the table is always open to everyone. We brought those values with us to Teddington, built a café around them, and put Climpson & Sons Brazilian beans at the heart of every cup: rich, rounded, with notes of dark chocolate and marzipan. It's a place where you're recognised, where it's warm, where it just feels right. Come with friends, family, work colleagues or by yourself. Food that lifts your mood, coffee worth lingering over, and a welcome that means it.",
  tagline: "You'll find us on the high street.",
  foodTitle: "10% Food",
  foodText:
    "Every dish starts with real ingredients, bold North African flavours, and bread baked with care. Fresh ideas, honest cooking, and just the right amount of rule-breaking.",
  hospitalityTitle: "90% Hospitality",
  hospitalityText:
    "If food is what we do, hospitality is who we are. It's never just about the plate in front of you. We believe in warmth over formality, connection over service, and the little details that make people feel seen.",
  storyCta: { label: "Our Story", href: "#philosophy" },
  storyText:
    "We spent our entire childhood in North Africa, imbued with good values ranging from warmth and hospitality to good rich food. Our goal is to bring a bit of sunshine into the dishes we serve.",
  image: "/images/who-we-are/puppuccino-dog.png",
};

export const philosophyQuote = {
  quote:
    "We spent our entire childhood in North Africa, imbued with good values ranging from warmth and hospitality to good rich food. Our goal is to bring a bit of sunshine into the dishes we serve.",
  attribution: "The Marez team",
};

export const contactSection = {
  eyebrow: "Contact",
  title: "Say hello",
  intro:
    "Got a question about bookings, catering, or just want to say hi? We'd love to hear from you.",
  phone: "02036328345",
  phoneDisplay: "020 3632 8345",
  email: "hello@marez.co.uk",
  submitLabel: "Send it",
  successMessage: "Thank you. Your message has been received. We'll be in touch soon.",
};

export const bookSection = {
  title: "How to Find Us",
  findingUsHeading: "Finding Us",
  findingUsBody: [
    "We're at 40 Broad Street, Teddington, TW11 8QY, right in the heart of the village.",
    "Teddington station is a five-minute walk away, on the Kingston Loop Line with regular trains to London Waterloo (around 40 minutes) via Richmond, Twickenham and Kingston. Prefer the bus? Several routes stop right outside on Broad Street, including the SL7 running direct to Heathrow.",
    "Driving down? There's pay-and-display parking along Broad Street itself, plus council car parks a short walk away on North Lane and Cedar Road.",
  ],
  orderText:
    "Dine in with us, order via Deliveroo, or call ahead and collect. Whatever works for you.",
  hoursHeading: "Opening Hours",
  hoursWeekday: "Mon to Sat: 8:00am to 5:00pm",
  hoursSunday: "Sun: 9:00am to 4:00pm",
  hoursNote: "Last orders 30 minutes before closing.",
  image: "/assets/barron-coffee.jpeg",
};

export const cateringSection = {
  title: "Catering",
  leadText:
    "Feeding the office? Marez brings Mediterranean and North African-inspired platters straight to your workplace, order ahead for meetings, team lunches, or all-day events. Ask us about lead times, delivery radius and minimum orders.",
  privateText:
    "We also cater for private events and venue hire. Get in touch and we'll handle every detail, from menu to delivery.",
  cta: { label: "Get in touch", href: "#contact" },
};

export const joinTeamSection = {
  title: "Join Our Team",
  intro:
    "We're growing and we'd love to hear from you. Whether you're a barista, a chef, or into brand and events, get in touch.",
  image: "/assets/join-us.jpg",
};

export const menuCategories: MenuCategory[] = [
  {
    id: "bakehouse",
    title: "Bakehouse",
    description: "Sourdough, pastries and treats from our in-house bakery.",
    hours: "From 7:30am",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    ctaLabel: "View Menu",
    items: [],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    description: "Honest, feel-good morning food worth getting out of bed for.",
    hours: "8am – 12pm",
    image: dishImages.shakshukaMarez,
    ctaLabel: "View Menu",
    items: [
      {
        name: "Shakshuka Marez",
        price: "£12.50",
        description:
          "Slow-cooked spiced tomato and pepper sauce with poached eggs, roasted aubergine and thick-cut sourdough for dipping.",
        ingredients: [
          "Eggs",
          "Tomato",
          "Roasted aubergine",
          "Peppers",
          "Sourdough",
        ],
        tags: ["Vegetarian", "Signature"],
        image: dishImages.shakshukaMarez,
      },
      {
        name: "Marez Full Breakfast",
        price: "£14.95",
        description: "Lamb merguez, grilled halloumi, eggs, harissa beans, sourdough.",
        ingredients: ["Merguez", "Halloumi", "Eggs", "Harissa", "Sourdough"],
        tags: ["Meat Lover"],
        image:
          "https://images.unsplash.com/photo-1533089860892-a7c6f0a98666?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "North African French Toast",
        price: "£11.75",
        description: "Orange blossom brioche, honey, pistachio, rose yoghurt.",
        ingredients: ["Brioche", "Honey", "Pistachio", "Orange blossom"],
        tags: ["Vegetarian", "Sweet"],
        image:
          "https://images.unsplash.com/photo-1484723091739-30a021d1429e?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    description: "Fresh salads, hearty bowls and proper grub, all day.",
    hours: "12pm – 5pm",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    ctaLabel: "View Menu",
    items: [
      {
        name: "Harissa Chicken Bowl",
        price: "£13.95",
        description: "Marinated chicken, couscous, roasted peppers, tahini dressing.",
        ingredients: ["Chicken", "Couscous", "Harissa", "Tahini", "Peppers"],
        tags: ["Gluten Free"],
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Mediterranean Mezze Plate",
        price: "£12.25",
        description: "Hummus, baba ganoush, falafel, pickles, warm flatbread.",
        ingredients: ["Chickpeas", "Aubergine", "Flatbread", "Pickles"],
        tags: ["Vegan", "Sharing"],
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Lamb & Mint Burger",
        price: "£15.50",
        description: "Spiced lamb patty, mint yoghurt, pickled onion, brioche bun.",
        ingredients: ["Lamb", "Mint", "Brioche", "Pickled onion"],
        tags: ["Meat Lover"],
        image:
          "https://images.unsplash.com/photo-1568901347635-c89aa710600e?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "kids",
    title: "Kids",
    description: "For the pickiest eaters with the biggest personalities.",
    hours: "All day",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    ctaLabel: "View Menu",
    items: [
      {
        name: "Mini Marez Breakfast",
        price: "£7.50",
        description: "Egg, beans, toast soldiers, fresh fruit.",
        ingredients: ["Egg", "Beans", "Toast", "Fruit"],
        tags: ["Kids"],
        image:
          "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Cheesy Flatbread Pizza",
        price: "£6.95",
        description: "Tomato, mozzarella, sweetcorn. Fun and filling.",
        ingredients: ["Flatbread", "Mozzarella", "Tomato"],
        tags: ["Kids", "Vegetarian"],
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    description:
      "Coffee, juices, smoothies, wines, and cocktails. Whatever your vibe, there's a drink to match it.",
    hours: "8am – 5pm",
    image:
      "https://images.unsplash.com/photo-1497935586761-b94a89712afe?auto=format&fit=crop&w=800&q=80",
    ctaLabel: "View Menu",
    items: [
      {
        name: "Flat White",
        price: "£3.50",
        description: "Climpson & Sons The Baron, rich, rounded, sweet.",
        ingredients: ["Espresso", "Steamed milk"],
        tags: ["Coffee"],
        image:
          "https://images.unsplash.com/photo-1572442388796-11668b64a291?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Fresh Mint Tea",
        price: "£3.25",
        description: "North African style, fresh, fragrant, restorative.",
        ingredients: ["Fresh mint", "Hot water"],
        tags: ["Vegan"],
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

export const locations: Location[] = [
  {
    id: "wimbledon",
    name: "Marez Wimbledon",
    address: "42 High Street, Wimbledon",
    postcode: "SW19 1HE",
    phone: "020 3632 8345",
    coords: { lat: 51.4214, lng: -0.2067 },
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "richmond",
    name: "Marez Richmond",
    address: "18 George Street, Richmond",
    postcode: "TW9 1HY",
    phone: "020 3632 8345",
    coords: { lat: 51.4613, lng: -0.3037 },
    image:
      "https://images.unsplash.com/photo-1445118980991-022f7e279814?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "clapham",
    name: "Marez Clapham",
    address: "9 Northcote Road, Clapham",
    postcode: "SW11 1NG",
    phone: "020 3632 8345",
    coords: { lat: 51.4618, lng: -0.1647 },
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "putney",
    name: "Marez Putney",
    address: "31 Lower Richmond Road, Putney",
    postcode: "SW15 1EH",
    phone: "020 3632 8345",
    coords: { lat: 51.4649, lng: -0.2155 },
    image:
      "https://images.unsplash.com/photo-1445118980991-022f7e279814?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "battersea",
    name: "Marez Battersea",
    address: "12 Northcote Road, Battersea",
    postcode: "SW11 1NG",
    phone: "020 3632 8345",
    coords: { lat: 51.4634, lng: -0.1678 },
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58220f04?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "kingston",
    name: "Marez Kingston",
    address: "5 Market Place, Kingston",
    postcode: "KT1 1JS",
    phone: "020 3632 8345",
    coords: { lat: 51.4123, lng: -0.3005 },
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "wandsworth",
    name: "Marez Wandsworth",
    address: "88 Old York Road, Wandsworth",
    postcode: "SW18 1SP",
    phone: "020 3632 8345",
    coords: { lat: 51.4571, lng: -0.1912 },
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tooting",
    name: "Marez Tooting",
    address: "22 Mitcham Road, Tooting",
    postcode: "SW17 9NA",
    phone: "020 3632 8345",
    coords: { lat: 51.4274, lng: -0.1682 },
    image:
      "https://images.unsplash.com/photo-1445118980991-022f7e279814?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "balham",
    name: "Marez Balham",
    address: "67 Balham High Road, Balham",
    postcode: "SW12 9AP",
    phone: "020 3632 8345",
    coords: { lat: 51.4432, lng: -0.1525 },
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58220f04?auto=format&fit=crop&w=1200&q=80",
  },
];

/** Fallback when GOOGLE_PLACES_API_KEY is not set — sourced from Google reviews */
export const testimonials: Review[] = [
  {
    id: "google-sophia",
    locationId: "teddington",
    quote:
      "Wonderful friendly atmosphere with delicious food. A great place to meet friends and eat out with family. I have returned on many occasions for brunch, lunch, and breakfast.",
    author: "Sophia",
  },
  {
    id: "google-jo-k",
    locationId: "teddington",
    quote:
      "What a hidden gem! The staff are lovely — as soon as we got to the door they were very friendly and welcoming. The crunchy nut French toast is the star of the show.",
    author: "Jo K.",
  },
  {
    id: "google-jon-holloway",
    locationId: "teddington",
    quote:
      "Definitely my favourite place for brunch or breakfast in Teddington. The French toast and all the trimmings is stunning. Happy, fun and friendly staff and owner.",
    author: "Jon H.",
  },
  {
    id: "google-balal-ahmed",
    locationId: "teddington",
    quote:
      "Went to Marez Brasserie in Teddington with two of my brothers and honestly, it was spot on from the moment we sat down. The staff were brilliant straight away.",
    author: "Balal A.",
  },
  {
    id: "google-precious-okeke",
    locationId: "teddington",
    quote:
      "I went for the full vegan option and it was the best decision — very good flavours and 10/10 overall. My partner scoffed his down so that shows he enjoyed every bite!",
    author: "Precious N. O.",
  },
  {
    id: "google-martin",
    locationId: "teddington",
    quote:
      "A lovely and vibrant café with a welcoming atmosphere and excellent service. Generous portions, smooth beautifully presented coffee, and friendly attentive staff.",
    author: "Martin R.",
  },
];

export const coffee = {
  roaster: "Climpson & Sons",
  blend: "The Baron",
  origin: "Brazilian beans",
  description:
    "Rich, rounded, and sweet, characteristic of the region, with a flavour profile of clean dark chocolate, sweet nuttiness and marzipan. Sits exceptionally well as espresso and in milk.",
  image:
    "https://images.unsplash.com/photo-1497935586761-b94a89712afe?auto=format&fit=crop&w=800&q=80",
};

export const promoBlocks = [
  {
    id: "events",
    title: "Marez Events",
    description:
      "Now we do events and catering for your special occasions. Contact us to hire our venue. We'll make it a pure moment of pleasure and joy.",
    cta: { label: "Enquire About Events", href: "#contact" },
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "catering",
    title: "Home & Office Lunch Catering",
    description:
      "Whether you're catering lunch at home or for your business, we'll work with you on every detail and ensure seamless delivery to your doorstep.",
    cta: { label: "About Catering", href: "#contact" },
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
  },
];

export const footer = {
  newsletter: {
    headline: "Weekly Bites of Marez",
    subcopy:
      "Be the first to know about new dishes, events and exclusive offers.",
    consent:
      "By subscribing, you consent to Marez contacting you by email. You can unsubscribe at any time.",
  },
  columns: [
    {
      title: "Menus",
      links: [
        { label: "Bakehouse", href: "#menus" },
        { label: "Breakfast", href: "#menus" },
        { label: "Lunch", href: "#menus" },
        { label: "Kids", href: "#menus" },
        { label: "Drinks", href: "#menus" },
      ],
    },
    {
      title: "Visit",
      links: [
        { label: "Locations", href: "#locations" },
        { label: "Order Online", href: orderLinks.deliveroo },
        { label: "Join Our Team", href: "#join" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Our Story", href: "#philosophy" },
        { label: "Health & Safety", href: "#contact" },
        { label: "Reservations", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Allergens", href: "#" },
      ],
    },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
  legal: siteConfig.challenge25,
  copyright: `Copyright © ${new Date().getFullYear()} Marez Brasserie Ltd. All Rights Reserved.`,
};
