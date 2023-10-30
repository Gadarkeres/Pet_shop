
const alertButton = document.querySelector("#danger-form");
const successButton = document.querySelector("#success-form ");
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function () {
    alertButton.style.display = 'none';
    const inputs = document.querySelectorAll('.input');
    const textarea = document.querySelector('textarea');

    const isAnyFieldEmpty = Array.from(inputs).some(input => input.value === '') || textarea.value === '';

    if (isAnyFieldEmpty) {
        alertButton.style.display = 'none';
        alertButton.style.display = 'block'
    } else {
        textarea.value = '';
        Array.from(inputs).forEach(input => (input.value = ''));
        successButton.style.display = 'block' 
        setTimeout(() => {
            successButton.style.display = 'none';
        }, 2500);
    }
});