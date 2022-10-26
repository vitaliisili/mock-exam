package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.model.dto.UserDto;
import com.mockexam.mockexamservice.security.SingUpRequest;
import org.mapstruct.*;
import java.util.List;

@Mapper(componentModel = "spring")
public abstract class UserMapper extends MapperUtil<User>{

    @Mapping(target = "registeredAt", source = "createdAt")
    public abstract UserDto toUserDto(User user);

    public abstract User toUser(UserDto userDto);
    public abstract User toUser(SingUpRequest singUpRequest);

    public abstract List<UserDto> toUserListDto(Iterable<User> users);

}
