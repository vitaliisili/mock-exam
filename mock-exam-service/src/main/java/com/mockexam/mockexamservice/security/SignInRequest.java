package com.mockexam.mockexamservice.security;

import lombok.*;
import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class SignInRequest {

    @NotBlank
    private String username;

    @NotBlank
    private String password;
}
