var id = localStorage.getItem("news");
$.ajax({
    url: "/api/news/" + id,
    contentType: "application/json; charset=utf-8",
    method: "GET",
    success: function (result) {
        $("#newInfo").empty();
        $("#newInfo").append(
            "<label>" + result.location + " </label><br>" +
            "<label>" + result.title + " </label><br>" +
            "<label>" + result.introduction + " </label><br>" +
            "<label>" + result.news + " </label><br>" +
            "<label>" + result.date + " </label><br>" +
            "<label>" + result.category + " </label><br>" +
            "<br>"
        );
        showPics(result.idNews);
        $("#actionsPics").append(
            "<br>" +
            "<form id='picForm' action='/api/uploadimage/" + result.idNews + "' enctype='multipart/form-data' method='post'>" +
            "<input type='file' id='imageFile' name='imageFile'>" +
            "<input type='submit' id='summitPic' value='Subir foto'>" +
            "</form><br><br>" +
            "<button onclick='postNews(" + result.idNews + ")'>Publicar Noticia</button>"+
            "<button onclick='finishNew()'>Finalizar</button>"
        )
    }
})

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

function showPics(id){
    $.ajax({
        url: "/api/news/pics/" + id,
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            $("#newsPics").empty();
            for(x=0;x<result.length;x++){
                if(result[x].type == "image"){
                    $("#actionsPics").append(
                        "<image width='320' height='240' src='/api/uploadimage/videoTest/" + result[x].idImage + "'>"
                    )
                }else if(result[x].type == "video"){
                    $("#actionsPics").append(
                        "<video width='320' height='240' controls>" +
                        "<source src='/api/uploadimage/videoTest/" + result[x].idImage + "'>" +
                        "</video>"
                    )
                }

            }
        }
    })
}

function postNews(id) {
    $.ajax({
        url: "/api/news/" + id,
        data: JSON.stringify({
            "posted":"si"}),
        contentType: "application/json; charset=utf-8",
        method: "POST",
        success: function () {
            window.alert("Noticia publicada con exito");
            window.location.href="/";
        }
    })
}

function finishNew() {
    window.alert("Noticia confirmada con exito");
    window.location.href="/";
}

