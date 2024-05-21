const usuarioCadastrado = "ADM"
const senhaCadastrada = "ADM"

function repetirPergunta(){
    while (usuario !== usuarioCadastrado || senha !== senhaCadastrada){
        alert("Usuário ou senha incorretos");
        usuario = prompt("Digite o usuário");
        senha = prompt("Digite a senha");
    }
}
// caso usuário acerte --> logar. Caso contrário, vai repetir até a pessoa acertar

var usuario = prompt("Digite o usuário");  //pessoas digita
var senha =  prompt("Digite a senha");
repetirPergunta();


alert ("Seja bem-vindo!");