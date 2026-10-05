/*
===========================================================
 GAMEVAULT — AUTOMOTIVE DATABASE
===========================================================

IMPORTANT:
• Vehicle/model names are real automobile models.
• GameVault editions are FICTIONAL GAMEPLAY LISTINGS.
• GameVault prices are fictional gameplay prices.
• They are NOT manufacturer trims or real-world market prices.
• 1,000+ listings are generated automatically.
===========================================================
*/

const AUTOMOTIVE_MODELS = [

    /* =========================
       MARUTI SUZUKI
    ========================= */

    ["Maruti Suzuki", "Swift", "popular", "hatchback"],
    ["Maruti Suzuki", "Baleno", "popular", "hatchback"],
    ["Maruti Suzuki", "Dzire", "popular", "sedan"],
    ["Maruti Suzuki", "Wagon R", "popular", "hatchback"],
    ["Maruti Suzuki", "Fronx", "popular", "suv"],
    ["Maruti Suzuki", "Brezza", "popular", "suv"],
    ["Maruti Suzuki", "Grand Vitara", "popular", "suv"],
    ["Maruti Suzuki", "Ertiga", "popular", "mpv"],
    ["Maruti Suzuki", "XL6", "popular", "mpv"],
    ["Maruti Suzuki", "Jimny", "popular", "suv"],
    ["Maruti Suzuki", "Alto K10", "popular", "hatchback"],
    ["Maruti Suzuki", "Celerio", "popular", "hatchback"],
    ["Maruti Suzuki", "Ignis", "other", "hatchback"],
    ["Maruti Suzuki", "S-Presso", "other", "hatchback"],
    ["Maruti Suzuki", "Ciaz", "other", "sedan"],
    ["Maruti Suzuki", "Invicto", "other", "mpv"],

    /* =========================
       TATA
    ========================= */

    ["Tata", "Punch", "popular", "suv"],
    ["Tata", "Nexon", "popular", "suv"],
    ["Tata", "Altroz", "popular", "hatchback"],
    ["Tata", "Tiago", "popular", "hatchback"],
    ["Tata", "Tigor", "other", "sedan"],
    ["Tata", "Harrier", "popular", "suv"],
    ["Tata", "Safari", "popular", "suv"],
    ["Tata", "Curvv", "popular", "suv"],
    ["Tata", "Sierra", "other", "suv"],
    ["Tata", "Nexon EV", "popular", "electric"],
    ["Tata", "Punch EV", "popular", "electric"],
    ["Tata", "Tiago EV", "other", "electric"],
    ["Tata", "Curvv EV", "other", "electric"],
    ["Tata", "Harrier EV", "other", "electric"],

    /* =========================
       MAHINDRA
    ========================= */

    ["Mahindra", "Thar", "popular", "suv"],
    ["Mahindra", "Thar Roxx", "popular", "suv"],
    ["Mahindra", "Scorpio-N", "popular", "suv"],
    ["Mahindra", "Scorpio Classic", "popular", "suv"],
    ["Mahindra", "XUV700", "popular", "suv"],
    ["Mahindra", "XUV 3XO", "popular", "suv"],
    ["Mahindra", "Bolero", "popular", "suv"],
    ["Mahindra", "Bolero Neo", "other", "suv"],
    ["Mahindra", "Marazzo", "other", "mpv"],
    ["Mahindra", "BE 6", "other", "electric"],
    ["Mahindra", "XEV 9e", "other", "electric"],
    ["Mahindra", "XUV400", "other", "electric"],

    /* =========================
       HYUNDAI
    ========================= */

    ["Hyundai", "Creta", "popular", "suv"],
    ["Hyundai", "Venue", "popular", "suv"],
    ["Hyundai", "i20", "popular", "hatchback"],
    ["Hyundai", "Grand i10 Nios", "popular", "hatchback"],
    ["Hyundai", "Verna", "popular", "sedan"],
    ["Hyundai", "Exter", "popular", "suv"],
    ["Hyundai", "Alcazar", "popular", "suv"],
    ["Hyundai", "Tucson", "popular", "suv"],
    ["Hyundai", "Santa Fe", "other", "suv"],
    ["Hyundai", "Palisade", "other", "suv"],
    ["Hyundai", "Ioniq 5", "popular", "electric"],
    ["Hyundai", "Ioniq 6", "other", "electric"],
    ["Hyundai", "Ioniq 9", "other", "electric"],
    ["Hyundai", "Kona", "other", "suv"],

    /* =========================
       TOYOTA
    ========================= */

    ["Toyota", "Corolla", "popular", "sedan"],
    ["Toyota", "Camry", "popular", "sedan"],
    ["Toyota", "Prius", "popular", "sedan"],
    ["Toyota", "RAV4", "popular", "suv"],
    ["Toyota", "Land Cruiser", "popular", "suv"],
    ["Toyota", "Land Cruiser Prado", "popular", "suv"],
    ["Toyota", "Fortuner", "popular", "suv"],
    ["Toyota", "Hilux", "popular", "pickup"],
    ["Toyota", "Innova Hycross", "popular", "mpv"],
    ["Toyota", "Innova Crysta", "popular", "mpv"],
    ["Toyota", "Glanza", "popular", "hatchback"],
    ["Toyota", "Urban Cruiser", "other", "suv"],
    ["Toyota", "Crown", "other", "sedan"],
    ["Toyota", "GR86", "popular", "sports"],
    ["Toyota", "GR Corolla", "popular", "sports"],
    ["Toyota", "GR Supra", "popular", "sports"],
    ["Toyota", "Supra", "popular", "sports"],
    ["Toyota", "Tacoma", "popular", "pickup"],
    ["Toyota", "Tundra", "popular", "pickup"],
    ["Toyota", "Sequoia", "other", "suv"],
    ["Toyota", "4Runner", "popular", "suv"],

    /* =========================
       HONDA
    ========================= */

    ["Honda", "City", "popular", "sedan"],
    ["Honda", "Civic", "popular", "sedan"],
    ["Honda", "Accord", "popular", "sedan"],
    ["Honda", "Elevate", "popular", "suv"],
    ["Honda", "CR-V", "popular", "suv"],
    ["Honda", "HR-V", "popular", "suv"],
    ["Honda", "Pilot", "other", "suv"],
    ["Honda", "Passport", "other", "suv"],
    ["Honda", "Odyssey", "popular", "mpv"],
    ["Honda", "Civic Type R", "popular", "sports"],
    ["Honda", "Integra Type S", "other", "sports"],
    ["Honda", "NSX", "legendary", "supercar"],

    /* =========================
       KIA
    ========================= */

    ["Kia", "Seltos", "popular", "suv"],
    ["Kia", "Sonet", "popular", "suv"],
    ["Kia", "Carens", "popular", "mpv"],
    ["Kia", "Carnival", "popular", "mpv"],
    ["Kia", "Sportage", "popular", "suv"],
    ["Kia", "Sorento", "popular", "suv"],
    ["Kia", "Telluride", "popular", "suv"],
    ["Kia", "EV6", "popular", "electric"],
    ["Kia", "EV9", "popular", "electric"],
    ["Kia", "Stinger", "popular", "sports"],

    /* =========================
       NISSAN
    ========================= */

    ["Nissan", "Magnite", "popular", "suv"],
    ["Nissan", "Kicks", "popular", "suv"],
    ["Nissan", "X-Trail", "popular", "suv"],
    ["Nissan", "Rogue", "popular", "suv"],
    ["Nissan", "Pathfinder", "popular", "suv"],
    ["Nissan", "Frontier", "popular", "pickup"],
    ["Nissan", "Ariya", "other", "electric"],
    ["Nissan", "Z", "popular", "sports"],
    ["Nissan", "370Z", "legendary", "sports"],
    ["Nissan", "GT-R", "legendary", "supercar"],
    ["Nissan", "Skyline GT-R R34", "legendary", "sports"],

    /* =========================
       VOLKSWAGEN
    ========================= */

    ["Volkswagen", "Polo", "popular", "hatchback"],
    ["Volkswagen", "Golf", "legendary", "hatchback"],
    ["Volkswagen", "Golf GTI", "legendary", "sports"],
    ["Volkswagen", "Golf R", "popular", "sports"],
    ["Volkswagen", "Jetta", "popular", "sedan"],
    ["Volkswagen", "Passat", "popular", "sedan"],
    ["Volkswagen", "Tiguan", "popular", "suv"],
    ["Volkswagen", "Touareg", "popular", "suv"],
    ["Volkswagen", "Atlas", "other", "suv"],
    ["Volkswagen", "ID.3", "other", "electric"],
    ["Volkswagen", "ID.4", "popular", "electric"],
    ["Volkswagen", "ID.7", "other", "electric"],
    ["Volkswagen", "ID.Buzz", "popular", "mpv"],

    /* =========================
       FORD
    ========================= */

    ["Ford", "Mustang", "legendary", "sports"],
    ["Ford", "Mustang Mach-E", "popular", "electric"],
    ["Ford", "Bronco", "popular", "suv"],
    ["Ford", "Bronco Sport", "popular", "suv"],
    ["Ford", "Explorer", "popular", "suv"],
    ["Ford", "Expedition", "popular", "suv"],
    ["Ford", "Ranger", "popular", "pickup"],
    ["Ford", "F-150", "legendary", "pickup"],
    ["Ford", "F-150 Lightning", "popular", "electric"],
    ["Ford", "Maverick", "popular", "pickup"],
    ["Ford", "Raptor", "legendary", "pickup"],
    ["Ford", "GT", "legendary", "supercar"],

    /* =========================
       CHEVROLET
    ========================= */

    ["Chevrolet", "Corvette", "legendary", "sports"],
    ["Chevrolet", "Corvette Z06", "legendary", "supercar"],
    ["Chevrolet", "Camaro", "legendary", "sports"],
    ["Chevrolet", "Silverado", "popular", "pickup"],
    ["Chevrolet", "Tahoe", "popular", "suv"],
    ["Chevrolet", "Suburban", "popular", "suv"],
    ["Chevrolet", "Equinox", "popular", "suv"],
    ["Chevrolet", "Blazer", "popular", "suv"],
    ["Chevrolet", "Trailblazer", "popular", "suv"],
    ["Chevrolet", "Bolt", "popular", "electric"],

    /* =========================
       JEEP
    ========================= */

    ["Jeep", "Wrangler", "legendary", "suv"],
    ["Jeep", "Grand Cherokee", "popular", "suv"],
    ["Jeep", "Gladiator", "popular", "pickup"],
    ["Jeep", "Compass", "popular", "suv"],
    ["Jeep", "Renegade", "other", "suv"],
    ["Jeep", "Cherokee", "popular", "suv"],
    ["Jeep", "Wagoneer", "other", "suv"],
    ["Jeep", "Grand Wagoneer", "luxury", "suv"],

    /* =========================
       SUBARU
    ========================= */

    ["Subaru", "WRX", "popular", "sports"],
    ["Subaru", "WRX STI", "legendary", "sports"],
    ["Subaru", "BRZ", "popular", "sports"],
    ["Subaru", "Impreza", "popular", "hatchback"],
    ["Subaru", "Forester", "popular", "suv"],
    ["Subaru", "Outback", "popular", "suv"],
    ["Subaru", "Crosstrek", "popular", "suv"],
    ["Subaru", "Ascent", "other", "suv"],
    ["Subaru", "Solterra", "other", "electric"],

    /* =========================
       MAZDA
    ========================= */

    ["Mazda", "Mazda3", "popular", "sedan"],
    ["Mazda", "Mazda6", "popular", "sedan"],
    ["Mazda", "CX-3", "popular", "suv"],
    ["Mazda", "CX-30", "popular", "suv"],
    ["Mazda", "CX-5", "popular", "suv"],
    ["Mazda", "CX-50", "popular", "suv"],
    ["Mazda", "CX-60", "other", "suv"],
    ["Mazda", "CX-70", "other", "suv"],
    ["Mazda", "CX-80", "other", "suv"],
    ["Mazda", "CX-90", "popular", "suv"],
    ["Mazda", "MX-5 Miata", "legendary", "sports"],
    ["Mazda", "RX-7", "legendary", "sports"],
    ["Mazda", "RX-8", "popular", "sports"],

    /* =========================
       TESLA
    ========================= */

    ["Tesla", "Model 3", "popular", "electric"],
    ["Tesla", "Model Y", "popular", "electric"],
    ["Tesla", "Model S", "popular", "electric"],
    ["Tesla", "Model X", "popular", "electric"],
    ["Tesla", "Cybertruck", "popular", "electric"],
    ["Tesla", "Roadster", "legendary", "sports"],

    /* =========================
       BMW
    ========================= */

    ["BMW", "2 Series", "popular", "car"],
    ["BMW", "3 Series", "legendary", "car"],
    ["BMW", "4 Series", "popular", "car"],
    ["BMW", "5 Series", "legendary", "car"],
    ["BMW", "7 Series", "luxury", "luxury"],
    ["BMW", "8 Series", "luxury", "sports"],
    ["BMW", "Z4", "popular", "sports"],
    ["BMW", "X1", "popular", "suv"],
    ["BMW", "X2", "popular", "suv"],
    ["BMW", "X3", "popular", "suv"],
    ["BMW", "X4", "popular", "suv"],
    ["BMW", "X5", "legendary", "suv"],
    ["BMW", "X6", "popular", "suv"],
    ["BMW", "X7", "luxury", "suv"],
    ["BMW", "i4", "popular", "electric"],
    ["BMW", "i5", "popular", "electric"],
    ["BMW", "i7", "luxury", "electric"],
    ["BMW", "iX", "popular", "electric"],
    ["BMW", "M2", "popular", "sports"],
    ["BMW", "M3", "legendary", "sports"],
    ["BMW", "M4", "legendary", "sports"],
    ["BMW", "M5", "legendary", "sports"],
    ["BMW", "XM", "popular", "suv"],

    /* =========================
       MERCEDES-BENZ
    ========================= */

    ["Mercedes-Benz", "A-Class", "popular", "car"],
    ["Mercedes-Benz", "C-Class", "legendary", "car"],
    ["Mercedes-Benz", "E-Class", "legendary", "luxury"],
    ["Mercedes-Benz", "S-Class", "legendary", "luxury"],
    ["Mercedes-Benz", "CLA", "popular", "car"],
    ["Mercedes-Benz", "CLE Coupe", "popular", "sports"],
    ["Mercedes-Benz", "CLE Cabriolet", "popular", "sports"],
    ["Mercedes-Benz", "GLA", "popular", "suv"],
    ["Mercedes-Benz", "GLB", "popular", "suv"],
    ["Mercedes-Benz", "GLC", "popular", "suv"],
    ["Mercedes-Benz", "GLE", "legendary", "suv"],
    ["Mercedes-Benz", "GLS", "luxury", "suv"],
    ["Mercedes-Benz", "G-Class", "legendary", "suv"],
    ["Mercedes-Benz", "G 63 AMG", "legendary", "suv"],
    ["Mercedes-Benz", "AMG GT", "legendary", "sports"],
    ["Mercedes-Benz", "SL", "legendary", "sports"],
    ["Mercedes-Benz", "EQS", "luxury", "electric"],
    ["Mercedes-Benz", "EQE", "popular", "electric"],
    ["Mercedes-Benz", "EQE SUV", "popular", "electric"],
    ["Mercedes-Maybach", "S-Class", "luxury", "luxury"],
    ["Mercedes-Maybach", "GLS", "luxury", "suv"],

    /* =========================
       AUDI
    ========================= */

    ["Audi", "A3", "popular", "car"],
    ["Audi", "A4", "legendary", "car"],
    ["Audi", "A5", "popular", "car"],
    ["Audi", "A6", "legendary", "luxury"],
    ["Audi", "A7", "popular", "luxury"],
    ["Audi", "A8", "luxury", "luxury"],
    ["Audi", "Q3", "popular", "suv"],
    ["Audi", "Q4 e-tron", "popular", "electric"],
    ["Audi", "Q5", "popular", "suv"],
    ["Audi", "Q7", "legendary", "suv"],
    ["Audi", "Q8", "legendary", "suv"],
    ["Audi", "e-tron GT", "popular", "electric"],
    ["Audi", "RS3", "popular", "sports"],
    ["Audi", "RS4", "popular", "sports"],
    ["Audi", "RS5", "popular", "sports"],
    ["Audi", "RS6 Avant", "legendary", "sports"],
    ["Audi", "RS7", "legendary", "sports"],
    ["Audi", "RS Q8", "legendary", "suv"],
    ["Audi", "R8", "legendary", "supercar"],

    /* =========================
       PORSCHE
    ========================= */

    ["Porsche", "718 Cayman", "popular", "sports"],
    ["Porsche", "718 Boxster", "popular", "sports"],
    ["Porsche", "911 Carrera", "legendary", "sports"],
    ["Porsche", "911 Carrera S", "legendary", "sports"],
    ["Porsche", "911 Carrera GTS", "legendary", "sports"],
    ["Porsche", "911 Turbo", "legendary", "supercar"],
    ["Porsche", "911 Turbo S", "legendary", "supercar"],
    ["Porsche", "911 GT3", "legendary", "sports"],
    ["Porsche", "911 GT3 RS", "legendary", "supercar"],
    ["Porsche", "911 Dakar", "popular", "sports"],
    ["Porsche", "911 Targa", "popular", "sports"],
    ["Porsche", "Taycan", "popular", "electric"],
    ["Porsche", "Panamera", "luxury", "luxury"],
    ["Porsche", "Macan", "popular", "suv"],
    ["Porsche", "Macan Electric", "popular", "electric"],
    ["Porsche", "Cayenne", "legendary", "suv"],
    ["Porsche", "Cayenne Coupe", "popular", "suv"],
    ["Porsche", "Cayenne Turbo GT", "legendary", "suv"],

    /* =========================
       LEXUS
    ========================= */

    ["Lexus", "ES", "popular", "luxury"],
    ["Lexus", "LS", "luxury", "luxury"],
    ["Lexus", "IS", "popular", "car"],
    ["Lexus", "LC 500", "legendary", "sports"],
    ["Lexus", "LC 500 Convertible", "legendary", "sports"],
    ["Lexus", "UX", "popular", "suv"],
    ["Lexus", "NX", "popular", "suv"],
    ["Lexus", "RX", "popular", "suv"],
    ["Lexus", "GX", "legendary", "suv"],
    ["Lexus", "LX", "legendary", "suv"],
    ["Lexus", "TX", "popular", "suv"],
    ["Lexus", "RZ", "popular", "electric"],

    /* =========================
       LAND ROVER
    ========================= */

    ["Land Rover", "Defender", "legendary", "suv"],
    ["Land Rover", "Defender 90", "popular", "suv"],
    ["Land Rover", "Defender 110", "legendary", "suv"],
    ["Land Rover", "Defender 130", "popular", "suv"],
    ["Land Rover", "Discovery", "popular", "suv"],
    ["Land Rover", "Discovery Sport", "popular", "suv"],
    ["Land Rover", "Range Rover", "legendary", "luxury"],
    ["Land Rover", "Range Rover Sport", "legendary", "suv"],
    ["Land Rover", "Range Rover Velar", "popular", "suv"],
    ["Land Rover", "Range Rover Evoque", "popular", "suv"],
    ["Land Rover", "Range Rover SV", "legendary", "luxury"],
    ["Land Rover", "Defender OCTA", "legendary", "suv"],

    /* =========================
       VOLVO
    ========================= */

    ["Volvo", "XC40", "popular", "suv"],
    ["Volvo", "XC60", "popular", "suv"],
    ["Volvo", "XC90", "legendary", "suv"],
    ["Volvo", "S60", "popular", "sedan"],
    ["Volvo", "S90", "popular", "luxury"],
    ["Volvo", "V60", "other", "wagon"],
    ["Volvo", "V90", "other", "wagon"],
    ["Volvo", "EX30", "popular", "electric"],
    ["Volvo", "EX40", "popular", "electric"],
    ["Volvo", "EX90", "popular", "electric"],

    /* =========================
       JAGUAR
    ========================= */

    ["Jaguar", "F-Pace", "popular", "suv"],
    ["Jaguar", "E-Pace", "popular", "suv"],
    ["Jaguar", "I-Pace", "popular", "electric"],
    ["Jaguar", "F-Type", "legendary", "sports"],
    ["Jaguar", "XF", "popular", "luxury"],
    ["Jaguar", "XJ", "legendary", "luxury"],
    ["Jaguar", "E-Type", "legendary", "sports"],

    /* =========================
       MASERATI
    ========================= */

    ["Maserati", "Ghibli", "legendary", "luxury"],
    ["Maserati", "Quattroporte", "legendary", "luxury"],
    ["Maserati", "Levante", "popular", "suv"],
    ["Maserati", "Grecale", "popular", "suv"],
    ["Maserati", "GranTurismo", "legendary", "sports"],
    ["Maserati", "GranCabrio", "legendary", "sports"],
    ["Maserati", "MC20", "legendary", "supercar"],
    ["Maserati", "MC20 Cielo", "legendary", "supercar"],

    /* =========================
       FERRARI
    ========================= */

    ["Ferrari", "Roma", "popular", "sports"],
    ["Ferrari", "Roma Spider", "popular", "sports"],
    ["Ferrari", "296 GTB", "popular", "supercar"],
    ["Ferrari", "296 GTS", "popular", "supercar"],
    ["Ferrari", "SF90 Stradale", "legendary", "supercar"],
    ["Ferrari", "SF90 Spider", "legendary", "supercar"],
    ["Ferrari", "812 Superfast", "legendary", "supercar"],
    ["Ferrari", "812 Competizione", "legendary", "supercar"],
    ["Ferrari", "Purosangue", "legendary", "suv"],
    ["Ferrari", "F8 Tributo", "legendary", "supercar"],
    ["Ferrari", "F8 Spider", "legendary", "supercar"],
    ["Ferrari", "LaFerrari", "legendary", "hypercar"],
    ["Ferrari", "Enzo", "legendary", "hypercar"],
    ["Ferrari", "F40", "legendary", "hypercar"],
    ["Ferrari", "F50", "legendary", "hypercar"],
    ["Ferrari", "Daytona SP3", "legendary", "hypercar"],
    ["Ferrari", "12Cilindri", "popular", "supercar"],
    ["Ferrari", "12Cilindri Spider", "popular", "supercar"],
    ["Ferrari", "F80", "legendary", "hypercar"],

    /* =========================
       LAMBORGHINI
    ========================= */

    ["Lamborghini", "Revuelto", "legendary", "supercar"],
    ["Lamborghini", "Temerario", "popular", "supercar"],
    ["Lamborghini", "Urus", "legendary", "suv"],
    ["Lamborghini", "Urus SE", "popular", "suv"],
    ["Lamborghini", "Huracan", "legendary", "supercar"],
    ["Lamborghini", "Huracan STO", "legendary", "supercar"],
    ["Lamborghini", "Aventador", "legendary", "supercar"],
    ["Lamborghini", "Aventador SVJ", "legendary", "supercar"],
    ["Lamborghini", "Sian", "legendary", "hypercar"],
    ["Lamborghini", "Countach LPI 800-4", "legendary", "hypercar"],
    ["Lamborghini", "Veneno", "legendary", "hypercar"],

    /* =========================
       MCLAREN
    ========================= */

    ["McLaren", "750S", "legendary", "supercar"],
    ["McLaren", "750S Spider", "legendary", "supercar"],
    ["McLaren", "Artura", "popular", "supercar"],
    ["McLaren", "Artura Spider", "popular", "supercar"],
    ["McLaren", "720S", "legendary", "supercar"],
    ["McLaren", "765LT", "legendary", "supercar"],
    ["McLaren", "Senna", "legendary", "hypercar"],
    ["McLaren", "Speedtail", "legendary", "hypercar"],
    ["McLaren", "P1", "legendary", "hypercar"],
    ["McLaren", "W1", "legendary", "hypercar"],

    /* =========================
       ASTON MARTIN
    ========================= */

    ["Aston Martin", "Vantage", "legendary", "sports"],
    ["Aston Martin", "Vantage Roadster", "popular", "sports"],
    ["Aston Martin", "DB12", "legendary", "sports"],
    ["Aston Martin", "DB12 Volante", "popular", "sports"],
    ["Aston Martin", "DBS", "legendary", "supercar"],
    ["Aston Martin", "DBX", "popular", "suv"],
    ["Aston Martin", "Valhalla", "legendary", "supercar"],
    ["Aston Martin", "Valkyrie", "legendary", "hypercar"],
    ["Aston Martin", "Vanquish", "legendary", "sports"],

    /* =========================
       BENTLEY
    ========================= */

    ["Bentley", "Continental GT", "legendary", "luxury"],
    ["Bentley", "Continental GTC", "legendary", "luxury"],
    ["Bentley", "Flying Spur", "luxury", "luxury"],
    ["Bentley", "Bentayga", "legendary", "suv"],
    ["Bentley", "Bentayga EWB", "luxury", "suv"],
    ["Bentley", "Bacalar", "legendary", "luxury"],
    ["Bentley", "Batur", "legendary", "luxury"],

    /* =========================
       ROLLS-ROYCE
    ========================= */

    ["Rolls-Royce", "Ghost", "legendary", "luxury"],
    ["Rolls-Royce", "Ghost Extended", "luxury", "luxury"],
    ["Rolls-Royce", "Phantom", "legendary", "luxury"],
    ["Rolls-Royce", "Phantom Extended", "luxury", "luxury"],
    ["Rolls-Royce", "Cullinan", "legendary", "suv"],
    ["Rolls-Royce", "Spectre", "legendary", "electric"],
    ["Rolls-Royce", "Wraith", "legendary", "luxury"],
    ["Rolls-Royce", "Dawn", "legendary", "luxury"],

    /* =========================
       BUGATTI
    ========================= */

    ["Bugatti", "Veyron", "legendary", "hypercar"],
    ["Bugatti", "Veyron Super Sport", "legendary", "hypercar"],
    ["Bugatti", "Chiron", "legendary", "hypercar"],
    ["Bugatti", "Chiron Super Sport", "legendary", "hypercar"],
    ["Bugatti", "Divo", "legendary", "hypercar"],
    ["Bugatti", "Centodieci", "legendary", "hypercar"],
    ["Bugatti", "Bolide", "legendary", "hypercar"],
    ["Bugatti", "Mistral", "legendary", "hypercar"],
    ["Bugatti", "Tourbillon", "legendary", "hypercar"],

    /* =========================
       KOENIGSEGG
    ========================= */

    ["Koenigsegg", "Jesko", "legendary", "hypercar"],
    ["Koenigsegg", "Jesko Absolut", "legendary", "hypercar"],
    ["Koenigsegg", "Gemera", "legendary", "hypercar"],
    ["Koenigsegg", "Regera", "legendary", "hypercar"],
    ["Koenigsegg", "CC850", "legendary", "hypercar"],
    ["Koenigsegg", "Agera RS", "legendary", "hypercar"],
    ["Koenigsegg", "One:1", "legendary", "hypercar"],

    /* =========================
       RIMAC
    ========================= */

    ["Rimac", "Nevera", "legendary", "electric"],
    ["Rimac", "Nevera R", "legendary", "electric"],

    /* =========================
       LOTUS
    ========================= */

    ["Lotus", "Emira", "popular", "sports"],
    ["Lotus", "Emira V6", "popular", "sports"],
    ["Lotus", "Evija", "legendary", "electric"],
    ["Lotus", "Eletre", "popular", "electric"],
    ["Lotus", "Emeya", "popular", "electric"],

    /* =========================
       HYPER / LUXURY ENTHUSIAST
    ========================= */

    ["Pagani", "Huayra", "legendary", "hypercar"],
    ["Pagani", "Huayra Roadster", "legendary", "hypercar"],
    ["Pagani", "Zonda", "legendary", "hypercar"],
    ["Pagani", "Utopia", "legendary", "hypercar"],

    ["Gordon Murray Automotive", "T.50", "legendary", "hypercar"],
    ["Gordon Murray Automotive", "T.33", "legendary", "supercar"],

    ["Hennessey", "Venom F5", "legendary", "hypercar"],

    ["Zenvo", "TSR-S", "other", "hypercar"],
    ["Zenvo", "Aurora", "other", "hypercar"],

    ["SSC", "Tuatara", "legendary", "hypercar"],

    ["De Tomaso", "P72", "other", "supercar"],

    ["Alpine", "A110", "popular", "sports"],
    ["Alpine", "A290", "other", "electric"],
    ["Alpine", "A390", "other", "electric"],

    /* =========================
       OTHER POPULAR BRANDS
    ========================= */

    ["Mini", "Cooper", "popular", "hatchback"],
    ["Mini", "Cooper S", "popular", "sports"],
    ["Mini", "Countryman", "popular", "suv"],
    ["Mini", "John Cooper Works", "legendary", "sports"],

    ["Genesis", "G70", "popular", "sports"],
    ["Genesis", "G80", "popular", "luxury"],
    ["Genesis", "G90", "luxury", "luxury"],
    ["Genesis", "GV60", "popular", "electric"],
    ["Genesis", "GV70", "popular", "suv"],
    ["Genesis", "GV80", "popular", "suv"],

    ["Cadillac", "CT4", "popular", "sedan"],
    ["Cadillac", "CT5", "popular", "sedan"],
    ["Cadillac", "Escalade", "legendary", "suv"],
    ["Cadillac", "Lyriq", "popular", "electric"],
    ["Cadillac", "Celestiq", "luxury", "electric"],

    ["BYD", "Dolphin", "popular", "electric"],
    ["BYD", "Atto 3", "popular", "electric"],
    ["BYD", "Seal", "popular", "electric"],
    ["BYD", "Han", "popular", "electric"],
    ["BYD", "Tang", "popular", "electric"],
    ["BYD", "Yangwang U8", "other", "suv"],
    ["BYD", "Yangwang U9", "other", "supercar"],

    ["MG", "Hector", "popular", "suv"],
    ["MG", "Gloster", "popular", "suv"],
    ["MG", "ZS", "popular", "suv"],
    ["MG", "4", "popular", "electric"],
    ["MG", "Cyberster", "popular", "sports"],

    ["Skoda", "Slavia", "popular", "sedan"],
    ["Skoda", "Kushaq", "popular", "suv"],
    ["Skoda", "Kodiaq", "popular", "suv"],
    ["Skoda", "Octavia", "legendary", "car"],
    ["Skoda", "Superb", "popular", "luxury"],
    ["Skoda", "Enyaq", "popular", "electric"],

    ["Renault", "Kwid", "popular", "hatchback"],
    ["Renault", "Triber", "popular", "mpv"],
    ["Renault", "Kiger", "popular", "suv"],
    ["Renault", "Duster", "legendary", "suv"],
    ["Renault", "Megane E-Tech", "popular", "electric"],

    ["Citroen", "C3", "popular", "hatchback"],
    ["Citroen", "C3 Aircross", "popular", "suv"],
    ["Citroen", "C5 Aircross", "other", "suv"],
    ["Citroen", "e-C3", "popular", "electric"],

    ["Fiat", "500", "legendary", "hatchback"],
    ["Fiat", "500e", "popular", "electric"],
    ["Fiat", "Panda", "popular", "hatchback"],
    ["Fiat", "Punto", "legendary", "hatchback"],

    ["Mitsubishi", "Pajero", "legendary", "suv"],
    ["Mitsubishi", "Pajero Sport", "popular", "suv"],
    ["Mitsubishi", "Outlander", "popular", "suv"],
    ["Mitsubishi", "Triton", "popular", "pickup"],
    ["Mitsubishi", "Lancer Evolution", "legendary", "sports"],

    ["Isuzu", "D-Max", "popular", "pickup"],
    ["Isuzu", "V-Cross", "popular", "pickup"],
    ["Isuzu", "MU-X", "popular", "suv"],

    ["Suzuki", "Jimny", "popular", "suv"],
    ["Suzuki", "Swift Sport", "popular", "sports"],
    ["Suzuki", "Hayabusa", "other", "motorcycle"]
];


/* =========================================================
   GAMEVAULT CONFIGURATIONS
========================================================= */

const AUTOMOTIVE_CONFIGS = [
    ["Base", 1.00],
    ["Sport", 1.15],
    ["Luxury", 1.35],
    ["Performance", 1.60],
    ["Touring", 1.45],
    ["Off-Road", 1.55],
    ["Track", 1.90],
    ["Collector", 2.40]
];


/* =========================================================
   BRAND PRICE LEVELS
   FICTIONAL GAMEPLAY VALUES
========================================================= */

const BRAND_BASE_PRICE = {

    "Maruti Suzuki": 18000,
    "Tata": 22000,
    "Mahindra": 28000,
    "Hyundai": 28000,
    "Toyota": 35000,
    "Honda": 35000,
    "Kia": 32000,
    "Nissan": 30000,
    "Volkswagen": 35000,
    "Ford": 38000,
    "Chevrolet": 38000,
    "Jeep": 45000,
    "Subaru": 38000,
    "Mazda": 38000,
    "Tesla": 55000,

    "BMW": 85000,
    "Mercedes-Benz": 90000,
    "Mercedes-Maybach": 250000,
    "Audi": 80000,
    "Porsche": 120000,
    "Lexus": 85000,
    "Land Rover": 110000,
    "Volvo": 70000,
    "Jaguar": 75000,

    "Maserati": 130000,
    "Ferrari": 300000,
    "Lamborghini": 320000,
    "McLaren": 300000,
    "Aston Martin": 280000,
    "Bentley": 350000,
    "Rolls-Royce": 500000,

    "Bugatti": 2500000,
    "Koenigsegg": 2200000,
    "Rimac": 2000000,
    "Pagani": 3000000,
    "Gordon Murray Automotive": 2500000,
    "Hennessey": 2200000,
    "Zenvo": 1800000,
    "SSC": 2200000,
    "De Tomaso": 900000,

    "Lotus": 90000,
    "Alpine": 65000,
    "Mini": 45000,
    "Genesis": 70000,
    "Cadillac": 75000,
    "BYD": 40000,
    "MG": 35000,
    "Skoda": 35000,
    "Renault": 30000,
    "Citroen": 28000,
    "Fiat": 26000,
    "Mitsubishi": 35000,
    "Isuzu": 35000,
    "Suzuki": 25000
};


/* =========================================================
   HELPERS
========================================================= */

function automotiveSlug(text) {

    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}


function detectPowertrain(model) {

    const m = model.toLowerCase();

    if (
        m.includes("ev") ||
        m.includes("electric") ||
        m.includes("e-tron") ||
        m.includes("ioniq") ||
        m.includes("taycan") ||
        m.includes("nevera") ||
        m.includes("roadster") ||
        m.includes("model 3") ||
        m.includes("model y") ||
        m.includes("model s") ||
        m.includes("model x") ||
        m.includes("cybertruck") ||
        m.includes("eqs") ||
        m.includes("eqe") ||
        m.includes("i4") ||
        m.includes("i5") ||
        m.includes("i7") ||
        m.includes("ix") ||
        m.includes("rz") ||
        m.includes("spectre") ||
        m.includes("evija") ||
        m.includes("emeya") ||
        m.includes("eletre") ||
        m.includes("en yaq") ||
        m.includes("bolt") ||
        m.includes("seal") ||
        m.includes("atto")
    ) {
        return "electric";
    }

    if (
        m.includes("hybrid") ||
        m.includes("prius") ||
        m.includes("hycross") ||
        m.includes("rav4") ||
        m.includes("camry") ||
        m.includes("crown") ||
        m.includes("ioniq")
    ) {
        return "hybrid";
    }

    if (
        m.includes("diesel") ||
        m.includes("scorpio") ||
        m.includes("fortuner") ||
        m.includes("pajero") ||
        m.includes("d-max")
    ) {
        return "diesel";
    }

    return "petrol";
}


/* =========================================================
   GENERATE 1,000+ LISTINGS
========================================================= */

function generateAutomotiveCatalog() {

    const cars = [];

    let counter = 0;

    AUTOMOTIVE_MODELS.forEach(
        ([brand, model, popularity, bodyStyle], modelIndex) => {

            const basePrice =
                BRAND_BASE_PRICE[brand] || 50000;

            AUTOMOTIVE_CONFIGS.forEach(
                ([configName, multiplier], configIndex) => {

                    let price =
                        basePrice *
                        multiplier *
                        (1 + ((modelIndex % 10) * 0.12));

                    /*
                    Popular/legendary vehicles get a
                    slightly higher fictional gameplay value.
                    */

                    if (popularity === "popular") {
                        price *= 1.08;
                    }

                    if (popularity === "legendary") {
                        price *= 1.75;
                    }

                    if (popularity === "luxury") {
                        price *= 1.35;
                    }

                    /*
                    Collector edition is intentionally expensive.
                    */

                    if (configName === "Collector") {
                        price *= 1.50;
                    }

                    price =
                        Math.round(price / 1000) * 1000;

                    let availability = "unlimited";

                    let stock = null;

                    if (configName === "Collector") {

                        availability = "one";

                    } else if (counter % 17 === 0) {

                        availability = "limited";

                        stock = 2 + (counter % 8);
                    }

                    cars.push({

                        id:
                            "auto-" +
                            automotiveSlug(brand) +
                            "-" +
                            automotiveSlug(model) +
                            "-" +
                            configIndex,

                        brand: brand,

                        model: model,

                        name:
                            brand +
                            " " +
                            model +
                            " — " +
                            configName,

                        config: configName,

                        bodyStyle: bodyStyle,

                        powertrain:
                            detectPowertrain(model),

                        popularity: popularity,

                        price: price,

                        availability: availability,

                        stock: stock,

                        description:
                            "Fictional GameVault " +
                            configName +
                            " configuration of the " +
                            brand +
                            " " +
                            model +
                            "."
                    });

                    counter++;
                }
            );
        }
    );

    return cars;
}


/* =========================================================
   FINAL DATABASE
========================================================= */

const automotive = generateAutomotiveCatalog();


console.log(
    "GAMEVAULT AUTOMOTIVE DATABASE:",
    automotive.length,
    "LISTINGS"
);

console.log(
    "REAL MODEL FAMILIES:",
    AUTOMOTIVE_MODELS.length
);


/*
Expected result:
REAL MODEL FAMILIES × 8 CONFIGURATIONS

The current database contains well over 1,000
generated GameVault automotive listings.
*/