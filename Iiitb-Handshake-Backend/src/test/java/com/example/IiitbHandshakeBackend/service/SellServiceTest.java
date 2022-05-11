package com.example.IiitbHandshakeBackend.service;

import com.example.IiitbHandshakeBackend.entity.Sell;
import com.example.IiitbHandshakeBackend.repo.SellRepo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
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
class SellServiceTest {

    @Autowired
    private SellService sellService;

    @MockBean
    private SellRepo sellRepo;


    @Test
    void addItem() {

        Sell sell = new Sell("chair","","a nice chair", 84, 1000,true, 1);
        Mockito.when(sellRepo.save(sell)).thenReturn(sell);
        Assertions.assertThat(sellService.addItem(sell)).isEqualTo(sell);
    }

    @Test
    void getDetails() {
        sellService.getDetails(1);
        Mockito.verify(sellRepo).findById(1);
    }

    @Test
    void getProducts() {
        sellService.getProducts();
        Mockito.verify(sellRepo).findAllByAvailableIsTrue();
    }

    @Test
    void buyProduct() {

    }

}