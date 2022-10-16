package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.exception.BadRequestException;
import com.mockexam.mockexamservice.exception.RoleNotFoundException;
import com.mockexam.mockexamservice.model.Role;
import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.repository.UserRepository;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.abstracts.RoleService;
import com.mockexam.mockexamservice.service.abstracts.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImpl extends ReadWriteServiceAbstraction<User, Long> implements UserService {

    private final UserRepository userRepository;
    private final RoleService roleService;

    public UserServiceImpl(ReadWriteRepository<User, Long> readWriteRepository, UserRepository userRepository, RoleService roleService) {
        super(readWriteRepository);
        this.userRepository = userRepository;
        this.roleService = roleService;
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Transactional(readOnly = true)
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Transactional(readOnly = true)
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Transactional
    @Override
    public void persist(User user) {
        if (existsByUsername(user.getUsername())) {
            throw new BadRequestException(String.format("User with username %s already exist", user.getUsername()));
        }

        if (existsByEmail(user.getEmail())) {
            throw new BadRequestException(String.format("User with email %s already exist", user.getEmail()));
        }

        if (user.getRoles() == null || user.getRoles().isEmpty()) {
            Role role = roleService.findRoleByName("ROLE_USER").orElseThrow(() ->
                    new RoleNotFoundException("Role doesn't exist please contact support"));
            user.setRoles(Set.of(role));
        }
        userRepository.save(user);
    }

}
