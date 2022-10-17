package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.model.dto.UserDto;
import org.mapstruct.*;
import java.util.List;

@Mapper(componentModel = "spring")
public abstract class UserMapper extends MapperUtil<User>{

    @Mapping(target = "registeredAt", source = "createdAt")
    public abstract UserDto toUserDto(User user);

    public abstract User toUser(UserDto userDto);

    public abstract List<UserDto> toUserListDto(List<User> users);

}
