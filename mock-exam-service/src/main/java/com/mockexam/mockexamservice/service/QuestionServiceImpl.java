package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.Question;
import com.mockexam.mockexamservice.repository.QuestionRepository;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.QuestionAnswerService;
import com.mockexam.mockexamservice.service.abstracts.QuestionService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.mapper.QuestionMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
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
    public List<Question> findAllByExamId(Long id) {
        return questionRepository.findAllByExamId(id);
    }

    @Transactional
    @Override
    public void update(Question entity) {
        Question toUpdate = questionRepository.getReferenceById(entity.getId());

        toUpdate.setId(entity.getId());
        toUpdate.setExam(entity.getExam());
        toUpdate.setExplanation(entity.getExplanation());
        toUpdate.setQuestionAnswers(entity.getQuestionAnswers());
        toUpdate.setMultiple(entity.isMultiple());
        toUpdate.setTitle(entity.getTitle());
        questionRepository.save(toUpdate);

    }
}
