const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulGalleryEl = document.querySelector("#gallery");

// const galleryListItems = images.reduce(callback, "");

// function callback(acc, { url, alt }) {
//   return (
//     acc +
//     `<li>
//   <img src='${url}' alt='${alt}' width='370' heigh='250' />
//   </li>
//  `
//   );
// }
// ulGalleryEl.insertAdjacentHTML("afterbegin", galleryListItems);

// console.log(galleryListItems);

function createList(images) {
  return images
    .map(({ url, alt }) => {
      return `<li class = 'item'>
  <img src='${url}' alt='${alt}' class = 'item-image' width = '370px' height = '250px' />
  </li>
  `;
    })
    .join("");
}
ulGalleryEl.insertAdjacentHTML("afterbegin", createList(images));
