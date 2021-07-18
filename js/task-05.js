const refs = {
  inputEl: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};

refs.inputEl.oninput = ({ target: { value } }) =>
  (refs.spanEl.textContent = value.trim() !== "" ? value : "незнакомец");
