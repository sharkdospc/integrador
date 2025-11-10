class ElementoNavbar {
    constructor(elemento, navList, navLinks) {
        this.elemento = document.querySelector(elemento);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this); // Vinculando o contexto de 'this'
    }

    animatedLinks(){
        this.navLinks.forEach((link) =>
        {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }

    handleClick() {
        console.log(this); // Verifica o contexto atual
        this.navList.classList.toggle(this.activeClass); // Alterna a classe ativa
        this.animatedLinks();
    }

    addClickEvent() {
        this.elemento.addEventListener("click", this.handleClick); // Usa o método vinculado
    }

    init() {
        if (this.elemento) {
            this.addClickEvent();
        }
        return this;
    }
}

const elementoNavbar = new ElementoNavbar(
    ".elemento",  // Seleciona o elemento principal
    ".nav-list",  // Seleciona a lista de navegação
    ".nav-list li" // Seleciona os links da navegação
);
elementoNavbar.init();

// Seleciona os elementos do botão e dos containers
var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.container');
var containerOne = document.querySelector('.container.one');
var containerTwo = document.querySelector('.container.two');
var containerThree = document.querySelector('.container.three');
var containerFour = document.querySelector('.container.four');
var containerFive = document.querySelector('.container.five');
var containerSix = document.querySelector('.container.six'); // Corrigido para a classe certa

var currentContainerIndex = 0; // Índice do container atual

// Define a visibilidade inicial
container.style.display = 'block'; // O primeiro container começa visível
containerOne.style.display = 'none'; // Os demais containers começam ocultos
containerTwo.style.display = 'none';
containerThree.style.display = 'none';
containerFour.style.display = 'none';
containerFive.style.display = 'none';
containerSix.style.display = 'none';

// Lista de containers para alternar
var containers = [container, containerOne, containerTwo, containerThree, containerFour, containerFive, containerSix];

// Adiciona o evento ao botão
btn.addEventListener('click', function() {
    // Esconde o container atual
    containers[currentContainerIndex].style.display = 'none';

    // Avança para o próximo container na lista
    currentContainerIndex = (currentContainerIndex + 1) % containers.length;

    // Mostra o próximo container
    containers[currentContainerIndex].style.display = 'block';
});

const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");




document.getElementById('searchInput').addEventListener('input', function () {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Limpa os resultados anteriores
    const query = this.value.toLowerCase();

    // Itens e páginas associadas
    const items = [
        { name: 'Alien, o Oitavo Passageiro', page: 'alien.html' },
        { name: 'Interestelar', page: 'interestelar.html' },
        { name: 'O Senhor dos Anéis: As Duas Torres', page: 'senhor.html' },
        { name: 'The Batman', page: 'batman.html' },
        { name: '(500) Dias com Ela', page: 'ela.html' },
        { name: 'Clube da Luta', page: 'clubcritic.html' },
        { name: 'Avatar', page: 'avatar.html' },
        { name: 'O Iluminado', page: 'iluminado.html' },
        { name: 'Pulp Fiction: Tempo de Violência', page: 'fiction.html' },
        { name: 'Scarface', page: 'scarface.html' },
        { name: 'O Poderoso Chefão', page: 'filmes/chefao.html' },
        { name: 'Star Wars: Episódio V , O Império Contra-Ataca', page: 'wars.html' },
        { name: 'Oppenheimer ', page: 'oppen.html' },
        { name: 'Superman: O Filme', page: 'superman.html' },
        { name: 'Homem-Aranha 2 ', page: 'aranha.html' },
        { name: 'Tubarão', page: 'tubarao.html' },
        { name: 'Coringa ', page: 'coringa.html' },
        { name: 'O Curioso Caso de Benjamin Button', page: 'benja.html' },
        { name: 'Kick-Ass, Quebrando Tudo', page: 'kick.html' },
        { name: 'De Volta para o Futuro', page: 'futuro.html' },
        { name: 'Forrest Gump - O Contador de Histórias', page: 'gump.html' }
    ];

    // Filtra itens com base na entrada
    items.forEach(item => {
        if (item.name.toLowerCase().includes(query)) {
            const li = document.createElement('li');
            li.textContent = item.name;

            // Redireciona ao clicar no item
            li.addEventListener('click', () => {
                window.location.href = item.page; // Leva à página correspondente
            });

            searchResults.appendChild(li);
        }
    });
});

// Função para esconder os resultados ao clicar fora
document.addEventListener('click', function (event) {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Verifica se o clique foi fora do input e da lista de resultados
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.innerHTML = ''; // Limpa os resultados
    }
});
// Seletor de Tamanho da Fonte
const fontSizeSelector = document.getElementById('fontSize');
const h2Element = document.querySelector('h2');

// Aplica o tamanho selecionado
fontSizeSelector.addEventListener('change', function() {
  h2Element.style.fontSize = this.value;
  
  // Salva a preferência no localStorage
  localStorage.setItem('selectedFontSize', this.value);
});

// Carrega o tamanho salvo ao recarregar a página
window.addEventListener('load', function() {
  const savedFontSize = localStorage.getItem('selectedFontSize');
  if (savedFontSize) {
    h2Element.style.fontSize = savedFontSize;
    fontSizeSelector.value = savedFontSize;
  }
});


















    