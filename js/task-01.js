const itemEl = document.querySelectorAll('.item');
// let countItemEl = itemEl.length;
console.log('Number of categories:', itemEl.length);

// for (let i = 0; i < itemEl.length; i += 1){
//     console.log('Category:', itemEl[i].firstElementChild.textContent, 'Elements:', itemEl[i].lastElementChild.children.length);
// }

const ulEl = document.querySelectorAll('#categories>li');
ulEl.forEach(el => {

  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`,
  );
});