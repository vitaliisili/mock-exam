package com.mockexam.mockexamservice.controller;

import com.mockexam.mockexamservice.model.Role;
import com.mockexam.mockexamservice.model.dto.RoleDto;
import com.mockexam.mockexamservice.service.abstracts.RoleService;
import com.mockexam.mockexamservice.service.mapper.RoleMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/role")
public class RoleController {

    private final RoleService roleService;
    private final RoleMapper roleMapper;

    @GetMapping
    public ResponseEntity<List<RoleDto>> getAllRoles() {
        Iterable<Role> roles = roleService.findAll();
        return ResponseEntity.ok(roleMapper.toRoleDtoList(roles));
    }

    @GetMapping("{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable Long id) {
        Role role = roleService.findById(id).orElseThrow();
        return ResponseEntity.ok(role);
    }

    @PostMapping
    public ResponseEntity<String> persistRole(@RequestBody Role role) {
        roleService.persist(role);
        return ResponseEntity.ok("Role has been saved successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRoleById(@PathVariable Long id) {
        roleService.deleteById(id);
        return ResponseEntity.ok("Role has been deleted successful");
    }

    @PutMapping
    public ResponseEntity<String> updateRole(@RequestBody Role role) {
        roleService.update(role);
        return ResponseEntity.ok("Role has been updated successful");
    }
}
