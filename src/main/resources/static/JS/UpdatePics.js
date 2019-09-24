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
							"<h2>Subir fotos</h2><br>" +
							"<div class='line'></div><br>" +
							"<p><b>Lugar: </b>" + result.location + " <br>" +
							"<div class='line'></div><br>" +
							"<b>Titulo: </b>" + result.title + " <br>" +
							"<div class='line'></div><br>" +
							"<b>Bajada: </b>" + result.introduction + " <br>" +
							"<div class='line'></div><br>" +
							"<b>Noticia: </b>" + result.news + " <br>" +
							"<div class='line'></div><br>" +
							"<b>Categoria: </b>" + result.category + " <br>" +
							"<div class='line'></div><br>" +
							"<b>Importancia: </b>" + result.level + " <br>" +
							"<div class='line'></div><br>" +
							"Esta noticia <b>" + result.posted.toUpperCase() + "</b> se encuentra publicada</p>" +
							"<br>" +
							"<div class='line'></div><br>");
					showPicsWithButton(result.idNews);
					$("#actionsPics")
							.append(
									"<br><div class='line'></div><br>"
											+ "<form id='picForm' action='/api/uploadimage/update/"
											+ result.idNews
											+ "' enctype='multipart/form-data' method='post'>"
											+ "<input type='file' id='imageFile' name='imageFile'><br><br>"
											+ "<input class='formBtn' type='submit' id='summitPic' value='Subir foto'><br>"											
											+ "</form><br>"
											+ "<label class='tips'>*Si no posee foto poner una foto representativa (Foto horizontal)</label>"
											+ "<button class='formBtn' id='cancelButton' onclick='cancel()'>Volver</button>")
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
	
	function cancel() {
		window.location.href = "/todas";
	}

	function showPicsWithButton(id) {
		$
				.ajax({
					url : "/api/news/pics/" + id,
					contentType : "application/json; charset=utf-8",
					method : "GET",
					success : function(result) {
						
						$("#newsPics").empty();
						$("#newsPics")
						.append(
								"*Para eliminar una foto haga click en la foto y elija la opcion aceptar<br>");
						for (x = 0; x < result.length; x++) {
							if (result[x].type == "image") {
								// Compare orientation for pictures
								$("#newsPics")
										.append(
												"<div class=imgBtnContainer> <img class='img' id='"
														+ result[x].idImage
														+ "' src='/api/uploadimage/videoTest/"
														+ result[x].idImage
														+ "' onclick='removePic(" + id
														+ ","
														+ result[x].idImage
														+ ")' width=300 height=200>" + "</div>"

										);

							}
						}
					}
				})
	}

	function removePic(id, x) {
		var r = confirm("Desea eliminar esta foto?");
		if (r == true) {
			$.ajax({
				url : "/api/uploadimage/" + id + "/" + x,
				contentType : "application/json; charset=utf-8",
				method : "GET",
				success : function(result) {
					$("#test").empty();
					$("#test").append(
							"<p><b>Lugar: </b>" + result.location
									+ " </p><br><br>" + "<p><b>Titulo: </b>"
									+ result.title + " </p><br><br>"
									+ "<p><b>Bajada: </b>"
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

	}
}


