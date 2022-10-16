package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.QuestionAnswer;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.QuestionAnswerService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import org.springframework.stereotype.Service;

@Service
public class QuestionAnswerServiceImpl extends ReadWriteServiceAbstraction<QuestionAnswer, Long> implements QuestionAnswerService {

    public QuestionAnswerServiceImpl(ReadWriteRepository<QuestionAnswer, Long> readWriteRepository) {
        super(readWriteRepository);
    }

}
