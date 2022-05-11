package com.example.IiitbHandshakeBackend.service;

import com.example.IiitbHandshakeBackend.entity.Donate;
import com.example.IiitbHandshakeBackend.entity.Room;
import com.example.IiitbHandshakeBackend.repo.DonateRepo;
import com.example.IiitbHandshakeBackend.repo.RoomRepo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class DonateServiceTest {

    @Autowired
    private DonateService donateService;

    @MockBean
    private DonateRepo donateRepo;

    @Test
    void addItem() {
        Donate donate = new Donate("chair","a nice chair","", 84,true);
        Mockito.when(donateRepo.save(donate)).thenReturn(donate);
        Assertions.assertThat(donateService.addItem(donate)).isEqualTo(donate);
    }

    @Test
    void getDetails() {
    }

    @Test
    void getProducts() {
    }

    @Test
    void buyProduct() {
    }
}