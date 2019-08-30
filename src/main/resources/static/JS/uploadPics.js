$(document).ready()
{
	$
			.ajax({
				url : "/api/news/" + window.location.href.split('/')[4],
				contentType : "application/json; charset=utf-8",
				method : "GET",
				success : function(result) {
					$("#newInfo").empty();
					$("#newInfo").append(
							"<h2>Subir fotos</h2><br>" + "<p><b>Lugar: </b>"
									+ result.location + " <br>"
									+ "<b>Titulo: </b>" + result.title
									+ " <br>" + "<b>Bajada: </b>"
									+ result.introduction + " <br>"
									+ "<b>Noticia: </b>" + result.news
									+ " <br>" + "<b>Categoria: </b>"
									+ result.category + " <br>"
									+ "<b>Importancia: </b>" + result.level
									+ " <br>" + "Esta noticia <b>"
									+ result.posted.toUpperCase()
									+ "</b> se encuentra publicada</p><br><br>"
									+ "<br>");
					showPicsWithButton(result.idNews);
					$("#actionsPics")
							.append(
									"<br><div class='line'></div><br>"
											+ "<form id='picForm' action='/api/uploadimage/"
											+ result.idNews
											+ "' enctype='multipart/form-data' method='post'>"
											+ "<input type='file' id='imageFile' name='imageFile'><br>"
											+ "<input class='formBtn' type='submit' id='summitPic' value='Subir foto'>"
											+ "</form><br><br>"
											+ "<div class='line'></div><br>"
											+ "<button class='formBtn' onclick='postNews("
											+ result.idNews
											+ ")'>Publicar Noticia</button><br><br>"
											+ "<button class='formBtn' onclick='finishNew()'>Finalizar mas tarde</button>");

				}

			})

	$("#picForm").submit(function(e) {
		e.preventDefault(); // avoid to execute the actual submit of the form.

		$.ajax({
			type : "POST",
			enctype : 'multipart/form-data',
			url : url,
			data : form.serialize(), // serializes the form's elements.
			processData : false, // prevent jQuery from automatically
			// transforming the data into a query string
			contentType : false,
			cache : false,
			success : function(result) {

			}
		});

	})

	function showPicsWithButton(id) {
		$
				.ajax({
					url : "/api/news/pics/" + id,
					contentType : "application/json; charset=utf-8",
					method : "GET",
					success : function(result) {
						$("#newsPics")
						.append("*Para guardar la horientacion de la foto hacer click en la foto y escribir su orientacion (Horizontal, Vertical o Cuadrado)<br>");
						for (x = 0; x < result.length; x++) {
							if (result[x].type == "image") {
								// Compare orientation for pictures

								if (result[x].orientation == "P") {
									$("#newsPics")
											.append(
													"<img width='200' heigth='300' id='"
															+ result[x].idImage
															+ "' src='/api/uploadimage/videoTest/"
															+ result[x].idImage
															+ "' onclick='picOrientation("
															+ result[x].idImage
															+ ")'>"

											);
									$("#newsLocation").append("portrait");
								} else if (result[x].orientation == "L") {
									$("#newsPics")
											.append(
													"<img width='300' heigth='200' id='"
															+ result[x].idImage
															+ "' src='/api/uploadimage/videoTest/"
															+ result[x].idImage
															+ "' onclick='picOrientation("
															+ result[x].idImage
															+ ")'>"

											);
								} else {
									$("#newsPics")
											.append(
													"<img width='250' heigth='250' id='"
															+ result[x].idImage
															+ "' src='/api/uploadimage/videoTest/"
															+ result[x].idImage
															+ "' onclick='picOrientation("
															+ result[x].idImage
															+ ")'>");
								}

							}
						}
					}
				})
	}

	function picOrientation(id) {
		var orientation = prompt('Orientacion de la foto (Horizontal, Vertical o Cuadrada)')

		switch (orientation.toLowerCase()) {
		case "horizontal":
			var orientation = "L";
			break;
		case "vertical":
			var orientation = "P";
			break;
		case "cuadrado":
			var orientation = "S";
			break;
		default:
			alert("Error - Solo puede elegir horizontal, vertical o cuadrado");
		}
		
		

		if ((orientation == "L") || (orientation == "P") || (orientation == "S")) {
			$.ajax({
				url : "/api/uploadimage/orientation/" + id,
				data : JSON.stringify({
					"orientation" : orientation
				}),
				contentType : "application/json; charset=utf-8",
				method : "POST",
				success : function(result) {
					alert("Orientacion de la foto guardada")
				}
			})
		}

	}

	function removePic(id, x) {
		$.ajax({
			url : "/api/uploadimage/" + id + "/" + x,
			contentType : "application/json; charset=utf-8",
			method : "GET",
			success : function(result) {
				$("#newsPics").empty();
				$("#newsPics").append(
						"<p><b>Lugar: </b>" + result.location + " </p><br><br>"
								+ "<p><b>Titulo: </b>" + result.title
								+ " </p><br><br>" + "<p><b>Bajada: </b>"
								+ result.introduction + " </p><br><br>"
								+ "<p><b>Noticia: </b>" + result.news
								+ " </p><br><br>" + "<p><b>Categoria: </b>"
								+ result.category + " </p><br><br>"
								+ "<p><b>Importancia: </b>" + result.level
								+ " </p><br><br>" + "<p>Esta noticia <b>"
								+ result.posted.toUpperCase()
								+ "</b> se encuentra publicada</p><br><br>"
								+ "<br>");
				showPicsWithButton(result.idNews);
			}
		})
	}

	function postNews(id) {
		$.ajax({
			url : "/api/news/" + id,
			data : JSON.stringify({
				"posted" : "si"
			}),
			contentType : "application/json; charset=utf-8",
			method : "POST",
			success : function() {
				window.alert("Noticia publicada con exito");
				window.location.href = "/todas";
			}
		})
	}

	function finishNew() {
		window
				.alert("Noticia guardada para ser publicada en otro momento con exito");
		window.location.href = "/todas";
	}
}
