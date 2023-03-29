var FormSignin = document.querySelector('#signin')
var FormSignup = document.querySelector('#signup')
var bntColor = document.querySelector('.bntColor')

document.querySelector('#bntSignin')
    .addEventListener('click', () => {
        FormSignin.style.left = "25px"
        FormSignup.style.left = "450px"
        bntColor.style.left = "0px"
})

document.querySelector('#bntSignup')
    .addEventListener('click', () => {
        FormSignin.style.left = "-450px"
        FormSignup.style.left = "25px"
        bntColor.style.left = "110px"
}) 

function home(){ 
   carregarConteudo('principal.html'); 
}


function logar(){

    var Email = document.getElementById('login').value;
    var Senha = document.getElementById('senha').value;
    
    if(Email == 'dudu' && Senha == 'dudu'){
        carregarConteudo('principal.html');
        $('#main-index').removeClass('conteudo-principal')

        $('#menu').html("<img class='imagem-principal' src='imagens/logo.png'> <ul class='nav-list'>"+
        "<li><a href='#' onclick='home()'>Inicio</a></li>"+
        "<li><a href='#' onclick='carregarConteudo('pagina2.html')'>Sobre</a></li>"+
        "<li><a href='#' onclick='carregarConteudo('pagina3.html')'>Mangá</a></li></ul>");
        $('#footer-criador').show();

       
    }else{
        alert('Usuário ou senha incorretos');
    }


}

