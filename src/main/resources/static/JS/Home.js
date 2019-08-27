$( document ).ready()
{
		
	//Important News 1
	$.ajax({
        url: "api/news/important",
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            $("#importantNews1").empty();
            $("#importantNews1").append(
            		"<div class='news_slider1 col-xs-12 col-sm-12 col-md-12 col-lg-7' ><a href='/noticias/"+result[0].idNews+"'>" +            		
            		"<image class='pics' id='picNews"+ result[0].idNews +"'></a>" +
            		"<div class='text'>" +
                    "<div class='text_data1 d-flex w-100 justify-content-between'>" +
                    "<h6>"+result[0].category+"</h6><h6>"+result[0].date+"</h6>" +
                    "</div>" +
                    "<h1>"+result[0].title+"</h1>" +
                    "<p>"+result[0].introduction+"</p>" +
                    "<div class='social_card1 d-flex justify-content-end'>" +
                    "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"+result[0].idNews+"' target='_blank'><button class='social_facebook'></button></a>" +                    
                    "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"+result[0].idNews+"&text="+result[0].title+" -&hashtags=AgenciaDigital1,LaVerdad,Actualidad'><button class='social_twitter'></button></a>" +     
                    "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"+result[0].idNews+"' title='Comparte esta noticia'><button class='social_whatsapp'></button></a>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    
                    
                    //Important news 2
                    "<div class='contenedor col-xs-12 col-sm-12 col-md-12 col-lg-5'><a href='/noticias/"+result[1].idNews+"'>" +
                    "<div class='news_slider2 col-xs-12 col-sm-12 col-md-12 col-lg-12'>" +
                    "<div class='img_slider2'><image class='pics2' id='picNews"+ result[1].idNews +"'></div>" +
                    "<div class='text_slider2'>" +
                    "<div class='text_data2 d-flex w-100 justify-content-between'>" +
                    "<h6>"+result[1].category+"</h6><h6>"+result[1].date+"</h6>" +
                    "</div>" +
                    "<h1>"+result[1].title+"</h1>" +
                    "<p>"+result[1].introduction+"</p></a>" +
                    "<div class='social_card1 d-flex justify-content-end'>" +
                    "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"+result[1].idNews+"' target='_blank'><button class='social_facebook'></button></a>" +                    
                    "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"+result[1].idNews+"&text="+result[1].title+" -&hashtags=AgenciaDigital1,LaVerdad,Actualidad'><button class='social_twitter'></button></a>" +     
                    "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"+result[1].idNews+"' title='Comparte esta noticia'><button class='social_whatsapp'></button></a>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    
                    
                    //Important News 3
                    "<div class='news_slider3 col-xs-12 col-sm-12 col-md-12 col-lg-12'><a href='/noticias/"+result[2].idNews+"'>" +
                    "<div class='text_slider3'>" +
                    "<div class='text_data6 d-flex w-100 justify-content-between'>" +
                    "<h6>"+result[2].category+"</h6><h6>"+result[2].date+"</h6>" +
                    "</div>" +
                    "<h1>"+result[2].title+"</h1>" +
                    "<p>"+result[2].introduction+"</p></a>" +
                    "<div class='social_card1 d-flex justify-content-end'>" +
                    "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"+result[2].idNews+"' target='_blank'><button class='social_facebook'></button></a>" +                    
                    "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"+result[2].idNews+"&text="+result[2].title+" -&hashtags=AgenciaDigital1,LaVerdad,Actualidad'><button class='social_twitter'></button></a>" +     
                    "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"+result[2].idNews+"' title='Comparte esta noticia'><button class='social_whatsapp'></button></a>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    
                    //Space for publicity
                    "<div class='row w-100'>" +
                    "<div class='news_slider4 col-lg-12'></div>" +
                    
                    "</div>"
            );
            previewPic(result[0].idNews, result[1].idNews);
        }
    })
    
   
    
    function previewPic(id1, id2){
	    $.ajax({
	        url: "/api/news/pics/" + id1,
	        contentType: "application/json; charset=utf-8",
	        method: "GET",
	        success: function (result) {	        	
	            $("#picNews"+id1).attr("src","/api/uploadimage/videoTest/" + result[0].idImage);          
	        }
	    })
	    
	    $.ajax({
	        url: "/api/news/pics/" + id2,
	        contentType: "application/json; charset=utf-8",
	        method: "GET",
	        success: function (result) {	        	
	            $("#picNews"+id2).attr("src","/api/uploadimage/videoTest/" + result[0].idImage);          
	        }
	    })
	}
	
	//Normal news call
	 $.ajax({
	        url: "/api/news/",
	        contentType: "application/json; charset=utf-8",
	        method: "GET",
	        success: function (result) {	        	
	        	$("#NormalNews").empty();
	            $("#NormalNews").append(
	            		//Normal news 1
	            		"<div class='important_card1 col-xs-12 col-sm-9 col-md-9 col-lg-4'><a href='/noticias/"+result[0].idNews+"'>" +          		
	            			"<image class='picsNormalNews' id='picNews"+ result[0].idNews +"'></a>" +
	            			"<div class='text_card1'>" +
	            				"<div class='text_data4 d-flex w-100 justify-content-between'>" +
	            					"<h6>"+result[0].category+"</h6><h6>"+result[0].date+"</h6>" +
	            				"</div>" +
	            				"<h1>"+result[0].title+"</h1>" +
	            				"<p>"+result[0].introduction+"</p>" +
	            				"<div class='social_card1 d-flex justify-content-end'>" +
	                            "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"+result[0].idNews+"' target='_blank'><button class='social_facebook'></button></a>" +                    
	                            "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"+result[0].idNews+"&text="+result[0].title+" -&hashtags=AgenciaDigital1,LaVerdad,Actualidad'><button class='social_twitter'></button></a>" +     
	                            "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"+result[0].idNews+"' title='Comparte esta noticia'><button class='social_whatsapp'></button></a>" +
	                            "</div>" +
	            			"</div>" +
	            		"</div>" +
	            		"</div>" +
	                    
	                    
	                    
	                    //Normal news 2
	                    "<div class='important_card2 col-xs-10 col-sm-10 col-md-10 col-lg-5 align'>" +
	                    	"<div class='row'>" +
	                    		"<div class='important_card7 col-xs-9 col-sm-9 col-md-9 col-lg-11'><a href='/noticias/"+result[1].idNews+"'>" +
	                    			"<div class='img_card2'><image class='normalNewsPics2' id='picNews"+ result[1].idNews +"'></a></div>" +
	                    				"<div class='text_card2'>" +
	                    					"<div class='text_data5 d-flex w-100 justify-content-between'>" +
	                    						"<h6>"+result[1].category+"</h6><h6>"+result[1].date+"</h6>" +
	                    					"</div>" +
	                    					"<h1>"+result[1].title+"</h1>" +
	                    					"<p>"+result[1].introduction+"</p>" +
	                    					"<div class='social_card1 d-flex justify-content-end'>" +
	                                        "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"+result[1].idNews+"' target='_blank'><button class='social_facebook'></button></a>" +                    
	                                        "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"+result[1].idNews+"&text="+result[1].title+" -&hashtags=AgenciaDigital1,LaVerdad,Actualidad'><button class='social_twitter'></button></a>" +     
	                                        "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"+result[1].idNews+"' title='Comparte esta noticia'><button class='social_whatsapp'></button></a>" +
	                                        "</div>" +
	                    				"</div>" +
                        
	                    			"</div>" +
	                    		"</div>" +
                        
                        //Space for publicity
	                    		"<div class='row'>" +
	                    			"<div class='important_card6 col-xs-11 col-sm-11 col-md-11 col-lg-11'></div>" +
	                    		"</div>" +
	                    	"</div>" +
	                    "</div>"
	                    );
	            $("#NormalNews2").empty();
	            $("#NormalNews2").append(
	            		//Normal news 3
	            		"<div class='important_card3 col-xs-9 col-sm-9 col-md-3 col-lg-3'><a href='/noticias/"+result[2].idNews+"'>" +
	            		"<div class='itext_card3'>" +
	            		"<div class='text_data6 d-flex w-100 justify-content-between align-items-center'>" +
	            		"<h6>"+result[2].category+"</h6><h6>"+result[2].date+"</h6>" +
	            		"</div>" +
	            		"<h1>"+result[2].title+"</h1>" +
    					"<p>"+result[2].introduction+"</p></a>" +
    					"<div class='social_card1 d-flex justify-content-end'>" +
                        "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"+result[2].idNews+"' target='_blank'><button class='social_facebook'></button></a>" +                    
                        "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"+result[2].idNews+"&text="+result[2].title+" -&hashtags=AgenciaDigital1,LaVerdad,Actualidad'><button class='social_twitter'></button></a>" +     
                        "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"+result[2].idNews+"' title='Comparte esta noticia'><button class='social_whatsapp'></button></a>" +
                        "</div>" +
						"</div>" +
						"</div>" +
						
						//Normal news 4
	            		"<div class='important_card3 col-xs-9 col-sm-9 col-md-3 col-lg-3'><a href='/noticias/"+result[4].idNews+"'>" +
	            		"<div class='itext_card3'>" +
	            		"<div class='text_data6 d-flex w-100 justify-content-between align-items-center'>" +
	            		"<h6>"+result[3].category+"</h6><h6>"+result[3].date+"</h6>" +
	            		"</div>" +
	            		"<h1>"+result[3].title+"</h1>" +
    					"<p>"+result[3].introduction+"</p></a>" +
    					"<div class='social_card1 d-flex justify-content-end'>" +
                        "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"+result[3].idNews+"' target='_blank'><button class='social_facebook'></button></a>" +                    
                        "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"+result[3].idNews+"&text="+result[3].title+" -&hashtags=AgenciaDigital1,LaVerdad,Actualidad'><button class='social_twitter'></button></a>" +     
                        "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"+result[3].idNews+"' title='Comparte esta noticia'><button class='social_whatsapp'></button></a>" +
                        "</div>" +
						"</div>" +
						"</div>" +
						
						//Normal news 5
	            		"<div class='important_card3 col-xs-9 col-sm-9 col-md-3 col-lg-3'><a href='/noticias/"+result[4].idNews+"'>" +
	            		"<div class='itext_card3'>" +
	            		"<div class='text_data6 d-flex w-100 justify-content-between align-items-center'>" +
	            		"<h6>"+result[4].category+"</h6><h6>"+result[4].date+"</h6>" +
	            		"</div>" +
	            		"<h1>"+result[4].title+"</h1>" +
    					"<p>"+result[4].introduction+"</p></a>" +
    					"<div class='social_card1 d-flex justify-content-end'>" +
                        "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"+result[4].idNews+"' target='_blank'><button class='social_facebook'></button></a>" +                    
                        "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"+result[4].idNews+"&text="+result[4].title+" -&hashtags=AgenciaDigital1,LaVerdad,Actualidad'><button class='social_twitter'></button></a>" +     
                        "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"+result[4].idNews+"' title='Comparte esta noticia'><button class='social_whatsapp'></button></a>" +
                        "</div>" +
						"</div>" +						
						"</div>" +
						"<div class='important_card3 col-xs-9 col-sm-9 col-md-3 col-lg-3'>" +
						"<button onClick='goToMoreNews()' class='moreNews'>Más noticias</button>" +
						"</div>" 
						
	            );
	            previewPic(result[0].idNews, result[1].idNews);
	            }
	    })
	    
	    
	    
	 function goToMoreNews(){
		 document.location.href = '/todaslasnoticias';
	 }
	    
	    
	
	
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
                    
                    if(result[x].weather.description.includes("nublado")){
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