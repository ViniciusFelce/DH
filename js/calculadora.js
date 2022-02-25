// calculadora nível - 1
function adicionar (n1,n2){
    const resultadoAdicionar = n1 + n2;
    return resultadoAdicionar;
}

function subtracao (n1,n2){
    const resultadoSubtracao = n1 - n2;
    return resultadoSubtracao;
}

function multiplicacao (n1,n2){
    const resultadoMultiplicacao = n1 * n2
    return resultadoMultiplicacao;
   }

function divicao (n1,n2){
    const resultadoDivicao = n1 / n2
    return resultadoDivicao;
   }

// calculadora nível - 2
console.log("Teste de Operações + Calculador " + adicionar(5,5));
console.log("Teste de Operações - Calculador " + subtracao(5,2));
console.log("Teste de Operações * Calculador " + multiplicacao(3,2));
console.log("Teste de Operações / Calculador " + divicao(10,0));

// calculadora nível - 3
//Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado 
//por ele mesmo, ou seja, ao quadrado.
function quadradoDoNumero(n1){
    const resultadoQuadradoDoNumero = multiplicacao(n1,n1) 
    console.log('\n\traiz quadrada de:',n1,"é:",resultadoQuadradoDoNumero)
    return resultadoQuadradoDoNumero
}
quadradoDoNumero(8)

//Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
function mediaDeTresNumeros (n1,n2,n3){
    const resultAdicionar = adicionar(n1,n2)
    const resultAdicionar1 = adicionar(resultAdicionar,n3)
    const resultAdicionar2 = divicao (resultAdicionar1, 3)
    console.log('\n\tmédia de:',resultAdicionar2)
    return resultAdicionar2
}
mediaDeTresNumeros(10,20,30)

//Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, 
//e que deverá retornar x% de totalPorcentagem.
//Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300).
function calculaPorcentagem(n1,n2){
    const resultPorcentagem = divicao(n1,100)
    const resultPorcentagem1 = multiplicacao(n2,resultPorcentagem)
    console.log('\n\tPorcebtagem de:',resultPorcentagem1)
    return resultPorcentagem1
}
calculaPorcentagem(300,15)
// 300/100*15=45

//Crie uma função geradorDePorcentagem que leva dois parâmetros, 
//e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
//Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
function geradorDePorcentagem (n1,n2){
    const resultGerador = multiplicacao(n1,100)
    const resultGerador1 = divicao(n2,resultGerador)
    console.log('\n\tPorcebtagem de:',resultGerador1)
    return resultGerador1
}
geradorDePorcentagem(2,200)
// 2*100/200=1
