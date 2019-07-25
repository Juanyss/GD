package com.gestionDigital.GD.repository;

import com.gestionDigital.GD.model.Image;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends CrudRepository<Image, Long> {
    @Query("select i from Image i where i.idImage = :id")
    Image findOne(@Param("id") Long id );

    @Query("select i.bytes from Image i where i.idImage = :id")
    byte[] getVideo(@Param("id") Long id);

    @Query("select i from Image i where i.idImage = :id")
    List<Image> picList(Long id);
}
