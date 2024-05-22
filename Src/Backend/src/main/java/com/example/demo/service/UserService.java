package com.example.demo.service;

import com.example.demo.domain.User;
import com.example.demo.dto.UserDTO;
import com.example.demo.mapper.UserMapper;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Autowired
    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::userToUserDTO)
                .collect(Collectors.toList());
    }

    public UserDTO createUser(UserDTO userDto) {
        User user = userMapper.userDTOToUser(userDto);
        user = userRepository.save(user);
        return userMapper.userToUserDTO(user);
    }

    public UserDTO loginUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return userMapper.userToUserDTO(user);
        } else {
            return null;
        }
    }
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public boolean testConnection() {
        return userRepository.count() >= 0; // 그냥 연결 확인용으로 count 쿼리 사용
    }

    // 이력서 조회
    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }


    // 이력서 저장
    public void saveResume(Long userId, String resume) {
        User user = getUserById(userId);
        if (user != null) {
            user.setResume(resume);
            userRepository.save(user);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    // 이력서 수정
    public void updateResume(Long userId, String resume) {
        User user = getUserById(userId);
        if (user != null) {
            userRepository.updateResume(resume, userId);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    // 이력서 삭제
    public void deleteResume(Long userId) {
        User user = getUserById(userId);
        if (user != null) {
            user.setResume(null);
            userRepository.save(user);
        } else {
            throw new RuntimeException("User not found");
        }
    }

}