const linksInternos =  document.querySelectorAll('a[href^="#"]');

    function callback(event){

        //event.currentTarget.preventDefault();

        linksInternos.forEach((link) => {
            link.classList.remove('active');
        });

        this.classList.add('active');

        
    }

linksInternos.forEach((link) => {
    link.addEventListener('click',callback);
});

const apresentacao = document.querySelector('ul.menu-desktop li:nth-child(4)');

    function handleApre(event){
        const  mostrar = document.querySelector('.mini-apresentacao');
        mostrar.classList.toggle('estado');
    }

apresentacao.addEventListener('mouseenter', handleApre);


const bolas =  document.querySelectorAll('.bolas');

function slidePortifolio(){
    
}

bolas.forEach( (bola) => {
    bola.addEventListener('click',slidePortifolio );
} )