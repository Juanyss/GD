package com.gestionDigital.GD.restController;

import com.gestionDigital.GD.implementation.NewsImp;
import com.gestionDigital.GD.model.Image;
import com.gestionDigital.GD.model.News;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {
    private NewsImp newsImp;

    public NewsController(NewsImp newsImp) {
        this.newsImp = newsImp;
    }

    @ApiOperation("Show posted news")
    @GetMapping("")
    public List<News> showAllPostedNews() {
        return this.newsImp.findAllPosted();
    }

    @ApiOperation("Show all news")
    @GetMapping("/all")
    public List<News> showAllNews() {
        return this.newsImp.findAll();
    }

    @ApiOperation("Show 1 news by ID")
    @GetMapping("/{id}")
    public News showOneNew(@PathVariable("id") Long id) {
        return this.newsImp.findOne(id);
    }

    @ApiOperation("Bring a list of pics of the new by ID")
    @GetMapping("/pics/{id}")
    public List<Image> amountPics(@PathVariable("id") Long id) {
        return this.newsImp.Pics(id);    }

    @ApiOperation("Create a new News")
    @PostMapping("")
    public News newNews(@RequestBody News news) {
       return this.newsImp.newNews(news);
    }

    @ApiOperation("Change News state (Posted or not posted)")
    @PostMapping("/{id}")
    public News PostNews(@PathVariable("id") Long id, @RequestBody News news) {
        return this.newsImp.postNews(id,news);
    }

    @ApiOperation("Delete a news by ID")
    @DeleteMapping("/{id}")
    public List<News> deleteNews(@PathVariable("id") Long id) {
        this.newsImp.deleteNews(id);
        return this.newsImp.findAll();
    }

    @ApiOperation("Update a news by ID")
    @PutMapping("/{id}")
    public News updateNews(@PathVariable("id") Long id, @RequestBody News news) {
        return this.newsImp.updateNews(id,news);
    }

    @ApiOperation("Bring all news except the one with the associate ID")
    @GetMapping("otherNews/{id}")
    public List<News> otherNews(@PathVariable("id") Long id) {
        return this.newsImp.otherNews(id);
    }

}
