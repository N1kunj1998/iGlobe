package com.example.IiitbHandshakeBackend.repo;

import com.example.IiitbHandshakeBackend.entity.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class UserRepoTest {

    @Autowired
    private UserRepo userRepo;

    @Test
    void findByUsername() {
        User user = new User("Nikunj", "123", 84, "njkhakhkhar@gmail.com", "STUDENT","7567071072@upi", true);
        userRepo.save(user);

        User res = userRepo.findByUsername("Nikunj");
        assertThat(res.getUsername()).isEqualTo(user.getUsername());
        userRepo.deleteById(res.getId());
    }
}