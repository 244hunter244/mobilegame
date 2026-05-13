const historia = {
    acordar: {
        personagem: "Narrador",
        texto: "O som estridente do despertador corta o silêncio do quarto. Seus olhos ardem com a claridade repentina da tela. Mais uma manhã comum... Ou pelo menos era o que você achava.",
        opcoes: [
            { texto: "Esticar o braço e pegar o celular.", proximaCena: "pegar_celular" },
            { texto: "Cobrir a cabeça com o travesseiro.", proximaCena: "ignorar_despertador" }
        ]
    },
    ignorar_despertador: {
        personagem: "Narrador",
        texto: "Você puxa o travesseiro sobre o rosto, tentando ignorar o mundo. Mas o vibrar insistente do aparelho contra a madeira da mesa de cabeceira torna o sono impossível.",
        opcoes: [
            { texto: "Desistir e pegar o celular de uma vez.", proximaCena: "pegar_celular" }
        ]
    },
    pegar_celular: {
        personagem: "Narrador",
        texto: "O metal frio do smartphone contrasta com o calor da sua mão. Ao desbloquear a tela, o brilho ofusca sua visão por um segundo. Há uma notificação singular travada no centro do visor.",
        opcoes: [
            { texto: "Verificar o alerta.", proximaCena: "notificacao_estranha" }
        ]
    },
    notificacao_estranha: {
        personagem: "Celular",
        texto: "[AVISO DO SISTEMA]: Uma transmissão externa de vídeo criptografada está solicitando acesso à câmera frontal. Remetente: M_O_R_T_E.",
        opcoes: [
            { texto: "Aceitar a transmissão por curiosidade.", proximaCena: "abrir_link" },
            { texto: "Tentar apagar a mensagem.", proximaCena: "apagar_virus" }
        ]
    },
    apagar_virus: {
        personagem: "Narrador",
        texto: "Você desliza o dedo repetidamente para descartar o alerta. O comando é ignorado. A tela do celular pisca em um tom vermelho estático e o aplicativo de vídeo força sua abertura.",
        opcoes: [
            { texto: "Olhar assustado para a câmera.", proximaCena: "inicio_chamada" }
        ]
    },
    abrir_link: {
        personagem: "Narrador",
        texto: "Ao tocar na tela, o sistema operacional trava. A luz verde ao lado da câmera frontal acende, indicando que ela está ativa. Um símbolo de ampulheta começa a girar no visor.",
        opcoes: [
            { texto: "Aguardar a conexão completar.", proximaCena: "inicio_chamada" }
        ]
    },
    inicio_chamada: {
        personagem: "???",
        texto: "A estática escura dá lugar a uma silhueta enigmática. Uma voz gélida, porém estranhamente suave, ecoa pelos alto-falantes do celular: 'Bom dia. Não entre em pânico, mas sua jornada na Terra chegou ao fim hoje.'",
        opcoes: [] // Fim da introdução
    }
};
