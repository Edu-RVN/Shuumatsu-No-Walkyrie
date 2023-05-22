var card = [];
var cardHistoria = [];
function clickAccordion(t) {
    var pai = document.getElementsByClassName('accordion-titulo')[t].parentElement;
    var img = document.getElementsByClassName('icon')[t];
    var conteudo = pai.lastElementChild.classList.contains('hide');


    if (conteudo == true) {
        pai.lastElementChild.className = "show";
        img.style.transform = "rotate(" + 90 + "deg)";
    } else {
        pai.lastElementChild.className = "hide";
        img.style.transform = "rotate(" + 0 + "deg)";
    }
}

async function dadosPersonagem(nome) {

    await $.getJSON("json/personagens.json", function (data) {

        card = [];
        cardHistoria = [];

        $.each(data, function (key, item) {

            console.log(item);



            if (nome == item.nome) {
                $('#nome-principal-titulo').text(item.titulo);
                $('#nome-personagem').text(item.nome);
                $('#idade-personagem').html("<strong>Idade: </strong>" + item.Idade);
                $('#sexo-personagem').html("<strong>Sexo: </strong>" + item.Sexo);
                $('#classe-personagem').html("<strong>Classe: </strong>" + item.Classe);
                $('#altura-personagem').html("<strong>Altura: </strong>" + item.Altura);
                $('#objetivos-personagem').html("<strong>Objetivos: </strong>" + item.Objetivos);
                $('#batalha-status').html("<p><strong>Na obra</strong> - " + item.Obra + "</p>" +
                    "<p><strong>Vitória</strong> - " + item.Vitoria + "</p>" +
                    "<p><strong>Derrota</strong> - " + item.Derrota + "</p>" +
                    "<p><strong>Empate</strong> - " + item.Empate + "</p>");
                $('#img-status').attr('src', item.ImagemStatus);
                $('#texto-aparencia').text(item.TextoAparencia);
                $('#texto-historia').text(item.TextoHistoria);
                $('#texto-volund').text(item.TextoVolund);
                $('#img-volund').attr('src', item.ImagemVolund);
                $('#texto-habilidade').html(item.ParagrafoHabilidade);
                $('#img-habilidade').attr('src', item.ImagemHabilidade);
                // $('#titulo-rodada').text(item.TitutoRagnarokRodada);
                // $('#titulo-ragnarok1').text(item.RagnarokRodada);
                // $('#img-ragnarok').attr('src',item.ImagemRodada);

                $.each(item.Historia, function (key, y) {

                    var corpoH = "<div class='ragnarok'>       " +
                        "       <div class='nome-status'>           " +
                        "           <h2 id='titulo-ragnarok1'>" + y.TituloRagnarok + "</h2> " +
                        "       </div>                              " +
                        "<div id='ragnarok-p'>                      " +
                        "              <p>" + y.RagnarokP + "</p>       " +
                        "           </div>                          " +
                        "       </div>                              " +
                        "           <img id='img-ragnarok' alt=' 'src='" + y.ImagemRagnarok + "'>";

                    cardHistoria.push(corpoH);
                });
                debugger
                $('#cartao-corpoH').html(cardHistoria);




                $.each(item.Tecnicas, function (key, x) {

                    var corpo = "<div id='cartao-habilidades'>                        " +
                        "                    <div class='poderes'>                                       " +
                        "                        <div class='nome-status'>                               " +
                        "                            <h2>Técnicas</h2>                                   " +
                        "                        </div>                                                  " +
                        "                        <h3 id='titutlo-tecnica'>" + x.TituloTecnica + "</h3>       " +
                        "                        <div id='texto-tecnica'>                                " +
                        "                            <p>" + x.TextoTecnica + "</p>                           " +
                        "                        </div>                                                  " +
                        "                    </div>                                                      " +
                        "                    <div class='cartao-imagem'>                                 " +
                        "                        <img id='img-tecnica' class='imagem-poderes' alt='' src='" + x.ImagemTecnica + "' >" +
                        "                    </div>                                                      " +
                        "                </div>                                                          ";
                    card.push(corpo);
                });
                debugger
                $('#cartao-corpo').html(card);

                //Pode ter mais de um 
                $('#titutlo-tecnica').text(item.TituloTecnica);
                $('#texto-tecnica').text(item.TextoTecnica);
                $('#img-tecnica').attr('src', item.ImagemTecnica);

                $('#nome-do-per1').text(item.NomePer1);
                $('#img-perso1').attr('src', item.ImagemPer1);
                $('#perso-p1').text(item.ParagPer1);
                $('#nome-do-per2').text(item.NomePer2);
                $('#img-perso2').attr('src', item.ImagemPer2);
                $('#perso-p2').text(item.ParagPer2);
                $('#nome-do-per3').text(item.NomePer3);
                $('#img-perso3').attr('src', item.ImagemPer3);
                $('#perso-p3').text(item.ParagPer3);
                $('#nome-do-per4').text(item.NomePer4);
                $('#img-perso4').attr('src', item.ImagemPer4);
                $('#perso-p4').text(item.ParagPer4);
                $('#titulo-curiosidades').text(item.TituloCuriosidades);
                $('#img-esboco1').attr('src', item.ImagemEsboco1);
                $('#parag-1').text(item.ParagrafoCuriosidade1);
                $('#img-esboco2').attr('src', item.ImagemEsboco2);
                $('#parag-2').text(item.ParagrafoCuriosidade2);
                $('#img-esboco3').attr('src', item.ImagemEsboco3);
                $('#parag-3').text(item.ParagrafoCuriosidade3);
                $('#img-esboco4').attr('src', item.ImagemEsboco4);
                $('#parag-4').text(item.ParagrafoCuriosidade4);
                $('#img-esboco5').attr('src', item.ImagemOs3Primeiros);
                $('#parag-5').text(item.ParagrafoOs3Primeiros1);
                $('#img-esboco6').attr('src', item.ImagemOs3Primeiros2);
                $('#parag-6').text(item.ParagrafoOs3Primeiros2);
                $('#img-esboco7').attr('src', item.ImagemCocegas1);
                $('#parag-7').text(item.ParagrafoCocegas1);
                $('#img-esboco8').attr('src', item.ImagemCocegas2);
                $('#parag-8').text(item.ParagrafoCocegas2);
                $('#img-esboco9').attr('src', item.ImagemCocegas3);
                $('#parag-9').text(item.ParagrafoCocegas3);
                $('#img-esboco10').attr('src', item.ImagemCocegas4);
                $('#parag-10').text(item.ParagrafoCocegas4);
                $('#img-esboco11').attr('src', item.ImagemCocegas5);
                $('#parag-11').text(item.ParagrafoCocegas5);
                $('#img-esboco12').attr('src', item.ImagemCrianca1);
                $('#parag-12').text(item.ParagrafoCrianca1);
                $('#img-esboco13').attr('src', item.ImagemCrianca2);
                $('#parag-13').text(item.ParagrafoCrianca2);
                $('#img-esboco14').attr('src', item.ImagemGaiden);
                $('#parag-14').text(item.ParagrafoGaiden);
            }
        })
    });
}
