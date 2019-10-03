$( document ).ready()
{
	var page = 0;
	pageNumber(page);
	
	
	function pageNumber(page) {
		$.ajax({
	        url: "/api/news/all/"+ page,
	        contentType: "application/json; charset=utf-8",
	        method: "GET",
	        success: function (result) {
	        	$("#news").empty();
	            for(x=0;x<result.length;x++){
	            	$("#news").append(  
	            			"<div class='important_card3 col-xs-9 col-sm-9 col-md-3 col-lg-3'>" +
		            		"<a href='/noticias/"+result[x].idNews+"'>" +
		            		"<div class='itext_card3'>" +
		            		"<div class='text_data6 d-flex w-100 justify-content-between align-items-center'>" +	    	            		
		            		"<h6>"+result[x].idNews+"</h6><h6>Publicado: "+result[x].posted+"</h6>" +
		            		"</div>" +
		            		"<h1>"+result[x].title+"</h1>" +
	    					"<p>"+result[x].introduction+"</p></a>" +
	    					"<div class='social_card1 d-flex justify-content-end'>" +
	    					"<button class='update' onclick='updateNews("+result[x].idNews+")' title='Modificar noticia'</button>" +                                        
	                        "<a href='/updatepics/"+result[x].idNews+"'><button class='modPics' title='Agregar o quitar fotos'></button></a>" +     
	                        "<button class='delete' onclick='deleteNews("+result[x].idNews+")' title='Eliminar noticia'></button>" +      
	    					"</div>" +
							"</div>" +
							"</div>"
							);
	            	}
	            if (page > 0) {
	    			$("#prev").attr("hidden", false);
	    			} else {
	    				$("#prev").attr("hidden", true);
	    				}
	    		if (result.length > 20) {	    			
	    			$("#next").attr("hidden", false);
	    			} else {	    				
	    				$("#next").attr("hidden", true);
	    				}
	    		}	            
		})
	}
		
	
	
	$("#next").click(function() {
		page++;
		pageNumber(page);
	})

	$("#prev").click(function() {
		page--;
		pageNumber(page);
	})
	
	function deleteNews(id) {
	    $.ajax({
	        url: "/api/news/" + id,
	        contentType: "application/json; charset=utf-8",
	        method: "DELETE",
	        success: function (result) {
	        	pageNumber(page)
	            }	        
	    })
	}
	

	function updateNews(id){
	    window.location.href="/noticias/modificar/"+id;
	}
}










