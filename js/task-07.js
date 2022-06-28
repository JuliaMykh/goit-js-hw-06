const inputEl = document.querySelector('[id="font-size-control"]');

const spanEl = document.querySelector('[id="text"]');

inputEl.addEventListener('input', changeInputVal);

function changeInputVal() {
    spanEl.style.fontSize = inputEl.value + 'px';
};