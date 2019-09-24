package com.gestionDigital.GD.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static springfox.documentation.builders.PathSelectors.regex;

@EnableSwagger2
@Configuration
@Profile("dev")
public class SwaggerConfig {
    @Bean
    public Docket GestionDigital(){
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.gestionDigital.GD"))
                .paths(regex("/api.*"))
                .build()
                .apiInfo(metaInfo());
    }



    private ApiInfo metaInfo() {
        return new ApiInfoBuilder()
                .title("Gestion Digital")
                .description("Online news portal")
                .version("1.0")
                .contact(new Contact("Juany", "https://github.com/Juanyss", "Juanyss88@gmail.com"))
                .build();
    }
}
