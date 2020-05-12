const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const showError = document.querySelector('.error-message')
const submit = document.querySelector('#btnSubmit');
const clear = document.querySelector('#clear');
const form = document.querySelector('#form');

let lengthPassword = "Your passwords is too short! Please, provide a password that is at least 10 characters long."
let passwordMatch = "Your passwords didn't match! Please, provide the same password in each field";

function validateForm(event){
    removeAllErrors();
    event.preventDefault();
    const termsChecked = document.querySelector('#terms').checked;
    if(password.value.length < 10) {
        password.style.border = '1px solid red';
        password.focus();
        addError(lengthPassword);
    } else if(password.value !== confirmPassword.value) {
        confirmPassword.style.border = '1px solid red';
        confirmPassword.focus();
        addError(passwordMatch);
    } else if (!termsChecked){  
        alert("You must agree with our terms.");
    } else {
        showError.innerHTML = '';
        alert("Success.");
        let form = document.getElementById('form');
        form.submit();
    }
}

form.addEventListener('submit', validateForm);

function addError(message){
    let errorMessage = document.createElement('p');
        errorMessage.innerText = message;
        errorMessage.style.background = 'lightpink';
    // add error to DOM
        showError.appendChild(errorMessage);
    // give element classname like .error-message
}

function removeAllErrors() {
  // empty `showError` container
    showError.innerText = '';
  // Reset border in password and confirm password inputs
    confirmPassword.style.border = '1px solid lightgray';
    password.style.border = '1px solid lightgray';
}