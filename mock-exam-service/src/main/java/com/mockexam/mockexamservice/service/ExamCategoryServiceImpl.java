package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.exception.UserNotFoundException;
import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.repository.ExamCategoryRepository;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.ExamCategoryService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.abstracts.UserService;
import com.mockexam.mockexamservice.service.mapper.ExamCategoryMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ExamCategoryServiceImpl extends ReadWriteServiceAbstraction<ExamCategory, Long> implements ExamCategoryService {

    private final ExamCategoryRepository examCategoryRepository;
    private final ExamCategoryMapper examCategoryMapper;
    private final UserService userService;

    public ExamCategoryServiceImpl(ReadWriteRepository<ExamCategory, Long> readWriteRepository, ExamCategoryRepository examCategoryRepository, ExamCategoryMapper examCategoryMapper, UserService userService) {
        super(readWriteRepository);
        this.examCategoryRepository = examCategoryRepository;
        this.examCategoryMapper = examCategoryMapper;
        this.userService = userService;
    }

    @Transactional
    @Override
    public void update(ExamCategory entity) {
       ExamCategory toUpdate = examCategoryRepository.findById(entity.getId()).orElseThrow(); // todo: add logic
       examCategoryRepository.save(examCategoryMapper.updateMapping(entity, toUpdate));
    }

    @Override
    public Iterable<ExamCategory> findAllByCurrentUser(String userUsername) {

        User user = userService.findByUsername(userUsername).orElseThrow(() ->
                new UserNotFoundException(String.format("User with %s not found", userUsername)));

        Set<ExamCategory> examCategories = new HashSet<>();
        user.getExams().forEach(categoryList -> examCategories.addAll(categoryList.getExamCategories()));
        return examCategories;
    }
}
