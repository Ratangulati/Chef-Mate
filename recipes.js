// Mock recipe data
const mockRecipes = [
  {
    label: "Spaghetti Bolognese",
    image: "assets/spaghetti.jpg",
    source: "Grandma's Kitchen",
    totalTime: 45,
    yield: 4,
    calories: 800,
    ingredientLines: ["Spaghetti", "Tomato sauce", "Onion", "Garlic"],
    dietLabels: ["gluten-free"],
    url: "https://www.edamam.com/results/recipes/?search=spaghetti",
    totalNutrients: {
      FAT: { label: "Fat", quantity: 30, unit: "g" },
      CHOCDF: { label: "Carbs", quantity: 90, unit: "g" },
      PROCNT: { label: "Protein", quantity: 40, unit: "g" }
    }
  },
  {
    label: "Vegan Stir Fry",
    image: "assets/vegancurry.jpg",
    source: "Vegan Daily",
    totalTime: 20,
    yield: 2,
    calories: 400,
    ingredientLines: ["Broccoli", "Carrot", "Tofu", "Soy sauce", "Garlic"],
    dietLabels: ["vegan", "vegetarian"],
    url: "https://www.edamam.com/results/recipes/?search=stirfry",
    totalNutrients: {
      FAT: { label: "Fat", quantity: 10, unit: "g" },
      CHOCDF: { label: "Carbs", quantity: 30, unit: "g" },
      PROCNT: { label: "Protein", quantity: 15, unit: "g" }
    }
  },
  {
    label: "Chicken Caesar Salad",
    image: "assets/caesarsalad.jpg",
    source: "Healthy Eats",
    totalTime: 15,
    yield: 2,
    calories: 500,
    ingredientLines: ["Chicken breast", "Romaine lettuce", "Caesar dressing", "Croutons", "Parmesan cheese"],
    dietLabels: ["gluten-free"],
    url: "https://www.edamam.com/results/recipes/?search=chicken%20salad",
    totalNutrients: {
      FAT: { label: "Fat", quantity: 25, unit: "g" },
      CHOCDF: { label: "Carbs", quantity: 10, unit: "g" },
      PROCNT: { label: "Protein", quantity: 35, unit: "g" }
    }
  },
  {
    label: "Vegetable Curry",
    image: "assets/vegancurry.jpg",
    source: "Spicy Kitchen",
    totalTime: 30,
    yield: 4,
    calories: 350,
    ingredientLines: ["Potato", "Carrot", "Tomato", "Onion", "Curry powder"],
    dietLabels: ["vegan", "vegetarian"],
    url: "https://www.edamam.com/results/recipes/?search=vegancurry",
    totalNutrients: {
      FAT: { label: "Fat", quantity: 15, unit: "g" },
      CHOCDF: { label: "Carbs", quantity: 50, unit: "g" },
      PROCNT: { label: "Protein", quantity: 7, unit: "g" }
    }
  },
  {
    label: "Tacos",
    image: "assets/tacos.jpg",
    source: "Mexican Fiesta",
    totalTime: 25,
    yield: 4,
    calories: 600,
    ingredientLines: ["Taco shells", "Cheese", "Lettuce", "Tomato", "Sour cream"],
    dietLabels: ["gluten-free"],
    url: "https://www.edamam.com/results/recipes/?search=tacos",
    totalNutrients: {
      FAT: { label: "Fat", quantity: 40, unit: "g" },
      CHOCDF: { label: "Carbs", quantity: 40, unit: "g" },
      PROCNT: { label: "Protein", quantity: 25, unit: "g" }
    }
  },
  {
    label: "Eggplant Parmesan",
    image: "assets/eggplantparmesan.jpg",
    source: "Italian Bistro",
    totalTime: 60,
    yield: 4,
    calories: 700,
    ingredientLines: ["Eggplant", "Tomato sauce", "Mozzarella", "Parmesan cheese", "Breadcrumbs"],
    dietLabels: ["vegetarian"],
    url: "https://www.edamam.com/results/recipes/?search=eggplantparmesan",
    totalNutrients: {
      FAT: { label: "Fat", quantity: 35, unit: "g" },
      CHOCDF: { label: "Carbs", quantity: 60, unit: "g" },
      PROCNT: { label: "Protein", quantity: 25, unit: "g" }
    }
  },
  {
    label: "Grilled Cheese Sandwich",
    image: "assets/grilledcheese.jpg",
    source: "Comfort Kitchen",
    totalTime: 10,
    yield: 1,
    calories: 300,
    ingredientLines: ["Bread", "Cheese", "Butter"],
    dietLabels: ["vegetarian"],
    url: "https://www.edamam.com/results/recipes/?search=grilledcheese",
    totalNutrients: {
      FAT: { label: "Fat", quantity: 20, unit: "g" },
      CHOCDF: { label: "Carbs", quantity: 30, unit: "g" },
      PROCNT: { label: "Protein", quantity: 12, unit: "g" }
    }
  },
  {
    label: "Mushroom Risotto",
    image: "assets/mushroomrisotto.jpg",
    source: "Italian Treats",
    totalTime: 40,
    yield: 4,
    calories: 550,
    ingredientLines: ["Arborio rice", "Mushrooms", "Parmesan cheese", "Vegetable broth", "Onion"],
    dietLabels: ["vegetarian"],
    url: "https://www.edamam.com/results/recipes/?search=mushroomrisotto",
    totalNutrients: {
      FAT: { label: "Fat", quantity: 15, unit: "g" },
      CHOCDF: { label: "Carbs", quantity: 80, unit: "g" },
      PROCNT: { label: "Protein", quantity: 15, unit: "g" }
    }
  },
  {
    label: "Salmon with Asparagus",
    image: "assets/salmonasparagus.jpg",
    source: "Healthy Eats",
    totalTime: 25,
    yield: 2,
    calories: 450,
    ingredientLines: ["Salmon", "Asparagus", "Olive oil", "Lemon", "Garlic"],
    dietLabels: ["gluten-free", "paleo"],
    url: "https://www.edamam.com/results/recipes/?search=salmonasparagus",
    totalNutrients: {
      FAT: { label: "Fat", quantity: 25, unit: "g" },
      CHOCDF: { label: "Carbs", quantity: 10, unit: "g" },
      PROCNT: { label: "Protein", quantity: 40, unit: "g" }
    }
  }
];


// DOM Elements
const ingredientInput = document.getElementById("ingredient-input");
const addIngredientBtn = document.getElementById("add-ingredient");
const ingredientTags = document.getElementById("ingredient-tags");
const findRecipesBtn = document.getElementById("find-recipes");
const recipesGrid = document.getElementById("recipes-grid");
const timeSlider = document.getElementById("time-slider");
const timeValue = document.getElementById("time-value");
const noRecipesMsg = document.getElementById("no-recipes");
const modal = document.getElementById("recipe-modal");
const modalContent = document.getElementById("modal-content");
const closeModalBtn = document.querySelector(".close-modal");

let pantry = [];

// Add ingredient
addIngredientBtn.addEventListener("click", () => {
  const ingredient = ingredientInput.value.trim();
  if (ingredient && !pantry.includes(ingredient)) {
    pantry.push(ingredient);
    const tag = document.createElement("span");
    tag.className = "ingredient-tag";
    tag.textContent = ingredient;
    tag.addEventListener("click", () => {
      pantry = pantry.filter(item => item !== ingredient);
      tag.remove();
    });
    ingredientTags.appendChild(tag);
    ingredientInput.value = "";
  }
});

// Update slider label
timeSlider.addEventListener("input", () => {
  timeValue.textContent = timeSlider.value;
});

// Find recipes
findRecipesBtn.addEventListener("click", () => {
  const selectedDiets = Array.from(document.querySelectorAll("input[name='diet']:checked"))
    .map(input => input.value);
  const maxTime = parseInt(timeSlider.value);

  const filtered = mockRecipes.filter(recipe => {
    const matchesDiet = selectedDiets.every(diet =>
      recipe.dietLabels.includes(diet)
    );
    const matchesTime = recipe.totalTime <= maxTime;
    const matchesPantry = pantry.every(ingredient =>
      recipe.ingredientLines.some(line =>
        line.toLowerCase().includes(ingredient.toLowerCase())
      )
    );
    return matchesDiet && matchesTime && matchesPantry;
  });

  renderRecipes(filtered);
});

// Render recipes
function renderRecipes(recipes) {
  recipesGrid.innerHTML = "";
  if (recipes.length === 0) {
    noRecipesMsg.style.display = "block";
    return;
  }
  noRecipesMsg.style.display = "none";
  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.label}" class="recipe-img">
      <div class="recipe-info">
        <h3>${recipe.label}</h3>
        <p>${recipe.source}</p>
        <button class="btn view-btn">View</button>
      </div>
    `;
    card.querySelector(".view-btn").addEventListener("click", () => {
      showRecipeDetails(recipe);
    });
    recipesGrid.appendChild(card);
  });
}

// Show modal
function showRecipeDetails(recipe) {
  console.log("Showing recipe details:", recipe.label);
  if (!modalContent || !modal) return;

  modalContent.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.label}" class="recipe-modal-image">
    <h2 class="recipe-modal-title">${recipe.label}</h2>
    <p class="recipe-modal-source">By ${recipe.source}</p>
    
    <div class="recipe-modal-stats">
      <div class="recipe-modal-stat">
        <span class="stat-value">${Math.round(recipe.totalTime || 30)}</span>
        <span class="stat-label">Minutes</span>
      </div>
      <div class="recipe-modal-stat">
        <span class="stat-value">${recipe.yield}</span>
        <span class="stat-label">Servings</span>
      </div>
      <div class="recipe-modal-stat">
        <span class="stat-value">${Math.round(recipe.calories / recipe.yield)}</span>
        <span class="stat-label">Calories/Serving</span>
      </div>
    </div>
    
    <div class="recipe-modal-sections">
      <div class="recipe-ingredients">
        <h3 class="recipe-section-title">Ingredients</h3>
        <ul class="ingredients-list">
          ${recipe.ingredientLines.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      
      <div class="recipe-nutrition">
        <h3 class="recipe-section-title">Nutrition</h3>
        <ul class="nutrition-list">
          ${createNutritionList(recipe.totalNutrients, recipe.yield)}
        </ul>
      </div>
    </div>
    
    <a href="${recipe.url}" target="_blank" class="recipe-modal-button">View Full Recipe</a>
  `;

  modal.style.display = "block";
}

// Create nutrition list
function createNutritionList(nutrients, servings) {
  return Object.keys(nutrients).map(key => {
    const nutrient = nutrients[key];
    return `<li>${nutrient.label}: ${Math.round(nutrient.quantity / servings)}${nutrient.unit}</li>`;
  }).join("");
}

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
