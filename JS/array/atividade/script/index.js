var pecas = [
    ["Processador"]
    ["Placa de vídeo"]
    ["HD SSD"]
    ["Placa-mãe"]
    ["Memória RAM"]
];


let carrinho = [];





var pecas = document.getElementById ("produtos");

produtos.forEach(element => {
    pecas.innerHTML += `
    <div class="produtos">
        <h5>${element}</h5> 
        <button class="verMais"> Ver Mais</button>
    </div>`
});