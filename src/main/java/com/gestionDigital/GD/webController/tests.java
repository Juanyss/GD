package com.gestionDigital.GD.webController;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class tests {
    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/")
    public String home() {
        return "NewNews";
    }


    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/uploadpics/{id}")
    public String uploadPics(@PathVariable("id") Long id) {
        return "uploadPics";
    }




    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/todas")
    public String AllNews() {
        return "News";
    }


    @GetMapping(value = "/noticias")
    public String News() {
        return "News";
    }



    @GetMapping(value = "/noticias/{id}")
    public String SingleNews(@PathVariable("id") Long id) {
        return "Noticia";
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/noticias/modificar/{id}")
    public String UpdateNews(@PathVariable("id") Long id) {
        return "SingleNews";
    }


}
