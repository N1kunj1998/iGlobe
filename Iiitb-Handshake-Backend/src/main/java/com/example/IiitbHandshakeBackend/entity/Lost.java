package com.example.IiitbHandshakeBackend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity

public class Lost {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int lostId;
    private String productname;
    private int rollNo;
    private boolean available;

    public Lost(String productname,  int rollNo, boolean available) {
        this.productname = productname;
        this.rollNo = rollNo;
        this.available = available;
    }
}
