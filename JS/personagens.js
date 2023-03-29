function clickAccordion(t){
    var pai = document.getElementsByClassName('accordion-titulo')[t].parentElement;
    var img = document.getElementsByClassName('icon')[t];
    var conteudo = pai.lastElementChild.classList.contains('hide');
    

    if( conteudo == true){
        pai.lastElementChild.className = "show";
        img.style.transform ="rotate("+90+"deg)";
    }else{
        pai.lastElementChild.className = "hide";
        img.style.transform ="rotate("+0+"deg)";
    }
}

function dadosPersonagem(nome){

    $.getJSON("json/personagens.json", function( data ) {

        $.each(data,function(key,item){

            console.log(item);

       
        // var tPersonagem = item.titulo;//(data[0]['titulo']);
        // var nPersonagem = (data[0]['nome']);
        // var iPersonagem = (data[0]['Idade']);
        // var sPersonagem = (data[0]['Sexo']);
        // var cPersonagem = (data[0]['Classe']);
        // var aPersonagem = (data[0]['Altura']);
        // var oPersonagem = (data[0]['Objetivos']);
        // var obraPersonagem = (data[0]['Obra']);
        // var vitPersonagem = (data[0]['Vitoria']);
        // var derrPersonagem = (data[0]['Derrota']);
        // var empPersonagem = (data[0]['Empate']);
        // var imgSttPersonagem = (data[0]['ImagemStatus']);
        // var aparenPersonagem = (data[0]['TextoAparencia']);
        // var histoPersonagem = (data[0]['TextoHistoria']);
        // var textRodadaPersonagem = (data[0]['TitutoRagnarokRodada']);
        // var rag1Personagem = (data[0]['RagnarokP1']);
        // var titRag1Personagem = (data[0]['TituloRagnarok1']);
        // var imgRag1Personagem = (data[0]['ImagemRagnarok1']);
        // var rag2Personagem = (data[0]['RagnarokP2']);
        // var imgRag2Personagem = (data[0]['ImagemRagnarok2']);
        // var titRag2Personagem = (data[0]['TituloRagnarok2']);
        // var rag3Personagem = (data[0]['RagnarokP3']);
        // var imgRag3Personagem = (data[0]['ImagemRagnarok3']);
        // var titRag3Personagem = (data[0]['TituloRagnarok3']);
        // var rag4Personagem = (data[0]['RagnarokP4']);
        // var textVolPersonagem = (data[0]['TextoVolund']);
        // var imgVolPersonagem = (data[0]['ImagemVolund']);
        // var pHistPersonagem = (data[0]['paragrafoHistoria']);
        // var imgHistPersonagem = (data[0]['ImagemHistoria']);
        // var tituloTecPersonagem = (data[0]['TituloTecnica']);
        // var imgRag4Personagem = (data[0]['ImagemRagnarok4']);
        // var textTecPersonagem = (data[0]['TextoTecnica']);
        // var imgTecPersonagem = (data[0]['ImagemTecnica']);
        // var nomePer1Personagem = (data[0]['NomePer1']);
        // var imgPer1Personagem = (data[0]['ImagemPer1']);
        // var paraP1Personagem = (data[0]['ParagPer1']);
        // var nomePer2Personagem = (data[0]['NomePer2']);
        // var imgPer2Personagem = (data[0]['ImagemPer2']);
        // var paraP2Personagem = (data[0]['ParagPer2']);
        // var nomePer3Personagem = (data[0]['NomePer3']);
        // var imgPer3Personagem = (data[0]['ImagemPer3']);
        // var paraP3Personagem = (data[0]['ParagPer3']);
        // var nomePer4Personagem = (data[0]['NomePer4']);
        // var imgPer4Personagem = (data[0]['ImagemPer4']);
        // var paraP4Personagem = (data[0]['ParagPer4']);
        // var titCurPersonagem = (data[0]['TituloCuriosidades']);
        // var imgEsb1Personagem = (data[0]['ImagemEsboco1']);
        // var parag1Personagem = (data[0]['ParagrafoCuriosidade1']);
        // var imgEsb2Personagem = (data[0]['ImagemEsboco2']);
        // var parag2Personagem = (data[0]['ParagrafoCuriosidade2']);
        // var imgEsb3Personagem = (data[0]['ImagemEsboco3']);
        // var parag3Personagem = (data[0]['ParagrafoCuriosidade3']);
        // var imgEsb4Personagem = (data[0]['ImagemEsboco4']);
        // var parag4Personagem = (data[0]['ParagrafoCuriosidade4']);
        // var imgOs3PriPersonagem1 = (data[0]['ImagemOs3Primeiros']);
        // var pOs3PriPersonagem1 = (data[0]['ParagrafoOs3Primeiros1']);
        // var imgOs3PriPersonagem2 = (data[0]['ImagemOs3Primeiros2']);
        // var pOs3PriPersonagem2 = (data[0]['ParagrafoOs3Primeiros2']);
        // var imgCocPriPersonagem1 = (data[0]['ImagemCocegas1']);
        // var paraCocPriPersonagem1 = (data[0]['ParagrafoCocegas1']);
        // var imgCocPriPersonagem2 = (data[0]['ImagemCocegas2']);
        // var paraCocPriPersonagem2 = (data[0]['ParagrafoCocegas2']);
        // var imgCocPriPersonagem3 = (data[0]['ImagemCocegas3']);
        // var paraCocPriPersonagem3 = (data[0]['ParagrafoCocegas3']);
        // var imgCocPriPersonagem4 = (data[0]['ImagemCocegas4']);
        // var paraCocPriPersonagem4 = (data[0]['ParagrafoCocegas4']);
        // var imgCocPriPersonagem5 = (data[0]['ImagemCocegas5']);
        // var paraCocPriPersonagem5 = (data[0]['ParagrafoCocegas5']);
        // var imgCrianPersonagem1 = (data[0]['ImagemCrianca1']);
        // var PaCrianPersonagem1 = (data[0]['ParagrafoCrianca1']);
        // var imgCrianPersonagem2 = (data[0]['ImagemCrianca2']);
        // var PaCrianPersonagem2 = (data[0]['ParagrafoCrianca2']);
        // var imgGaidenPersonagem = (data[0]['ImagemGaiden']);
        // var paraGaidenPersonagem = (data[0]['ParagrafoGaiden']);







        
        if(nome == item.nome){
            $('#nome-principal-titulo').text(item.titulo);
            $('#nome-personagem').text(item.nome);
            $('#idade-personagem').html("<strong>Idade: </strong>"+item.Idade);
            $('#sexo-personagem').html("<strong>Sexo: </strong>"+item.Sexo);
            $('#classe-personagem').html("<strong>Classe: </strong>"+item.Classe);
            $('#altura-personagem').html("<strong>Altura: </strong>"+item.Altura);
            $('#objetivos-personagem').html("<strong>Objetivos: </strong>"+item.Objetivo);
            $('#batalha-status').html("<p><strong>Na obra</strong> - "+item.Obra+"</p>"+
                                        "<p><strong>Vitória</strong> - "+item.Vitoria+"</p>"+
                                        "<p><strong>Derrota</strong> - "+item.Derrota+"</p>"+
                                        "<p><strong>Empate</strong> - "+item.Empate+"</p>");
            $('#img-status').attr('src',item.ImagemStatus);
            
            $('#texto-aparencia').text(aparenPersonagem);
            $('#texto-historia').text(histoPersonagem);
            $('#titulo-rodada').text(textRodadaPersonagem);
            $('#ragnarok-p1').text(rag1Personagem);
            $('#titulo-ragnarok1').html("<h2>Lu Bu e Thor colidem com armas </h2>");
            $('#img-ragnarok1').attr('src',imgRag1Personagem);
            $('#ragnarok-p2').text(rag2Personagem);
            $('#img-ragnarok2').attr('src',imgRag2Personagem);
            $('#titulo-ragnarok2').html("<h2>Lu Bu se prepara para o último golpe </h2>");
            $('#ragnarok-p3').text(rag3Personagem);
            $('#img-ragnarok3').attr('src',imgRag3Personagem);
            $('#titulo-ragnarok3').html("<h2>Lu Bu está feliz </h2>");
            $('#ragnarok-p4').text(rag4Personagem);
            $('#img-ragnarok4').attr('src',imgRag4Personagem);
            $('#texto-volund').text(textVolPersonagem);
            $('#img-volund').attr('src',imgVolPersonagem);
            $('#texto-habilidade').text(pHistPersonagem);
            $('#img-habilidade').attr('src',imgHistPersonagem);

            //Pode ter mais de um 
            $('#titutlo-tecnica').text(tituloTecPersonagem);
            $('#texto-tecnica').text(textTecPersonagem);
            $('#img-tecnica').attr('src',imgTecPersonagem);

            $('#nome-do-per1').text(nomePer1Personagem);
            $('#img-perso1').attr('src',imgPer1Personagem);
            $('#perso-p1').text(paraP1Personagem);
            $('#nome-do-per2').text(nomePer2Personagem);
            $('#img-perso2').attr('src',imgPer2Personagem);
            $('#perso-p2').text(paraP2Personagem);
            $('#nome-do-per3').text(nomePer3Personagem);
            $('#img-perso3').attr('src',imgPer3Personagem);
            $('#perso-p3').text(paraP3Personagem);
            $('#nome-do-per4').text(nomePer4Personagem);
            $('#img-perso4').attr('src',imgPer4Personagem);
            $('#perso-p4').text(paraP4Personagem);
            $('#titulo-curiosidades').text(titCurPersonagem);
            $('#img-esboco1').attr('src',imgEsb1Personagem);
            $('#parag-1').text(parag1Personagem);
            $('#img-esboco2').attr('src',imgEsb2Personagem);
            $('#parag-2').text(parag2Personagem);
            $('#img-esboco3').attr('src',imgEsb3Personagem);
            $('#parag-3').text(parag3Personagem);
            $('#img-esboco4').attr('src',imgEsb4Personagem);
            $('#parag-4').text(parag4Personagem);
            $('#img-esboco5').attr('src',imgOs3PriPersonagem1);
            $('#parag-5').text(pOs3PriPersonagem1);
            $('#img-esboco6').attr('src',imgOs3PriPersonagem2);
            $('#parag-6').text(pOs3PriPersonagem2);
            $('#img-esboco7').attr('src',imgCocPriPersonagem1);
            $('#parag-7').text(paraCocPriPersonagem1);
            $('#img-esboco8').attr('src',imgCocPriPersonagem2);
            $('#parag-8').text(paraCocPriPersonagem2);
            $('#img-esboco9').attr('src',imgCocPriPersonagem3);
            $('#parag-9').text(paraCocPriPersonagem3);
            $('#img-esboco10').attr('src',imgCocPriPersonagem4);
            $('#parag-10').text(paraCocPriPersonagem4);
            $('#img-esboco11').attr('src',imgCocPriPersonagem5);
            $('#parag-11').text(paraCocPriPersonagem5);
            $('#img-esboco12').attr('src',imgCrianPersonagem1);
            $('#parag-12').text(PaCrianPersonagem1);
            $('#img-esboco13').attr('src',imgCrianPersonagem2);
            $('#parag-13').text(PaCrianPersonagem2);
            $('#img-esboco14').attr('src',imgGaidenPersonagem);
            $('#parag-14').text(paraGaidenPersonagem);
        }
    })
    });
}
