import "./style.css";
import { Recipe } from "./types";
import defaultImage from "./assets/default.jpg"; // Importing the default image for recipes

function displayRecipes(recipes: Recipe[], container: HTMLElement): void {
  container.innerHTML = ""; // Clear previous content (like loading message)

  if (!recipes || recipes.length === 0) {
    container.textContent = "No recipes found.";
    return;
  }

  const fragment = document.createDocumentFragment(); // Create a document fragment for efficiency
  const cardWrapper = document.createElement("div");
  cardWrapper.className = "card-wrapper";
  container.appendChild(cardWrapper);

  recipes.forEach(recipe => {
    // Create elements for each recipe
    const recipeDiv = document.createElement("div");
    recipeDiv.className = "recipe-card"; // Add a class for styling

    const titleHeading = document.createElement("h2");
    titleHeading.textContent = recipe.title;

    const descriptionPara = document.createElement("p");
    descriptionPara.textContent = recipe.description;

    const image = document.createElement("img");
    image.src = defaultImage; // Use a default image if none is provided

    // Append elements to the recipe container div
    recipeDiv.appendChild(titleHeading);
    recipeDiv.appendChild(descriptionPara);
    recipeDiv.appendChild(image);
    // --- Optional: Add Ingredients ---
    /*
    const ingredientsHeading = document.createElement('h3');
    ingredientsHeading.textContent = 'Ingredients';
    recipeDiv.appendChild(ingredientsHeading);

    const ingredientsList = document.createElement('ul');
    recipe.ingredients.forEach(ing => {
      const listItem = document.createElement('li');
      listItem.textContent = `${ing.quantity} ${ing.unit} ${ing.name} ${ing.notes ? `(${ing.notes})` : ''}`;
      ingredientsList.appendChild(listItem);
    });
    recipeDiv.appendChild(ingredientsList);
    */
    // --- End Optional Ingredients ---

    // Append the recipe div to the fragment
    cardWrapper.appendChild(recipeDiv);
  });

  // Append the fragment to the main container element once
  container.appendChild(fragment);
}

async function loadRecipes(container: HTMLElement): Promise<void> {
  container.innerHTML = "<h1>Recipes</h1><p>Loading recipes...</p>"; // Initial loading state

  try {
    const response = await fetch("/data/oppskrifter.json"); // Fetch from the public directory
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const recipes: Recipe[] = await response.json(); // Parse JSON and assert type. For production, consider runtime validation (e.g., with Zod)

    displayRecipes(recipes, container); // Render the fetched recipes
  } catch (err) {
    console.error("Fetching error:", err);

    container.innerHTML = "<h1>Recipes</h1>"; // Keep title maybe
    const errorPara = document.createElement("p");
    errorPara.classList.add("error-message");
    err instanceof Error
      ? (errorPara.textContent = `Error loading recipes: ${err.message}`)
      : (errorPara.textContent = "An unknown error occurred while loading recipes.");

    container.appendChild(errorPara);
  }
}

// --- Main Execution ---
const appContainer = document.querySelector<HTMLDivElement>("#app"); // Find the main container element in index.html (Vite default is <div id="app">)

if (appContainer) {
  loadRecipes(appContainer);
} else {
  console.error("Could not find the #app container element in index.html");
  document.body.innerHTML = '<p style="color: red;">Error: Application container not found.</p>';
}
