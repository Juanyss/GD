$(document).ready()
{
	$("#summitButton").click(function() {
		if(($("#newsIntro").val()).length > 200 || $("#newsIntro").val() === ''){
			alert("Error en la bajada es demasiado larga (max 100 caracteres) o se encuentra vacia");
		}else if(($("#newsTittle").val()).length > 75 || $("#newsTittle").val() === ''){
			alert("El titulo es demasiado larga (max 75 caracteres) o se encuentra vacia");
		}else if($("#newsLocation").val() === ''){
			alert("Lugar se encuentra vacio");
		}else if($("#newsNews").val() === ''){
			alert("La noticia se encuentra vacia");
		}else if($("#newsCategory").val() === ''){
			alert("La categoria se encuentra vacia");
		}else if($("#thumbNail").val() === ''){
			alert("El link de la foto se encuentra vacio");
		}else{
			$.ajax({
				url : "/api/news",
				data : JSON.stringify({
					"location" : $("#newsLocation").val(),
					"title" : $("#newsTittle").val(),
					"introduction" : $("#newsIntro").val(),
					"news" : $("#newsNews").val(),
					"category" : $("#newsCategory").val(),
					"level" : $("#newsLevel").val(),
					"thumbNail": $("#thumbNail").val(),
				}),
				contentType : "application/json; charset=utf-8",
				method : "POST",
				success : function(result) {
					window.location.href = "/uploadpics/" + result.idNews;
				}
			})
		}	
		
	})

	$("#cancelButton").click(function() {
		window.location.href = "/todas";
	})

	//ThumbNail related methods
	$(document).mouseup(function (e) {
	    var container = $("#thumbNailInfo");

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        container.fadeOut();
	    }
	});
	
	$("#addThumbNail").click(function(){
	    
	 $("#thumbNailInfo").empty();
	 $("#thumbNailInfo").append(
			 "<h3>Como agregar la foto de presentacion de redes sociales?</h3>" +
			 "<h1>1- Ir a la pagina www.clodinary.com e iniciar sesion con usuario y contraseña(Agenciadigital1net@gmail.com - @genc14D)</h1>" +
			 "<h1>2- Entrar a la opcion 'Media Library' y seleccionar la carpeta donde se guardara la foto</h1>" +
			 "<h1>3- Una vez subida la foto verificar que el tamaño no supere los 600x600 o tendra que modificar la misma en la pagina</h1>" +
			 "<h1>4- Copiar el link y pongalo en el campo correspondiente en el formulario de creacion de la noticia.</h1>"
			 
			 
	 );
	 $("#thumbNailInfo").fadeToggle();
	})
}
