package com.gestionDigital.GD.interfaces;

import com.gestionDigital.GD.model.Image;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ImageUploadService {
    void saveImage(Long id, MultipartFile imageFile) throws Exception;

    byte[] getVideo(Image image);
}
