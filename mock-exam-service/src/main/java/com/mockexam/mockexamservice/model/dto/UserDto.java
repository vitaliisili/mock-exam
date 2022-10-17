package com.mockexam.mockexamservice.model.dto;

import lombok.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class UserDto {

    private Long id;
    private String email;
    private String username;
    private String firstName;
    private String secondName;
    private List<RoleDto> roles;
    private String registeredAt;

}
