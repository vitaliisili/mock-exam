package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.exception.BadRequestException;
import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.repository.ExamCategoryRepository;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.ExamCategoryService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExamCategoryServiceImpl extends ReadWriteServiceAbstraction<ExamCategory, Long> implements ExamCategoryService {

    private final ExamCategoryRepository examCategoryRepository;

    public ExamCategoryServiceImpl(ReadWriteRepository<ExamCategory, Long> readWriteRepository, ExamCategoryRepository examCategoryRepository) {
        super(readWriteRepository);
        this.examCategoryRepository = examCategoryRepository;
    }

    @Transactional
    @Override
    public void update(ExamCategory entity) {
        ExamCategory examCategory = examCategoryRepository.findById(entity.getId()).orElseThrow(() ->
                new BadRequestException(String.format("Category with id %s not found", entity.getId())));
        examCategory.setName(entity.getName());
        examCategoryRepository.save(examCategory);
    }
}
