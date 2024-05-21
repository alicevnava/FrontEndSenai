// array método 1 - autointerpretador
var filmes =  ["Raya e o Último Dragrão"]

// array método 2 - insereção manual
var jogos = Array ();
    jogos[0] = "Mario Kart";
    jogos[1]= "Bioshock";
    

// Add no final da lista - última posição
filmes.push("Moana");;
// insere na pirmiera posição
filmes.unshift ("Encantados")

// exclui o último elemento
filmes.pop();
// exclui o primeiro  elemento
filmes.shift();


// adicionando na lista para exemplo
filmes.push("Toy Story");
filmes.push("Monstro S.A");
filmes.push("Divertidamente");
filmes.push("Luca");

// mexer no meio do array
// splice: adicionar, remover e editar --> índice que vai atingir, quantos vai mexer e qual info vai ser mexida
// ínidce, quantidade, conteúdo 
//removeu Monstros S.A
filmes.splice(2,1)
// filmes.splice(2,2);

// adicionar filme
filmes.splice(2,0,"Soul");

// trocar - substituir o contéudo daquela posiçõa
filmes.splice(3,1,"Red")





// impirmir na tela
var grupoFilmes = document.getElementById ("grupoFilmes");

filmes.forEach(element => {
    grupoFilmes.innerHTML += `
    <div class="filme">
        <h5>${element}</h5> 
        <button class="verMais"> Ver Mais</button>
    </div>`
});
