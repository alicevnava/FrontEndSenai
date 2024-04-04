Algoritmo "prova6"

Var
nomes: vetor [1..10] de caractere
busca: caractere
achar: logico
contador: inteiro


Inicio
escreval ("******** NOMES ********")
escreval ("")
limpatela ()

para contador de 1 ate 10 faca
     escreval ("Informe o nome do", contador, "ª pessoa")
     leia (nomes [contador])
fimpara
limpatela()

//buscador
 escreval ("Informe o nome para a pesquisa: ")
 leia (busca)
 achar <- falso
 para contador de 1 ate 10 faca
      se ((nomes [contador]) = busca) entao
         achar <- verdadeiro
      fimse
fimpara

//buscando
se (achar) entao
   escreva("ACHEI")
   senao
        escreval("NÃO ACHEI")
fimse

Fimalgoritmo