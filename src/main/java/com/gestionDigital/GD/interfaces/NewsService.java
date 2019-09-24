package com.gestionDigital.GD.interfaces;

import com.gestionDigital.GD.model.Image;
import com.gestionDigital.GD.model.News;

import java.util.List;

public interface NewsService {

    List<News> findAllPosted();

    News newNews(News news);

    List<News> findAll(int page);

    News findOne(Long id);

    List<Image> Pics(Long id);

    void deleteNews(Long id);

    News postNews(Long id, News news);

    News updateNews(Long id, News news);

    List<News> otherNews(Long id);

    List<News> findAllImportantPosted();

	List<News> moreNews(int page);

	

	
}
