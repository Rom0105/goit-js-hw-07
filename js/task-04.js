const refs = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  spanIdEl: document.querySelector("#value"),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
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
