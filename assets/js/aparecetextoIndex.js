// Defini algumas variáveis 

var posicaoParagrafo3 = document.getElementById("paragrafo-3");

var metadeWindow = window.innerHeight * 1.3;

// Função que adiciona e tira a classe "surgeParagrafo" do elemento com o id "paragrafo-3" com base em sua posição no site

function apareceParagrafo() {
    var topoItem = posicaoParagrafo3.getBoundingClientRect().top;

    var paragrafoVisivel = topoItem - metadeWindow < 0;

    if(paragrafoVisivel) {
        posicaoParagrafo3.classList.add('surgeParagrafo')
    } else {
        posicaoParagrafo3.classList.remove('surgeParagrafo') 
    }
}

window.addEventListener('scroll', apareceParagrafo)