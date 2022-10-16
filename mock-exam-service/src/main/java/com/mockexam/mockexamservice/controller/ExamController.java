package com.mockexam.mockexamservice.controller;

import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.service.abstracts.ExamService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/exam")
@AllArgsConstructor
@Slf4j
public class ExamController {

    private final ExamService examService;

    @GetMapping
    public ResponseEntity<List<Exam>> getAllExams() {
        List<Exam> exams = examService.findAll();
        return ResponseEntity.ok(exams);
    }

    @GetMapping("{id}")
    public ResponseEntity<Exam> getExamById(@PathVariable Long id) {
        Exam exam = examService.findById(id).orElseThrow();
        return ResponseEntity.ok(exam);
    }

    @PostMapping
    public ResponseEntity<String> persistExam(@RequestBody Exam exam, Principal principal) {
        examService.persist(exam, principal);
        return ResponseEntity.ok("Exam has been saved successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExamById(@PathVariable Long id) {
        examService.deleteById(id);
        return ResponseEntity.ok("Exam has been deleted successful");
    }

    @PutMapping
    public ResponseEntity<String> updateExam(@RequestBody Exam exam) {
        examService.update(exam);
        return ResponseEntity.ok("Exam has been updated successful");
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<Exam>> getAllByUserId(@PathVariable Long id) {
        List<Exam> exams = examService.findAllByUserId(id);
        return ResponseEntity.ok(exams);
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<List<Exam>> getAllByExamCategoryId(@PathVariable Long id) {
        List<Exam> exams = examService.findAllByExamCategoryId(id);
        return ResponseEntity.ok(exams);
    }
}
