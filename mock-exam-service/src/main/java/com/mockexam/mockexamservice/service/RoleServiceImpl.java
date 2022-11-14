package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.Role;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.repository.RoleRepository;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.abstracts.RoleService;
import com.mockexam.mockexamservice.service.mapper.RoleMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class RoleServiceImpl extends ReadWriteServiceAbstraction<Role, Long> implements RoleService {

    private final RoleRepository roleRepository;
    private final RoleMapper roleMapper;

    public RoleServiceImpl(ReadWriteRepository<Role, Long> readWriteRepository, RoleRepository roleRepository, RoleMapper roleMapper) {
        super(readWriteRepository);
        this.roleRepository = roleRepository;
        this.roleMapper = roleMapper;
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<Role> findRoleByName(String name) {
        return roleRepository.findByName(name);
    }

    @Transactional
    @Override
    public Role update(Role entity) {
        Role toUpdate = roleRepository.findById(entity.getId()).orElseThrow(); //todo: add logic
        return roleRepository.save(roleMapper.updateMapping(entity, toUpdate));
    }
}
