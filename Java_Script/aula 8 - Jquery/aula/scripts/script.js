var paragrafoPrincipalMetodoAntigo = document.querySelector("#paragrafoPrincipal");
var pPrincipal = $("#paragrafoPrincipal").text("Olha que Top");
// se o .text ficar vazio = aparece o texto dentro do elemento e 
// se escrever algo, aparece esse texto que colocou
// no caso, substituiu o primeiro paragrafo pelo qu etá no .text
// $() --> nova seleção = document.querySelect
// alert(pPrincipal)

var nomeUsuario = prompt("Qual seu nome?");
// var nomeUsuario = undefined;
// nesse caso, aparece"Uduario" na tela
$("#nomeUsuario").text(nomeUsuario)
// prompt pega o nome do usuário e ai coloca no "usuario"

// no jquery só mostra na tela se for um valor válido. Se houver erro, não mostra pro usuário


// EVENTO
// on = addEventList
// Vantagem: declarar 3 etapas do evento ao mesmo tempo: selecionar, adicionar evento e função
pPrincipal.on("click", function (){
    pPrincipal.addClass("mudei");
})
// ao clicar no pPrincipal a classe dele muda (permitido alterações feitas no CSS)

// ao apertar no h6 muda o tema. Remove o claro e adiciona o escuro
$("h6").on("click", function(){
    $("main").addClass("tema-escuro");
    $("main").removeClass("tema-claro");
    $("h3").css("color", "red")

})

// propaganda - sumir e reorganizar
// esse número é o tempo para o efeito ocorrer
$("#fechar").on("click", function(){
    // para sumir
    // $("#propaganda").fadeOut(500)
    // $("#propaganda").slideUp(500)
    $("#propaganda").hide(500)
    
    // para aparecer
    $("#propaganda").fadeIn(2000)
    //$("#propaganda").slideDown(2000)
    // $("#propaganda").show(2000)
})