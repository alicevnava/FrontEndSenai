// array = vetor. 
// Chama pelo índice

// Exercício 1
var filmes = [
    ["Cartas para Julieta", "Uma carta perdida"],
    ["500 Dias com Ela", "Jovem Apaixonado"],
    ["O Estagiário", "Senhor estagiário"], 
    ["Wish", "Comemoração de 100 anos Disney"], 
    ["Meu Malvado Favorito", "Minions fiéis"], 
    ["Toy Story", "Brinquedos ganham vida"]];


// repetião fixa = usar for (Quantidade de repetições já conhecida)
// para cada = for each 
// repetição infinita = while (enquanto for verdadeiro)
// chamando o elemntos do html pelo id e consegue aletrar o HTML
var grupoFilmes = document.getElementById ("grupoFilmes");
// teste para ver se o link está certo
// grupoFilmes.innerHTML = "Teste"

// para cada elemento do array filme. Por conta do lenght do array, vai criar um card para cada elemento
// conforme for adicionando os filmes, cards vão sendos criados
// element = vai salvando os nomes dos filmes


filmes.forEach(element => {
    grupoFilmes.innerHTML += `
    <div class="filme">
     <h5>${element [0]}</h5> 
    <p>${element [1]}</p>
    <button class="verMais"> Ver Mais</button>
    </div>`
});