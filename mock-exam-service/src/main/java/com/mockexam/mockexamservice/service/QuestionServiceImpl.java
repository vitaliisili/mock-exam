package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.Question;
import com.mockexam.mockexamservice.model.QuestionAnswer;
import com.mockexam.mockexamservice.repository.QuestionRepository;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.QuestionAnswerService;
import com.mockexam.mockexamservice.service.abstracts.QuestionService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.mapper.QuestionMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
@Slf4j
public class QuestionServiceImpl extends ReadWriteServiceAbstraction<Question, Long> implements QuestionService {

    private final QuestionRepository questionRepository;
    private final QuestionMapper questionMapper;
    private final QuestionAnswerService questionAnswerService;

    public QuestionServiceImpl(ReadWriteRepository<Question, Long> readWriteRepository, QuestionRepository questionRepository, QuestionMapper questionMapper, QuestionAnswerService questionAnswerService) {
        super(readWriteRepository);
        this.questionRepository = questionRepository;
        this.questionMapper = questionMapper;
        this.questionAnswerService = questionAnswerService;
    }

    @Override
    public List<Question> findAllByExamIdDesc(Long id) {
        return questionRepository.findAllByExamIdOrderByCreatedAtDesc(id);

    }

    @Override
    public List<Question> findAllByExamIdAsc(Long id) {
        return questionRepository.findAllByExamIdOrderByCreatedAtAsc(id);

    }

}
