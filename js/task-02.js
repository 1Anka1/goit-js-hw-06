const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elementsOfIngredients = ingredients.map((el) => {
  const elementIngredients = document.createElement("li");
  elementIngredients.textContent = el;

  return elementIngredients;
});
ingredientsEl.append(...elementsOfIngredients);
