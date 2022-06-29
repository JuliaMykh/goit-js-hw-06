const inputEl = document.querySelector('[id="name-input"]');

const spanEl = document.querySelector('[id="name-output"]');

inputEl.addEventListener("input", addInputText);

function addInputText(event) {
    if (event.currentTarget.value === '') {
        spanEl.textContent = "Anonymous";
    }
    spanEl.textContent = event.currentTarget.value;
};


