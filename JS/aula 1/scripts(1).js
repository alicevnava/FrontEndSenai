// calcule conta, faça uma aplicação js que pegue o número de clientes em uma mesa, o valor total da conta e após isso divida a conta de forma igual a todos os clientes


function conta() {
    let clientes = Number(prompt(`Quantos clientes tem na mesa?`));
    let valor = Number (prompt (`Qual o valor da conta?`));
    var divisao = valor/clientes;
    alert(`O valor da conta é de R$ ${valor} e cada cliente vai pagar ${divisao}`);

}

//Sucessor e antecessor, faça uma aplicação que colete um número digitado pelo usuário e logo em seguida mostre em ordem: o numero anterior a ele, o próprio número escolhido e o número sucessor a ele
function sucessor_antecessor() {
    let numero = Number(prompt(`Digite um número: `));
    console.log (numero-1, numero , numero+1)
}