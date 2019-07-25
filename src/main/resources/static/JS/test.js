$("#summitButton").click(function () {
    $.ajax({
        url: "/api/news",
        data: JSON.stringify({
            "location":$("#newsLocation").val(),
            "title": $("#newsTittle").val(),
            "introduction":$("#newsIntro").val(),
            "news": $("#newsNews").val(),
            "category":$("#newsCategory").val(),
            "level":$("#newsLevel").val()}),
        contentType: "application/json; charset=utf-8",
        method: "POST",
        success: function (result) {
            localStorage.setItem("news", result.idNews)
            window.location.href="/uploadpics/"+result.idNews;
        }
    })
})




