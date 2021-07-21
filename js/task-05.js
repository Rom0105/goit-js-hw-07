const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.oninput = ({ target: { value } }) =>
  (spanEl.textContent = value.trim() !== "" ? value : "незнакомец");

// const refs = {
//   inputEl: document.querySelector("#name-input"),
//   spanEl: document.querySelector("#name-output"),
// };

// refs.inputEl.oninput = ({ target: { value } }) =>
//   (refs.spanEl.textContent = value.trim() !== "" ? value : "незнакомец");
