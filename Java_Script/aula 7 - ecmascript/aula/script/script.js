var texto = "Olá mundo, o mundo está bonito, tchau mundo";
var nome = "Alice";
var sobrenome = "Vivas";

console.log ("*******REPLACE*******")
console.log(texto);
// troca mundo por banana
// troca o primeiro termo encontrado
console.log(texto.replace("mundo", "banana"));
// trocar todos os mundos por world
console.log(texto.replaceAll("mundo", "world"));
// \n pular linha = <br>
// Atalho replace: ctrl + h. Trocar um termo pelo outro. 



console.log ("*******IndexOf/Includes*******")
// index = onde o elemento está (se não existe, retorna -1)
// include = se existe ou não (true or false)
var alunos = ["Leo", "Juliana", "Fernanda", nome];
// buscando se o nome existe ou não
var pesquisa = alunos.indexOf(nome);
var pesquisa2 = alunos.includes ("Alexandre")
console.log(pesquisa);

// no console: devolve o número do índice. No caso foi 3
// se eu colocar um nome que não está na lista, vai aparecer -1: pra mostrar que não existe
// se existe meu nome--> mostra que foi encontardo; 
// caso contrário--> mostrar que não foi achado

// no caso de index e include - respectivamente
if(pesquisa>=0 || pesquisa2==true){
    console.log("item encontrado");
} else {
    console.log("item não encontrado. Tente novamente")
}
