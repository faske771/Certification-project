window.onload = function() {

const passwordInput = document.querySelector('.password-input');
const retypePass = document.querySelector('.retype-password-input');

function error(pass, retype) {
    pass.style.border = '1px solid red';
    retype.style.border = '1px solid red';
}
function pass(pass, retype) {
    pass.style.border = '1px solid green';
    retype.style.border = '1px solid green';
}
passwordInput.addEventListener('input', function (e) {
    if (passwordInput.value !== retypePass.value && retypePass.value !== '') {
        error(passwordInput,retypePass);
    } else {
        pass(passwordInput,retypePass);
    }
    
});
retypePass.addEventListener('input', function (e) {
    if (retypePass.value !== passwordInput.value && passwordInput.value !== '') {
        error(passwordInput,retypePass);
    } else {
        pass(passwordInput,retypePass);
    }
});

const rating = document.querySelectorAll('.rating__item');
rating.forEach(element => {
    element.addEventListener('click', function (e) {
        console.log('Cайт оценен на ' + element.getAttribute('value'));
    });
});

const scrollDiv = document.querySelector('.tariff-container');
scrollDiv.scrollTo((scrollDiv.scrollWidth/4.5), 0);

}