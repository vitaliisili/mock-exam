package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.model.dto.UserDto;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.repository.UserRepository;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.abstracts.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserServiceImpl extends ReadWriteServiceAbstraction<User, Long> implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(ReadWriteRepository<User, Long> readWriteRepository, UserRepository userRepository) {
        super(readWriteRepository);
        this.userRepository = userRepository;
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

    @Override
    public void update(UserDto userDto) {
        //TODO: add implementation
    }

    @Override
    public void persist(UserDto userDto) {
       //TODO: add implementation
    }
}
