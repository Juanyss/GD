package com.gestionDigital.GD.restController;

import com.gestionDigital.GD.implementation.NewsImp;
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
    public List<News> showAllDistributors() {
        return this.newsImp.findAll();
    }

    @GetMapping("/{id}")
    public News showOneDistributor(@PathVariable("id") Long id) {
        return this.newsImp.findOne(id);    }


    @PostMapping("")
    public List<News> newNews(@RequestBody News news) {
        this.newsImp.newNews(news);
        return this.newsImp.findAll();
    }

}
