const aviationItems = [

    /* =========================================
       PRIVATE / BUSINESS JETS
    ========================================== */

    {
        id: "gulfstream-g700",
        name: "Gulfstream G700",
        manufacturer: "Gulfstream",
        category: "private-jets",
        price: 78000000,
        type: "limited",
        stock: 8,
        description: "Ultra-long-range Gulfstream business jet."
    },

    {
        id: "gulfstream-g800",
        name: "Gulfstream G800",
        manufacturer: "Gulfstream",
        category: "private-jets",
        price: 82000000,
        type: "limited",
        stock: 7,
        description: "Ultra-long-range flagship business aircraft."
    },

    {
        id: "gulfstream-g650",
        name: "Gulfstream G650",
        manufacturer: "Gulfstream",
        category: "private-jets",
        price: 65000000,
        type: "unlimited",
        description: "Long-range Gulfstream business jet."
    },

    {
        id: "gulfstream-g650er",
        name: "Gulfstream G650ER",
        manufacturer: "Gulfstream",
        category: "private-jets",
        price: 70000000,
        type: "limited",
        stock: 12,
        description: "Extended-range Gulfstream business jet."
    },

    {
        id: "gulfstream-g600",
        name: "Gulfstream G600",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 58000000,
        type: "unlimited",
        description: "Long-range Gulfstream business aircraft."
    },

    {
        id: "gulfstream-g500",
        name: "Gulfstream G500",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 55000000,
        type: "unlimited",
        description: "Gulfstream large-cabin business jet."
    },

    {
        id: "gulfstream-g550",
        name: "Gulfstream G550",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 50000000,
        type: "unlimited",
        description: "Long-range Gulfstream aircraft."
    },

    {
        id: "gulfstream-g450",
        name: "Gulfstream G450",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 42000000,
        type: "unlimited",
        description: "Large-cabin Gulfstream business jet."
    },

    {
        id: "gulfstream-g400",
        name: "Gulfstream G400",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 46000000,
        type: "limited",
        stock: 20,
        description: "Gulfstream large-cabin business jet."
    },

    {
        id: "gulfstream-g280",
        name: "Gulfstream G280",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 29000000,
        type: "unlimited",
        description: "Super-midsize Gulfstream business jet."
    },

    {
        id: "gulfstream-g200",
        name: "Gulfstream G200",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 18000000,
        type: "unlimited",
        description: "Gulfstream business aircraft."
    },

    {
        id: "gulfstream-g150",
        name: "Gulfstream G150",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 12000000,
        type: "unlimited",
        description: "Light Gulfstream business jet."
    },

    {
        id: "bombardier-global-8000",
        name: "Bombardier Global 8000",
        manufacturer: "Bombardier",
        category: "private-jets",
        price: 78000000,
        type: "limited",
        stock: 5,
        description: "Ultra-long-range Bombardier business jet."
    },

    {
        id: "bombardier-global-7500",
        name: "Bombardier Global 7500",
        manufacturer: "Bombardier",
        category: "private-jets",
        price: 75000000,
        type: "limited",
        stock: 9,
        description: "Long-range Bombardier flagship business jet."
    },

    {
        id: "bombardier-global-6500",
        name: "Bombardier Global 6500",
        manufacturer: "Bombardier",
        category: "business-jets",
        price: 62000000,
        type: "unlimited",
        description: "Long-range Global business aircraft."
    },

    {
        id: "bombardier-global-6000",
        name: "Bombardier Global 6000",
        manufacturer: "Bombardier",
        category: "business-jets",
        price: 55000000,
        type: "unlimited",
        description: "Long-range Global business jet."
    },

    {
        id: "bombardier-global-5500",
        name: "Bombardier Global 5500",
        manufacturer: "Bombardier",
        category: "business-jets",
        price: 52000000,
        type: "unlimited",
        description: "Long-range Bombardier business aircraft."
    },

    {
        id: "bombardier-global-5000",
        name: "Bombardier Global 5000",
        manufacturer: "Bombardier",
        category: "business-jets",
        price: 48000000,
        type: "unlimited",
        description: "Large-cabin Bombardier business jet."
    },

    {
        id: "bombardier-challenger-3500",
        name: "Bombardier Challenger 3500",
        manufacturer: "Bombardier",
        category: "business-jets",
        price: 33000000,
        type: "unlimited",
        description: "Super-midsize Challenger business jet."
    },

    {
        id: "bombardier-challenger-350",
        name: "Bombardier Challenger 350",
        manufacturer: "Bombardier",
        category: "business-jets",
        price: 28000000,
        type: "unlimited",
        description: "Super-midsize Challenger business aircraft."
    },

    {
        id: "bombardier-challenger-650",
        name: "Bombardier Challenger 650",
        manufacturer: "Bombardier",
        category: "business-jets",
        price: 32000000,
        type: "unlimited",
        description: "Large-cabin Challenger business jet."
    },

    {
        id: "bombardier-challenger-605",
        name: "Bombardier Challenger 605",
        manufacturer: "Bombardier",
        category: "business-jets",
        price: 25000000,
        type: "unlimited",
        description: "Large-cabin business aircraft."
    },

    {
        id: "bombardier-learjet-75",
        name: "Bombardier Learjet 75",
        manufacturer: "Bombardier",
        category: "business-jets",
        price: 13000000,
        type: "unlimited",
        description: "Learjet business aircraft."
    },

    {
        id: "embraer-praetor-600",
        name: "Embraer Praetor 600",
        manufacturer: "Embraer",
        category: "business-jets",
        price: 26000000,
        type: "unlimited",
        description: "Super-midsize Embraer business jet."
    },

    {
        id: "embraer-praetor-500",
        name: "Embraer Praetor 500",
        manufacturer: "Embraer",
        category: "business-jets",
        price: 22000000,
        type: "unlimited",
        description: "Midsize Embraer business jet."
    },

    {
        id: "embraer-legacy-650",
        name: "Embraer Legacy 650",
        manufacturer: "Embraer",
        category: "business-jets",
        price: 25000000,
        type: "unlimited",
        description: "Large-cabin Embraer business jet."
    },

    {
        id: "embraer-legacy-500",
        name: "Embraer Legacy 500",
        manufacturer: "Embraer",
        category: "business-jets",
        price: 19000000,
        type: "unlimited",
        description: "Midsize Embraer business jet."
    },

    {
        id: "embraer-legacy-450",
        name: "Embraer Legacy 450",
        manufacturer: "Embraer",
        category: "business-jets",
        price: 16000000,
        type: "unlimited",
        description: "Midsize Embraer business aircraft."
    },

    {
        id: "cessna-citation-longitude",
        name: "Cessna Citation Longitude",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 30000000,
        type: "unlimited",
        description: "Super-midsize Citation business jet."
    },

    {
        id: "cessna-citation-latitude",
        name: "Cessna Citation Latitude",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 19000000,
        type: "unlimited",
        description: "Midsize Citation business jet."
    },

    {
        id: "cessna-citation-sovereign",
        name: "Cessna Citation Sovereign+",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 19000000,
        type: "unlimited",
        description: "Super-midsize business aircraft."
    },

    {
        id: "cessna-citation-x",
        name: "Cessna Citation X",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 23000000,
        type: "unlimited",
        description: "High-speed business jet."
    },

    {
        id: "cessna-citation-cj4",
        name: "Cessna Citation CJ4",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 11000000,
        type: "unlimited",
        description: "Light business jet."
    },

    {
        id: "cessna-citation-cj3",
        name: "Cessna Citation CJ3",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 9000000,
        type: "unlimited",
        description: "Light Citation business jet."
    },

    {
        id: "cessna-citation-cj2",
        name: "Cessna Citation CJ2",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 7000000,
        type: "unlimited",
        description: "Light business aircraft."
    },

    {
        id: "cessna-citation-m2",
        name: "Cessna Citation M2",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 6000000,
        type: "unlimited",
        description: "Light Citation jet."
    },

    {
        id: "cessna-citation-ascend",
        name: "Cessna Citation Ascend",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 21000000,
        type: "limited",
        stock: 25,
        description: "Next-generation Citation business jet."
    },

    {
        id: "dassault-falcon-10x",
        name: "Dassault Falcon 10X",
        manufacturer: "Dassault",
        category: "private-jets",
        price: 75000000,
        type: "limited",
        stock: 6,
        description: "Ultra-long-range Falcon business jet."
    },

    {
        id: "dassault-falcon-8x",
        name: "Dassault Falcon 8X",
        manufacturer: "Dassault",
        category: "private-jets",
        price: 60000000,
        type: "limited",
        stock: 10,
        description: "Long-range tri-engine Falcon."
    },

    {
        id: "dassault-falcon-7x",
        name: "Dassault Falcon 7X",
        manufacturer: "Dassault",
        category: "private-jets",
        price: 55000000,
        type: "unlimited",
        description: "Long-range Falcon business aircraft."
    },

    {
        id: "dassault-falcon-6x",
        name: "Dassault Falcon 6X",
        manufacturer: "Dassault",
        category: "private-jets",
        price: 53000000,
        type: "limited",
        stock: 15,
        description: "Large-cabin Falcon business jet."
    },

    {
        id: "dassault-falcon-900lx",
        name: "Dassault Falcon 900LX",
        manufacturer: "Dassault",
        category: "business-jets",
        price: 45000000,
        type: "unlimited",
        description: "Tri-engine Falcon business jet."
    },

    {
        id: "dassault-falcon-8",
        name: "Dassault Falcon 8",
        manufacturer: "Dassault",
        category: "business-jets",
        price: 30000000,
        type: "unlimited",
        description: "Falcon business aircraft."
    },

    {
        id: "honda-jet-elite-ii",
        name: "HondaJet Elite II",
        manufacturer: "Honda Aircraft",
        category: "business-jets",
        price: 7000000,
        type: "unlimited",
        description: "Light Honda business jet."
    },

    {
        id: "pilatus-pc-24",
        name: "Pilatus PC-24",
        manufacturer: "Pilatus",
        category: "business-jets",
        price: 11000000,
        type: "unlimited",
        description: "Super versatile light business jet."
    },

    {
        id: "pilatus-pc-12",
        name: "Pilatus PC-12",
        manufacturer: "Pilatus",
        category: "turboprops",
        price: 6000000,
        type: "unlimited",
        description: "Single-engine utility turboprop."
    },


    /* =========================================
       VIP / COMMERCIAL AIRLINERS
    ========================================== */

    {
        id: "airbus-acj350",
        name: "Airbus ACJ350",
        manufacturer: "Airbus",
        category: "vip-airliners",
        price: 350000000,
        type: "one",
        stock: 1,
        description: "VIP wide-body Airbus aircraft."
    },

    {
        id: "airbus-acj330neo",
        name: "Airbus ACJ330neo",
        manufacturer: "Airbus",
        category: "vip-airliners",
        price: 300000000,
        type: "one",
        stock: 1,
        description: "VIP Airbus wide-body aircraft."
    },

    {
        id: "airbus-acj319neo",
        name: "Airbus ACJ319neo",
        manufacturer: "Airbus",
        category: "vip-airliners",
        price: 110000000,
        type: "limited",
        stock: 3,
        description: "VIP single-aisle Airbus aircraft."
    },

    {
        id: "airbus-acj320neo",
        name: "Airbus ACJ320neo",
        manufacturer: "Airbus",
        category: "vip-airliners",
        price: 120000000,
        type: "limited",
        stock: 4,
        description: "VIP Airbus narrow-body aircraft."
    },

    {
        id: "airbus-a380",
        name: "Airbus A380",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 450000000,
        type: "one",
        stock: 1,
        description: "Iconic double-deck wide-body airliner."
    },

    {
        id: "airbus-a350-1000",
        name: "Airbus A350-1000",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 370000000,
        type: "limited",
        stock: 4,
        description: "Long-range Airbus wide-body aircraft."
    },

    {
        id: "airbus-a350-900",
        name: "Airbus A350-900",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 320000000,
        type: "limited",
        stock: 5,
        description: "Long-range Airbus wide-body airliner."
    },

    {
        id: "airbus-a330-900",
        name: "Airbus A330-900",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 290000000,
        type: "limited",
        stock: 6,
        description: "Airbus wide-body airliner."
    },

    {
        id: "airbus-a330-800",
        name: "Airbus A330-800",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 270000000,
        type: "limited",
        stock: 6,
        description: "Long-range Airbus wide-body aircraft."
    },

    {
        id: "airbus-a321xlr",
        name: "Airbus A321XLR",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 140000000,
        type: "unlimited",
        description: "Extended-range single-aisle airliner."
    },

    {
        id: "airbus-a321neo",
        name: "Airbus A321neo",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 125000000,
        type: "unlimited",
        description: "Airbus narrow-body airliner."
    },

    {
        id: "airbus-a320neo",
        name: "Airbus A320neo",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 110000000,
        type: "unlimited",
        description: "Airbus narrow-body airliner."
    },

    {
        id: "airbus-a319neo",
        name: "Airbus A319neo",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 105000000,
        type: "unlimited",
        description: "Airbus narrow-body airliner."
    },

    {
        id: "airbus-a220-300",
        name: "Airbus A220-300",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 85000000,
        type: "unlimited",
        description: "Modern single-aisle airliner."
    },

    {
        id: "airbus-a220-100",
        name: "Airbus A220-100",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 75000000,
        type: "unlimited",
        description: "Compact Airbus single-aisle airliner."
    },

    {
        id: "boeing-747-8",
        name: "Boeing 747-8",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 420000000,
        type: "one",
        stock: 1,
        description: "Iconic four-engine Boeing wide-body aircraft."
    },

    {
        id: "boeing-777-9",
        name: "Boeing 777-9",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 440000000,
        type: "limited",
        stock: 3,
        description: "Next-generation Boeing wide-body aircraft."
    },

    {
        id: "boeing-777-8",
        name: "Boeing 777-8",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 410000000,
        type: "limited",
        stock: 4,
        description: "Long-range Boeing wide-body aircraft."
    },

    {
        id: "boeing-777-300er",
        name: "Boeing 777-300ER",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 330000000,
        type: "unlimited",
        description: "Long-range Boeing wide-body airliner."
    },

    {
        id: "boeing-777f",
        name: "Boeing 777F",
        manufacturer: "Boeing",
        category: "cargo",
        price: 300000000,
        type: "limited",
        stock: 8,
        description: "Long-range Boeing freighter."
    },

    {
        id: "boeing-787-10",
        name: "Boeing 787-10 Dreamliner",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 280000000,
        type: "unlimited",
        description: "Large Dreamliner wide-body aircraft."
    },

    {
        id: "boeing-787-9",
        name: "Boeing 787-9 Dreamliner",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 260000000,
        type: "unlimited",
        description: "Long-range Dreamliner aircraft."
    },

    {
        id: "boeing-787-8",
        name: "Boeing 787-8 Dreamliner",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 230000000,
        type: "unlimited",
        description: "Long-range Boeing Dreamliner."
    },

    {
        id: "boeing-767-300er",
        name: "Boeing 767-300ER",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 180000000,
        type: "unlimited",
        description: "Twin-engine Boeing wide-body airliner."
    },

    {
        id: "boeing-767f",
        name: "Boeing 767F",
        manufacturer: "Boeing",
        category: "cargo",
        price: 190000000,
        type: "limited",
        stock: 12,
        description: "Boeing wide-body freighter."
    },

    {
        id: "boeing-737-max-10",
        name: "Boeing 737 MAX 10",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 140000000,
        type: "unlimited",
        description: "Largest 737 MAX variant."
    },

    {
        id: "boeing-737-max-9",
        name: "Boeing 737 MAX 9",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 130000000,
        type: "unlimited",
        description: "Boeing narrow-body airliner."
    },

    {
        id: "boeing-737-max-8",
        name: "Boeing 737 MAX 8",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 120000000,
        type: "unlimited",
        description: "Popular Boeing narrow-body airliner."
    },

    {
        id: "boeing-737-max-7",
        name: "Boeing 737 MAX 7",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 110000000,
        type: "unlimited",
        description: "Compact Boeing 737 MAX variant."
    },


    /* =========================================
       REGIONAL / TURBOPROP
    ========================================== */

    {
        id: "atr-72-600",
        name: "ATR 72-600",
        manufacturer: "ATR",
        category: "turboprops",
        price: 28000000,
        type: "unlimited",
        description: "Twin-engine regional turboprop."
    },

    {
        id: "atr-42-600",
        name: "ATR 42-600",
        manufacturer: "ATR",
        category: "turboprops",
        price: 20000000,
        type: "unlimited",
        description: "Regional twin-engine turboprop."
    },

    {
        id: "dash-8-q400",
        name: "Dash 8 Q400",
        manufacturer: "De Havilland Canada",
        category: "turboprops",
        price: 32000000,
        type: "unlimited",
        description: "High-speed regional turboprop."
    },

    {
        id: "dash-8-300",
        name: "Dash 8-300",
        manufacturer: "De Havilland Canada",
        category: "turboprops",
        price: 18000000,
        type: "unlimited",
        description: "Regional turboprop aircraft."
    },

    {
        id: "dash-8-200",
        name: "Dash 8-200",
        manufacturer: "De Havilland Canada",
        category: "turboprops",
        price: 14000000,
        type: "unlimited",
        description: "Regional turboprop aircraft."
    },

    {
        id: "de-havilland-twin-otter",
        name: "DHC-6 Twin Otter",
        manufacturer: "De Havilland Canada",
        category: "turboprops",
        price: 8000000,
        type: "unlimited",
        description: "Legendary utility turboprop."
    },

    {
        id: "embraer-e195-e2",
        name: "Embraer E195-E2",
        manufacturer: "Embraer",
        category: "commercial-airliners",
        price: 70000000,
        type: "unlimited",
        description: "Modern regional jet."
    },

    {
        id: "embraer-e190-e2",
        name: "Embraer E190-E2",
        manufacturer: "Embraer",
        category: "commercial-airliners",
        price: 65000000,
        type: "unlimited",
        description: "Modern regional jet."
    },

    {
        id: "embraer-e175",
        name: "Embraer E175",
        manufacturer: "Embraer",
        category: "commercial-airliners",
        price: 55000000,
        type: "unlimited",
        description: "Regional jet aircraft."
    },

    {
        id: "embraer-e170",
        name: "Embraer E170",
        manufacturer: "Embraer",
        category: "commercial-airliners",
        price: 48000000,
        type: "unlimited",
        description: "Regional passenger jet."
    },


    /* =========================================
       HELICOPTERS
    ========================================== */

    {
        id: "airbus-h160",
        name: "Airbus H160",
        manufacturer: "Airbus Helicopters",
        category: "helicopters",
        price: 15000000,
        type: "limited",
        stock: 25,
        description: "Modern medium twin-engine helicopter."
    },

    {
        id: "airbus-h175",
        name: "Airbus H175",
        manufacturer: "Airbus Helicopters",
        category: "helicopters",
        price: 17000000,
        type: "limited",
        stock: 20,
        description: "Medium-lift helicopter."
    },

    {
        id: "airbus-h145",
        name: "Airbus H145",
        manufacturer: "Airbus Helicopters",
        category: "helicopters",
        price: 10000000,
        type: "unlimited",
        description: "Twin-engine utility helicopter."
    },

    {
        id: "airbus-h135",
        name: "Airbus H135",
        manufacturer: "Airbus Helicopters",
        category: "helicopters",
        price: 8000000,
        type: "unlimited",
        description: "Light twin-engine helicopter."
    },

    {
        id: "airbus-h125",
        name: "Airbus H125",
        manufacturer: "Airbus Helicopters",
        category: "helicopters",
        price: 5000000,
        type: "unlimited",
        description: "Single-engine utility helicopter."
    },

    {
        id: "leonardo-aw139",
        name: "Leonardo AW139",
        manufacturer: "Leonardo",
        category: "helicopters",
        price: 12000000,
        type: "unlimited",
        description: "Medium twin-engine helicopter."
    },

    {
        id: "leonardo-aw169",
        name: "Leonardo AW169",
        manufacturer: "Leonardo",
        category: "helicopters",
        price: 9000000,
        type: "unlimited",
        description: "Light-medium twin-engine helicopter."
    },

    {
        id: "leonardo-aw189",
        name: "Leonardo AW189",
        manufacturer: "Leonardo",
        category: "helicopters",
        price: 15000000,
        type: "limited",
        stock: 15,
        description: "Super-medium helicopter."
    },

    {
        id: "leonardo-aw101",
        name: "Leonardo AW101",
        manufacturer: "Leonardo",
        category: "helicopters",
        price: 20000000,
        type: "limited",
        stock: 8,
        description: "Large multi-role helicopter."
    },

    {
        id: "sikorsky-s76",
        name: "Sikorsky S-76",
        manufacturer: "Sikorsky",
        category: "helicopters",
        price: 13000000,
        type: "unlimited",
        description: "Premium medium helicopter."
    },

    {
        id: "sikorsky-s92",
        name: "Sikorsky S-92",
        manufacturer: "Sikorsky",
        category: "helicopters",
        price: 18000000,
        type: "limited",
        stock: 10,
        description: "Large transport helicopter."
    },

    {
        id: "sikorsky-s70",
        name: "Sikorsky S-70",
        manufacturer: "Sikorsky",
        category: "military",
        price: 25000000,
        type: "limited",
        stock: 5,
        description: "Military utility helicopter family."
    },

    {
        id: "bell-429",
        name: "Bell 429",
        manufacturer: "Bell",
        category: "helicopters",
        price: 8000000,
        type: "unlimited",
        description: "Light twin-engine helicopter."
    },

    {
        id: "bell-525",
        name: "Bell 525 Relentless",
        manufacturer: "Bell",
        category: "helicopters",
        price: 15000000,
        type: "limited",
        stock: 10,
        description: "Super-medium helicopter."
    },

    {
        id: "bell-412",
        name: "Bell 412",
        manufacturer: "Bell",
        category: "helicopters",
        price: 7000000,
        type: "unlimited",
        description: "Utility helicopter."
    },

    {
        id: "bell-407",
        name: "Bell 407",
        manufacturer: "Bell",
        category: "helicopters",
        price: 5000000,
        type: "unlimited",
        description: "Single-engine helicopter."
    },

    {
        id: "bell-206",
        name: "Bell 206",
        manufacturer: "Bell",
        category: "helicopters",
        price: 3000000,
        type: "unlimited",
        description: "Classic light helicopter."
    },

    {
        id: "robinson-r66",
        name: "Robinson R66",
        manufacturer: "Robinson",
        category: "helicopters",
        price: 1000000,
        type: "unlimited",
        description: "Five-seat turbine helicopter."
    },

    {
        id: "robinson-r44",
        name: "Robinson R44",
        manufacturer: "Robinson",
        category: "helicopters",
        price: 700000,
        type: "unlimited",
        description: "Four-seat piston helicopter."
    },

    {
        id: "robinson-r22",
        name: "Robinson R22",
        manufacturer: "Robinson",
        category: "helicopters",
        price: 400000,
        type: "unlimited",
        description: "Light two-seat helicopter."
    },


    /* =========================================
       CARGO AIRCRAFT
    ========================================== */

    {
        id: "airbus-beluga-xl",
        name: "Airbus BelugaXL",
        manufacturer: "Airbus",
        category: "cargo",
        price: 350000000,
        type: "one",
        stock: 1,
        description: "Specialized Airbus oversized cargo aircraft."
    },

    {
        id: "airbus-beluga",
        name: "Airbus Beluga",
        manufacturer: "Airbus",
        category: "cargo",
        price: 250000000,
        type: "one",
        stock: 1,
        description: "Iconic Airbus oversized cargo aircraft."
    },

    {
        id: "boeing-747-8f",
        name: "Boeing 747-8F",
        manufacturer: "Boeing",
        category: "cargo",
        price: 350000000,
        type: "limited",
        stock: 5,
        description: "Large four-engine cargo aircraft."
    },

    {
        id: "boeing-747-400f",
        name: "Boeing 747-400F",
        manufacturer: "Boeing",
        category: "cargo",
        price: 250000000,
        type: "limited",
        stock: 8,
        description: "Four-engine wide-body freighter."
    },

    {
        id: "boeing-777f",
        name: "Boeing 777 Freighter",
        manufacturer: "Boeing",
        category: "cargo",
        price: 300000000,
        type: "limited",
        stock: 8,
        description: "Twin-engine long-range freighter."
    },

    {
        id: "antonov-an-124",
        name: "Antonov An-124",
        manufacturer: "Antonov",
        category: "cargo",
        price: 250000000,
        type: "one",
        stock: 1,
        description: "Heavy strategic cargo aircraft."
    },

    {
        id: "antonov-an-225",
        name: "Antonov An-225 Mriya",
        manufacturer: "Antonov",
        category: "ultra-rare",
        price: 1000000000,
        type: "one",
        stock: 1,
        description: "Historic ultra-heavy cargo aircraft."
    },

    {
        id: "antonov-an-22",
        name: "Antonov An-22",
        manufacturer: "Antonov",
        category: "cargo",
        price: 150000000,
        type: "one",
        stock: 1,
        description: "Heavy turboprop cargo aircraft."
    },

    {
        id: "lockheed-c5m",
        name: "Lockheed C-5M Super Galaxy",
        manufacturer: "Lockheed Martin",
        category: "military",
        price: 500000000,
        type: "one",
        stock: 1,
        description: "Heavy military transport aircraft."
    },

    {
        id: "boeing-c17",
        name: "Boeing C-17 Globemaster III",
        manufacturer: "Boeing",
        category: "military",
        price: 220000000,
        type: "limited",
        stock: 3,
        description: "Strategic military transport aircraft."
    },


    /* =========================================
       SUPERSONIC / HISTORIC
    ========================================== */

    {
        id: "concorde",
        name: "Aérospatiale-BAC Concorde",
        manufacturer: "Aérospatiale / BAC",
        category: "supersonic",
        price: 500000000,
        type: "one",
        stock: 1,
        description: "Legendary supersonic passenger aircraft."
    },

    {
        id: "tupolev-tu144",
        name: "Tupolev Tu-144",
        manufacturer: "Tupolev",
        category: "supersonic",
        price: 400000000,
        type: "one",
        stock: 1,
        description: "Historic supersonic passenger aircraft."
    },

    {
        id: "boeing-xb-1",
        name: "Boom XB-1",
        manufacturer: "Boom Supersonic",
        category: "experimental",
        price: 200000000,
        type: "one",
        stock: 1,
        description: "Experimental supersonic demonstrator."
    },

    {
        id: "bell-x1",
        name: "Bell X-1",
        manufacturer: "Bell",
        category: "historic",
        price: 100000000,
        type: "one",
        stock: 1,
        description: "Historic experimental aircraft."
    },

    {
        id: "lockheed-sr71",
        name: "Lockheed SR-71 Blackbird",
        manufacturer: "Lockheed",
        category: "historic",
        price: 1000000000,
        type: "one",
        stock: 1,
        description: "Legendary high-speed reconnaissance aircraft."
    },

    {
        id: "lockheed-u2",
        name: "Lockheed U-2",
        manufacturer: "Lockheed",
        category: "military",
        price: 250000000,
        type: "limited",
        stock: 2,
        description: "High-altitude reconnaissance aircraft."
    },


    /* =========================================
       MILITARY AIRCRAFT
    ========================================== */

    {
        id: "f35a",
        name: "Lockheed Martin F-35A Lightning II",
        manufacturer: "Lockheed Martin",
        category: "military",
        price: 100000000,
        type: "limited",
        stock: 10,
        description: "Advanced fifth-generation fighter aircraft."
    },

    {
        id: "f35b",
        name: "Lockheed Martin F-35B Lightning II",
        manufacturer: "Lockheed Martin",
        category: "military",
        price: 110000000,
        type: "limited",
        stock: 8,
        description: "STOVL fifth-generation fighter aircraft."
    },

    {
        id: "f35c",
        name: "Lockheed Martin F-35C Lightning II",
        manufacturer: "Lockheed Martin",
        category: "military",
        price: 110000000,
        type: "limited",
        stock: 8,
        description: "Carrier-based fifth-generation fighter."
    },

    {
        id: "f22-raptor",
        name: "Lockheed Martin F-22 Raptor",
        manufacturer: "Lockheed Martin",
        category: "military",
        price: 150000000,
        type: "limited",
        stock: 3,
        description: "Fifth-generation air-superiority fighter."
    },

    {
        id: "f16-fighting-falcon",
        name: "General Dynamics F-16 Fighting Falcon",
        manufacturer: "General Dynamics",
        category: "military",
        price: 80000000,
        type: "limited",
        stock: 10,
        description: "Multirole fighter aircraft."
    },

    {
        id: "f15e-strike-eagle",
        name: "Boeing F-15E Strike Eagle",
        manufacturer: "Boeing",
        category: "military",
        price: 95000000,
        type: "limited",
        stock: 5,
        description: "Multirole strike fighter."
    },

    {
        id: "f18-super-hornet",
        name: "Boeing F/A-18E Super Hornet",
        manufacturer: "Boeing",
        category: "military",
        price: 70000000,
        type: "limited",
        stock: 8,
        description: "Carrier-based multirole fighter."
    },

    {
        id: "eurofighter-typhoon",
        name: "Eurofighter Typhoon",
        manufacturer: "Eurofighter",
        category: "military",
        price: 110000000,
        type: "limited",
        stock: 5,
        description: "European multirole fighter aircraft."
    },

    {
        id: "rafale",
        name: "Dassault Rafale",
        manufacturer: "Dassault",
        category: "military",
        price: 100000000,
        type: "limited",
        stock: 6,
        description: "French multirole fighter aircraft."
    },

    {
        id: "mirage-2000",
        name: "Dassault Mirage 2000",
        manufacturer: "Dassault",
        category: "military",
        price: 70000000,
        type: "limited",
        stock: 8,
        description: "French multirole fighter aircraft."
    },

    {
        id: "sukhoi-su57",
        name: "Sukhoi Su-57",
        manufacturer: "Sukhoi",
        category: "military",
        price: 100000000,
        type: "limited",
        stock: 5,
        description: "Russian fifth-generation fighter."
    },

    {
        id: "sukhoi-su35",
        name: "Sukhoi Su-35",
        manufacturer: "Sukhoi",
        category: "military",
        price: 85000000,
        type: "limited",
        stock: 8,
        description: "Advanced multirole fighter."
    },

    {
        id: "sukhoi-su30sm",
        name: "Sukhoi Su-30SM",
        manufacturer: "Sukhoi",
        category: "military",
        price: 65000000,
        type: "limited",
        stock: 10,
        description: "Twin-engine multirole fighter."
    },

    {
        id: "mig-35",
        name: "Mikoyan MiG-35",
        manufacturer: "Mikoyan",
        category: "military",
        price: 55000000,
        type: "limited",
        stock: 10,
        description: "Multirole fighter aircraft."
    },

    {
        id: "gripen-e",
        name: "Saab JAS 39 Gripen E",
        manufacturer: "Saab",
        category: "military",
        price: 75000000,
        type: "limited",
        stock: 8,
        description: "Swedish multirole fighter."
    },

    {
        id: "jas39-gripen-c",
        name: "Saab JAS 39 Gripen C",
        manufacturer: "Saab",
        category: "military",
        price: 60000000,
        type: "limited",
        stock: 8,
        description: "Swedish multirole fighter."
    },


    /* =========================================
       MORE REAL AIRCRAFT
    ========================================== */

    {
        id: "boeing-727",
        name: "Boeing 727",
        manufacturer: "Boeing",
        category: "historic",
        price: 60000000,
        type: "limited",
        stock: 20,
        description: "Historic Boeing trijet."
    },

    {
        id: "boeing-737-800",
        name: "Boeing 737-800",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 80000000,
        type: "unlimited",
        description: "Popular Boeing narrow-body aircraft."
    },

    {
        id: "boeing-737-900er",
        name: "Boeing 737-900ER",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 90000000,
        type: "unlimited",
        description: "Extended Boeing 737 variant."
    },

    {
        id: "boeing-757-200",
        name: "Boeing 757-200",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 75000000,
        type: "limited",
        stock: 25,
        description: "Historic narrow-body airliner."
    },

    {
        id: "boeing-757-300",
        name: "Boeing 757-300",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 90000000,
        type: "limited",
        stock: 20,
        description: "Long narrow-body airliner."
    },

    {
        id: "boeing-767-200",
        name: "Boeing 767-200",
        manufacturer: "Boeing",
        category: "historic",
        price: 90000000,
        type: "limited",
        stock: 20,
        description: "Historic Boeing wide-body aircraft."
    },

    {
        id: "airbus-a300",
        name: "Airbus A300",
        manufacturer: "Airbus",
        category: "historic",
        price: 70000000,
        type: "limited",
        stock: 20,
        description: "Historic Airbus wide-body aircraft."
    },

    {
        id: "airbus-a310",
        name: "Airbus A310",
        manufacturer: "Airbus",
        category: "historic",
        price: 75000000,
        type: "limited",
        stock: 20,
        description: "Historic Airbus wide-body aircraft."
    },

    {
        id: "airbus-a318",
        name: "Airbus A318",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 70000000,
        type: "limited",
        stock: 20,
        description: "Compact Airbus narrow-body aircraft."
    },

    {
        id: "airbus-a319",
        name: "Airbus A319",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 90000000,
        type: "unlimited",
        description: "Airbus narrow-body airliner."
    },

    {
        id: "airbus-a320",
        name: "Airbus A320",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 100000000,
        type: "unlimited",
        description: "Iconic Airbus narrow-body aircraft."
    },

    {
        id: "airbus-a321",
        name: "Airbus A321",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 110000000,
        type: "unlimited",
        description: "Airbus narrow-body airliner."
    },

    {
        id: "airbus-a330-200",
        name: "Airbus A330-200",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 220000000,
        type: "unlimited",
        description: "Long-range wide-body aircraft."
    },

    {
        id: "airbus-a330-300",
        name: "Airbus A330-300",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 240000000,
        type: "unlimited",
        description: "Wide-body passenger aircraft."
    },

    {
        id: "airbus-a340-300",
        name: "Airbus A340-300",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 250000000,
        type: "limited",
        stock: 15,
        description: "Four-engine wide-body aircraft."
    },

    {
        id: "airbus-a340-600",
        name: "Airbus A340-600",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 300000000,
        type: "limited",
        stock: 8,
        description: "Long four-engine Airbus aircraft."
    },

    {
        id: "boeing-747-400",
        name: "Boeing 747-400",
        manufacturer: "Boeing",
        category: "historic",
        price: 250000000,
        type: "limited",
        stock: 12,
        description: "Classic Boeing jumbo jet."
    },

    {
        id: "boeing-747-200",
        name: "Boeing 747-200",
        manufacturer: "Boeing",
        category: "historic",
        price: 180000000,
        type: "limited",
        stock: 10,
        description: "Historic Boeing 747 variant."
    },

    {
        id: "boeing-747sp",
        name: "Boeing 747SP",
        manufacturer: "Boeing",
        category: "ultra-rare",
        price: 300000000,
        type: "one",
        stock: 1,
        description: "Rare shortened Boeing 747 variant."
    },

    {
        id: "boeing-737-700",
        name: "Boeing 737-700",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 75000000,
        type: "unlimited",
        description: "Boeing narrow-body aircraft."
    },

    {
        id: "boeing-737-600",
        name: "Boeing 737-600",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 65000000,
        type: "limited",
        stock: 30,
        description: "Compact Boeing 737 variant."
    },

    {
        id: "embraer-erj135",
        name: "Embraer ERJ-135",
        manufacturer: "Embraer",
        category: "commercial-airliners",
        price: 25000000,
        type: "unlimited",
        description: "Regional jet aircraft."
    },

    {
        id: "embraer-erj140",
        name: "Embraer ERJ-140",
        manufacturer: "Embraer",
        category: "commercial-airliners",
        price: 28000000,
        type: "unlimited",
        description: "Regional passenger jet."
    },

    {
        id: "embraer-erj145",
        name: "Embraer ERJ-145",
        manufacturer: "Embraer",
        category: "commercial-airliners",
        price: 30000000,
        type: "unlimited",
        description: "Regional passenger aircraft."
    },

    {
        id: "embraer-e190",
        name: "Embraer E190",
        manufacturer: "Embraer",
        category: "commercial-airliners",
        price: 50000000,
        type: "unlimited",
        description: "Regional jet aircraft."
    },

    {
        id: "embraer-e195",
        name: "Embraer E195",
        manufacturer: "Embraer",
        category: "commercial-airliners",
        price: 55000000,
        type: "unlimited",
        description: "Regional passenger jet."
    },

    {
        id: "embraer-e175-e2",
        name: "Embraer E175-E2",
        manufacturer: "Embraer",
        category: "commercial-airliners",
        price: 60000000,
        type: "limited",
        stock: 20,
        description: "Next-generation regional jet."
    },

    {
        id: "embraer-lineage-1000",
        name: "Embraer Lineage 1000",
        manufacturer: "Embraer",
        category: "vip-airliners",
        price: 80000000,
        type: "limited",
        stock: 5,
        description: "Executive jet based on the E190 platform."
    },

    {
        id: "boeing-bbj",
        name: "Boeing Business Jet",
        manufacturer: "Boeing",
        category: "vip-airliners",
        price: 120000000,
        type: "limited",
        stock: 8,
        description: "VIP Boeing business aircraft."
    },

    {
        id: "boeing-bbj-2",
        name: "Boeing BBJ 2",
        manufacturer: "Boeing",
        category: "vip-airliners",
        price: 140000000,
        type: "limited",
        stock: 6,
        description: "VIP Boeing business jet."
    },

    {
        id: "boeing-bbj-3",
        name: "Boeing BBJ 3",
        manufacturer: "Boeing",
        category: "vip-airliners",
        price: 150000000,
        type: "limited",
        stock: 5,
        description: "Large VIP Boeing business jet."
    },

    {
        id: "boeing-bbj-max-7",
        name: "Boeing BBJ MAX 7",
        manufacturer: "Boeing",
        category: "vip-airliners",
        price: 130000000,
        type: "limited",
        stock: 7,
        description: "VIP 737 MAX-based aircraft."
    },

    {
        id: "boeing-bbj-max-8",
        name: "Boeing BBJ MAX 8",
        manufacturer: "Boeing",
        category: "vip-airliners",
        price: 150000000,
        type: "limited",
        stock: 7,
        description: "VIP Boeing narrow-body aircraft."
    },

    {
        id: "boeing-bbj-max-9",
        name: "Boeing BBJ MAX 9",
        manufacturer: "Boeing",
        category: "vip-airliners",
        price: 160000000,
        type: "limited",
        stock: 5,
        description: "VIP Boeing 737 MAX aircraft."
    },

    {
        id: "airbus-acj220",
        name: "Airbus ACJ TwoTwenty",
        manufacturer: "Airbus",
        category: "vip-airliners",
        price: 100000000,
        type: "limited",
        stock: 10,
        description: "VIP Airbus business aircraft."
    },

    {
        id: "airbus-acj319",
        name: "Airbus ACJ319",
        manufacturer: "Airbus",
        category: "vip-airliners",
        price: 110000000,
        type: "limited",
        stock: 10,
        description: "VIP Airbus narrow-body aircraft."
    },

    {
        id: "airbus-acj320",
        name: "Airbus ACJ320",
        manufacturer: "Airbus",
        category: "vip-airliners",
        price: 125000000,
        type: "limited",
        stock: 8,
        description: "VIP Airbus narrow-body aircraft."
    },

    {
        id: "airbus-acj340",
        name: "Airbus ACJ340",
        manufacturer: "Airbus",
        category: "vip-airliners",
        price: 280000000,
        type: "one",
        stock: 1,
        description: "VIP Airbus four-engine aircraft."
    },


    /* =========================================
       ADDITIONAL REAL AIRCRAFT
    ========================================== */

    {
        id: "gulfstream-g100",
        name: "Gulfstream G100",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 9000000,
        type: "unlimited",
        description: "Light business aircraft."
    },

    {
        id: "gulfstream-g150",
        name: "Gulfstream G150",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 12000000,
        type: "unlimited",
        description: "Light business jet."
    },

    {
        id: "gulfstream-g200",
        name: "Gulfstream G200",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 18000000,
        type: "unlimited",
        description: "Midsize business jet."
    },

    {
        id: "gulfstream-g300",
        name: "Gulfstream G300",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 35000000,
        type: "limited",
        stock: 15,
        description: "Gulfstream large-cabin aircraft."
    },

    {
        id: "gulfstream-g350",
        name: "Gulfstream G350",
        manufacturer: "Gulfstream",
        category: "business-jets",
        price: 40000000,
        type: "limited",
        stock: 12,
        description: "Gulfstream business aircraft."
    },

    {
        id: "dassault-falcon-2000",
        name: "Dassault Falcon 2000",
        manufacturer: "Dassault",
        category: "business-jets",
        price: 35000000,
        type: "unlimited",
        description: "Twin-engine Falcon business jet."
    },

    {
        id: "dassault-falcon-2000s",
        name: "Dassault Falcon 2000S",
        manufacturer: "Dassault",
        category: "business-jets",
        price: 32000000,
        type: "unlimited",
        description: "Falcon 2000 business aircraft."
    },

    {
        id: "dassault-falcon-2000lxs",
        name: "Dassault Falcon 2000LXS",
        manufacturer: "Dassault",
        category: "business-jets",
        price: 42000000,
        type: "unlimited",
        description: "Long-range Falcon business jet."
    },

    {
        id: "embraer-phenom-300",
        name: "Embraer Phenom 300",
        manufacturer: "Embraer",
        category: "business-jets",
        price: 10000000,
        type: "unlimited",
        description: "Light business jet."
    },

    {
        id: "embraer-phenom-100",
        name: "Embraer Phenom 100",
        manufacturer: "Embraer",
        category: "business-jets",
        price: 5000000,
        type: "unlimited",
        description: "Very light business jet."
    },

    {
        id: "citation-bravo",
        name: "Cessna Citation Bravo",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 5000000,
        type: "unlimited",
        description: "Light business jet."
    },

    {
        id: "citation-v",
        name: "Cessna Citation V",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 4000000,
        type: "unlimited",
        description: "Light business aircraft."
    },

    {
        id: "citation-ultra",
        name: "Cessna Citation Ultra",
        manufacturer: "Cessna",
        category: "business-jets",
        price: 6000000,
        type: "unlimited",
        description: "Light business jet."
    },

    {
        id: "beechcraft-king-air-350",
        name: "Beechcraft King Air 350",
        manufacturer: "Beechcraft",
        category: "turboprops",
        price: 8000000,
        type: "unlimited",
        description: "Twin-engine utility turboprop."
    },

    {
        id: "beechcraft-king-air-360",
        name: "Beechcraft King Air 360",
        manufacturer: "Beechcraft",
        category: "turboprops",
        price: 9000000,
        type: "unlimited",
        description: "Premium twin-engine turboprop."
    },

    {
        id: "beechcraft-king-air-260",
        name: "Beechcraft King Air 260",
        manufacturer: "Beechcraft",
        category: "turboprops",
        price: 7000000,
        type: "unlimited",
        description: "Twin-engine turboprop aircraft."
    },

    {
        id: "cessna-grand-caravan-ex",
        name: "Cessna Grand Caravan EX",
        manufacturer: "Cessna",
        category: "turboprops",
        price: 3000000,
        type: "unlimited",
        description: "Single-engine utility turboprop."
    },

    {
        id: "cessna-denali",
        name: "Cessna Denali",
        manufacturer: "Cessna",
        category: "turboprops",
        price: 6000000,
        type: "limited",
        stock: 20,
        description: "Single-engine turboprop aircraft."
    },

    {
        id: "pc-21",
        name: "Pilatus PC-21",
        manufacturer: "Pilatus",
        category: "turboprops",
        price: 12000000,
        type: "limited",
        stock: 10,
        description: "Advanced turboprop trainer."
    },

    {
        id: "pc-7-mkxi",
        name: "Pilatus PC-7 MkII",
        manufacturer: "Pilatus",
        category: "turboprops",
        price: 5000000,
        type: "limited",
        stock: 20,
        description: "Turboprop trainer aircraft."
    },

    {
        id: "king-air-200",
        name: "Beechcraft King Air 200",
        manufacturer: "Beechcraft",
        category: "turboprops",
        price: 4000000,
        type: "unlimited",
        description: "Twin-engine turboprop aircraft."
    },

    {
        id: "saab-340",
        name: "Saab 340",
        manufacturer: "Saab",
        category: "turboprops",
        price: 15000000,
        type: "limited",
        stock: 30,
        description: "Regional turboprop aircraft."
    },

    {
        id: "saab-2000",
        name: "Saab 2000",
        manufacturer: "Saab",
        category: "turboprops",
        price: 25000000,
        type: "limited",
        stock: 20,
        description: "High-speed regional turboprop."
    },

    {
        id: "fokker-50",
        name: "Fokker 50",
        manufacturer: "Fokker",
        category: "turboprops",
        price: 10000000,
        type: "limited",
        stock: 20,
        description: "Regional turboprop aircraft."
    },

    {
        id: "fokker-27",
        name: "Fokker F27 Friendship",
        manufacturer: "Fokker",
        category: "historic",
        price: 6000000,
        type: "limited",
        stock: 10,
        description: "Historic regional turboprop."
    },

    {
        id: "bae-146",
        name: "BAe 146",
        manufacturer: "British Aerospace",
        category: "historic",
        price: 40000000,
        type: "limited",
        stock: 20,
        description: "Historic four-engine regional jet."
    },

    {
        id: "avro-rj100",
        name: "Avro RJ100",
        manufacturer: "Avro",
        category: "historic",
        price: 35000000,
        type: "limited",
        stock: 20,
        description: "Regional jet aircraft."
    },

    {
        id: "british-aerospace-jetstream-41",
        name: "Jetstream 41",
        manufacturer: "British Aerospace",
        category: "turboprops",
        price: 12000000,
        type: "limited",
        stock: 25,
        description: "Regional turboprop aircraft."
    },

    {
        id: "dornier-328",
        name: "Dornier 328",
        manufacturer: "Dornier",
        category: "turboprops",
        price: 15000000,
        type: "limited",
        stock: 20,
        description: "Regional turboprop aircraft."
    },

    {
        id: "dornier-328jet",
        name: "Dornier 328JET",
        manufacturer: "Dornier",
        category: "commercial-airliners",
        price: 18000000,
        type: "limited",
        stock: 20,
        description: "Regional jet aircraft."
    },

    {
        id: "mitsubishi-spacejet-m90",
        name: "Mitsubishi SpaceJet M90",
        manufacturer: "Mitsubishi",
        category: "experimental",
        price: 50000000,
        type: "one",
        stock: 1,
        description: "Regional aircraft development program."
    },

    {
        id: "comac-c919",
        name: "COMAC C919",
        manufacturer: "COMAC",
        category: "commercial-airliners",
        price: 90000000,
        type: "unlimited",
        description: "Chinese narrow-body passenger aircraft."
    },

    {
        id: "comac-arj21",
        name: "COMAC ARJ21",
        manufacturer: "COMAC",
        category: "commercial-airliners",
        price: 45000000,
        type: "unlimited",
        description: "Chinese regional jet."
    },

    {
        id: "comac-c929",
        name: "COMAC C929",
        manufacturer: "COMAC",
        category: "experimental",
        price: 180000000,
        type: "one",
        stock: 1,
        description: "Long-range wide-body aircraft program."
    },

    {
        id: "ilyushin-il-76",
        name: "Ilyushin Il-76",
        manufacturer: "Ilyushin",
        category: "cargo",
        price: 100000000,
        type: "limited",
        stock: 10,
        description: "Heavy transport aircraft."
    },

    {
        id: "ilyushin-il-96",
        name: "Ilyushin Il-96",
        manufacturer: "Ilyushin",
        category: "commercial-airliners",
        price: 150000000,
        type: "limited",
        stock: 10,
        description: "Four-engine wide-body aircraft."
    },

    {
        id: "tupolev-tu214",
        name: "Tupolev Tu-214",
        manufacturer: "Tupolev",
        category: "commercial-airliners",
        price: 100000000,
        type: "limited",
        stock: 15,
        description: "Twin-engine Russian airliner."
    },

    {
        id: "tupolev-tu204",
        name: "Tupolev Tu-204",
        manufacturer: "Tupolev",
        category: "commercial-airliners",
        price: 90000000,
        type: "limited",
        stock: 15,
        description: "Twin-engine Russian airliner."
    },

    {
        id: "yakovlev-yak-40",
        name: "Yakovlev Yak-40",
        manufacturer: "Yakovlev",
        category: "historic",
        price: 25000000,
        type: "limited",
        stock: 10,
        description: "Historic regional jet."
    },

    {
        id: "yakovlev-yak-42",
        name: "Yakovlev Yak-42",
        manufacturer: "Yakovlev",
        category: "historic",
        price: 35000000,
        type: "limited",
        stock: 10,
        description: "Historic regional airliner."
    },

    {
        id: "md-80",
        name: "McDonnell Douglas MD-80",
        manufacturer: "McDonnell Douglas",
        category: "historic",
        price: 60000000,
        type: "limited",
        stock: 30,
        description: "Classic narrow-body airliner."
    },

    {
        id: "md-90",
        name: "McDonnell Douglas MD-90",
        manufacturer: "McDonnell Douglas",
        category: "historic",
        price: 70000000,
        type: "limited",
        stock: 20,
        description: "Classic narrow-body jet."
    },

    {
        id: "md-11",
        name: "McDonnell Douglas MD-11",
        manufacturer: "McDonnell Douglas",
        category: "cargo",
        price: 150000000,
        type: "limited",
        stock: 20,
        description: "Three-engine wide-body aircraft."
    },

    {
        id: "dc-10",
        name: "McDonnell Douglas DC-10",
        manufacturer: "McDonnell Douglas",
        category: "historic",
        price: 100000000,
        type: "limited",
        stock: 20,
        description: "Classic three-engine wide-body."
    },

    {
        id: "dc-9",
        name: "McDonnell Douglas DC-9",
        manufacturer: "McDonnell Douglas",
        category: "historic",
        price: 50000000,
        type: "limited",
        stock: 20,
        description: "Classic narrow-body jet."
    },

    {
        id: "lockheed-l1011",
        name: "Lockheed L-1011 TriStar",
        manufacturer: "Lockheed",
        category: "historic",
        price: 90000000,
        type: "limited",
        stock: 10,
        description: "Classic wide-body trijet."
    },

    {
        id: "lockheed-c130j",
        name: "Lockheed Martin C-130J Super Hercules",
        manufacturer: "Lockheed Martin",
        category: "military",
        price: 100000000,
        type: "limited",
        stock: 8,
        description: "Military turboprop transport aircraft."
    },

    {
        id: "boeing-kc46",
        name: "Boeing KC-46 Pegasus",
        manufacturer: "Boeing",
        category: "military",
        price: 220000000,
        type: "limited",
        stock: 5,
        description: "Aerial refueling and transport aircraft."
    },

    {
        id: "airbus-a400m",
        name: "Airbus A400M Atlas",
        manufacturer: "Airbus",
        category: "military",
        price: 200000000,
        type: "limited",
        stock: 5,
        description: "European military transport aircraft."
    },

    {
        id: "airbus-a330-mrtt",
        name: "Airbus A330 MRTT",
        manufacturer: "Airbus",
        category: "military",
        price: 250000000,
        type: "limited",
        stock: 5,
        description: "Multi-role tanker transport aircraft."
    },

    {
        id: "boeing-e7-wedgetail",
        name: "Boeing E-7 Wedgetail",
        manufacturer: "Boeing",
        category: "military",
        price: 300000000,
        type: "limited",
        stock: 3,
        description: "Airborne early warning aircraft."
    },

    {
        id: "northrop-b2",
        name: "Northrop Grumman B-2 Spirit",
        manufacturer: "Northrop Grumman",
        category: "military",
        price: 2000000000,
        type: "ultra-rare",
        stock: 1,
        description: "Stealth strategic bomber."
    },

    {
        id: "b1b-lancer",
        name: "Rockwell B-1B Lancer",
        manufacturer: "Rockwell",
        category: "military",
        price: 800000000,
        type: "ultra-rare",
        stock: 1,
        description: "Supersonic strategic bomber."
    },

    {
        id: "b52h",
        name: "Boeing B-52H Stratofortress",
        manufacturer: "Boeing",
        category: "military",
        price: 500000000,
        type: "ultra-rare",
        stock: 1,
        description: "Long-range strategic bomber."
    },

    {
        id: "avro-vulcan",
        name: "Avro Vulcan",
        manufacturer: "Avro",
        category: "historic",
        price: 300000000,
        type: "one",
        stock: 1,
        description: "Historic British strategic bomber."
    },

    {
        id: "english-electric-lightning",
        name: "English Electric Lightning",
        manufacturer: "English Electric",
        category: "historic",
        price: 80000000,
        type: "one",
        stock: 1,
        description: "Historic British supersonic fighter."
    },

    {
        id: "harrier-gr7",
        name: "BAE Harrier GR7",
        manufacturer: "BAE Systems",
        category: "military",
        price: 70000000,
        type: "limited",
        stock: 3,
        description: "Vertical/short takeoff combat aircraft."
    },

    {
        id: "harrier-gr9",
        name: "BAE Harrier GR9",
        manufacturer: "BAE Systems",
        category: "military",
        price: 80000000,
        type: "limited",
        stock: 3,
        description: "Advanced Harrier strike aircraft."
    },

    {
        id: "panavia-tornado",
        name: "Panavia Tornado",
        manufacturer: "Panavia",
        category: "military",
        price: 70000000,
        type: "limited",
        stock: 5,
        description: "European multirole combat aircraft."
    },

    {
        id: "sepecat-jaguar",
        name: "SEPECAT Jaguar",
        manufacturer: "SEPECAT",
        category: "military",
        price: 50000000,
        type: "limited",
        stock: 5,
        description: "Anglo-French attack aircraft."
    },

    {
        id: "mig-29",
        name: "Mikoyan MiG-29",
        manufacturer: "Mikoyan",
        category: "military",
        price: 50000000,
        type: "limited",
        stock: 8,
        description: "Twin-engine fighter aircraft."
    },

    {
        id: "mig-31",
        name: "Mikoyan MiG-31",
        manufacturer: "Mikoyan",
        category: "military",
        price: 70000000,
        type: "limited",
        stock: 5,
        description: "High-speed interceptor aircraft."
    },

    {
        id: "su24",
        name: "Sukhoi Su-24",
        manufacturer: "Sukhoi",
        category: "military",
        price: 45000000,
        type: "limited",
        stock: 8,
        description: "Supersonic attack aircraft."
    },

    {
        id: "su25",
        name: "Sukhoi Su-25",
        manufacturer: "Sukhoi",
        category: "military",
        price: 40000000,
        type: "limited",
        stock: 10,
        description: "Close-air-support aircraft."
    },

    {
        id: "su27",
        name: "Sukhoi Su-27",
        manufacturer: "Sukhoi",
        category: "military",
        price: 60000000,
        type: "limited",
        stock: 8,
        description: "Air-superiority fighter."
    },

    {
        id: "su33",
        name: "Sukhoi Su-33",
        manufacturer: "Sukhoi",
        category: "military",
        price: 65000000,
        type: "limited",
        stock: 5,
        description: "Carrier-based fighter aircraft."
    },

    {
        id: "su34",
        name: "Sukhoi Su-34",
        manufacturer: "Sukhoi",
        category: "military",
        price: 70000000,
        type: "limited",
        stock: 6,
        description: "Twin-seat strike fighter."
    },

    {
        id: "mig-23",
        name: "Mikoyan MiG-23",
        manufacturer: "Mikoyan",
        category: "historic",
        price: 35000000,
        type: "limited",
        stock: 5,
        description: "Historic variable-sweep fighter."
    },

    {
        id: "mig-25",
        name: "Mikoyan MiG-25",
        manufacturer: "Mikoyan",
        category: "historic",
        price: 50000000,
        type: "limited",
        stock: 3,
        description: "Historic high-speed interceptor."
    },

    {
        id: "f4-phantom",
        name: "McDonnell Douglas F-4 Phantom II",
        manufacturer: "McDonnell Douglas",
        category: "historic",
        price: 60000000,
        type: "limited",
        stock: 4,
        description: "Historic twin-engine fighter aircraft."
    },

    {
        id: "f14-tomcat",
        name: "Grumman F-14 Tomcat",
        manufacturer: "Grumman",
        category: "historic",
        price: 80000000,
        type: "one",
        stock: 1,
        description: "Iconic carrier-based fighter."
    },

    {
        id: "f117-nighthawk",
        name: "Lockheed F-117 Nighthawk",
        manufacturer: "Lockheed",
        category: "historic",
        price: 150000000,
        type: "one",
        stock: 1,
        description: "Historic stealth attack aircraft."
    },

    {
        id: "a10-thunderbolt",
        name: "Fairchild Republic A-10 Thunderbolt II",
        manufacturer: "Fairchild Republic",
        category: "military",
        price: 60000000,
        type: "limited",
        stock: 5,
        description: "Close-air-support aircraft."
    },

    {
        id: "harrier-av8b",
        name: "McDonnell Douglas AV-8B Harrier II",
        manufacturer: "McDonnell Douglas",
        category: "military",
        price: 50000000,
        type: "limited",
        stock: 5,
        description: "Vertical/short takeoff attack aircraft."
    },

    {
        id: "t6-texan-ii",
        name: "Beechcraft T-6 Texan II",
        manufacturer: "Beechcraft",
        category: "military",
        price: 6000000,
        type: "limited",
        stock: 15,
        description: "Advanced turboprop trainer."
    },

    {
        id: "t38-talon",
        name: "Northrop T-38 Talon",
        manufacturer: "Northrop",
        category: "military",
        price: 15000000,
        type: "limited",
        stock: 8,
        description: "Supersonic trainer aircraft."
    },

    {
        id: "t7a-red-hawk",
        name: "Boeing T-7A Red Hawk",
        manufacturer: "Boeing",
        category: "military",
        price: 25000000,
        type: "limited",
        stock: 10,
        description: "Advanced jet trainer."
    },

    {
        id: "yak-130",
        name: "Yakovlev Yak-130",
        manufacturer: "Yakovlev",
        category: "military",
        price: 25000000,
        type: "limited",
        stock: 10,
        description: "Advanced jet trainer."
    },

    {
        id: "m-346",
        name: "Leonardo M-346",
        manufacturer: "Leonardo",
        category: "military",
        price: 30000000,
        type: "limited",
        stock: 10,
        description: "Advanced jet trainer."
    },

    {
        id: "hawker-hunter",
        name: "Hawker Hunter",
        manufacturer: "Hawker",
        category: "historic",
        price: 40000000,
        type: "one",
        stock: 1,
        description: "Historic British fighter aircraft."
    },

    {
        id: "spitfire",
        name: "Supermarine Spitfire",
        manufacturer: "Supermarine",
        category: "historic",
        price: 50000000,
        type: "one",
        stock: 1,
        description: "Iconic historic British fighter."
    },

    {
        id: "p51-mustang",
        name: "North American P-51 Mustang",
        manufacturer: "North American",
        category: "historic",
        price: 20000000,
        type: "one",
        stock: 1,
        description: "Legendary World War II fighter."
    },

    {
        id: "p38-lightning",
        name: "Lockheed P-38 Lightning",
        manufacturer: "Lockheed",
        category: "historic",
        price: 15000000,
        type: "one",
        stock: 1,
        description: "Historic twin-engine fighter."
    },

    {
        id: "p47-thunderbolt",
        name: "Republic P-47 Thunderbolt",
        manufacturer: "Republic",
        category: "historic",
        price: 12000000,
        type: "one",
        stock: 1,
        description: "Historic World War II fighter."
    },

    {
        id: "p40-warhawk",
        name: "Curtiss P-40 Warhawk",
        manufacturer: "Curtiss",
        category: "historic",
        price: 10000000,
        type: "one",
        stock: 1,
        description: "Historic World War II fighter."
    },

    {
        id: "mustang-ii",
        name: "North American F-86 Sabre",
        manufacturer: "North American",
        category: "historic",
        price: 20000000,
        type: "one",
        stock: 1,
        description: "Historic swept-wing fighter."
    },

    {
        id: "dc3",
        name: "Douglas DC-3",
        manufacturer: "Douglas",
        category: "historic",
        price: 10000000,
        type: "one",
        stock: 1,
        description: "Legendary historic passenger aircraft."
    },

    {
        id: "dc4",
        name: "Douglas DC-4",
        manufacturer: "Douglas",
        category: "historic",
        price: 15000000,
        type: "one",
        stock: 1,
        description: "Historic four-engine airliner."
    },

    {
        id: "dc6",
        name: "Douglas DC-6",
        manufacturer: "Douglas",
        category: "historic",
        price: 18000000,
        type: "one",
        stock: 1,
        description: "Historic piston-engine airliner."
    },

    {
        id: "constellation",
        name: "Lockheed Constellation",
        manufacturer: "Lockheed",
        category: "historic",
        price: 25000000,
        type: "one",
        stock: 1,
        description: "Iconic historic four-engine airliner."
    },

    {
        id: "boeing-377",
        name: "Boeing 377 Stratocruiser",
        manufacturer: "Boeing",
        category: "historic",
        price: 25000000,
        type: "one",
        stock: 1,
        description: "Historic double-deck airliner."
    },

    {
        id: "de-havilland-comet",
        name: "De Havilland Comet",
        manufacturer: "De Havilland",
        category: "historic",
        price: 30000000,
        type: "one",
        stock: 1,
        description: "Historic pioneering jet airliner."
    },

    {
        id: "caravelle",
        name: "Sud Aviation Caravelle",
        manufacturer: "Sud Aviation",
        category: "historic",
        price: 30000000,
        type: "one",
        stock: 1,
        description: "Historic French jet airliner."
    },

    {
        id: "vc10",
        name: "Vickers VC10",
        manufacturer: "Vickers",
        category: "historic",
        price: 35000000,
        type: "one",
        stock: 1,
        description: "Historic British long-range jet."
    },

    {
        id: "vickers-viscount",
        name: "Vickers Viscount",
        manufacturer: "Vickers",
        category: "historic",
        price: 15000000,
        type: "one",
        stock: 1,
        description: "Historic turboprop airliner."
    },

    {
        id: "lockheed-electra",
        name: "Lockheed L-188 Electra",
        manufacturer: "Lockheed",
        category: "historic",
        price: 18000000,
        type: "one",
        stock: 1,
        description: "Historic turboprop airliner."
    },

    {
        id: "boeing-707",
        name: "Boeing 707",
        manufacturer: "Boeing",
        category: "historic",
        price: 60000000,
        type: "one",
        stock: 1,
        description: "Historic Boeing jet airliner."
    },

    {
        id: "boeing-720",
        name: "Boeing 720",
        manufacturer: "Boeing",
        category: "historic",
        price: 55000000,
        type: "one",
        stock: 1,
        description: "Historic Boeing jet aircraft."
    },

    {
        id: "convair-880",
        name: "Convair 880",
        manufacturer: "Convair",
        category: "historic",
        price: 45000000,
        type: "one",
        stock: 1,
        description: "Historic four-engine jet airliner."
    },

    {
        id: "convair-990",
        name: "Convair 990 Coronado",
        manufacturer: "Convair",
        category: "historic",
        price: 50000000,
        type: "one",
        stock: 1,
        description: "Historic high-speed jet airliner."
    },

    {
        id: "caravelle-virgin",
        name: "Sud Aviation Caravelle VI-N",
        manufacturer: "Sud Aviation",
        category: "historic",
        price: 32000000,
        type: "one",
        stock: 1,
        description: "Historic Caravelle variant."
    },

    {
        id: "boeing-737-100",
        name: "Boeing 737-100",
        manufacturer: "Boeing",
        category: "historic",
        price: 45000000,
        type: "one",
        stock: 1,
        description: "Original Boeing 737 variant."
    },

    {
        id: "boeing-737-200",
        name: "Boeing 737-200",
        manufacturer: "Boeing",
        category: "historic",
        price: 50000000,
        type: "limited",
        stock: 5,
        description: "Classic Boeing narrow-body aircraft."
    },

    {
        id: "boeing-737-300",
        name: "Boeing 737-300",
        manufacturer: "Boeing",
        category: "historic",
        price: 55000000,
        type: "limited",
        stock: 10,
        description: "Classic Boeing 737 variant."
    },

    {
        id: "boeing-737-400",
        name: "Boeing 737-400",
        manufacturer: "Boeing",
        category: "historic",
        price: 60000000,
        type: "limited",
        stock: 10,
        description: "Classic Boeing 737 variant."
    },

    {
        id: "boeing-737-500",
        name: "Boeing 737-500",
        manufacturer: "Boeing",
        category: "historic",
        price: 50000000,
        type: "limited",
        stock: 10,
        description: "Classic Boeing 737 variant."
    },

    {
        id: "airbus-a300-600",
        name: "Airbus A300-600",
        manufacturer: "Airbus",
        category: "historic",
        price: 80000000,
        type: "limited",
        stock: 15,
        description: "Classic Airbus wide-body aircraft."
    },

    {
        id: "airbus-a310-300",
        name: "Airbus A310-300",
        manufacturer: "Airbus",
        category: "historic",
        price: 85000000,
        type: "limited",
        stock: 15,
        description: "Classic Airbus wide-body aircraft."
    },

    {
        id: "airbus-a340-200",
        name: "Airbus A340-200",
        manufacturer: "Airbus",
        category: "historic",
        price: 200000000,
        type: "limited",
        stock: 10,
        description: "Four-engine Airbus wide-body."
    },

    {
        id: "airbus-a340-500",
        name: "Airbus A340-500",
        manufacturer: "Airbus",
        category: "historic",
        price: 280000000,
        type: "limited",
        stock: 8,
        description: "Ultra-long-range Airbus aircraft."
    },

    {
        id: "airbus-a340-600",
        name: "Airbus A340-600",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 300000000,
        type: "limited",
        stock: 8,
        description: "Long four-engine Airbus aircraft."
    },

    {
        id: "airbus-a380-800",
        name: "Airbus A380-800",
        manufacturer: "Airbus",
        category: "ultra-rare",
        price: 500000000,
        type: "one",
        stock: 1,
        description: "Full-size double-deck Airbus superjumbo."
    },

    {
        id: "boeing-747-100",
        name: "Boeing 747-100",
        manufacturer: "Boeing",
        category: "historic",
        price: 150000000,
        type: "one",
        stock: 1,
        description: "Original Boeing 747 variant."
    },

    {
        id: "boeing-747-200b",
        name: "Boeing 747-200B",
        manufacturer: "Boeing",
        category: "historic",
        price: 170000000,
        type: "one",
        stock: 1,
        description: "Historic Boeing 747 variant."
    },

    {
        id: "boeing-747-300",
        name: "Boeing 747-300",
        manufacturer: "Boeing",
        category: "historic",
        price: 200000000,
        type: "limited",
        stock: 5,
        description: "Classic Boeing jumbo aircraft."
    },

    {
        id: "boeing-747-400",
        name: "Boeing 747-400",
        manufacturer: "Boeing",
        category: "historic",
        price: 250000000,
        type: "limited",
        stock: 10,
        description: "Classic Boeing 747 variant."
    },

    {
        id: "boeing-747-400f",
        name: "Boeing 747-400F",
        manufacturer: "Boeing",
        category: "cargo",
        price: 250000000,
        type: "limited",
        stock: 8,
        description: "Boeing 747 cargo aircraft."
    },

    {
        id: "boeing-747-8i",
        name: "Boeing 747-8 Intercontinental",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 400000000,
        type: "one",
        stock: 1,
        description: "Modern Boeing jumbo aircraft."
    },

    {
        id: "boeing-747-8f2",
        name: "Boeing 747-8 Freighter",
        manufacturer: "Boeing",
        category: "cargo",
        price: 350000000,
        type: "limited",
        stock: 5,
        description: "Large Boeing freighter."
    },

    {
        id: "boeing-777-200",
        name: "Boeing 777-200",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 250000000,
        type: "unlimited",
        description: "Long-range twin-engine wide-body."
    },

    {
        id: "boeing-777-200er",
        name: "Boeing 777-200ER",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 280000000,
        type: "unlimited",
        description: "Extended-range Boeing 777."
    },

    {
        id: "boeing-777-200lr",
        name: "Boeing 777-200LR",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 300000000,
        type: "limited",
        stock: 10,
        description: "Ultra-long-range Boeing 777."
    },

    {
        id: "boeing-777-300",
        name: "Boeing 777-300",
        manufacturer: "Boeing",
        category: "commercial-airliners",
        price: 300000000,
        type: "unlimited",
        description: "Large Boeing twin-engine airliner."
    },

    {
        id: "boeing-787-3",
        name: "Boeing 787-3",
        manufacturer: "Boeing",
        category: "experimental",
        price: 220000000,
        type: "one",
        stock: 1,
        description: "Proposed Dreamliner variant."
    },

    {
        id: "boeing-787-9-vip",
        name: "Boeing 787-9 BBJ",
        manufacturer: "Boeing",
        category: "vip-airliners",
        price: 300000000,
        type: "limited",
        stock: 3,
        description: "VIP Dreamliner configuration."
    },

    {
        id: "airbus-a350-900-uf",
        name: "Airbus A350-900 ULR",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 330000000,
        type: "limited",
        stock: 5,
        description: "Ultra-long-range A350 configuration."
    },

    {
        id: "airbus-a321-lr",
        name: "Airbus A321LR",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 120000000,
        type: "unlimited",
        description: "Long-range Airbus narrow-body."
    },

    {
        id: "airbus-a320ceo",
        name: "Airbus A320ceo",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 90000000,
        type: "unlimited",
        description: "Classic Airbus A320 family aircraft."
    },

    {
        id: "airbus-a321ceo",
        name: "Airbus A321ceo",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 100000000,
        type: "unlimited",
        description: "Classic Airbus A321."
    },

    {
        id: "airbus-a319ceo",
        name: "Airbus A319ceo",
        manufacturer: "Airbus",
        category: "commercial-airliners",
        price: 85000000,
        type: "unlimited",
        description: "Classic Airbus A319."
    },

    {
        id: "airbus-a330-300-p2f",
        name: "Airbus A330-300P2F",
        manufacturer: "Airbus",
        category: "cargo",
        price: 150000000,
        type: "limited",
        stock: 10,
        description: "Passenger-to-freighter aircraft."
    },

    {
        id: "airbus-a321p2f",
        name: "Airbus A321P2F",
        manufacturer: "Airbus",
        category: "cargo",
        price: 100000000,
        type: "limited",
        stock: 15,
        description: "Passenger-to-freighter narrow-body."
    },

    {
        id: "boeing-737-800bcf",
        name: "Boeing 737-800BCF",
        manufacturer: "Boeing",
        category: "cargo",
        price: 80000000,
        type: "limited",
        stock: 15,
        description: "Boeing converted freighter."
    },

    {
        id: "boeing-737-800sf",
        name: "Boeing 737-800SF",
        manufacturer: "Boeing",
        category: "cargo",
        price: 75000000,
        type: "limited",
        stock: 15,
        description: "737 converted freighter."
    },

    {
        id: "boeing-767-300bcf",
        name: "Boeing 767-300BCF",
        manufacturer: "Boeing",
        category: "cargo",
        price: 130000000,
        type: "limited",
        stock: 15,
        description: "Converted Boeing wide-body freighter."
    },

    {
        id: "boeing-767-300bdsf",
        name: "Boeing 767-300BDSF",
        manufacturer: "Boeing",
        category: "cargo",
        price: 130000000,
        type: "limited",
        stock: 15,
        description: "Converted wide-body freighter."
    },

    {
        id: "atr-72-500",
        name: "ATR 72-500",
        manufacturer: "ATR",
        category: "turboprops",
        price: 22000000,
        type: "limited",
        stock: 20,
        description: "Regional turboprop aircraft."
    },

    {
        id: "atr-42-500",
        name: "ATR 42-500",
        manufacturer: "ATR",
        category: "turboprops",
        price: 18000000,
        type: "limited",
        stock: 20,
        description: "Regional turboprop aircraft."
    },

    {
        id: "dash-7",
        name: "DHC-7 Dash 7",
        manufacturer: "De Havilland Canada",
        category: "turboprops",
        price: 12000000,
        type: "limited",
        stock: 15,
        description: "Four-engine regional turboprop."
    },

    {
        id: "dash-6",
        name: "DHC-6 Twin Otter Series 400",
        manufacturer: "De Havilland Canada",
        category: "turboprops",
        price: 8000000,
        type: "unlimited",
        description: "Modern Twin Otter variant."
    },

    {
        id: "beechcraft-1900d",
        name: "Beechcraft 1900D",
        manufacturer: "Beechcraft",
        category: "turboprops",
        price: 8000000,
        type: "limited",
        stock: 25,
        description: "Regional turboprop aircraft."
    },

    {
        id: "saab-340b",
        name: "Saab 340B",
        manufacturer: "Saab",
        category: "turboprops",
        price: 12000000,
        type: "limited",
        stock: 20,
        description: "Regional turboprop aircraft."
    },

    {
        id: "embraer-embraer-120",
        name: "Embraer EMB 120 Brasilia",
        manufacturer: "Embraer",
        category: "turboprops",
        price: 6000000,
        type: "limited",
        stock: 20,
        description: "Regional turboprop aircraft."
    },

    {
        id: "fairchild-metro",
        name: "Fairchild Swearingen Metro",
        manufacturer: "Fairchild",
        category: "turboprops",
        price: 5000000,
        type: "limited",
        stock: 20,
        description: "Regional turboprop aircraft."
    },

    {
        id: "cessna-208",
        name: "Cessna 208 Caravan",
        manufacturer: "Cessna",
        category: "turboprops",
        price: 2500000,
        type: "unlimited",
        description: "Single-engine utility aircraft."
    },

    {
        id: "cessna-208b",
        name: "Cessna 208B Grand Caravan",
        manufacturer: "Cessna",
        category: "turboprops",
        price: 3000000,
        type: "unlimited",
        description: "Utility turboprop aircraft."
    },

    {
        id: "quest-kodiak",
        name: "Quest Kodiak",
        manufacturer: "Quest Aircraft",
        category: "turboprops",
        price: 3000000,
        type: "unlimited",
        description: "Single-engine utility aircraft."
    },

    {
        id: "textron-denali",
        name: "Textron Denali",
        manufacturer: "Textron",
        category: "turboprops",
        price: 6000000,
        type: "limited",
        stock: 15,
        description: "Single-engine turboprop aircraft."
    },


    /* =========================================
       MORE HELICOPTERS
    ========================================== */

    {
        id: "airbus-h155",
        name: "Airbus H155",
        manufacturer: "Airbus Helicopters",
        category: "helicopters",
        price: 13000000,
        type: "limited",
        stock: 15,
        description: "Medium twin-engine helicopter."
    },

    {
        id: "airbus-h130",
        name: "Airbus H130",
        manufacturer: "Airbus Helicopters",
        category: "helicopters",
        price: 5000000,
        type: "unlimited",
        description: "Light single-engine helicopter."
    },

    {
        id: "airbus-h120",
        name: "Airbus H120",
        manufacturer: "Airbus Helicopters",
        category: "helicopters",
        price: 3000000,
        type: "unlimited",
        description: "Light utility helicopter."
    },

    {
        id: "leonardo-aw109",
        name: "Leonardo AW109",
        manufacturer: "Leonardo",
        category: "helicopters",
        price: 7000000,
        type: "unlimited",
        description: "Light twin-engine helicopter."
    },

    {
        id: "leonardo-aw119",
        name: "Leonardo AW119",
        manufacturer: "Leonardo",
        category: "helicopters",
        price: 5000000,
        type: "unlimited",
        description: "Single-engine helicopter."
    },

    {
        id: "leonardo-aw149",
        name: "Leonardo AW149",
        manufacturer: "Leonardo",
        category: "military",
        price: 15000000,
        type: "limited",
        stock: 10,
        description: "Military utility helicopter."
    },

    {
        id: "leonardo-aw159",
        name: "Leonardo AW159 Wildcat",
        manufacturer: "Leonardo",
        category: "military",
        price: 25000000,
        type: "limited",
        stock: 5,
        description: "Military naval helicopter."
    },

    {
        id: "sikorsky-s61",
        name: "Sikorsky S-61",
        manufacturer: "Sikorsky",
        category: "helicopters",
        price: 10000000,
        type: "limited",
        stock: 10,
        description: "Classic medium helicopter."
    },

    {
        id: "sikorsky-s65",
        name: "Sikorsky CH-53 Sea Stallion",
        manufacturer: "Sikorsky",
        category: "military",
        price: 30000000,
        type: "limited",
        stock: 3,
        description: "Heavy military transport helicopter."
    },

    {
        id: "sikorsky-ch53k",
        name: "Sikorsky CH-53K King Stallion",
        manufacturer: "Sikorsky",
        category: "military",
        price: 100000000,
        type: "limited",
        stock: 2,
        description: "Heavy-lift military helicopter."
    },

    {
        id: "bell-412ep",
        name: "Bell 412EP",
        manufacturer: "Bell",
        category: "helicopters",
        price: 7000000,
        type: "unlimited",
        description: "Utility twin-engine helicopter."
    },

    {
        id: "bell-407gxi",
        name: "Bell 407GXi",
        manufacturer: "Bell",
        category: "helicopters",
        price: 6000000,
        type: "unlimited",
        description: "Modern single-engine helicopter."
    },

    {
        id: "bell-505",
        name: "Bell 505 Jet Ranger X",
        manufacturer: "Bell",
        category: "helicopters",
        price: 2000000,
        type: "unlimited",
        description: "Light training helicopter."
    },

    {
        id: "bell-47",
        name: "Bell 47",
        manufacturer: "Bell",
        category: "historic",
        price: 1500000,
        type: "one",
        stock: 1,
        description: "Historic light helicopter."
    },

    {
        id: "hughes-500",
        name: "MD 500",
        manufacturer: "MD Helicopters",
        category: "helicopters",
        price: 2500000,
        type: "unlimited",
        description: "Light utility helicopter."
    },

    {
        id: "md-902",
        name: "MD 902 Explorer",
        manufacturer: "MD Helicopters",
        category: "helicopters",
        price: 7000000,
        type: "limited",
        stock: 10,
        description: "Twin-engine light helicopter."
    },


    /* =========================================
       MORE BUSINESS AVIATION
    ========================================== */

    {
        id: "gulfstream-g700-elite",
        name: "Gulfstream G700 Executive",
        manufacturer: "Gulfstream",
        category: "ultra-rare",
        price: 100000000,
        type: "one",
        stock: 1,
        description: "Fictional gameplay luxury configuration of a real G700."
    },

    {
        id: "bombardier-global-7500-vip",
        name: "Bombardier Global 7500 VIP",
        manufacturer: "Bombardier",
        category: "ultra-rare",
        price: 95000000,
        type: "one",
        stock: 1,
        description: "Fictional gameplay VIP configuration."
    },

    {
        id: "falcon-10x-vip",
        name: "Dassault Falcon 10X VIP",
        manufacturer: "Dassault",
        category: "ultra-rare",
        price: 90000000,
        type: "one",
        stock: 1,
        description: "Fictional gameplay VIP configuration."
    },

    {
        id: "acj350-vip",
        name: "Airbus ACJ350 VIP",
        manufacturer: "Airbus",
        category: "ultra-rare",
        price: 600000000,
        type: "one",
        stock: 1,
        description: "Fictional gameplay VIP configuration."
    },

    {
        id: "bbj-787-vip",
        name: "Boeing 787 BBJ VIP",
        manufacturer: "Boeing",
        category: "ultra-rare",
        price: 500000000,
        type: "one",
        stock: 1,
        description: "Fictional gameplay VIP configuration."
    }

];


/* =========================================
   CATALOGUE CHECK
========================================== */

console.log(
    "Aviation catalogue:",
    aviationItems.length,
    "aircraft"
);


if (aviationItems.length < 300) {

    console.error(
        "ERROR: Aviation catalogue contains fewer than 300 entries."
    );

}