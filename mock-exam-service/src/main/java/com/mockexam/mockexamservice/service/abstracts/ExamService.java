package com.mockexam.mockexamservice.service.abstracts;

import com.mockexam.mockexamservice.model.Exam;

import java.security.Principal;
import java.util.List;

public interface ExamService extends ReadWriteService<Exam, Long>{

    List<Exam> findAllByUserId(Long id);
    List<Exam> findAllByExamCategoryId(Long id);
    Exam persist(Exam exam, Principal principal);
    Iterable<Exam> findAllPublic(int page, int size);
}
