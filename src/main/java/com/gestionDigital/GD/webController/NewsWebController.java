package com.gestionDigital.GD.webController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;
import com.gestionDigital.GD.implementation.NewsImp;
import com.gestionDigital.GD.model.News;

@Controller
public class NewsWebController {
	
	@Autowired
	private NewsImp newsImp;
    
    
    //@PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/")
    public String home() {
        return "homeNew";
    }
    
    //@PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/todaslasnoticias")
    public String moreNews() {
        return "moreNews";
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/nuevanoticia")
    public String newNews() {
        return "CreateNews";
    }


    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/uploadpics/{id}")
    public String uploadPics(@PathVariable("id") Long id) {
        return "uploadPics";
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/updatepics/{id}")
    public String updatePics(@PathVariable("id") Long id) {
        return "UpdatePics";
    }


    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/todas")
    public String AllNews() {
        return "News";
    }
    

    //@PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/noticias/{id}")
    public ModelAndView  SingleNews(@PathVariable("id") Long id) {
    	News n = this.newsImp.findOne(id);
    	
    	
    	ModelAndView modelView = new ModelAndView("Noticia");
    	modelView.addObject("pic", n.getThumbNail());
    	modelView.addObject("title", n.getTitle());
    	modelView.addObject("intro", n.getIntroduction());
    	
    	
    	
    	return modelView;
    }


    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/noticias/modificar/{id}")
    public String UpdateNews(@PathVariable("id") Long id) {
        return "UpdateNews";
    }

}
