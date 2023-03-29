function carregarPersonagem(nome){
    carregarConteudo('personagens/personagens.html'); 
    dadosPersonagem(nome);
}

function exibirHumanos(){
    $('#humanos').addClass('container-principal');
    $('#humanos').show();

    $('#deuses').removeClass('container-principal');
    $('#deuses').hide();
}

function exibirDeuses(){
    $('#deuses').addClass('container-principal');
    $('#deuses').show();

    $('#humanos').removeClass('container-principal');
    $('#humanos').hide();
}