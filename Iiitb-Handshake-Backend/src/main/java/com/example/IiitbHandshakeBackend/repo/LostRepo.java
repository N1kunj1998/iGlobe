package com.example.IiitbHandshakeBackend.repo;

import com.example.IiitbHandshakeBackend.entity.Donate;
import com.example.IiitbHandshakeBackend.entity.Lost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LostRepo extends JpaRepository<Lost, Integer> {
//    public List<Donate> getAllByAvailableExistsOrderBy();
public List<Lost> findAllByAvailableIsTrue();
}
