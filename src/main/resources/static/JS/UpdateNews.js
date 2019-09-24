$( document ).ready()
{
    $.ajax({
        url: "/api/news/" + window.location.href.split('/')[5],
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            $("#newsInfo").empty();
            $("#newsInfo").append(
                "<h2>Actualizar noticia</h2><br>" +
                "<div class='line'></div><br>" +
                "<p><b>Lugar: </b><input id='newsLocation' type='text' value='" + result.location + " '></p><br>" +
                "<div class='line'></div><br>" +
                "<p><b>Titulo: </b><input id='newsTittle' type='text' value='" + result.title + " '></p><label class='tips'>*Maximo 75 caracteres</label><br>" +
                "<div class='line'></div><br>" +
                "<p><b>Bajada: </b><textarea id='newsIntro'  type='text' rows='4' cols='50' >" + result.introduction + "</textarea><label class=tips>*Maximo 100 caracteres</label><br></p><br>" +
                "<div class='line'></div><br>" +
                "<p><b>Noticia: </b><textarea id='newsNews' type='text' rows='10' cols='50' >" + result.news + "</textarea></p><br><br>" +
                "<div class='line'></div><br>" +
                "<p><b>Categoria: </b><input id='newsCategory' type='text' value='" + result.category + " '></p><br>" +
                "<div class='line'></div><br>" +
                "<p><b>Importancia: </b><select id='newsLevel'>" +
                "<div class='line'></div><br>" +
                "</select></p><br>" +
                "<div class='line'></div><br>" +
                "<input id='thumbNail' placeholder='Link foto de presentacion' value='" + result.thumbNail + " '><br>" +
                "<div class='line'></div><br>" +
                "<p>Esta noticia <b>" + result.posted.toUpperCase() + "</b> se encuentra publicada <br>" +
                "<b>Estado de la publicacion: </b><select id='newsPost'>" +
                "</select></p><br>" +
                "<br>"
            );
            if(result.level == "NORMAL"){
                $("#newsLevel").append(
                    "<option value='NORMAL' selected>Normal</option>" +
                    "<option value='IMPORTANTE'>Importante</option>"
                )
            }else if(result.level == "IMPORTANTE"){
                $("#newsLevel").append(
                    "<option value='NORMAL' >Normal</option>" +
                    "<option value='IMPORTANTE' selected>Importante</option>"
                )
            }
            if(result.posted == "si"){
                $("#newsPost").append(
                    "<option value='si' selected>Publicar</option>" +
                    "<option value='no'>No publicar todavia</option>"
                )
            }else if(result.posted == "no"){
                $("#newsPost").append(
                    "<option value='si' >Publicar</option>" +
                    "<option value='no' selected>No publicar todavia</option>"
                )
            }
            //showPicsWithButton(result.idNews);
            $("#actionsPics").append(
                "<div class='line'></div><br>"+
                "<button class='formBtn' onclick='updateNews(" + result.idNews + ")'>Actualizar</button><label>  </label>"+
                "<button class='formBtn' id='cancelButton' onclick='cancel()'>Cancelar</button>"
            )
        }
    })    
    
    
    function cancel() {
		window.location.href = "/todas";
	}
    

    function updateNews(id) {
    	if(($("#newsIntro").val()).length > 200 || $("#newsIntro").val() === ''){
			alert("Error en la bajada es demasiado larga (max 200 caracteres) o se encuentra vacia");
		}else if(($("#newsTittle").val()).length > 75 || $("#newsTittle").val() === ''){
			alert("El titulo es demasiado larga (max 75 caracteres) o se encuentra vacia");
		}else if($("#newsLocation").val() === ''){
			alert("Lugar se encuentra vacio");
		}else if($("#news").val() === ''){
			alert("La noticia se encuentra vacia");
		}else if($("#category").val() === ''){
			alert("La categoria se encuentra vacia");
		}else if($("#thumbNail").val() === ''){
			alert("El link de la foto se encuentra vacio");
		}else{
			$.ajax({
				url : "/api/news/"+id,
				data : JSON.stringify({
					"location" : $("#newsLocation").val(),
					"title" : $("#newsTittle").val(),
					"introduction" : $("#newsIntro").val(),
					"news" : $("#newsNews").val(),
					"category" : $("#newsCategory").val(),
					"thumbNail" : $("#thumbNail").val(),
					"posted" : $("#newsPost").val(),
					"level" : $("#newsLevel").val()
				}),
				contentType : "application/json; charset=utf-8",
				method : "PUT",
				success : function(result) {
					window.alert("Se modifico con exito la noticia");
				}
			})
		}	
    }
}