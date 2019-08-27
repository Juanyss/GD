package com.gestionDigital.GD.webController;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class NewsWebController {

    /*@GetMapping(value = "/")
    public String underConstruction() {
        return "index";
    }*/
    
    //@PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/")
    public String home() {
        return "home";
    }
    
    //@PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/todaslasnoticias")
    public String moreNews() {
        return "moreNews";
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/nuevanoticia")
    public String newNews() {
        return "NewNews";
    }


    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/uploadpics/{id}")
    public String uploadPics(@PathVariable("id") Long id) {
        return "uploadPics";
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/updatepics/{id}")
    public String updatePics(@PathVariable("id") Long id) {
        return "updatePics";
    }


    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/todas")
    public String AllNews() {
        return "News";
    }

    //@PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/noticias")
    public String News() {
        return "News";
    }

    //@PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/noticias/{id}")
    public String SingleNews(@PathVariable("id") Long id) {
        return "Noticia";
    }


    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/noticias/modificar/{id}")
    public String UpdateNews(@PathVariable("id") Long id) {
        return "UpdateNews";
    }

}
