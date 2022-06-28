const inputEl = document.querySelector('[id="validation-input"]');
console.log(inputEl);

inputEl.addEventListener('focus', onInputFocus);

inputEl.addEventListener('blur', onInputBlur);

function onInputFocus() {
    
};

function onInputBlur(event) {
    
    const borderEl = event.currentTarget;

    if (inputEl.value.length === 6) {
        borderEl.classList.add('valid');
       
    } else {
        borderEl.classList.add('invalid');
    }
};


// borderEl.setAttribute('id', 'valid');