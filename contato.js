
const alertButton = document.querySelector("#danger-form");
const successButton = document.querySelector("#success-form ");
const submitButton = document.querySelector('#submit');


const error_name = document.querySelector('#error_name')
const error_email = document.querySelector('#error_email')
const error_msg = document.querySelector('#error_msg')





submitButton.addEventListener('click', function () {
    Validate()
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

const Validate = () => {
    error_name.style.display = 'none'
    error_email.style.display = 'none'
    error_msg.style.display = 'none'
    // user
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const msg = document.querySelector('.textarea').value
    
    if(name ===''){
        error_name.style.display = 'initial'
    }
     if(email === ''){
        error_email.style.display = 'initial'
    }
 if(msg === ''){
        error_msg.style.display = 'initial'
    }
}
