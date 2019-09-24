$( document ).ready()
{
	// Weather info
    $.ajax({
        url: "https://ws.smn.gob.ar/map_items/weather",
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {        	
            $("#weatherInfo").empty();
            for(x=0;x<result.length;x++){
                
            	if(result[x].name == "Corrientes" && result[x].province == "Corrientes"){
            		var time = new Date().getHours();
            		var climaTest = result[x].weather.description;
                    $("#weatherInfo").append(
                        "<span>"+ result[x].weather.temp +"°C - </span>"                        
                    )
                    
                    if(climaTest.includes("Algo nublado") || climaTest.includes("Parcialmente nublado")){
                    	if(time < 7 || time > 18){
                		$("#weatherInfo").append(
                                "<image width='25' height='25' src='/img/nocheNublado.png' title='"+climaTest+"'></image>"                        
                            )
                    	}else{
                    		$("#weatherInfo").append(
                                    "<image width='25' height='25' src='/img/AlgoNublado.svg' title='"+climaTest+"'></image>"                        
                                )
                    	}
                            
                	}else if(climaTest.includes("Despejado")){
                		if(time < 7 || time > 18){
                			$("#weatherInfo").append(
                                    "<image width='25' height='25' src='/img/luna.png' title='"+climaTest+"'></image>"                        
                                )
                		}else{
                		$("#weatherInfo").append(
                                "<image width='25' height='25' src='/img/despejado.png' title='"+climaTest+"'></image>"                        
                            )
                            }
                            
                	}else /*
							 * if(result[x].weather.description == "Nublado" ||
							 * result[x].weather.description == "Cubierto" ||
							 * result[x].weather.description == "Cielo
							 * invisible")
							 */{
                		$("#weatherInfo").append(
                                "<image width='25' height='25' src='/img/nublado.png' title='"+climaTest+"'></image>"                        
                            )
                            
                	}
                    
                    
                    if(climaTest.includes("lluvia") || climaTest.includes("llovizna")
                    		|| climaTest.includes("tormenta")){
                    	$("#weatherInfo").empty();
                		$("#weatherInfo").append(
                				"<span>"+ result[x].weather.temp +"°C - </span>" +
                                "<image width='25' height='25' src='/img/lluvia.png' title='"+climaTest+"'></image>"                       
                            )
                            }
                    }
                }
            }
    })         
}