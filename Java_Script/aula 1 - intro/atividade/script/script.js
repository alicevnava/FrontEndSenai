function exercicio1() {
    const clientes = parseInt(prompt("Digite o número de clientes na mesa:"));
    const totalConta = parseFloat(prompt("Digite o valor total da conta:"));

    if (clientes <= 0 || isNaN(totalConta)) {
        alert("Insira um número válido de clientes e o valor total da conta.");
    } else {
        const valorPorCliente = totalConta / clientes;
        alert("Cada cliente deve pagar: R$ " + valorPorCliente.toFixed(2));
    }
}

// Função para o Exercício 2: Sucessor e Antecessor
function exercicio2() {
    const numero = parseInt(prompt("Digite um número:"));

    if (!isNaN(numero)) {
        const antecessor = numero - 1;
        const sucessor = numero + 1;
        alert("Antecessor: " + antecessor + ", Número: " + numero + ", Sucessor: " + sucessor);
    } else {
        alert("Por favor, insira um número válido.");
    }
}