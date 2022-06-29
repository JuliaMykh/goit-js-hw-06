const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = ingredients.map((ingredient) => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  newItem.classList.add('item');
  return newItem;
 
});

const list = document.querySelector('#ingredients');
list.append(...ingredientList);
console.log(list);



