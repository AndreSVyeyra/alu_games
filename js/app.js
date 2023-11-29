
function alterarStatusMonopoly() {
    var botao = document.getElementById("botaoMonopoly");
    var capa = document.getElementById("capaMonopoly");
   

    if (botao.innerHTML==="Alugar"){

        botao.classList.add("dashboard__item__button--return");
        capa.classList.add("dashboard__item__img--rented");

        botao.innerHTML="Devolver";

    }else{

        botao.classList.remove("dashboard__item__button--return");
        capa.classList.remove("dashboard__item__img--rented");
        botao.innerHTML = "Alugar";
    }
}

function alterarStatusBotaoRide() {
    var botao = document.getElementById("botaoRide");
    var capa = document.getElementById("capaRide");

    if  (botao.innerHTML==="Alugar"){

        botao.classList.add("dashboard__item__button--return");
        capa.classList.add("dashboard__item__img--rented");
        botao.innerHTML = "Devolver";
    }else{

        botao.classList.remove("dashboard__item__button--return");
        capa.classList.remove("dashboard__item__img--rented");
        botao.innerHTML = "Alugar"
    }

}

function alterarStatusBotaoTakenoko(){
    var botao = document.getElementById("botaoTakenoko");
    var capa = document.getElementById("capaTakenoko");

    if (botao.innerHTML==="Alugar"){

        botao.classList.add("dashboard__item__button--return");
        capa.classList.add("dashboard__item__img--rented");
        botao.innerHTML = "Devolver";

    }else{

        botao.classList.remove("dashboard__item__button--return");
        capa.classList.remove("dashboard__item__img--rented");
        botao.innerHTML = "Alugar";
    }
}