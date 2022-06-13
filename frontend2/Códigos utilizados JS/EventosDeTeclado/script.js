const btnComeçar = document.getElementById('Começar')
btnComeçar.addEventListener('keydown', function(e) {
    if (e.key == 'ArrowDown') {
        alert('');
    }

    else if (e.key == 'ArrowUp') {
        alert('Você clicou na setinha de cima');
    }

    console.log('Teste')

})