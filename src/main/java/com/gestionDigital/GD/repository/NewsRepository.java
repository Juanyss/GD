package com.gestionDigital.GD.repository;

import com.gestionDigital.GD.model.Image;
import com.gestionDigital.GD.model.News;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepository extends CrudRepository<News, Long> {
     @Query("select n from News n where n.posted = 'si' AND n.level = 0 order by n.idNews desc")
     List<News> showAllPosted(PageRequest pageRequest);

     @Query("select n from News n where n.posted = 'si' and n.level = 1 order by n.idNews desc")
     List<News> showAllImportantPosted(PageRequest of);

     @Query("select n from News n order by n.idNews desc")
     List<News> showAll(PageRequest of);

     @Query("select n from News n where n.idNews = :id")
     News findOne(@Param("id") Long id);

     @Query("select max(n) from News n order by n.idNews desc")
     News findLast();

     @Query("select n.imagesList from News n where n.idNews = :id")
     List<Image> Pics(@Param("id") Long id);

     @Query("select n from News n where n.posted = 'si' and n.idNews <> :id order by n.idNews desc")
     List<News> otherNews(@Param("id") Long id);
     
     @Query("select n from News n where n.posted = 'si' order by n.idNews desc")
	 List<News> showAllImportantAndNormalNewsPosted(PageRequest of);

	


}
