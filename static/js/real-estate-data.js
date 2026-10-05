const realEstateItems = [

    {
        id: "antilia-mumbai",
        name: "Antilia",
        description: "Private luxury residence in Mumbai.",
        category: "mansion",
        price: 1000000000,
        type: "one",
        stock: 1
    },

    {
        id: "one-hyde-park-penthouse",
        name: "One Hyde Park Penthouse",
        description: "Luxury penthouse property in London.",
        category: "penthouse",
        price: 250000000,
        type: "one",
        stock: 1
    },

    {
        id: "villa-leopolda",
        name: "Villa Leopolda",
        description: "Historic luxury villa on the French Riviera.",
        category: "villa",
        price: 750000000,
        type: "one",
        stock: 1
    },

    {
        id: "les-palais-bulles",
        name: "Palais Bulles",
        description: "Distinctive private estate on the French Riviera.",
        category: "estate",
        price: 390000000,
        type: "one",
        stock: 1
    },

    {
        id: "the-holme-regents-park",
        name: "The Holme",
        description: "Historic private residence in Regent's Park, London.",
        category: "estate",
        price: 250000000,
        type: "one",
        stock: 1
    },

    {
        id: "opus-hong-kong",
        name: "Opus Hong Kong",
        description: "Ultra-luxury residential development in Hong Kong.",
        category: "development",
        price: 120000000,
        type: "limited",
        stock: 3
    },

    {
        id: "penthouse-432-park",
        name: "432 Park Avenue Penthouse",
        description: "Luxury penthouse in Manhattan.",
        category: "penthouse",
        price: 95000000,
        type: "limited",
        stock: 2
    },

    {
        id: "versailles-estate",
        name: "Versailles Estate",
        description: "Large-scale luxury residential estate.",
        category: "estate",
        price: 80000000,
        type: "one",
        stock: 1
    },

    {
        id: "hamptons-ocean-estate",
        name: "Hamptons Ocean Estate",
        description: "Private oceanfront luxury estate.",
        category: "estate",
        price: 75000000,
        type: "limited",
        stock: 4
    },

    {
        id: "beverly-hills-mansion",
        name: "Beverly Hills Grand Mansion",
        description: "Luxury mansion in Beverly Hills.",
        category: "mansion",
        price: 65000000,
        type: "limited",
        stock: 5
    },

    {
        id: "dubai-palm-villa",
        name: "Palm Jumeirah Signature Villa",
        description: "Ultra-luxury waterfront villa in Dubai.",
        category: "villa",
        price: 55000000,
        type: "limited",
        stock: 4
    },

    {
        id: "monaco-penthouse",
        name: "Monaco Grand Penthouse",
        description: "Luxury penthouse overlooking Monaco.",
        category: "penthouse",
        price: 50000000,
        type: "limited",
        stock: 3
    },

    {
        id: "miami-waterfront-estate",
        name: "Miami Waterfront Estate",
        description: "Private waterfront estate in Miami.",
        category: "estate",
        price: 45000000,
        type: "limited",
        stock: 5
    },

    {
        id: "malibu-cliffside-villa",
        name: "Malibu Cliffside Villa",
        description: "Private luxury villa overlooking the Pacific Ocean.",
        category: "villa",
        price: 42000000,
        type: "limited",
        stock: 4
    },

    {
        id: "aspen-mountain-estate",
        name: "Aspen Mountain Estate",
        description: "Luxury mountain property in Aspen.",
        category: "estate",
        price: 38000000,
        type: "limited",
        stock: 5
    },

    {
        id: "bel-air-modern-mansion",
        name: "Bel Air Modern Mansion",
        description: "Contemporary luxury residence in Los Angeles.",
        category: "mansion",
        price: 35000000,
        type: "limited",
        stock: 6
    },

    {
        id: "london-mayfair-penthouse",
        name: "Mayfair Luxury Penthouse",
        description: "High-end penthouse in London's Mayfair district.",
        category: "penthouse",
        price: 32000000,
        type: "limited",
        stock: 3
    },

    {
        id: "tuscany-private-estate",
        name: "Tuscan Private Estate",
        description: "Large private estate in Tuscany.",
        category: "estate",
        price: 30000000,
        type: "limited",
        stock: 5
    },

    {
        id: "cote-d-azur-villa",
        name: "Côte d'Azur Villa",
        description: "Luxury Mediterranean villa on the French Riviera.",
        category: "villa",
        price: 28000000,
        type: "limited",
        stock: 4
    },

    {
        id: "singapore-marina-penthouse",
        name: "Marina Bay Penthouse",
        description: "Luxury penthouse overlooking Singapore's Marina Bay.",
        category: "penthouse",
        price: 26000000,
        type: "limited",
        stock: 4
    },

    {
        id: "bahamas-private-island",
        name: "Bahamas Private Island",
        description: "Private island property in the Bahamas.",
        category: "private-island",
        price: 25000000,
        type: "one",
        stock: 1
    },

    {
        id: "fiji-private-island",
        name: "Fiji Private Island",
        description: "Private island retreat in Fiji.",
        category: "private-island",
        price: 22000000,
        type: "one",
        stock: 1
    },

    {
        id: "hawaii-ocean-estate",
        name: "Hawaii Ocean Estate",
        description: "Private luxury property overlooking the Pacific.",
        category: "estate",
        price: 20000000,
        type: "limited",
        stock: 4
    },

    {
        id: "paris-haussmann-residence",
        name: "Paris Haussmann Residence",
        description: "Luxury historic residence in Paris.",
        category: "estate",
        price: 18000000,
        type: "limited",
        stock: 3
    },

    {
        id: "sydney-harbour-penthouse",
        name: "Sydney Harbour Penthouse",
        description: "Luxury penthouse overlooking Sydney Harbour.",
        category: "penthouse",
        price: 17000000,
        type: "limited",
        stock: 4
    },

    {
        id: "capri-villa",
        name: "Capri Luxury Villa",
        description: "Mediterranean luxury villa on Capri.",
        category: "villa",
        price: 16000000,
        type: "limited",
        stock: 3
    },

    {
        id: "st-barts-villa",
        name: "St. Barts Ocean Villa",
        description: "Luxury Caribbean villa overlooking the sea.",
        category: "villa",
        price: 15000000,
        type: "limited",
        stock: 4
    },

    {
        id: "new-york-triplex",
        name: "Manhattan Luxury Triplex",
        description: "Ultra-premium multi-level residence in Manhattan.",
        category: "penthouse",
        price: 14000000,
        type: "limited",
        stock: 3
    },

    {
        id: "ibiza-clifftop-villa",
        name: "Ibiza Clifftop Villa",
        description: "Private luxury villa on the island of Ibiza.",
        category: "villa",
        price: 12500000,
        type: "limited",
        stock: 4
    },

    {
        id: "monaco-marina-residence",
        name: "Monaco Marina Residence",
        description: "Luxury residence overlooking Port Hercules.",
        category: "estate",
        price: 11000000,
        type: "limited",
        stock: 3
    }

];