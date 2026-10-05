const megaProjects = [

    // ==========================================
    // CITIES & GIGA DEVELOPMENTS
    // ==========================================

    {
        id: "neom",
        name: "NEOM",
        category: "city",
        price: 45000000000000,
        originalCost: "$500 billion+",
        location: "Saudi Arabia",
        status: "construction",
        availability: "limited"
    },

    {
        id: "the-line",
        name: "The Line",
        category: "city",
        price: 9000000000000,
        originalCost: "Hundreds of billions of dollars",
        location: "Saudi Arabia",
        status: "construction",
        availability: "limited"
    },

    {
        id: "new-murabba",
        name: "New Murabba",
        category: "city",
        price: 4500000000000,
        originalCost: "$50 billion",
        location: "Riyadh, Saudi Arabia",
        status: "construction",
        availability: "limited"
    },

    {
        id: "diriyah-gate",
        name: "Diriyah Gate",
        category: "city",
        price: 5750000000000,
        originalCost: "$63.9 billion",
        location: "Saudi Arabia",
        status: "construction",
        availability: "limited"
    },

    {
        id: "qiddiya",
        name: "Qiddiya",
        category: "tourism",
        price: 2250000000000,
        originalCost: "$25 billion",
        location: "Saudi Arabia",
        status: "construction",
        availability: "limited"
    },

    {
        id: "jeddah-central",
        name: "Jeddah Central",
        category: "city",
        price: 1800000000000,
        originalCost: "$20 billion",
        location: "Saudi Arabia",
        status: "construction",
        availability: "limited"
    },

    {
        id: "red-sea-project",
        name: "The Red Sea Project",
        category: "tourism",
        price: 2480000000000,
        originalCost: "$27.6 billion",
        location: "Saudi Arabia",
        status: "construction",
        availability: "limited"
    },


    // ==========================================
    // AIRPORTS
    // ==========================================

    {
        id: "al-maktoum-international",
        name: "Al Maktoum International Airport Expansion",
        category: "airport",
        price: 3480000000000,
        originalCost: "AED 128 billion",
        location: "Dubai, UAE",
        status: "construction",
        availability: "limited"
    },

    {
        id: "king-salman-international-airport",
        name: "King Salman International Airport",
        category: "airport",
        price: 2700000000000,
        originalCost: "$30 billion",
        location: "Riyadh, Saudi Arabia",
        status: "construction",
        availability: "limited"
    },

    {
        id: "beijing-daxing-airport",
        name: "Beijing Daxing International Airport",
        category: "airport",
        price: 180000000000,
        originalCost: "¥120 billion",
        location: "China",
        status: "operational",
        availability: "unlimited"
    },

    {
        id: "istanbul-airport",
        name: "Istanbul Airport",
        category: "airport",
        price: 420000000000,
        originalCost: "€12 billion",
        location: "Türkiye",
        status: "operational",
        availability: "unlimited"
    },


    // ==========================================
    // DUBAI TRANSPORT
    // ==========================================

    {
        id: "dubai-metro-gold-line",
        name: "Dubai Metro Gold Line",
        category: "rail",
        price: 930000000000,
        originalCost: "AED 34 billion",
        location: "Dubai, UAE",
        status: "planned",
        availability: "limited"
    },

    {
        id: "dubai-metro-blue-line",
        name: "Dubai Metro Blue Line",
        category: "rail",
        price: 560000000000,
        originalCost: "AED 20.5 billion",
        location: "Dubai, UAE",
        status: "construction",
        availability: "limited"
    },

    {
        id: "dubai-loop",
        name: "Dubai Loop",
        category: "rail",
        price: 55000000000,
        originalCost: "AED 2 billion",
        location: "Dubai, UAE",
        status: "construction",
        availability: "limited"
    },


    // ==========================================
    // CHINA
    // ==========================================

    {
        id: "medog-hydropower-station",
        name: "Medog Hydropower Station",
        category: "dam",
        price: 14000000000000,
        originalCost: "$137–170 billion",
        location: "Tibet, China",
        status: "construction",
        availability: "limited"
    },

    {
        id: "south-north-water-transfer",
        name: "South–North Water Transfer Project",
        category: "industrial",
        price: 7000000000000,
        originalCost: "Hundreds of billions of yuan",
        location: "China",
        status: "operational",
        availability: "unlimited"
    },

    {
        id: "hong-kong-zhuhai-macao-bridge",
        name: "Hong Kong–Zhuhai–Macao Bridge",
        category: "bridge",
        price: 120000000000,
        originalCost: "¥110 billion",
        location: "China",
        status: "operational",
        availability: "unlimited"
    },


    // ==========================================
    // INDIA
    // ==========================================

    {
        id: "mumbai-ahmedabad-high-speed-rail",
        name: "Mumbai–Ahmedabad High Speed Rail",
        category: "rail",
        price: 1100000000000,
        originalCost: "₹1.08 lakh crore",
        location: "India",
        status: "construction",
        availability: "limited"
    },

    {
        id: "delhi-mumbai-expressway",
        name: "Delhi–Mumbai Expressway",
        category: "rail",
        price: 1000000000000,
        originalCost: "About ₹1 lakh crore",
        location: "India",
        status: "construction",
        availability: "limited"
    },

    {
        id: "navi-mumbai-international-airport",
        name: "Navi Mumbai International Airport",
        category: "airport",
        price: 200000000000,
        originalCost: "₹20,000 crore+",
        location: "Maharashtra, India",
        status: "construction",
        availability: "limited"
    },

    {
        id: "ganga-expressway",
        name: "Ganga Expressway",
        category: "industrial",
        price: 360000000000,
        originalCost: "₹36,000 crore",
        location: "Uttar Pradesh, India",
        status: "construction",
        availability: "limited"
    },


    // ==========================================
    // EUROPE
    // ==========================================

    {
        id: "hs2",
        name: "HS2",
        category: "rail",
        price: 5000000000000,
        originalCost: "Multi-billion-pound programme",
        location: "United Kingdom",
        status: "construction",
        availability: "limited"
    },

    {
        id: "crossrail",
        name: "Crossrail / Elizabeth Line",
        category: "rail",
        price: 2800000000000,
        originalCost: "£18.9 billion",
        location: "United Kingdom",
        status: "operational",
        availability: "unlimited"
    },

    {
        id: "gotthard-base-tunnel",
        name: "Gotthard Base Tunnel",
        category: "bridge",
        price: 1100000000000,
        originalCost: "About $12 billion",
        location: "Switzerland",
        status: "operational",
        availability: "unlimited"
    },

    {
        id: "fehmarnbelt-tunnel",
        name: "Fehmarnbelt Fixed Link",
        category: "bridge",
        price: 1500000000000,
        originalCost: "€7 billion+",
        location: "Denmark–Germany",
        status: "construction",
        availability: "limited"
    },


    // ==========================================
    // ENERGY
    // ==========================================

    {
        id: "iter",
        name: "ITER",
        category: "energy",
        price: 2500000000000,
        originalCost: "Multi-billion-euro international project",
        location: "France",
        status: "construction",
        availability: "limited"
    },

    {
        id: "hinkley-point-c",
        name: "Hinkley Point C",
        category: "energy",
        price: 4000000000000,
        originalCost: "Tens of billions of pounds",
        location: "United Kingdom",
        status: "construction",
        availability: "limited"
    },

    {
        id: "barakah-nuclear-power-plant",
        name: "Barakah Nuclear Energy Plant",
        category: "energy",
        price: 900000000000,
        originalCost: "$24.4 billion",
        location: "UAE",
        status: "operational",
        availability: "unlimited"
    },

    {
        id: "mohammed-bin-rashid-solar-park",
        name: "Mohammed bin Rashid Al Maktoum Solar Park",
        category: "energy",
        price: 900000000000,
        originalCost: "AED 50 billion+ planned investment",
        location: "Dubai, UAE",
        status: "construction",
        availability: "limited"
    },


    // ==========================================
    // AMERICAS
    // ==========================================

    {
        id: "california-high-speed-rail",
        name: "California High-Speed Rail",
        category: "rail",
        price: 11000000000000,
        originalCost: "Tens of billions of dollars",
        location: "California, USA",
        status: "construction",
        availability: "limited"
    },

    {
        id: "second-avenue-subway",
        name: "Second Avenue Subway",
        category: "rail",
        price: 250000000000,
        originalCost: "$11 billion+ programme",
        location: "New York, USA",
        status: "construction",
        availability: "limited"
    },

    {
        id: "grand-paris-express",
        name: "Grand Paris Express",
        category: "rail",
        price: 5000000000000,
        originalCost: "€38 billion+",
        location: "France",
        status: "construction",
        availability: "limited"
    },


    // ==========================================
    // TOURISM / CITY
    // ==========================================

    {
        id: "grand-egyptian-museum",
        name: "Grand Egyptian Museum",
        category: "tourism",
        price: 90000000000,
        originalCost: "$1 billion+",
        location: "Giza, Egypt",
        status: "operational",
        availability: "unlimited"
    },

    {
        id: "dubailand",
        name: "Dubailand",
        category: "tourism",
        price: 5800000000000,
        originalCost: "$64.3 billion",
        location: "Dubai, UAE",
        status: "construction",
        availability: "limited"
    },

    {
        id: "qiddiya-six-flags",
        name: "Six Flags Qiddiya City",
        category: "tourism",
        price: 90000000000,
        originalCost: "Part of Qiddiya development",
        location: "Saudi Arabia",
        status: "construction",
        availability: "limited"
    },


    // ==========================================
    // LARGE DAMS / HYDRO
    // ==========================================

    {
        id: "three-gorges-dam",
        name: "Three Gorges Dam",
        category: "dam",
        price: 350000000000,
        originalCost: "Around $30 billion",
        location: "China",
        status: "operational",
        availability: "unlimited"
    },

    {
        id: "itaipu-dam",
        name: "Itaipu Dam",
        category: "dam",
        price: 180000000000,
        originalCost: "About $20 billion",
        location: "Brazil–Paraguay",
        status: "operational",
        availability: "unlimited"
    },


    // ==========================================
    // SPACE
    // ==========================================

    {
        id: "nasa-artemis",
        name: "NASA Artemis Programme",
        category: "space",
        price: 4000000000000,
        originalCost: "Multi-year programme cost",
        location: "United States",
        status: "construction",
        availability: "limited"
    },

    {
        id: "esa-space-programmes",
        name: "European Space Agency Programmes",
        category: "space",
        price: 1800000000000,
        originalCost: "Multi-year programme investment",
        location: "Europe",
        status: "construction",
        availability: "limited"
    }

];

console.log(
    `Mega Projects Vault loaded: ${megaProjects.length} projects`
);