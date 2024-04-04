Algoritmo "prova2"


Var
horas,salariohora, base, extras, total: real

Inicio
escreval ("------ SALÁRIO ------")
escreval ("")
escreval ("Bem vindo! Vamos calcular seu salário do mês?")
limpatela()

//horas trabalhadas
escreval("Quantas horas você trabalhou esse mês?")
leia(horas)

//valor hora
escreval("Qual seu salário por hora? R$")
leia(salariohora)

//calculo salario
base <- 40*4*salariohora
limpatela()

//horas extras & total
se (horas>40*4) entao
   extras <- horas - 40 * 4
   total <- base + (extras * salariohora * 1.5)
   senao
        total <- base
fimse

//exibição
escreval ("Seu salário esse mês é: R$", total)
Fimalgoritmo