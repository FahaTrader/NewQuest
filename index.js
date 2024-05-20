const gruposPerguntas = [
    {
        nome: '',
        title: 'ORAL',
        perguntas: [
                'Tenho necessidade de falar sobre o que sinto?',
                'Preciso chorar mesmo que não saiba exatamente explicar o motivo?',
                'Sinto a minha dor e a dor das pessoas me fazendo, por vezes, pegar para mim problemas que não são meus?',
                'Pratico frequentemente exageros com comida, compras, drogas, álcool, etc?',
                'Sou bom com improvisos, as coisas fluem naturalmente?',
                'Numa relação o toque, o carinho, o colo e a conversa são muito importantes pra mim?',
                'Gosto muito de interagir com as pessoas e estar em ambientes sociais?',
                'Frequentemente busco fazer de tudo para agradar as pessoas?',
                'Sou sensível e sinto as coisas muito grandes?',
                'Tomo decisões a partir do que sinto?',
                'Estar em silêncio por tempo prolongado é difícil para mim?',
                'Tenho necessidade de falar e reconheço que às vezes falo demais?',
                'Me sinto bem cuidando de quem amo e gosto de receber algum reconhecimento afetivo por isso?',
                'Não importe o quanto ganhe, vive endividado?',
                'Tenho mais facilidade em se comunicar de forma emocional e afetiva que de forma racional e fria?',
                'Não consigo esconder o que sinto?',
                'Não gosto de roupas apertadas, ainda que sejam lindas e me deixem bonito?',
                'Sou intenso nos meus sentimentos?',
                'Tenho facilidade em me conectar com as pessoas?',
                'Tenho dificuldade em dizer "não"?'
        ]
    },
    {
        nome: "",
        title: 'PSICOPATA',
        perguntas: [
            'Prefere encontrar uma maneira das pessoas fazerem as coisas que você não gosta em seu lugar?',
            'Detesta ficar devendo e não deve qualquer coisa a alguém?',
            'Tem necessidade de estar no controle das coisas?',
            'Tem o dom de influenciar as pessoas ao redor?',
            'É persuasivo quando quer convencer alguém de alguma coisa?',
            'É insensível ou frio na maior parte das vezes?',
            'Gosta que as pessoas te devam favores?',
            'As alianças com as pessoas se dão pelo que o outro tem para te acrescentar?',
            'Para fazer algo por alguém é preciso ganhar algo em troca?',
            'Veste-se de forma requintada?',
            'Gosta de ostentar suas conquistas?',
            'Se sente confortável demonstrando domínio e glamour?',
            'Precisa sempre levar vantagem nas situações?',
            'É difícil para você falar sobre seus defeitos?',
            'Gosta de estar em evidência?',
            'Precisa ser reconhecido pelas pessoas por aquilo que faz?',
            'Tem dificuldade em ser empático e acolhedor com as pessoas?',
            'Costuma ser prático ao invés de ficar sentindo as emoções relacionadas ao problema?',
            'Se comporta de forma autoritária, produzindo medo em algumas pessoas?',
            'Se faz de vítima para conseguir o que quer?'
        ]
    },
    {
        nome: "",
        title: 'RÍGIDO',
        perguntas: [
            'Tenho dificuldade em confiar nas pessoas?',
            'Antes que me mandem fazer algo, já está pronto?',
            'Preciso ser perfeito ou o melhor em tudo o que faço?',
            'Quanto mais rápido terminar de fazer o que precisa ser feito, melhor?',
            'Gosto de desafios?',
            'Quando quero algo, busco incansavelmente?',
            'Ficar à toa é perda de tempo?',
            'Geralmente quando alcanço o que desejo busco novas coisas?',
            'Tenho necessidade de controlar tudo, inclusive o que não dá pra controlar?',
            'Me divido entre tantas coisas que me sinto confuso?',
            'Tento fazer mil coisas ao mesmo tempo e sinto que não consigo dar conta de tudo?',
            'Me sinto dividido entre o que estou fazendo e o que estou pensando?',
            'Tenho medo de perder?',
            'Tenho dificuldade em mostrar vulnerabilidade e fraqueza?',
            'Tem dificuldade em tomar decisões rápidas?',
            'Penso que nunca sou bom o suficiente?',
            'Já tive diversos relacionamentos e nenhum deles dá certo?',
            'Meus relacionamentos não costumam durar?',
            'Sou vaidoso e me sinto mais seguro quando me sinto bonito?',
            'Ser a segunda opção seja para uma empresa ou relacionamento é intolerável?'
        ]
    },
    {
        nome: "",
        title: 'MASOQUISTA',
        perguntas: [
            'Seguro o que sinto o máximo possível mas quando está no meu limite, não consigo me conter e explodo?',
            'Costuma não pagar o mal que recebe na mesma moeda?',
            'As pessoas te magoam e você não reage?',
            'É uma pessoa forte e gera nas pessoas a ideia de que aguenta tudo?',
            'Frequentemente as pessoas se aproveitam de você?',
            'Você já se sentiu humilhado muitas vezes ao longo da sua vida?',
            'Demoro para tomar uma decisão e só dou um passo quando me sinto seguro?',
            'Sou detalhista e costumo sempre fazer as coisas bem feitas?',
            'Quando me sinto seguro em um ambiente ou relacionamento, crio raízes e me solto mais?',
            'Sou muito sensível mas tenho dificuldade em expressar o que sinto?',
            'Em uma palestra ou apresentação eu preciso de um script para conseguir executar a tarefa?',
            'Improvisar não é uma coisa fácil para mim, é preciso de planejamento, listas, métodos e disciplina em tudo o que faço?',
            'Para me abrir para alguém é necessário confiar muito nessa pessoa o que me faz seletivo com relação às pessoas a quem falo sobre minha vida?',
            'As rotinas são importantes para mim?',
            'Quando não estou bem ou me isolo e engulo as coisas calado ou explodo com qualquer coisa de forma desproporcional?',
            'Costumo fazer as coisas devagar, ser rápido para mim é muito difícil?',
            'Tenho dificuldade em lidar com situações novas?',
            'Não gosto de lidar com falta de planejamento e desorganização?',
            'Procuro ser discreto e chamar o mínimo de atenção possível em minha forma de me vestir?',
            'De vez em quando gosto de estar com pessoas mas geralmente prefiro ficar quieto e sozinho?'
        ]
    },
    {
        nome: "",
        title: 'ESQUIZÓIDE',
        perguntas: [
            'Sou criativo e tenho a habilidade de ter ideias fora da caixinha?',
            'Geralmente tenho tudo claro na mente mas tenho dificuldade em fazer o que precisa ser feito?',
            'Me sinto desconfortável em expor minhas ideias?',
            'Tenho uma forte necessidade de estar sozinho?',
            'Tenho pouca tolerância a situações com muitas pessoas e logo sinto vontade de ir embora?',
            'Não me identifico com rotinas rígidas, prefiro viver coisas novas regularmente?',
            'Receber contato físico das pessoas como abraços, toques e beijos é desconfortável e dispensável para mim?',
            'É mais fácil para mim explicar de forma racional o que sinto do que demonstrar e ter gestos de amor e carinho?',
            'Não gosto de atividades físicas como esportes ou trabalhos braçais?',
            'Costumo ser mais racional que emocional?',
            'Meus gostos contam com coisas exóticas, ou seja, diferentes do gosto da maioria das pessoas?',
            'Falo só quando necessário?',
            'Não me sinto à vontade em me expor seja numa palestra ou em outras situações de destaque?',
            'Evito a qualquer custo pedir as coisas às pessoas pois não gosto de incomodar os outros?',
            'Fazer contato com as pessoas é desgastante para mim?',
            'Não sei demonstrar meus sentimentos?',
            'Preciso estar sozinho para organizar meus pensamentos?',
            'Me considero uma pessoa fora do padrão?',
            'Costumo criar um mundo só meu dentro da minha cabeça usando a criatividade?',
            'Prefiro trabalho solitário a trabalho em grupo?'
        ]
    },
];

let currentGroupIndex = 0;
let currentQuestionIndex = 0;
let totalQuestions = gruposPerguntas.reduce((total, grupo) => total + grupo.perguntas.length, 0);
let resultados = [];
let respostasSim = 0;
let respostasNao = 0;

const questionContainer = document.getElementById('question-container');
const groupNome = document.getElementById('group-nome');
const question = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const resultadoElement = document.getElementById('resultado');
const progressBar = document.getElementById('progress-bar');
const progressPercentage = document.getElementById('progress-percentage');
const entrarQuest = document.getElementById('btnQuest');
const enviarResultado = document.getElementById('salvarResposta');
const divResultado = document.getElementById('resultado');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

entrarQuest.addEventListener("click", function(){
    $("#containerUm").addClass('hidden');
    $("#containerDois").removeClass('hidden');
})

function exibirPergunta() {
    const currentGroup = gruposPerguntas[currentGroupIndex];
    const currentQuestion = currentGroup.perguntas[currentQuestionIndex];

    groupNome.textContent = currentGroup.nome;
    question.textContent = currentQuestion;

    // Mostra o formulário de resposta
    answerForm.classList.remove('hidden');
}

function atualizarBarraProgresso() {
    const perguntasRespondidas = currentQuestionIndex * gruposPerguntas.length + currentGroupIndex + 1;
    const porcentagem = (perguntasRespondidas / totalQuestions) * 100;
    progressBar.style.width = `${porcentagem}%`;
    progressPercentage.textContent = `${Math.round(porcentagem)}%`;

}

function calcularRespostas() {
    // Coleta a resposta selecionada pelo usuário
    const resposta = document.querySelector('input[name="answer"]:checked').value;

    // Incrementa o contador de respostas para o grupo atual
    if (resposta === 'sim') {
        respostasSim++;
    } else {
        respostasNao++;
    }
    
    resultados[currentGroupIndex][resposta]++;

    // Atualiza a barra de progresso
    atualizarBarraProgresso();

    // Passa para a próxima pergunta ou grupo
    currentGroupIndex++;
    if (currentGroupIndex >= gruposPerguntas.length) {
        currentGroupIndex = 0;
        currentQuestionIndex++;
    }

    // Se todas as perguntas foram respondidas, exibe o resultado final
    if (currentQuestionIndex >= gruposPerguntas[0].perguntas.length) {
        $("#containerDois").addClass('hidden');
        $("#resultado").removeClass('hidden');
        $("#salvarResposta").removeClass('hidden');
        mostrarResultado();
    } else {
        exibirPergunta();
    }
}

function mostrarResultado() {
    resultadoElement.innerHTML = '';

    // Exibe o resultado principal (problema paterno ou materno)
    let mensagemPrincipal = respostasSim > respostasNao ? 'Sua relação com a sua mãe ficou registrada de forma privilegiada no seu inconsciente e define como as suas emoções se organizam. Se você presenciou cenas traumáticas envolvendo sua mãe, saiba que essa provavelmente é a raiz do problema que te trouxe até aqui e te tornou hiper sensível às coisas (ainda que pareça uma pessoa forte).' 
        : 
        'Sua relação com o seu pai é o núcleo dos seus conflitos. Você é perfeccionista e tende a se envolver com varias coisas ao mesmo tempo, pensando demais e alimentando um ciclo de ansiedade. Problemas com relacionamentos amorosos também são uma tendência, assim como dificuldades em lidar com dinheiro e com figuras de autoridade.';
    resultadoElement.innerHTML += `<h1>Resultado</h1>`;
    resultadoElement.innerHTML += `<p>Resultado principal: ${mensagemPrincipal}</p>`;
}

function salvarResultadosNaPlanilha() {
    const apiURL = 'https://api.sheetmonkey.io/form/3m1vGSyKv9idvhSJwAdzVp';

    // Coleta informações do usuário
    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const inputDate = document.getElementById('nascimento').value;
    const parts = inputDate.split('-');
    const nascimento = `${parts[2]}/${parts[1]}/${parts[0]}`;

    // Cria um objeto com todos os resultados, cada grupo como coluna
    const data = {
        "NOME": nome,
        "WHATSAPP": whatsapp,
        "NASCIMENTO": nascimento,
    };
    gruposPerguntas.forEach((grupo, index) => {
        data[grupo.title] = `Sim: ${resultados[index].sim}, Não: ${resultados[index].nao}`;
    });

    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
}

answerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    calcularRespostas();
});

// Inicializa os resultados com contadores zerados
gruposPerguntas.forEach(() => {
    resultados.push({ sim: 0, nao: 0 });
});

// Embaralha a ordem das perguntas em cada grupo
gruposPerguntas.forEach(grupo => {
    shuffleArray(grupo.perguntas);
});

exibirPergunta();

enviarResultado.addEventListener('click', function(){
    function enviarPorWhatsApp() {
        const mensagens = []; // Array para armazenar as mensagens de todos os grupos

        // Adiciona o resultado principal ao array de mensagens
        let mensagemPrincipal = respostasSim > respostasNao ? 'Problema paterno' : 'Problema materno';
        mensagens.push(`\n\n*Resultado principal:* ${mensagemPrincipal}`);

        // Substitua 'NúmeroDoWhatsAppDestino' pelo número de telefone para o qual deseja enviar as mensagens
        const numeroDestino = '5521982565890';

        // Formatar todas as mensagens para o WhatsApp
        const mensagensFormatadas = mensagens.map(mensagem => encodeURIComponent(mensagem)).join('%0A%0A');

        // Criar o link para abrir o WhatsApp Web com as mensagens preenchidas
        const linkWhatsApp = `https://wa.me/${numeroDestino}?text=Ol%C3%A1+Dra.+%2AAqui+est%C3%A1+o+meu+Resultado%3A%2A${mensagensFormatadas}`;
    
        // Abrir o link em uma nova aba
        window.open(linkWhatsApp);
    }

    // Chamada da função para enviar as respostas pelo WhatsApp
    enviarPorWhatsApp();

    // Salva os resultados na planilha
    salvarResultadosNaPlanilha();
});
