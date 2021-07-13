const itemEl = document.querySelectorAll("h2");
console.log(`В списке ${itemEl.length} категории.`);

itemEl.forEach((item) => {
  console.log(`Категория: ${item.textContent}`);
  console.log(
    `Количество элементов: ${item.nextElementSibling.children.length}`
  );
});
