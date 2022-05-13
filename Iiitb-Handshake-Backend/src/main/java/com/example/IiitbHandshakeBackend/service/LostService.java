package com.example.IiitbHandshakeBackend.service;

import com.example.IiitbHandshakeBackend.entity.Donate;
import com.example.IiitbHandshakeBackend.entity.Lost;
import com.example.IiitbHandshakeBackend.repo.DonateRepo;
import com.example.IiitbHandshakeBackend.repo.LostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LostService {
    @Autowired
    private LostRepo lostRepo;

    public Lost addItem(Lost lost){
        lost.setAvailable(true);
        return lostRepo.save(lost);
    }

    public Lost getDetails(int lostId){
        return lostRepo.findById(lostId).orElse(null);
    }

//    public List<Donate> getAllDetails(){
//        return donateRepo.getAllByAvailableExistsOrderBy();
//    }

    public List<Lost> getProducts(){
        return lostRepo.findAllByAvailableIsTrue();
    }

    public Lost buyProduct(String lostId){
        int lId = Integer.parseInt(lostId);
        Lost lost = lostRepo.findById(lId).orElse(null);
        if(lost != null){
            lost.setAvailable(false);
            return lostRepo.save(lost);
        }
        return lost;
    }
}
