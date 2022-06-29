const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    const borderEl = event.currentTarget;

    if (Number(inputEl.dataset.length )=== event.currentTarget.value.length) {
        borderEl.classList.add('valid');
        borderEl.classList.remove('invalid');
       
    } else {
        borderEl.classList.add('invalid');
         borderEl.classList.remove('valid');
    }
};


