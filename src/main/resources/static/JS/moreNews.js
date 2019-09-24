$(document).ready()
{

	var page = 0;
	// All news
	$
			.ajax({
				url : "/api/news/morenews/" + page,
				contentType : "application/json; charset=utf-8",
				method : "GET",
				success : function(result) {
					$("#allNews").empty();
					for (x = 0; x < result.length; x++) {
						$("#allNews")
								.append(
										"<div class='important_card3 col-xs-9 col-sm-9 col-md-4 col-lg-3'><a href='/noticias/"
												+ result[x].idNews
												+ "'>"
												+ "<div class='normalPicsContainer'><image class='pics' id='picNews"
												+ result[x].idNews
												+ "'></div>"
												+ "<div class='itext_card3'>"
												+ "<div class='text_data6 d-flex w-100 justify-content-between align-items-center'>"
												+ "<h6>"
												+ result[x].category
												+ "</h6><h6>"
												+ result[x].date
												+ "</h6>"
												+ "</div>"
												+ "<h1>"
												+ result[x].title
												+ "</h1>"
												+ "<p>"
												+ result[x].introduction
												+ "</p></a>"
												+ "<div class='social_card1 d-flex justify-content-end'>"
												+ "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"
												+ result[x].idNews
												+ "' target='_blank'><button class='social_facebook'></button></a>"
												+ "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"
												+ result[x].idNews
												+ "&text="
												+ result[x].title
												+ " -&hashtags=AgenciaDigital1,LaVerdad,Actualidad'><button class='social_twitter'></button></a>"
												+ "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"
												+ result[x].idNews
												+ "' title='Comparte esta noticia'><button class='social_whatsapp'></button></a>"
												+ "</div>"
												+ "</div>"
												+ "</div>");
						if (result.length < 9) {
							$("#next").hide();
						}
						previewPicNormalNews(result[x].idNews);
					}
				}
			})

	$("#next").click(function() {
		page++;
		pageNumber(page);
	})

	$("#prev").click(function() {
		page--;
		pageNumber(page);
	})

	function pageNumber(page) {
		$
				.ajax({
					url : "/api/news/morenews/" + page,
					contentType : "application/json; charset=utf-8",
					method : "GET",
					success : function(result) {
						$("#allNews").empty();
						for (x = 0; x < result.length; x++) {
							$("#allNews")
									.append(
											"<div class='important_card3 col-xs-9 col-sm-9 col-md-4 col-lg-3'><a href='/noticias/"
													+ result[x].idNews
													+ "'>"
													+ "<div class='normalPicsContainer'><image class='pics' id='picNews"
													+ result[x].idNews
													+ "'></div>"
													+ "<div class='itext_card3'>"
													+ "<div class='text_data6 d-flex w-100 justify-content-between align-items-center'>"
													+ "<h6>"
													+ result[x].category
													+ "</h6><h6>"
													+ result[x].date
													+ "</h6>"
													+ "</div>"
													+ "<h1>"
													+ result[x].title
													+ "</h1>"
													+ "<p>"
													+ result[x].introduction
													+ "</p></a>"
													+ "<div class='social_card1 d-flex justify-content-end'>"
													+ "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"
													+ result[x].idNews
													+ "' target='_blank'><button class='social_facebook'></button></a>"
													+ "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"
													+ result[x].idNews
													+ "&text="
													+ result[x].title
													+ " -&hashtags=AgenciaDigital1,LaVerdad,Actualidad'><button class='social_twitter'></button></a>"
													+ "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"
													+ result[x].idNews
													+ "' title='Comparte esta noticia'><button class='social_whatsapp'></button></a>"
													+ "</div>"
													+ "</div>"
													+ "</div>");

							previewPicNormalNews(result[x].idNews);
						}
						if (page > 0) {
							$("#prev").attr("hidden", false);
						} else {
							$("#prev").attr("hidden", true);
						}
						if (result.length < 9) {
							$("#next").attr("hidden", true);
						} else {
							$("#next").attr("hidden", false);
						}
					}
				})
	}

	function previewPicNormalNews(id) {
		$.ajax({
			url : "/api/news/pics/" + id,
			contentType : "application/json; charset=utf-8",
			method : "GET",
			success : function(result) {
				$("#picNews" + id).attr("src",
						"/api/uploadimage/videoTest/" + result[0].idImage);
				if (result[0].orientation == "P") {
					$("#picNews" + id).attr("class", "normalNewsPics2P1");
				}
			}
		})
	}
}