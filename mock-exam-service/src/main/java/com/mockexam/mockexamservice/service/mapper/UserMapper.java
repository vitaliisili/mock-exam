package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.model.dto.UserDto;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);
    User toUser(UserDto userDto);
    List<UserDto> toUserListDto(List<User> users);
}
