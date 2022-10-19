package com.mockexam.mockexamservice.security;

import com.mockexam.mockexamservice.service.abstracts.UserService;
import com.mockexam.mockexamservice.service.mapper.UserMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class JwtController {

    private final JwtUtils jwtUtils;
    private final UserService userService;
    private final UserMapper userMapper;

    @PostMapping("/sign-up")
    public ResponseEntity<JwtResponse> registerUser(@Valid @RequestBody SingUpRequest singUpRequest) {
        userService.persist(userMapper.toUser(singUpRequest));
        return ResponseEntity.ok(jwtUtils.generateJwtToken(singUpRequest.getUsername()));
    }

    @PostMapping("/sign-in")
    public ResponseEntity<JwtResponse> loginUser(@Valid @RequestBody SignInRequest signInRequest) {
        return ResponseEntity.ok(jwtUtils.generateJwtToken(signInRequest.getUsername()));
    }

}
