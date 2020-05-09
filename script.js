const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const showError = document.querySelector('.error-message')
const submit = document.querySelector('#btnSubmit');
const clear = document.querySelector('#clear');

let passwordMatch = document.createElement('p');
    passwordMatch.innerText = "Your passwords didn't match! Please, provide the same password in each field"
    passwordMatch.style.background = 'lightpink';

let lengthPassword = document.createElement('p');
    lengthPassword.innerText = "Your passwords is too short! Please, provide a password that is at least 10 characters long."
    lengthPassword.style.background = 'lightpink';

function validateForm(event){
    event.preventDefault();
    const termsChecked = document.querySelector('#terms').checked;
    if(password.value.length < 10) {
        password.style.border = '1px solid red';
        password.addEventListener('focus', validateForm);
        showError.appendChild(lengthPassword);
    } else if(password.value !== confirmPassword.value) {
        confirmPassword.style.border = '1px solid red';
        confirmPassword.focus();
        showError.appendChild(passwordMatch);
    } else if (!termsChecked){  
        alert("You must agree with our terms.");
    } else {
        showError.innerHTML = '';
        alert("Success.");
        let form = document.getElementById('form');
        form.submit();
    }
}

function clean(){
    let form = document.getElementById('form');
        form.submit();
}

submit.addEventListener('click', validateForm);
clear.addEventListener('click', clean);

