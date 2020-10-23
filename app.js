// const name = document.getElementById('name')
// const password = document.getElementById('password')
// const form = document.getElementById('form')

// form.addEventListener('submit, (e') => {
//     let messages 
// }

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //GET THE VALUES FROM THE INPUTS
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirm.value.trim();

    if (usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username error');
    } else {
        // add success class
        setSuccessFor(username);
    }

    if (passwordValue === ''); {
        settErrorFor(password, 'password can not be blank');
    } else if (!isPassword(passwordValue)) {
        settErrorFor(password, 'password is not vaiid');
    } else {
        setSuccessFor(password);
    }

    if (confirmValue === '') {
        setErrorFor(confirm, 'Password do not match');
    } else {
        setSuccessFor(confirm);
    }
}

function settErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
