package com.gestionDigital.GD.model;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table(name = "Image")
public class Image {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idImage;

	@Column(name = "ImageByte", columnDefinition = "LONGBLOB")
	private byte[] bytes;

	@Column(name = "type")
	private String type;

	@Column(name = "orientation")
	private String orientation;

	public Image() {
	}

	public Image(byte[] bytes, String type, String orientation) {
		this.bytes = bytes;
		this.type = type;
		this.orientation = orientation;
	}

	public Long getIdImage() {
		return idImage;
	}

	public void setIdImage(Long idImage) {
		this.idImage = idImage;
	}

	public byte[] getBytes() {
		return bytes;
	}

	public void setBytes(byte[] bytes) {
		this.bytes = bytes;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	

	public String getOrientation() {
		return orientation;
	}

	public void setOrientation(String orientation) {
		this.orientation = orientation;
	}

	@Override
	public String toString() {
		return "Image [idImage=" + idImage + ", bytes=" + Arrays.toString(bytes) + ", type=" + type + ", orientation="
				+ orientation + "]";
	}

	
}
