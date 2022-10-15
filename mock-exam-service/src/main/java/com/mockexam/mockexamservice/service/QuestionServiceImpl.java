package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.Question;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.QuestionService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl extends ReadWriteServiceAbstraction<Question, Long> implements QuestionService {

    public QuestionServiceImpl(ReadWriteRepository<Question, Long> readWriteRepository) {
        super(readWriteRepository);
    }
}
