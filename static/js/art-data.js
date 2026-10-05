const artNames = [

    // Leonardo da Vinci
    ["Salvator Mundi", "Leonardo da Vinci", "masterpiece"],
    ["Mona Lisa", "Leonardo da Vinci", "masterpiece"],
    ["The Last Supper", "Leonardo da Vinci", "masterpiece"],
    ["Vitruvian Man", "Leonardo da Vinci", "drawing"],
    ["Lady with an Ermine", "Leonardo da Vinci", "portrait"],
    ["The Annunciation", "Leonardo da Vinci", "masterpiece"],
    ["The Virgin and Child with Saint Anne", "Leonardo da Vinci", "masterpiece"],
    ["Ginevra de' Benci", "Leonardo da Vinci", "portrait"],

    // Vincent van Gogh
    ["Portrait of Dr. Gachet", "Vincent van Gogh", "portrait"],
    ["Irises", "Vincent van Gogh", "landscape"],
    ["Sunflowers", "Vincent van Gogh", "painting"],
    ["The Starry Night", "Vincent van Gogh", "masterpiece"],
    ["Wheat Field with Cypresses", "Vincent van Gogh", "landscape"],
    ["A Wheatfield with Cypresses", "Vincent van Gogh", "landscape"],
    ["Self-Portrait with Bandaged Ear", "Vincent van Gogh", "portrait"],
    ["The Potato Eaters", "Vincent van Gogh", "painting"],
    ["La Mousmé", "Vincent van Gogh", "portrait"],
    ["Peasant Woman Against a Background of Wheat", "Vincent van Gogh", "painting"],

    // Claude Monet
    ["Water Lilies", "Claude Monet", "landscape"],
    ["Meules", "Claude Monet", "landscape"],
    ["Le Bassin aux nymphéas", "Claude Monet", "masterpiece"],
    ["Impression, Sunrise", "Claude Monet", "masterpiece"],
    ["Haystacks", "Claude Monet", "landscape"],
    ["Rouen Cathedral, West Façade", "Claude Monet", "landscape"],
    ["The Japanese Footbridge", "Claude Monet", "landscape"],
    ["Woman with a Parasol", "Claude Monet", "portrait"],
    ["Le Parlement, soleil couchant", "Claude Monet", "landscape"],
    ["Peupliers au bord de l'Epte, temps couvert", "Claude Monet", "landscape"],
    ["La Gare Saint-Lazare", "Claude Monet", "painting"],
    ["San Giorgio Maggiore at Dusk", "Claude Monet", "landscape"],
    ["Nymphéas en fleur", "Claude Monet", "landscape"],

    // Pablo Picasso
    ["Femme à la montre", "Pablo Picasso", "portrait"],
    ["Les Femmes d'Alger (Version O)", "Pablo Picasso", "masterpiece"],
    ["Les Femmes d'Alger (Version F)", "Pablo Picasso", "painting"],
    ["Garçon à la pipe", "Pablo Picasso", "portrait"],
    ["Femme assise", "Pablo Picasso", "portrait"],
    ["Dora Maar au chat", "Pablo Picasso", "portrait"],
    ["La Lecture", "Pablo Picasso", "portrait"],
    ["Le Rêve", "Pablo Picasso", "painting"],
    ["La Gommeuse", "Pablo Picasso", "painting"],
    ["Yo, Picasso", "Pablo Picasso", "portrait"],
    ["Au Lapin Agile", "Pablo Picasso", "painting"],
    ["Nature morte aux pommes", "Pablo Picasso", "painting"],
    ["Buste de femme", "Pablo Picasso", "portrait"],
    ["La Minotauromachie", "Pablo Picasso", "drawing"],
    ["Portrait of Dora Maar", "Pablo Picasso", "portrait"],
    ["Jacqueline", "Pablo Picasso", "portrait"],
    ["Tête de femme", "Pablo Picasso", "drawing"],

    // Andy Warhol
    ["Shot Sage Blue Marilyn", "Andy Warhol", "portrait"],
    ["White Disaster [White Car Crash 19 Times]", "Andy Warhol", "painting"],
    ["Double Elvis [Ferus Type]", "Andy Warhol", "portrait"],
    ["Nine Marilyns", "Andy Warhol", "portrait"],
    ["Elvis 2 Times", "Andy Warhol", "portrait"],
    ["Sixteen Jackies", "Andy Warhol", "portrait"],
    ["Six Self Portraits", "Andy Warhol", "portrait"],
    ["Most Wanted Men No. 11, John Joseph H., Jr.", "Andy Warhol", "portrait"],
    ["Green Car Crash (Green Burning Car I)", "Andy Warhol", "painting"],
    ["Orange Marilyn", "Andy Warhol", "portrait"],
    ["Marilyn Diptych", "Andy Warhol", "portrait"],
    ["Mao", "Andy Warhol", "portrait"],
    ["Flowers", "Andy Warhol", "painting"],
    ["Cowboys and Indians", "Andy Warhol", "painting"],
    ["200 One Dollar Bills", "Andy Warhol", "painting"],
    ["Silver Car Crash (Double Disaster)", "Andy Warhol", "painting"],
    ["Four Marlons", "Andy Warhol", "portrait"],
    ["Triple Elvis", "Andy Warhol", "portrait"],
    ["White Burning Car III", "Andy Warhol", "painting"],
    ["Orange Disaster", "Andy Warhol", "painting"],
    ["Self-Portrait, 1963–64", "Andy Warhol", "portrait"],

    // Jean-Michel Basquiat
    ["Untitled (1982)", "Jean-Michel Basquiat", "masterpiece"],
    ["Untitled (1981)", "Jean-Michel Basquiat", "painting"],
    ["Untitled (Boxer)", "Jean-Michel Basquiat", "painting"],
    ["Untitled (Devil)", "Jean-Michel Basquiat", "painting"],
    ["Dustheads", "Jean-Michel Basquiat", "painting"],
    ["Warrior", "Jean-Michel Basquiat", "painting"],
    ["Boy and Dog in a Johnny Pump", "Jean-Michel Basquiat", "painting"],
    ["Flexible", "Jean-Michel Basquiat", "painting"],
    ["Riding with Death", "Jean-Michel Basquiat", "painting"],
    ["Hollywood Africans", "Jean-Michel Basquiat", "painting"],
    ["Versus Medici", "Jean-Michel Basquiat", "painting"],
    ["Self-Portrait as a Heel (Part Two)", "Jean-Michel Basquiat", "portrait"],
    ["Crowns (Peso Neto)", "Jean-Michel Basquiat", "painting"],
    ["Horn Players", "Jean-Michel Basquiat", "painting"],
    ["In This Case", "Jean-Michel Basquiat", "painting"],
    ["Irony of a Negro Policeman", "Jean-Michel Basquiat", "painting"],

    // Mark Rothko
    ["White Center (Yellow, Pink and Lavender on Rose)", "Mark Rothko", "abstract"],
    ["No. 10", "Mark Rothko", "abstract"],
    ["Orange, Red, Yellow", "Mark Rothko", "abstract"],
    ["Untitled (Black on Grey)", "Mark Rothko", "abstract"],
    ["Royal Red and Blue", "Mark Rothko", "abstract"],
    ["Untitled, 1960", "Mark Rothko", "abstract"],
    ["No. 1 (Royal Red and Blue)", "Mark Rothko", "abstract"],
    ["No. 14", "Mark Rothko", "abstract"],
    ["No. 61 (Rust and Blue)", "Mark Rothko", "abstract"],
    ["Untitled (Yellow, Orange, Red and Blue)", "Mark Rothko", "abstract"],

    // Gerhard Richter
    ["Abstraktes Bild", "Gerhard Richter", "abstract"],
    ["A.B., Brick Tower", "Gerhard Richter", "painting"],
    ["Athen", "Gerhard Richter", "painting"],
    ["Candle", "Gerhard Richter", "painting"],
    ["Ema (Nude on a Staircase)", "Gerhard Richter", "portrait"],
    ["Domplatz Mailand", "Gerhard Richter", "painting"],
    ["4096 Farben", "Gerhard Richter", "abstract"],
    ["Betty", "Gerhard Richter", "portrait"],
    ["Iceberg", "Gerhard Richter", "landscape"],
    ["Seestück (Bewölkt)", "Gerhard Richter", "landscape"],
    ["September", "Gerhard Richter", "painting"],

    // René Magritte
    ["L'Empire des lumières", "René Magritte", "painting"],
    ["The Son of Man", "René Magritte", "portrait"],
    ["Golconda", "René Magritte", "painting"],
    ["La trahison des images", "René Magritte", "painting"],
    ["The False Mirror", "René Magritte", "painting"],
    ["The Human Condition", "René Magritte", "painting"],
    ["Le Buste impassible", "René Magritte", "portrait"],

    // Jackson Pollock
    ["Number 17A", "Jackson Pollock", "abstract"],
    ["No. 5, 1948", "Jackson Pollock", "abstract"],
    ["Blue Poles", "Jackson Pollock", "abstract"],
    ["Number 1A, 1948", "Jackson Pollock", "abstract"],
    ["Lavender Mist", "Jackson Pollock", "abstract"],
    ["Autumn Rhythm", "Jackson Pollock", "abstract"],
    ["Convergence", "Jackson Pollock", "abstract"],

    // Gustav Klimt
    ["Portrait of Adele Bloch-Bauer I", "Gustav Klimt", "portrait"],
    ["The Kiss", "Gustav Klimt", "masterpiece"],
    ["Adele Bloch-Bauer II", "Gustav Klimt", "portrait"],
    ["Judith and the Head of Holofernes", "Gustav Klimt", "portrait"],
    ["Landscape at Kammer Castle III", "Gustav Klimt", "landscape"],
    ["Litzlberg am Attersee", "Gustav Klimt", "landscape"],
    ["Landhaus am Attersee", "Gustav Klimt", "landscape"],

    // Francis Bacon
    ["Three Studies of Lucian Freud", "Francis Bacon", "portrait"],
    ["Triptych, 1976", "Francis Bacon", "painting"],
    ["Study for Innocent X", "Francis Bacon", "portrait"],
    ["Figure with Meat", "Francis Bacon", "painting"],
    ["Three Studies for a Crucifixion", "Francis Bacon", "painting"],
    ["Portrait of Henrietta Moraes", "Francis Bacon", "portrait"],
    ["George Dyer and Lucian Freud", "Francis Bacon", "portrait"],

    // René / contemporary
    ["Interchange", "Willem de Kooning", "abstract"],
    ["Woman III", "Willem de Kooning", "painting"],
    ["Flag", "Jasper Johns", "painting"],
    ["Number 17A", "Jackson Pollock", "abstract"],

    // Roy Lichtenstein
    ["Masterpiece", "Roy Lichtenstein", "painting"],
    ["Nurse", "Roy Lichtenstein", "portrait"],
    ["Woman with Flowered Hat", "Roy Lichtenstein", "portrait"],
    ["Ohhh...Alright...", "Roy Lichtenstein", "painting"],
    ["Sleeping Girl", "Roy Lichtenstein", "portrait"],

    // Banksy
    ["Love is in the Bin", "Banksy", "contemporary"],
    ["Girl with Balloon", "Banksy", "contemporary"],
    ["Show Me the Monet", "Banksy", "contemporary"],
    ["Game Changer", "Banksy", "contemporary"],
    ["Devolved Parliament", "Banksy", "contemporary"],
    ["Rage, the Flower Thrower", "Banksy", "contemporary"],
    ["Flower Thrower", "Banksy", "contemporary"],
    ["Keep It Spotless", "Banksy", "contemporary"],
    ["Slave Labour", "Banksy", "contemporary"],

    // David Hockney
    ["Portrait of an Artist (Pool with Two Figures)", "David Hockney", "portrait"],
    ["Pacific Red", "David Hockney", "painting"],
    ["Splash", "David Hockney", "painting"],
    ["A Bigger Grand Canyon", "David Hockney", "landscape"],
    ["Nichols Canyon", "David Hockney", "landscape"],
    ["Peter Getting Out of Nick's Pool", "David Hockney", "painting"],

    // Amedeo Modigliani
    ["Nu couché (sur le côté gauche)", "Amedeo Modigliani", "portrait"],
    ["Nu couché", "Amedeo Modigliani", "portrait"],
    ["Portrait of Jeanne Hébuterne", "Amedeo Modigliani", "portrait"],
    ["La Belle Romaine", "Amedeo Modigliani", "portrait"],
    ["L'Amazone", "Amedeo Modigliani", "portrait"],

    // Munch
    ["The Scream", "Edvard Munch", "masterpiece"],
    ["Madonna", "Edvard Munch", "portrait"],
    ["Vampire", "Edvard Munch", "painting"],
    ["Anxiety", "Edvard Munch", "painting"],
    ["The Dance of Life", "Edvard Munch", "painting"],
    ["The Sun", "Edvard Munch", "painting"],

    // Cézanne
    ["Nature morte: pommes et poires", "Paul Cézanne", "painting"],
    ["Mont Sainte-Victoire", "Paul Cézanne", "landscape"],
    ["The Large Bathers", "Paul Cézanne", "painting"],
    ["Rideau, Cruchon et Compotier", "Paul Cézanne", "painting"],
    ["Les Joueurs de cartes", "Paul Cézanne", "painting"],

    // Alberto Giacometti
    ["L'Homme qui marche I", "Alberto Giacometti", "sculpture"],
    ["Chariot", "Alberto Giacometti", "sculpture"],
    ["Grande Femme I", "Alberto Giacometti", "sculpture"],
    ["L'Homme au doigt", "Alberto Giacometti", "sculpture"],

    // Piet Mondrian
    ["Composition VIII", "Piet Mondrian", "abstract"],
    ["Composition X", "Piet Mondrian", "abstract"],
    ["Broadway Boogie Woogie", "Piet Mondrian", "abstract"],
    ["Victory Boogie Woogie", "Piet Mondrian", "abstract"],

    // Constantin Brâncuși
    ["Bird in Space", "Constantin Brâncuși", "sculpture"],

    // Jeff Koons
    ["Balloon Dog (Orange)", "Jeff Koons", "sculpture"],
    ["Rabbit", "Jeff Koons", "sculpture"],
    ["Lobster", "Jeff Koons", "sculpture"],
    ["Hanging Heart", "Jeff Koons", "sculpture"],
    ["Michael Jackson and Bubbles", "Jeff Koons", "sculpture"],
    ["Puppy", "Jeff Koons", "sculpture"],

    // Rembrandt
    ["The Night Watch", "Rembrandt", "masterpiece"],
    ["The Jewish Bride", "Rembrandt", "painting"],
    ["Self-Portrait with Two Circles", "Rembrandt", "portrait"],
    ["Portrait of Nicolaes Ruts", "Rembrandt", "portrait"],
    ["The Mill", "Rembrandt", "landscape"],
    ["Aristotle with a Bust of Homer", "Rembrandt", "portrait"],
    ["The Anatomy Lesson of Dr. Nicolaes Tulp", "Rembrandt", "painting"],

    // Vermeer
    ["Girl with a Pearl Earring", "Johannes Vermeer", "portrait"],
    ["The Milkmaid", "Johannes Vermeer", "painting"],
    ["The Art of Painting", "Johannes Vermeer", "painting"],
    ["The Astronomer", "Johannes Vermeer", "painting"],
    ["The Lacemaker", "Johannes Vermeer", "painting"],
    ["View of Delft", "Johannes Vermeer", "landscape"]
];


// Generate the actual GameVault inventory
const artItems = artNames.map((item, index) => {

    const [name, artist, type] = item;

    let price;

    /*
     * Fictional gameplay prices.
     * These are deliberately extremely expensive.
     */

    if (index === 0) {
        price = 450000000;
    } else if (index === 1) {
        price = 900000000;
    } else if (index === 2) {
        price = 750000000;
    } else if (index < 10) {
        price = 350000000 + index * 12000000;
    } else if (index < 35) {
        price = 80000000 + index * 3500000;
    } else if (index < 80) {
        price = 25000000 + index * 1500000;
    } else {
        price = 8000000 + index * 650000;
    }

    return {
        id: `art-${index + 1}`,
        name,
        artist,
        type,
        price,
        quantity: 1,
        rarity: index < 20 ? "ULTRA-RARE" :
                index < 60 ? "LEGENDARY" :
                "RARE",
        oneOfOne: true
    };
});


console.log(
    `GameVault Art Vault loaded: ${artItems.length} artworks`
);

if (artItems.length < 100) {
    console.error("ART DATA ERROR: Fewer than 100 artworks!");
}