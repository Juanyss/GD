var url = location.pathname;
if(url.match("noticias")){ // Bring the news with status posted
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
                    "<label>" + result[x].level + " </label><br>" +
                    "<br><div id='newsPics" + result[x].idNews + "'>" +
                    "<br>" +
                    "<a href='/noticias/"+result[x].idNews+"'><button>Ir a la noticia</button></a><br>"
                )
                previewPic(result[x].idNews);
            }

        }
    })
} else if(url.match("todas")){ // Bring all the news with the status not posted
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
                    "<label>" + result[x].level + " </label><br>" +
                    "<div id='newsPics" + result[x].idNews + "'>" +
                    "<br>" +
                    "<br>"
                )
                previewPic(result[x].idNews);
                $("#test").append(
                    "<button onclick='deleteNews("+result[x].idNews+")'>Eliminar noticia</button>" +
                    "<button onclick='updateNews("+result[x].idNews+")'>Modificar noticia</button>" +
                    "<a href='/updatepics/"+result[x].idNews+"'><button>Agregar o quitar fotos a esta noticia</button></a><br>" +
                    "-----------------------------------------------------------------<br>"
                )

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
                    "<label>" + result[x].level + " </label><br>" +
                    "<br><div id='newsPics" + result[x].idNews + "'>" +
                    "<br>"
                );
                previewPic(result[x].idNews);
                $("#test").append(
                    "<button onclick='deleteNews("+result[x].idNews+")'>Eliminar noticia</button>" +
                    "<button onclick='updateNews("+result[x].idNews+")'>Modificar noticia</button>" +
                    "<a href='/updatepics/"+result[x].idNews+"'><button>Agregar o quitar fotos a esta noticia</button></a><br>" +
                    "-----------------------------------------------------------------<br>"
                )
            }

        }
    })
}

function updateNews(id){
    window.location.href="/noticias/modificar/"+id;
}

function goTo(id){
    window.location.href="/noticias/"+id;
}

function previewPic(id){
    $.ajax({
        url: "/api/news/pics/" + id,
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            $("#newsPics"+id).append(
                "<image width='320' height='240' src='/api/uploadimage/videoTest/" + result[0].idImage + "'><br>"
            )
        }
    })
}




