package com.example.IiitbHandshakeBackend.controller;

import com.example.IiitbHandshakeBackend.IiitbHandshakeBackendApplication;
import com.example.IiitbHandshakeBackend.entity.LoginRequest;
import com.example.IiitbHandshakeBackend.entity.User;
import com.example.IiitbHandshakeBackend.service.UserService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@RestController
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    private static final Logger logger = LogManager.getLogger(UserController.class);

    @PostMapping("/addUser")
    public ResponseEntity<?> addUser(@RequestBody User user){
        user = userService.addUser(user);
        logger.info("New User Signing Up: " + user + "\n ");
        return ResponseEntity.ok(user);
    }

    @PostMapping("/validate")
    public ResponseEntity<?> signinUser(@RequestBody LoginRequest loginRequest){
        System.out.println(loginRequest);
        logger.info("User" +loginRequest.getUsername() + " Signing Up ");
        return ResponseEntity.ok(userService.signinUser(loginRequest));
    }

    @PostMapping("/reset")
    public ResponseEntity<?> resetPassword(@RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(userService.resetPassword(loginRequest));
    }

    @GetMapping("/test")
    public String test(){
        return "<h1>test</h1>";
    }

    @PostConstruct()
    public void testLogs(){
        logger.info("Logs are getting generated\n");
    }
}
