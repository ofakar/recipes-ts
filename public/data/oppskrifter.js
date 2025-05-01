// Array containing multiple recipe objects
const recipes = [
  {
    id: "pizza-blanca-gourmet-es",
    language: "es",
    title: "Pizza Blanca Gourmet con Salsa de Ajo y Parmesano, Champiñones y Espinacas",
    description: null,
    yield: null, // Yields are specified in components
    ingredients: [
      {
        componentName: "Salsa Blanca de Ajo y Parmesano",
        yield: "suficiente para 2 pizzas grandes o 3–4 medianas",
        items: [
          { name: "Mantequilla", quantity: "60 g", notes: null },
          { name: "Ajo", quantity: "4 dientes grandes", notes: "finamente picados" },
          { name: "Harina", quantity: "30 g", notes: "unas 2 cucharadas" },
          { name: "Leche entera", quantity: "500 ml", notes: "o mitad leche / mitad nata para más cremosidad" },
          { name: "Queso parmesano", quantity: "80 g", notes: "rallado fino" },
          { name: "Sal", quantity: "1 cucharadita", notes: "ajustar al gusto" },
          { name: "Pimienta negra", quantity: "1 cucharadita", notes: "recién molida" },
          { name: "Nuez moscada", quantity: "Una pizca", notes: "opcional" },
          { name: "Tomillo", quantity: "1 cucharadita fresca o una pizca seca", notes: null },
          { name: "Aceite de oliva virgen extra", quantity: "2 cucharaditas", notes: null },
        ],
      },
      {
        componentName: "Toppings para la Pizza Blanca",
        yield: "Para 2 pizzas grandes o 3–4 medianas",
        items: [
          { name: "Masa de pizza", quantity: "1 kg", notes: "dividida según tamaño" },
          { name: "Aceite de oliva", quantity: "2 cucharadas", notes: "para los bordes" },
          { name: "Salsa blanca", quantity: "la receta anterior (~500 ml)", notes: null },
          { name: 'Champiñones tipo "aroma"', quantity: "200 g", notes: "en láminas finas" },
          { name: "Espinacas frescas (baby)", quantity: "100 g", notes: null },
          { name: "Mozzarella", quantity: "200 g", notes: "troceada o rallada" },
          { name: "Parmesano", quantity: "60 g", notes: "rallado" },
          { name: "Chalotas", quantity: "2 pequeñas", notes: "en rodajas finas" },
          { name: "Jamón curado", quantity: "6–8 lonchas", notes: "opcional" },
          { name: "Pimienta negra", quantity: "al gusto", notes: null },
          { name: "Copos de guindilla", quantity: "una pizca", notes: "opcional" },
          { name: "Aceite de trufa", quantity: "un chorrito al final", notes: "opcional" },
        ],
      },
    ],
    instructions: [
      {
        componentName: "Salsa Blanca de Ajo y Parmesano",
        steps: [
          "Derrite la mantequilla en un cazo a fuego medio-bajo.",
          "Añade el ajo y sofríe 30 segundos sin que se dore.",
          "Incorpora la harina y remueve 1 minuto.",
          "Añade la leche poco a poco sin dejar de remover con varillas.",
          "Agrega el tomillo en este paso.",
          "Cocina a fuego suave 3–5 minutos, hasta que espese un poco.",
          "Añade parmesano, sal, pimienta y nuez moscada.",
          "Retira del fuego y añade el aceite de oliva al final para una textura más sedosa.",
        ],
      },
      {
        componentName: "Montaje y Horneado",
        steps: [
          "Precalienta el horno a 250 °C. Si usas piedra, caliéntala al menos 30 min.",
          "En sartén, saltea las chalotas y luego los champiñones hasta dorar (5–6 min). Añade las espinacas al final y cocina solo hasta que se marchiten.",
          "Estira la masa y colócala en bandeja o piedra.",
          "Monta la pizza:",
          "  - Unta la salsa blanca (~125–150 ml por pizza)",
          "  - Añade la mozzarella, luego los champiñones con espinacas",
          "  - Coloca el jamón curado (si usas)",
          "  - Espolvorea con parmesano, pimienta y guindilla",
          "Hornea durante 7–10 minutos hasta que los bordes estén dorados y crujientes.",
          "Al sacar del horno, añade aceite de trufa (opcional) y sirve inmediatamente.",
        ],
      },
    ],
    servingSuggestions: [
      "Vino blanco: Sauvignon Blanc o Pinot Grigio",
      "Vino tinto: Pinot Noir joven o Chianti",
      "Ensalada: Rúcula con limón y lascas de parmesano",
    ],
    tips: null,
  },
  {
    id: "rustic-sausage-gratin-en",
    language: "en",
    title: "Rustic Sausage Gratin with Potatoes & Gruyère",
    description:
      "Here's a Rustic Sausage Gratin recipe, inspired by French and Alpine cuisine. It features layers of flavorful sausage, creamy potatoes, and a cheesy, garlicky béchamel sauce, baked until golden and bubbling.\n_A comforting, cheesy, and hearty dish perfect for colder days_",
    yield: "Serves 4-6",
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "sausage", quantity: "500 g", notes: "Toulouse, Saucisse de Montbéliard, or a high-quality coarse sausage" },
          { name: "potatoes", quantity: "800 g", notes: "waxy variety like Charlotte or firm all-purpose potatoes" },
          { name: "onion", quantity: "1", notes: "thinly sliced" },
          { name: "garlic", quantity: "2 cloves", notes: "minced" },
          { name: "butter", quantity: "30 g", notes: null },
          { name: "flour", quantity: "30 g", notes: null },
          { name: "whole milk", quantity: "400 ml", notes: null },
          { name: "heavy cream", quantity: "100 ml", notes: null },
          { name: "Dijon mustard", quantity: "1 tsp", notes: null },
          { name: "nutmeg", quantity: "1/4 tsp", notes: null },
          { name: "Gruyère cheese", quantity: "100 g", notes: "grated (or Comté/Emmental)" },
          { name: "Salt & black pepper", quantity: "to taste", notes: null },
          { name: "Fresh thyme", quantity: null, notes: "optional, for garnish" },
        ],
      },
    ],
    instructions: [
      {
        componentName: null, // Main instructions
        steps: [
          "Preheat oven to 200°C (fan 180°C). Butter a gratin dish.",
          "Prepare the sausages: If using raw sausages, brown them in a pan over medium heat until cooked through. If using smoked sausages, slice them into rounds.",
          "Slice the potatoes: Peel (if desired) and thinly slice potatoes (about 3 mm thick). A mandoline makes this easier.",
          "Sauté onions & garlic: In a pan, heat a little butter and sauté onions until soft and golden. Add garlic and cook for 1 more minute.",
          "Make the béchamel:",
          "   - In a saucepan, melt butter, stir in flour, and cook for 1-2 minutes (do not brown).",
          "   - Gradually whisk in milk and cream, stirring continuously until thickened.",
          "   - Add Dijon mustard, nutmeg, salt, and pepper.",
          "   - Stir in half of the Gruyère cheese.",
          "Assemble the gratin:",
          "   - Layer half the potatoes in the gratin dish.",
          "   - Scatter the onions and sausage slices over the potatoes.",
          "   - Pour half the béchamel over the layer.",
          "   - Repeat with remaining potatoes and pour over the rest of the sauce.",
          "   - Sprinkle the top with the remaining Gruyère.",
          "Bake for 35-40 minutes until golden and bubbling.",
          "Rest for 5 minutes before serving. Garnish with fresh thyme.",
        ],
      },
    ],
    servingSuggestions: [
      "Serve with a fresh green salad (vinaigrette-based).",
      "A glass of dry white wine (like a Savoie or Chardonnay) pairs beautifully.",
    ],
    tips: null,
  },
  {
    id: "french-onion-soup-en",
    language: "en",
    title: "French Onion Soup (Soupe à l'Oignon Gratinée)",
    description:
      "French Onion Soup is a timeless classic, known for its rich, caramelized onion base, a deeply flavorful broth, and a crusty bread topping blanketed with melted Gruyère cheese. This dish has its roots in the Les Halles market of Paris, where it was traditionally served as a restorative meal for weary workers.",
    yield: "Serves 4-6",
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "yellow onions", quantity: "1 kg", notes: "about 6 large onions, thinly sliced" },
          { name: "unsalted butter", quantity: "2 tbsp", notes: null },
          { name: "olive oil", quantity: "1 tbsp", notes: "prevents butter from burning" },
          { name: "salt", quantity: "1 tsp", notes: "to draw out moisture from onions" },
          { name: "sugar", quantity: "1 tsp", notes: "optional, to aid caramelization" },
          { name: "garlic", quantity: "2 cloves", notes: "minced" },
          { name: "dry white wine", quantity: "250 ml", notes: "like Sauvignon Blanc or Pinot Grigio" },
          { name: "beef broth", quantity: "1.5 L", notes: "or a mix of beef and vegetable broth for depth" },
          { name: "fresh thyme", quantity: "2 sprigs", notes: "or 1 tsp dried thyme" },
          { name: "bay leaf", quantity: "1", notes: null },
          { name: "Salt and pepper", quantity: "to taste", notes: null },
          { name: "baguette", quantity: "1", notes: "sliced into 1.5 cm thick rounds" },
          { name: "Gruyère cheese", quantity: "200 g", notes: "grated (or a mix of Gruyère and Emmental for extra melt)" },
        ],
      },
    ],
    instructions: [
      {
        componentName: "1. Caramelize the Onions",
        steps: [
          "Heat butter and olive oil in a large, heavy-bottomed pot over medium heat.",
          "Add the sliced onions and sprinkle with salt. Stir to coat the onions in the fat.",
          "Cook slowly, stirring occasionally, until the onions are soft and golden (about 20 minutes).",
          "Increase the heat slightly and add the sugar (optional) to enhance caramelization.",
          "Continue cooking, stirring frequently, until onions are deeply caramelized (dark golden-brown), about 40 minutes in total. Don’t rush this step!",
        ],
      },
      {
        componentName: "2. Deglaze the Pan",
        steps: [
          "Add minced garlic and sauté for about 1 minute.",
          "Pour in the white wine to deglaze, scraping up any browned bits from the bottom of the pot. Let it simmer until the wine is mostly evaporated.",
        ],
      },
      {
        componentName: "3. Build the Soup Base",
        steps: [
          "Add the beef broth, thyme, and bay leaf.",
          "Bring to a simmer, then reduce the heat and let it gently cook for at least 30 minutes. This allows the flavors to meld.",
          "Season with salt and pepper to taste.",
          "Remove the thyme sprigs and bay leaf before serving.",
        ],
      },
      {
        componentName: "4. Prepare the Bread and Cheese Topping",
        steps: [
          "Preheat the oven to 180°C (350°F).",
          "Toast the baguette slices on a baking sheet until golden, flipping once.",
          "Rub each slice with a cut garlic clove for extra flavor (optional).",
        ],
      },
      {
        componentName: "5. Assemble and Gratinate",
        steps: [
          "Ladle the hot soup into oven-safe bowls.",
          "Float 1-2 baguette slices on top of each bowl.",
          "Generously sprinkle with Gruyère cheese.",
          "Place the bowls on a baking sheet and transfer to the oven.",
          "Bake for 10 minutes, then turn on the broiler for 2-3 minutes to melt and brown the cheese.",
          "Remove carefully (the bowls will be hot!) and let them cool slightly before serving.",
        ],
      },
    ],
    servingSuggestions: [
      "Serve immediately while the cheese is gooey and the bread is crispy.",
      "Pair with a dry white wine like Sauvignon Blanc or a light red Burgundy.",
    ],
    tips: [
      "Patience is key for caramelizing the onions. This is where the deep, sweet flavor comes from.",
      "Use a mix of butter and oil to prevent the butter from burning while giving richness to the soup.",
      "For a richer flavor, use homemade beef broth or add a splash of sherry or cognac before deglazing.",
      "For a vegetarian version, use high-quality vegetable broth but be sure to deepen the flavor with extra caramelization of the onions.",
      "Choose the right cheese – Gruyère is traditional for its nutty flavor and excellent melting quality.",
      "Make-Ahead and Storage Tips:",
      "  - The soup base can be made a day in advance and refrigerated. It actually tastes better the next day as the flavors meld.",
      "  - Reheat gently on the stove before assembling with bread and cheese.",
      "  - Freeze the soup base (without the bread and cheese) for up to 3 months.",
    ],
  },
  {
    id: "blueberry-crumble-no",
    language: "no",
    title: "Blueberry Crumble",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: "For the Blueberry Filling",
        items: [
          { name: "blåbær", quantity: "500 g", notes: null },
          { name: "sukker", quantity: "50 g", notes: null },
          { name: "sitronjuice", quantity: "1 tbsp", notes: "~15 g" },
          { name: "maizena", quantity: "2 tsp", notes: "~5 g" },
          { name: "vaniljeekstrakt", quantity: "1 tsp", notes: "~5 g, optional" },
        ],
      },
      {
        componentName: "For the Crumble Topping",
        items: [
          { name: "mel", quantity: "100 g", notes: null },
          { name: "store havregryn", quantity: "80 g", notes: null },
          { name: "brunt sukker", quantity: "80 g", notes: null },
          { name: "kanel", quantity: "1/2 tsp", notes: null },
          { name: "smør", quantity: "100 g", notes: null },
          { name: "salt", quantity: "Pinch", notes: null },
        ],
      },
    ],
    instructions: [], // No instructions provided in the source text
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "minestra-maritata-no",
    language: "no",
    title: "Minestra Maritata - Italian Wedding Soup",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: "Soffrito",
        items: [
          { name: "løk", quantity: "120g (1 stor)", notes: "Kuttet i jevnt store biter" },
          { name: "selleri", quantity: "120g", notes: "Kuttet i jevnt store biter" },
          { name: "gulrot", quantity: "120g", notes: "Kuttet i jevnt store biter" },
          { name: "Rødvin", quantity: null, notes: null },
        ],
      },
      {
        componentName: "Kjøttboller",
        items: [
          { name: "kjøttdeig", quantity: "500g", notes: null },
          { name: "parmesan", quantity: "50g", notes: null },
          { name: "griljermel", quantity: "50g", notes: null },
          { name: "egg", quantity: "1", notes: null },
          { name: "hvitløk", quantity: "2-3 fedd", notes: null },
          { name: "chopped parsley", quantity: "10g", notes: null },
          { name: "salt", quantity: "5g", notes: null },
          { name: "Pepper", quantity: null, notes: null },
        ],
      },
      {
        componentName: "Suppe",
        items: [
          { name: "kyllingkraft", quantity: "2L", notes: null },
          { name: "Estrellitas", quantity: "150g", notes: null },
          { name: "spinat", quantity: "150g", notes: null },
          { name: "Salt og pepper", quantity: null, notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: "Soffrito",
        steps: ["Stek i olje med salt til myk", "Reduser med vin"],
      },
      {
        componentName: "Kjøttboler",
        steps: ["Bland forsiktig til en deig", "Rull til små kjøttboller (ca 2.5cm diameter)"],
      },
      {
        componentName: "Suppe",
        steps: [
          "Kok kyllingkraft og hell oppi soffrito.",
          "Ha i kjøttbollene og kok til de er gjennomkokte (5-10 min)",
          "Tilsett spinaten når det er et par minutter igjen å koke",
          "Smak til med salt og pepper",
        ],
      },
    ],
    servingSuggestions: [
      "Ladle into bowls",
      "Top with extra grated Parmigiano-Reggiano (about 15g per bowl)",
      "A drizzle of olive oil (about 5g per bowl)",
      "Optional: fresh basil or parsley",
    ],
    tips: null,
  },
  {
    id: "shepherds-pie-no",
    language: "no",
    title: "Shepherd's Pie",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: "Til soffrito",
        items: [
          { name: "middels løk", quantity: "1", notes: null },
          { name: "gulrot", quantity: "120 g", notes: null },
          { name: "selleristang", quantity: "120 g", notes: null },
          { name: "olivenolje", quantity: null, notes: null },
        ],
      },
      {
        componentName: "Til fyllet",
        items: [
          { name: "kjøttdeig", quantity: "500 g", notes: null },
          { name: "hvitløksfedd", quantity: "2", notes: "finhakket" },
          { name: "tomatpuré", quantity: "2 ss", notes: null },
          { name: "rødvin", quantity: "1 dl", notes: null },
          { name: "okse- eller kyllingkraft", quantity: "3 dl", notes: null },
          { name: "Worcestershiresaus", quantity: "1 ts", notes: null },
          { name: "tørket timian", quantity: "1 ts", notes: null },
          { name: "laurbærblad", quantity: "1", notes: null },
          { name: "frosne erter", quantity: "100 g", notes: null },
          { name: "Salt og pepper", quantity: null, notes: null },
        ],
      },
      {
        componentName: "Til potetmos",
        items: [
          { name: "poteter", quantity: "1 kg", notes: "skrelt og delt i terninger" },
          { name: "smør", quantity: "50 g", notes: null },
          { name: "fløte (eller melk)", quantity: "1 dl", notes: null },
          { name: "revet parmesan", quantity: "50 g", notes: null },
          { name: "Salt og pepper", quantity: null, notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null, // Main instructions combine components
        steps: [
          "Soffrito: I en gryte, fres løk, gulrot og selleri i olivenolje til det er mykt.",
          "Stek kjøttdeig: I en panne, tilsett kjøttdeig og tørrstek.",
          "Bland: Hell kjøttdeigen i gryta med soffrito, rør inn hvitløk og tomatpuré og la det steke i 2-3 minutter.",
          "Reduser med vin",
          "Langkok: Tilsett kraft, Worcestershire-saus, timian, laurbærblad og erter. La det småkoke i 20+ minutter, inntil det tykner. Fjern laurbærblad.",
          "Potetmos: Kok potetene, mos med smør, fløte (eller melk) og parmesan. Smak til med salt og pepper.",
          "Monter retten: Fordel fyllet i en ildfast form og topp med potetmos.",
          "Stek: Stek ved 200°C i 20-25 minutter, til toppen er gyllen. Ved bruk av varmluft, senk temperaturen litt.",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "lasagne-med-ricotta-no",
    language: "no",
    title: "Lasagne med ricotta",
    description: null,
    yield: "til 4–6 personer",
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "ragu bolognese", quantity: "500–700 g", notes: null },
          { name: "lasagneplater", quantity: "250 g", notes: null },
          { name: "ricotta", quantity: "400 g", notes: null },
          { name: "egg", quantity: "1", notes: null },
          { name: "revet parmesan", quantity: "50 g", notes: "pluss litt ekstra til toppen" },
          { name: "fersk mozzarella", quantity: "250 g", notes: "kutt i skiver eller terninger" },
          { name: "Salt og pepper", quantity: null, notes: null },
          { name: "Fersk basilikum eller persille", quantity: "Evt", notes: "til topping" },
        ],
      },
    ],
    instructions: [
      {
        componentName: null, // Main instructions
        steps: [
          "Forbered ricotta-blandingen: Bland ricotta, egg, revet parmesan, salt og pepper i en bolle. Rør sammen til en jevn blanding.",
          "Sett sammen lasagnen:",
          "  1. Forvarm ovnen til 175°C varmluft.",
          "  2. Ha et tynt lag med ragu bolognese i bunnen av en ildfast form (ca. 33 x 23 cm eller lignende).",
          "  3. Legg et lag lasagneplater over.",
          "  4. Fordel et lag med ricotta-blanding over platene, og deretter et lag ragu. Strø med mozzarella.",
          "  5. Gjenta lagene (plater, ricotta, ragu, mozzarella) til ingrediensene er brukt opp. Avslutt med ragu og et godt lag mozzarella på toppen.",
          "  6. Dryss litt ekstra parmesan over hvis ønskelig.",
          "Stek lasagnen:",
          "  1. Dekk formen med folie og stek i 15–20 minutter.",
          "  2. Fjern folien og stek videre i 10–15 minutter, eller til toppen er gyllen og bobler.",
          "  3. La lasagnen hvile i 10 minutter før du serverer.",
        ],
      },
    ],
    servingSuggestions: null,
    tips: [
      "Hvis du bruker tørre lasagneplater, sørg for at sausen er litt fuktig for å hjelpe platene å koke.",
      "Vil du ha ekstra smak? Strø litt tørket oregano eller timian mellom lagene.",
    ],
  },
  {
    id: "tikka-masala-no",
    language: "no",
    title: "Tikka Masala",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: "For kylling-marinaden",
        items: [
          { name: "kyllingfilet", quantity: "500 g", notes: null },
          { name: "yoghurt", quantity: "150 g", notes: null },
          { name: "sitronsaft", quantity: "2 ss", notes: null },
          { name: "hvitløk", quantity: "3 fedd", notes: null },
          { name: "raspa ingefær", quantity: "1 ss", notes: null },
          { name: "malt spisskumen", quantity: "1 ts", notes: null },
          { name: "malt koriander", quantity: "1 ts", notes: null },
          { name: "gurkemeie", quantity: "1 ts", notes: null },
          { name: "garam masala", quantity: "1 ts", notes: null },
          { name: "chilipulver", quantity: "1/2 ts", notes: null },
          { name: "salt", quantity: "1/2 ts", notes: null },
        ],
      },
      {
        componentName: "For sausen",
        items: [
          { name: "olje", quantity: "2 ss", notes: null },
          { name: "stor løk", quantity: "1", notes: "hakket" },
          { name: "hvitløk", quantity: "3 fedd", notes: "hakket" },
          { name: "malt ingefær", quantity: "1 ss", notes: null },
          { name: "hakka tomater", quantity: "2-3", notes: "evt 400 g tomat på boks" },
          { name: "tomatpuré", quantity: "1 ss", notes: null },
          { name: "malt spisskumen", quantity: "1 ts", notes: null },
          { name: "malt koriander", quantity: "1 ts", notes: null },
          { name: "pimentón", quantity: "1 ts", notes: null },
          { name: "garam masala", quantity: "1 ts", notes: null },
          { name: "chilipulver", quantity: "1/2 tsp", notes: null },
          { name: 'kokosnøtt-"cream" eller fløte', quantity: "2 dl", notes: null },
          { name: "kyllingkraft", quantity: "1.5 dl", notes: null },
          { name: "Salt", quantity: null, notes: null },
          { name: "Ferske korianderblad", quantity: null, notes: "for pynt" },
        ],
      },
    ],
    instructions: [], // No instructions provided
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "naan-no",
    language: "no",
    title: "Naan",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "hvetemel", quantity: "250 g", notes: null },
          { name: "sukker", quantity: "1 ts", notes: null },
          { name: "salt", quantity: "1/2 ts", notes: null },
          { name: "bakepulver", quantity: "1/2 ts", notes: null },
          { name: "yoghurt", quantity: "2 ss", notes: null },
          { name: "olje", quantity: "2 aa", notes: null }, // Assuming 'aa' is a typo for 'ss' (tablespoon) or 'ts' (teaspoon)
          { name: "varm melk", quantity: "1.2 dl", notes: null },
          { name: "Smeltet smør, hvitløk, fersk koriander", quantity: "Evt", notes: null },
        ],
      },
    ],
    instructions: [], // No instructions provided
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "burrata-salat-no",
    language: "no",
    title: "Burrata salat",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "burrata", quantity: "1 ball (ca 125g)", notes: null },
          { name: "ruccola", quantity: "100 g", notes: "vasket" },
          { name: "cherrytomater", quantity: "100 g", notes: "halverte" },
          { name: "olivenolje", quantity: "2 ss", notes: null },
          { name: "balsamico glaze", quantity: "1 ss", notes: null },
          { name: "pesto", quantity: "2 ts", notes: null },
          { name: "fersk ricotta eller smuldra parmesan", quantity: "2 ss", notes: null },
          { name: "Salt og pepper", quantity: null, notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Fordel ruccola ut på en tallerken",
          'Plasser burrata i midten av tallerken (la hvile i 10 min for å fremheve "creamyness")',
          "Ha på olje og glaze over ruccola og burrata",
          "Ha på dæsjer med pesto",
          "Spre parmesansmulder utover",
          "Krydre med salt og generøse mengder nykverna pepper",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "balsamico-glaze-no",
    language: "no",
    title: "Balsamico glaze",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "balsamico", quantity: "1 dl", notes: null },
          { name: "sukker", quantity: "1 ss", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Kok opp 1 dl balsamico med 1 ss sukker i en liten kasserolle",
          'Reduser til den er "passe" tjukk (husk at den tykner ekstra ved nedkjøling)',
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "melanzane-alla-parmigiana-no",
    language: "no",
    title: "Melanzane alla Parmigiana",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "store auberginer", quantity: "2 (ca 600-700 g)", notes: null },
          { name: "tomat", quantity: "1 boks", notes: null },
          { name: "liten løk", quantity: "1", notes: "hakka" },
          { name: "hvitløk", quantity: "2 fedd", notes: "hakka" },
          { name: "olivenolje", quantity: "3 ss", notes: null },
          { name: "tørka oregano", quantity: "1 ts", notes: "eller ferske blader med basilikum" },
          { name: "fersk mozzarella", quantity: "200 g", notes: "revet" },
          { name: "raspa parmesan", quantity: "50 g", notes: null },
          { name: "Salt og pepper", quantity: null, notes: null },
          { name: "Hvetemel", quantity: null, notes: "for meling av aubergin" },
          { name: "Basilikumsblader", quantity: null, notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: "Forbered auberginene",
        steps: [
          "Kutt auberginer i sirkler, salt de i en dørslag og la de stå ca 30 minutter (for å fjerne bitterheta)",
          "Ha olje, salt og pepper på auberginene og stek de på brett i ovnen til de er gyldne og krympa",
        ],
      },
      {
        componentName: "Lag tomatsaus mens auberginene steker",
        steps: [
          "Stek løken blank, tilsett hvitløk og stek 1 minutt til",
          "Tilsett tomat, oregano, salt og pepper og kok til sausen blir tjukk. Smak til med salt",
        ],
      },
      {
        componentName: "Varm ovnen til 175°C og finn frem en form",
        steps: [
          "Smør et tynt lag tomatsaus på bunnen av formen",
          "Tilsett et lag med aubergin, fulgt av mer tomatsaus, revet mozzarella og parmesan",
          "Repeter lagene og avslutt med et godt lag med mozzarella og parmesan",
          "Stek 25-30 minutter til osten er smelta, bobler og gylden brun",
        ],
      },
      // Note: Step 4 in the original text seems incomplete or misplaced.
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "panna-cotta-no",
    language: "no",
    title: "Panna Cotta",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "kremfløte", quantity: "5 dl", notes: null },
          { name: "helmelk", quantity: "1 dl", notes: null },
          { name: "sukker", quantity: "75 g", notes: null },
          { name: "vaniljeekstrakt", quantity: "1 ts", notes: null },
          { name: "gelatin", quantity: "7-8 g", notes: null },
          { name: "kaldt vann", quantity: "70-80 g", notes: null },
          { name: "Sjokoladesaus, karamell, bærcoulis, piska krem, fersk frukt, mintblader", quantity: "Evt", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Bland kaldt vann og gelatin i et lite glass og la det stå 5-10 minutter (til det blir tyktflytende)",
          "I en liten kasserolle, bland og varm opp (ikke kok) kremfløte, melk, sukker og vaniljeekstrakt",
          "Ha i gelatinblandingen i kasserollen og rør godt sammen",
          "Kjør blandingen gjennom en sil og oppi et hellebeger (f.eks. et målebeger)",
          "Hell og fordel så blandingen i små glass/former/ramekin",
          "Kjøl i kjøleskap i minimum 4 timer",
          "Server med sjokoladesaus, karamell, bærcoulis, piska krem, fersk frukt og/eller mintblader",
        ],
      },
    ],
    servingSuggestions: null, // Serving options are listed in ingredients/instructions
    tips: null,
  },
  {
    id: "sjokoladesaus-no",
    language: "no",
    title: "Sjokoladesaus",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "kremfløte", quantity: "1 dl", notes: null },
          { name: "mørk sjokolade", quantity: "120 gram", notes: "tilsett 1 ss sukker ved veldig mørk sjokolade" },
          { name: "smør", quantity: "30 g", notes: null },
          { name: "vaniljeekstrakt", quantity: "1 ts", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Varm opp 1 dl kremfløte i en liten kasserolle",
          "Ha oppi 120 gram mørk sjokolade (tilsett 1 ss sukker ved veldig mørk sjokolade) og la stå et par minutter for å smelte sjokoladen før du blander det godt",
          "Tilsett 30 g smør og bland godt",
          "Tilsett 1 ts vaniljeekstrakt og bland godt",
          "Ved nedkjøling må den kanskje varmes opp igjen for å få den flytende nok for servering",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "jordbaercoulis-no",
    language: "no",
    title: "Jordbærcoulis",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "jordbær", quantity: "200 g", notes: null },
          { name: "sukker", quantity: "50 g", notes: null },
          { name: "sitronsaft", quantity: "1-2 ss", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Ha 200 g jordbær, 50 g sukker og 1-2 ss sitronsaft i en liten kasserolle",
          "Kok opp og småkok i ca 5 minutter til jordbærene er myke",
          "Blend coulisen og kjør gjerne gjennom en sil",
          "Kjøl ned og server",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "urtebakt-laks-no",
    language: "no",
    title: "Urtebakt laks",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "laksefilet", quantity: "1 kg", notes: "hel eller i porsjoner" },
          { name: "Olivenolje", quantity: null, notes: "eller smeltet smør" },
          { name: "hvitløksfedd", quantity: "3", notes: "finhakket" },
          { name: "dijon", quantity: "1 ss", notes: null },
          { name: "brunt sukker", quantity: "2 ts", notes: "eller honning, valgfritt" },
          { name: "Revet skall og saft av sitron", quantity: "1", notes: null },
          { name: "brødsmuler", quantity: "3 ss", notes: "f.eks panko" },
          { name: "revet parmesan", quantity: "2 ss", notes: null },
          { name: "fersk dill", quantity: "2 ss", notes: "finhakket (evt gressløk, basilikum, timian eller oregano)" },
          { name: "tørket oregano eller timian", quantity: "1 ts", notes: null },
          { name: "Salt og pepper", quantity: null, notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Forvarm ovnen: Sett ovnen på 200°C (eller 180°C med varmluft). Kle et stekebrett med bakepapir.",
          "Forbered laksen: Legg laksefileten med skinnsiden ned på stekebrettet. Tørk lett av med kjøkkenpapir, og krydre med salt og pepper.",
          "Lag blandingen:",
          "  - I en liten bolle: Bland olivenolje, hvitløk, dijon, sukker (eller honning), sitronskall og sitronsaft. Pensle blandingen over laksen.",
          "  - I en annen bolle: Bland brødsmuler, parmesanost, friske urter og oregano. Dryss dette jevnt over laksen og trykk lett for at det skal feste seg.",
          "Stek laksen: Sett laksen i den forvarmede ovnen og stek i 15–20 minutter, avhengig av tykkelsen på fileten. Laksen er ferdig når den flaker seg lett med en gaffel og skorpen er gyllen.",
          "Server: La laksen hvile i noen minutter før den skjæres opp. Server med potetmos og en sitronskive eller friske urter som pynt.",
        ],
      },
    ],
    servingSuggestions: [
      "Dampede asparges eller grønne bønner.",
      "En lett yoghurtsaus med dill (se oppskrift nedenfor).", // Reference to another recipe
    ],
    tips: null,
  },
  {
    id: "lett-yoghurtsaus-med-dill-no",
    language: "no",
    title: "Lett yoghurtsaus med dill",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "tyrkisk yoghurt", quantity: "200 g", notes: null },
          { name: "fersk dill", quantity: "1–2 ss", notes: "finhakket" },
          { name: "hvitløksfedd", quantity: "1", notes: "finhakket" },
          { name: "sitronsaft", quantity: "1 ts", notes: null },
          { name: "olivenolje", quantity: "1 ts", notes: "valgfritt, for en jevnere tekstur" },
          { name: "Salt og pepper", quantity: null, notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Bland ingrediensene: I en bolle, bland yoghurten med finhakket dill, hvitløk og sitronsaft.",
          "Smak til: Tilsett salt og pepper og evt. olivenolje.",
          "Avkjøl: La sausen hvile i kjøleskapet i minst 15 minutter for å la smakene sette seg.",
          "Server: Bruk som saus til laksen eller som en dipp ved siden av.",
        ],
      },
    ],
    servingSuggestions: null,
    tips: ["Tilsett en klype spisskummen eller røkt paprika for en varm undertone.", "Rør inn finhakket agurk eller kapers for mer tekstur."],
  },
  {
    id: "pasta-med-pesto-og-kylling-no",
    language: "no",
    title: "Pasta med pesto og kylling",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: "For the Pesto Sauce",
        items: [
          { name: "basilikumsblader", quantity: "25 g", notes: null },
          { name: "revet parmesan", quantity: "25 g", notes: null },
          { name: "olivenolje", quantity: "50 g", notes: null },
          { name: "pinjekjerner", quantity: "2 ss", notes: "stekt i panna (you can substitute with walnuts or almonds)" },
          { name: "hvitløk", quantity: "1 fedd", notes: "hakket" },
          { name: "Salt og pepper", quantity: null, notes: null },
        ],
      },
      {
        componentName: "Pasta og kylling",
        items: [
          { name: "pasta", quantity: "250 g", notes: "penne, fusilli, spaghetti e.l." },
          { name: "kyllingfileter", quantity: "2 (200-250 g totalt)", notes: null },
          { name: "olivenolje", quantity: "1 ss", notes: null },
          { name: "cherrytomater", quantity: "Eventuelt: 1 kopp", notes: "halverte" },
          { name: "Friske basilikumblader", quantity: "Eventuelt", notes: "til pynt" },
        ],
      },
    ],
    instructions: [
      {
        componentName: null, // Instructions combine components
        steps: [
          "Lag pestoen:",
          "  - Kjør basilikum, parmesan, pinjekjerner og hvitløk sammen i en blender.",
          "  - Tilsett olivenoljen gradvis mens maskinen går, til pestoen er glatt.",
          "  - Smak til med salt og pepper.",
          "Kok pastaen: Kok pastaen al dente i godt saltet vann. Spar litt pastavann før du kjører den i dørslaget.",
          "Stek kyllingen:",
          "  - Krydre kyllingfiletene med salt og pepper.",
          "  - Stek i olivenolje på middels varme, 5-7 minutter per side, til kjernetemperaturen er 75°C.",
          "  - La hvile noen minutter før du skjærer dem i skiver.",
          "Bland pasta og pesto: Ha den kokte pastaen i en panne. Tilsett pestoen og bland godt. Tilsett pastavann om nødvendig.",
          "Server:",
          "  - Fordel pastaen på tallerkener, legg på skiver av kyllingfilet.",
          "  - Pynt med cherrytomater og friske basilikumblader om ønskelig.",
          "  - Ristede pinjekjerner eller brødsmuler på toppen gir en god tekstur.",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "pesto-alla-genovese-no",
    language: "no", // Instructions are in Norwegian
    title: "Pesto alla Genovese",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "basilikumsblader", quantity: "50 g", notes: null },
          { name: "pinjekjerner", quantity: "30 g", notes: null },
          { name: "hvitløk", quantity: "2 fedd", notes: null },
          { name: "parmesan", quantity: "60 g", notes: null },
          { name: "Pecorino Romano", quantity: "30 g", notes: null },
          { name: "olivenolje", quantity: "1 dl", notes: null },
          { name: "salt", quantity: "et knippe", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Forbered basilikumsbladene: Vask bladene og tørk de helt tørre med tørkepapir.",
          "Morter:",
          "  - Knus hvitløk med et knippe salt til en paste.",
          "  - Tilsett pinjekjernene og mos dem inn i hvitløken.",
          "  - Legg i basilikumbladene litt etter litt og knus dem forsiktig i sirkelbevegelser for å få ut mest mulig av aromaen.",
          "  - Ha i revet parmesan og Pecorino Romano og bland godt.",
          "  - Rør inn olivenolje litt etter litt til det blir en kremet konsistens.",
          "Smak til med salt, mer ost, eller olivenolje etter behov.",
          "Server umiddelbart eller lagre:",
          "  - Bland pestoen med varm pasta (tradisjonelt trofie eller trenette) og tilsett evt litt pastavann for å få en fin, silkemyk saus.",
          "  - Ved oppbevaring i kjøleskap, legg den i en lufttett beholder, hell litt olivenolje på toppen og sett den i kjøleskapet. Den holder seg best i 3–5 dager.",
          "  - Ved frysing, la gjerne være å tilsette osten, i stedet tilsett når du tiner det. Ha gjerne i isbitbeholdere for å porsjonere",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "tomatsuppe-no-1",
    language: "no",
    title: "Tomatsuppe",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: "Soffrito",
        items: [
          { name: "Olivenolje", quantity: null, notes: null },
          { name: "løk", quantity: "1", notes: null },
          { name: "gulrøtter", quantity: "2", notes: null },
          { name: "selleristenger", quantity: "2", notes: null },
          { name: "hvitløksfedd", quantity: "3", notes: null },
        ],
      },
      {
        componentName: "Suppe",
        items: [
          { name: "tomatpuré", quantity: "2 ss", notes: null },
          { name: "tørr hvitvin (eller rødvin)", quantity: "125 ml", notes: null },
          { name: "tomater", quantity: "1 kg", notes: "skrelt og hakket, eller 2 bokser knuste eller hakkede tomater" },
          { name: "grønnsakskraft", quantity: "0.5 l", notes: null },
          { name: "sukker", quantity: "1 ts", notes: null },
          { name: "tørket oregano", quantity: "1-2 ts", notes: null },
          { name: "Salt og pepper", quantity: null, notes: null },
          { name: "kremfløte", quantity: "1-2 dl", notes: null },
          { name: "Fersk basilikum", quantity: null, notes: "til pynt" },
        ],
      },
      {
        componentName: "Servering",
        items: [
          { name: "Rustikt brød eller krutonger", quantity: null, notes: null },
          { name: "Revet parmesan", quantity: null, notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Lag soffrito: Fres løk, gulrot og selleri i olje i 8-10 minutter, til det er mykt. Tilsett hvitløk og fres et minutt til.",
          "Tomatpuré og vin: Rør inn tomatpuré og stek enda et minutt. Hell i vin og reduser (hvertfall til halvert.",
          "Tomater og kraft: Tilsett hakkede tomater, kraft, oregano og sukker. Kok opp og la det småkoke i 30+ minutter.",
          "Miks suppen: Purer suppen med en stavmikser,", // Instruction seems incomplete
          "Smak til og tilsett krem: Smak til med salt og pepper. Rør inn kremfløten mot slutten for en silkemyk konsistens.",
          "Server: Hell suppen i boller, pynt med frisk basilikum, og server med brød eller krutonger. Dryss over parmesan hvis ønskelig.",
        ],
      },
    ],
    servingSuggestions: null, // Included in ingredients/instructions
    tips: null,
  },
  {
    id: "pizzadeig-no-1",
    language: "no",
    title: "Pizzadeig",
    description: null,
    yield: null,
    ingredients: [], // No ingredients provided
    instructions: [], // No instructions provided
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "gnocchi-no",
    language: "no",
    title: "Gnocchi",
    description: null,
    yield: null,
    ingredients: [], // No ingredients provided
    instructions: [], // No instructions provided
    servingSuggestions: null,
    tips: null,
  },
  // Skipping "Matretter" as it's a list, not a recipe
  {
    id: "grot-geisha-no",
    language: "no",
    title: "Grøt geisha",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "rundkornet ris", quantity: "1 dl", notes: null },
          { name: "vann", quantity: "2 dl", notes: null },
          { name: "melk", quantity: "5 dl", notes: null },
          { name: "salt", quantity: "1/8 ts", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Kok opp vann",
          "Tilsett ris og salt",
          "Småkok til vannet nesten er kokt inn",
          "Spe med melk.",
          "Kok på lav varme under lokk til grøten er tykk.",
          "  - Ca 45 minutter.",
          "  - Rør i blant.",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "tomatsuppe-no-2",
    language: "no",
    title: "Tomatsuppe",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "olivenolje", quantity: "2 ss", notes: null },
          { name: "løk", quantity: "1", notes: null },
          { name: "båter hvitløk", quantity: "2", notes: null },
          { name: "knuste tomater", quantity: "800 g", notes: null },
          { name: "buljong", quantity: "2.5 dl", notes: null },
          { name: "sukker", quantity: "1 ts", notes: null },
          { name: "basilikum", quantity: "1/2 ts", notes: null },
          { name: "oregano", quantity: "1/2 ts", notes: null },
          { name: "Salt og pepper", quantity: null, notes: null },
          { name: "fløt", quantity: "1 dl", notes: null }, // Assuming 'fløt' means 'fløte' (cream)
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Stek løk.",
          "Tilsett hvitløk og stek litt til.",
          "Tilsett knuste tomater, buljong, sukker, basilikum, oregano, salt og pepper. Kok 30 min.",
          "Blend.",
          "Tilsett rømme, parmesan, egg, osv..", // Serving suggestion within instructions
        ],
      },
    ],
    servingSuggestions: ["rømme, parmesan, egg, osv.."],
    tips: null,
  },
  {
    id: "ragu-bolognese-no",
    language: "no",
    title: "Ragu bolognese",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "Soffrito", quantity: "120g selleri, 120g gulrot og medium løk", notes: null },
          { name: "Kjøttdeig", quantity: "500g", notes: "Miks av 14% kjøttdeig/okse høyrygg og svinenakke" },
          { name: "Rødvin", quantity: "2 dl", notes: "Tørr, Rioja" },
          {
            name: "Tomatsaus",
            quantity: "1 boks San Marzano-tomater, 1ss tomatpuré (Mutti/Petti), 1ss sukker, 1 grønnsaksbuljong, 1 ss konsentrert kjøttkraft",
            notes: null,
          },
          { name: "Fløte", quantity: "1 dl", notes: null },
          { name: "Pasta", quantity: null, notes: null },
          { name: "Parmesan", quantity: null, notes: "20 mnd+" },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Stek soffrito m/salt og olje til løken er blank.",
          "Tørrstek kjøttdeig i egen panne",
          "Bland soffrito med kjøttdeig",
          "Reduser med vin",
          "Tilsett tomatsaus og fløte. Kok på lav temp, min. 2 timer",
          "Servér",
        ],
      },
    ],
    servingSuggestions: ["Server med pasta og parmesan."], // Implied by ingredients/instructions
    tips: null,
  },
  {
    id: "salmorejo-no-1",
    language: "no", // Instructions are in Norwegian
    title: "Salmorejo",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "tomater", quantity: "1.5 kg", notes: null },
          { name: "tørt hvitt brød", quantity: "200 g", notes: null },
          { name: "hvitløk", quantity: "3 fedd", notes: null },
          { name: "olivenolje", quantity: "1-2 dl", notes: null },
          { name: "hvitvins-/rødvinseddik", quantity: "2-3 ss", notes: null },
          { name: "Salt", quantity: null, notes: null },
          { name: "Tilbehør", quantity: null, notes: "Kokt egg, potet" }, // Added 'potet' as per text
        ],
      },
    ],
    instructions: [
      {
        componentName: "Forberelser",
        steps: [
          "Klargjør ingredienser, kniv, trefjøl og blender",
          "Ha salt, vineddik og olivenolje klar ved blenderen",
          "Tomatene kan skrelles: Lag et kryss med kniv på bunnen av tomatene -> legg oppi kokende vann i 30 sekunder --> Skrell.",
          "Brødet kan tørkes i ovnen på 75 grader (1-2 timer, eller så lenge som mulig avhengig av tid) -> Soak brødet 2 minutter i vann -> Press av vannet",
          "Chop hvitløk",
          "Klargjør beholdere/flasker",
        ],
      },
      {
        componentName: "Instruksjoner",
        steps: [
          "Blend tomater, brød og hvitløk",
          "Hell oppi olje inntil konsistensen blir creamy",
          "Tilsett eddik og salt underveis -> Smak og tilsett ekstra ved behov",
          "Hell resultatet over i beholdere/flasker -> Sett i kjøleskap",
        ],
      },
    ],
    servingSuggestions: ["Serveres med kokt egg og potet."],
    tips: null,
  },
  {
    id: "pasta-no",
    language: "no",
    title: "Pasta",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "hvetemel", quantity: "240 g", notes: null },
          { name: "semulegryn", quantity: "60 g", notes: null },
          { name: "store egg", quantity: "3", notes: null },
          { name: "olje", quantity: "1 ss", notes: null },
          { name: "salt", quantity: "1 ss", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Hell mel og semule i en bolle og legg egg, salt og olje oppi en grop i melet",
          "Pisk eggene med en gaffel mens du blander inn melet samtidig",
          "Ta over med hendene etterhvert; overfør gjerne deigen rett på kjøkkenbenken. Kna til du får en glatt og elastisk deig (5-10 min. Tilsett vann hvis tørr, mel hvis klissete)",
          "Hvil deigen, tildekt, i 30+ minutter (for å roe ned gluten, lettere å jobbe med)",
          "Mel kjøkkenbenken, rull ut deigen, og del den i 4 biter.",
          'Kjør hver deigbit gjennom pastamaskinen (Begynn på innstilling "1" og fortsett til "6") og fullfør denne prosessen med ønsket pastavariant (som spaghetti, tagliatelle, lasagneplater osv)',
          "Kok (4-5 minutter)",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "bechamel-no",
    language: "no",
    title: "Bechamel",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "melk", quantity: "1 liter", notes: null },
          { name: "smør", quantity: "50 g", notes: null },
          { name: "Hvetemel", quantity: null, notes: null }, // Amount not specified
          { name: "Salt", quantity: null, notes: null },
          { name: "Pepper", quantity: null, notes: null },
          { name: "Muskatnøtt, parmesan", quantity: "Evt.", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Smelt smør og tilsett mel, sakte, til konsistensen er fast",
          "Tilsett melk og kok til den slutter å tykne (tar 5-10 minutter).",
          "Tilsett salt og peper, evt muskatnøtt og parmesan",
          "Kok videre i 10 min på lav temperatur",
        ],
      },
    ],
    servingSuggestions: null,
    tips: ["Bechamelsausen tykner når den kjøler"],
  },
  {
    id: "moussaka-en",
    language: "en", // Instructions are in English
    title: "Moussaka",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: "Aubergin-forberedelser",
        items: [
          { name: "auberginer", quantity: "3-4", notes: "kuttet i ~1/2 cm tykke sirkler" },
          { name: "Salt", quantity: null, notes: null },
          { name: "Olivenolje", quantity: null, notes: null },
        ],
      },
      {
        componentName: "Kjøttsaus",
        items: [
          { name: "Olivenolje", quantity: null, notes: null },
          { name: "stor løk", quantity: "1", notes: "hakket" },
          { name: "hvitløk", quantity: "2 fedd", notes: "hakket" },
          { name: "kjøttdeig", quantity: "700 g", notes: "lam: originalt. Okse/svin: Mildere" },
          { name: "rødvin", quantity: "60 ml", notes: null },
          { name: "tomat", quantity: "1 boks", notes: null },
          { name: "tomatpuré", quantity: "2 ss", notes: null },
          { name: "kanel", quantity: "1 ts", notes: null },
          { name: "muskatnøtt", quantity: "0.5 ts", notes: null },
          { name: "Salt og pepper", quantity: null, notes: null },
          { name: "Persille", quantity: null, notes: "til garnityr" },
        ],
      },
      {
        componentName: "Béchamel",
        items: [
          { name: "smør", quantity: "115 g", notes: null },
          { name: "hvetemel", quantity: "65 g", notes: null },
          { name: "helmelk", quantity: "950 ml", notes: null },
          { name: "malt muskatnøktt", quantity: "1/4 tsp", notes: null }, // Typo in original: muskatnøktt
          { name: "Salt and pepper", quantity: null, notes: null },
          { name: "store eggeplommer", quantity: "3", notes: null },
          { name: "parmesan", quantity: "175g", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null, // Instructions combine components
        steps: [
          "Prepare the eggplant: Sprinkle eggplant slices with salt and set them in a colander to drain for 30 minutes. Rinse the slices under cold water and pat dry with paper towels. In a large skillet, heat olive oil and fry the eggplant slices in batches until golden brown on both sides. Set aside on paper towels to drain excess oil.",
          "Make the meat sauce: In a large saucepan, heat 30ml olive oil over medium heat. Add the onions and garlic, and cook until softened, about 5 minutes. Add the ground meat, breaking it up with a spoon, and cook until browned. Drain any excess fat.",
          "Stir in the red wine, crushed tomatoes, tomato paste, cinnamon, allspice, nutmeg, salt, and pepper. Bring to a boil, then reduce heat to low and simmer, uncovered, for 30 minutes. Stir in the chopped parsley and set aside.", // Note: Allspice not listed in ingredients
          "Make the béchamel sauce: In a medium saucepan, melt the butter over medium heat. Whisk in the flour and cook, stirring, for 2 minutes. Gradually whisk in the warmed milk and cook, stirring constantly, until the sauce thickens, about 5 minutes. Remove from heat and stir in the nutmeg, salt, and pepper.",
          "In a small bowl, whisk the egg yolks. Slowly whisk in about 240ml of the warm béchamel sauce to temper the egg yolks. Pour the tempered egg yolk mixture back into the saucepan with the remaining béchamel sauce, whisking constantly. Stir in 115g of the grated cheese.",
          "Preheat the oven to 180°C. Grease a 23x33 cm baking dish.",
          "Assemble the moussaka: Place a layer of eggplant slices in the bottom of the prepared dish. Spread half of the meat sauce over the eggplant. Add another layer of eggplant slices, followed by the remaining meat sauce. Top with a final layer of eggplant slices.",
          "Pour the béchamel sauce evenly over the top layer of eggplant. Sprinkle the remaining 60g of grated cheese over the béchamel.",
          "Bake the moussaka for 45 minutes, or until the top is golden and bubbling.",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "marsipan-en",
    language: "en", // Instructions are in English
    title: "Marsipan",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "malte mandler", quantity: "200 g", notes: null },
          { name: "melis", quantity: "200 g", notes: null },
          { name: "mandelekstrakt", quantity: "2 ts", notes: null },
          { name: "rosevann", quantity: "1 ts", notes: null },
          { name: "eggehvite", quantity: "1", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Bolle 1, stor: Bland malte mandler og melis. Tilsett mandelekstrakt og rosevann.",
          'Bolle 2, liten: Pisk eggehvite til den blir "slightly frothy"',
          "Tilsett eggehviten til bolle 1, gradvis, til du får en fast deig. Du trenger kanskje ikke hele eggehviten, så tilsett sakte og følg med på konsistensen (den skal holde formen, uten å være for klissete)",
          "Kna marsipandeigen på melis-melet kjøkkenbenk til den blir glatt og smidig.",
          "Form marsipanen, lufttørk",
          "At this point, you can shape the marzipan into desired forms, such as balls or figurines. Alternatively, you can roll it out and use it to cover cakes or cut into decorative shapes.",
          "Allow the marzipan to air-dry at room temperature for 1-2 days to firm up before using it for decorations or enjoying it as is.",
        ],
      },
    ],
    servingSuggestions: null,
    tips: [
      "Please note that this recipe contains raw egg white. To minimize the risk of foodborne illness, consider using pasteurized egg whites or an egg white substitute.",
    ],
  },
  {
    id: "semulegrynsgrot-en",
    language: "en", // Instructions are in English
    title: "Semulegrynsgrøt",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "semulegryn", quantity: "100 g", notes: null },
          { name: "melk", quantity: "1/2 l", notes: null },
          { name: "sukker", quantity: "2 ss", notes: null },
          { name: "salt", quantity: "1/4 ts", notes: null },
          { name: "vaniljepulver", quantity: "1/2 ts", notes: null },
          { name: "kanel", quantity: "1 dryss", notes: null },
          { name: "honning", quantity: "20-30 g", notes: null },
          { name: "Frukt, nøtter", quantity: "Alternativt", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "In a medium saucepan, combine the milk, sugar, and salt. Bring the mixture to a gentle simmer over medium-low heat, stirring occasionally to dissolve the sugar.",
          "Slowly pour the semolina into the saucepan, whisking constantly to prevent lumps from forming.",
          "Reduce the heat to low and continue to cook the porridge, stirring frequently, for about 5-7 minutes or until it thickens to your desired consistency. The porridge will continue to thicken as it cools, so keep that in mind while cooking.",
          "Remove the saucepan from the heat and stir in the vanilla extract.", // Note: Vanilla extract not in ingredients list, but vanilla powder is. Assuming interchangeable.
          "Let the porridge sit for a minute or two to thicken further, then serve it warm in bowls, topped with your choice of optional toppings.",
        ],
      },
    ],
    servingSuggestions: ["Serve warm topped with cinnamon, honey, fruit, or nuts."], // Inferred from ingredients
    tips: [
      "If you prefer a creamier porridge, you can replace a portion of the milk with heavy cream.",
      "You can also add spices like cinnamon or nutmeg for extra flavor.", // Cinnamon already listed
    ],
  },
  {
    id: "salmorejo-en-2",
    language: "en", // Instructions are in English
    title: "Salmorejo",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "tomater", quantity: "1 kg", notes: null },
          { name: "tørt hvitt brød", quantity: "200 g", notes: "f.eks baguette" },
          { name: "hvitløk", quantity: "2-3 fedd", notes: null },
          { name: "olivenolje", quantity: "1 dl", notes: null },
          { name: "rødvinseddik", quantity: "1-2 ss", notes: null },
          { name: "Salt", quantity: null, notes: null },
          { name: "Garnish", quantity: null, notes: "hard-boiled eggs, finely chopped; Spanish serrano ham or prosciutto, thinly sliced or chopped" },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "First, prepare the tomatoes. Bring a large pot of water to a boil. Score a shallow 'X' on the bottom of each tomato, and then blanch them in the boiling water for about 20-30 seconds. Remove the tomatoes with a slotted spoon and transfer to a bowl of ice water to cool for a minute. Peel the tomatoes, remove the cores, and roughly chop them. Set aside.",
          "Tear the day-old bread into small pieces and soak them in a bowl with some water for a couple of minutes. Once softened, gently squeeze out any excess water.",
          "In a blender or food processor, combine the chopped tomatoes, soaked bread, minced garlic, and a pinch of salt. Blend until you achieve a smooth consistency.",
          "With the blender or food processor running, slowly drizzle in the extra virgin olive oil until fully incorporated. The mixture should become creamy and slightly thickened.",
          "Next, add the sherry vinegar or red wine vinegar to taste, and adjust the salt as needed. Blend to combine.", // Note: Sherry vinegar not listed in ingredients
          "Pour the salmorejo into a bowl and refrigerate for at least 2 hours, or until thoroughly chilled.",
          "Before serving, taste the salmorejo and adjust the vinegar and salt if needed. Pour the soup into bowls or glasses, and garnish with chopped hard-boiled eggs and thinly sliced serrano ham or prosciutto.",
        ],
      },
    ],
    servingSuggestions: ["Serve cold, garnished with chopped hard-boiled eggs and serrano ham/prosciutto."],
    tips: ["It's best served cold and can be a perfect appetizer or light meal on a hot day."],
  },
  {
    id: "gazpacho-en",
    language: "en",
    title: "Gazpacho",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "ripe tomatoes", quantity: "6", notes: "roughly chopped" },
          { name: "green bell pepper", quantity: "1", notes: "seeded and roughly chopped" },
          { name: "cucumber", quantity: "1", notes: "peeled and roughly chopped" },
          { name: "small red onion", quantity: "1", notes: "roughly chopped" },
          { name: "garlic", quantity: "2 cloves", notes: "minced" },
          { name: "tomato juice or cold water", quantity: "2 cups (475 ml)", notes: null },
          { name: "stale white bread", quantity: "2 cups (140g)", notes: "crusts removed and torn into small pieces" },
          { name: "extra-virgin olive oil", quantity: "1/4 cup (60 ml)", notes: null },
          { name: "sherry vinegar or red wine vinegar", quantity: "2 tbsp (30 ml)", notes: null },
          { name: "Salt", quantity: "to taste", notes: null },
          { name: "Freshly ground black pepper", quantity: "to taste", notes: null },
          { name: "Optional garnishes", quantity: null, notes: "diced cucumber, bell pepper, onion, hard-boiled egg, and croutons" },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Soak the stale bread in the tomato juice or cold water for about 10 minutes, or until it's softened.",
          "In a blender or food processor, combine the tomatoes, bell pepper, cucumber, onion, and garlic. Blend until smooth.",
          "Add the soaked bread and blend again until smooth.",
          "While the blender is running, gradually pour in the olive oil, followed by the sherry vinegar. Blend until the soup has a smooth, creamy texture.",
          "Season with salt and freshly ground black pepper to taste.",
          "Transfer the gazpacho to a large bowl or container and refrigerate for at least 2 hours, or until well chilled.",
          "Serve the gazpacho cold, with optional garnishes on the side or sprinkled on top.",
        ],
      },
    ],
    servingSuggestions: ["Serve cold with optional garnishes."],
    tips: [
      "You can adjust the consistency of the gazpacho to your liking by adding more tomato juice or water.",
      "For a smoother soup, you can also pass it through a fine mesh strainer after blending to remove any remaining solids.",
    ],
  },
  {
    id: "pizzadeig-napoletana-en",
    language: "en",
    title: "Pizzadeig - Napoletana",
    description: null,
    yield: null, // Implied 2-4 pizzas
    ingredients: [
      {
        componentName: null,
        items: [
          { name: 'Italian Tipo "00" flour or all-purpose flour', quantity: "500 grams (about 4 cups)", notes: null },
          { name: "water", quantity: "325 grams (about 1⅓ cups)", notes: "room temperature" },
          { name: "fine sea salt", quantity: "10 grams (about 2 tsp)", notes: null },
          { name: "active dry yeast or fresh yeast", quantity: "3 grams (about 1 tsp) or 7 grams (about 0.25 oz)", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "In a large mixing bowl, combine the flour and yeast. If using active dry yeast, mix it into the flour. If using fresh yeast, dissolve it in the water first.",
          "Gradually add the water to the flour mixture, mixing with a wooden spoon or your hands until the dough starts to come together. You may not need all the water, depending on the flour you're using.",
          "Add the salt and continue mixing until a shaggy dough forms.",
          "Turn the dough out onto a clean work surface and knead by hand for about 10-15 minutes, until the dough is smooth and elastic. If the dough is too sticky, add a little more flour as needed, but be cautious not to add too much.",
          "Shape the dough into a ball and place it in a lightly greased bowl, covering it with plastic wrap or a damp cloth. Let it rise at room temperature for about 2 hours, or until it has doubled in size.",
          "Once the dough has risen, divide it into 2-4 equal pieces, depending on how large you want your pizzas to be. Shape each piece into a tight ball, and place them on a lightly floured surface, covering them with a damp cloth. Let them rest for an additional 30 minutes to 1 hour.",
          "Preheat your oven to the highest setting, ideally 500°F (260°C) or higher, and place a pizza stone or baking sheet in the oven to preheat.",
          "While the oven is preheating, shape your pizza dough by gently stretching and pressing it into a thin circle, leaving a slightly thicker edge for the crust. Be careful not to overwork the dough or use a rolling pin, as this can cause the dough to lose its airiness.",
          "Top your pizza with your desired ingredients, keeping in mind that traditional Neapolitan-style pizzas are typically topped with simple, high-quality ingredients like San Marzano tomatoes, fresh mozzarella, and fresh basil.",
          "Carefully transfer your pizza onto the preheated pizza stone or baking sheet and bake for about 8-10 minutes, or until the crust is golden and the cheese is melted and bubbly.",
          "Remove your pizza from the oven, allow it to cool for a minute or two, and then slice and enjoy!",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "pizzasaus-en",
    language: "en",
    title: "Pizzasaus",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "crushed San Marzano tomatoes or high-quality canned tomatoes", quantity: "800 grams (1 can)", notes: null },
          { name: "garlic", quantity: "2 cloves", notes: "minced" },
          { name: "dried oregano", quantity: "1 teaspoon (about 1 gram)", notes: null },
          { name: "dried basil (or fresh basil leaves, chopped)", quantity: "1 teaspoon (about 1 gram) or a handful", notes: null },
          { name: "sugar", quantity: "1/2 teaspoon (about 2 grams)", notes: "optional, to balance acidity" },
          { name: "Salt and black pepper", quantity: "to taste", notes: null },
          { name: "extra virgin olive oil", quantity: "1-2 tablespoons (15-30 ml)", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "In a medium saucepan, heat the olive oil over medium-low heat. Add the minced garlic and cook for about 1-2 minutes, stirring frequently, until it's fragrant and lightly golden. Be careful not to burn the garlic.",
          "Add the crushed tomatoes to the saucepan, followed by the dried oregano, dried basil, sugar (if using), salt, and black pepper. If using fresh basil, reserve it to add at the end.",
          "Bring the sauce to a simmer, then reduce the heat to low and let it cook for about 20-30 minutes, stirring occasionally. The sauce should thicken slightly and the flavors should meld together.",
          "If you're using fresh basil, add it to the sauce during the last 5 minutes of cooking.",
          "Taste the sauce and adjust the seasoning if needed, adding more salt, pepper, or sugar as desired.",
          "Remove the sauce from the heat and let it cool slightly before spreading it onto your pizza dough. Any leftover sauce can be stored in an airtight container in the refrigerator for up to a week or frozen for up to 3 months.",
        ],
      },
    ],
    servingSuggestions: null,
    tips: [
      "This pizza sauce recipe is versatile and can be adapted to your personal taste.",
      "You can add red pepper flakes for some heat, a splash of red wine for depth, or even some grated Parmesan cheese for extra flavor.",
    ],
  },
  {
    id: "pizzasaus-bianca-en",
    language: "en",
    title: "Pizzasaus - Bianca",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "ricotta cheese", quantity: "125 grams", notes: null },
          { name: "grated Parmesan cheese", quantity: "75 grams", notes: null },
          { name: "garlic", quantity: "1-2 cloves", notes: "finely minced" },
          { name: "olive oil", quantity: "2 tablespoons", notes: null },
          { name: "Salt", quantity: "to taste", notes: null },
          { name: "Freshly ground black pepper", quantity: "to taste", notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "In a mixing bowl, combine the ricotta cheese and the Parmesan. Stir until well combined.",
          "Add the minced garlic and olive oil to the cheese mixture. Stir well to ensure the garlic is evenly distributed throughout the mixture.",
          "Season the sauce with salt and freshly ground black pepper to taste. Stir again to distribute the seasonings.",
          "Your Pizza Bianca sauce is now ready. Spread it evenly over your pizza dough before adding other toppings.",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "smoothie-jordbaer-avocado-en-1",
    language: "en",
    title: "Smoothie - Jordbær og avocado",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "banana", quantity: "1", notes: null },
          { name: "avocado", quantity: "1", notes: null },
          { name: "strawberries", quantity: "150 g", notes: null },
          { name: "spinach", quantity: "30 g", notes: null },
          { name: "orange juice", quantity: "2.5 dl", notes: null },
          { name: "other vegetables (e.g., cucumber, kale, or celery)", quantity: "Optional: 75 grams", notes: null },
          { name: "ground cinnamon or ginger", quantity: "Optional: 1.25 ml (1/4 tsp)", notes: "for a flavor boost" },
          { name: "ice cubes", quantity: "Optional: a few", notes: "if you want a thicker, colder smoothie" },
          { name: "honey or agave syrup", quantity: "Optional: 15 ml (1 tbsp)", notes: "if you prefer a sweeter smoothie" },
        ],
      },
    ],
    instructions: [
      {
        componentName: null,
        steps: [
          "Prepare the ingredients: Peel and slice the banana, remove the pit and skin from the avocado, and wash the strawberries and spinach (and other vegetables, if using).",
          "Place the banana, avocado, strawberries, spinach, orange juice, and any optional ingredients into a blender.",
          "Blend on high until smooth and creamy, ensuring all ingredients are well combined. If the smoothie is too thick, you can add more orange juice or a splash of water to thin it out.",
          "Taste and adjust the sweetness or spices as needed. If you want a sweeter smoothie, add honey or agave syrup and blend again.",
          "Pour into a glass and enjoy your nutritious and delicious smoothie!",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "smoothie-jordbaer-avokado-no-2",
    language: "no",
    title: "Smoothie - Jordbær og avokado",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: null,
        items: [
          { name: "jordbær", quantity: "150 g", notes: null },
          { name: "avokado", quantity: "200 g (2-3 avokadoer)", notes: null },
          { name: "spinat", quantity: "50 g", notes: null },
          { name: "ice", quantity: "75 g", notes: "hvis jordbæra ikke er frosne, hvis jordbæra er frosne er det ikke vits" },
          { name: "honning", quantity: "50 g", notes: "evt sukker" },
          { name: "vaniljesukker", quantity: "1/4 ts", notes: null },
          { name: "kanel", quantity: "En dryss (1/4-ish ts)", notes: null },
          { name: "salt", quantity: "en dryss (1/2-ish ts)", notes: null },
          { name: "melk", quantity: "3-4 dl", notes: "havremelk for laktoseintolerante" },
        ],
      },
    ],
    instructions: [
      {
        componentName: "Forberedelser",
        steps: ["Klargjør ingredienser, kniv, trefjøl og blender", "Fjern toppen av og vask jordbæra", "Fjern skallet og kjernen fra avokado"],
      },
      {
        componentName: "Instruksjoner",
        steps: [
          "IKKE legg is oppi først (hardt for motoren med all isen i bunnen rundt knivene)",
          "Legg jordbær, avokado og spinat oppi blender først",
          "Tilsett så is, honning, vaniljesukker, kanel og salt",
          "Start blenderen mens du tilsetter litt og litt melk, inntil du får ønsket creamy konsistens",
          "Smak til med honning etter ønske",
        ],
      },
    ],
    servingSuggestions: null,
    tips: null,
  },
  {
    id: "burger-130-gram-no",
    language: "no",
    title: "Burger - 130 gram",
    description: null,
    yield: null,
    ingredients: [
      {
        componentName: "Løkstuing",
        items: [
          { name: "stor løk", quantity: "1", notes: null },
          { name: "vann", quantity: "1 ss", notes: null },
          { name: "Salt", quantity: null, notes: null },
        ],
      },
      {
        componentName: "På brødet",
        items: [
          { name: "Burgerbrød", quantity: null, notes: null },
          { name: "Løk/pickle", quantity: null, notes: null }, // Refers to other components
          { name: "Sylteagurk", quantity: null, notes: null },
          { name: "Tomat", quantity: null, notes: null },
          { name: "Ketchup", quantity: null, notes: null },
          { name: "Sennep", quantity: null, notes: "Dijon/Idun Grov" },
          { name: "Majones", quantity: null, notes: null }, // Refers to other component
          { name: "Salat", quantity: null, notes: null },
          { name: "Smør", quantity: null, notes: null },
        ],
      },
      {
        componentName: "Pickle",
        items: [
          { name: "Løk", quantity: "1", notes: "i tynne skiver" },
          { name: "rødvinseddik", quantity: "~2 ss", notes: null },
          { name: "Salt", quantity: null, notes: null },
          { name: "Sukker", quantity: null, notes: null },
        ],
      },
      {
        componentName: "Majones",
        items: [
          { name: "Eggeplomme", quantity: "1", notes: null },
          { name: "Dijon", quantity: "1 ss", notes: null },
          { name: "Sitronsaft", quantity: "1 ss", notes: null },
          { name: "Olje", quantity: null, notes: null }, // Amount needed depends on process
          { name: "Salt", quantity: null, notes: null },
          { name: "Pepper", quantity: null, notes: null },
        ],
      },
    ],
    instructions: [
      {
        componentName: "Løkstuing",
        steps: ["Kokes, 5 min, m/lokk", "Brunes, 3 min, u/lokk"],
      },
      {
        componentName: "På brødet",
        steps: ["Stek burgerbrød", "Smør plenty smør på brødlokket", "Ha på løkstuing"],
      },
      // Note: Instructions for Pickle and Majones components are missing (standard methods assumed)
      // Note: Overall burger assembly instructions are missing
    ],
    servingSuggestions: null,
    tips: null,
  },
];

// You can now use this 'recipes' array in your website's JavaScript code.
// Example: Accessing the title of the first recipe
// console.log(recipes[0].title);
// Example: Accessing the ingredients of the first component of the first recipe
// console.log(recipes[0].ingredients[0].items);

const recipesJSON = JSON.stringify(recipes, null, 2); // Convert to JSON string with indentation for readability

console.log(recipesJSON); // Print the JSON string to the console

module.exports = recipes; // Export the recipes array for use in other modules
