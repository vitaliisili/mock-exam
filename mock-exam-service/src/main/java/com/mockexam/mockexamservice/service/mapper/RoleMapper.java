package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.Role;
import com.mockexam.mockexamservice.model.dto.RoleDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RoleMapper {

    RoleDto toRoleDto(Role role);
    Role toRole(RoleDto roleDto);
}
