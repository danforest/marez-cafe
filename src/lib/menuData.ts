export type MenuItemBadge = "v" | "df";

export interface MenuDataItem {
  slug: string;
  name: string;
  price: string;
  description: string;
  badges?: MenuItemBadge[];
  image?: string;
}

export interface MenuDataSubsection {
  title: string;
  items: MenuDataItem[];
}

export interface MenuDataCategory {
  slug: string;
  title: string;
  description: string;
  subsections: MenuDataSubsection[];
  footer?: string;
}

export const MENU_DISCLAIMER =
  "If you have any allergen or dietary requirements, please let us know. Although great care is applied within our venue, we cannot guarantee the total absence of allergens in our dishes. Detailed allergen information is available upon request. All products are subject to availability. An optional service charge of 12.5% may be added to your bill. Prices include VAT at the current rate.";

export const MENU_CATEGORIES: MenuDataCategory[] = [
  {
    slug: "breakfast-brunch",
    title: "Breakfast & Brunch",
    description: "Feel-good morning plates worth getting out of bed for — signatures, traditional faves, pancakes and light bites.",
    footer: "Mediterranean Warmth · North African Heart — Homemade North African harissa. Sauces, dressings and granola made in-house. Premium produce, from suppliers we trust. Vegan and gluten-free menus available, please ask your server.",
    subsections: [
      {
        title: "Signature Selections",
        items: [
          {
            slug: "the-spicy-scrambled",
            name: "The Spicy Scrambled",
            price: "16",
            description:
              "Scrambled eggs with jalapeños, sautéed red onion, sautéed spinach, avocado, cheddar cheese and crumbled feta over toasted sourdough, finished with basil-marinated cherry tomatoes.",
            badges: ["v"],
            image: "/images/dishes/spicy-scrambled-eggs.jpg",
          },
          {
            slug: "full-mediterranean",
            name: "Full Mediterranean",
            price: "16",
            description:
              "Poached eggs, fried halloumi, grilled peppers, mushroom, smashed avocado, sautéed spinach and rocket over toasted sourdough, finished with basil-marinated cherry tomatoes.",
            badges: ["v"],
          },
          {
            slug: "shakshuka",
            name: "Shakshuka",
            price: "17",
            description:
              "Our slow-cooked cherry tomato sauce, mixed peppers, baked fried eggs, grilled aubergine, crispy onion, chilli herbs served with toasted sourdough.",
            badges: ["v"],
            image: "/images/dishes/shakshuka-marez.jpg",
          },
          {
            slug: "ranchero",
            name: "Ranchero",
            price: "17",
            description:
              "Poached eggs with sautéed potatoes, chorizo, mushrooms, grilled peppers, our homemade onion gherkin relish, jalapeños, smashed avocado, peppadew & coriander yoghurt, chilli herbs and crispy onion.",
            image: "/images/dishes/ranchero.jpg",
          },
          {
            slug: "the-breakfast-burrito",
            name: "The Breakfast Burrito",
            price: "15.50",
            description:
              "Scrambled eggs, chorizo, jalapeños, baked beans, cheddar, avocado, served with our coriander & peppadew yoghurt.",
          },
          {
            slug: "eggs-a-la-forestiere",
            name: "Eggs à la Forestière",
            price: "15",
            description:
              "Poached eggs with grilled peppers, mushroom, sautéed spinach and crumbled feta over toasted sourdough, drizzled with truffle oil and topped with rocket, served with our homemade spicy North African harissa.",
            badges: ["v"],
          },
          {
            slug: "avocado-toast",
            name: "Avocado Toast",
            price: "13",
            description:
              "Two poached eggs over smashed avocado on toasted sourdough, with chilli herbs and a squeeze of lime.",
            badges: ["v"],
          },
          {
            slug: "smoked-salmon-hot-pot",
            name: "Smoked Salmon Hot Pot",
            price: "18",
            description:
              "Smoked salmon, poached eggs, sautéed spinach and hash browns baked under our homemade creamy cheese sauce with melted Monterey Jack, finished with crispy onion.",
          },
        ],
      },
      {
        title: "Traditional Breakfast",
        items: [
          {
            slug: "eggs-benedict-bacon-sausage",
            name: "Eggs Benedict — with bacon or Cumberland sausage",
            price: "14",
            description:
              "Toasted English muffin topped with 2 poached eggs and our homemade hollandaise sauce, sprinkled with paprika.",
          },
          {
            slug: "eggs-benedict-smoked-salmon",
            name: "Eggs Benedict — with smoked salmon",
            price: "17",
            description:
              "Toasted English muffin topped with 2 poached eggs, our homemade hollandaise sauce, sprinkled with paprika — with smoked salmon.",
          },
          {
            slug: "full-english",
            name: "Full English",
            price: "16",
            description:
              "Grilled bacon, Cumberland sausage, two eggs your way, golden fried potatoes, tomato, mushroom and baked beans, served with sourdough toast.",
          },
          {
            slug: "egg-toast-plain",
            name: "Egg & Toast — plain",
            price: "From 8",
            description: "Two eggs your way, served with toast.",
            badges: ["v"],
          },
          {
            slug: "egg-toast-tomato-mushroom",
            name: "Egg & Toast — with tomato & mushroom",
            price: "11",
            description: "Two eggs your way, served with toast, tomato and mushroom.",
            badges: ["v"],
          },
          {
            slug: "egg-toast-bacon-sausage",
            name: "Egg & Toast — with bacon or Cumberland sausage",
            price: "12",
            description: "Two eggs your way, served with toast and your choice of bacon or Cumberland sausage.",
          },
          {
            slug: "egg-toast-smoked-salmon",
            name: "Egg & Toast — with smoked salmon",
            price: "16",
            description: "Two eggs your way, served with toast and smoked salmon.",
          },
        ],
      },
      {
        title: "Pancakes & Toasted Bliss",
        items: [
          {
            slug: "the-berry-pancakes",
            name: "The Berry Pancakes",
            price: "13",
            description:
              "Buttermilk pancakes with fresh berries, our homemade summer berry compote and maple syrup.",
            badges: ["v"],
          },
          {
            slug: "buttermilk-pancakes",
            name: "Buttermilk Pancakes",
            price: "11",
            description: "A stack of buttermilk pancakes, served with maple syrup.",
            badges: ["v"],
          },
          {
            slug: "loaded-pancakes",
            name: "Loaded Pancakes",
            price: "16",
            description:
              "Buttermilk pancakes with Cumberland sausage, bacon, hash brown and scrambled eggs, served with maple syrup.",
          },
          {
            slug: "brioche-french-toast",
            name: "Brioche French Toast",
            price: "10",
            description: "Cinnamon-soaked thick-cut brioche, served with maple syrup.",
            badges: ["v"],
          },
          {
            slug: "crunchy-nut-french-toast",
            name: "Crunchy Nut French Toast",
            price: "17",
            description:
              "Thick-cut brioche in a crunchy crust, layered with banana, strawberries, blueberries, Nutella, our homemade pecan & hazelnut granola and maple syrup.",
            badges: ["v"],
            image: "/images/dishes/crunchy-nut-french-toast.jpg",
          },
        ],
      },
      {
        title: "Light Fare",
        items: [
          {
            slug: "pecan-hazelnut-granola",
            name: "Pecan & Hazelnut Granola",
            price: "14",
            description:
              "Our homemade pecan & hazelnut granola with Greek yoghurt, banana, strawberries, blueberries and pomegranate, with your choice of maple syrup or honey.",
            badges: ["v"],
          },
          {
            slug: "the-berry-porridge",
            name: "The Berry Porridge",
            price: "10",
            description:
              "Porridge with our homemade summer berry compote and black sesame seeds, served with your choice of maple syrup or honey.",
            badges: ["v"],
          },
          {
            slug: "acai-bowl",
            name: "Açaí Bowl",
            price: "17",
            description:
              "Brazilian premium açaí, blended fresh in-house with banana and apple juice, crowned with our homemade pecan & hazelnut granola, almond butter, fresh berries and desiccated coconut.",
            badges: ["v"],
            image: "/images/dishes/acai-bowl.jpg",
          },
          {
            slug: "petit-acai",
            name: "Petit Açaí",
            price: "10",
            description: "A petite portion of our signature Açaí Bowl.",
            badges: ["v"],
          },
          {
            slug: "helenas-bap",
            name: "Helena's Bap",
            price: "10",
            description:
              "Grilled bacon, smashed avocado and our homemade spicy North African harissa in a warm brioche bun.",
            image: "/images/dishes/helenas-bap.jpg",
          },
          {
            slug: "grilled-bacon-ciabatta",
            name: "Grilled Bacon Ciabatta",
            price: "7",
            description: "Grilled bacon in a soft, buttered ciabatta roll.",
          },
          {
            slug: "sausage-ciabatta",
            name: "Sausage Ciabatta",
            price: "7",
            description: "Grilled Cumberland sausage in a soft, buttered ciabatta roll.",
          },
        ],
      },
      {
        title: "Add A Little Extra",
        items: [
          { slug: "extra-sourdough-toasts", name: "Sourdough Toasts & preserves", price: "4", description: "Served warm." },
          { slug: "extra-hashbrowns", name: "Hashbrowns (×2)", price: "3", description: "" },
          { slug: "extra-baked-beans", name: "Baked beans", price: "3", description: "" },
          { slug: "extra-smashed-avocado", name: "Smashed avocado", price: "4", description: "" },
          { slug: "extra-eggs", name: "Add eggs ×2", price: "3", description: "" },
          { slug: "extra-whipped-cream-ice-cream", name: "Whipped Cream / Ice Cream", price: "2", description: "" },
          { slug: "extra-nutella", name: "Nutella", price: "2.50", description: "" },
          { slug: "extra-fruit-bowl", name: "Fruit Bowl", price: "4", description: "" },
          { slug: "extra-grilled-bacon", name: "Grilled bacon (×2)", price: "3.50", description: "" },
          { slug: "extra-cumberland-sausage", name: "Cumberland Sausage", price: "3", description: "" },
          { slug: "extra-chorizo", name: "Chorizo", price: "3", description: "" },
          { slug: "extra-smoked-salmon", name: "Smoked Salmon", price: "6", description: "" },
          { slug: "extra-feta-cheese", name: "Feta Cheese (×3)", price: "3", description: "" },
          { slug: "extra-halloumi-cheese", name: "Halloumi Cheese (×3)", price: "3", description: "" },
          { slug: "extra-greek-yoghurt", name: "Greek Yoghurt", price: "3", description: "" },
          { slug: "extra-granola", name: "Pecan & Hazelnut Granola", price: "3", description: "" },
        ],
      },
    ],
  },
  {
    slug: "lunch",
    title: "Lunch",
    description: "Fresh bowls, wraps, gourmet burgers and pasta — big flavours, honest ingredients.",
    footer: "Mediterranean Warmth · North African Heart — Homemade North African harissa. Sauces, dressings and granola made in-house. Premium produce, from suppliers we trust. Vegan and gluten-free menus available, please ask your server.",
    subsections: [
      {
        title: "Bowls & Greens",
        items: [
          {
            slug: "warm-goat-cheese-salad",
            name: "Warm Goat Cheese Salad",
            price: "16",
            description:
              "Mixed leaves, cherry tomatoes, beetroot, grilled peppers, avocado, caramelised onion, honey roasted walnuts, pomegranate, dressed in our homemade French dressing & basil pesto.",
            badges: ["v"],
          },
          {
            slug: "falafel-bowl",
            name: "Falafel Bowl",
            price: "16",
            description:
              "Tricolour quinoa with falafel, hummus, smashed avocado, sliced cucumber, feta, pomegranate, fresh chilli and black sesame seeds, served with our homemade French dressing.",
            badges: ["v"],
          },
          {
            slug: "smoked-salmon-bowl",
            name: "Smoked Salmon Bowl",
            price: "17",
            description:
              "Tricolour quinoa with smoked salmon, smashed avocado, sliced cucumber, our homemade mango-onion-chilli salsa, peppadew-coriander yoghurt, fresh chilli, grilled lime, balsamic glaze and black sesame seeds.",
          },
          {
            slug: "superfood-salad",
            name: "Superfood Salad",
            price: "15",
            description:
              "Tricolour quinoa with roasted butternut squash, roasted peppers, avocado, feta, grilled aubergine, cherry tomato, cucumber and baby gem, finished with our homemade mango-onion-chilli salsa, black sesame seeds and homemade French dressing.",
            badges: ["v"],
          },
          {
            slug: "sweet-chilli-chicken-salad",
            name: "Sweet Chilli Chicken Salad",
            price: "17",
            description:
              "Mixed leaves, cherry tomatoes, avocado, peppadew, fried halloumi and sweet chilli panko-breadcrumbed chicken, dressed in balsamic glaze and our homemade French dressing.",
          },
        ],
      },
      {
        title: "Wraps & Sandwich Delights",
        items: [
          {
            slug: "crunchy-chicken-wrap",
            name: "Crunchy Chicken Wrap",
            price: "14",
            description:
              "Homemade panko-breadcrumbed chicken with baby gem, tomato, cheddar, our homemade mango-onion-chilli salsa and sweet chilli mayonnaise.",
          },
          {
            slug: "halloumi-cheese-wrap",
            name: "Halloumi Cheese Wrap",
            price: "13",
            description:
              "Fried Halloumi with avocado, sun-blushed tomatoes, rocket and our homemade basil pesto mayonnaise.",
            badges: ["v"],
          },
          {
            slug: "falafel-wrap",
            name: "Falafel Wrap",
            price: "13",
            description: "Falafel with avocado, sun-blushed tomatoes, rocket and hummus.",
            badges: ["v"],
          },
          {
            slug: "the-club-ciabatta",
            name: "The Club Ciabatta",
            price: "15.50",
            description:
              "Roast chicken breast, grilled bacon, sliced avocado, tomato, mayonnaise and baby gem, served with our spicy North African harissa.",
          },
        ],
      },
      {
        title: "Gourmet Burgers",
        items: [
          {
            slug: "cheeseburger",
            name: "Cheeseburger",
            price: "17",
            description:
              "Homemade beef patty with Monterey Jack cheese, baby gem, tomato and our homemade onion-gherkin relish in a brioche bun, served with classic fries.",
          },
          {
            slug: "fried-chicken-burger",
            name: "Fried Chicken Burger",
            price: "17",
            description:
              "Homemade panko-breadcrumbed chicken fillet with Monterey Jack cheese, baby gem, tomato, mayonnaise and our homemade mango-onion-chilli salsa in a brioche bun, served with classic fries.",
          },
          {
            slug: "the-moving-mountains-burger",
            name: "The Moving Mountains Burger",
            price: "16",
            description:
              "Moving Mountains meatless patty with Monterey Jack cheese, baby gem, tomato and our homemade onion-gherkin relish in a brioche bun, served with classic fries.",
            badges: ["v"],
          },
        ],
      },
      {
        title: "Pastas",
        items: [
          {
            slug: "spaghetti-pomodoro",
            name: "Spaghetti Pomodoro",
            price: "15",
            description:
              "Spaghetti in our homemade cherry tomato sauce finished with basil pesto and Parmesan.",
            badges: ["v"],
          },
          {
            slug: "north-african-arrabbiata",
            name: "North African Arrabbiata",
            price: "16",
            description:
              "Spaghetti in our spicy North African harissa cherry tomato sauce, finished with Parmesan, sliced fresh chilli and chilli herbs.",
            badges: ["v"],
          },
          {
            slug: "schnitzel-carbonara",
            name: "Schnitzel Carbonara",
            price: "17",
            description:
              "Spaghetti in our homemade creamy cheese sauce with chicken schnitzel, chopped bacon, crispy onion and Parmesan.",
          },
          {
            slug: "spaghetti-a-laurore",
            name: "Spaghetti à l'Aurore",
            price: "17",
            description:
              "Spaghetti in our homemade Aurore sauce — a marriage of our creamy cheese sauce and cherry tomato sauce — with grilled chicken, thinly sliced mushroom, Parmesan, chilli herbs and crispy onion.",
          },
        ],
      },
      {
        title: "Sides, Sauces & Add-ons",
        items: [
          { slug: "hummus-olive-oil-pomegranate", name: "Hummus, olive oil & pomegranate", price: "5", description: "" },
          { slug: "hummus-falafel", name: "Hummus & Falafel", price: "8.50", description: "" },
          { slug: "breadbasket", name: "Breadbasket, sourdough & Ciabatta", price: "5", description: "" },
          { slug: "grilled-goat-cheese", name: "Grilled Goat Cheese, pesto & pomegranate", price: "4", description: "" },
          { slug: "side-salad", name: "Side Salad", price: "6", description: "" },
          { slug: "classic-fries", name: "Classic Fries", price: "5.50", description: "" },
          { slug: "truffle-parmesan-fries", name: "Truffle Parmesan Fries", price: "6", description: "" },
          { slug: "fried-halloumi-sweet-chilli", name: "Fried Halloumi (4pc) & sweet chilli", price: "6", description: "" },
          { slug: "chicken-strips", name: "Chicken Strips (5pc) & chilli mayo", price: "8.50", description: "" },
          { slug: "add-smoked-salmon", name: "Add smoked Salmon", price: "6", description: "" },
          { slug: "add-grilled-chicken", name: "Add Grilled Chicken", price: "4", description: "" },
          { slug: "add-fried-halloumi", name: "Add Fried Halloumi ×3", price: "3", description: "" },
          { slug: "add-eggs-x2", name: "Add eggs ×2", price: "3", description: "" },
          { slug: "add-grilled-bacon", name: "Add grilled bacon ×2", price: "3.50", description: "" },
          { slug: "add-chicken-schnitzel", name: "Add Chicken Schnitzel", price: "5", description: "" },
        ],
      },
    ],
  },
  {
    slug: "drinks",
    title: "Drinks",
    description: "Coffee, fresh juices, smoothies, shakes, cocktails, wines, beers and spirits.",
    subsections: [
      {
        title: "Breakfast, Cocktails & Fizz",
        items: [
          {
            slug: "aperol-spritz",
            name: "Aperol Spritz",
            price: "8.95",
            description: "Aperol with soda water, prosecco & sliced orange.",
          },
          {
            slug: "marez-spritz",
            name: "Marez Spritz",
            price: "8.75",
            description: "Elderflower cordial, Passoã, prosecco.",
          },
          {
            slug: "bloody-mary",
            name: "Bloody Mary",
            price: "8.50 (Virgin Mary 7)",
            description: "Mixed with fiery spicy tomato juice, celery salt & fresh lemon.",
          },
          {
            slug: "marez-bucks-fizz",
            name: "Marez Bucks Fizz",
            price: "7.95",
            description: "Fragrant, freshly squeezed orange juice topped with Prosecco bubbles.",
          },
          {
            slug: "nv-prosecco-via-vai-glass",
            name: "NV Prosecco, Via Vai (20cl)",
            price: "8.95",
            description: "Lively Prosecco, fragrant with white flowers, delicate lemon and lime tang (11% ABV).",
          },
        ],
      },
      {
        title: "Fresh Juices",
        items: [
          {
            slug: "fresh-juice",
            name: "Fresh orange, apple, or carrot juice",
            price: "5.95",
            description: "Add a ginger shot for 1.50.",
          },
          {
            slug: "the-refresher",
            name: "The Refresher",
            price: "6.95",
            description: "Ginger, carrot, apple & freshly squeezed orange juice.",
          },
          {
            slug: "the-detoxifier",
            name: "The Detoxifier",
            price: "6.95",
            description: "Ginger, lime, cucumber, apple & freshly squeezed orange juice.",
          },
          {
            slug: "the-booster",
            name: "The Booster",
            price: "6.95",
            description: "Ginger, lime, beetroot & apple.",
          },
        ],
      },
      {
        title: "Smoothies",
        items: [
          {
            slug: "the-breakfast-smoothie",
            name: "The Breakfast Smoothie",
            price: "7.50",
            description:
              "Berries, banana, homemade granola, almond milk, almond butter & a squeeze of honey.",
          },
          {
            slug: "the-green-smoothie",
            name: "The Green Smoothie",
            price: "6.95",
            description: "Strawberries, mango, melon, spinach & apple juice.",
          },
          {
            slug: "the-berry-go-round",
            name: "The Berry Go Round",
            price: "6.95",
            description: "Mixed berries, freshly squeezed orange juice & a squeeze of honey.",
          },
          {
            slug: "the-tropical",
            name: "The Tropical",
            price: "6.95",
            description:
              "Pineapple & mango blended with freshly squeezed orange juice & a squeeze of honey.",
          },
          {
            slug: "coco-loco",
            name: "Coco Loco",
            price: "7.25",
            description:
              "Pineapple, mango, coconut, lime, fresh mint, coconut milk & agave nectar.",
          },
        ],
      },
      {
        title: "Shakes",
        items: [
          {
            slug: "strawberries-and-cream-shake",
            name: "Strawberries & Cream",
            price: "6.95",
            description:
              "Freshly blitzed to order with vanilla ice cream — fresh strawberries, strawberry jam, strawberry coulis drizzle & whipped cream.",
          },
          {
            slug: "banana-peanut-butter-shake",
            name: "Banana Peanut Butter & Cream",
            price: "6.95",
            description:
              "Fresh banana, peanut butter, and rich Belgian chocolate sauce & whipped cream.",
          },
          {
            slug: "crushed-oreo-shake",
            name: "Crushed Oreo",
            price: "6.95",
            description: "Rich Belgian chocolate sauce, Oreo cookies & whipped cream.",
          },
          {
            slug: "white-chocolate-shake",
            name: "White Chocolate",
            price: "6.95",
            description: "Rich white chocolate callets & whipped cream.",
          },
          {
            slug: "the-deluxe-shake",
            name: "The Deluxe",
            price: "6.95",
            description:
              "Rich Belgian chocolate sauce, dark chocolate callets & whipped cream.",
          },
        ],
      },
      {
        title: "Soft Drinks",
        items: [
          { slug: "ginger-beer", name: "Ginger Beer (275ml)", price: "4.50", description: "" },
          { slug: "victorian-lemonade", name: "Victorian Lemonade (275ml)", price: "4.50", description: "" },
          { slug: "appletizer", name: "Appletizer (250ml)", price: "3.95", description: "" },
          { slug: "mineral-water", name: "Still or Sparkling Mineral Water (330ml)", price: "3.95", description: "" },
          { slug: "san-pellegrino-blood-orange", name: "San Pellegrino sparkling & blood orange (330ml)", price: "3.95", description: "" },
          { slug: "san-pellegrino-lemon", name: "San Pellegrino sparkling & lemon (330ml)", price: "3.95", description: "" },
          { slug: "cranberry-juice", name: "Cranberry Juice", price: "4.50", description: "" },
          { slug: "apple-juice", name: "Apple Juice", price: "4.50", description: "" },
          { slug: "coca-cola", name: "Coca-Cola", price: "3.50", description: "" },
          { slug: "coke-zero", name: "Coke Zero", price: "3.50", description: "" },
          { slug: "diet-coke", name: "Diet Coke", price: "3.50", description: "" },
        ],
      },
      {
        title: "Bottled Beers and Ciders",
        items: [
          {
            slug: "peroni",
            name: "Peroni 33cl",
            price: "5.95",
            description: "5.1% ABV.",
          },
          {
            slug: "kopparberg-pear",
            name: "Kopparberg Pear Cider 50cl",
            price: "5.95",
            description: "4.5% ABV.",
          },
          {
            slug: "kopparberg-mixed-fruit",
            name: "Kopparberg Mixed Fruit 50cl",
            price: "6.50",
            description: "Blackcurrant & raspberry. 4.5% ABV.",
          },
          {
            slug: "kopparberg-strawberry-lime",
            name: "Kopparberg Strawberry & Lime 50cl",
            price: "6.50",
            description: "4% ABV.",
          },
          {
            slug: "lucky-saint",
            name: "Lucky Saint",
            price: "5.50",
            description: "Alcohol-free lager. 0.5% ABV.",
          },
        ],
      },
      {
        title: "Sparkling Wine",
        items: [
          {
            slug: "nv-prosecco-via-vai",
            name: "NV Prosecco, Via Vai",
            price: "8.95 glass / 26.95 bottle",
            description:
              "Lively Prosecco, fragrant with white flowers, delicate lemon and lime tang (11% ABV). Ask a Marez team member about the full wine list.",
          },
        ],
      },
      {
        title: "Spirits",
        items: [
          { slug: "absolut-vodka", name: "Absolut Vodka (50ml)", price: "8.95", description: "Add a mixer for 2.50 — tonic, soda, Coke, lemonade, ginger beer, apple juice or orange juice." },
          { slug: "tanqueray-gin", name: "Tanqueray London Dry Gin (50ml)", price: "8.95", description: "Add a mixer for 2.50." },
          { slug: "hendricks-gin", name: "Hendrick's Gin (50ml)", price: "9.95", description: "Add a mixer for 2.50." },
          { slug: "jack-daniels", name: "Jack Daniel's (50ml)", price: "9.95", description: "Add a mixer for 2.50." },
          { slug: "bacardi-rum", name: "Bacardi White Rum (50ml)", price: "7.95", description: "Add a mixer for 2.50." },
          { slug: "the-kraken-rum", name: "The Kraken Black Spiced Rum (50ml)", price: "9.95", description: "Add a mixer for 2.50." },
          { slug: "baileys", name: "Baileys Irish Cream (50ml)", price: "8.95", description: "" },
        ],
      },
      {
        title: "Tea Selection",
        items: [
          { slug: "earl-grey", name: "Earl Grey", price: "3.75", description: "Birchall premium blend." },
          { slug: "camomile", name: "Camomile", price: "3.75", description: "Birchall premium blend." },
          { slug: "peppermint", name: "Peppermint", price: "3.75", description: "Birchall premium blend." },
          { slug: "lemongrass-ginger", name: "Lemongrass & Ginger", price: "3.75", description: "Birchall premium blend." },
          { slug: "peach-green-tea", name: "Peach Green Tea", price: "3.75", description: "Birchall premium blend." },
          { slug: "green-tea", name: "Green Tea", price: "3.75", description: "Birchall premium blend." },
          { slug: "red-bush-tea", name: "Red Bush (Red Berry & Flowers)", price: "3.75", description: "Birchall premium blend." },
          { slug: "breakfast-tea", name: "Breakfast Tea", price: "3.75", description: "Birchall premium blend." },
          { slug: "decaffeinated-tea", name: "Decaffeinated Tea", price: "3.75", description: "Birchall premium blend." },
          { slug: "fresh-mint-tea", name: "Fresh Mint Tea", price: "3.75", description: "" },
        ],
      },
      {
        title: "The Artisan Blend",
        items: [
          { slug: "hot-chocolate", name: "Hot Chocolate", price: "4.75", description: "Made with our premium chocolate, blended from the finest cocoa beans." },
          { slug: "decadent-hot-chocolate", name: "Decadent Hot Chocolate", price: "5.50", description: "With whipped cream and marshmallows." },
          { slug: "matcha-latte", name: "Matcha Latte", price: "4.95", description: "Organic ceremonial-grade matcha, whisked to order." },
          { slug: "chai-latte", name: "Chai Latte", price: "4.95", description: "Sweet, spiced tea with fluffy foamy milk." },
          { slug: "dirty-chai-latte", name: "Dirty Chai Latte", price: "5.50", description: "Sweet, spiced tea with fluffy foamy milk and a coffee shot." },
          { slug: "belgian-mocha-latte", name: "Dark or White Chocolate Belgian Mocha Latte", price: "4.95", description: "" },
          { slug: "nutella-cappuccino", name: "Nutella Cappuccino", price: "4.95", description: "" },
        ],
      },
      {
        title: 'Classic Coffee — “The Baron” by Climpsons & Son',
        items: [
          { slug: "americano", name: "Americano", price: "3.75", description: "Brazilian beans — rich, rounded, sweet, with notes of dark chocolate, sweet nuttiness and marzipan." },
          { slug: "flat-white", name: "Flat White", price: "4.25", description: "" },
          { slug: "double-espresso", name: "Double Espresso", price: "3.25", description: "" },
          { slug: "cortado", name: "Cortado", price: "3.75", description: "" },
          { slug: "caffe-latte", name: "Caffè Latte", price: "4.40", description: "" },
          { slug: "cappuccino", name: "Cappuccino", price: "4.40", description: "" },
          { slug: "double-macchiato", name: "Double Macchiato", price: "3.75", description: "" },
        ],
      },
      {
        title: "Chilled Indulgence (Iced)",
        items: [
          { slug: "iced-americano", name: "Iced Americano", price: "4.25", description: "Same premium blends as the hot menu." },
          { slug: "iced-chai-latte", name: "Iced Chai Latte", price: "5.50", description: "" },
          { slug: "iced-dirty-chai-latte", name: "Iced Dirty Chai Latte", price: "6", description: "" },
          { slug: "iced-matcha-latte", name: "Iced Matcha Latte", price: "5.50", description: "" },
          { slug: "iced-latte", name: "Iced Latte", price: "4.95", description: "" },
          { slug: "iced-mocha-latte", name: "Iced Mocha Latte (dark or white)", price: "5.50", description: "" },
          { slug: "iced-nutella-latte", name: "Iced Nutella Latte", price: "5.50", description: "" },
          { slug: "iced-chocolate", name: "Iced Chocolate", price: "5", description: "" },
          { slug: "decadent-iced-chocolate", name: "Decadent Iced Chocolate", price: "6", description: "" },
        ],
      },
    ],
  },
  {
    slug: "kids",
    title: "Kids",
    description: "Fun plates for little ones — breakfast, mains, drinks and sweet treats.",
    footer: "Little one has an allergy or special diet? Just tell us, we'll take great care of them.",
    subsections: [
      {
        title: "Sunrise Munchies",
        items: [
          { slug: "mini-full-english", name: "Mini Full English", price: "8", description: "Bacon, sausage, egg your way, beans, toast." },
          { slug: "kids-egg-toast", name: "Egg & Toast", price: "4.95", description: "One golden egg with toasty toast." },
          { slug: "beans-on-cheesy-toast", name: "Beans on Cheesy Toast", price: "5.50", description: "Bubbly beans on melty toast." },
          { slug: "plain-porridge", name: "Plain Porridge", price: "6", description: "Warm oats with your choice of honey or maple syrup." },
          { slug: "kids-buttermilk-pancakes", name: "Buttermilk Pancakes", price: "6.50", description: "Buttermilk pancakes served with maple syrup." },
          { slug: "pancakes-blueberries", name: "Pancakes & Blueberries", price: "7.50", description: "Buttermilk pancakes with juicy blueberries, served with maple syrup." },
          { slug: "kids-breakfast-pancakes", name: "Kids' Breakfast Pancakes", price: "8.50", description: "Pancakes with bacon and sausage." },
        ],
      },
      {
        title: "The Big Feed",
        items: [
          { slug: "kids-spaghetti-pomodoro", name: "Spaghetti Pomodoro", price: "7.50", description: "Wiggly spaghetti swimming in tomato sauce with parmesan cheese." },
          { slug: "ham-cheese-toastie", name: "Ham & Cheese Toastie", price: "6.50", description: "Melty cheese and ham toasted golden." },
          { slug: "chicken-strips-fries", name: "Chicken Strips & Fries", price: "7.50", description: "Crispy chicken and a mountain of fries." },
          { slug: "kids-cheeseburger", name: "Cheeseburger", price: "8.95", description: "Beef, cheese and fries." },
          { slug: "kids-chicken-burger", name: "Chicken Burger", price: "8.95", description: "Crunchy chicken in a soft bun with fries." },
        ],
      },
      {
        title: "Glug Glug! Drinks",
        items: [
          { slug: "babyccino", name: "Babyccino", price: "2", description: "Frothy milk with marshmallow clouds." },
          { slug: "kids-hot-chocolate", name: "Hot Chocolate", price: "4", description: "A warm hug in a cup." },
          { slug: "kids-decadent-hot-chocolate", name: "Decadent Hot Chocolate", price: "4.75", description: "With whipped cream and marshmallows." },
          { slug: "kids-cranberry-juice", name: "Cranberry Juice", price: "3.50", description: "" },
          { slug: "kids-apple-juice", name: "Apple Juice", price: "3.50", description: "" },
          { slug: "kids-fresh-juice", name: "Fresh Juice", price: "4.95", description: "Your choice between orange, apple or carrot." },
        ],
      },
      {
        title: "Treat Time!",
        items: [
          { slug: "bowl-of-fruit", name: "Bowl of Fruit", price: "4", description: "" },
          { slug: "chocolate-chip-cookie", name: "Chocolate Chip Cookie", price: "3.50", description: "" },
          { slug: "brownie-ice-cream", name: "Brownie & Ice Cream", price: "5.50", description: "Brownie, ice cream, chocolate swirl." },
          { slug: "cookie-ice-cream", name: "Cookie & Ice Cream", price: "5.50", description: "Cookie, ice cream, chocolate swirl." },
          { slug: "kids-ice-cream", name: "Ice Cream", price: "4.95", description: "With chocolate sauce and whipped cream." },
        ],
      },
      {
        title: "Top It Up! Add-ons",
        items: [
          { slug: "kids-add-egg", name: "Add an Egg", price: "1.50", description: "" },
          { slug: "kids-classic-fries", name: "Classic Fries", price: "5.50", description: "" },
          { slug: "kids-nutella", name: "Nutella", price: "2.50", description: "" },
          { slug: "kids-fruit-bowl", name: "Fruit Bowl", price: "4", description: "" },
        ],
      },
    ],
  },
  {
    slug: "vegan",
    title: "Vegan",
    description: "Fully plant-based versions of our signatures, bowls, pasta and burgers.",
    subsections: [
      {
        title: "Signature Selections",
        items: [
          {
            slug: "vegan-ranchero",
            name: "Vegan Ranchero",
            price: "17",
            description:
              "Vegan meatless patty with sautéed potatoes, mushrooms, grilled peppers, our homemade onion gherkin relish, jalapeños, smashed avocado, finished with chilli herbs and crispy onion.",
            image: "/images/dishes/ranchero.jpg",
          },
          {
            slug: "vegan-shakshuka",
            name: "Vegan Shakshuka",
            price: "17",
            description:
              "Our slow-cooked cherry tomato sauce, mixed peppers, vegan meatless patty, grilled aubergine, crispy onion, chilli herbs served with toasted sourdough.",
            image: "/images/dishes/shakshuka-marez.jpg",
          },
          {
            slug: "vegan-avocado-toast",
            name: "Avocado Toast",
            price: "12",
            description:
              "Smashed avocado, hummus, sundried tomatoes over toasted sourdough, finished with chilli herbs and a squeeze of lime.",
          },
        ],
      },
      {
        title: "Light Bites",
        items: [
          {
            slug: "vegan-berry-porridge",
            name: "The Berry Porridge",
            price: "10",
            description:
              "Your choice of non-dairy milk, our homemade summer berry compote, black sesame seeds, served with agave nectar.",
          },
          {
            slug: "vegan-acai-bowl",
            name: "Açaí Bowl",
            price: "17",
            description:
              "Brazilian premium açaí, blended fresh in-house with banana and apple juice, crowned with our homemade pecan & hazelnut granola, almond butter, fresh berries and desiccated coconut.",
            image: "/images/dishes/acai-bowl.jpg",
          },
          {
            slug: "vegan-petit-acai",
            name: "Petit Açaí",
            price: "10",
            description: "A petite portion of our signature Açaí Bowl.",
          },
        ],
      },
      {
        title: "Greens & Goodness",
        items: [
          {
            slug: "vegan-superfood-salad",
            name: "Superfood Salad",
            price: "15",
            description:
              "Tricolour quinoa with roasted butternut squash, roasted peppers, avocado, grilled aubergine, cherry tomato, cucumber and baby gem, finished with our homemade mango-onion-chilli salsa, black sesame seeds and homemade French dressing.",
          },
          {
            slug: "vegan-falafel-bowl",
            name: "Falafel Bowl",
            price: "16",
            description:
              "Tricolour quinoa with falafel, hummus, smashed avocado, sliced cucumber, pomegranate, fresh chilli and black sesame seeds, served with our homemade French dressing.",
          },
        ],
      },
      {
        title: "Lunch Classics",
        items: [
          {
            slug: "vegan-north-african-arrabbiata",
            name: "North African Arrabbiata",
            price: "16",
            description:
              "Spaghetti in our spicy North African harissa cherry tomato sauce, finished with sliced fresh chilli and chilli herbs.",
          },
          {
            slug: "vegan-spaghetti-pomodoro",
            name: "Spaghetti Pomodoro",
            price: "15",
            description:
              "Spaghetti in our homemade cherry tomato sauce finished with basil pesto.",
          },
          {
            slug: "vegan-falafel-wrap",
            name: "Falafel Wrap",
            price: "13",
            description: "Falafel with avocado, sun-blushed tomatoes, rocket and hummus.",
          },
          {
            slug: "vegan-moving-mountains-burger",
            name: "The Moving Mountains Burger",
            price: "16",
            description:
              "Moving Mountains meatless patty with baby gem, tomato and our homemade onion-gherkin relish in a vegan brioche bun, served with classic fries.",
          },
        ],
      },
      {
        title: "Sidekicks & Extras",
        items: [
          { slug: "vegan-hummus", name: "Hummus, olive oil & pomegranate", price: "5", description: "" },
          { slug: "vegan-hummus-falafel", name: "Hummus & Falafel", price: "8.50", description: "" },
          { slug: "vegan-side-salad", name: "Side Salad", price: "6", description: "" },
          { slug: "vegan-classic-fries", name: "Classic Fries", price: "5.50", description: "" },
          { slug: "vegan-fruit-bowl", name: "Fruit Bowl", price: "4", description: "" },
          { slug: "vegan-add-hashbrowns", name: "Add Hashbrowns (×2)", price: "3", description: "" },
          { slug: "vegan-add-falafel", name: "Add Falafel ×3", price: "4", description: "" },
          { slug: "vegan-sourdough-toasts", name: "Sourdough toasts & preserves", price: "4", description: "" },
          { slug: "vegan-granola", name: "Pecan & Hazelnut Granola", price: "3", description: "" },
        ],
      },
    ],
  },
  {
    slug: "gluten-free",
    title: "Gluten-Free",
    description: "Dishes made with non-gluten-containing ingredients — prepared in a shared kitchen, so traces of gluten may be present.",
    subsections: [
      {
        title: "Signature Selections",
        items: [
          {
            slug: "gf-spicy-scrambled",
            name: "The Spicy Scrambled",
            price: "16",
            description:
              "Scrambled eggs with jalapeños, sautéed red onion, sautéed spinach, avocado, cheddar and crumbled feta over toasted gluten-free bread, finished with basil-marinated cherry tomatoes.",
            badges: ["v"],
            image: "/images/dishes/spicy-scrambled-eggs.jpg",
          },
          {
            slug: "gf-full-mediterranean",
            name: "Full Mediterranean",
            price: "16",
            description:
              "Poached eggs, fried halloumi, grilled peppers, mushroom, smashed avocado, sautéed spinach and rocket over toasted gluten-free bread, finished with basil-marinated cherry tomatoes.",
            badges: ["v"],
          },
          {
            slug: "gf-shakshuka",
            name: "Shakshuka",
            price: "17",
            description:
              "Our slow-cooked cherry tomato sauce, mixed peppers, baked fried eggs, grilled aubergine, chilli herbs served with gluten-free bread.",
            badges: ["v"],
            image: "/images/dishes/shakshuka-marez.jpg",
          },
          {
            slug: "gf-ranchero",
            name: "Ranchero",
            price: "17",
            description:
              "Poached eggs with sautéed potatoes, chorizo, mushrooms, grilled peppers, our homemade onion gherkin relish, jalapeños, smashed avocado, peppadew & coriander yoghurt and chilli herbs.",
            image: "/images/dishes/ranchero.jpg",
          },
          {
            slug: "gf-eggs-forestiere",
            name: "Eggs à la Forestière",
            price: "15",
            description:
              "Poached eggs with grilled peppers, mushroom, sautéed spinach and crumbled feta over toasted gluten-free bread, drizzled with truffle oil and topped with rocket, served with our homemade spicy North African harissa sauce.",
            badges: ["v"],
          },
          {
            slug: "gf-avocado-toast",
            name: "Avocado Toast",
            price: "13",
            description:
              "Two poached eggs over smashed avocado on toasted gluten-free bread with chilli herbs and a squeeze of lime.",
            badges: ["v"],
          },
          {
            slug: "gf-smoked-salmon-hot-pot",
            name: "Smoked Salmon Hot Pot",
            price: "18",
            description:
              "Smoked salmon, poached eggs, sautéed spinach and hash browns baked under our homemade creamy cheese sauce with melted Monterey Jack cheese.",
          },
        ],
      },
      {
        title: "Traditional Breakfast",
        items: [
          {
            slug: "gf-eggs-benedict-bacon",
            name: "Eggs Benedict — with bacon",
            price: "14",
            description:
              "Toasted gluten-free English muffin, 2 poached eggs, homemade hollandaise, paprika.",
          },
          {
            slug: "gf-eggs-benedict-smoked-salmon",
            name: "Eggs Benedict — with smoked salmon",
            price: "17",
            description:
              "Toasted gluten-free English muffin, 2 poached eggs, homemade hollandaise, paprika — with smoked salmon.",
          },
          {
            slug: "gf-full-english",
            name: "Full English",
            price: "16",
            description:
              "Grilled bacon, two eggs your way, golden fried potatoes, tomato, mushroom and baked beans, served with gluten-free toast.",
          },
          {
            slug: "gf-eggs-toast-plain",
            name: "Eggs & Toasts — plain",
            price: "From 8",
            description: "Two eggs your way, served with gluten-free toast.",
          },
          {
            slug: "gf-eggs-toast-tomato-mushroom",
            name: "Eggs & Toasts — with tomato & mushroom",
            price: "11",
            description: "Two eggs your way, served with gluten-free toast, tomato and mushroom.",
          },
          {
            slug: "gf-eggs-toast-bacon",
            name: "Eggs & Toasts — with bacon",
            price: "12",
            description: "Two eggs your way, served with gluten-free toast and bacon.",
          },
          {
            slug: "gf-eggs-toast-smoked-salmon",
            name: "Eggs & Toasts — with smoked salmon",
            price: "16",
            description: "Two eggs your way, served with gluten-free toast and smoked salmon.",
          },
        ],
      },
      {
        title: "Light Bites",
        items: [
          {
            slug: "gf-berry-porridge",
            name: "The Berry Porridge",
            price: "10",
            description:
              "Gluten-free porridge with our homemade summer berry compote and black sesame seeds, served with your choice of maple syrup or honey.",
            badges: ["v"],
          },
          {
            slug: "gf-acai-bowl",
            name: "Açaí Bowl",
            price: "17",
            description:
              "Premium açaí, blended fresh in-house with banana and apple juice, crowned with almond butter, fresh berries and desiccated coconut.",
            badges: ["v"],
            image: "/images/dishes/acai-bowl.jpg",
          },
          {
            slug: "gf-petit-acai",
            name: "Petit Açaí",
            price: "10",
            description: "A petite portion of our signature Açaí Bowl.",
            badges: ["v"],
          },
          {
            slug: "gf-helenas-bap",
            name: "Helena's Bap",
            price: "10",
            description:
              "Grilled bacon, smashed avocado and our homemade spicy North African harissa in a warm gluten-free brioche bun.",
            image: "/images/dishes/helenas-bap.jpg",
          },
        ],
      },
      {
        title: "Bowls & Greens",
        items: [
          {
            slug: "gf-warm-goat-cheese-salad",
            name: "Warm Goat Cheese Salad",
            price: "16",
            description:
              "Mixed leaves, cherry tomatoes, beetroot, grilled peppers, avocado, caramelised onion, honey roasted walnuts, pomegranate, dressed in our homemade French dressing & basil pesto.",
            badges: ["v"],
          },
          {
            slug: "gf-falafel-bowl",
            name: "Falafel Bowl",
            price: "16",
            description:
              "Tricolour quinoa with falafel, hummus, smashed avocado, sliced cucumber, feta, pomegranate, fresh chilli and black sesame seeds, served with our homemade French dressing.",
            badges: ["v"],
          },
          {
            slug: "gf-smoked-salmon-bowl",
            name: "Smoked Salmon Bowl",
            price: "17",
            description:
              "Tricolour quinoa with smoked salmon, smashed avocado, sliced cucumber, our homemade mango-onion-chilli salsa, peppadew-coriander yoghurt, fresh chilli, grilled lime, balsamic glaze and black sesame seeds.",
          },
          {
            slug: "gf-superfood-salad",
            name: "Superfood Salad",
            price: "15",
            description:
              "Tricolour quinoa with roasted butternut squash, roasted peppers, avocado, feta, grilled aubergine, cherry tomato, cucumber and baby gem, finished with our homemade mango-onion-chilli salsa, black sesame seeds and homemade French dressing.",
            badges: ["v"],
          },
        ],
      },
      {
        title: "Lunch Classics",
        items: [
          {
            slug: "gf-cheeseburger",
            name: "Cheeseburger",
            price: "17",
            description:
              "Homemade beef patty with Monterey Jack cheese, baby gem, tomato and our homemade onion-gherkin relish in a gluten-free brioche bun, served with classic fries.",
          },
          {
            slug: "gf-moving-mountains-burger",
            name: "The Moving Mountains Burger",
            price: "16",
            description:
              "Moving Mountains meatless patty with Monterey Jack cheese, baby gem, tomato and our homemade onion-gherkin relish in a gluten-free brioche bun, served with classic fries.",
            badges: ["v"],
          },
        ],
      },
      {
        title: "Sides & Add-ons",
        items: [
          { slug: "gf-hummus", name: "Hummus, olive oil & pomegranate", price: "5", description: "" },
          { slug: "gf-hummus-falafel", name: "Hummus & Falafel", price: "8.50", description: "" },
          { slug: "gf-grilled-goat-cheese", name: "Grilled Goat Cheese, pesto & pomegranate", price: "4", description: "" },
          { slug: "gf-side-salad", name: "Side Salad", price: "6", description: "" },
          { slug: "gf-classic-fries", name: "Classic Fries", price: "5.50", description: "" },
          { slug: "gf-truffle-parmesan-fries", name: "Truffle Parmesan Fries", price: "6", description: "" },
          { slug: "gf-fried-halloumi", name: "Fried Halloumi (4pc) & sweet chilli", price: "6", description: "" },
          { slug: "gf-toast-preserves", name: "Gluten-free Toast & preserves", price: "4", description: "" },
          { slug: "gf-add-hashbrowns", name: "Add Hashbrowns (×2)", price: "3", description: "" },
          { slug: "gf-add-smoked-salmon", name: "Add smoked salmon", price: "6", description: "" },
          { slug: "gf-add-chorizo", name: "Add chorizo", price: "3", description: "" },
          { slug: "gf-add-grilled-chicken", name: "Add grilled chicken", price: "4", description: "" },
          { slug: "gf-add-fried-halloumi", name: "Add fried halloumi ×3", price: "3", description: "" },
          { slug: "gf-add-feta", name: "Add feta cheese (×3)", price: "3", description: "" },
          { slug: "gf-add-eggs", name: "Add eggs ×2", price: "3", description: "" },
          { slug: "gf-add-grilled-bacon", name: "Add grilled bacon ×2", price: "3.50", description: "" },
          { slug: "gf-whipped-cream-ice-cream", name: "Whipped Cream / Ice Cream", price: "2", description: "" },
          { slug: "gf-nutella", name: "Nutella", price: "2.50", description: "" },
          { slug: "gf-greek-yoghurt", name: "Greek Yoghurt", price: "3", description: "" },
          { slug: "gf-fruit-bowl", name: "Fruit Bowl", price: "4", description: "" },
        ],
      },
    ],
  },
  {
    slug: "alcohol",
    title: "Alcohol Menu",
    description: "Wine, beer, cider, cocktails and spirits. Please drink responsibly.",
    footer: "Add mixers 2.50 — Tonic · Soda · Coke · Lemonade · Ginger Beer · Apple Juice · Orange Juice. Spirits served as 50ml measures.",
    subsections: [
      {
        title: "Sparkling",
        items: [
          {
            slug: "nv-prosecco-20cl",
            name: "NV Prosecco, Via Vai 20cl",
            price: "8.95",
            description: "Lively Prosecco, fragrant with white flowers, with a delicate lemon and lime tang in the mouth. Veneto, Italy. (11% abv)",
          },
          {
            slug: "prosecco-via-vai-bottle",
            name: "Prosecco, Via Vai",
            price: "26.95",
            description: "A lively, crisp, sparkling wine with a delicate lemon character and an aromatic, dry, refreshing finish. Veneto, Italy. (11% abv) · Bottle",
          },
        ],
      },
      {
        title: "White Wine",
        items: [
          {
            slug: "via-nova-pinot-grigio-white",
            name: "Via Nova Pinot Grigio",
            price: "7.50 / 8.75 / 23.95",
            description: "175ml / 250ml / Bottle. A crisp, dry, and refreshing Italian white wine known for its light body and flavours of green apple and citrus. Italy / Veneto. (11–12 abv)",
          },
          {
            slug: "coeur-du-mont-sauvignon-blanc",
            name: "Coeur Du Mont Sauvignon Blanc",
            price: "23.95",
            description: "Bottle. On the nose, this white wine combines gooseberry, exotic fruit and peach. The palate is rich and generous, with a fresh, tasty finish and a fruity after-taste. France.",
          },
        ],
      },
      {
        title: "Rosé Wine",
        items: [
          {
            slug: "via-nova-pinot-grigio-blush",
            name: "Via Nova Pinot Grigio Blush",
            price: "7.00 / 8.45 / 22.95",
            description: "175ml / 250ml / Bottle. A crisp, dry, and refreshing Italian rosé wine known for its light body and flavours of grapes. Italy / Veneto. (11–12 abv)",
          },
          {
            slug: "la-vidaubanaise-provence-rose",
            name: "La Vidaubanaise Comte De Provence Rosé",
            price: "28.95",
            description: "Bottle. A classic Provence rosé packed full of strawberry and peach and laced with a zingy citrus acidity. Incredibly quaffable, it's ideal on a hot summer day. France.",
          },
          {
            slug: "folc-english-rose",
            name: "Folc English Rosé",
            price: "39.95",
            description: "Bottle. Delicate pink in colour, a refreshing still English rosé with joyful flavours of succulent strawberries and tangy cranberry, complemented by fresh acidity and a fragrant floral finish. England.",
          },
        ],
      },
      {
        title: "Red Wine",
        items: [
          {
            slug: "il-molo-merlot",
            name: "Il Molo Merlot",
            price: "6.95 / 7.95 / 21.95",
            description: "175ml / 250ml / Bottle. Lush aromas of ripe blackberries, plums and hint of vanilla. Velvety tannins support a symphony of rich, dark cherry flavours, harmoniously intertwined with subtle oak undertones. Italy.",
          },
          {
            slug: "conde-de-basalu-rioja",
            name: "Conde De Basalu Rioja Tinto",
            price: "26.95",
            description: "Bottle. Cherry red and violet trim. Intense in the nose with aromas of red fruits, in the mouth it is fresh and pleasant with a long and persistent finish. Spain.",
          },
        ],
      },
      {
        title: "Bottled Beers & Cider",
        items: [
          {
            slug: "peroni",
            name: "Peroni 330ml",
            price: "5.95",
            description: "5.1% abv",
          },
          {
            slug: "kopparberg-pear",
            name: "Kopparberg Pear Cider 500ml",
            price: "5.95",
            description: "4.5% abv",
          },
          {
            slug: "kopparberg-mixed-fruit",
            name: "Kopparberg Mixed Fruit Cider 500ml",
            price: "6.50",
            description: "4.5% abv — Blackcurrant & Raspberry",
          },
          {
            slug: "kopparberg-strawberry-lime",
            name: "Kopparberg Strawberry & Lime Cider 500ml",
            price: "6.50",
            description: "4.5% abv",
          },
          {
            slug: "lucky-saint",
            name: "Lucky Saint",
            price: "5.50",
            description: "0.5% abv — alcohol-free lager",
          },
        ],
      },
      {
        title: "Cocktails & Fizz",
        items: [
          {
            slug: "aperol-spritz",
            name: "Aperol Spritz",
            price: "8.95",
            description: "Soda water, prosecco & orange slice.",
          },
          {
            slug: "marez-spritz",
            name: "Marez Spritz",
            price: "8.75",
            description: "Elderflower cordial, passoã & prosecco.",
          },
          {
            slug: "bloody-mary",
            name: "Bloody Mary",
            price: "8.50",
            description: "Fiery spicy tomato juice, celery salt & fresh lemon.",
          },
          {
            slug: "virgin-mary",
            name: "Virgin Mary",
            price: "7.00",
            description: "Fiery spicy tomato juice, celery salt & fresh lemon — alcohol-free.",
          },
          {
            slug: "marez-bucks-fizz",
            name: "Marez Bucks Fizz",
            price: "7.95",
            description: "Fresh orange juice & prosecco.",
          },
          {
            slug: "nv-prosecco-cocktail",
            name: "NV Prosecco VIA VAI 20cl",
            price: "8.95",
            description: "Lively Prosecco, fragrant with white flowers, with a delicate lemon and lime tang. (11% abv)",
          },
        ],
      },
      {
        title: "Spirits — 50ml",
        items: [
          {
            slug: "absolute-vodka",
            name: "Absolute Vodka",
            price: "8.95",
            description: "",
          },
          {
            slug: "tanqueray-london-dry-gin",
            name: "Tanqueray London Dry Gin",
            price: "8.95",
            description: "",
          },
          {
            slug: "hendricks-gin",
            name: "Hendricks Gin",
            price: "9.95",
            description: "",
          },
          {
            slug: "jack-daniels",
            name: "Jack Daniels",
            price: "9.95",
            description: "",
          },
          {
            slug: "bacardi-white-rum",
            name: "Bacardi White Rum",
            price: "7.95",
            description: "",
          },
          {
            slug: "kraken-black-spiced-rum",
            name: "The Kraken Black Spiced Rum",
            price: "9.95",
            description: "",
          },
          {
            slug: "baileys-irish-cream",
            name: "Baileys Irish Cream",
            price: "8.95",
            description: "",
          },
        ],
      },
    ],
  },
];
