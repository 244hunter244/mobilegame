// Elementos capturados do DOM
const nomePersonagemElemento = document.getElementById("character-name");
const textoDialogoElemento = document.getElementById("dialogue-text");
const containerOpcoes = document.getElementById("options-container");

// Função principal para carregar uma cena da história
function carregarCena(idCena) {
    const cenaAtual = historia[idCena];

    if (!cenaAtual) {
        console.error("Cena não encontrada: " + idCena);
        return;
    }

    // Atualiza o nome do personagem e o texto do diálogo
    nomePersonagemElemento.innerText = cenaAtual.personagem;
    textoDialogoElemento.innerText = cenaAtual.texto;

    // Limpa os botões de opções anteriores
    containerOpcoes.innerHTML = "";

    // Cria os novos botões com base nas opções da cena atual
    cenaAtual.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.innerText = opcao.texto;
        botao.classList.add("option-btn"); // Adiciona classe para estilização no css caso queira
        
        // Configura o evento de clique para ir para a próxima cena
        botao.addEventListener("click", () => {
            carregarCena(opcao.proximaCena);
        });

        containerOpcoes.appendChild(botao);
    });
}

// Inicia o jogo automaticamente na cena 'acordar' ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
    carregarCena("acordar");
});