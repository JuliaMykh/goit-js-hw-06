const itemEl = document.querySelectorAll('.item');
let countItemEl = itemEl.length;
console.log('Number of categories:', countItemEl);

for (let i = 0; i < itemEl.length; i += 1){
    console.log('Category:', itemEl[i].firstElementChild.textContent);
    console.log('Elements:', itemEl[i].lastElementChild.children.length);
}


