package com.gestionDigital.GD;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;



@SpringBootApplication
public class GdApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(GdApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(GdApplication.class).profiles("dev");
	}

}
