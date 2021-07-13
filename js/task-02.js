const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulIngredientsEl = document.querySelector("#ingredients");

const element = ingredients.map((option) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = option;
  return ingredientsEl;
});

ulIngredientsEl.append(...element);
