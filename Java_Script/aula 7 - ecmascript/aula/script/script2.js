// promisses
// uma promessa ou é resolvida ou é rejeitada
// classes são criadas nativamente
// é uma função: parentesese chave. 
// Seta significa que vai ser executado quando o pai for chamado
var promessa = new Promise((resolve, reject) => {
    let nome = "Alice";
    console.log ("*******PROMISSE*******")
    // se o nome = alice, significa que a promessa foi cumprida
    if (nome == "Alice"){
        // promessa cumprida
        // programa rodou dentro dos padrões
        resolve ("O usuário foi encontrado!")
        // promessa quebrada
        // rejectd(reason) = motivo pelo qual a promessa foi quebrada
    }else {
        reject ("O usuário não é a Alice")
    }
})    
// o problema foi resolvido ou não?

// entao imprima o que tem nela e imprima no console. Está sendo salvo na palavra resultado
// promessa.entao (faça =>{algo})
// then = roda o programa esperando os resultados programados
promessa.then((resultado) => {
    console.log(resultado)
})

// promessa.entao (faça => {algo esperado})
// usado mais em testes
// catch = roda o programa esperando todos os resultados não esperados (Erros, rejects)
promessa.catch((resultado) =>{
    console.log(resultado)
})


function codigoDmorado(){
    return new Promise ((resolve) => {
        // coloqueUmTempo (faça {algo}, emQuantoTempo)
        setTimeout(() => {
            console.log ("Enrolei")
            resolve()
        },2000) //cotagem em milisegundos = 2 segundos
    })
}
// assíncrono  = le o código em ordem, se uma linha demorar, igrnora ou roda após a ordem correta
// síncrona = le o código em orde, se tiver a capacidade de esperar um processo para aontecer para continuar a leituta

async function carregando (){
    // depois de 2 segundos vai mandar a mensagem "enrolei"
    // tem que chamar a função
    console.log("Comecei")
    // ler o código, deixar carregar e depois imprimir
    // await - aguarde m processo ser concluído, antes de continuar a leitura do código
    await codigoDmorado()
    console.log("Terminei")
}
carregando()
