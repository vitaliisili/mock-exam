package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.exception.BadRequestException;
import com.mockexam.mockexamservice.exception.RoleNotFoundException;
import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.model.Role;
import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.repository.UserRepository;
import com.mockexam.mockexamservice.service.abstracts.ExamCategoryService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.abstracts.RoleService;
import com.mockexam.mockexamservice.service.abstracts.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl extends ReadWriteServiceAbstraction<User, Long> implements UserService {

    private final UserRepository userRepository;
    private final RoleService roleService;
    private final ExamCategoryService examCategoryService;

    public UserServiceImpl(ReadWriteRepository<User, Long> readWriteRepository, UserRepository userRepository, RoleService roleService, ExamCategoryService examCategoryService) {
        super(readWriteRepository);
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.examCategoryService = examCategoryService;
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Transactional(readOnly = true)
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Transactional(readOnly = true)
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Transactional
    @Override
    public void persist(User user) {
        if (existsByUsername(user.getUsername())) {
            throw new BadRequestException(String.format("User with username %s already exist", user.getUsername()));
        }

        if (existsByEmail(user.getEmail())) {
            throw new BadRequestException(String.format("User with email %s already exist", user.getEmail()));
        }

        if (user.getRoles() == null || user.getRoles().isEmpty()) {
            Role role = roleService.findRoleByName("ROLE_USER").orElseThrow(() ->
                    new RoleNotFoundException("Role doesn't exist please contact support"));
            user.setRoles(Set.of(role));
        }else {
            Set<Role> roles = user.getRoles()
                    .stream()
                    .map(role -> roleService.findRoleByName(role.getName())
                            .orElseThrow(()-> new RoleNotFoundException(
                                    String.format("Role with name %s not found", role.getName()))))
                    .collect(Collectors.toSet());
            user.setRoles(roles);
        }
        userRepository.save(user);
    }

    @Override
    public void deleteById(Long id) {
        User user = userRepository.findById(id).orElseThrow(); //TODO: check if user exist
//        Set<Set<ExamCategory>> examCategories = user.getExams()
//                .stream()
//                .map(Exam::getExamCategories)
//                .collect(Collectors.toSet());
//        examCategories.forEach(examCategoryService::deleteAll);
        userRepository.delete(user);
    }
}
