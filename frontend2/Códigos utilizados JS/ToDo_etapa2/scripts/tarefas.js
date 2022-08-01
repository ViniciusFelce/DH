const logout = document.getElementById('closeApp')
const form = document.getElementById('nova-tarefa')
const inputTarefa = document.getElementById('novaTarefa')
const pendentes = document.getElementById('pendentes')


if (localStorage.getItem('jwt') == null || localStorage.getItem('jwt') == '') {
    alert('Você precisa estar logado para acessar essa pagina');
    window.location.href = 'index.html'
}

logout.addEventListener('click', () => {

    localStorage.removeItem('jwt')
    alert('Deslogado com sucesso')
    setTimeout(() => {
        window.location.href = 'index.html'

    }, 2000)
   


})

form.addEventListener('submit', (e) => {
    
    if (inputTarefa.value.length != 0 ) {
        function newTarefa() {
            fetch('https://ctd-todo-api.herokuapp.com/v1/tasks', {
              method: 'POST',
              headers: {
                'Accept': '*/* , application/json, text/plain',
                'Content-Type':  'application/json',
                'authorization': `${localStorage.getItem('jwt')}`
              },
              
              body: JSON.stringify({
                "description": `${inputTarefa.value}`,
                "completed": false
              })
            })
            .then(res => res.json())
            .then(data => {
                pendentes.innerHTML += `
                <li class="tarefa">
                 <div class="not-done"></div>
                <div class="descricao">
                <p class="nome">${data.description}</p>
                <p class="timestamp">${data.createdAt}</p>
                </div>
                </li>

                `




            })
          }

          newTarefa();

          e.preventDefault();


    }

    else {
        e.preventDefault();
        alert('O campo precisa ser preenchido')
    }


})

