package com.mockexam.mockexamservice.repository;

import com.mockexam.mockexamservice.model.ExamCategory;
import org.springframework.data.jpa.repository.Query;

public interface ExamCategoryRepository extends ReadWriteRepository<ExamCategory, Long> {

}
