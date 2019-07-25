package com.gestionDigital.GD.restController;

import com.gestionDigital.GD.implementation.ImageUploadImp;
import com.gestionDigital.GD.model.Image;
import com.gestionDigital.GD.model.News;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@RestController
@RequestMapping("/api/uploadimage")
public class UploadImageController {

    private ImageUploadImp imageUploadImp;

    public UploadImageController(ImageUploadImp imageUploadImp) {
        this.imageUploadImp = imageUploadImp;
    }

    @GetMapping("/videoTest/{image}")
    public byte[] videoTest(@PathVariable("image") Image image){
        return this.imageUploadImp.getVideo(image);
    }


    @PostMapping("/{id}")
    public void uploadImage(@PathVariable("id") Long id,@RequestParam("imageFile") MultipartFile imageFile,
                            HttpServletResponse response) {
        try {
           this.imageUploadImp.saveImage(id,imageFile);
           response.sendRedirect("/uploadpics/" + id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @PostMapping("/updatepic/{id}")
    public void uploadImageForUpdate(@PathVariable("id") Long id,@RequestParam("imageFile") MultipartFile imageFile,
                            HttpServletResponse response) {
        try {
            this.imageUploadImp.saveImage(id,imageFile);
            response.sendRedirect("/noticias/modificar/" + id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/{id}/{x}")
    public News deletePic(@PathVariable("id") Long id, @PathVariable("x") Long x) {
        return this.imageUploadImp.deletePic(id,x);
    }
}
