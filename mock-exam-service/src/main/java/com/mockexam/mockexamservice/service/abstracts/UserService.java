package com.mockexam.mockexamservice.service.abstracts;

import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.model.dto.UserDto;

import java.util.Optional;

public interface UserService extends ReadWriteService<User, Long>{

    void update(UserDto userDto);
    void persist(UserDto userDto);
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);

}
