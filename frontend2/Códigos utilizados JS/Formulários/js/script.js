const nome = document.getElementById('name');
const password = document.getElementById('password');
const email = document.getElementById('email');
const form = document.getElementById('form');
const error = document.querySelectorAll('.error');
const formItem = document.querySelectorAll('.formItem')


form.addEventListener('submit', (e) => {
    
checkEmail();
checkPassword();



    function checkEmail () {

        let mensagemsErro = [] 


        if (email.value.length <= 0) {
            e.preventDefault();

            mensagemsErro.push('Você deve inserir um valor no email');
            error[1].innerText = mensagemsErro;
            formItem[1].classList.add('fail')
        }

        else if (!isEmail(email.value)) {
            mensagemsErro.push('Você deve inserir um email valido');
            error[1].innerText = mensagemsErro;
            formItem[1].classList.add('fail')

        }
        
        else {
            formItem[1].classList.remove('fail')
            error[1].innerText = null;
            formItem[1].classList.add('sucess')
        }


        
        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }


    }











   function checkPassword () {

    let mensagemsErro = [] 

    if (password.value === '' || password.value == null) { // If para caso o array de mensagem de erro seja preenchido, ou seja, se der erro em alguma verificação
        e.preventDefault();
        mensagemsErro.push('Você deve inserir um valor na senha'); // Adicionando mensagem no array mensagemErro

        error[2].innerText = mensagemsErro // Inserindo a mensagem de erro na div erro
        formItem[2].classList.add('fail')

    }
   


    else if (password.value.length < 6) {
        e.preventDefault();

        mensagemsErro.push('A senha deve ter mais de 6 caracteres');
        error[2].innerText = mensagemsErro;
        formItem[2].classList.add('fail');
    }

    else if (password.value.length > 20) {
        e.preventDefault();

        mensagemsErro.push('A senha deve ter menos do que 20 caracteres');
        error[2].innerText = mensagemsErro;
        formItem[2].classList.add('fail');
    }

    else {
        formItem[2].classList.remove('fail')
        error[2].innerText = null;
        formItem[2].classList.add('sucess')
    }

   }
  
   



   
   
    

})