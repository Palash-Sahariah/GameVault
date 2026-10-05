/* =========================================================
   GAMEVAULT — THE VAULT DATA
========================================================= */

const vaultItems = [

    /* =====================================================
       PRECIOUS METALS
    ===================================================== */

    {
        id: "vault-gold-bar-001",
        name: "1 KG Pure Gold Bar",
        category: "precious-metals",
        categoryName: "Precious Metals",
        description: "A fictional 24K investment-grade gold bar.",
        price: 75000,
        availability: "unlimited",
        stock: 999,
        icon: "🥇",
        featured: true
    },

    {
        id: "vault-gold-bar-002",
        name: "12 KG Royal Gold Bar",
        category: "precious-metals",
        categoryName: "Precious Metals",
        description: "A massive fictional reserve-grade gold bar.",
        price: 900000,
        availability: "limited",
        stock: 25,
        icon: "🥇",
        featured: true
    },

    {
        id: "vault-platinum-bar",
        name: "Platinum Reserve Bar",
        category: "precious-metals",
        categoryName: "Precious Metals",
        description: "Ultra-premium platinum reserve collectible.",
        price: 125000,
        availability: "limited",
        stock: 40,
        icon: "⚪",
        featured: false
    },

    {
        id: "vault-silver-reserve",
        name: "Royal Silver Reserve",
        category: "precious-metals",
        categoryName: "Precious Metals",
        description: "A premium silver reserve collection.",
        price: 25000,
        availability: "unlimited",
        stock: 999,
        icon: "🥈",
        featured: false
    },


    /* =====================================================
       RARE GEMS
    ===================================================== */

    {
        id: "vault-blue-diamond",
        name: "Imperial Blue Diamond",
        category: "rare-gems",
        categoryName: "Rare Gems",
        description: "A fictional museum-grade blue diamond.",
        price: 25000000,
        availability: "one",
        stock: 1,
        icon: "💎",
        featured: true
    },

    {
        id: "vault-pink-diamond",
        name: "Royal Pink Diamond",
        category: "rare-gems",
        categoryName: "Rare Gems",
        description: "A fictional ultra-rare pink diamond.",
        price: 18000000,
        availability: "one",
        stock: 1,
        icon: "💎",
        featured: true
    },

    {
        id: "vault-emerald",
        name: "Imperial Emerald",
        category: "rare-gems",
        categoryName: "Rare Gems",
        description: "A legendary emerald for the GameVault collection.",
        price: 8500000,
        availability: "limited",
        stock: 3,
        icon: "💚",
        featured: false
    },

    {
        id: "vault-ruby",
        name: "Royal Blood Ruby",
        category: "rare-gems",
        categoryName: "Rare Gems",
        description: "A fictional museum-grade ruby.",
        price: 6200000,
        availability: "limited",
        stock: 4,
        icon: "❤️",
        featured: false
    },


    /* =====================================================
       RARE COINS
    ===================================================== */

    {
        id: "vault-gold-coin",
        name: "Ancient Gold Coin",
        category: "rare-coins",
        categoryName: "Rare Coins",
        description: "A fictional ancient gold coin.",
        price: 250000,
        availability: "limited",
        stock: 20,
        icon: "🪙",
        featured: true
    },

    {
        id: "vault-royal-coin",
        name: "Royal Dynasty Coin",
        category: "rare-coins",
        categoryName: "Rare Coins",
        description: "A fictional royal-era collector coin.",
        price: 950000,
        availability: "limited",
        stock: 8,
        icon: "🪙",
        featured: false
    },


    /* =====================================================
       COLLECTIBLES
    ===================================================== */

    {
        id: "vault-supercar-model",
        name: "1:8 Hypercar Collector Model",
        category: "collectibles",
        categoryName: "Collectibles",
        description: "Hand-finished miniature hypercar.",
        price: 18000,
        availability: "limited",
        stock: 50,
        icon: "🏎️",
        featured: true
    },

    {
        id: "vault-space-model",
        name: "Orbital Spacecraft Model",
        category: "collectibles",
        categoryName: "Collectibles",
        description: "Premium display model of a fictional spacecraft.",
        price: 12000,
        availability: "unlimited",
        stock: 999,
        icon: "🚀",
        featured: false
    },

    {
        id: "vault-royal-chess",
        name: "Imperial Chess Set",
        category: "collectibles",
        categoryName: "Collectibles",
        description: "Luxury collector's chess set.",
        price: 45000,
        availability: "limited",
        stock: 15,
        icon: "♟️",
        featured: false
    },


    /* =====================================================
       MEMORABILIA
    ===================================================== */

    {
        id: "vault-championship-ball",
        name: "Championship Memorabilia Ball",
        category: "memorabilia",
        categoryName: "Memorabilia",
        description: "Fictional signed championship memorabilia.",
        price: 150000,
        availability: "limited",
        stock: 5,
        icon: "🏆",
        featured: true
    },

    {
        id: "vault-sports-jersey",
        name: "Legendary Sports Jersey",
        category: "memorabilia",
        categoryName: "Memorabilia",
        description: "Premium fictional collector jersey.",
        price: 25000,
        availability: "limited",
        stock: 25,
        icon: "👕",
        featured: false
    },


    /* =====================================================
       LUXURY COLLECTIBLES
    ===================================================== */

    {
        id: "vault-golden-phone",
        name: "24K Gold Collector Phone",
        category: "luxury-collectibles",
        categoryName: "Luxury Collectibles",
        description: "A fictional gold-finished collector smartphone.",
        price: 85000,
        availability: "limited",
        stock: 12,
        icon: "📱",
        featured: true
    },

    {
        id: "vault-golden-console",
        name: "Golden Gaming Console",
        category: "luxury-collectibles",
        categoryName: "Luxury Collectibles",
        description: "Premium fictional collector gaming console.",
        price: 65000,
        availability: "limited",
        stock: 20,
        icon: "🎮",
        featured: false
    },


    /* =====================================================
       HISTORICAL
    ===================================================== */

    {
        id: "vault-ancient-scroll",
        name: "Ancient Royal Scroll",
        category: "historical",
        categoryName: "Historical",
        description: "Fictional historical collector artifact.",
        price: 3000000,
        availability: "one",
        stock: 1,
        icon: "📜",
        featured: true
    },

    {
        id: "vault-ancient-crown",
        name: "Imperial Crown Replica",
        category: "historical",
        categoryName: "Historical",
        description: "Museum-style fictional royal crown.",
        price: 1200000,
        availability: "limited",
        stock: 3,
        icon: "👑",
        featured: false
    },


    /* =====================================================
       TOYS & MODELS
    ===================================================== */

    {
        id: "vault-train-model",
        name: "Luxury Railway Model",
        category: "toys-models",
        categoryName: "Toys & Models",
        description: "Large-scale premium railway model.",
        price: 28000,
        availability: "unlimited",
        stock: 999,
        icon: "🚂",
        featured: false
    },

    {
        id: "vault-rocket-model",
        name: "Mega Rocket Display Model",
        category: "toys-models",
        categoryName: "Toys & Models",
        description: "Collector-grade rocket model.",
        price: 18000,
        availability: "limited",
        stock: 40,
        icon: "🚀",
        featured: false
    },


    /* =====================================================
       GAMING
    ===================================================== */

    {
        id: "vault-gaming-setup",
        name: "Ultimate Gaming Setup",
        category: "gaming",
        categoryName: "Gaming",
        description: "Fictional ultra-premium gaming command center.",
        price: 150000,
        availability: "limited",
        stock: 10,
        icon: "🎮",
        featured: true
    },

    {
        id: "vault-arcade",
        name: "Private Arcade Collection",
        category: "gaming",
        categoryName: "Gaming",
        description: "Luxury private arcade collection.",
        price: 350000,
        availability: "limited",
        stock: 5,
        icon: "🕹️",
        featured: false
    },


    /* =====================================================
       MUSIC
    ===================================================== */

    {
        id: "vault-grand-piano",
        name: "Imperial Grand Piano",
        category: "music",
        categoryName: "Music",
        description: "Luxury concert-grade grand piano.",
        price: 280000,
        availability: "limited",
        stock: 7,
        icon: "🎹",
        featured: true
    },

    {
        id: "vault-guitar",
        name: "Legendary Collector Guitar",
        category: "music",
        categoryName: "Music",
        description: "Premium fictional collector guitar.",
        price: 95000,
        availability: "limited",
        stock: 8,
        icon: "🎸",
        featured: false
    },


    /* =====================================================
       ROYAL & HERITAGE
    ===================================================== */

    {
        id: "vault-royal-throne",
        name: "Imperial Throne",
        category: "royal-heritage",
        categoryName: "Royal & Heritage",
        description: "Fictional handcrafted royal throne.",
        price: 750000,
        availability: "one",
        stock: 1,
        icon: "👑",
        featured: true
    },

    {
        id: "vault-royal-carriage",
        name: "Royal Heritage Carriage",
        category: "royal-heritage",
        categoryName: "Royal & Heritage",
        description: "Luxury historical-style carriage.",
        price: 450000,
        availability: "limited",
        stock: 3,
        icon: "🐎",
        featured: false
    },


    /* =====================================================
       ULTRA RARE
    ===================================================== */

    {
        id: "vault-museum-collection",
        name: "Private Museum Collection",
        category: "ultra-rare",
        categoryName: "Ultra-Rare",
        description: "A fictional complete private museum collection.",
        price: 85000000,
        availability: "one",
        stock: 1,
        icon: "🏛️",
        featured: true
    },

    {
        id: "vault-ultimate-treasure",
        name: "The Ultimate Treasure",
        category: "ultra-rare",
        categoryName: "Ultra-Rare",
        description: "The legendary centerpiece of the GameVault.",
        price: 150000000,
        availability: "one",
        stock: 1,
        icon: "💰",
        featured: true
    }

];