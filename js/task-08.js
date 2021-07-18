const [inputEl, renderBtn, destroyBtn] =
  document.querySelector("#controls").children;
const boxContainer = document.querySelector("#boxes");

renderBtn.addEventListener("click", callback);
destroyBtn.addEventListener("click", destroyBoxes);

function creatRandom() {
  return `rgb(${(Math.random() * 250) << 0}, ${(Math.random() * 250) << 0}, ${
    (Math.random() * 250) << 0
  })`;
}

let sizeDiv = 30;

function callback() {
  +inputEl.value <= +inputEl.getAttribute("max") && +inputEl.value >= 1
    ? createBoxes(+inputEl.value)
    : alert("Меньше 1 и больше 100 не вводить");
}

function createBoxes(amount) {
  let string = "";
  for (let i = 0; i < amount; i += 1) {
    string += `<div style='background-color:${creatRandom()};
        width:${sizeDiv}px;
        height:${sizeDiv}px;'></div>`;
    sizeDiv += 10;
  }
  boxContainer.insertAdjacentHTML("beforeend", string);
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
  inputEl.value = 0;
  sizeDiv = 30;
}
