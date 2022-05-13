package com.example.IiitbHandshakeBackend.controller;

import com.example.IiitbHandshakeBackend.entity.Donate;
import com.example.IiitbHandshakeBackend.entity.Lost;
import com.example.IiitbHandshakeBackend.service.DonateService;
import com.example.IiitbHandshakeBackend.service.LostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController()
public class LostController {
    @Autowired
    private LostService lostService;

    @PostMapping("/lost/addItem")
    public ResponseEntity<?> addItem(@RequestBody Lost lost){
        System.out.println(lost);
        return ResponseEntity.ok(lostService.addItem(lost));
    }

    @GetMapping("/lost/getDetails/{lId}")
    public ResponseEntity<?> getDetails(@PathVariable("lId") int lId){
        return ResponseEntity.ok(lostService.getDetails(lId));
    }

//    @GetMapping("/donate/getAllDetails")
//    public ResponseEntity<?> getAllDetails(){
//        return ResponseEntity.ok(donateService.getAllDetails());
//    }
}
