package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.repository.ExamRepository;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.ExamService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.abstracts.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;
import java.util.List;

@Service
public class ExamServiceImpl extends ReadWriteServiceAbstraction<Exam, Long> implements ExamService {

    private final ExamRepository examRepository;
    private final UserService userService;

    public ExamServiceImpl(ReadWriteRepository<Exam, Long> readWriteRepository, ExamRepository examRepository, UserService userService) {
        super(readWriteRepository);
        this.examRepository = examRepository;
        this.userService = userService;
    }

    @Transactional(readOnly = true)
    @Override
    public List<Exam> findAllByUserId(Long id) {
        return examRepository.findAllByUserId(id);
    }

    @Override
    public List<Exam> findAllByExamCategoryId(Long id) {
        return examRepository.findAllByExamCategoryId(id);
    }

    @Override
    public void persist(Exam exam, Principal principal) {
        User user = userService.findById(2L).orElseThrow(); // TODO: get user from principal
        exam.setUser(user);
        examRepository.save(exam);
    }
}
