// COM ESSE CLASS PODEREMOS MONTAR O OBJETO COM AS SUAS CARACTERISTICAS (COMO  VIDA, DANO , NOME ETC). E SEUS METODOS (COMO ATACAR, CURAR OU RESSUCITAR)
class Personagem {
    constructor(id,nome,imgSrc,vidaMax,dano,itemPrincipal){
        this.id = id;
        this.nome = nome;
        this.imgSrc = imgSrc;
        this.vida = vidaMax;
        this.vidaMax = vidaMax;
        this.dano = dano;
        this.nivel = 0;
        this.xp = 0;
        // ARRAY PARA PODER TERMOS UMA LISTA DE POSSIVEIS ITENS AO PERSONAGEM!
        this.items = [itemPrincipal];

        // *************************************************************************************
        // TODOS OS METODOS TERÃO UM IDENTIFICADOR EM QUEM AQUELA AÇÃO ESTÁ ACONTECENDO, OU NO PLAYER( PERSONAGEM 0 ) OU NO ADVERSÁRIO ( PERSONAGEM 1 )

        // *************************************************************************************
        // AO MORRER, POR PADRÃO NESSA EXPLICAÇÃO ELE IRÁ RESSUCITAR PARA QUE O JOGADOR TENTE NOVAMENTE OU O ADVERSÁRIO RE APAREÇA PARA QUE A LUTA CONTINUE
        this.morrer = function(alvo){
            this.ressucitar(alvo);
        }
        
        // *************************************************************************************
        // AO RESSUCITAR O JOGADOR OU O ADVERSÁRIO TERÃO A SUA VIDA PREENCHIDA COM A VIDA MÁXIMA 
        this.ressucitar = function(alvo){
            personagens[alvo].vida = personagens[alvo].vidaMax
            listarEstatisticas();
        }

        // *************************************************************************************
        // AO ATACAR NÓS INFORMAMOS QUEM É O ATACANTE, CASO 0 O PLAYER ATACARÁ O ADVERSÁRIO, CASO 1, O ADVERÁRIO ATACARÁ O PLAYER, CASO A VIDA CHEGUE A 0, O SUJEITO IRÁ MORRER E DAR XP A QUEM MATOU ( XP VEM DA EXPERIENCIA DO SUJEITO PARA ESTAR POSTERIORMENTE EVOLUINDO)
        this.atacar = function(atacante){
            if(atacante == 0){
                this.sofrerDano(this.dano, 0);
                if(personagens[1].vida <= 0){
                    this.morrer(1)
                    this.ganharXp(5);
                }
                // LISTAR ESTATICAS PARA ESTARMOS ATUALIZANDO A TELA COM AS NOVAS INFORMAÇÕES!
                listarEstatisticas();  
            }else{
                this.sofrerDano(this.dano, 1);
                if(personagens[0].vida <= 0){
                    this.morrer(0)
                    this.ganharXp(5);
                }
                // LISTAR ESTATICAS PARA ESTARMOS ATUALIZANDO A TELA COM AS NOVAS INFORMAÇÕES!
                listarEstatisticas();
            }

        }

        // *************************************************************************************
        // AO CHAMAR CURA, INFORMAMOS QUANTO DE CURA O USUÁRIO RECEBERÁ, CASO A VIDA FOR 0, VOLTAREMOS O PERSONAGEM A VIDA E CASO ELE TENHA VIDA, ACRECENTAMOS QUANTO QUE ELE PODE ESTAR SE RECUPERANDO
        this.curar = function(cura){
            if(this.vida == 0){
                this.ressucitar(this.id);
            }else if(this.vida < this.vidaMax){
                this.vida += cura;
                listarEstatisticas();
            }
                
        }

        // *************************************************************************************
        // AO CHAMAR GANHARXP, O PERSONAGEM DE ACORDO COM O TEMPO PODE GANHAR MAIS EXPERINCIA, BASEADO NISSO ELE PODE ESTAR GANHANDO NÍVEIS PARA FICAR MAIS FORTE
        this.ganharXp = function(xp){
            this.xp += xp;
            this.evoluir();
            listarEstatisticas();
        }

        // *************************************************************************************
        // NA FUNÇÃO EVOLUIR, PODEMOS AUMENTAR O NÍVEL DO PERSONAGEM DANDO A ELE MAIS VIDA, MAIS DANO OU UM NOVO ITEM PARA SER UTILIZADO EM SUA JORNADA

        this.evoluir = function(){
            if(this.xp == 10){
                this.nivel += 1;
                this.dano = 3
            }else if(this.xp == 20){
                this.nivel += 1;
                this.dano = 5
                this.items.push("Arco");
            }else if(this.xp == 50){
                this.nivel += 1;
                this.dano = 15
            }
            listarEstatisticas();
        }

        // *************************************************************************************
        // SOFRER DANO, TIRA A VIDA DO PERSONAGEM, SENDO QUE PRIMEIRO INFORMAMOS QUANTO ELE SOFREU E LOGO APÓS QUEM FOI O ALVO DESSE DANO
        
        this.sofrerDano = function(danoSofrido,alvo){
            if(alvo == 0){
                alvo = 1;
            }else{
                alvo = 0
            }

            personagens[alvo].vida -= danoSofrido;

            if(personagens[alvo].vida <= 0){
                personagens[alvo].vida = 0;
                listarEstatisticas(); 
            }else{
                listarEstatisticas();
            }
        }
    }
}

// *************************************************************************************
// LISTA DE PERSONAGENS DENTRO DO JOGO ( POR PADRÃO ESTARÁ VAZIO)
var personagens = [];

// *************************************************************************************
// ONDE OS PERSONAGENS SÃO CRIADOS E INSERIDOS DENTRO DA LISTA!
personagens.push(new Personagem(0,"Link do Zelda","images/normal.svg",10,1,"Espada"));
personagens.push(new Personagem(1,"Monstro","images/inimigo.svg",10,1,"Bastão"));

// *************************************************************************************
// listar personagens ao iniciar a página
listarEstatisticas();