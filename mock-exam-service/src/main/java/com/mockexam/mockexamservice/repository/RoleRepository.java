package com.mockexam.mockexamservice.repository;

import com.mockexam.mockexamservice.model.Role;

import java.util.Optional;

public interface RoleRepository extends ReadWriteRepository<Role, Long> {
    Optional<Role> findByName(String name);
}
