const historia = {
    acordar: {
        personagem: "Narrador",
        texto: "O som estridente do despertador corta o silêncio do quarto. Seus olhos ardem com a claridade repentina da tela. Mais uma manhã comum... Ou pelo menos era o que você achava.",
        opcoes: [
            { texto: "Esticar o braço e pegar o celular.", proximaCena: "pegar_celular" },
            { texto: "Cobrir a cabeça com o travesseiro e ignorar.", proximaCena: "ignorar_despertador" }
        ]
    },
    ignorar_despertador: {
        personagem: "Narrador",
        texto: "Você puxa o travesseiro sobre o rosto, tentando se esconder da realidade. Mas o vibrar insistente do aparelho contra a madeira da mesa de cabeceira torna o sono impossível.",
        opcoes: [
            { texto: "Desistir e pegar o celular de uma vez.", proximaCena: "pegar_celular" }
        ]
    },
    pegar_celular: {
        personagem: "Narrador",
        texto: "O metal frio do aparelho contrasta com o calor da sua mão. Ao desbloquear a tela, o brilho ofusca sua visão por um segundo. Não há mensagens de amigos, apenas um alerta estranho.",
        opcoes: [
            { texto: "Verificar as notificações.", proximaCena: "notificacao_estranha" }
        ]
    },
    notificacao_estranha: {
        personagem: "Celular",
        texto: "[Notificação do Sistema]: Um link externo contendo uma chamada de vídeo criptografada foi recebido. Remetente: M_0_R_T_E.",
        opcoes: [
            { texto: "Tocar na notificação para abrir o link.", proximaCena: "abrir_link" },
            { texto: "Apagar a notificação achando que é vírus.", proximaCena: "apagar_virus" }
        ]
    },
    apagar_virus: {
        personagem: "Narrador",
        texto: "Você desliza o dedo para apagar o alerta. O comando é ignorado. A tela pisca em um tom vermelho-sangue e o aplicativo de vídeo abre sozinho, forçando o início da transmissão.",
        opcoes: [
            { texto: "Olhar para a câmera com medo.", proximaCena: "inicio_chamada" }
        ]
    },
    abrir_link: {
        personagem: "Narrador",
        texto: "A curiosidade vence. Ao tocar na tela, o navegador abre em uma página preta. A câmera frontal do seu aparelho se ativa e um carregamento em formato de ampulheta surge no centro.",
        opcoes: [
            { texto: "Aguardar a conexão da chamada.", proximaCena: "inicio_chamada" }
        ]
    },
    inicio_chamada: {
        personagem: "???",
        texto: "A estática da tela dá lugar a uma silhueta escura. Uma voz gélida, porém ironicamente suave, ecoa pelos alto-falantes do seu celular: 'Bom dia. Não se assuste, mas o seu tempo acabou.'",
        opcoes: [] // Próximo capítulo (onde o trato dos 7 dias é apresentado)
    }
};
