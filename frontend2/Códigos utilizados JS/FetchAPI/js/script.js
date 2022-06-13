function fetchAPI() {
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
        response.json().then((data) => {
            const lista = document.getElementById('lista');

           data.map((item) => {
               const li = document.createElement('li')
               li.setAttribute('id', item.id)
               li.innerHTML += `<h1> ${item.title} </h1>`
               lista.appendChild(li)
               if (item.completed) {
                   li.innerHTML += `<h2 style='color: green'>Concluída!</h2>`

               }

               else {
                li.innerHTML += `<h2 style='color: red'>Não concluida!</h2>`

               }


              

           })

        })
    
    })
}




