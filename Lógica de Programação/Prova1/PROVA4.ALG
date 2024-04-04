Algoritmo "prova4"

Var
filhos, somafilhos, contador, habitantes, contadormenor: inteiro
salario, somasalario, mediasalario, mediafilhos, percentual, maior: real

Inicio
escreval ("******** IBGE ********")
escreval ("")
limpatela ()

//habitantes
escreva("Informe o número de habitantes: ")
leia(habitantes)
limpatela()

somasalario <- 0
somafilhos <- 0
maior <- 0
contador <- 0
contadormenor<-0

//salario
para contador de 1 até habitantes passo 1 faça
     escreva("Informe o salário do habitante ", contador, ": R$ ")
     leia(salario)
se salario > maior então
   maior <- salario
fimse
//filhos
escreva("Informe a quantidade de filhos do habitante ", contador, ": ")
     leia(filhos)
somasalario <- somasalario+salario
somafilhos <- somafilhos+filhos
fimpara
limpatela()

//media
se habitantes > 0 então
        mediasalario <- somasalario / habitantes
        mediafilhos <- somafilhos / habitantes
    senão
        mediasalario <- 0
        mediafilhos <- 0
fimse

//percentual
 se (habitantes > 0) então
        percentual <- (contadormenor * 100.0) /habitantes
    senão
        percentual <- 0
 fimse
 
 //exibição
 escreval(" Média de salário da população: R$ ", mediasalario)
 escreval(" Média do número de filhos: ", mediafilhos)
 escreval(" Maior salário dos habitantes: ", maior)
 escreval("Percentual de pessoas com salário menor que R$ 150,00: ", percentual, "%")



Fimalgoritmo