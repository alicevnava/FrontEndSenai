Algoritmo "prova1"

//Escreva um algoritmo com ENQUANTO que permita a leitura das notas de uma turma de 5 alunos.
//Calcular a média da turma e contar quantos alunos obtiveram nota acima desta média calculada.
//Escrever a média da turma e o resultado da contagem

Var
notas: vetor[1..5] de real
contador, alunos: inteiro
soma, nota, media: real
Inicio
escreval ("------ NOTA ALUNOS ------")
escreval ("")

soma <- 0
contador <- 1
alunos <- 0

// leitura de notas
enquanto contador <= 5 faca
         escreva ("Digite a nota do aluno ", contador,": ")
         leia (notas [contador])
         soma <- (soma + notas[contador])
         contador <- contador+1
fimenquanto
limpatela ()

// média
media <- soma/5

//maior que a média
contador <- 1
enquanto contador <= 5 faca
         se (notas[contador] > media) entao
            alunos <- alunos+1
         fimse
         contador<-contador+1
fimenquanto

// exibição
escreval ("A média da turma é: ", media)
escreval (alunos, " alunos tiveram nota acima da média")

Fimalgoritmo