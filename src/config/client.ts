export const client = {
  // Business Details
  name: "Clearys Garden Care",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Winchester.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07596 701153",
  email: "",
  website: "",

  // Location
  address: "Winchester",
  city: "Winchester",
  county: "",
  postcode: "",
  basedIn: "Winchester",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "1",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Luke Phillips", rating: 5, text: "Connor laid a concrete base for a shed in our garden earlier this year.  The quote was reasonably priced and turnaround to job completion was very speedy.  Connor and his team were polite and punctual.  Very happy with the work!", date: "8 months ago" },
    { name: "Toby Darling", rating: 5, text: "Connor and his associate Brad put up some fencing in our garden this week (one day job). They worked extremely hard and in spite of technical difficulties completed the work to a high standard. They were excellent to deal with and the cost was very reasonable. I would recommend them for any similar type of work.", date: "a year ago" },
    { name: "Jay Ladher", rating: 5, text: "Great experience working with Conner and the team. Cleared and tidied an area of our garden, and laid new lawn and shrubs - it looks fantastic and is now the perfect BBQ area. Team were friendly and on time and at a reasonable price. Would highly recommend Clearys Garden company", date: "a year ago" },
    { name: "Beth N", rating: 5, text: "Delighted with the beech hedge reduction completed by Connor & his pal. Will definitely use his services again.", date: "a year ago" },
    { name: "Paul O’Mahoney", rating: 5, text: "Connor has completed several projects for us now and has done an excellent job every time. He is punctual, polite, does precisely what he says he’ll do, cleans up afterwards and all the work is completed to the highest standard. Highly reccommended.", date: "a year ago" },
    { name: "Jan Johnston", rating: 5, text: "We hired Connor to do some tree work in our elderly neighbor’s back garden. His work was excellent and very fairly priced. He and his partner were on time and cleaned up the garden beautifully. What impressed us the most was his kindness to our neighbor. She came out to assess the job and the two men couldn’t have been nicer to her. She was so pleased with their work. We highly recommend them!", date: "a year ago", badge: "Local Guide" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Clearys Garden Care | Landscaper in Winchester",
    description: "Professional landscaper in Winchester. 5.0-star rated on Google. Call for a free quote.",
  },
};
