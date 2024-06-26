
const EmailObrigatorioError = document.querySelector('#EmailObrigatorioError')
const SenhaObrigatorioError = document.querySelector('#SenhaObrigatorioError')
const confirmPasswordDoesntMatchError = document.querySelector('#confirmPasswordDoesntMatchError')
const EmailObrigatorioErrorMobile = document.querySelector('#EmailObrigatorioErrorMobile')
const SenhaObrigatorioErrorMobile = document.querySelector('#SenhaObrigatorioErrorMobile')
const confirmPasswordDoesntMatchErrorMobile = document.querySelector('#confirmPasswordDoesntMatchErrorMobile')
const LabelEmailLogin = document.querySelector('.LabelEmailLogin')
const LabelSenhaLogin = document.querySelector('.LabelSenhaLogin')
const LabelEmailRegistro = document.querySelector('.LabelEmailRegistro')
const LabelSenhaRegistro = document.querySelector('.LabelSenhaRegistro')
const LabelConfirmSenha = document.querySelector('.LabelConfirmSenha')


function EmailErrorLogin() {
    const emailValue = email.value
    
    if(window.innerWidth > 850){
        EmailObrigatorioError.style.display = emailValue ? "none" : "block";
        LabelEmailLogin.style.color = emailValue === "" ? "red" : "black"
    }else{
        EmailObrigatorioErrorMobile.style.display = emailValue ? "none" : "block";
        LabelEmailLogin.style.color = emailValue === "" ? "red" : "black"
    }
     
}

function PasswordErrorLogin() {
    const passwordValue = senhaInput.value;

    if(window.innerWidth > 850){
        SenhaObrigatorioError.style.display = passwordValue ? "none" : "block";
        LabelSenhaLogin.style.color = passwordValue === "" ? "red" : "black"
    }else{
        SenhaObrigatorioErrorMobile.style.display = passwordValue ? "none" : "block";
        LabelSenhaLogin.style.color = passwordValue === "" ? "red" : "black"
    }

}

function EmailErrorCadastro() {
    const emailRegisterValue = inputEmailRegister.value

    if(window.innerWidth > 850){
        EmailObrigatorioError.style.display = emailRegisterValue ? "none" : "block";
        LabelEmailRegistro.style.color = emailRegisterValue === "" ? "red" : "black"
    }else{
        EmailObrigatorioErrorMobile.style.display = emailRegisterValue ? "none" : "block";
        LabelEmailRegistro.style.color = emailRegisterValue === "" ? "red" : "black"
    }
    
}

function PasswordErrorCadastro() {
    const passwordRegisterValue = senhaRegister.value;

    if(window.innerWidth > 850){
        SenhaObrigatorioError.style.display = passwordRegisterValue ? "none" : "block";
        LabelSenhaRegistro.style.color = passwordRegisterValue === "" ? "red" : "black"
    }else{
        SenhaObrigatorioErrorMobile.style.display = passwordRegisterValue ? "none" : "block";
        LabelSenhaRegistro.style.color = passwordRegisterValue === "" ? "red" : "black"
    }
    

}

function validatePasswordsMatch() {
    const password = senhaRegister.value;
    const confirmarPassword = Confirmpassword.value;

    if(window.innerWidth > 850){
        confirmPasswordDoesntMatchError.style.display = password == confirmarPassword ? "none" : "block";
        LabelConfirmSenha.style.color = password != confirmarPassword ? "red" : "black"
    }else{
        confirmPasswordDoesntMatchErrorMobile.style.display = password == confirmarPassword ? "none" : "block";
        LabelConfirmSenha.style.color = password != confirmarPassword ? "red" : "black"
    }

}
     
function EmailValid() {
    return email.value ? true : false;
}

function PasswordValid() {
    return senhaInput.value ? true : false;
}

function isFormValid() {
    const email = inputEmailRegister.value;
    if (!email) {
        return false;
    }

    const password = senhaRegister.value;
    if (!password) {
        return false;
    }

    const confirmarPassword = Confirmpassword.value;
    if (password != confirmarPassword) {
        return false;
    }

    return true;
}