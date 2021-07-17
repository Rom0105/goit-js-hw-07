const refs = {
  inputEl: document.querySelector("#font-size-control"),
  spamEl: document.querySelector("#text"),
};

refs.inputEl.addEventListener("input", function () {
  const size = refs.inputEl.value;
  refs.spamEl.style.fontSize = size + "px";
});
