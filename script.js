let cenaAtual = "acordar";

function carregarCena(nomeCena) {
    const dadosCena = historia[nomeCena];
    if (!dadosCena) return;

    // Injeta o nome do personagem e o texto na caixa criada com CSS
    document.getElementById("character-name").innerText = dadosCena.personagem;
    document.getElementById("dialogue-text").innerText = dadosCena.texto;

    const containerOpcoes = document.getElementById("options-container");
    containerOpcoes.innerHTML = "";

    // Cria as escolhas dinamicamente
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
