package com.mockexam.mockexamservice.service.abstracts;

import com.mockexam.mockexamservice.model.Role;

import java.util.Optional;

public interface RoleService extends ReadWriteService<Role, Long>{

    Optional<Role> findRoleByName(String name);

}
