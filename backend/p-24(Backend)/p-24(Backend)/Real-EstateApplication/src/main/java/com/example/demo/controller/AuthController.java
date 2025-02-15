package com.example.demo.controller;

import com.example.demo.model.*;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.print.attribute.standard.Destination;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserService userService;

    // Authentication and User Management
    @PostMapping("/auth/register")
    public ResponseEntity<String> registerUser(@RequestBody User user, @RequestParam String confirmPassword) {
        String response = userService.register(user, confirmPassword);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        if (user.getUsername() == null || user.getUsername().isEmpty() ||
            user.getPassword() == null || user.getPassword().isEmpty()) {
            return ResponseEntity.badRequest().body("Username and password cannot be empty");
        }

        Optional<User> existingUser = userService.login(user.getUsername(), user.getPassword());
        return existingUser.isPresent()
                ? ResponseEntity.ok("Login successful!")
                : ResponseEntity.badRequest().body("Invalid username or password");
    }
    
}
