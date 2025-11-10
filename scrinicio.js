let tempo = 4000;
let indiceImagemAtual = 0;
let imagens = [
    "./imagens/avatar.jpg",
    "./imagens/club.jpg",
    "./imagens/jurassic.jpg",
    "./imagens/aranha.jpg",
    "./imagens/ass.jpg",
    "./imagens/batman.jpg",
    "./imagens/benjamin.jpg",
    "./imagens/chefao.jpg",
    "./imagens/futuro.jpg",
    "./imagens/heimer.jpg",
    "./imagens/iluminado.jpg",
    "./imagens/joker.jpg",
    "./imagens/interestelar.jpg",
    "./imagens/star.jpg",
    "./imagens/pulp.jpg",
    "./imagens/scar.jpg",
    "./imagens/super.jpg",
    "./imagens/tubarao.jpg",
    "./imagens/aneis.jpg",
    "./imagens/alien.jpg"
];
 
const slider = document.querySelector("#slider");
const logoLink = document.querySelector("#logoLink");
 
function proximaImagem() {
    slider.style.transition = `background-image 2s ease-in-out`;
    slider.style.backgroundImage = `url(${imagens[indiceImagemAtual]})`;
 
    indiceImagemAtual++;
 
    if (indiceImagemAtual >= imagens.length) {
        indiceImagemAtual = 0;
    }
}
 
 
function mostrarAlertaIntegrador() {
    Swal.fire({
        title: "Bem-vindo ao ROBOBINE!",
        text: "Você está prestes a acessar nossa área integradora. Prepare-se para uma experiência INCRÍVEL!",
        icon: "success",
        confirmButtonText: "Vamos lá!",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        background: '#1a1a1a',
        color: 'white',
        confirmButtonColor: '#da0012ff',
        cancelButtonColor: 'rgba(243, 0, 162, 1)'
    }).then((result) => {
        if (result.isConfirmed) {
 
            window.location.href = "integrador.html";
        }
    });
}
 
function iniciar() {
    proximaImagem();
    setInterval(proximaImagem, tempo);
   
    // Adiciona evento de clique na logo
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            mostrarAlertaIntegrador();
        });
    }
}
 
window.addEventListener("load", iniciar);