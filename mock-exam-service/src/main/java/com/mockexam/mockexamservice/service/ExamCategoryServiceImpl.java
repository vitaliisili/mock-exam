package com.mockexam.mockexamservice.service;

import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.repository.ExamCategoryRepository;
import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import com.mockexam.mockexamservice.service.abstracts.ExamCategoryService;
import com.mockexam.mockexamservice.service.abstracts.ReadWriteServiceAbstraction;
import com.mockexam.mockexamservice.service.mapper.ExamCategoryMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExamCategoryServiceImpl extends ReadWriteServiceAbstraction<ExamCategory, Long> implements ExamCategoryService {

    private final ExamCategoryRepository examCategoryRepository;
    private final ExamCategoryMapper examCategoryMapper;

    public ExamCategoryServiceImpl(ReadWriteRepository<ExamCategory, Long> readWriteRepository, ExamCategoryRepository examCategoryRepository, ExamCategoryMapper examCategoryMapper) {
        super(readWriteRepository);
        this.examCategoryRepository = examCategoryRepository;
        this.examCategoryMapper = examCategoryMapper;
    }

    @Transactional
    @Override
    public void update(ExamCategory entity) {
       ExamCategory toUpdate = examCategoryRepository.findById(entity.getId()).orElseThrow(); // todo: add logic
       examCategoryRepository.save(examCategoryMapper.updateMapping(entity, toUpdate));
    }
}
