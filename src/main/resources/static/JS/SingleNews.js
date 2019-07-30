$( document ).ready()
{
    var url = "www.gestiondigital1.net"+location.pathname;
    var id = localStorage.getItem("idNews");
    if(location.pathname=="/noticias/"+id){
    $.ajax({
        url: "/api/news/" + id,
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            $("#newsCategory").empty();
            $("#newsCategory").append(
                "<span>"+result.category+"</span> <span>"+result.date+"</span>"
            );
            $("#newsTitle").empty();
            $("#newsTitle").append(
                result.title
            );
            $("#newsIntroduction").empty();
            $("#newsIntroduction").append(
                result.introduction
            );
            $("#newsNews").empty();
            $("#newsNews").append(
                result.news
            );
            $("#newsLocation").empty();
            $("#newsLocation").append(
                result.location
            );
            showPics(result.idNews);
        }
    })
    }else if(location.pathname=="/noticias/modificar/"+id){
        $.ajax({
            url: "/api/news/" + id,
            contentType: "application/json; charset=utf-8",
            method: "GET",
            success: function (result) {
                $("#test").append(
                    "<input id='newsLocation' value='" + result.location + " '><br>" +
                    "<input id='newsTittle' value='" + result.title + "'><br>" +
                    "<input id='newsIntro' value='" + result.introduction + "'><br>" +
                    "<input id='newsNews' value='" + result.news + "'><br>" +
                    "<input id='newsCategory' value='" + result.category + "'><br>" +
                    "<select id='newsLevel' placeholder='Importancia'>" +
                    "<option value='NORMAL'>Normal</option>"+
                    "<option value='IMPORTANTE'>Importante</option>"+
                    "</select><br>"+
                    "<label>Esta noticia " + result.posted + " se encuentra publicada - Cambiar?</label>" +
                    "<select id='newsPosted' placeholder='Importancia'>" +
                    "<option value='no'>NO</option>"+
                    "<option value='si'>SI</option>"+
                    "</select><button onclick='postNews(" + result.idNews + ")'>Cambiar</button><br>"+
                    "<br><div id='newsPics'></div><br>" +
                    "<form id='picForm' action='/api/uploadimage/updatepic/" + result.idNews + "' enctype='multipart/form-data' method='post'>" +
                    "<input type='file' id='imageFile' name='imageFile'>" +
                    "<input type='submit' id='summitPic' value='Subir foto'>" +
                    "</form><br><br>" +
                   "<button id='summitButton' onclick='updateNews("+ result.idNews +")'>Modificar Noticia</button>" +
                    "<br>"
                );
                showPicsWithButton(result.idNews);
            }
        })
    }

    function showPics(id) {
        /*$.ajax({
            url: "/api/news/pics/" + id,
            contentType: "application/json; charset=utf-8",
            method: "GET",
            success: function (result) {
                $("#Slider").empty();
                for (x = 0; x < result.length; x++) {
                    if (result[x].type == "image") {
                        $("#Slider").append(
                            "<img src='/api/uploadimage/videoTest/" + result[x].idImage + "'>"
                        );
                    } else if (result[x].type == "video") {
                        $("#newsPics").append(
                            "<video width='320' height='240' controls>" +
                            "<source src='/api/uploadimage/videoTest/" + result[x].idImage + "'>" +
                            "</video>"
                        )
                    }
                }
            }
        })*/
        $.ajax({
            url: "/api/news/pics/" + id,
            contentType: "application/json; charset=utf-8",
            method: "GET",
            success: function (result) {
                $("#Slider").empty();
                if (result[0].type == "image") {
                    $("#Slider").append(
                        "<img src='/api/uploadimage/videoTest/" + result[0].idImage + "'>"
                    );
                } else if (result[0].type == "video") {
                    $("#newsPics").append(
                        "<video width='320' height='240' controls>" +
                        "<source src='/api/uploadimage/videoTest/" + result[0].idImage + "'>" +
                        "</video>"
                    )
                }
            }
        })

    }
    //----------------------------------------------------------
    //For slider
    $("#Next").click(function(){
        $("#Slider").append($("#Slider img:first-of-type"));
    });

    $("#Prev").click(function(){
        $("#Slider").prepend($("#Slider img:last-of-type"));
    });




    //--------------------------------------------------------

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
                            "<image width='320' height='240' src='/api/uploadimage/videoTest/" + result[x].idImage + "'>" +
                            "<button id='summitButton' onclick='removePic("+ id + ","+ result[x].idImage +")'>Quitar foto</button>"
                        )
                    } else if (result[x].type == "video") {
                        $("#newsPics").append(
                            "<video width='320' height='240' controls>" +
                            "<source src='/api/uploadimage/videoTest/" + result[x].idImage + "'>" +
                            "</video>" +
                            "<button id='summitButton' onclick='removePic("+ id + ","+ result[x].idImage +")'>Quitar foto</button>"
                        )
                    }

                }
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
                "level":$("#newsLevel").val()}),
            contentType: "application/json; charset=utf-8",
            method: "PUT",
            success: function (result) {
                localStorage.setItem("news", result.idNews)
                window.location.href="/noticias/"+result.idNews;
            }
        })
    }

    function removePic(id,x){
        $.ajax({
            url: "/api/uploadimage/" + id + "/" + x,
            contentType: "application/json; charset=utf-8",
            method: "GET",
            success: function (result) {
                $("#test").empty();
                $("#test").append(
                    "<input id='newsLocation' value='" + result.location + " '><br>" +
                    "<input id='newsTittle' value='" + result.title + "'><br>" +
                    "<input id='newsIntro' value='" + result.introduction + "'><br>" +
                    "<input id='newsNews' value='" + result.news + "'><br>" +
                    "<input id='newsCategory' value='" + result.category + "'><br>" +
                    "<select id='newsLevel' placeholder='Importancia'>" +
                    "<option value='NORMAL'>Normal</option>"+
                    "<option value='IMPORTANTE'>Importante</option>"+
                    "</select>"+
                    "<br><div id='newsPics'></div><br>" +
                    "<form id='picForm' action='/api/uploadimage/updatepic/" + result.idNews + "' enctype='multipart/form-data' method='post'>" +
                    "<input type='file' id='imageFile' name='imageFile'>" +
                    "<input type='submit' id='summitPic' value='Subir foto'>" +
                    "</form><br><br>" +
                    "<button id='summitButton' onclick='updateNews("+ result.idNews +")'>Modificar Noticia</button>" +
                    "<br>"
                );
                showPicsWithButton(result.idNews);
            }
        })
    }

    $("#picForm").submit(function(e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: url,
            data: form.serialize(), // serializes the form's elements.
            processData: false, //prevent jQuery from automatically transforming the data into a query string
            contentType: false,
            cache: false,
            success: function(result){

            }
        });
    })

    function postNews(id) {
        $.ajax({
            url: "/api/news/" + id,
            data: JSON.stringify({
                "posted":"si"}),
            contentType: "application/json; charset=utf-8",
            method: "POST",
            success: function (result) {
                $("#test").empty();
                $("#test").append(
                    "<input id='newsLocation' value='" + result.location + " '><br>" +
                    "<input id='newsTittle' value='" + result.title + "'><br>" +
                    "<input id='newsIntro' value='" + result.introduction + "'><br>" +
                    "<input id='newsNews' value='" + result.news + "'><br>" +
                    "<input id='newsCategory' value='" + result.category + "'><br>" +
                    "<select id='newsLevel' placeholder='Importancia'>" +
                    "<option value='NORMAL'>Normal</option>"+
                    "<option value='IMPORTANTE'>Importante</option>"+
                    "</select><br>"+
                    "<label>Esta noticia " + result.posted + " se encuentra publicada - Cambiar?</label>" +
                    "<select id='newsPosted' placeholder='Importancia'>" +
                    "<option value='no'>NO</option>"+
                    "<option value='si'>SI</option>"+
                    "</select><button onclick='postNews(" + result.idNews + ")'>Cambiar</button><br>"+
                    "<br><div id='newsPics'></div><br>" +
                    "<form id='picForm' action='/api/uploadimage/updatepic/" + result.idNews + "' enctype='multipart/form-data' method='post'>" +
                    "<input type='file' id='imageFile' name='imageFile'>" +
                    "<input type='submit' id='summitPic' value='Subir foto'>" +
                    "</form><br><br>" +
                    "<button id='summitButton' onclick='updateNews("+ result.idNews +")'>Modificar Noticia</button>" +
                    "<br>"
                );
                showPicsWithButton(result.idNews);
            }
        })
    }

}