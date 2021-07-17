const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("focus", onInputFocus);
inputEl.addEventListener("blur", onInputBlur);
function onInputFocus(event) {
  inputEl.classList.remove("valid");
  inputEl.classList.remove("invalid");
}
function onInputBlur(event) {
  if (
    Number(event.currentTarget.value.length) === Number(inputEl.dataset.length)
  ) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
