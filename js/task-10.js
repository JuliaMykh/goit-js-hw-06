
const refs = {
  inputEl: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divEl : document.querySelector('[id="boxes"]'),
};

refs.btnCreate.addEventListener('click', btnCreateClick);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function btnCreateClick() {
  let amount = + refs.inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    const newDivEl = document.createElement('div');

    // newDivEl.style.cssText = `width: ${size}px; height: ${size}px;`;
    newDivEl.style.height = size + 'px';
    newDivEl.style.width = size + 'px';
    newDivEl.style.backgroundColor = getRandomHexColor();
    newDivEl.style.margin = 5 + 'px';
    newDivEl.classList.add(".newBox")
    
    fragment.appendChild(newDivEl);

  }
  refs.divEl.appendChild(fragment);
  console.log(refs.divEl);
}

function destroyBoxes() {
    refs.divEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

