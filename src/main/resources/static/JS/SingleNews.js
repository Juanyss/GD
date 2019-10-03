$( document ).ready()
{
    
    $.ajax({
        url: "/api/news/" + window.location.href.split('/')[4],
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
        	document.title = "Agencia Digital - " + result.title;
        	
        	
        	
        	
            $("#newsCategory").empty();
            $("#newsCategory").append(
                "<span>"+result.category+"</span> <span>"+result.date+"</span>"
            );
            $("#newsTitle").empty();
            $("#newsTitle").append(
                result.title
            );
            $("#newsIntroduction").empty();
            $("#newsIntroduction").append(
                result.introduction
            );
            $("#newsNews").empty();
            $("#newsNews").append(
                result.news
            );
            $("#newsLocation").empty();
            $("#newsLocation").append(
                result.location 
            );
            $("#shareWhatsapp").empty();
            $("#shareWhatsapp").append(
            "<a href='https://api.whatsapp.com/send?text=http://www.agenciadigital1.net/noticias/"+result.idNews+"' title='Comparte esta noticia'><div class='social_icon' id='whatsapp'></div></a>"
            );
            $("#shareFacebook").empty();
            $("#shareFacebook").append(
            "<a href='https://www.facebook.com/sharer/sharer.php?u=http://www.agenciadigital1.net/noticias/"+result.idNews+"' target='_blank'><div class='social_icon' id='facebook'></div></a>"
            );
            $("#shareTwitter").empty();
            $("#shareTwitter").append(
            "<a href='http://www.twitter.com/intent/tweet?url=http://www.agenciadigital1.net/noticias/"+result.idNews+"&text="+result.title+" -&hashtags=AgenciaDigital,LaVerdad,MarcandoAgenda'><div class='social_icon' id='twitter'></div></a>"
            );
            showPics(result.idNews);
        }
    })

    // Other news
    $.ajax({
        url: "/api/news/otherNews/" + window.location.href.split('/')[4],
        contentType: "application/json; charset=utf-8",
        method: "GET",
        success: function (result) {
            $("#otherNews").empty();
            for(x=0;x<2;x++){
                $("#otherNews").append(
                    "<a onclick='goTo("+result[x].idNews+")'>" +
                    "<div class='news_wrap' >" +
                    "<div class='card_news' id='previewPics"+result[x].idNews+"'>" +
                    "</div>" +
                    "</div></a>"
                )
                previewPic(result[x].idNews,result[x].category,result[x].title,result[x].date);
            }
        }
    })

    function goTo(id){
        localStorage.setItem("idNews", id);
        window.location.href="/noticias/"+id;
    }

    function previewPic(id,categoria,titulo, fecha){
        $.ajax({
            url: "/api/news/pics/" + id,
            contentType: "application/json; charset=utf-8",
            method: "GET",
            success: function (result) {
        			$("#previewPics"+id).empty();
                	$("#previewPics"+id).append(
                    "<img class='img_news' src='/api/uploadimage/videoTest/" + result[0].idImage + "'>" +
                    "<div class='text_span'>" +
                    "<span>"+categoria+"</span><span>"+fecha+"</span>" +
                    "</div>" +
                    "</img>" +
                    "<div class='text_news'>" +
                    "<h1>"+titulo+"</h1>" +
                    "</div>")                       		
            }
        })
    }
    

    
    function showPics(id) {
        $.ajax({
            url: "/api/news/pics/" + id,
            contentType: "application/json; charset=utf-8",
            method: "GET",
            success: function (result) {   
            	$("#Slider").empty();
                for (x = 0; x < result.length; x++) {                    
                	if (result[x].type == "image") {    
                    	 $("#Slider").append(                    			 
                    			 "<img class='landscape' src='/api/uploadimage/videoTest/" + result[x].idImage + "'>"                     			 
                    			 );
                    	// Hide all the pictures and show only the first
                    	$('#Slider').each(function() { 
                    		  var $this= jQuery(this);
                    		  $this.find(':not(img:first)').hide();                    		  
                    		});
                    } 
                }
                if (result.length == 1) {
                  	 $("#Arrows").hide();                  		
                  }
                
            }
        })


    }
    // ----------------------------------------------------------
    // When click on next or preview hide all the pictures and show the first
	// one
    $("#Next").click(function(){
        $("#Slider").append($("#Slider img:first-of-type"));
        $('#Slider').each(function() { 
  		  var $this= jQuery(this);
  		  $this.find(':not(img:first)').hide();
  		  $this.find('img:first').show();

  		});
        
    });

    $("#Prev").click(function(){
        $("#Slider").prepend($("#Slider img:last-of-type"));
        $('#Slider').each(function() { 
  		  var $this= jQuery(this);
  		  $this.find(':not(img:first)').hide();
  		  $this.find('img:first').show();
  		});        
        
    });    

}