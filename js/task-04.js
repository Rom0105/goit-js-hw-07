const refs = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  spanIdEl: document.querySelector("#value"),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  buttonRemove: document.querySelector('[data-action="remove"]'),
};

let counterValue = 0;

refs.buttonDecrement.addEventListener("click", decrement);
refs.buttonIncrement.addEventListener("click", increment);
refs.buttonRemove.addEventListener("click", remove);

function decrement() {
  counterValue -= 1;
  refs.spanIdEl.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  refs.spanIdEl.textContent = counterValue;
}
function remove() {
  counterValue = 0;
  refs.spanIdEl.textContent = counterValue;
}

// refs.buttonIncrement.addEventListener("click", () => {
//   refs.spanIdEl.textContent += 1;
// });
// refs.buttonDecrement.addEventListener("click", () => {
//   refs.spanIdEl.textContent -= 1;
// });

// refs.buttonRemove.addEventListener("click", () => {
//   refs.spanIdEl.textContent = 0;
// });
