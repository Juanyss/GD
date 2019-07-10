if(location.pathname=="/noticias"){ // Bring the news with status posted
    $.ajax({
        url: "/api/news",
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            for(x=0;x<result.length;x++){
                $("#test").append(
                    "<label>" + result[x].location + " </label><br>" +
                    "<label>" + result[x].title + " </label><br>" +
                    "<label>" + result[x].introduction + " </label><br>" +
                    "<label>" + result[x].news + " </label><br>" +
                    "<label>" + result[x].date + " </label><br>" +
                    "<label>" + result[x].category + " </label><br>" +
                    "<br><div id='newsPics" + result[x].idNews + "'>" +
                    "<br>" +
                    "<button onclick='goTo("+result[x].idNews+")'>Ir a la noticia</button><br>" +
                    "<button onclick='deleteNews("+result[x].idNews+")'>Eliminar noticia</button><br>" +
                    "<button onclick='UpdateNews("+result[x].idNews+")'>Modificar noticia</button><br>"
                )
                previewPic(result[x].idNews);
            }

        }
    })
} else if(location.pathname=="/noticias/todos"){ // Bring all the news with the status not posted
    $.ajax({
        url: "/api/news/all",
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            for(x=0;x<result.length;x++){
                $("#test").append(
                    "<label>" + result[x].location + " </label><br>" +
                    "<label>" + result[x].title + " </label><br>" +
                    "<label>" + result[x].introduction + " </label><br>" +
                    "<label>" + result[x].news + " </label><br>" +
                    "<label>" + result[x].date + " </label><br>" +
                    "<label>" + result[x].category + " </label><br>" +
                    "<br><div id='newsPics" + result[x].idNews + "'>" +
                    "<br>" +
                    "<button onclick='goTo("+result[x].idNews+")'>Ir a la noticia</button><br>" +
                    "<button onclick='deleteNews("+result[x].idNews+")'>Eliminar noticia</button><br>" +
                    "<button onclick='UpdateNews("+result[x].idNews+")'>Modificar noticia</button><br>"
                )
                previewPic(result[x].idNews);
            }

        }
    })
}


function deleteNews(id) {
    $.ajax({
        url: "/api/news/" + id,
        contentType: "application/json; charset=utf-8",
        method: "DELETE",
        success: function (result) {
            $("#test").empty();
            for(x=0;x<result.length;x++){
                $("#test").append(
                    "<label>" + result[x].location + " </label><br>" +
                    "<label>" + result[x].title + " </label><br>" +
                    "<label>" + result[x].introduction + " </label><br>" +
                    "<label>" + result[x].news + " </label><br>" +
                    "<label>" + result[x].date + " </label><br>" +
                    "<label>" + result[x].category + " </label><br>" +
                    "<br><div id='newsPics" + result[x].idNews + "'>" +
                    "<br>" +
                    "<button onclick='goTo("+result[x].idNews+")'>Ir a la noticia</button><br>" +
                    "<button onclick='deleteNews("+result[x].idNews+")'>Eliminar noticia</button><br>" +
                    "<button onclick='UpdateNews("+result[x].idNews+")'>Modificar noticia</button><br>"
                );
                previewPic(result[x].idNews);
            }

        }
    })
}

function goTo(id){
    localStorage.setItem("idNews", id);
    window.location.href="/noticias/"+id;
}

function previewPic(id){
    $.ajax({
        url: "/api/news/pics/" + id,
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            $("#newsPics"+id).append(
                "<image width='320' height='240' src='/api/uploadimage/videoTest/" + result[0].idImage + "'>"
            )
        }
    })
}




