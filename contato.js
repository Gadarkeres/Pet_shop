
const alertButton = document.querySelector("#danger");
const successButton = document.querySelector("#success");
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function () {
    alertButton.classList.remove("alert.active");
    const inputs = document.querySelectorAll('.input');
    const textarea = document.querySelector('textarea');

    const isAnyFieldEmpty = Array.from(inputs).some(input => input.value === '') || textarea.value === '';

    if (isAnyFieldEmpty) {
        alertButton.classList.add("alert.active");
    } else {
        textarea.value = '';
        Array.from(inputs).forEach(input => (input.value = ''));
        successButton.classList.add("alert.active");
        setTimeout(() => {
            successButton.classList.remove("alert.active");
        }, 3500);
    }
});