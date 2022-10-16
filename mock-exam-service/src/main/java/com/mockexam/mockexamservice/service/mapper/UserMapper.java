package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.exception.RoleNotFoundException;
import com.mockexam.mockexamservice.model.Role;
import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.model.dto.UserDto;
import com.mockexam.mockexamservice.service.abstracts.RoleService;
import org.mapstruct.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public abstract class UserMapper {

    @Autowired
    protected RoleService roleService;

    public abstract UserDto toUserDto(User user);

     public User toUser(UserDto userDto) {
        User user = User.builder()
                .email(userDto.getEmail())
                .username(userDto.getUsername())
                .firstName(userDto.getFirstName())
                .secondName(userDto.getSecondName())
                .roles(userDto.getRoles().stream().map(role -> roleService
                        .findRoleByName(role.getName())
                        .orElseThrow(() -> new RoleNotFoundException(
                                String.format("Role %s not found please contact support", role.getName()))))
                        .collect(Collectors.toSet()))
                .build();
        user.setId(userDto.getId());
        return user;
    }

    public abstract List<UserDto> toUserListDto(List<User> users);
}
