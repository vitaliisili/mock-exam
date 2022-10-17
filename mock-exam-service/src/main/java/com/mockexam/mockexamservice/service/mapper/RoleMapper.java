package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.Role;
import com.mockexam.mockexamservice.model.dto.RoleDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public abstract class RoleMapper extends MapperUtil<Role>{

    public abstract RoleDto toRoleDto(Role role);
    public abstract Role toRole(RoleDto roleDto);
}
