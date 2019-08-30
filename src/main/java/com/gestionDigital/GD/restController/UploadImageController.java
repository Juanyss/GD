package com.gestionDigital.GD.restController;

import com.gestionDigital.GD.implementation.ImageUploadImp;
import com.gestionDigital.GD.model.Image;
import com.gestionDigital.GD.model.News;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/uploadimage")
public class UploadImageController {

	private ImageUploadImp imageUploadImp;

	public UploadImageController(ImageUploadImp imageUploadImp) {
		this.imageUploadImp = imageUploadImp;
	}

	@ApiOperation("Show a file (image, video or audio) by Image")
	@GetMapping("/videoTest/{image}")
	public byte[] videoTest(@PathVariable("image") Image image) {
		return this.imageUploadImp.getVideo(image);
	}

	@ApiOperation("Save a image, video or audio on a News")
	@PostMapping("/{id}")
	public void uploadImage(@PathVariable("id") Long id, @RequestParam("imageFile") MultipartFile imageFile,
			HttpServletResponse response) {
		try {
			this.imageUploadImp.saveImage(id, imageFile);
			response.sendRedirect("/uploadpics/" + id);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@ApiOperation("Save a image, video or audio on a News")
	@PostMapping("/orientation/{id}")
	public void uploadImage(@PathVariable("id") Long id, @RequestBody Image orientation) {
		this.imageUploadImp.saveImageOrientation(id, orientation.getOrientation());
	}

	@ApiOperation("Update  images, videos or audios on News detected by id")
	@PostMapping("/update/{id}")
	public void updateImage(@PathVariable("id") Long id, @RequestParam("imageFile") MultipartFile imageFile,
			HttpServletResponse response) {
		try {
			this.imageUploadImp.saveImage(id, imageFile);
			response.sendRedirect("/updatepics/" + id);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@ApiOperation("Delete a file from a new")
	@GetMapping("/{id}/{x}")
	public News deletePic(@PathVariable("id") Long id, @PathVariable("x") Long x) {
		return this.imageUploadImp.deletePic(id, x);
	}

}
