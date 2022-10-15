package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.Role;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.repository.RoleRepository;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.abstracts.RoleService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class RoleServiceImpl extends ReadWriteServiceAbstraction<Role, Long> implements RoleService {

    private final RoleRepository roleRepository;

    public RoleServiceImpl(ReadWriteRepository<Role, Long> readWriteRepository, RoleRepository roleRepository) {
        super(readWriteRepository);
        this.roleRepository = roleRepository;
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<Role> findRoleByName(String name) {
        return roleRepository.findByName(name);
    }
}
