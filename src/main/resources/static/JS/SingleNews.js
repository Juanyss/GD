$( document ).ready()
{
    var id = localStorage.getItem("idNews");
    $.ajax({
        url: "/api/news/" + id,
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            $("#test").append(
                "<label>" + result.location + " </label><br>" +
                "<label>" + result.title + " </label><br>" +
                "<label>" + result.introduction + " </label><br>" +
                "<label>" + result.news + " </label><br>" +
                "<label>" + result.date + " </label><br>" +
                "<label>" + result.category + " </label><br>" +
                "<br><div id='newsPics'></div>" +
                "<br>"
            );
            showPics(result.idNews);
        }
    })

    function showPics(id) {
        $.ajax({
            url: "/api/news/pics/" + id,
            contentType: "application/json; charset=utf-8",
            method: "GET",
            success: function (result) {
                for (x = 0; x < result.length; x++) {
                    if (result[x].type == "image") {
                        $("#newsPics").append(
                            "<image width='320' height='240' src='/api/uploadimage/videoTest/" + result[x].idImage + "'>"
                        )
                    } else if (result[x].type == "video") {
                        $("#newsPics").append(
                            "<video width='320' height='240' controls>" +
                            "<source src='/api/uploadimage/videoTest/" + result[x].idImage + "'>" +
                            "</video>"
                        )
                    }

                }
            }
        })
    }
}