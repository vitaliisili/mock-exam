package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.model.Type;
import com.mockexam.mockexamservice.model.User;
import com.mockexam.mockexamservice.repository.ExamRepository;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.repository.UserRepository;
import com.mockexam.mockexamservice.service.abstracts.ExamService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;
import java.util.List;

@Service
public class ExamServiceImpl extends ReadWriteServiceAbstraction<Exam, Long> implements ExamService {

    private final ExamRepository examRepository;
    @Autowired
    private UserRepository userRepository;

    public ExamServiceImpl(ReadWriteRepository<Exam, Long> readWriteRepository, ExamRepository examRepository) {
        super(readWriteRepository);
        this.examRepository = examRepository;
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
        User user = userRepository.getReferenceById(2L); // TODO: get user from principal
        if (exam.getType() == null) {
            exam.setType(Type.PRIVATE);
        }
        exam.setUser(user);
        examRepository.save(exam);
    }
}
