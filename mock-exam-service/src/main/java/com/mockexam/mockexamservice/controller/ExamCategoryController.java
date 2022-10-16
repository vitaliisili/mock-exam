package com.mockexam.mockexamservice.controller;

import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.service.abstracts.ExamCategoryService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/exam-category")
@AllArgsConstructor
public class ExamCategoryController {

    private final ExamCategoryService examCategoryService;

    @GetMapping
    public ResponseEntity<List<ExamCategory>> getAllExamCategories() {
        List<ExamCategory> examCategories = examCategoryService.findAll();
        return ResponseEntity.ok(examCategories);
    }

    @GetMapping("{id}")
    public ResponseEntity<ExamCategory> getExamCategoryById(@PathVariable Long id) {
        ExamCategory examCategory = examCategoryService.findById(id).orElseThrow();
        return ResponseEntity.ok(examCategory);
    }

    @PostMapping
    public ResponseEntity<String> persistExamCategory(@RequestBody ExamCategory examCategory) {
        examCategoryService.persist(examCategory);
        return ResponseEntity.ok("ExamCategory has been saved successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExamCategoryById(@PathVariable Long id) {
        examCategoryService.deleteById(id);
        return ResponseEntity.ok("ExamCategory has been deleted successful");
    }

    @PutMapping
    public ResponseEntity<String> updateExamCategory(@RequestBody ExamCategory examCategory) {
        examCategoryService.update(examCategory);
        return ResponseEntity.ok("ExamCategory has been updated successful");
    }

}
