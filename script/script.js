

const API_URL = "http://localhost:4000/recipes";

document.addEventListener("DOMContentLoaded", () => {
  fetchRecipes();

  document
    .getElementById("recipe-form")
    .addEventListener("submit", addRecipe);
  document
    .getElementById("search-bar")
    .addEventListener("input", searchRecipes);
});

// Fetch and display recipes
function fetchRecipes() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => displayRecipes(data))
    .catch((error) => console.error("Error fetching recipes:", error));
}

// Display recipes in the DOM
function displayRecipes(recipes) {
  const recipeList = document.getElementById("recipe-list");
  recipeList.innerHTML = "";

  recipes.forEach((recipe) => {
    const div = document.createElement("div");
    div.classList.add("recipe-card");
    div.innerHTML = `
            <h3>${recipe.title}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <button onclick="editRecipe(${recipe.id})">Edit</button>
            <button onclick="deleteRecipe(${recipe.id})">Delete</button>
            <button onclick="toggleFavorite(${recipe.id}, ${recipe.favorite})">
                ${recipe.favorite ? "Unfavorite" : "Favorite"}
            </button>
        `;
    recipeList.appendChild(div);
  });
}

// Add a new recipe
function addRecipe(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const ingredients = document.getElementById("recipe-ingredients").value;

  const newRecipe = { title, ingredients, favorite: false };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRecipe),
  })
    .then(() => fetchRecipes())
    .catch((error) => console.error("Error adding recipe:", error));
}

// Edit a recipe
function editRecipe(id) {
  const newTitle = prompt("Enter new recipe title:");
  const newIngredients = prompt("Enter new ingredients:");
  if (!newTitle || !newIngredients) return;

  fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newTitle, ingredients: newIngredients }),
  })
    .then(() => fetchRecipes())
    .catch((error) => console.error("Error editing recipe:", error));
}

// Delete a recipe
function deleteRecipe(id) {
  if (!confirm("Are you sure you want to delete this recipe?")) return;

  fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then(() => fetchRecipes())
    .catch((error) => console.error("Error deleting recipe:", error));
}

// Toggle favorite
function toggleFavorite(id, favorite) {
  fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ favorite: !favorite }),
  })
    .then(() => fetchRecipes())
    .catch((error) => console.error("Error updating favorite status:", error));
}
document.getElementById("search-bar").addEventListener("input", searchRecipes);

// Search recipes
function searchRecipes() {
  const query = document.getElementById("search-bar").value.toLowerCase();


  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const filtered = data.filter((recipe) =>
        recipe.title.toLowerCase().includes(query)
      );
      displayRecipes(filtered);
    })
    .catch((error) => console.error("Error searching recipes:", error));
}

