const inputEl = document.querySelector('[id="name-input"]');

const spanEl = document.querySelector('[id="name-output"]');

inputEl.addEventListener("input", addInputText);

function addInputText(event) {
    // spanEl.textContent = event.currentTarget.value;
    
    spanEl.innerHTML = inputEl.value;
  
}