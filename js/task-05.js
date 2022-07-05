const inputEl = document.querySelector('[id="name-input"]');

const spanEl = document.querySelector('[id="name-output"]');

inputEl.addEventListener("input", addInputText);

function addInputText(event) {
    if (event.currentTarget.value === '') {
        spanEl.textContent = "Anonymous";
    } else {
 spanEl.textContent = event.currentTarget.value;
    }
   
};

const nameTypeAdd = (e) =>{
    if (e.currentTarget.value === '') {
        nameText.textContent = 'незнакомец';
    }
    else {
    nameText.textContent = e.currentTarget.value
    }
};

nameType.addEventListener('change', nameTypeAdd);