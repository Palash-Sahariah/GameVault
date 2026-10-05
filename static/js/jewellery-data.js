/* =========================================================
   GAMEVAULT
   BILLIONAIRE BREAKOUT
   JEWELLERY DATABASE

   500+ GAMEPLAY CATALOG OPTIONS

   IMPORTANT:
   Prices are fictional GameVault gameplay values.
========================================================= */


/* =========================================================
   BRANDS + REAL COLLECTIONS
========================================================= */

const jewelleryBrands = [

    /* ================= CARTIER ================= */

    {
        id: "cartier",
        name: "Cartier",
        collections: [

            "LOVE",
            "Juste un Clou",
            "Trinity",
            "Panthère",
            "Clash de Cartier",
            "Santos de Cartier",
            "Maillon de Cartier",
            "Écrou de Cartier",
            "Grain de Café",
            "C de Cartier",
            "Agrafe",
            "Aldo Cipullo",
            "Cartier d'Amour",
            "Diamants Légers",
            "Étincelle de Cartier",
            "Galanterie et Joaillerie",
            "High Jewellery",
            "Panthère de Cartier",
            "Sixième Sens",
            "Collection Cartier"
        ]
    },


    /* ================= VAN CLEEF ================= */

    {
        id: "van-cleef-arpels",
        name: "Van Cleef & Arpels",
        collections: [

            "Alhambra",
            "Vintage Alhambra",
            "Magic Alhambra",
            "Sweet Alhambra",
            "Frivole",
            "Perlée",
            "Ludo",
            "Liane",
            "Butterflies",
            "Zip",
            "Fleurs",
            "Lucky Spring",
            "Lucky Animals",
            "Two Butterfly",
            "Fauna",
            "Romeo & Juliet",
            "Folie des Prés",
            "Snowflake",
            "Palmyre",
            "À Cheval",
            "Olympia",
            "Treasure Island",
            "Fascinating Egypt",
            "Le Secret",
            "Sous les Étoiles",
            "Emeralds in Majesty",
            "Treasure of Rubies",
            "High Jewelry"
        ]
    },


    /* ================= TIFFANY ================= */

    {
        id: "tiffany",
        name: "Tiffany & Co.",
        collections: [

            "HardWear",
            "Tiffany T",
            "Tiffany Lock",
            "Tiffany Knot",
            "Return to Tiffany",
            "Tiffany Victoria",
            "Tiffany Keys",
            "Elsa Peretti",
            "Paloma Picasso",
            "Tiffany 1837",
            "Tiffany Forge",
            "Tiffany Titan",
            "Sixteen Stone",
            "Bird on a Rock",
            "Schlumberger",
            "Atlas",
            "Paper Flowers",
            "Open Heart",
            "Smile",
            "Blue Book",
            "High Jewelry"
        ]
    },


    /* ================= BULGARI ================= */

    {
        id: "bulgari",
        name: "Bulgari",
        collections: [

            "B.zero1",
            "Bvlgari Bvlgari",
            "Serpenti",
            "Serpenti Viper",
            "Serpenti Tubogas",
            "Serpenti Forever",
            "Divas' Dream",
            "Fiorever",
            "Allegra",
            "Diva's Dream",
            "Monete",
            "Cabochon",
            "Parentesi",
            "Save the Children",
            "Festa",
            "Griffe",
            "Spiga",
            "MarryMe",
            "High Jewellery",
            "Bulgari Heritage"
        ]
    },


    /* ================= HARRY WINSTON ================= */

    {
        id: "harry-winston",
        name: "Harry Winston",
        collections: [

            "HW Logo",
            "HW Embrace",
            "Lily Cluster",
            "Winston Cluster",
            "Winston Gates",
            "Emerald",
            "Traffic",
            "Forget-Me-Not",
            "Water",
            "Sunflower",
            "New York",
            "Classic Winston",
            "Winston Icons",
            "High Jewelry",
            "Ultimate Adornments"
        ]
    },


    /* ================= GRAFF ================= */

    {
        id: "graff",
        name: "Graff",
        collections: [

            "Butterfly",
            "Laurence Graff Signature",
            "Wild Flower",
            "Spiral",
            "Threads",
            "Classic Graff",
            "Icon",
            "Bamboo",
            "Tilda's Bow",
            "Constellation",
            "Dalia",
            "Carats",
            "High Jewellery",
            "Graff Infinity",
            "Graff Flame"
        ]
    },


    /* ================= CHOPARD ================= */

    {
        id: "chopard",
        name: "Chopard",
        collections: [

            "Happy Hearts",
            "Happy Diamonds",
            "Ice Cube",
            "My Happy Hearts",
            "For Ever",
            "Precious Lace",
            "L'Heure du Diamant",
            "Temptations",
            "Red Carpet",
            "Alpine Eagle Jewellery",
            "Green Carpet",
            "Happy Sport Jewellery",
            "Chopard Loves Cinema",
            "High Jewellery",
            "Animal World"
        ]
    },


    /* ================= PIAGET ================= */

    {
        id: "piaget",
        name: "Piaget",
        collections: [

            "Possession",
            "Sunlight",
            "Limelight",
            "Piaget Rose",
            "Sun",
            "Polo",
            "Gatsby",
            "High Jewellery",
            "Secrets & Lights",
            "Extremely Piaget",
            "Wings of Light",
            "Golden Oasis",
            "Treasure",
            "Tango",
            "Heritage"
        ]
    },


    /* ================= BUCCELLATI ================= */

    {
        id: "buccellati",
        name: "Buccellati",
        collections: [

            "Macri",
            "Ramage",
            "Hawaii",
            "Opera",
            "Éternelle",
            "Mosaico",
            "Blossom",
            "Tulle",
            "Havana",
            "Madrigale",
            "Giardini Segreti",
            "Rouche",
            "Ombelico",
            "High Jewelry",
            "Buccellati Heritage"
        ]
    },


    /* ================= BOUCHERON ================= */

    {
        id: "boucheron",
        name: "Boucheron",
        collections: [

            "Quatre",
            "Serpent Bohème",
            "Jack de Boucheron",
            "Vendôme Liseré",
            "Fauve",
            "Nouveau",
            "Animaux de Collection",
            "Ava",
            "Nature Triomphante",
            "Holographique",
            "Étoile de Paris",
            "Plume de Paon",
            "Question Mark",
            "High Jewelry",
            "Boucheron Heritage"
        ]
    },


    /* ================= CHAUMET ================= */

    {
        id: "chaumet",
        name: "Chaumet",
        collections: [

            "Liens",
            "Bee My Love",
            "Joséphone",
            "Torsade",
            "Attrape-Moi",
            "Perspectives",
            "Ondes",
            "Frisson",
            "Hortensia",
            "Bollywood",
            "High Jewelry",
            "Les Mondes de Chaumet",
            "Épi de Blé",
            "Classics",
            "Chaumet Heritage"
        ]
    },


    /* ================= MIKIMOTO ================= */

    {
        id: "mikimoto",
        name: "Mikimoto",
        collections: [

            "Mikimoto Classic",
            "Mikimoto Collection",
            "Mikimoto Comme des Garçons",
            "Mikimoto M Collection",
            "Mikimoto Cosmopolitan",
            "Mikimoto Praise to the Sea",
            "Mikimoto Feather Collection",
            "Mikimoto High Jewellery",
            "Pearl Necklace Collection",
            "Pearl Earrings Collection",
            "Pearl Bracelet Collection",
            "Pearl Rings Collection",
            "Akoya Pearl",
            "South Sea Pearl",
            "Black South Sea Pearl"
        ]
    },


    /* ================= DAVID YURMAN ================= */

    {
        id: "david-yurman",
        name: "David Yurman",
        collections: [

            "Cable",
            "Crossover",
            "Albion",
            "Petite Albion",
            "Chatelaine",
            "Renaissance",
            "DY Madison",
            "Sculpted Cable",
            "Cable Collectibles",
            "Streamline",
            "Chevron",
            "Starburst",
            "Solari",
            "High Jewelry",
            "David Yurman Classics"
        ]
    },


    /* ================= MESSIKA ================= */

    {
        id: "messika",
        name: "Messika",
        collections: [

            "Move",
            "Move Uno",
            "Move Romane",
            "My Move",
            "Lucky Move",
            "Glam'Azone",
            "Care(sse)",
            "Angel",
            "So Move",
            "My Twin",
            "D-Vibes",
            "High Jewelry",
            "Wild Moon",
            "Equilibristes",
            "Messika Icons"
        ]
    },


    /* ================= DE BEERS ================= */

    {
        id: "de-beers",
        name: "De Beers",
        collections: [

            "Aura",
            "DB Classic",
            "Aria",
            "Enchanted Lotus",
            "Adonis Rose",
            "Portraits of Nature",
            "Infinity",
            "Old Bond Street",
            "Talisman",
            "Motlatse",
            "Wildflowers",
            "De Beers High Jewellery",
            "Forevermark",
            "Diamond Legends",
            "De Beers Heritage"
        ]
    },


    /* ================= POMELLATO ================= */

    {
        id: "pomellato",
        name: "Pomellato",
        collections: [

            "Nudo",
            "Iconica",
            "Catene",
            "Sabbia",
            "Fantina",
            "Together",
            "Gourmette",
            "M'ama Non M'ama",
            "Orsetto",
            "Nuvola",
            "Victoria",
            "High Jewelry",
            "Pom Pom Dot",
            "Heritage",
            "Pomellato Classics"
        ]
    },


    /* ================= FRED ================= */

    {
        id: "fred",
        name: "FRED",
        collections: [

            "Force 10",
            "Chance Infinie",
            "Pretty Woman",
            "Pain de Sucre",
            "Monsieur Fred",
            "Oui",
            "8°0",
            "Soleil d'Or",
            "High Jewelry",
            "FRED Heritage"
        ]
    },


    /* ================= DIOR ================= */

    {
        id: "dior",
        name: "Dior",
        collections: [

            "Rose des Vents",
            "Bois de Rose",
            "Gourmette",
            "Oui",
            "Tribale",
            "La D de Dior",
            "Diorama",
            "Gem Dior",
            "My Dior",
            "Milly La Forêt",
            "High Jewelry",
            "Dior Joaillerie",
            "Dioramour",
            "Dior Icons",
            "Dior Heritage"
        ]
    },


    /* ================= CHANEL ================= */

    {
        id: "chanel",
        name: "Chanel",
        collections: [

            "Coco Crush",
            "Comète",
            "Camélia",
            "Ultra",
            "N°5",
            "Ruban",
            "Plume de CHANEL",
            "Première",
            "Baroque",
            "1932",
            "Sous le Signe du Lion",
            "High Jewelry",
            "Coco Chanel Icons",
            "Chanel Fine Jewelry",
            "Chanel Heritage"
        ]
    }

];



/* =========================================================
   JEWELLERY TYPES
========================================================= */

const jewelleryTypes = [

    {
        id: "rings",
        name: "Ring",
        multiplier: 1
    },

    {
        id: "necklaces",
        name: "Necklace",
        multiplier: 1.45
    },

    {
        id: "bracelets",
        name: "Bracelet",
        multiplier: 1.25
    },

    {
        id: "earrings",
        name: "Earrings",
        multiplier: 1.15
    },

    {
        id: "pendants",
        name: "Pendant",
        multiplier: 0.95
    },

    {
        id: "brooches",
        name: "Brooch",
        multiplier: 1.3
    },

    {
        id: "high-jewellery",
        name: "High Jewellery",
        multiplier: 4.5
    }

];



/* =========================================================
   MATERIALS
========================================================= */

const jewelleryMaterials = [

    {
        name: "18K Yellow Gold",
        multiplier: 1
    },

    {
        name: "18K White Gold",
        multiplier: 1.12
    },

    {
        name: "18K Rose Gold",
        multiplier: 1.1
    },

    {
        name: "Platinum",
        multiplier: 1.5
    },

    {
        name: "Diamond",
        multiplier: 2
    },

    {
        name: "Diamond & Gold",
        multiplier: 2.35
    },

    {
        name: "Sapphire",
        multiplier: 1.85
    },

    {
        name: "Emerald",
        multiplier: 2.4
    },

    {
        name: "Ruby",
        multiplier: 2.35
    },

    {
        name: "Pearl",
        multiplier: 1.7
    },

    {
        name: "Onyx",
        multiplier: 1.35
    },

    {
        name: "Diamond & Platinum",
        multiplier: 3
    }

];



/* =========================================================
   BASE BRAND PRICES
========================================================= */

const jewelleryBasePrices = {

    "cartier":
        15000,

    "van-cleef-arpels":
        18000,

    "tiffany":
        12000,

    "bulgari":
        14000,

    "harry-winston":
        45000,

    "graff":
        60000,

    "chopard":
        13000,

    "piaget":
        14000,

    "buccellati":
        17000,

    "boucheron":
        12000,

    "chaumet":
        11000,

    "mikimoto":
        9000,

    "david-yurman":
        5000,

    "messika":
        9000,

    "de-beers":
        20000,

    "pomellato":
        8500,

    "fred":
        7000,

    "dior":
        10000,

    "chanel":
        12000

};



/* =========================================================
   GENERATE CATALOG
========================================================= */

const jewellery = [];

let jewelleryNumber = 0;


jewelleryBrands.forEach(
    function (brand, brandIndex) {

        brand.collections.forEach(
            function (collection, collectionIndex) {


                jewelleryTypes.forEach(
                    function (type, typeIndex) {


                        /*
                         * Not every possible combination is
                         * generated, preventing the catalogue
                         * from becoming absurdly repetitive.
                         */

                        const allowed =
                            (
                                collectionIndex +
                                typeIndex +
                                brandIndex
                            ) % 3 !== 0;


                        if (!allowed) {
                            return;
                        }


                        const material =
                            jewelleryMaterials[
                                (
                                    collectionIndex +
                                    typeIndex
                                ) %
                                jewelleryMaterials.length
                            ];


                        const base =
                            jewelleryBasePrices[
                                brand.id
                            ];


                        const collectionFactor =
                            1 +
                            (
                                collectionIndex % 8
                            ) * 0.17;


                        let price =
                            base *
                            collectionFactor *
                            type.multiplier *
                            material.multiplier;


                        /*
                         * High jewellery gets a much
                         * larger gameplay value.
                         */

                        if (
                            type.id ===
                            "high-jewellery"
                        ) {

                            price *=
                                2.5 +
                                (
                                    collectionIndex %
                                    4
                                ) * 0.5;

                        }


                        price =
                            Math.round(
                                price / 100
                            ) * 100;



                        /* ================================
                           AVAILABILITY
                        ================================= */

                        let availability =
                            "unlimited";


                        let stock =
                            undefined;


                        if (
                            type.id ===
                            "high-jewellery"
                        ) {

                            availability =
                                "one";

                        }

                        else if (
                            jewelleryNumber % 7 === 0
                        ) {

                            availability =
                                "limited";

                            stock =
                                2 +
                                (
                                    jewelleryNumber %
                                    12
                                );

                        }



                        /* ================================
                           PRODUCT
                        ================================= */

                        jewellery.push({

                            id:
                                "jewel-" +
                                brand.id +
                                "-" +
                                collectionIndex +
                                "-" +
                                typeIndex,

                            name:
                                brand.name +
                                " " +
                                collection +
                                " " +
                                type.name,

                            brand:
                                brand.name,

                            category:
                                brand.id,

                            collection:
                                collection,

                            type:
                                type.id,

                            typeName:
                                type.name,

                            material:
                                material.name,

                            price:
                                price,

                            availability:
                                availability,

                            stock:
                                stock,

                            description:
                                collection +
                                " jewellery in " +
                                material.name +
                                "."

                        });


                        jewelleryNumber++;

                    }
                );

            }
        );

    }
);



/* =========================================================
   ICONIC EXTRA PIECES
========================================================= */

const iconicJewellery = [

    ["cartier", "LOVE Bracelet"],
    ["cartier", "LOVE Ring"],
    ["cartier", "LOVE Necklace"],
    ["cartier", "LOVE Earrings"],

    ["cartier", "Juste un Clou Bracelet"],
    ["cartier", "Juste un Clou Ring"],
    ["cartier", "Panthère Bracelet"],
    ["cartier", "Trinity Ring"],

    ["van-cleef-arpels", "Vintage Alhambra Bracelet"],
    ["van-cleef-arpels", "Vintage Alhambra Necklace"],
    ["van-cleef-arpels", "Vintage Alhambra Pendant"],
    ["van-cleef-arpels", "Vintage Alhambra Earrings"],

    ["van-cleef-arpels", "Magic Alhambra Necklace"],
    ["van-cleef-arpels", "Frivole Bracelet"],
    ["van-cleef-arpels", "Frivole Earrings"],
    ["van-cleef-arpels", "Perlée Bracelet"],

    ["tiffany", "Tiffany HardWear Link Bracelet"],
    ["tiffany", "Tiffany T Bracelet"],
    ["tiffany", "Tiffany Lock Bracelet"],
    ["tiffany", "Tiffany Knot Bracelet"],

    ["tiffany", "Tiffany Keys Pendant"],
    ["tiffany", "Tiffany Victoria Necklace"],
    ["tiffany", "Return to Tiffany Necklace"],
    ["tiffany", "Elsa Peretti Bean Pendant"],

    ["bulgari", "B.zero1 Ring"],
    ["bulgari", "Serpenti Viper Ring"],
    ["bulgari", "Serpenti Bracelet"],
    ["bulgari", "Divas' Dream Necklace"],

    ["bulgari", "Fiorever Necklace"],
    ["bulgari", "Fiorever Ring"],
    ["bulgari", "Bvlgari Bvlgari Necklace"],
    ["bulgari", "Bvlgari Bvlgari Bracelet"],

    ["harry-winston", "Winston Cluster Ring"],
    ["harry-winston", "Lily Cluster Necklace"],
    ["harry-winston", "HW Logo Bracelet"],
    ["harry-winston", "Emerald Collection Ring"],

    ["graff", "Butterfly Necklace"],
    ["graff", "Butterfly Bracelet"],
    ["graff", "Laurence Graff Signature Ring"],
    ["graff", "Wild Flower Necklace"],

    ["chopard", "Happy Hearts Bracelet"],
    ["chopard", "Happy Diamonds Ring"],
    ["chopard", "Ice Cube Ring"],
    ["chopard", "Precious Lace Necklace"],

    ["piaget", "Possession Ring"],
    ["piaget", "Possession Bracelet"],
    ["piaget", "Piaget Rose Ring"],
    ["piaget", "Limelight Necklace"],

    ["buccellati", "Macri Bracelet"],
    ["buccellati", "Ramage Ring"],
    ["buccellati", "Hawaii Earrings"],
    ["buccellati", "Opera Necklace"],

    ["boucheron", "Quatre Ring"],
    ["boucheron", "Serpent Bohème Necklace"],
    ["boucheron", "Jack de Boucheron Bracelet"],
    ["boucheron", "Question Mark Necklace"],

    ["chaumet", "Liens Ring"],
    ["chaumet", "Bee My Love Bracelet"],
    ["chaumet", "Joséphone Necklace"],
    ["chaumet", "Torsade Ring"],

    ["mikimoto", "Akoya Pearl Necklace"],
    ["mikimoto", "Akoya Pearl Earrings"],
    ["mikimoto", "South Sea Pearl Necklace"],
    ["mikimoto", "Pearl Bracelet"],

    ["messika", "Move Uno Bracelet"],
    ["messika", "Move Romane Necklace"],
    ["messika", "Lucky Move Bracelet"],
    ["messika", "My Twin Ring"],

    ["de-beers", "Aura Necklace"],
    ["de-beers", "DB Classic Ring"],
    ["de-beers", "Enchanted Lotus Necklace"],
    ["de-beers", "Adonis Rose Ring"],

    ["pomellato", "Nudo Ring"],
    ["pomellato", "Iconica Bracelet"],
    ["pomellato", "Catene Necklace"],
    ["pomellato", "Sabbia Ring"],

    ["dior", "Rose des Vents Bracelet"],
    ["dior", "Bois de Rose Ring"],
    ["dior", "Gourmette Necklace"],
    ["dior", "Rose des Vents Earrings"],

    ["chanel", "Coco Crush Ring"],
    ["chanel", "Coco Crush Bracelet"],
    ["chanel", "Camélia Necklace"],
    ["chanel", "Comète Earrings"]

];


iconicJewellery.forEach(
    function (item, index) {

        const brand =
            jewelleryBrands.find(
                b =>
                    b.id === item[0]
            );


        const brandBase =
            jewelleryBasePrices[
                item[0]
            ] || 10000;


        jewellery.push({

            id:
                "iconic-jewellery-" +
                index,

            name:
                brand.name +
                " " +
                item[1],

            brand:
                brand.name,

            category:
                item[0],

            collection:
                item[1],

            type:
                index % 6 === 0
                    ? "high-jewellery"
                    : "rings",

            typeName:
                "Iconic",

            material:
                index % 3 === 0
                    ? "Diamond & Gold"
                    : "18K Gold",

            price:
                Math.round(
                    (
                        brandBase *
                        (
                            2 +
                            index * 0.14
                        )
                    ) / 100
                ) * 100,

            availability:
                index % 8 === 0
                    ? "one"
                    : "limited",

            stock:
                index % 8 === 0
                    ? undefined
                    : 3 + (
                        index % 10
                    ),

            description:
                "Iconic GameVault jewellery collector piece."

        });

    }
);



/* =========================================================
   DATABASE CHECK
========================================================= */

console.log(
    "GAMEVAULT JEWELLERY:",
    jewellery.length,
    "catalog options loaded."
);


if (jewellery.length < 500) {

    console.warn(
        "WARNING: Jewellery catalogue has fewer than 500 options."
    );

}