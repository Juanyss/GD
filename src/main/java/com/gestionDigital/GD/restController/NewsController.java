package com.gestionDigital.GD.restController;

import com.gestionDigital.GD.implementation.NewsImp;
import com.gestionDigital.GD.model.Image;
import com.gestionDigital.GD.model.News;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {
    private NewsImp newsImp;

    public NewsController(NewsImp newsImp) {
        this.newsImp = newsImp;
    }

    @GetMapping("")
    public List<News> showAllPostedNews() {
        return this.newsImp.findAllPosted();
    }

    @GetMapping("/all")
    public List<News> showAllNews() {
        return this.newsImp.findAll();
    }

    @GetMapping("/{id}")
    public News showOneNew(@PathVariable("id") Long id) {
        return this.newsImp.findOne(id);
    }

    @GetMapping("/pics/{id}")
    public List<Image> amountPics(@PathVariable("id") Long id) {
        return this.newsImp.Pics(id);    }

    @PostMapping("")
    public News newNews(@RequestBody News news) {
       return this.newsImp.newNews(news);
    }

    @PostMapping("/{id}")
    public void PostNews(@PathVariable("id") Long id, @RequestBody News news) {
        this.newsImp.postNews(id,news);
    }

    @DeleteMapping("/{id}")
    public List<News> deleteNews(@PathVariable("id") Long id) {
        this.newsImp.deleteNews(id);
        return this.newsImp.findAll();
    }

}
