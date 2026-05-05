// =============================================
// BLOOMING PETALS — Product Data
// Prices updated to USD ($)
// =============================================

const PRODUCTS = [
  // ---- ROSES ----
  {
    id: 1,
    name: "Crimson Romance Bouquet",
    price: 34.99,
    category: "Anniversaries",
    flowerType: "Rose",
    image: "images/crimson_romance.jpg",
    summary: "24 hand-picked deep red roses with cascading baby's breath and eucalyptus.",
    description: "A timeless expression of love, this bouquet features 24 hand-picked long-stem crimson roses from our premium garden collection. Paired with delicate white baby's breath and fragrant eucalyptus leaves, tied with a lustrous satin black ribbon. Perfect for celebrating a special anniversary milestone.",
    features: ["24 Long-Stem Red Roses", "Fresh baby's breath & eucalyptus", "Satin black ribbon wrap", "Fragrance: Strong & sweet", "Vase life: 7–10 days"],
    rating: 4.8,
    reviews: 124,
    isNew: false
  },
  {
    id: 2,
    name: "Eternal Love Roses",
    price: 49.99,
    category: "Anniversaries",
    flowerType: "Rose",
    image: "images/eternal_love_roses.jpg",
    summary: "36 premium bi-color red-white roses in a luxury gift box with dried botanicals.",
    description: "This grand romantic collection of 36 bi-color red and white roses is a statement of eternal devotion. Presented in a premium black gift box with gold accents, this arrangement also features dried pampas grass and preserved botanicals that last for months without water.",
    features: ["36 Premium Bi-Color Roses", "Luxury black gift box", "Dried pampas & botanicals", "Lasts 3–4 weeks", "Gold accent ribbon"],
    rating: 4.9,
    reviews: 87,
    isNew: true
  },
  {
    id: 3,
    name: "Get Well Rose Garden",
    price: 24.99,
    category: "Get-Well",
    flowerType: "Rose",
    image: "images/get_well_roses.jpg",
    summary: "Cheerful mixed pink and peach roses in a reusable ceramic pot.",
    description: "Send warmth and healing wishes with this cheerful mix of pink and peach roses arranged in a premium reusable ceramic pot. The soft pastel tones and sweet fragrance are designed to lift spirits instantly. A heartfelt way to say you care.",
    features: ["Mixed pink & peach roses", "Premium ceramic pot included", "Fragrant garden roses", "Reusable keepsake pot", "Get-well card included"],
    rating: 4.6,
    reviews: 56,
    isNew: false
  },
  // ---- SUNFLOWERS ----
  {
    id: 4,
    name: "Birthday Sunshine Bouquet",
    price: 19.99,
    category: "Birthdays",
    flowerType: "Sunflower",
    image: "images/sunflower_birthday.jpg",
    summary: "12 giant sunflowers with lush green foliage — sunshine in a wrap!",
    description: "Celebrate with pure joy! This bold bouquet of 12 giant sunflowers radiates warmth and positivity. Wrapped in kraft paper with a cheerful sunflower-motif ribbon, this birthday gift is sure to bring an instant smile. Includes a personalized birthday card.",
    features: ["12 Giant Sunflowers", "Kraft paper wrap", "Personalized card", "Green foliage filler", "Vase life: 5–7 days"],
    rating: 4.7,
    reviews: 98,
    isNew: false
  },
  {
    id: 5,
    name: "Sunflower Anniversary Cheer",
    price: 29.99,
    category: "Anniversaries",
    flowerType: "Sunflower",
    image: "images/sunflower_anniversary.jpg",
    summary: "18 sunflowers with golden chamomile and rustic burlap decor.",
    description: "A radiant anniversary arrangement that combines 18 tall sunflowers with golden chamomile daisies and rustic burlap ribbon. The warm yellow tones symbolize joy, loyalty, and a bright future together — making this perfect for couples who cherish warmth and happiness.",
    features: ["18 Tall Sunflowers", "Chamomile accent flowers", "Rustic burlap ribbon", "Approx. 55cm tall", "Vase life: 6–8 days"],
    rating: 4.5,
    reviews: 43,
    isNew: false
  },
  // ---- ORCHIDS ----
  {
    id: 6,
    name: "Royal Orchid Arrangement",
    price: 54.99,
    category: "Marriages",
    flowerType: "Orchid",
    image: "images/royal_orchid.jpg",
    summary: "Majestic purple orchids in a sculpted dark glass vase for wedding centrepieces.",
    description: "A breathtaking Phalaenopsis orchid arrangement featuring cascading purple and white blooms in a hand-crafted dark glass vase. This dramatic floral centrepiece creates an unforgettable impression at wedding banquets, reception halls, and bridal suites.",
    features: ["5–7 Orchid stems", "Sculpted dark glass vase", "Purple & white Phalaenopsis", "Long-lasting 3–4 weeks", "Delivery in protective casing"],
    rating: 4.9,
    reviews: 61,
    isNew: true
  },
  {
    id: 7,
    name: "Healing Orchids",
    price: 34.99,
    category: "Get-Well",
    flowerType: "Orchid",
    image: "images/blue_lily_elegance.jpg",
    summary: "Soft white orchid plant potted in a decorative ceramic — a gift that keeps giving.",
    description: "White Phalaenopsis orchids symbolize purity, health, and renewal. This potted orchid plant arrives in a premium black ceramic pot and will continue to bloom for up to 3 months with minimal care. An elegant and long-lasting get-well gift.",
    features: ["White Phalaenopsis orchid", "Premium black ceramic pot", "Blooms for 3+ months", "Care guide included", "No daily watering needed"],
    rating: 4.8,
    reviews: 72,
    isNew: false
  },
  {
    id: 8,
    name: "Orchid Sympathy Spray",
    price: 29.99,
    category: "Funerals",
    flowerType: "Orchid",
    image: "images/orchid_sympathy_spray.jpg",
    summary: "White orchid spray with green lily grass — serene and respectful.",
    description: "A serene and dignified orchid spray arrangement for expressing compassion and respect. White orchids surrounded by lily grass and soft white mums convey a message of peace and comfort during times of loss.",
    features: ["White orchid spray", "Lily grass accent", "White mum fillers", "Easel included", "Sympathy card printing"],
    rating: 4.7,
    reviews: 35,
    isNew: false
  },
  // ---- LILIES ----
  {
    id: 9,
    name: "White Lily Elegance",
    price: 24.99,
    category: "Funerals",
    flowerType: "Lily",
    image: "images/white_lily_bouquet.jpg",
    summary: "Classic white oriental lilies in a wicker basket with green foliage.",
    description: "White oriental lilies have long symbolized purity and transcendence. This classic arrangement presented in a natural wicker basket with green foliage offers a dignified tribute. The lilies will continue to open over 3–5 days, staying beautiful for the entire service.",
    features: ["White Oriental Lilies", "Natural wicker basket", "Green foliage filler", "3–5 days blooming", "Comes with condolence card"],
    rating: 4.6,
    reviews: 80,
    isNew: false
  },
  {
    id: 10,
    name: "Golden Anniversary Wreath",
    price: 39.99,
    category: "Anniversaries",
    flowerType: "Lily",
    image: "images/golden_anniversary_wreath.jpg",
    summary: "Golden asiatic lily wreath with cream roses on a gold wire frame.",
    description: "Celebrate 25 or 50 years together with this stunning golden anniversary wreath. Golden Asiatic lilies and cream roses are artfully arranged on a gold-toned wire frame, symbolizing the golden years of your journey together.",
    features: ["Golden Asiatic Lilies", "Cream roses", "Gold wire frame", "Diameter: 45cm", "Wall/door hanging ready"],
    rating: 4.7,
    reviews: 28,
    isNew: false
  },
  {
    id: 11,
    name: "Bridal Lily Cascade",
    price: 79.99,
    category: "Marriages",
    flowerType: "Lily",
    image: "images/bridal_lily_cascade.jpg",
    summary: "Dramatic cascading white lily bridal bouquet with pearls and silk ribbon.",
    description: "A breathtaking cascading bridal bouquet featuring white calla lilies, Oriental lilies and ivory roses with pearl pins and a silk white ribbon handle. Designed to trail elegantly as you walk down the aisle.",
    features: ["Calla & Oriental Lilies", "Ivory rose accents", "Pearl pin embellishments", "Silk ribbon handle", "Length: 65cm cascade"],
    rating: 4.9,
    reviews: 44,
    isNew: true
  },
  // ---- TULIPS ----
  {
    id: 12,
    name: "Pink Tulip Surprise",
    price: 22.99,
    category: "Birthdays",
    flowerType: "Tulip",
    image: "images/pink_tulip_surprise.jpg",
    summary: "20 fresh pink tulips wrapped in elegant dark velvet paper.",
    description: "A delightful birthday surprise of 20 fresh blush-pink tulips wrapped in luxurious dark velvet paper with a hot-pink satin ribbon. Tulips symbolize perfect love and happiness — an ideal birthday statement.",
    features: ["20 Blush Pink Tulips", "Dark velvet wrap", "Hot-pink satin ribbon", "Vase life: 5–7 days", "Birthday message card"],
    rating: 4.5,
    reviews: 66,
    isNew: false
  },
  {
    id: 13,
    name: "Tulip Festival Bouquet",
    price: 19.99,
    category: "Birthdays",
    flowerType: "Tulip",
    image: "images/tulip_festival.jpg",
    summary: "Mixed color tulip bouquet in 5 vibrant shades for a festive celebration.",
    description: "A joyful mix of 25 tulips in 5 vibrant colors — red, yellow, pink, purple, and white — creating a rainbow effect. This festive bouquet is perfect for cheerful celebrations and brings a burst of color to any room.",
    features: ["25 Mixed Color Tulips", "5 vibrant color varieties", "Kraft & cellophane wrap", "Height: approx. 45cm", "Includes color card info"],
    rating: 4.4,
    reviews: 55,
    isNew: false
  },
  {
    id: 14,
    name: "Spring Tulip Wedding Arch",
    price: 89.99,
    category: "Marriages",
    flowerType: "Tulip",
    image: "images/tulip_wedding_arch.jpg",
    summary: "Full 2m wedding arch dripping with white and blush tulips.",
    description: "Transform your wedding venue with this stunning 2-meter circular arch adorned with white and blush tulips, eucalyptus cascades and fairy lights. A romantic and modern backdrop for your ceremony and photoshoot.",
    features: ["300+ White & blush tulips", "Eucalyptus cascade", "Warm fairy lights", "2m diameter arch", "Setup included"],
    rating: 4.8,
    reviews: 22,
    isNew: true
  },
  // ---- SPECIALS ----
  {
    id: 18,
    name: "Orchid Sympathy Wreath",
    price: 44.99,
    category: "Funerals",
    flowerType: "Orchid",
    image: "images/orchid_sympathy_wreath.jpg",
    summary: "Majestic pure white orchid wreath for a serene and respectful tribute.",
    description: "A breathtaking 24-inch circular orchid wreath, featuring a dense arrangement of pure white Phalaenopsis orchids with delicate green accents. Designed to convey peace, purity, and profound respect during funeral ceremonies.",
    features: ["100+ Premium white orchids", "24-inch easel frame", "Minimalist tripod stand", "Serene and dignified", "Condolence card included"],
    rating: 4.7,
    reviews: 39,
    isNew: true
  },
  {
    id: 19,
    name: "Birthday Bloom Box",
    price: 34.99,
    category: "Birthdays",
    flowerType: "Rose",
    image: "images/birthday_bloom_box.jpg",
    summary: "Mixed roses, lilies and sunflowers in a luxury hatbox — the perfect birthday.",
    description: "The ultimate birthday gift box! A luxurious black hatbox overflowing with a curated mix of pink roses, white lilies, and mini sunflowers with eucalyptus greenery and confetti petals. An Instagram-worthy gift they'll never forget.",
    features: ["Mixed roses, lilies, sunflowers", "Luxury black hatbox", "Confetti petals", "Personalized tag included", "Keeps fresh for 5+ days"],
    rating: 4.8,
    reviews: 112,
    isNew: true
  },
  {
    id: 20,
    name: "Rose Gold Wedding Arch",
    price: 149.99,
    category: "Marriages",
    flowerType: "Rose",
    image: "images/wedding_arch_premium.jpg",
    summary: "2.5m wedding arch with 500+ premium roses, dried pampas and fairy lights.",
    description: "The crown jewel of wedding décor — a 2.5m circular arch densely covered with over 500 premium roses in ivory, blush and champagne tones. Accented with dried pampas grass, gold geometric rings and warm fairy lights for a truly magical backdrop.",
    features: ["500+ Premium roses", "Pampas grass accents", "Gold geometric rings", "Warm fairy lights", "2.5m arch + delivery + setup"],
    rating: 5.0,
    reviews: 15,
    isNew: true
  }
];

const CATEGORIES = [
  { id: "Birthdays",     image: "images/birthday_bloom_box.jpg", label: "Birthdays",     desc: "Make their day magical" },
  { id: "Anniversaries", image: "images/crimson_romance.jpg", label: "Anniversaries", desc: "Celebrate love milestones" },
  { id: "Marriages",     image: "images/wedding_arch_premium.jpg", label: "Marriages",     desc: "Dream wedding florals" },
  { id: "Funerals",      image: "images/white_lily_bouquet.jpg", label: "Sympathy",      desc: "Heartfelt tributes" },
  { id: "Get-Well",      image: "images/get_well_roses.jpg", label: "Get-Well",      desc: "Healing with nature" }
];

const FLOWER_TYPES = [
  { id: "Rose",      image: "images/crimson_romance.jpg", label: "Roses" },
  { id: "Lily",      image: "images/white_lily_bouquet.jpg", label: "Lilies" },
  { id: "Orchid",    image: "images/royal_orchid.jpg", label: "Orchids" },
  { id: "Tulip",     image: "images/pink_tulip_surprise.jpg", label: "Tulips" },
  { id: "Sunflower", image: "images/sunflower_birthday.jpg", label: "Sunflowers" },
];

// Fallback images per flower type
const FLOWER_FALLBACKS = {
  Rose: "images/rose_bouquet.png",
  Sunflower: "images/sunflower_bouquet.png",
  Orchid: "images/orchid_arrangement.png",
  Lily: "images/lily_arrangement.png",
  Tulip: "images/rose_bouquet.png",
};

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}
function getProductsByCategory(cat) {
  if (!cat || cat === "All") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === cat);
}
function getProductsByFlower(flower) {
  if (!flower || flower === "All") return PRODUCTS;
  return PRODUCTS.filter(p => p.flowerType === flower);
}
function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  let s = "★".repeat(full);
  if (half) s += "½";
  return s;
}
function formatPrice(p) {
  return "$" + parseFloat(p).toFixed(2);
}
function getImgFallback(product) {
  return FLOWER_FALLBACKS[product.flowerType] || "images/rose_bouquet.png";
}
