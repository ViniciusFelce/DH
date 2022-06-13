// Vinicius Felce
// Vinicius Marques
// Rafael Martínez

//somarArray()
let numeros = [1,2,3];
function somaArray() {
    let soma = numeros[0] + numeros[1] + numeros[2];
    return soma;
}
console.log(somaArray(numeros));

//Simulação Array.join()
let hello = ["o","l","a"];
function helloArrey() {
    let x = hello[0] + hello[1] + hello[2]
    return x;
}
console.log(helloArrey(hello));

//Coleções de Filmes (e mais…)
// - 1 e 2 
let filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela", "test"];
let letras_miusculas = filmes.map(element => {
        return element.toUpperCase();
})
console.log(letras_miusculas);

// - 3
let filmes_list_1 = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
let filmes_list_2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function combinar (filmes_list_2, filmes_list_1) {
    filmes_list_1.push(filmes_list_2.shift());
    filmes_list_1.push(filmes_list_2.shift());
    filmes_list_1.push(filmes_list_2.shift());
    filmes_list_1.push(filmes_list_2.shift());
    filmes_list_1.push(filmes_list_2.shift());
    return filmes_list_1;
}
console.log(combinar( filmes_list_2, filmes_list_1));
console.log(filmes_list_2)

// - 4
let games = [];
function game_list (games, filmes_list_1) {
    filmes_list_1.push(games.pop());
    return games;
}
console.log(game_list(filmes_list_1, games));
console.log(games);

// - 5 Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
//const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
//const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
//Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

if (asiaScores[0] == euroScores[0]) {
    console.log("Scores é iguais")
} else {
    console.log("Scores é diferentes")
}

if (asiaScores[1] == euroScores[1]) {
    console.log("Scores é iguais")
} else {
    console.log("Scores é diferentes")
}

if (asiaScores[2] == euroScores[2]) {
    console.log("Scores é iguais")
} else {
    console.log("Scores é diferentes")
}

if (asiaScores[3] == euroScores[3]) {
    console.log("Scores é iguais")
} else {
    console.log("Scores é diferentes")
}

if (asiaScores[4] == euroScores[4]) {
    console.log("Scores é iguais")
} else {
    console.log("Scores é diferentes")
}

if (asiaScores[5] == euroScores[5]) {
    console.log("Scores é iguais")
} else {
    console.log("Scores é diferentes")
}

if (asiaScores[6] == euroScores[6]) {
    console.log("Scores é iguais")
} else {
    console.log("Scores é diferentes")
}

if (asiaScores[7] == euroScores[7]) {
    console.log("Scores é iguais")
} else {
    console.log("Scores é diferentes")
}

if (asiaScores[8] == euroScores[8]) {
    console.log("Scores é iguais")
} else {
    console.log("Scores é diferentes")
}