


// função faz analise se foi devolvido ou alugado
function alterarStatusMonopoly(){

    // função que faz o fundo ficar escuro
function mudaFundoParaEscuro(){
    let fundo = document.getElementById('fundo');
    let fundoBotao = document.getElementById('botaoMonopoly');

    fundo.className = 'dashboard__item__img--rented';
    fundoBotao.className = 'dashboard__item__button dashboard__item__button--return';
}

// função que faz o fundo ficar claro e o botão fica azul novamente
function mudaFundoParaClaro(){
    let fundo = document.getElementById('fundo');
    let fundoBotao = document.getElementById('botaoMonopoly');


    fundo.classList.remove('dashboard__item__img--rented');     
    fundoBotao.classList.remove('dashboard__item__button--return');
}


    let link = document.getElementById('botaoMonopoly');
    // alteraçaõ do status do botao
    if(link.innerHTML === 'Alugar'){
        link.innerHTML = 'Devolver';
        mudaFundoParaEscuro();
        
        
    }else{
        link.innerHTML = 'Alugar'
        mudaFundoParaClaro();  

    }
}





function alterarStatusRide(){

   

    let link = document.getElementById('botaoRide');
    // alteraçaõ do status do botao
    if(link.innerHTML === 'Alugar'){
        link.innerHTML = 'Devolver';
        mudaFundoParaEscuro();
        
    }else{
        link.innerHTML = 'Alugar'
        
    }

}


