// APRESENTAR AS INFORMAÇÕES DOS PERSONAGENS NA TELA
function listarEstatisticas(){
    let main = document.querySelector("main");
    main.innerHTML = "";

    personagens.forEach((element) =>{
        main.innerHTML += `
        <div class="personagensInfo">
            <img src=${element.imgSrc} id=${element.nome} alt="">
            <div class="personagens">
                <p>🙂 Nome : ${element.nome}</p>
                <p>❤️ Vida : ${element.vida} / ${element.vidaMax}</p>
                <p>⚔️ Dano : ${element.dano}</p>
                <p>🎒 Items : ${element.items}</p>
                <p>🌟 Nivel : ${element.nivel}</p>
                <p>💫 XP : ${element.xp}</p>
                <button id="atacar" onclick="atacar(${element.id})">💣ATACAR</button>
                <button id="curar" onclick="curar(${element.id})">🩹CURAR</button>
            </div>
        </div>`
    });
}
