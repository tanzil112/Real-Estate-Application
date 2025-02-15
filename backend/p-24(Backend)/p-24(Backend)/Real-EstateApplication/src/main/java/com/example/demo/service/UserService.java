package com.example.demo.service;

import java.util.Optional;
import java.util.logging.Logger;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;



@Service
public class UserService {
	@Autowired
    private UserRepository userRepository;
	
	private static final Logger logger = Logger.getLogger(UserService.class.getName());

    // Regular Expression for password validation
    private static final String PASSWORD_PATTERN = "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$";

    // User Management Services
    public String register(User user, String confirmPassword) {
        // Validate password
        if (!Pattern.matches(PASSWORD_PATTERN, user.getPassword())) {
            return "Password must be alphanumeric and include at least one special character.";
        }

        // Validate confirmPassword
        if (!user.getPassword().equals(confirmPassword)) {
            return "Passwords do not match.";
        }

        // Check if email is already registered
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return "Email is already registered.";
        }

        try {
            userRepository.save(user);
        } catch (Exception e) {
            logger.severe("Error during user registration: " + e.getMessage());
            return "An error occurred during registration.";
        }

        return "User registered successfully!";
    }

    public Optional<User> login(String email, String password) {
        return userRepository.findByUsername(email)
                .filter(user -> user.getPassword().equals(password));
    }

	public String generateToken(User loggedInUser) {
		// TODO Auto-generated method stub
		return null;
	}


}
