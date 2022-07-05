const formEl = document.querySelector('.login-form');
const inputElMail = document.querySelector('[type="email"]');
const inputElPas = document.querySelector('[type="password"]');
const btnEl = document.querySelector('[type="submit"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log({name, value});
    // });

    const {elements: { email, password }} = event.currentTarget;

    if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    }

    console.log({ Email: `${email.value}`, Password: `${password.value}` });
    
    event.currentTarget.reset();
};



