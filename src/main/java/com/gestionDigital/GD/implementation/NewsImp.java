package com.gestionDigital.GD.implementation;

import com.gestionDigital.GD.interfaces.NewsService;
import com.gestionDigital.GD.model.News;
import com.gestionDigital.GD.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class NewsImp implements NewsService {

    @Autowired
    NewsRepository newsRepository;

    public NewsImp() {
    }

    @Override
    public List<News> findAll() {
        return (List<News>) this.newsRepository.findAll();
    }

    @Override
    public News findOne(Long idNews) {
        return this.newsRepository.findOne(idNews);
    }

    @Override
    public List<News> newNews(News news){
        News n = new News();
        n.setTitle(news.getTitle());
        n.setIntroduction(news.getIntroduction());
        n.setNews(news.getNews());
        this.newsRepository.save(n);
        return (List<News>) this.newsRepository.findAll();
    }
}
