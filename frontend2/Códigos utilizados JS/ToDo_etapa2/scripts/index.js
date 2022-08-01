const openEye = document.getElementById('openEye');
const slashedEye = document.getElementById('slashedEye');
const password = document.getElementById('inputPassword');
const email = document.getElementById('inputEmail');
const form = document.getElementById('form');
const error = document.querySelectorAll('.error');
const formItem = document.querySelectorAll('.formItem');
const confirmLogin = document.querySelector('[data-target="confirmLogin"]')

var validEmail = false;
var validSenha = false;





form.addEventListener('submit', (e) => {

    checkEmail();
    checkPassword();    

    function checkPassword() {
        let mensagemError = [];
        if (password.value.length == 0) {
            e.preventDefault();
            mensagemError.push('A senha é obrigatória')
            error[1].innerText = mensagemError;
            formItem[1].classList.add('fail');
            validSenha = false;
           
    
        }
    
    
    
        else {
            formItem[1].classList.remove('fail');
            error[1].innerText = null;
            validSenha = true;
            e.preventDefault();
           
           
    
        }
    

    
    
    
    
        
    }
    
    
    
    function checkEmail() {
        let mensagemError = [];
        if (email.value.length == 0) {
            e.preventDefault();
            mensagemError.push('O email é obrigatório')
            error[0].innerText = mensagemError;
            formItem[0].classList.add('fail');
            validEmail = false;
           
    
        }
    
        else if (!isEmail(email.value)){
            e.preventDefault();
            mensagemError.push('Caro usuario, você nao digitou um email certo')
            error[0].innerText = mensagemError;
            formItem[0].classList.add('fail');
            validEmail = false;
            
    
            
    
        }
    
        else {
            formItem[0].classList.remove('fail');
            error[0].innerText = null;
            validEmail = true;
            e.preventDefault();
       
            
           
    
        }
    
        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,1}\.[0-9]{1,1}\.[0-9]{1,1}\.[0-9]{1,1}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }
    
    
    }



    function login() {
        if (validEmail && validSenha) {
          fetch("https://ctd-todo-api.herokuapp.com/v1/users/login", {
            method: "POST",
            headers: {
              "Accept": "*/* , application/json, text/plain",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: `${email.value}`,
              password: `${password.value}`,
            }),
          })
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText)
                    
                }
                else {
                    res.json()
                    .then((data) => localStorage.setItem('jwt', data.jwt))
                        confirmLogin.innerHTML = '<h1>Login realizado!</h1>'
                        confirmLogin.style.opacity = '1'
                        confirmLogin.style.backgroundColor = 'green'
                    setTimeout(() => {
                        window.location.href = '/tarefas.html'
                        

                    }, 3000)
                }
            }).catch((data) => {

                if (data == 'Error: Bad Request') {
                    confirmLogin.innerHTML = '<h1>Senha ou email incorretos</h1>'
                    confirmLogin.style.opacity = '1'
                    confirmLogin.style.backgroundColor = 'red'

                }

                if (data == 'Error: Not Found') {
                    confirmLogin.innerHTML = '<h1>Usuário não existe</h1>'
                    confirmLogin.style.opacity = '1'
                    confirmLogin.style.backgroundColor = 'red'

                }
               
               
            })
            
            
    
    
    
        }
      }
    
      login();



})

function eyeCheckerHidden() {
    password.addEventListener('keyup', () => {
        if (password.value == '' || password.value == null) {
            slashedEye.style.opacity = 0
            openEye.style.opacity = 0

        }else {
            slashedEye.style.opacity = 1
            openEye.style.opacity = 1

        }
       
    })
}

eyeCheckerHidden();



function eyeChecker() {
    openEye.addEventListener('click', () => {
        slashedEye.style.visibility = 'visible'
        openEye.style.visibility = 'hidden'
        password.type = 'password'
        confirmPassword.type = 'password'
      })
      
      slashedEye.addEventListener('click', () => {
        slashedEye.style.visibility = 'hidden'
        openEye.style.visibility = 'visible'
        password.type = 'text'
        confirmPassword.type = 'text'
      })

}

eyeChecker();





  function novaAba(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
