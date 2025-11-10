let tempo = 4000; // Intervalo ajustado para que a transição seja mais perceptível
let indiceImagemAtual = 0; // Índice da imagem atual
let imagens = [

]; // Lista de caminhos para as imagens

const slider = document.querySelector("#slider");

function proximaImagem() {
    // Define a nova imagem de fundo com transição sincronizada
    slider.style.transition = `background-image 2s ease-in-out`; // Adiciona transição apenas aqui
    slider.style.backgroundImage = `url(${imagens[indiceImagemAtual]})`;

    // Atualiza o índice para a próxima imagem
    indiceImagemAtual++;

    // Volta ao início se atingir o último índice
    if (indiceImagemAtual >= imagens.length) {
        indiceImagemAtual = 0;
    }
}

function iniciar() {
    proximaImagem(); // Exibe a primeira imagem imediatamente
    setInterval(proximaImagem, tempo); // Garante intervalos sincronizados com a transição
}

window.addEventListener("load", iniciar);

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

