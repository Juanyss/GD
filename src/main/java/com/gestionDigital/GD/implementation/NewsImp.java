package com.gestionDigital.GD.implementation;

import com.gestionDigital.GD.interfaces.NewsService;
import com.gestionDigital.GD.model.Image;
import com.gestionDigital.GD.model.News;
import com.gestionDigital.GD.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class NewsImp implements NewsService {

    @Autowired
    NewsRepository newsRepository;

    public NewsImp() {
    }

    @Override
    public List<News> findAllPosted() {
        return this.newsRepository.showAllPosted();
    }

    @Override
    public List<News> findAll() {
        return (List<News>) this.newsRepository.showAll();
    }

    @Override
    public News findOne(Long idNews) {
        return this.newsRepository.findOne(idNews);
    }


    @Override
    public News newNews(News news){
        News n = new News();
        saveNews(n,news);
        return this.newsRepository.findLast();
    }

    @Override
    public List<Image> Pics(Long id) {
        return this.newsRepository.Pics(id);
    }

    @Override
    public void deleteNews(Long id) {
        this.newsRepository.deleteById(id);
    }

    @Override
    public News postNews(Long id, News news) {
        News n = this.newsRepository.findOne(id);
        n.setPosted(news.getPosted());
        n.setDate(new SimpleDateFormat("dd/MM/yyyy").format(new Date()));
        this.newsRepository.save(n);
        return this.newsRepository.findOne(id);
    }

    @Override
    public News updateNews(Long id, News news) {
        News n = this.newsRepository.findOne(id);
        saveNews(n,news);
        return this.newsRepository.findOne(id);
    }

    public void saveNews(News n, News news){
        n.setLocation(news.getLocation());
        n.setTitle(news.getTitle());
        n.setIntroduction(news.getIntroduction());
        n.setNews(news.getNews());
        n.setCategory(news.getCategory());
        n.setPosted(news.getPosted());
        n.setLevel(news.getLevel());
        this.newsRepository.save(n);
    }

    @Override
    public List<News> otherNews(Long id) {
        return this.newsRepository.otherNews(id);
    }
}
