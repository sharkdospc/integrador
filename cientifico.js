

// Seleciona os elementos do botão e dos containers
var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.container');
var containerOne = document.querySelector('.container.one');

var currentContainerIndex = 0; // Índice do container atual

// Define a visibilidade inicial
container.style.display = 'block'; // O primeiro container começa visível
containerOne.style.display = 'none'; // Os demais containers começam ocultos


// Lista de containers para alternar
var containers = [container, containerOne];

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
