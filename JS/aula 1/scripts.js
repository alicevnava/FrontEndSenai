
//divisão do valor da conta do restuarnte pela quantidade de pessoas na mesa
//INPUT = quantidadeClientes, valorTotal
//OUTPUT = valorPorPessoa
function Exercicio1(){
    let qtdClientes = Number (prompt ("Quantidade de clientes na mesa: "));
    let valorTotal = Number (prompt ("Valor total da conta: R$ "));
    let valorPorPessoa = valorTotal/qtdClientes;
    //toFixed limita a quantidade de decimais
    alert (`O valor por pessoa é: R$ ${valorPorPessoa.toFixed(2)}`)
    //alert (`O valor por pessoa é: R$ ${(valorTotal/qtdClientes).toFixed(2)}`)

}

//antcessor e sucessor de um número
//INPUT: numero
//OUTPUT: antecessor, numero, sucessor
function Exercicio2(){
    let numero = Number (prompt("Digie o número desejado: "));
    let antecessor = numero - 1;
    let sucessor = numero + 1;
    alert (`${antecessor}, ${numero}, ${sucessor}`)
}

