/** Single ingredient item. */
interface IngredientItem {
  name: string; // Name of the ingredient
  quantity: string | null; // Quantity of the ingredient
  notes: string | null; // Additional notes about the ingredient (e.g., "finely minced", "optional")
}

/** Component/section of ingredients (e.g., "Garlic Parmesan White Sauce"). */
interface IngredientComponent {
  componentName: string | null; // Name of the ingredient section
  yield?: string | null; // Optional yield specific to this component
  items: IngredientItem[]; // Array of individual ingredient items for this component
}

/** Interface for a component/section of instructions within a recipe */
interface InstructionComponent {
  componentName: string | null; // Name of the instruction section
  steps: string[]; // Array of instruction steps for this component
}

/** Interface for the main recipe object structure. */
export interface Recipe {
  id: string; // Unique identifier for the recipe
  title: string; // Title of the recipe
  description: string | null; // Optional description of the recipe
  yield: string | null; // Overall yield of the recipe
  ingredients: IngredientComponent[]; // Array of ingredient components/sections
  instructions: InstructionComponent[]; // Array of instruction components/sections
  servingSuggestions: string[] | null; // Optional array of serving suggestions
  tips: string[] | null; // Optional array of tips
}

/* // Example Usage (optional):
import recipesData from './path/to/your/updated_recipes.json';
const recipes: Recipe[] = recipesData;

console.log(recipes[0].title); // Accessing title
console.log(recipes[0].yield); // Accessing yield */
