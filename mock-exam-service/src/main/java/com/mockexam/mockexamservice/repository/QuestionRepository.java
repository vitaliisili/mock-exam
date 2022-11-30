package com.mockexam.mockexamservice.repository;

import com.mockexam.mockexamservice.model.Question;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface QuestionRepository extends ReadWriteRepository<Question, Long> {

    List<Question> findAllByExamIdOrderByCreatedAtDesc(Long id);
    List<Question> findAllByExamIdOrderByCreatedAtAsc(Long id);

}
