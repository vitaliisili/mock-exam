package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.Role;
import com.mockexam.mockexamservice.model.dto.RoleDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public abstract class RoleMapper extends MapperUtil<Role>{

    public abstract RoleDto toRoleDto(Role role);
    public abstract Role toRole(RoleDto roleDto);

    public abstract List<RoleDto> toRoleDtoList(Iterable<Role> roles);
}
