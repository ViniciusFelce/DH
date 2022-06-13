

function spriteTiker() {

const sprite1 = document.getElementById('sprite1');
const sprite2 = document.getElementById('sprite2');



function sprite1Creator(callback) { //Função para criar a imagem e inserir no HTML
    let sprite1create = document.createElement('img');
    sprite1create.setAttribute('src', './img/sprite1.png',);

    callback(sprite1create);

    sprite1.insertAdjacentElement('beforeend', sprite1create);
}


function sprite2Creator(callback) {
    var sprite2create = document.createElement('img');
    sprite2create.setAttribute('src', './img/sprite1.png');

    callback(sprite2create);


    sprite2.insertAdjacentElement('beforeend', sprite2create);


}




sprite1Creator((sprite1styling) => {

    timerStarter();

function timerStarter() {
    setTimeout(() => {
        sprite1styling.setAttribute('src', './img/sprite2.png')
        timerMid();

    }, 900)

    



}


function timerMid() {
    setTimeout(() => {
        sprite1styling.setAttribute('src', './img/sprite3.png')
        timerEnd();

    }, 900)


}

function timerEnd() {
    setTimeout(() => {
        sprite1styling.setAttribute('src', './img/sprite4.png')
        timerStarter();

    }, 900)
    
}



});





sprite2Creator((sprite2styling) => {

   
        sprite2styling.style.cssText = `
        transform: scaleX(-1);
 
    `


timerStarter();

function timerStarter() {
    setTimeout(() => {
        sprite2styling.setAttribute('src', './img/sprite2.png')
        timerMid();

    }, 900)

    



}


function timerMid() {
    setTimeout(() => {
        sprite2styling.setAttribute('src', './img/sprite3.png')
        timerEnd();

    }, 900)


}

function timerEnd() {
    setTimeout(() => {
        sprite2styling.setAttribute('src', './img/sprite4.png')
        timerStarter();

    }, 900)
    
}
   



});






    

}




spriteTiker();