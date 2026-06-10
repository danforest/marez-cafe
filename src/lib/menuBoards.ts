export type MenuBoardId =
  | "brunch"
  | "lunch"
  | "glutenFreeVegan"
  | "drinks"
  | "kids";

export type MenuBoardItem = {
  name: string;
  description?: string;
  price: string;
  tag?: string;
};

export type MenuBoardSection = {
  title: string;
  items: MenuBoardItem[];
};

export type MenuBoard = {
  id: MenuBoardId;
  title: string;
  variant?: "dark" | "light";
  disclaimer?: string;
  footer?: string;
  sections: MenuBoardSection[];
};

export const menuBoards: Record<MenuBoardId, MenuBoard> = {
  brunch: {
    id: "brunch",
    title: "Breakfast & Brunch Menu",
    sections: [
      {
        title: "Signature Selections",
        items: [
          {
            name: "The Spicy Scrambled (Veg)",
            description:
              "Scrambled eggs with jalapeños, avocado, spinach, and more on sourdough.",
            price: "£13.95",
          },
          {
            name: "Full Mediterranean (Veg)",
            description:
              "Poached eggs, halloumi, mushrooms, avocado, and more on sourdough.",
            price: "£14.95",
          },
          {
            name: "Shakshuka (Veg)",
            description:
              "Slow-cooked tomato sauce, peppers, fried eggs, and more with sourdough.",
            price: "£15.50",
          },
          {
            name: "Ranchero",
            description:
              "Poached eggs, potatoes, chorizo, mushrooms, and more.",
            price: "£15.95",
          },
          {
            name: "The Brunch Burrito",
            description:
              "Scrambled eggs, chorizo, jalapeños, beans, and more.",
            price: "£14.50",
          },
          {
            name: "Smashed Avocado & Poached Eggs (Veg)",
            description: "Toasted sourdough with chilli herbs and lime.",
            price: "£12.50",
          },
          {
            name: "Smoked Salmon Hot Pot",
            description:
              "Poached eggs, smoked salmon, spinach, hash browns, and cheese sauce.",
            price: "£16.50",
          },
        ],
      },
      {
        title: "Traditional Breakfast",
        items: [
          {
            name: "Eggs Benedict",
            description:
              "English muffin with poached eggs and hollandaise — with bacon or sausage £13.50, with smoked salmon £15.95.",
            price: "£13.50",
          },
          {
            name: "Full English",
            description:
              "Bacon, sausage, eggs, potatoes, tomato, mushroom, beans, and toast.",
            price: "£14.95",
          },
          { name: "Eggs & Toasts (Veg)", price: "£7.50" },
          { name: "Tomato and Mushroom Eggs & Toasts", price: "£9.50" },
          { name: "Bacon or Cumberland Sausage Eggs & Toasts", price: "£10.50" },
          { name: "Smoked Salmon Eggs & Toasts", price: "£14.95" },
        ],
      },
      {
        title: "Pancakes & Toasted Bliss",
        items: [
          {
            name: "The Berry Pancakes (Veg)",
            description: "With fresh berries and compote.",
            price: "£11.95",
          },
          {
            name: "Plain Pancakes (Veg)",
            description: "With maple syrup.",
            price: "£9.95",
          },
          {
            name: "Loaded Pancakes",
            description:
              "With sausage, bacon, hash brown, eggs, and syrup.",
            price: "£14.95",
          },
          {
            name: "Plain French Toast-soaked (Veg)",
            description: "Brioche with cinnamon and syrup.",
            price: "£9.95",
          },
          {
            name: "Crunchy Nut French Toast-soaked (Veg)",
            description:
              "Brioche with banana, berries, Nutella, and granola.",
            price: "£15.95",
          },
        ],
      },
      {
        title: "Light Fare",
        items: [
          {
            name: "Homemade Pecan & Hazelnut Granola (Veg)",
            description: "With Greek yogurt and fruit.",
            price: "£12.95",
          },
          {
            name: "The Berry Porridge (Veg)",
            description: "With compote and seeds.",
            price: "£8.95",
          },
          {
            name: "Açai Bowl (Veg)",
            description: "With granola, almond butter, and fruit.",
            price: "£15.50",
          },
          {
            name: "Helena's Bap",
            description: "Bacon, avocado, and spicy harissa paste in a brioche bun.",
            price: "£9.50",
          },
          { name: "Grilled Bacon Ciabatta", price: "£7.50" },
          { name: "Sausage Ciabatta", price: "£7.50" },
        ],
      },
    ],
    footer: "Warm-hearted meals",
  },
  lunch: {
    id: "lunch",
    title: "Lunch Menu",
    sections: [
      {
        title: "Bowls & Greens",
        items: [
          {
            name: "Golden Butternut Squash Soup of Fame (Veg)",
            price: "£11.95",
          },
          { name: "Warm Goat Cheese Salad (Veg)", price: "£15.50" },
          { name: "Falafel Bowl (Veg)", price: "£14.95" },
          { name: "Smoked Salmon Bowl", price: "£15.95" },
          { name: "Superfood Salad (Veg)", price: "£13.95" },
          { name: "Sweet Chilli Chicken Salad", price: "£15.50" },
        ],
      },
      {
        title: "Wraps & Sandwich Delights",
        items: [
          { name: "Crunchy Chicken Wrap", price: "£13.50" },
          { name: "Halloumi Cheese Wrap (Veg)", price: "£12.95" },
          { name: "Falafel Wrap (Veg)", price: "£12.95" },
          { name: "The Club Ciabatta", price: "£14.50" },
          { name: "The Spicy Ciabatta (Veg)", price: "£13.50" },
          { name: "Warm Goat Cheese Ciabatta (Veg)", price: "£14.50" },
        ],
      },
      {
        title: "Gourmet Burgers",
        items: [
          { name: "Cheeseburger", price: "£14.50" },
          { name: "The Hot One", price: "£15.50" },
          { name: "Fried Chicken Burger", price: "£15.50" },
          { name: "Plant Based Burger (Veg)", price: "£14.50" },
        ],
      },
      {
        title: "Pastas",
        items: [
          { name: "Spaghetti Pomodoro (Veg)", price: "£13.50" },
          { name: "Chicken Schnitzel Carbonara", price: "£15.95" },
        ],
      },
      {
        title: "Side Selections",
        items: [
          { name: "Hummus", price: "£4.50" },
          { name: "Hummus & Falafel", price: "£7.95" },
          { name: "Bread Basket", price: "£4.95" },
          { name: "Classic Fries", price: "£4.50" },
          { name: "Truffle Parmesan Cheese Fries", price: "£5.50" },
          { name: "Fried Halloumi", price: "£4.95" },
          { name: "Chicken Strips", price: "£7.50" },
          { name: "Side Salad", price: "£4.95" },
          { name: "Grilled Goat Cheese Side", price: "£4.95" },
        ],
      },
    ],
    footer: "Vegan & gluten free menus are available — just ask your server.",
  },
  glutenFreeVegan: {
    id: "glutenFreeVegan",
    title: "Non-Gluten Containing Ingredients*",
    disclaimer:
      "Dishes are created using natural non-gluten containing ingredients and carefully selected non-gluten containing and low gluten products. They are not prepared in a separate kitchen — traces of gluten may be present.",
    sections: [
      {
        title: "Signature Selections",
        items: [
          { name: "The Spicy Scrambled", price: "£13.95" },
          { name: "Full Mediterranean", price: "£14.95" },
          { name: "Shakshuka", price: "£15.50" },
          { name: "Ranchero", price: "£15.95" },
          { name: "Smashed Avocado & Poached Eggs", price: "£12.50" },
          { name: "Smoked Salmon Hot Pot", price: "£16.50" },
        ],
      },
      {
        title: "Traditional Breakfast",
        items: [
          { name: "Full English", price: "£14.95" },
          { name: "Eggs Benedict", price: "£13.50" },
          { name: "Eggs & Toast", price: "£7.50" },
        ],
      },
      {
        title: "Light Bites",
        items: [
          { name: "The Berry Porridge", price: "£8.95" },
          { name: "Açai Bowl", price: "£15.50" },
        ],
      },
      {
        title: "Bowls & Greens",
        items: [
          {
            name: "Golden Butternut Squash Soup of Fame",
            price: "£11.95",
          },
          { name: "Warm Goat Cheese Salad", price: "£15.50" },
          { name: "Superfood Salad", price: "£13.95" },
          { name: "Falafel Bowl", price: "£14.95" },
          { name: "Smoked Salmon Bowl", price: "£15.95" },
        ],
      },
      {
        title: "Lunch Classics",
        items: [
          { name: "Cheeseburger", price: "£14.50" },
          { name: "The Hot One", price: "£15.50" },
          { name: "Helena's Bap", price: "£9.50" },
        ],
      },
      {
        title: "Vegan Selection",
        items: [
          { name: "Vegan Ranchero", price: "£15.95", tag: "Vegan" },
          { name: "Vegan Shakshuka", price: "£15.50", tag: "Vegan" },
          { name: "Full Vegan", price: "£14.95", tag: "Vegan" },
          { name: "Vegan Falafel Bowl", price: "£14.95", tag: "Vegan" },
          { name: "Vegan Falafel Wrap", price: "£12.95", tag: "Vegan" },
          { name: "Plant Based Burger", price: "£14.50", tag: "Vegan" },
        ],
      },
      {
        title: "Sidekicks",
        items: [
          { name: "Hummus", price: "£4.50" },
          { name: "Hummus & Falafel", price: "£7.95" },
          { name: "Classic Fries", price: "£4.50" },
          { name: "Truffle Parmesan Cheese Fries", price: "£5.50" },
          { name: "Fried Halloumi", price: "£4.95" },
          { name: "Side Salad", price: "£4.95" },
          { name: "Gluten-Free Toasts", price: "£3.95" },
        ],
      },
    ],
  },
  drinks: {
    id: "drinks",
    title: "Drinks",
    sections: [
      {
        title: "Breakfast, Cocktails & Fizz",
        items: [
          { name: "Aperol Spritz", price: "£7.95" },
          { name: "Marez Spritz", price: "£8.50" },
          { name: "Bloody Mary", price: "£8.50" },
          { name: "Marez Bucks Fizz", price: "£7.95" },
          { name: "NV Prosecco", price: "£8.95" },
        ],
      },
      {
        title: "Fresh Juices",
        items: [
          { name: "Fresh Orange / Apple / Carrot Juice", price: "£5.50" },
          { name: "Refresher", price: "£6.50" },
          { name: "The Detoxifier", price: "£6.75" },
          { name: "The Booster", price: "£6.50" },
        ],
      },
      {
        title: "Smoothies",
        items: [
          { name: "The Breakfast Smoothie", price: "£7.25" },
          { name: "The Green Smoothie", price: "£6.75" },
          { name: "Berry Go Round Smoothie", price: "£6.50" },
          { name: "The Tropical", price: "£6.50" },
          { name: "Coco Loco", price: "£6.75" },
        ],
      },
      {
        title: "Shakes",
        items: [
          {
            name: "Strawberries & Cream",
            description: "Freshly blitzed with vanilla ice cream.",
            price: "£6.75",
          },
          { name: "Banana Peanut Butter & Cream", price: "£6.75" },
          { name: "Crushed Oreo", price: "£6.75" },
          { name: "White Chocolate", price: "£6.75" },
          { name: "The Deluxe", price: "£6.75" },
        ],
      },
      {
        title: "Soft Drinks",
        items: [
          { name: "Ginger Beer", price: "£3.95" },
          { name: "Belvoir Farm Organic Lemonade", price: "£3.95" },
          { name: "Appletizer", price: "£3.50" },
          { name: "Still or Sparkling Mineral Water", price: "£2.95" },
          { name: "San Pellegrino", price: "£3.75" },
          { name: "Coca-Cola / Coke Zero / Diet Coke", price: "£2.95" },
        ],
      },
      {
        title: "Coffees",
        items: [
          { name: "Flat White", price: "£3.95" },
          { name: "Caffe Latte", price: "£4.25" },
          { name: "Cappuccino", price: "£4.25" },
          { name: "Americano", price: "£3.50" },
          { name: "Cortado", price: "£3.50" },
        ],
      },
    ],
  },
  kids: {
    id: "kids",
    title: "Kids' Menu",
    variant: "light",
    sections: [
      {
        title: "Breakfast",
        items: [
          {
            name: "Mini Full English",
            description:
              "Grilled bacon, Cumberland sausage, 1 egg your way, baked beans & toast.",
            price: "£7.50",
          },
          {
            name: "Egg on Toast",
            description: "An egg your way & toast.",
            price: "£4.95",
          },
          {
            name: "Cheesy Beans on Toast",
            description: "Add 1 egg your way £1.50.",
            price: "£5.50",
          },
          {
            name: "Plain Porridge",
            description: "Maple syrup or honey. Add fruit bowl £3.50.",
            price: "£4.95",
          },
          {
            name: "Kids Plain Pancake",
            description: "Maple syrup. Add Nutella £2.50, fruit bowl £3.50.",
            price: "£5.50",
          },
          {
            name: "Pancakes & Blueberries",
            description: "Maple syrup. Add Nutella £2.50.",
            price: "£6.95",
          },
          {
            name: "Kids Breakfast Pancakes",
            description: "Grilled bacon, sausage & maple syrup.",
            price: "£7.50",
          },
        ],
      },
      {
        title: "Mains",
        items: [
          {
            name: "Spaghetti Pomodoro",
            description: "With parmesan cheese.",
            price: "£7.50",
          },
          { name: "Homemade Seasonal Soup", price: "£5.95" },
          { name: "Ham & Cheese Toastie", price: "£5.95" },
          { name: "Chicken Strips & Fries", price: "£6.95" },
          {
            name: "Cheeseburger",
            description:
              "Homemade beef patty, tomato, lettuce & cheese in a brioche bun with fries.",
            price: "£8.95",
          },
          {
            name: "Chicken Burger",
            description:
              "Homemade breaded chicken, tomato, lettuce & cheese in a brioche bun with fries.",
            price: "£8.95",
          },
        ],
      },
      {
        title: "Drinks",
        items: [
          {
            name: "Babyccino",
            description: "Marshmallows & chocolate powder.",
            price: "£1.75",
          },
          { name: "Plain Hot Chocolate", price: "£3.50" },
          {
            name: "Decadent Hot Chocolate",
            description: "Whipped cream & marshmallows.",
            price: "£4.50",
          },
          { name: "Cranberry Juice", price: "£2.95" },
          { name: "Apple Juice", price: "£2.95" },
          {
            name: "Fresh Juice",
            description: "Orange, apple or carrot.",
            price: "£4.50",
          },
        ],
      },
      {
        title: "Side",
        items: [{ name: "Classic Fries", price: "£4.50" }],
      },
      {
        title: "Dessert",
        items: [
          { name: "Bowl of Fruit", price: "£3.50" },
          { name: "Choco Chip Cookie", price: "£3.50" },
          {
            name: "Brownie & Ice Cream",
            description: "With Belgian chocolate sauce.",
            price: "£5.50",
          },
          {
            name: "Cookie & Ice Cream",
            description: "With Belgian chocolate sauce.",
            price: "£5.50",
          },
          {
            name: "Ice Cream",
            description: "Belgian chocolate sauce & whipped cream.",
            price: "£4.95",
          },
        ],
      },
    ],
    footer:
      "If you have any allergen or dietary requirements, please let us know. Although great care is applied within our venues, we cannot guarantee the total absence of allergens in our dishes. Detailed allergen information can be found on our code and upon request. All products are subject to availability.",
  },
};
