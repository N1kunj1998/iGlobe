package com.example.IiitbHandshakeBackend.service;

import com.example.IiitbHandshakeBackend.entity.User;
import com.example.IiitbHandshakeBackend.repo.UserRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


@RunWith(SpringRunner.class)
@SpringBootTest
class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @MockBean
    private UserRepo userRepo;
//
//    @BeforeEach
//    void setUp() {
//        this.userService = new UserService(this.userRepo);
//    }

    @Test
    void addUser() {
        User usr = new User("Nikunj", "123", 84, "njkhakhkhar@gmail.com", "STUDENT","7567071072@upi", true);
//        doNothing().when(userRepo).save(usr);
//        userService.addUser(usr);



//        when(userRepo.save(any())).thenReturn(usr);
//        assertThat(userService.addUser(usr)).isEqualTo(usr);
//        userService.addUser(usr);
//        verify(userRepo,times(1)).save(any());
    }

    @Test
    void signinUser() {
    }

    @Test
    void resetPassword() {
    }
}