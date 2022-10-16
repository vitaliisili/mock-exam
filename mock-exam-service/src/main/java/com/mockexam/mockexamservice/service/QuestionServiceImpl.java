package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.Question;
import com.mockexam.mockexamservice.repository.QuestionRepository;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.QuestionService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl extends ReadWriteServiceAbstraction<Question, Long> implements QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionServiceImpl(ReadWriteRepository<Question, Long> readWriteRepository, QuestionRepository questionRepository) {
        super(readWriteRepository);
        this.questionRepository = questionRepository;
    }

    @Override
    public List<Question> findAllByExamId(Long id) {
        return questionRepository.findAllByExamId(id);
    }
}
