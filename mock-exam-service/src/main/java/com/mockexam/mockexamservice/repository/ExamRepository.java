package com.mockexam.mockexamservice.repository;

import com.mockexam.mockexamservice.model.Exam;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExamRepository extends ReadWriteRepository<Exam, Long>{
    @Query("FROM Exam e WHERE e.user.id=?1")
    List<Exam> findAllByUserId(Long id);

    @Query("FROM Exam e INNER JOIN e.examCategories c WHERE c.id=?1")
    List<Exam> findAllByExamCategoryId(Long id);

}
