package com.gestionDigital.GD.restController;

import com.gestionDigital.GD.implementation.ImageUploadImp;
import com.gestionDigital.GD.model.Image;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.util.List;


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
}
