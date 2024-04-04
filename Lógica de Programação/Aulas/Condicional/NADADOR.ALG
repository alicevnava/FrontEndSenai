Algoritmo "nadador"

Var
idade: inteiro
categoria: caractere


Inicio
escreval ("Qual a idade do nadador?")
leia (idade)

se (idade < 5 ) entao
   escreval ("Ops! Ainda não pode nadar! :(")
senao
     se(idade >= 5) e (idade <= 7) entao
      escreval ("Sua categoria é: Infantil A")
senao
     se (idade >= 8) e (idade <= 11) entao
     escreval ("Sua categoria é: Infantil B")
senao
     se(idade >= 12) e (idade <= 13) entao
     escreval ("Sua categoria é: Juvenil A")
senao
     se(idade >= 14) e (idade <= 17) entao
     escreval ("Sua categoria é: Juvenil B")
senao (idade => 18) entao
      escreval ("Sua categoria é: Adulto")

FimSe
FimSe
FimSe
FimSe
FimSe

Fimalgoritmo