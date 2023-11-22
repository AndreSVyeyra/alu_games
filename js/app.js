function alterarStatusMonopoly(){
    let link = document.getElementById('botaoMonopoly');

    if(link.innerHTML === 'Alugar'){
        link.innerHTML = 'Devolver'
    }
}