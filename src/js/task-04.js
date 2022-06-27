const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

const btnDecrement = document.querySelector('[data-action="decrement"]');
console.log(btnDecrement);

const btnIncrement = document.querySelector('[data-action="increment"]');
console.log(btnIncrement);

const valueEl = document.querySelector('[id="value"]');
console.log(valueEl);

btnDecrement.addEventListener('click', handleBtnClickDecrement);

btnIncrement.addEventListener('click', handleBtnClickIncrement);

function handleBtnClickDecrement() {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
};

function handleBtnClickIncrement() {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
};