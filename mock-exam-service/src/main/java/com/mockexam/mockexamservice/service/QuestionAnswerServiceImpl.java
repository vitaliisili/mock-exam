package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.QuestionAnswer;
import com.mockexam.mockexamservice.repository.QuestionAnswerRepository;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.QuestionAnswerService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.mapper.QuestionAnswerMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class QuestionAnswerServiceImpl extends ReadWriteServiceAbstraction<QuestionAnswer, Long> implements QuestionAnswerService {

    private final QuestionAnswerRepository questionAnswerRepository;
    private final QuestionAnswerMapper questionAnswerMapper;
    public QuestionAnswerServiceImpl(ReadWriteRepository<QuestionAnswer, Long> readWriteRepository, QuestionAnswerRepository questionAnswerRepository, QuestionAnswerMapper questionAnswerMapper) {
        super(readWriteRepository);
        this.questionAnswerRepository = questionAnswerRepository;
        this.questionAnswerMapper = questionAnswerMapper;
    }


}
