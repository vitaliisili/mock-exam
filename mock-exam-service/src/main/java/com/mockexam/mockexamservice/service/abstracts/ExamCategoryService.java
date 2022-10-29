package com.mockexam.mockexamservice.service.abstracts;

import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.model.dto.ExamCategoryDto;

import java.util.List;

public interface ExamCategoryService extends ReadWriteService<ExamCategory, Long>{

    Iterable<ExamCategory> findAllByCurrentUser(String name);
}
