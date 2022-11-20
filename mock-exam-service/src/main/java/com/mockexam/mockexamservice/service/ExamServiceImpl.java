package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.exception.UserNotFoundException;
import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.repository.ExamRepository;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.ExamCategoryService;
import com.mockexam.mockexamservice.service.abstracts.ExamService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.abstracts.UserService;
import com.mockexam.mockexamservice.service.mapper.ExamMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExamServiceImpl extends ReadWriteServiceAbstraction<Exam, Long> implements ExamService {

    private final ExamRepository examRepository;
    private final UserService userService;
    private final ExamMapper examMapper;
    private final ExamCategoryService examCategoryService;


    public ExamServiceImpl(ReadWriteRepository<Exam, Long> readWriteRepository, ExamRepository examRepository, UserService userService, ExamMapper examMapper, ExamCategoryService examCategoryService) {
        super(readWriteRepository);
        this.examRepository = examRepository;
        this.userService = userService;
        this.examMapper = examMapper;
        this.examCategoryService = examCategoryService;
    }

    @Transactional(readOnly = true)
    @Override
    public List<Exam> findAllByUserId(Long id) {
        return examRepository.findAllByUserIdOrderByCreatedAtDesc(id);
    }

    @Override
    public List<Exam> findAllByExamCategoryId(Long id) {
        return examRepository.findAllByExamCategoryId(id);
    }

    @Transactional
    @Override
    public Exam persist(Exam exam, Principal principal) {
        User user = userService.findByUsername(principal.getName()).orElseThrow(() ->
                new UserNotFoundException(String.format("User with username %s not found", principal.getName())));

        exam.setUser(user);
        exam.getExamCategories().forEach(category -> {
            if (category.getId() == null) {
                examCategoryService.persist(category);
            }
        });
        examRepository.save(exam);
        return exam;
    }

    @Transactional
    @Override
    public Iterable<Exam> findAllPublic(int page, int size) {
        return examRepository
                .findAll(PageRequest.of(page, size))
                .filter(Exam::isPublic)
                .stream()
                .collect(Collectors.toList());
    }

    @Transactional
    @Override
    public Exam update(Exam entity) {
        Exam toUpdate = examRepository.findById(entity.getId()).orElseThrow(() ->
                new UserNotFoundException(String.format("Exam with %s not found", entity.getId())));
        examRepository.save(examMapper.updateMapping(entity, toUpdate));

        return entity;
    }

}
