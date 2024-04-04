Algoritmo "estoqueloja"

Var
mercadoria: vetor[1..3] de caractere //armazena até 10 nomes de filmes
valor: vetor[1..3] de real
contador: inteiro
total, media: real

Inicio
para contador <- 1 ate 3 faca //vai pedir 3 mercadoria e cada um vai ser na posição do vetor de 1 a 3
     escreval ("Digite qual a mercadoria", contador)
     leia  (mercadoria[contador])//vai colocar o nome da mercadoria na posição do contador
     escreval ("Qual o valor da mercadoria? ", mercadoria[contador])
     leia (valor[contador])
     limpatela ()
     total <- total+valor[contador]
fimpara
escreval ("O total é: R$", total)

Fimalgoritmo