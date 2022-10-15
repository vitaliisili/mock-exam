package com.mockexam.mockexamservice.repository;

import com.mockexam.mockexamservice.model.User;

import java.util.Optional;

public interface UserRepository extends ReadWriteRepository<User, Long> {

    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
}
