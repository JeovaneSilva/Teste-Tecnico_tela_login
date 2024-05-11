
const email = document.querySelector('.inputEmailLogin')
const senhaInput = document.querySelector('.senha')
const Confirmpassword = document.querySelector('.Confirmpassword')
const erros = [...document.querySelectorAll(".error")]
const errosMobile = [...document.querySelectorAll(".errorMobile")]
const labels = [...document.getElementsByTagName("label")]
const slider = document.querySelector('.slider')
const btnCadastro = document.querySelector('#Cadastro')     
const btnlogin = document.querySelector('#login')

btnCadastro.addEventListener('click', (e) => {
    e.preventDefault();

    slider.style.width="130px"
    slider.style.right="-50px"
    RegisterForm.style.display="flex"
    loginForm.style.display="none"

    email.value=""
    senhaInput.value=""

    erros.map((error) => {
        error.style.display="none"
    })

    errosMobile.map((errorMobile) => {
        errorMobile.style.display="none"
    })
    
    labels.map((label) => {
        label.style.color="black"
    })
})

btnlogin.addEventListener('click', (e) => {
    e.preventDefault();

    slider.style.width="100px"
    slider.style.right="65px"

    RegisterForm.style.display="none"
    loginForm.style.display="flex"

    inputEmailRegister.value=""
    senhaRegister.value=""
    Confirmpassword.value=""

    erros.map((error) => {
        error.style.display="none"
    })

    errosMobile.map((errorMobile) => {
        errorMobile.style.display="none"
    })

    labels.map((label) => {
        label.style.color="black"
    })

})






