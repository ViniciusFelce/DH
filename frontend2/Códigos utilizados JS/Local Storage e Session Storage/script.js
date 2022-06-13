const inpKey = document.getElementById('inpKey');
const inpValue = document.getElementById('inpValue');
const btnInsert = document.getElementById('btnInsert');
const isOutput = document.getElementById('isOutput');
const clearBtn = document.getElementById('clearBtn')

btnInsert.addEventListener('click', () => {
    const key = inpKey.value;
    const value = inpValue.value; 

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();

    }

});

clearBtn.addEventListener('click', () => {

    localStorage.clear();
    location.reload();

})


for (let i = 0; i < localStorage.length; i++) {  // Nesse laço de repetição, utilizaremos o contador i para parametro do index da chave 
    const keyIndex = localStorage.key(i); // Eu capturo a chave em sí
    console.log(keyIndex)
    const valueIndex = localStorage.getItem(keyIndex) // Eu capturo o valor de uma determinada chave
    console.log(valueIndex)

    isOutput.innerHTML += `  
    ${keyIndex}: ${valueIndex} <br>
    ` 

    // No inner eu insiro os dados que o usuário enviou no input
}

const localStorageDados = localStorage
const hobbieArray = (localStorageDados.getItem('hobbie'))
const hobbieParaJson = JSON.parse(hobbieArray)

console.log(hobbieParaJson)
