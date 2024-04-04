Algoritmo "numero_negativo"

Var
contador, valor, negativo: real

Inicio
contador <- 1
negativo <- 0
repita
      escreval ("Escreva o ", contador, "º valor")
      leia (valor)
      se valor < 0 entao
         negativo <- negativo +1
      fimse
      contador <- contador +1
ate contador > 10
escreval ("A quantidade de nagativos é: ", negativo)

Fimalgoritmo