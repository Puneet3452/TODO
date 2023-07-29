// Store meals in an array
let meals = [];

// Function to render the meal list
function renderMealList() {
  const mealList = document.getElementById("mealList");
  mealList.innerHTML = "";

  meals.forEach((meal) => {
    const li = document.createElement("li");
    li.textContent = meal;
    mealList.appendChild(li);
  });
}

// Function to add a new meal to the list
function addMeal() {
  const mealNameInput = document.getElementById("mealName");
  const mealName = mealNameInput.value.trim();

  if (mealName !== "") {
    meals.push(mealName);
    renderMealList();
    mealNameInput.value = "";
  }
}

// Function to search for meals
function searchMeal() {
  const searchInput = document.getElementById("searchMeal");
  const searchText = searchInput.value.trim();

  const filteredMeals = meals.filter((meal) =>
    meal.toLowerCase().includes(searchText.toLowerCase())
  );

  renderMealList(filteredMeals);
}

// Event listeners
document.getElementById("addMealBtn").addEventListener("click", addMeal);
document.getElementById("searchMeal").addEventListener("input", searchMeal);
