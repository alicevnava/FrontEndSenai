

var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    velocidadeMaxima: 180,
    velocidadeAtual: 0,
    acelerar: function(velocidade) {
        if (this.velocidadeAtual + velocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual += velocidade;
            atualizarInformacoes();
        } else {
            console.log("Não é possível acelerar além da velocidade máxima de " + this.velocidadeMaxima + " km/h");
        }
    }
};

function atualizarInformacoes() {
    document.getElementById('marca').textContent = carro.marca;
    document.getElementById('modelo').textContent = carro.modelo;
    document.getElementById('ano').textContent = carro.ano;
    document.getElementById('cor').textContent = carro.cor;
    document.getElementById('velocidadeMaxima').textContent = carro.velocidadeMaxima;
    document.getElementById('velocidadeAtual').textContent = carro.velocidadeAtual;
}

function acelerarCarro(velocidade) {
    carro.acelerar(velocidade);
}

// Atualiza as informações iniciais do carro
atualizarInformacoes();