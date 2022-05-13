package com.example.IiitbHandshakeBackend.controller;

import com.example.IiitbHandshakeBackend.service.DonateService;
import com.example.IiitbHandshakeBackend.service.LostService;
import com.example.IiitbHandshakeBackend.service.SellService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.websocket.server.PathParam;

@CrossOrigin("*")
@RestController()
public class BuyController {
    private static final Logger logger = LogManager.getLogger(UserController.class);

    @Autowired
    private DonateService donateService;

    @Autowired
    private SellService sellService;

    @Autowired
    private LostService lostService;

    @GetMapping("/getDonateProducts")
    public ResponseEntity<?> getDonateProduct(){
        return ResponseEntity.ok(donateService.getProducts());
    }

    @GetMapping("/getLostProducts")
    public ResponseEntity<?> getLostProduct(){
        return ResponseEntity.ok(lostService.getProducts());
    }

    @GetMapping("/getSellProducts")
    public ResponseEntity<?> getSellProduct(){
        return ResponseEntity.ok(sellService.getProducts());
    }

    @PostMapping("/buyDonateProduct/{donateId}")
    public ResponseEntity<?> buyDonateProduct(@PathVariable("donateId") String donateId){
        return ResponseEntity.ok(donateService.buyProduct(donateId));
    }

    @PostMapping("/buyLostProduct/{lostId}")
    public ResponseEntity<?> buyLostProduct(@PathVariable("lostId") String lostId){
        return ResponseEntity.ok(lostService.buyProduct(lostId));
    }

    @GetMapping("/buySellProduct/{sId}/{uId}")
    public ResponseEntity<?> buySellProduct(@PathVariable("sId") String sId, @PathVariable("uId") String uId){
        System.out.println("buySellProduct" + sId);
        return ResponseEntity.ok(sellService.buyProduct(sId, uId));
    }
}
