package com.mockexam.mockexamservice.controller;

import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.service.abstracts.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findById(id).orElseThrow();
        return ResponseEntity.ok(user);
    }

    @PostMapping
    public ResponseEntity<String> persistUser(@RequestBody User user) {
        System.out.println(user);
        userService.persist(user);
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

}
