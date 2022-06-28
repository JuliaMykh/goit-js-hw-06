const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = ingredients.map((ingredient) => ingredient);

const itemLiFirst = document.createElement('li');
itemLiFirst.textContent = ingredientList[0];
itemLiFirst.classList.add('item');

const itemLiSecond = document.createElement('li');
itemLiSecond.textContent = ingredientList[1];
itemLiSecond.classList.add('item');

const itemLiThird = document.createElement('li');
itemLiThird.textContent = ingredientList[2];
itemLiThird.classList.add('item');

const itemLiFourth = document.createElement('li');
itemLiFourth.textContent = ingredientList[3];
itemLiFourth.classList.add('item');

const itemLiFifth = document.createElement('li');
itemLiFifth.textContent = ingredientList[4];
itemLiFifth.classList.add('item');

const itemLiSixth = document.createElement('li');
itemLiSixth.textContent = ingredientList[5];
itemLiSixth.classList.add('item');

const list = document.querySelector('ul');
list.append(itemLiFirst, itemLiSecond, itemLiThird, itemLiFourth, itemLiFifth, itemLiSixth);
console.log(list);