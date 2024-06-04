// escreval () --> console.log() imprimir na tela

//comando foi mandado para o console. Não vai aparecer no navegaor em si
// console.log ("Olá mundo");

//caixas de texto  --> pop up que mostra msg para usuário
// alert("Olá mundo")

//caixa de texto para o usuário digitar algo
// prompt("Qual seu nome?") 

//  Caixa de texto para usuário escolher sim ou não. 
// Valores booleanos (sim = true; não = false)
// confirm("Deseja baixar novamente?")

// nada do que está sendo digitado está sendo salvo. Precisa de uma variável para isso
//não preisa definir o tipo de variável. É automático 
// variável escopo global e sobrescrevível (aceita alterações)
var varTeste = 0
varTeste = 10
varTeste = 5
varTeste = 8

// variável global, mas não aceita novas atribuições. Não aceita que mexa no valor inicial colocado
//usado em valores fixos (ex.: valor de π)
const constTeste = 0

// variável local (existe naquele bloco de código), sobrescrevível e  temporário. Ex.: usar em function
function teste(){
    let letTeste = 0
}

letTeste = 1

console.log(varTeste)
console.log (constTeste);
console.log (letTeste);

// tipos de dados (usar no console = typeof --> tipo do dado)
// varTeste = 5 --> number
// varTeste = "teste"-> string
// varTeste = true --> boolean
// varTeste = [] --> object


// tem que chamar para ser executado

 function nome () {
    //variável salva  o que for escrito no prompt
    // não precisa de ; no final da linha
    var nome = prompt("Qual seu nome?");
    // concatenar informações
    alert ("Seja bem-vindo " + nome + " aproveite a estadia") //ou aspas simples
    //nesse tipo de concatenação, não precisa separar as infos
    //usar ${} para infos não strings
    alert (`Seja bem vindo ${nome} Aproveite a estadia`);
 }


function soma () {
    // calculadora
    // nesse caso tem que colocar o tipo de variável
    // parseInt = convertendo para inteiro 
    var num1 = parseInt (prompt ("Qual o primeiro número? "));
    //number tbm troca o tipo de variável (real ou inteiro)
    var num2 = Number (prompt ("Qual o segundo número? "));
    var resultado = num1 + num2;
    alert (resultado);
}

//(parâmetro)
function produto(valor,nome) {
    alert (`Esse produto vale: ${valor}`)
    alert (`O nome do produto: ${nome}`)
}
 