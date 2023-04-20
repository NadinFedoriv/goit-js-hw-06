const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

const item = images
.map(({url, alt}) => `<li class="list-item"><img src="${url}" alt="${alt}" width = "840" height = "500"></li>`)
.join("");

list.style.listStyleType = "none";
list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.gap = "30px";
list.style.justifyContent = "center";
list.style.alignItems = "center";


list.insertAdjacentHTML("afterbegin", item);

