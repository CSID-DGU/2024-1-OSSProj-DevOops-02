package com.example.demo.repository;

import com.example.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    User findByNickname(String nickname);

    Optional<User> findById(Long userId);

    void deleteById(Long userId);

    @Modifying
    @Query("UPDATE User u SET u.resume = :resume WHERE u.id = :id")
    void updateResume(@Param("resume") String resume, @Param("id") Long id);
}