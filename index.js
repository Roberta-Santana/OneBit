var elementosDuvida = document.querySelectorAll('.duvida');
elementosDuvida.forEach(function(duvida) {
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa') //ALTERA (ADD OU REMOVE) A CLASSE "ATIVA" NO ELEMENTO, APÓS O CLICK
})
}
)