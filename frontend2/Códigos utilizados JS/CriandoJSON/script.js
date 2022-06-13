const objeto = [
  {
    nome: "Jota",
    idade: 20,
    localização: "SC",
    profissão: {
      cargo: "Professor de Front",
      empresa: "DigitalHouse",
    },

    hobbies: ["Jogar", "Programar", "Ouvir Musica"],
  },

  {
    nome: "Jota",
    idade: 20,
    localização: "SC",
    profissão: {
      cargo: "Professor de Front",
      empresa: "DigitalHouse",
    },

    hobbies: ["Jogar", "Programar", "Ouvir Musica"],
  },
];


const objctParaJson = JSON.stringify(objeto) // Esse é o caso de enviar um objeto para uma API, banco de dados, local storage, session storage
console.log(objctParaJson)


const JSONParaObjct = JSON.parse(objctParaJson) // Esse é o caso de utilizar uma API e transformar essa API que stá em JSON para objeto, para que assim eu possa utilizar de seus dados
console.log(JSONParaObjct)


