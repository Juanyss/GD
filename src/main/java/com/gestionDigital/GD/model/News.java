package com.gestionDigital.GD.model;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "News")
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idNews;
    private String location;
    private String title;
    private String introduction;
    private String news;
    private String category;
    private Level level;
    private String posted = "no";

    @OneToMany(targetEntity=Image.class, cascade = CascadeType.ALL)
    private List<Image> imagesList;

    private String date;


    public News() {
    }

    public News(String location, String title, String introduction, String news, String category, Level level) {
        this.location = location;
        this.title = title;
        this.introduction = introduction;
        this.news = news;
        this.category = category;
        this.level = level;
        this.imagesList = new ArrayList<>();
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Long getIdNews() {
        return idNews;
    }

    public void setIdNews(Long idNews) {
        this.idNews = idNews;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public String getNews() {
        return news;
    }

    public void setNews(String news) {
        this.news = news;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }



    public List<Image> getImagesList() {
        return imagesList;
    }

    public void setImagesList(List<Image> imagesList) {
        this.imagesList = imagesList;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getPosted() {
        return posted;
    }

    public void setPosted(String posted) {
        this.posted = posted;
    }


    //Enum for News importance level
    public enum Level{
        NORMAL, IMPORTANTE;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    @Override
    public String toString() {
        return "News{" +
                "idNews=" + idNews +
                ", location='" + location + '\'' +
                ", title='" + title + '\'' +
                ", introduction='" + introduction + '\'' +
                ", news='" + news + '\'' +
                ", category='" + category + '\'' +
                ", level='" + level + '\'' +
                ", posted='" + posted + '\'' +
                ", imagesList=" + imagesList +
                ", date='" + date + '\'' +
                '}';
    }
}
