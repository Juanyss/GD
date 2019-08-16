$( document ).ready()
{
    $.ajax({
        url: "/api/news/" + window.location.href.split('/')[4],
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            $("#newInfo").empty();
            $("#newInfo").append(
                "<h2>Subir fotos</h2><br>" +
                "<p><b>Lugar: </b>" + result.location + " <br>" +
                "<b>Titulo: </b>" + result.title + " <br>" +
                "<b>Bajada: </b>" + result.introduction + " <br>" +
                "<b>Noticia: </b>" + result.news + " <br>" +
                "<b>Categoria: </b>" + result.category + " <br>" +
                "<b>Importancia: </b>" + result.level + " <br>" +
                "Esta noticia <b>" + result.posted.toUpperCase() + "</b> se encuentra publicada</p><br><br>" +
                "<br>"
            );
            showPicsWithButton(result.idNews);
            $("#actionsPics").append(
                "<br><div class='line'></div><br>" +
                "<form id='picForm' action='/api/uploadimage/update/" + result.idNews + "' enctype='multipart/form-data' method='post'>" +
                "<input type='file' id='imageFile' name='imageFile'><br>" +
                "<input class='formBtn' type='submit' id='summitPic' value='Subir foto'>" +
                "</form>"
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
}
