 // 1) Módulo de Escrever Textos
 const Textos = (function() {
    const replace = function(texto, alvo, substituto) {
        return texto.replace(alvo, substituto);
    };

    const replaceAll = function(texto, alvo, substituto) {
        const regex = new RegExp(alvo, 'g');
        return texto.replace(regex, substituto);
    };

    return {
        replace: replace,
        replaceAll: replaceAll
    };
})();

function replace() {
    const texto = document.getElementById('textoInput').value;
    const alvo = document.getElementById('alvoInput').value;
    const substituto = document.getElementById('substitutoInput').value;
    const resultado = Textos.replace(texto, alvo, substituto);
    document.getElementById('resultado1').textContent = resultado;
}

function replaceAll() {
    const texto = document.getElementById('textoInput').value;
    const alvo = document.getElementById('alvoInput').value;
    const substituto = document.getElementById('substitutoInput').value;
    const resultado = Textos.replaceAll(texto, alvo, substituto);
    document.getElementById('resultado1').textContent = resultado;
}

// 2) Promise para Verificar Usuário ADM
function verificarUsuario() {
    const verificarUsuario = new Promise((resolve, reject) => {
        const nome = prompt("Digite seu nome:");
        const senha = prompt("Digite sua senha:");

        if (nome === 'ADM' && senha === 'ADM') {
            resolve("Usuário autenticado!");
        } else {
            reject("Usuário ou senha incorretos!");
        }
    });

    verificarUsuario.then((mensagem) => {
        document.getElementById('mensagem2').textContent = mensagem;
    }).catch((erro) => {
        document.getElementById('mensagem2').textContent = erro;
    });
}

// 3) Input de Pesquisa em um Array de Jogos
const jogos = ["The Witcher 3", "Dark Souls", "Red Dead Redemption 2"];

function pesquisarJogo() {
    const termo = document.getElementById('pesquisaInput').value;
    const mensagem = document.getElementById('mensagem3');

    if (jogos.includes(termo)) {
        mensagem.textContent = "O jogo '" + termo + "' foi encontrado!";
    } else {
        mensagem.textContent = "O jogo '" + termo + "' não foi encontrado!";
    }
}