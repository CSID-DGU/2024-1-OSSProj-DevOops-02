package com.example.demo.controller;

import com.example.demo.domain.User;
import com.example.demo.dto.UserDTO;
import com.example.demo.service.UserService;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/join")
    public UserDTO joinUser(@RequestBody UserDTO userDto) {
        return userService.createUser(userDto);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody UserDTO userDto, HttpSession session) {
        UserDTO loggedInUser = userService.loginUser(userDto.getEmail(), userDto.getPassword());
        if (loggedInUser != null) {
            session.setAttribute("user", loggedInUser);
            return "Login successful!";
        } else {
            return "Invalid email or password.";
        }
    }

    @GetMapping("/logout")
    public String logoutUser(HttpSession session) {
        session.invalidate();
        return "Logout successful!";
    }

    // DB 연결 테스트용 엔드포인트
    @GetMapping("/test")
    public String testDBConnection() {
        try {
            boolean isConnected = userService.testConnection();
            return isConnected ? "DB 연결 성공" : "DB 연결 실패";
        } catch (Exception e) {
            return "DB 연결 실패: " + e.getMessage();
        }
    }

    // 이력서 관련 API
    @GetMapping("/{userId}/resume/info")
    public ResponseEntity<String> getResume(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        if (user != null && user.getResume() != null) {
            return ResponseEntity.ok(user.getResume());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/{userId}/resume/create")
    public ResponseEntity<String> saveResume(@PathVariable Long userId, @RequestBody String resume) {
        try {
            userService.saveResume(userId, resume);
            return ResponseEntity.status(201).body("Resume created successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{userId}/resume/modify")
    public ResponseEntity<String> updateResume(@PathVariable Long userId, @RequestBody String resume) {
        try {
            userService.updateResume(userId, resume);
            return ResponseEntity.ok("Resume updated successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{userId}/resume/remove")
    public ResponseEntity<Void> deleteResume(@PathVariable Long userId) {
        try {
            userService.deleteResume(userId);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


}