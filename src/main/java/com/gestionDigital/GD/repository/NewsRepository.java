package com.gestionDigital.GD.repository;

import com.gestionDigital.GD.model.News;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends CrudRepository<News, Long> {
    @Query("select n from News n where n.id = :id")
    News findOne(@Param("id") Long id);
}
