const checkbox1 = document.querySelector('#checkbox')

checkbox1.addEventListener('change', function(){
    const bg_body = document.body
    bg_body.classList.toggle('dark-bg')

})