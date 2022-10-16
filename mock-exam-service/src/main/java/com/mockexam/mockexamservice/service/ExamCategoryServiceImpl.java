package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.repository.ExamCategoryRepository;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.ExamCategoryService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import org.springframework.stereotype.Service;

@Service
public class ExamCategoryServiceImpl extends ReadWriteServiceAbstraction<ExamCategory, Long> implements ExamCategoryService {

    private final ExamCategoryRepository examCategoryRepository;

    public ExamCategoryServiceImpl(ReadWriteRepository<ExamCategory, Long> readWriteRepository, ExamCategoryRepository examCategoryRepository) {
        super(readWriteRepository);
        this.examCategoryRepository = examCategoryRepository;
    }


}
