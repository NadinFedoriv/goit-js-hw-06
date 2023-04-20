const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const Items = ingredients.map(ingredient => {
  const Item = document.createElement("li");
  Item.textContent = ingredient;
  Item.classList.add("item");
  return Item; 
});

list.append(...Items);

