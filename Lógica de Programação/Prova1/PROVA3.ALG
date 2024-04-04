Algoritmo "prova3"

Var
conta: inteiro
saldo, debito, credito, atual: real

Inicio
escreval ("******** CONTA BANCÁRIA ********")
escreval ("")
limpatela ()

escreval ("Número da conta: ")
leia (conta)

escreval ("Qual seu saldo: R$ ")
leia (saldo)

escreval ("Valor do débito? R$ ")
leia (debito)

escreval ("Valor do crédito? R$ ")
leia (credito)
limpatela()
 
atual <- saldo - debito+credito

limpatela()

//positivo ou negativo
se (atual >= 0) entao
   escreval ("SALDO POSITIVO")
   senao
        escreval ("SALDO NEGATIVO")
fimse

escreval("O saldo atual da conta", conta, " é: R$ ", atual)
Fimalgoritmo