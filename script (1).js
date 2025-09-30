const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.aivo');
        const proximopasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remover('ativo');
        document.getElementById(proximopasso).classList.add('ativo');
    })
})