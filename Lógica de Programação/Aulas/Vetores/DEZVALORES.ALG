Algoritmo "dezvalores"

Var
contador: inteiro
valor: vetor [1..10] de inteiro

Inicio
para contador <- 1 ate 10 faca  //vai pedir 10 valores
       escreval ("Escreva o ", contador, "º valor")
       leia (valor[contador]) //armazena cada valor na posição respectiva
       limpatela()//apaga a cada valor a tela
fimpara
escreva("Valores digitados: ")
para contador <- 1 ate 10 faca
        escreva(valor [contador], " ")
fimpara
escreval (" ")
escreval (" ")
 escreval ("A ordem inversa dos valores é:")
//mostrar de forma inversa os valores digitados
para contador <- 10 ate 1  passo -1 faca
     escreva (valor [contador], " ")

fimpara

Fimalgoritmo