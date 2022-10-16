package com.mockexam.mockexamservice.repository;

import com.mockexam.mockexamservice.model.Question;
import java.util.List;

public interface QuestionRepository extends ReadWriteRepository<Question, Long> {

    List<Question> findAllByExamId(Long id);

}
