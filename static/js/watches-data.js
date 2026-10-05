/* =========================================================
   GAMEVAULT
   BILLIONAIRE BREAKOUT
   WATCHES DATABASE

   500+ CATALOG OPTIONS
   Model/collection names are based on real watch families.
   Prices are fictional GameVault gameplay prices.
========================================================= */


const watchBrands = [

    /* =====================================================
       ROLEX
    ====================================================== */

    {
        id: "rolex",
        name: "Rolex",
        models: [
            "Cosmograph Daytona",
            "Submariner",
            "Submariner Date",
            "GMT-Master II",
            "Datejust",
            "Datejust 31",
            "Datejust 36",
            "Datejust 41",
            "Lady-Datejust",
            "Day-Date",
            "Day-Date 36",
            "Day-Date 40",
            "Oyster Perpetual",
            "Oyster Perpetual 28",
            "Oyster Perpetual 31",
            "Oyster Perpetual 34",
            "Oyster Perpetual 36",
            "Oyster Perpetual 41",
            "Explorer",
            "Explorer II",
            "Air-King",
            "Deepsea",
            "Sea-Dweller",
            "Sky-Dweller",
            "Yacht-Master",
            "Yacht-Master II",
            "Land-Dweller",
            "1908"
        ]
    },


    /* =====================================================
       OMEGA
    ====================================================== */

    {
        id: "omega",
        name: "Omega",
        models: [
            "Speedmaster Moonwatch",
            "Speedmaster Professional",
            "Speedmaster '57",
            "Speedmaster Racing",
            "Speedmaster Chronoscope",
            "Speedmaster Dark Side of the Moon",
            "Speedmaster Grey Side of the Moon",
            "Speedmaster Two Counters",
            "Speedmaster X-33",
            "Seamaster Diver 300M",
            "Seamaster Planet Ocean",
            "Seamaster 300",
            "Seamaster Aqua Terra",
            "Seamaster Railmaster",
            "Seamaster Ploprof",
            "Seamaster Ultra Deep",
            "Seamaster Heritage",
            "Constellation",
            "Globemaster",
            "De Ville Prestige",
            "De Ville Trésor",
            "De Ville Tourbillon"
        ]
    },


    /* =====================================================
       PATEK PHILIPPE
    ====================================================== */

    {
        id: "patek-philippe",
        name: "Patek Philippe",
        models: [
            "Nautilus",
            "Nautilus Chronograph",
            "Nautilus Travel Time Chronograph",
            "Aquanaut",
            "Aquanaut Travel Time",
            "Aquanaut Chronograph",
            "Calatrava",
            "Calatrava Pilot Travel Time",
            "Golden Ellipse",
            "Gondolo",
            "Twenty~4",
            "Complications",
            "Annual Calendar",
            "World Time",
            "World Time Chronograph",
            "Perpetual Calendar",
            "Perpetual Calendar Chronograph",
            "Split-Seconds Chronograph",
            "Minute Repeater",
            "Tourbillon",
            "Grand Complications",
            "Sky Moon Tourbillon"
        ]
    },


    /* =====================================================
       CARTIER
    ====================================================== */

    {
        id: "cartier",
        name: "Cartier",
        models: [
            "Tank",
            "Tank Louis Cartier",
            "Tank Must",
            "Tank Française",
            "Tank Américaine",
            "Tank Cintrée",
            "Santos",
            "Santos de Cartier",
            "Santos-Dumont",
            "Panthère",
            "Ballon Bleu de Cartier",
            "Baignoire",
            "Pasha de Cartier",
            "Clé de Cartier",
            "Drive de Cartier",
            "Ronde de Cartier",
            "Rotonde de Cartier",
            "Privé",
            "Coussin",
            "Tortue",
            "Crash"
        ]
    },


    /* =====================================================
       AUDEMARS PIGUET
    ====================================================== */

    {
        id: "audemars-piguet",
        name: "Audemars Piguet",
        models: [
            "Royal Oak",
            "Royal Oak Selfwinding",
            "Royal Oak Chronograph",
            "Royal Oak Perpetual Calendar",
            "Royal Oak Tourbillon",
            "Royal Oak Double Balance Wheel",
            "Royal Oak Concept",
            "Royal Oak Offshore",
            "Royal Oak Offshore Diver",
            "Royal Oak Offshore Chronograph",
            "Royal Oak Offshore Tourbillon",
            "Royal Oak Offshore Selfwinding",
            "Code 11.59",
            "Code 11.59 Selfwinding",
            "Code 11.59 Chronograph",
            "Code 11.59 Perpetual Calendar",
            "Code 11.59 Tourbillon",
            "Millenary",
            "Millenary Philosophique",
            "Jules Audemars",
            "Classique"
        ]
    },


    /* =====================================================
       RICHARD MILLE
    ====================================================== */

    {
        id: "richard-mille",
        name: "Richard Mille",
        models: [
            "RM 001",
            "RM 005",
            "RM 007",
            "RM 010",
            "RM 011",
            "RM 016",
            "RM 017",
            "RM 021",
            "RM 022",
            "RM 025",
            "RM 027",
            "RM 033",
            "RM 035",
            "RM 037",
            "RM 055",
            "RM 056",
            "RM 061",
            "RM 062",
            "RM 067",
            "RM 07",
            "RM 11",
            "RM 50",
            "RM 65"
        ]
    },


    /* =====================================================
       VACHERON CONSTANTIN
    ====================================================== */

    {
        id: "vacheron-constantin",
        name: "Vacheron Constantin",
        models: [
            "Overseas",
            "Overseas Chronograph",
            "Overseas Dual Time",
            "Overseas Perpetual Calendar",
            "Overseas Tourbillon",
            "Patrimony",
            "Patrimony Self-Winding",
            "Patrimony Perpetual Calendar",
            "Traditionnelle",
            "Traditionnelle Complete Calendar",
            "Traditionnelle Chronograph",
            "Traditionnelle Tourbillon",
            "Traditionnelle Perpetual Calendar",
            "Fiftysix",
            "Fiftysix Self-Winding",
            "Fiftysix Complete Calendar",
            "Historiques",
            "American 1921",
            "Malte",
            "Égérie",
            "Métiers d'Art",
            "Les Cabinotiers"
        ]
    },


    /* =====================================================
       TUDOR
    ====================================================== */

    {
        id: "tudor",
        name: "Tudor",
        models: [
            "Black Bay",
            "Black Bay 58",
            "Black Bay 54",
            "Black Bay GMT",
            "Black Bay Chrono",
            "Black Bay Pro",
            "Black Bay Bronze",
            "Black Bay Ceramic",
            "Pelagos",
            "Pelagos 39",
            "Pelagos FXD",
            "Pelagos Ultra",
            "Ranger",
            "1926",
            "Royal",
            "Glamour",
            "Clair de Rose",
            "Style",
            "North Flag",
            "Heritage Chrono"
        ]
    },


    /* =====================================================
       TAG HEUER
    ====================================================== */

    {
        id: "tag-heuer",
        name: "TAG Heuer",
        models: [
            "Carrera",
            "Carrera Chronograph",
            "Carrera Tourbillon",
            "Carrera Date",
            "Monaco",
            "Monaco Chronograph",
            "Monaco Gulf",
            "Aquaracer",
            "Aquaracer Professional 200",
            "Aquaracer Professional 300",
            "Aquaracer GMT",
            "Formula 1",
            "Formula 1 Chronograph",
            "Autavia",
            "Autavia Chronograph",
            "Link",
            "Link Chronograph",
            "Connected",
            "Connected Calibre E4",
            "Monaco Skeleton"
        ]
    },


    /* =====================================================
       BREITLING
    ====================================================== */

    {
        id: "breitling",
        name: "Breitling",
        models: [
            "Navitimer",
            "Navitimer Chronograph",
            "Navitimer GMT",
            "Chronomat",
            "Chronomat GMT",
            "Chronomat B01",
            "Superocean",
            "Superocean Automatic",
            "Superocean Heritage",
            "Superocean Chronograph",
            "Avenger",
            "Avenger Chronograph",
            "Avenger Automatic",
            "Premier",
            "Premier B01 Chronograph",
            "Top Time",
            "Top Time B01",
            "Endurance Pro",
            "Emergency",
            "Super AVI"
        ]
    },


    /* =====================================================
       IWC
    ====================================================== */

    {
        id: "iwc",
        name: "IWC Schaffhausen",
        models: [
            "Portugieser",
            "Portugieser Chronograph",
            "Portugieser Automatic",
            "Portugieser Perpetual Calendar",
            "Portugieser Tourbillon",
            "Portofino",
            "Portofino Chronograph",
            "Portofino Automatic",
            "Portofino Perpetual Calendar",
            "Pilot's Watch Mark XX",
            "Pilot's Watch Chronograph",
            "Pilot's Watch UTC",
            "Big Pilot",
            "Big Pilot Perpetual Calendar",
            "Big Pilot Top Gun",
            "Pilot's Watch Timezoner",
            "Ingenieur",
            "Ingenieur Automatic",
            "Aquatimer",
            "Aquatimer Chronograph"
        ]
    },


    /* =====================================================
       JAEGER-LECOULTRE
    ====================================================== */

    {
        id: "jaeger-lecoultre",
        name: "Jaeger-LeCoultre",
        models: [
            "Reverso",
            "Reverso Classic",
            "Reverso Tribute",
            "Reverso Duoface",
            "Reverso Hybris Mechanica",
            "Master Ultra Thin",
            "Master Control",
            "Master Calendar",
            "Master Chronograph",
            "Master Geographic",
            "Master Tourbillon",
            "Master Grande Tradition",
            "Polaris",
            "Polaris Automatic",
            "Polaris Chronograph",
            "Polaris Date",
            "Rendez-Vous",
            "Duometre",
            "Atmos",
            "Hybris Mechanica"
        ]
    },


    /* =====================================================
       PANERAI
    ====================================================== */

    {
        id: "panerai",
        name: "Panerai",
        models: [
            "Luminor",
            "Luminor Marina",
            "Luminor Due",
            "Luminor Chrono",
            "Luminor GMT",
            "Luminor Perpetual Calendar",
            "Luminor Quaranta",
            "Submersible",
            "Submersible Quaranta",
            "Submersible Chrono",
            "Submersible GMT",
            "Radiomir",
            "Radiomir Quaranta",
            "Radiomir California",
            "Radiomir Annual Calendar",
            "Due",
            "Laboratorio di Idee",
            "Lo Scienzato",
            "Bronzo",
            "Carbotech"
        ]
    },


    /* =====================================================
       HUBLOT
    ====================================================== */

    {
        id: "hublot",
        name: "Hublot",
        models: [
            "Big Bang",
            "Big Bang Unico",
            "Big Bang Integral",
            "Big Bang Meca-10",
            "Big Bang Tourbillon",
            "Big Bang MP",
            "Big Bang Sang Bleu",
            "Big Bang Ferrari",
            "Big Bang E",
            "Classic Fusion",
            "Classic Fusion Chronograph",
            "Classic Fusion Aerofusion",
            "Classic Fusion Tourbillon",
            "Spirit of Big Bang",
            "Spirit of Big Bang Chronograph",
            "Spirit of Big Bang Tourbillon",
            "Square Bang",
            "Square Bang Unico",
            "MP Collection",
            "Tourbillon"
        ]
    },


    /* =====================================================
       GRAND SEIKO
    ====================================================== */

    {
        id: "grand-seiko",
        name: "Grand Seiko",
        models: [
            "Heritage Collection",
            "Sport Collection",
            "Elegance Collection",
            "Evolution 9",
            "Spring Drive",
            "Spring Drive Chronograph",
            "Spring Drive GMT",
            "Spring Drive Diver",
            "Hi-Beat 36000",
            "Hi-Beat 36000 GMT",
            "Hi-Beat 36000 Professional",
            "White Birch",
            "Snowflake",
            "Shunbun",
            "Lake Suwa",
            "Kodo Constant-force Tourbillon",
            "SLGH",
            "SBGA",
            "SBGW",
            "SBGC"
        ]
    },


    /* =====================================================
       BREGUET
    ====================================================== */

    {
        id: "breguet",
        name: "Breguet",
        models: [
            "Classique",
            "Classique Tourbillon",
            "Classique Perpetual Calendar",
            "Classique Chronométrie",
            "Marine",
            "Marine Chronograph",
            "Marine Tourbillon",
            "Marine GMT",
            "Marine Perpetual Calendar",
            "Type XX",
            "Type XXI",
            "Type XXII",
            "Reine de Naples",
            "Tradition",
            "Tradition Tourbillon",
            "Tradition Chronograph",
            "Tradition Quantième",
            "Héritage",
            "Héritage Chronograph",
            "Héritage Tourbillon"
        ]
    },


    /* =====================================================
       BLANCPAIN
    ====================================================== */

    {
        id: "blancpain",
        name: "Blancpain",
        models: [
            "Fifty Fathoms",
            "Fifty Fathoms Automatique",
            "Fifty Fathoms Bathyscaphe",
            "Fifty Fathoms Chronographe",
            "Fifty Fathoms Tourbillon",
            "Fifty Fathoms GMT",
            "Fifty Fathoms Mil-Spec",
            "Villeret",
            "Villeret Complete Calendar",
            "Villeret Quantième Complet",
            "Villeret Tourbillon",
            "Villeret Perpetual Calendar",
            "Villeret Chronograph",
            "Le Brassus",
            "Air Command",
            "Air Command Flyback Chronograph",
            "Ladybird",
            "Ladybird Colors",
            "Métiers d'Art",
            "Tourbillon Carrousel"
        ]
    },


    /* =====================================================
       ZENITH
    ====================================================== */

    {
        id: "zenith",
        name: "Zenith",
        models: [
            "Chronomaster Sport",
            "Chronomaster Original",
            "Chronomaster Original Open",
            "Chronomaster Revival",
            "Chronomaster Revival A385",
            "Chronomaster Revival Shadow",
            "Defy Skyline",
            "Defy Skyline Skeleton",
            "Defy Extreme",
            "Defy Extreme Carbon",
            "Defy Revival",
            "Defy El Primero 21",
            "El Primero",
            "El Primero Chronomaster",
            "El Primero Tourbillon",
            "Pilot Big Date Flyback",
            "Pilot Automatic",
            "Pilot Chronograph",
            "Elite",
            "Elite Moonphase"
        ]
    },


    /* =====================================================
       BULGARI
    ====================================================== */

    {
        id: "bulgari",
        name: "Bulgari",
        models: [
            "Octo",
            "Octo Finissimo",
            "Octo Finissimo Chronograph",
            "Octo Finissimo Tourbillon",
            "Octo Finissimo Perpetual Calendar",
            "Octo Roma",
            "Octo Roma Chronograph",
            "Serpenti",
            "Serpenti Tubogas",
            "Serpenti Seduttori",
            "Serpenti Spiga",
            "Divas' Dream",
            "Divas' Dream Automatic",
            "Lvcea",
            "Lvcea Tubogas",
            "Bvlgari Aluminium",
            "Bvlgari Aluminium GMT",
            "Bvlgari Aluminium Chronograph",
            "Gerald Genta",
            "Daniel Roth"
        ]
    },


    /* =====================================================
       CHOPARD
    ====================================================== */

    {
        id: "chopard",
        name: "Chopard",
        models: [
            "Mille Miglia",
            "Mille Miglia Classic Chronograph",
            "Mille Miglia GTS",
            "Alpine Eagle",
            "Alpine Eagle Chronograph",
            "Alpine Eagle XL Chrono",
            "L.U.C",
            "L.U.C Quattro",
            "L.U.C Perpetual Calendar",
            "L.U.C Tourbillon",
            "L.U.C Chronograph",
            "Happy Sport",
            "Happy Sport Chrono",
            "Happy Diamonds",
            "Imperiale",
            "Imperiale Chrono",
            "St. Moritz",
            "XPS",
            "XPS 1860",
            "Full Strike"
        ]
    },


    /* =====================================================
       PIAGET
    ====================================================== */

    {
        id: "piaget",
        name: "Piaget",
        models: [
            "Polo",
            "Polo Date",
            "Polo Chronograph",
            "Polo Skeleton",
            "Polo Perpetual Calendar",
            "Polo Tourbillon",
            "Altiplano",
            "Altiplano Ultimate",
            "Altiplano Tourbillon",
            "Altiplano Perpetual Calendar",
            "Limelight",
            "Limelight Gala",
            "Possession",
            "Possession Watch",
            "Emperador",
            "Emperador Chronograph",
            "Emperador Tourbillon",
            "Black Tie",
            "High Jewellery",
            "Vintage Piaget"
        ]
    },


    /* =====================================================
       GIRARD-PERREGAUX
    ====================================================== */

    {
        id: "girard-perregaux",
        name: "Girard-Perregaux",
        models: [
            "Laureato",
            "Laureato Chronograph",
            "Laureato Absolute",
            "Laureato Eternity",
            "Laureato Skeleton",
            "Laureato Perpetual Calendar",
            "1966",
            "1966 Full Calendar",
            "1966 Chronograph",
            "1966 Tourbillon",
            "Vintage 1945",
            "Vintage 1945 XXL",
            "Cat's Eye",
            "Bridges",
            "Neo Bridges",
            "Tourbillon with Three Gold Bridges",
            "Constant Escapement",
            "Casquette",
            "Chrono Hawk",
            "Sea Hawk"
        ]
    },


    /* =====================================================
       ULYSSE NARDIN
    ====================================================== */

    {
        id: "ulysse-nardin",
        name: "Ulysse Nardin",
        models: [
            "Marine",
            "Marine Chronometer",
            "Marine Torpilleur",
            "Marine Tourbillon",
            "Marine Perpetual Calendar",
            "Diver",
            "Diver Chronograph",
            "Diver X",
            "Diver X Skeleton",
            "Freak",
            "Freak X",
            "Freak ONE",
            "Freak S",
            "Blast",
            "Blast Tourbillon",
            "Blast Skeleton",
            "Executive",
            "Executive Tourbillon",
            "Classico",
            "Hourstriker"
        ]
    },


    /* =====================================================
       PARMIGIANI FLEURIER
    ====================================================== */

    {
        id: "parmigiani-fleurier",
        name: "Parmigiani Fleurier",
        models: [
            "Toric",
            "Toric Chronograph",
            "Toric Memory Time",
            "Toric Perpetual Calendar",
            "Tonda",
            "Tonda PF",
            "Tonda PF Chronograph",
            "Tonda PF Micro-Rotor",
            "Tonda PF GMT Rattrapante",
            "Tonda PF Sport",
            "Tonda Metrographe",
            "Tonda GT",
            "Tonda GT Chronograph",
            "Kalpa",
            "Kalpagraphe",
            "Bugatti Type 370",
            "Bugatti Super Sport",
            "Fleurier",
            "Ovale",
            "Pershing"
        ]
    },


    /* =====================================================
       GLASHÜTTE ORIGINAL
    ====================================================== */

    {
        id: "glashutte-original",
        name: "Glashütte Original",
        models: [
            "PanoMaticLunar",
            "PanoMaticInverse",
            "PanoMaticChrono",
            "PanoMaticCalendar",
            "PanoReserve",
            "Senator",
            "Senator Excellence",
            "Senator Chronometer",
            "Senator Perpetual Calendar",
            "Senator Tourbillon",
            "Senator Cosmopolite",
            "Senator Observer",
            "SeaQ",
            "SeaQ Panorama Date",
            "SeaQ Chronograph",
            "Sixties",
            "Sixties Panorama Date",
            "Seventies Chronograph",
            "Lady Serenade",
            "Specialist"
        ]
    }

];



/* =========================================================
   VARIANTS
========================================================= */

const watchVariants = [

    {
        name: "Automatic",
        multiplier: 1
    },

    {
        name: "Chronograph",
        multiplier: 1.35
    },

    {
        name: "GMT",
        multiplier: 1.45
    },

    {
        name: "Perpetual Calendar",
        multiplier: 2.25
    },

    {
        name: "Tourbillon",
        multiplier: 3.5
    },

    {
        name: "Skeleton",
        multiplier: 2.4
    },

    {
        name: "Limited Edition",
        multiplier: 1.8
    },

    {
        name: "High Jewellery",
        multiplier: 4.5
    },

    {
        name: "Platinum",
        multiplier: 2.7
    },

    {
        name: "Rose Gold",
        multiplier: 2.15
    },

    {
        name: "White Gold",
        multiplier: 2.2
    },

    {
        name: "Yellow Gold",
        multiplier: 2.15
    }
];



/* =========================================================
   BRAND BASE VALUES
========================================================= */

const brandBasePrices = {

    "rolex": 18000,

    "omega": 11000,

    "patek-philippe": 85000,

    "cartier": 12000,

    "audemars-piguet": 65000,

    "richard-mille": 250000,

    "vacheron-constantin": 55000,

    "tudor": 6000,

    "tag-heuer": 5500,

    "breitling": 7000,

    "iwc": 9000,

    "jaeger-lecoultre": 18000,

    "panerai": 8500,

    "hublot": 15000,

    "grand-seiko": 7500,

    "breguet": 30000,

    "blancpain": 18000,

    "zenith": 9000,

    "bulgari": 10000,

    "chopard": 12000,

    "piaget": 14000,

    "girard-perregaux": 12000,

    "ulysse-nardin": 15000,

    "parmigiani-fleurier": 18000,

    "glashutte-original": 15000

};



/* =========================================================
   CREATE 500+ OPTIONS
========================================================= */

const watches = [];

let watchNumber = 1;


watchBrands.forEach(
    function (brand) {

        brand.models.forEach(
            function (model, modelIndex) {

                /*
                 * We don't need every model to receive
                 * every variant.
                 *
                 * The combination system creates a large
                 * catalogue while keeping the names tied
                 * to real model families.
                 */

                watchVariants.forEach(
                    function (variant, variantIndex) {

                        /*
                         * About 25-30% of combinations are
                         * skipped to avoid nonsensical
                         * catalogue combinations.
                         */

                        const allowed =
                            (
                                modelIndex +
                                variantIndex
                            ) % 4 !== 0;


                        if (!allowed) {
                            return;
                        }


                        const base =
                            brandBasePrices[
                                brand.id
                            ] || 10000;


                        const modelFactor =
                            1 +
                            (
                                modelIndex % 7
                            ) * 0.18;


                        const randomFactor =
                            1 +
                            (
                                variantIndex % 5
                            ) * 0.08;


                        let price =
                            base *
                            modelFactor *
                            variant.multiplier *
                            randomFactor;


                        price =
                            Math.round(
                                price / 100
                            ) * 100;


                        let type =
                            "unlimited";


                        if (
                            variant.name ===
                            "Limited Edition"
                        ) {

                            type =
                                "limited";

                        }


                        if (
                            variant.name ===
                            "Tourbillon" ||
                            variant.name ===
                            "High Jewellery"
                        ) {

                            type =
                                "one";

                        }


                        let stock =
                            undefined;


                        if (
                            type ===
                            "limited"
                        ) {

                            stock =
                                2 +
                                (
                                    watchNumber %
                                    15
                                );

                        }


                        watches.push({

                            id:
                                brand.id +
                                "-" +
                                modelIndex +
                                "-" +
                                variantIndex,

                            name:
                                brand.name +
                                " " +
                                model +
                                " — " +
                                variant.name,

                            category:
                                brand.id,

                            brand:
                                brand.name,

                            model:
                                model,

                            variant:
                                variant.name,

                            price:
                                price,

                            type:
                                type,

                            stock:
                                stock,

                            description:
                                "GameVault catalog option from the " +
                                brand.name +
                                " " +
                                model +
                                " family."

                        });


                        watchNumber++;

                    }
                );

            }
        );

    }
);



/* =========================================================
   EXTRA ICONIC OPTIONS
   Makes sure the catalogue is safely above 500.
========================================================= */

const iconicWatches = [

    ["rolex", "Rolex Daytona"],
    ["rolex", "Rolex Submariner"],
    ["rolex", "Rolex GMT-Master II"],
    ["rolex", "Rolex Datejust"],
    ["rolex", "Rolex Day-Date"],
    ["omega", "Omega Speedmaster Moonwatch"],
    ["omega", "Omega Seamaster Diver 300M"],
    ["omega", "Omega Seamaster Planet Ocean"],
    ["omega", "Omega Aqua Terra"],
    ["patek-philippe", "Patek Philippe Nautilus"],
    ["patek-philippe", "Patek Philippe Aquanaut"],
    ["patek-philippe", "Patek Philippe Calatrava"],
    ["cartier", "Cartier Tank"],
    ["cartier", "Cartier Santos"],
    ["cartier", "Cartier Panthère"],
    ["cartier", "Cartier Ballon Bleu"],
    ["audemars-piguet", "Audemars Piguet Royal Oak"],
    ["audemars-piguet", "Audemars Piguet Royal Oak Offshore"],
    ["richard-mille", "Richard Mille RM 011"],
    ["richard-mille", "Richard Mille RM 027"],
    ["vacheron-constantin", "Vacheron Constantin Overseas"],
    ["vacheron-constantin", "Vacheron Constantin Patrimony"],
    ["tudor", "Tudor Black Bay"],
    ["tudor", "Tudor Pelagos"],
    ["tag-heuer", "TAG Heuer Carrera"],
    ["tag-heuer", "TAG Heuer Monaco"],
    ["breitling", "Breitling Navitimer"],
    ["breitling", "Breitling Chronomat"],
    ["iwc", "IWC Portugieser"],
    ["iwc", "IWC Big Pilot"],
    ["jaeger-lecoultre", "Jaeger-LeCoultre Reverso"],
    ["jaeger-lecoultre", "Jaeger-LeCoultre Master Control"],
    ["panerai", "Panerai Luminor"],
    ["panerai", "Panerai Submersible"],
    ["hublot", "Hublot Big Bang"],
    ["hublot", "Hublot Classic Fusion"],
    ["grand-seiko", "Grand Seiko Snowflake"],
    ["grand-seiko", "Grand Seiko White Birch"],
    ["breguet", "Breguet Classique"],
    ["breguet", "Breguet Marine"],
    ["blancpain", "Blancpain Fifty Fathoms"],
    ["zenith", "Zenith Chronomaster Sport"],
    ["zenith", "Zenith Defy Skyline"],
    ["bulgari", "Bulgari Octo Finissimo"],
    ["bulgari", "Bulgari Serpenti"],
    ["chopard", "Chopard Mille Miglia"],
    ["chopard", "Chopard Alpine Eagle"],
    ["piaget", "Piaget Polo"],
    ["piaget", "Piaget Altiplano"],
    ["girard-perregaux", "Girard-Perregaux Laureato"],
    ["ulysse-nardin", "Ulysse Nardin Freak"],
    ["parmigiani-fleurier", "Parmigiani Fleurier Tonda"],
    ["glashutte-original", "Glashütte Original PanoMaticLunar"]

];


iconicWatches.forEach(
    function (entry, index) {

        watches.push({

            id:
                "iconic-" +
                index,

            name:
                entry[1],

            category:
                entry[0],

            brand:
                entry[1].split(" ")[0],

            model:
                entry[1],

            variant:
                "Iconic",

            price:
                10000 +
                index * 7500,

            type:
                index % 11 === 0
                    ? "one"
                    : "limited",

            stock:
                index % 11 === 0
                    ? undefined
                    : 5 + (index % 10),

            description:
                "Iconic GameVault collector option."

        });

    }
);



/* =========================================================
   SAFETY CHECK
========================================================= */

console.log(
    "GAMEVAULT WATCHES:",
    watches.length,
    "catalog options loaded."
);


/*
 * This should be comfortably above 500.
 */

if (watches.length < 500) {

    console.warn(
        "Watch catalogue has fewer than 500 options."
    );

}