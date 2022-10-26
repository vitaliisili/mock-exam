package com.mockexam.mockexamservice.controller;

import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.model.dto.UserDto;
import com.mockexam.mockexamservice.service.abstracts.UserService;
import com.mockexam.mockexamservice.service.mapper.UserMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/user")
@Slf4j
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        Iterable<User> users = userService.findAll();
        return ResponseEntity.ok(userMapper.toUserListDto(users));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(userMapper.toUserDto(user.get()));
        }
        return new ResponseEntity<>(String.format("User with id %s not found", id), HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<String> persistUser(@RequestBody UserDto userDto) {
        userService.persist(userMapper.toUser(userDto));
        return ResponseEntity.ok("User has been saved successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable Long id) {
        userService.deleteById(id);
        return ResponseEntity.ok("User has been deleted successful");
    }

    @PutMapping
    public ResponseEntity<String> updateUser(@RequestBody User user) {
        userService.update(user);
        return ResponseEntity.ok("User has been updated successful");
    }

    @GetMapping("/principal")
    public ResponseEntity<UserDto> getPrincipal(Principal principal) {
        User user = userService.findByUsername(principal.getName()).orElseThrow(); //Todo: throw error
        log.info("Turn {}", user.getFirstName());
        return ResponseEntity.ok(userMapper.toUserDto(user));
    }

}
