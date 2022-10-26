package com.mockexam.mockexamservice.controller;

import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.model.dto.ExamCategoryDto;
import com.mockexam.mockexamservice.service.abstracts.ExamCategoryService;
import com.mockexam.mockexamservice.service.mapper.ExamCategoryMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Set;

@RestController
@Slf4j
@RequestMapping("/api/exam-category")
@AllArgsConstructor
public class ExamCategoryController {

    private final ExamCategoryService examCategoryService;
    private final ExamCategoryMapper examCategoryMapper;

    @GetMapping
    public ResponseEntity<List<ExamCategoryDto>> getAllExamCategories() {
        Iterable<ExamCategory> examCategories = examCategoryService.findAll();
        return ResponseEntity.ok(examCategoryMapper.toExamCategoryDtoList(examCategories));
    }

    @GetMapping("{id}")
    public ResponseEntity<ExamCategoryDto> getExamCategoryById(@PathVariable Long id) {
        ExamCategory examCategory = examCategoryService.findById(id).orElseThrow();
        return ResponseEntity.ok(examCategoryMapper.toExamCategoryDto(examCategory));
    }

    @PostMapping
    public ResponseEntity<String> persistExamCategory(@RequestBody ExamCategoryDto examCategoryDto) {
        examCategoryService.persist(examCategoryMapper.toExamCategory(examCategoryDto));
        return ResponseEntity.ok("ExamCategory has been saved successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExamCategoryById(@PathVariable Long id) {
        examCategoryService.deleteById(id);
        return ResponseEntity.ok("ExamCategory has been deleted successful");
    }

    @PutMapping
    public ResponseEntity<String> updateExamCategory(@RequestBody ExamCategoryDto examCategoryDto) {
        examCategoryService.update(examCategoryMapper.toExamCategory(examCategoryDto));
        return ResponseEntity.ok("ExamCategory has been updated successful");
    }

    @GetMapping("/test")
    public ResponseEntity<Set<ExamCategory>> get() {
        List<ExamCategoryDto> examCategoryDtos = examCategoryMapper.toExamCategoryDtoList(examCategoryService.findAll());

        return ResponseEntity.ok(examCategoryMapper.toExamCategorySet(examCategoryDtos));
    }
}
