const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Enquanto passeava nos jardins do castelo, você acidentalmente deixa sua bola de ouro cair em um lago profundo. De repente, um sapo emerge da água e se oferece para recuperá-la em troca de sua amizade. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador! Um sapo falante não é algo comum.",
                afirmacao: "No início, você ficou com receio dos segredos e mistérios do pantanal."
            },
            {
                texto: "Isso é maravilhoso! Uma criatura mágica disposta a ajudar.",
                afirmacao: "Você demonstrou empatia e curiosidade pelo mundo mágico desde o primeiro momento."
            }
        ]
    },
    {
        enunciado: "O sapo cumpre a promessa e recupera a bola de ouro. Naquela noite, ele aparece no grande salão do castelo pedindo para jantar com você à mesa real. O rei lembra que promessas devem ser cumpridas. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza a sabedoria e a gentileza para acolher o sapo, ouvindo as histórias que ele tem para contar sobre o reino.",
                afirmacao: "Aprendeu a valorizar o caráter das pessoas além das aparências."
            },
            {
                texto: "Decide cumprir o acordo à sua própria maneira, servindo o sapo mas mantendo certa distância de início.",
                afirmacao: "Sentiu necessidade de proteger seu espaço enquanto tentava entender a situação."
            }
        ]
    },
    {
        enunciado: "Durante o jantar, o sapo revela que na verdade é um príncipe enfeitiçado por uma bruxa da floresta. Começa um debate no castelo sobre ir ou não atrás da bruxa para desfazer o feitiço. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de organizar uma expedição à floresta mágica para confrontar o feitiço e restaurar a forma do príncipe.",
                afirmacao: "Vem liderando com coragem as iniciativas no reino e luta para abrir novos caminhos e desfazer injustiças."
            },
            {
                texto: "Prefere buscar livros antigos na biblioteca do castelo para entender a magia antes de tomar qualquer atitude impulsiva.",
                afirmacao: "Sua prudência motivou a criação de um grupo de estudos sobre magia e ética para proteger o reino."
            }
        ]
    },
    {
        enunciado: "Para quebrar o encanto, o livro antigo revela que é necessário criar um símbolo de união entre o reino e a natureza antes do pôr do sol. E agora?",
        alternativas: [
            {
                texto: "Criar uma pintura manual retratando o lago e a amizade com o sapo usando tintas naturais.",
                afirmacao: "Notou que a arte tradicional aproxima o povo e decidiu ensinar técnicas de pintura aos habitantes do reino."
            },
            {
                texto: "Usar um amuleto mágico do castelo para projetar uma imagem brilhante nos céus do reino.",
                afirmacao: "Acelerou o processo de união do reino usando magia antiga para criar inspiração visual para todos."
            }
        ]
    },
    {
        enunciado: "No momento final do ritual de encantamento, você nota que uma das instruções da poção de restauração no livro foi alterada por alguém. O que você faz?",
        alternativas: [
            {
                texto: "Pára a cerimônia, pesquisa novamente nos pergaminhos originais para corrigir a receita e garantir a segurança do sapo.",
                afirmacao: "Demonstrou responsabilidade e cuidado, garantindo que o feitiço fosse quebrado com segurança e verdade."
            },
            {
                texto: "Confia na sua intuição e no laço de amizade construído com o sapo para prosseguir com o gesto de afeto sincero.",
                afirmacao: "Provou que a verdadeira amizade e a pureza de intenção são capazes de superar qualquer obstáculo feitiço."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O Destino do Reino:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

mostraPergunta();
