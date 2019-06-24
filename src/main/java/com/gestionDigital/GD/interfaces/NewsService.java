package com.gestionDigital.GD.interfaces;

import com.gestionDigital.GD.model.News;

import java.util.List;

public interface NewsService {

    List<News> findAll();

    List<News> newNews(News news);

    //void delete(Long id);

    News findOne(Long id);
}
