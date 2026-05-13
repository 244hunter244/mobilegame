let cenaAtual = "acordar";

function carregarCena(nomeCena) {
    const dadosCena = historia[nomeCena];
    if (!dadosCena) return;

    // Atualiza quem está falando e o texto da tela
    document.getElementById("character-name").innerText = dadosCena.personagem;
    document.getElementById("dialogue-text").innerText = dadosCena.texto;

    // Limpa as opções da cena anterior
    const containerOpcoes = document.getElementById("options-container");
    containerOpcoes.innerHTML = "";

    // Adiciona os novos botões de escolha
    dadosCena.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.classList.add("option-button");
        botao.innerText = opcao.texto;
        
        botao.addEventListener("click", () => {
            carregarCena(opcao.proximaCena);
        });

        containerOpcoes.appendChild(botao);
    });
}

window.onload = () => {
    carregarCena(cenaAtual);
};
