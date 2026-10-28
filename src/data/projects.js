export const projects = [
  {
    id: "04", slug: "pljeskovac-016", title: "Pljeskovac 016",
    category: "real-world", categoryLabel: "REAL-WORLD", year: "2026", status: "COMPLETED",
    description: "A complete restaurant website for Pljeskovac 016, bringing the menu, ordering information and delivery zones into one responsive experience.",
    technologies: ["JavaScript", "HTML & CSS", "PHP", "Leaflet"],
    image: "/projects/pljeskovac-016/home.jpg",
    screenshots: ["/projects/pljeskovac-016/home.jpg", "/projects/pljeskovac-016/story.jpg", "/projects/pljeskovac-016/mobile.jpg"],
    github: null, live: null,
    features: ["Responsive restaurant website", "Food menu and ordering interface", "Interactive delivery zone map", "Local typography and image assets", "Shared PHP layout templates", "BizCore service integration"]
  },
  {
    id: "01",
    slug: "andjini-sladoledi",
    title: "Anđini sladoledi",
    category: "real-world",
    categoryLabel: "REAL-WORLD",
    year: "2026",
    status: "COMPLETED",
    description:
      "Web platform for an ice cream business featuring products, live location information, administration and an interactive assistant.",
    technologies: ["JavaScript", "Next.js", "CSS", "Supabase"],
    image:
        "/projects/andjini-sladoledi/andjini-sladoledi_home.png",

    screenshots: [
        "/projects/andjini-sladoledi/andjini-sladoledi_home.png",
        "/projects/andjini-sladoledi/andjini-sladoledi_location.png",
        "/projects/andjini-sladoledi/andjini-sladoledi_loading.png",
        "/projects/andjini-sladoledi/andjini-sladoledi_ponuda.png"
    ],
    github: null,
    live: null,
    features: [
        "Product management",
        "Admin dashboard",
        "Product availability",
        "Location information",
        "Interactive assistant"
    ]
  },

  {
    id: "02",
    slug: "andja-i-kolaci",
    title: "Anđa i kolači",
    category: "real-world",
    categoryLabel: "REAL-WORLD",
    year: "2026",
    status: "IN DEVELOPMENT",
    description:
      "A modern web platform for a confectionery business with product management, availability and customer contact features.",
    technologies: ["JavaScript", "Next.js", "CSS", "Supabase"],
    github: null,
    live: null,
    features: [
        "Dynamic product catalogue",
        "Product and category management",
        "Product availability control",
        "Admin dashboard",
        "Customer contact form",
        "Customer message management",
        "Supabase database integration",
        "Responsive user interface"
    ],
    image:
        "/projects/andja-i-kolaci/andja_home.png",

    screenshots: [
        "/projects/andja-i-kolaci/andja_home.png",
        "/projects/andja-i-kolaci/andja_ideja.png",
        "/projects/andja-i-kolaci/andja_dostupno.png"
    ]
  },

  {
    id: "05", slug: "meetogy", title: "MeetOgy", private: true,
    category: "personal", categoryLabel: "PRIVATE IDEA", year: "2026", status: "PRIVATE IDEA",
    description: "Currently a private project idea.",
    technologies: [], image: null, github: null, live: null, features: [],
  },
];

// Preserve existing detail URLs without featuring the archived project in the portfolio.
export const archivedProjects = [
  {
    id: "03",
    slug: "amongmp",
    title: "AmongMP",
    category: "personal",
    categoryLabel: "PERSONAL",
    year: "2026",
    status: "IN DEVELOPMENT",
    description:
      "A multiplayer server project with custom gameplay systems, roles and database integration.",
    technologies: ["JavaScript", "SQL"],
    image: null,
    github: null,
    live: null,
    features: [
        "Custom multiplayer server",
        "Player account system",
        "MySQL database integration",
        "Custom player roles",
        "Gameplay command system",
        "Persistent player data",
        "Server-side game logic",
        "Custom gameplay mechanics"
    ]
  },
];
