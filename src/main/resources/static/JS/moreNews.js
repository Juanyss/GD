$( document ).ready()
{
		
	
	//All news 
	 $.ajax({
	        url: "/api/news/morenews",
	        contentType: "application/json; charset=utf-8",
	        method: "GET",
	        success: function (result) {	        	        
	            $("#allNews").empty();
	            for(x=0;x<result.length;x++){	      
	            $("#allNews").append(	            		      		
	            		"<div class='important_card3 col-xs-9 col-sm-9 col-md-3 col-lg-3'><a href='/noticias/"+result[x].idNews+"'>" +
	            		"<div class='itext_card3'>" +
	            		"<div class='text_data6 d-flex w-100 justify-content-between align-items-center'>" +
	            		"<h6>"+result[x].category+"</h6><h6>"+result[x].date+"</h6>" +
	            		"</div>" +
	            		"<h1>"+result[x].title+"</h1>" +
    					"<p>"+result[x].introduction+"</p></a>" +
    					"<div class='social_card1 d-flex justify-content-end'>" +
                        "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"+result[x].idNews+"' target='_blank'><button class='social_facebook'></button></a>" +                    
                        "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"+result[x].idNews+"&text="+result[2].title+" -&hashtags=AgenciaDigital1,LaVerdad,Actualidad'><button class='social_twitter'></button></a>" +     
                        "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"+result[x].idNews+"' title='Comparte esta noticia'><button class='social_whatsapp'></button></a>" +
                        "</div>" +
						"</div>" +
						"</div>"	
						);
	            }
	            }  
	 })
	    
	    
	
	
	//Weather info
    $.ajax({
        url: "https://ws.smn.gob.ar/map_items/weather",
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {        	
            $("#weatherInfo").empty();
            for(x=0;x<result.length;x++){
                if(result[x].name == "Corrientes" && result[x].province == "Corrientes"){
                	console.log(result[x].weather.description);                	
                    $("#weatherInfo").append(
                        "<span>"+ result[x].weather.temp +"°C - </span>"                        
                    )
                    
                    if(result[x].weather.description == "Algo nublado"){
                		$("#weatherInfo").append(
                                "<image width='25' height='25' src='/img/AlgoNublado.svg'></image>"                        
                            )
                	}else if(result[x].weather.description == "Despejado"){
                		$("#weatherInfo").append(
                                "<image width='25' height='25' src='/img/despejado.png'></image>"                        
                            )
                	}else if(result[x].weather.description.includes("Nublado")){
                		$("#weatherInfo").append(
                                "<image width='25' height='25' src='/img/nublado.png'></image>"                        
                            )
                	}else if(result[x].weather.description.includes("lluvia")){
                		$("#weatherInfo").append(
                                "<image width='25' height='25' src='/img/lluvia.png'></image>"                       
                            )
                            }
                    }
                }
            }
    })
    
    
}