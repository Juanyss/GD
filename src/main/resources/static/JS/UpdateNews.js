$( document ).ready()
{
    $.ajax({
        url: "/api/news/" + window.location.href.split('/')[5],
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            $("#newsInfo").empty();
            $("#newsInfo").append(
                "<h2>Actualizar noticia</h2><br>" +
                "<p><b>Lugar: </b><input id='newsLocation' type='text' value='" + result.location + " '></p><br>" +
                "<p><b>Titulo: </b><input id='newsTittle' type='text' value='" + result.title + " '></p><br>" +
                "<p><b>Bajada: </b><textarea id='newsIntro'  type='text' rows='4' cols='50' >" + result.introduction + "</textarea><br></p><br>" +
                "<p><b>Noticia: </b><textarea id='newsNews' type='text' rows='10' cols='50' >" + result.news + "</textarea></p><br><br>" +
                "<p><b>Categoria: </b><input id='newsCategory' type='text' value='" + result.category + " '></p><br>" +
                "<p><b>Importancia: </b><select id='newsLevel'>" +
                "</select></p><br>" +
                "<p>Esta noticia <b>" + result.posted.toUpperCase() + "</b> se encuentra publicada <br>" +
                "<b>Estado de la publicacion: </b><select id='newsPost'>" +
                "</select></p><br>" +
                "<br>"
            );
            if(result.level == "NORMAL"){
                $("#newsLevel").append(
                    "<option value='NORMAL' selected>Normal</option>" +
                    "<option value='IMPORTANTE'>Importante</option>"
                )
            }else if(result.level == "IMPORTANTE"){
                $("#newsLevel").append(
                    "<option value='NORMAL' >Normal</option>" +
                    "<option value='IMPORTANTE' selected>Importante</option>"
                )
            }
            if(result.posted == "si"){
                $("#newsPost").append(
                    "<option value='si' selected>Publicar</option>" +
                    "<option value='no'>No publicar todavia</option>"
                )
            }else if(result.posted == "no"){
                $("#newsPost").append(
                    "<option value='si' >Publicar</option>" +
                    "<option value='no' selected>No publicar todavia</option>"
                )
            }
            //showPicsWithButton(result.idNews);
            $("#actionsPics").append(
                "<div class='line'></div><br>"+
                "<button class='formBtn' onclick='updateNews(" + result.idNews + ")'>Actualizar noticia</button><br><br>"
            )
        }
    })

    $("#picForm").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: url,
            data: form.serialize(), // serializes the form's elements.
            processData: false, //prevent jQuery from automatically transforming the data into a query string
            contentType: false,
            cache: false,
            success: function (result) {

            }
        });
    })

    function showPicsWithButton(id) {
        $.ajax({
            url: "/api/news/pics/" + id,
            contentType: "application/json; charset=utf-8",
            method: "GET",
            success: function (result) {
                $("#newsPics").empty();
                for (x = 0; x < result.length; x++) {
                    if (result[x].type == "image") {
                        $("#newsPics").append(
                            "<br><image width='320' height='240' src='/api/uploadimage/videoTest/" + result[x].idImage + "'><br>" +
                            "<button class='formBtn' id='summitButton' onclick='removePic(" + id + "," + result[x].idImage + ")'>Quitar foto</button>"
                        )
                    } else if (result[x].type == "video") {
                        $("#newsPics").append(
                            "<video width='320' height='240' controls>" +
                            "<source src='/api/uploadimage/videoTest/" + result[x].idImage + "'>" +
                            "</video>" +
                            "<button id='summitButton' onclick='removePic(" + id + "," + result[x].idImage + ")'>Quitar foto</button>"
                        )
                    }

                }
            }
        })
    }

    function removePic(id, x) {
        $.ajax({
            url: "/api/uploadimage/" + id + "/" + x,
            contentType: "application/json; charset=utf-8",
            method: "GET",
            success: function (result) {
                $("#test").empty();
                $("#test").append(
                    "<p><b>Lugar: </b>" + result.location + " </p><br><br>" +
                    "<p><b>Titulo: </b>" + result.title + " </p><br><br>" +
                    "<p><b>Bajada: </b>" + result.introduction + " </p><br><br>" +
                    "<p><b>Noticia: </b>" + result.news + " </p><br><br>" +
                    "<p><b>Categoria: </b>" + result.category + " </p><br><br>" +
                    "<p><b>Importancia: </b>" + result.level + " </p><br><br>" +
                    "<p>Esta noticia <b>" + result.posted.toUpperCase() + "</b> se encuentra publicada</p><br><br>" +
                    "<br>"
                );
                showPicsWithButton(result.idNews);
            }
        })
    }

    function updateNews(id) {
        $.ajax({
            url: "/api/news/"+id,
            data: JSON.stringify({
                "location":$("#newsLocation").val(),
                "title": $("#newsTittle").val(),
                "introduction":$("#newsIntro").val(),
                "news": $("#newsNews").val(),
                "category":$("#newsCategory").val(),
                "posted":$("#newsPost").val(),
                "level":$("#newsLevel").val()}),
            contentType: "application/json; charset=utf-8",
            method: "PUT",
            success: function (result) {
                window.alert("Se actualizo la noticia");
                window.location.href="/noticias/"+result.idNews;
            }
        })
    }
}