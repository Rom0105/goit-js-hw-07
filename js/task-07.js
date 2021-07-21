const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

function changFont({ target: { value } }) {
  spanEl.style.fontSize = value + "px";
}

inputEl.oninput = changFont;

// const refs = {
//   inputEl: document.querySelector("#font-size-control"),
//   spamEl: document.querySelector("#text"),
// };

// refs.inputEl.addEventListener("input", function () {
//   const size = refs.inputEl.value;
//   refs.spamEl.style.fontSize = size + "px";
// });
