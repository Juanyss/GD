package com.gestionDigital.GD.repository;


import com.gestionDigital.GD.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByName(String username);
}
