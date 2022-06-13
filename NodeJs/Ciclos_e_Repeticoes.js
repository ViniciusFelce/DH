
//1 - Começamos a partir de nossa variedade de filmes, que tínhamos o seguinte:
//e nos pediram para passar todos os elementos para letras maiúsculas,
// o que na época tínhamos feito de forma "manual". Vamos movê-lo para uma maneira mais automática usando loops.

let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"]

for(let i = 0 ; i < filmes.length;i++){
const filme = filmes[i];
}
console.log(filme(filmes.toUpperCase));

// function converterMaiusculas(array){
//     array[0] = array[0].toUpperCase()
//     array[1] = array[1].toUpperCase()
//     array[2] = array[2].toUpperCase()
//     array[3] = array[3].toUpperCase()
//     array[4] = array[4].toUpperCase()
//     return array
//   }

// for(let i = 0;i < nomes.length; i++){
//     // i = 0 ; nomes[i] = "Fulano" -> 
//     // i = 1 ; nomes[i] = "Ciclano" ->
//     // i = 2 ; nomes[i] = "Beltrano" -> 
//     // i = 3 ; nomes[i] = "Lucas" -> 
//     // i = 4 ; nomes[i] = "Teste" -> 
//     // i = 5 ; 5 < 5  - > Encerra o loop 
//     const nome = nomes[i];
//     html = html + '<li>' + nome.toUpperCase + '</li>'; 
//   }