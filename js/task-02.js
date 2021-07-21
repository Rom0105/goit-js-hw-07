const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulIngredientsEl = document.querySelector("#ingredients");
const ingredientsList = ingredients.map((ingredient) => {
  const creatLi = document.createElement("li");
  creatLi.innerHTML = `<p>${ingredient}</p>`;
  return creatLi;
});

ulIngredientsEl.append(...ingredientsList);
// const element = ingredients.map((option) => {
//   const ingredientsEl = document.createElement("li");
//   ingredientsEl.textContent = option;
//   return ingredientsEl;
// });

// ulIngredientsEl.append(...element);
