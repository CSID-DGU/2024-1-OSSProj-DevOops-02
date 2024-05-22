package com.example.demo;

import com.example.demo.mapper.*;
import com.example.demo.repository.*;
import com.example.demo.service.*;
import org.mapstruct.factory.Mappers;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan(basePackages = {"com.example.demo"})
@EnableJpaRepositories(basePackages = "com.example.demo.repository")
@EnableTransactionManagement
public class SpringConfig {
    @Bean
    public UserMapper userMapper() {
        return Mappers.getMapper(UserMapper.class);
    }

    @Bean
    public ProjectMapper projectMapper() {
        return Mappers.getMapper(ProjectMapper.class);
    }

    @Bean
    public CourseMapper courseMapper() {
        return Mappers.getMapper(CourseMapper.class);
    }

    @Bean
    public StatusMapper statusMapper() {
        return Mappers.getMapper(StatusMapper.class);
    }

    @Bean
    public ProjectLikeMapper projectLikeMapper() {
        return Mappers.getMapper(ProjectLikeMapper.class);
    }

}