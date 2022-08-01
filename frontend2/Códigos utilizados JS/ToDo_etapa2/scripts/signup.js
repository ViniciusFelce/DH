const nome = document.getElementById("nome");
const sobrenome = document.getElementById("snome");
const password = document.getElementById("senha");
const email = document.getElementById("email");
const confirmPassword = document.getElementById("confirmSenha");
const form = document.getElementById("form");
const error = document.querySelectorAll(".error");
const formItem = document.querySelectorAll(".formItem");
const openEye = document.getElementById("openEye");
const slashedEye = document.getElementById("slashedEye");
const confirmCadastro = document.querySelector(
  '[data-target="confirmCadastro"]'
);

var validUser = false;
var validSenha = false;
var validConfirmSenha = false;
var validEmail = false;

form.addEventListener("submit", (e) => {
  checkName();
  checkSName();
  checkPassword();
  checkEmail();

  function checkName() {
    let mensagemError = [];
    if (nome.value === "" || nome.value == null) {
      e.preventDefault();
      mensagemError.push("O nome é obrigatório");
      error[0].innerText = mensagemError;
      formItem[0].classList.add("fail");
      validUser = false;
    } else {
        e.preventDefault();
      formItem[0].classList.remove("fail");
      error[0].innerText = null;
      formItem[0].classList.add("sucess");
      validUser = true;
      
    }
  }

  function checkSName() {
    let mensagemError = [];
    if (sobrenome.value === "" || sobrenome.value == null) {
      e.preventDefault();
      mensagemError.push("O sobrenome é obrigatório");
      error[1].innerText = mensagemError;
      formItem[1].classList.add("fail");
      validUser = false;
    } else {
        e.preventDefault();
      formItem[1].classList.remove("fail");
      error[1].innerText = null;
      formItem[1].classList.add("sucess");
      validUser = true;
    
    }
  }

  function checkEmail() {
    let mensagemError = [];
    if (email.value.length == 0) {
      e.preventDefault();
      mensagemError.push("O email é obrigatório");
      error[2].innerText = mensagemError;
      formItem[2].classList.add("fail");
      validEmail = false;
    } else if (!isEmail(email.value)) {
      e.preventDefault();
      mensagemError.push("Você nao digitou um email válido");
      error[2].innerText = mensagemError;
      formItem[2].classList.add("fail");
      validEmail = false;
    } else {
        e.preventDefault();
      formItem[2].classList.remove("fail");
      error[2].innerText = null;
      formItem[2].classList.add("sucess");
      validEmail = true;
      
    }

    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    }
  }

  function checkPassword() {
    let mensagemError = [];
    if (password.value.length == 0) {
      e.preventDefault();
      mensagemError.push("A senha é obrigatória");
      error[3].innerText = mensagemError;
      formItem[3].classList.add("fail");
      validSenha = false;
    } else if (password.value.length < 6) {
      e.preventDefault();
      mensagemError.push("A senha deve ter no mínimo 6 caracteres");
      error[3].innerText = mensagemError;
      formItem[3].classList.add("fail");
      validSenha = false;
    } else if (password.value.length > 15) {
      e.preventDefault();
      mensagemError.push("A senha deve ter no máximo 15 caracteres");
      error[3].innerText = mensagemError;
      formItem[3].classList.add("fail");
      validSenha = false;
    } else if (!/[A-Z]/.test(password.value)) {
      e.preventDefault();
      mensagemError.push(
        "A senha deve ter uma letra maíuscula,um número e um caracter especial (-,*,#,>)"
      );
      error[3].innerText = mensagemError;
      formItem[3].classList.add("fail");
      validSenha = false;
    } else if (!/[0-9]/.test(password.value)) {
      e.preventDefault();
      mensagemError.push(
        "A senha deve ter uma letra maíuscula,um número e um caracter especial (-,*,#,>)"
      );
      error[3].innerText = mensagemError;
      formItem[3].classList.add("fail");
      validSenha = false;
    } else if (!/[^A-Za-z0-9]/.test(password.value)) {
      e.preventDefault();
      mensagemError.push(
        "A senha deve ter uma letra maíuscula,um número e um caracter especial (-,*,#,>)"
      );
      error[3].innerText = mensagemError;
      formItem[3].classList.add("fail");
      validSenha = false;
    } else {
        e.preventDefault();
      formItem[3].classList.remove("fail");
      error[2].innerText = null;
      formItem[3].classList.add("sucess");
      validSenha = true;
     
    }

    if (password.value != confirmPassword.value || password.value.length == 0) {
      e.preventDefault();
      mensagemError.push(" as senhas devem ser iguais");
      error[4].innerText = mensagemError;
      formItem[4].classList.add("fail");
      validConfirmSenha = false;
    } else {
        e.preventDefault();
      formItem[4].classList.remove("fail");
      error[4].innerText = null;
      formItem[4].classList.add("sucess");
      validConfirmSenha = true;
    
    }
  }

//fetch cadastro POST

  function cadastrar() {
    if (validUser && validEmail && validSenha && validConfirmSenha) {
      fetch("https://ctd-todo-api.herokuapp.com/v1/users", {
        method: "POST",
        headers: {
          "Accept": "*/* , application/json, text/plain",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: `${nome.value}`,
          lastName: `${sobrenome.value}`,
          email: `${email.value}`,
          password: `${password.value}`,
        }),
      })
      .then((res) => {
        console.log(res)
        if (!res.ok) { 
            throw Error(res.statusText) 
            
        }
        else {
            res.json()
            .then((data) => localStorage.setItem('jwt', data.jwt)) 
                confirmCadastro.innerHTML = '<h1>Cadastro realizado!</h1>'
                confirmCadastro.style.opacity = '1'
                confirmCadastro.style.backgroundColor = 'green'
            setTimeout(() => {
                window.location.href = '/tarefas.html'
                

            }, 3000)
        }
    }).catch((data) => {
      console.log(data)


        if (data == 'Error: Bad Request') {
            confirmCadastro.innerHTML = '<h1>Usuário já existe</h1>'
            confirmCadastro.style.opacity = '1'
            confirmCadastro.style.backgroundColor = 'red'

        }


       
       
    })



    }
  }

  cadastrar();



});

function novaAba(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

function eyeChecker() {
  openEye.addEventListener("click", () => {
    slashedEye.style.visibility = "visible";
    openEye.style.visibility = "hidden";
    password.type = "password";
    confirmPassword.type = "password";
  });

  slashedEye.addEventListener("click", () => {
    slashedEye.style.visibility = "hidden";
    openEye.style.visibility = "visible";
    password.type = "text";
    confirmPassword.type = "text";
  });
}

eyeChecker();
