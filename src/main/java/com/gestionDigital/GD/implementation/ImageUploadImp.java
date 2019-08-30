package com.gestionDigital.GD.implementation;

import com.gestionDigital.GD.interfaces.ImageUploadService;
import com.gestionDigital.GD.model.Image;
import com.gestionDigital.GD.model.News;
import com.gestionDigital.GD.repository.ImageRepository;
import com.gestionDigital.GD.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageUploadImp implements ImageUploadService {

    @Autowired
    NewsRepository newsRepository;

    @Autowired
    ImageRepository imageRepository;

    public ImageUploadImp() {
    }

    @Override
    public void saveImage(Long id,MultipartFile imageFile) throws Exception { 
        byte[] bytes = imageFile.getBytes();
        Image i = new Image();
        i.setBytes(bytes);
        //System.out.println(orientation);
        
        //i.setOrientation(orientation);
        if(imageFile.getContentType().contains("image")){
            i.setType("image");
        }else if(imageFile.getContentType().contains("video")){
            i.setType("video");
        }
        this.imageRepository.save(i);
        News n = this.newsRepository.findOne(id);
        n.getImagesList().add(i);
        this.newsRepository.save(n);
    }

    @Override
    public byte[] getVideo(Image image) {
        byte[] bytes = image.getBytes();
        return bytes;
    }

    @Override
    public News deletePic(Long id, Long x) {
        News n = this.newsRepository.findOne(id);
        Image i = this.imageRepository.findOne(x);
        n.getImagesList().remove(i);
        this.newsRepository.save(n);
        this.imageRepository.delete(i);
        return n;
    }
    
    @Override
	public void saveImageOrientation(Long id, String orientation) {
    	Image i = this.imageRepository.findOne(id);
    	i.setOrientation(orientation);
    	this.imageRepository.save(i);		
	}
    
    
}
