Algoritmo "prova5"

Var
v1: vetor [1..5] de inteiro
v2: vetor [1..5] de inteiro
contagem, contador: inteiro


Inicio
escreval ("******** VETORES ********")
escreval ("")
limpatela ()

contagem <- 0


contador <- 1
//V1
para contador de 1 até 5 faca
     escreval ("Digite o ", contador, "º do V1:")
     leia (v1[contador])
fimpara
limpatela()

//V2
para contador de 1 até 5 faca
     escreval ("Digite o ", contador, "º do V2:")
     leia (v2[contador])
fimpara
limpatela()

//comprarando
para contador de 1 até 5 faça
     se v1[contador] = v2[contador] então
        contagem <- contagem + 1
     fimse
fimpara

//exibição
escreval ("Há ", contagem, " números repetidos nas mesmas posições nos vetores")



Fimalgoritmo