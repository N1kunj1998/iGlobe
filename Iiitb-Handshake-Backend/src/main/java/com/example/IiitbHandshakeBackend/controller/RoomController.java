package com.example.IiitbHandshakeBackend.controller;

import com.example.IiitbHandshakeBackend.entity.Room;
import com.example.IiitbHandshakeBackend.service.RoomService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class RoomController {
    private static final Logger logger = LogManager.getLogger(RoomController.class);

    @Autowired
    private RoomService roomService;

    @PostMapping("/addRoom")
    public ResponseEntity<?> addRoom(@RequestBody Room room){
        try{
            room = roomService.addRoom(room);
            logger.info("New Room Added Successfully : " + room);
        }
        catch (Exception e){
            e.printStackTrace();
            logger.error("Error in Adding new Item : " + room);
        }
        return ResponseEntity.ok(room);
    }

    @GetMapping("/getRooms")
    public ResponseEntity<?> getRooms(){
        logger.info("Get rooms method was called");
        return ResponseEntity.ok(roomService.getRooms());
    }
}
