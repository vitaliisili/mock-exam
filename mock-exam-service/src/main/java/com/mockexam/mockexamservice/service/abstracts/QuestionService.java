package com.mockexam.mockexamservice.service.abstracts;

import com.mockexam.mockexamservice.model.Question;

import java.util.List;

public interface QuestionService extends ReadWriteService<Question, Long> {

    List<Question> findAllByExamIdDesc(Long id);
    List<Question> findAllByExamIdAsc(Long id);

}
