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
            { texto: "Verificar o e-mail.", proximaCena: "notificacao_estranha" }
        ]
    },
    notificacao_estranha: {
        personagem: "Celular",
        texto: "[SISTEMA]: Notificação compulsória de encerramento biológico recebida. Remetente: terminal@system.local. Assunto: Ordem de Despacho: #0049281. Horário do óbito programado: 23h59. Não responda.",
        opcoes: [
            { texto: "Tentar apagar a mensagem achando que é vírus.", proximaCena: "apagar_virus" },
            { texto: "Ficar encarando a tela em choque.", proximaCena: "choque_inicial" }
        ]
    },
    apagar_virus: {
        personagem: "Narrador",
        texto: "Você desliza o dedo repetidamente para descartar o alerta, mas o comando é sumariamente ignorado. De repente, a temperatura do quarto despenca de forma drástica. O ar condicionado nem está ligado.",
        opcoes: [
            { texto: "Olhar ao redor do quarto.", proximaCena: "morte_aparece" }
        ]
    },
    choque_inicial: {
        personagem: "Narrador",
        texto: "Seu coração dá um solavanco. A mensagem não parece um spam comum. Antes que possa raciocinar, as sombras nos cantos do quarto começam a se esticar de forma antinatural.",
        opcoes: [
            { texto: "Olhar para o centro do quarto.", proximaCena: "morte_aparece" }
        ]
    },
    morte_aparece: {
        personagem: "???",
        texto: "A escuridão se condensa em uma figura feminina de sobretudo longo e escuro. Seus olhos são opacos, completamente desprovidos de calor. 'Os humanos sempre culpam a tecnologia quando não conseguem processar o inevitável', diz ela, com uma voz monótona.",
        opcoes: [
            { texto: "Quem é você?! Como entrou aqui?!", proximaCena: "perguntar_identidade" },
            { texto: "Isso é um pesadelo. Eu vou acordar!", proximaCena: "achar_pesadelo" }
        ]
    },
    perguntar_identidade: {
        personagem: "Morte",
        texto: "A figura não se move. 'Eu sou o fim da sua linha, Pedro. A Morte. O e-mail foi apenas a formalidade do protocolo atual. Parada cardíaca súbita causada por um aneurisma assintomático. Às 23h59, seu sistema desliga.'",
        opcoes: [
            { texto: "Não... eu só tenho 28 anos! Não pode ser!", proximaCena: "reacao_desespero" }
        ]
    },
    achar_pesadelo: {
        personagem: "Morte",
        texto: "'Pense como quiser', a voz dela ecoa gélida. 'Mas o rompimento arterial na sua cabeça está agendado. Você tem menos de vinte horas restantes. O protocolo me obriga a te dar o aviso prévio. Faça o que quiser com o tempo.'",
        opcoes: [
            { texto: "Aceitar a realidade e tentar sair de casa.", proximaCena: "ir_ao_parque" }
        ]
    },
    reacao_desespero: {
        personagem: "Morte",
        texto: "'O como não importa, Pedro. O quando já está definido. Sugiro que saia deste quarto. O cheiro de estagnação aqui é incômodo.' Sem emitir som, ela se move para a porta, esperando por você.",
        opcoes: [
            { texto: "Sair de casa para tentar esquecer.", proximaCena: "ir_ao_parque" }
        ]
    },
    ir_ao_parque: {
        personagem: "Narrador",
        texto: "Cenário: Parque da Cidade - Fim da Tarde. O céu está cinzento e nublado. Pedro observa as pessoas caminhando. A Morte está de pé ao lado dele, imóvel como uma estátua de mármore.",
        opcoes: [
            { texto: "As pessoas passam e nem imaginam...", proximaCena: "conversa_parque" }
        ]
    },
    conversa_parque: {
        personagem: "Pedro",
        texto: "As pessoas... elas passam por nós e nem olham. Elas não sabem que eu estou contando os minutos. Você não sente nada, Morte? Vendo alguém sumir assim? Não tem pena?",
        opcoes: [
            { texto: "Ouvir a resposta dela.", proximaCena: "resposta_fria" }
        ]
    },
    resposta_fria: {
        personagem: "Morte",
        texto: "Ela olha fixamente para o horizonte, com olhos vazios. 'Sinto o mesmo que a gravidade sente quando uma maçã cai da árvore. Nada. É apenas mecânica, Pedro. Tudo o que começa precisa terminar. Sou apenas a tesoura que corta o fio.'",
        opcoes: [
            { texto: "Dizer que tudo parece inútil agora.", proximaCena: "apatia_morte" }
        ]
    },
    apatia_morte: {
        personagem: "Morte",
        texto: "'A maioria gasta suas últimas horas em desespero. Você está na fase da apatia. É mais silenciosa. Eu prefiro assim.' O relógio no visor do seu celular marca 22h30. O frio começa a entrar nos seus ossos.",
        opcoes: [
            { texto: "Fazer o seu último pedido de protocolo.", proximaCena: "ultimo_desejo" }
        ]
    },
    ultimo_desejo: {
        personagem: "Pedro",
        texto: "Você disse que o protocolo permitia uma última concessão antes da coleta... Eu passei a vida inteira sozinho em cubículos e apartamentos vazios. Não quero morrer no chão. Quero um encontro. Com você.",
        opcoes: [
            { texto: "Esperar a reação da entidade.", proximaCena: "reacao_desejo" }
        ]
    },
    reacao_desejo: {
        personagem: "Morte",
        texto: "Ela inclina levemente a cabeça, impassível. 'Um encontro? Comigo? Os vivos não interagem comigo. Mas... o protocolo aceita termos de acompanhamento para redução de estresse pré-coleta. Se isso estabiliza sua transição, eu aceito. Vamos.'",
        opcoes: [
            { texto: "Ir para o restaurante.", proximaCena: "o_encontro" }
        ]
    },
    o_encontro: {
        personagem: "Narrador",
        texto: "Cenário: Restaurante Antigo - 23h30. Mesa de canto, meia-luz. Uma música de jazz melancólica toca ao fundo. Pedro tem uma taça de vinho na mão. A Morte senta-se rigidamente do outro lado, apenas observando.",
        opcoes: [
            { texto: "Você não vai pedir nada?", proximaCena: "encontro_dialogo_1" }
        ]
    },
    encontro_dialogo_1: {
        personagem: "Morte",
        texto: "'Não sinto fome. E a matéria orgânica se decompõe rapidamente na minha presença. Beba o seu vinho, Pedro. O tempo está se esgotando.' Sua voz não carrega nenhum traço de carinho ou flerte. É puramente profissional.",
        opcoes: [
            { texto: "Mesmo sendo mentira... obrigado por vir.", proximaCena: "encontro_dialogo_2" }
        ]
    },
    encontro_dialogo_2: {
        personagem: "Pedro",
        texto: "Você dá um longo gole no vinho, com os olhos marejados. 'Obrigado por sentar aqui comigo. Olhar para o seu rosto me faz sentir que eu existi. Que alguém testemunhou meu fim.'",
        opcoes: [
            { texto: "Ouvir a última sentença dela.", proximaCena: "encontro_dialogo_3" }
        ]
    },
    encontro_dialogo_3: {
        personagem: "Morte",
        texto: "Sua expressão permanece perfeitamente rígida. 'Eu testemunho todos eles. Você existiu, Pedro. Mas sua cota de tempo foi gasta.' De repente, uma dor lancinante surge na base do seu crânio. Sua visão começa a falhar.",
        opcoes: [
            { texto: "Levar a mão à cabeça, agonizando.", proximaCena: "a_ceifa" }
        ]
    },
    a_ceifa: {
        personagem: "Morte",
        texto: "Ela se inclina milímetros para frente. 'O aneurisma cedeu. O sangramento começou. Não lute contra isso. Se você relaxar, o processo é mais rápido.'",
        opcoes: [
            { texto: "Por favor... só segure a minha mão no escuro...", proximaCena: "fim_estatico" }
        ]
    },
    fim_estatico: {
        personagem: "Morte",
        texto: "Ela estende a mão metálica e fria sobre a mesa, tocando seus dedos sem qualquer aperto reconfortante. É como tocar uma estátua de gelo. 'O escuro é inevitável, Pedro. Mas eu estou aqui. Minha presença é a última coisa que você irá registrar.'",
        opcoes: [
            { texto: "Fechar os olhos e aceitar o fim.", proximaCena: "game_over" }
        ]
    },
    game_over: {
        personagem: "Morte",
        texto: "A tela apaga por completo. O jazz some. No silêncio absoluto, a voz ecoa uma última vez: 'Pedro. Hora do óbito: 23h59. Registro encerrado.' O som de passos pesados se afasta até sumir.",
        opcoes: [
            { texto: "Recomeçar a História", proximaCena: "acordar" }
        ]
    }
};