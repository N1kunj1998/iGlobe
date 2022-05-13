package com.example.IiitbHandshakeBackend.controller;

import com.example.IiitbHandshakeBackend.entity.Sell;
import com.example.IiitbHandshakeBackend.service.SellService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@CrossOrigin("*")
//@RequestMapping("/sell")
public class SellController {
    private static final Logger logger = LogManager.getLogger(SellController.class);

    @Autowired
    private SellService sellService;

    @PostMapping("/sell/addItem")
    public ResponseEntity<?> addItem(@RequestBody Sell sell){
        logger.info("New Item Added : " + sell);
        return ResponseEntity.ok(sellService.addItem(sell));
    }

    @GetMapping("/sell/getDetails/{sid}")
    public ResponseEntity<?> getDetails(@PathVariable("sid") int sid){
        logger.info("Get Details : " + Integer.toString(sid));
        return ResponseEntity.ok(sellService.getDetails(sid));
    }


}
