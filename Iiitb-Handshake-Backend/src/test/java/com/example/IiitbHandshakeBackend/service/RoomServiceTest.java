package com.example.IiitbHandshakeBackend.service;

import com.example.IiitbHandshakeBackend.entity.Room;
import com.example.IiitbHandshakeBackend.entity.Sell;
import com.example.IiitbHandshakeBackend.repo.RoomRepo;
import com.example.IiitbHandshakeBackend.repo.SellRepo;
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
class RoomServiceTest {

    @Autowired
    private RoomService roomService;

    @MockBean
    private RoomRepo roomRepo;

    @Test
    void addRoom() {
        Room room = new Room(1,"banglore", 1000, "", true);
        Mockito.when(roomRepo.save(room)).thenReturn(room);
        Assertions.assertThat(roomService.addRoom(room)).isEqualTo(room);
    }

    @Test
    void getRooms() {
    }
}