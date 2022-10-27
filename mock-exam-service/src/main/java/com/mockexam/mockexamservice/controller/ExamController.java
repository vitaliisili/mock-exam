package com.mockexam.mockexamservice.controller;

import com.mockexam.mockexamservice.exception.BadRequestException;
import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.model.dto.ExamDto;
import com.mockexam.mockexamservice.service.abstracts.ExamService;
import com.mockexam.mockexamservice.service.mapper.ExamMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/exam")
@AllArgsConstructor
@Slf4j
@CrossOrigin(value = "*")
public class ExamController {

    private final ExamService examService;
    private final ExamMapper examMapper;

    @GetMapping
    public ResponseEntity<List<ExamDto>> getAllPublicExams(@RequestParam int page,
                                                           @RequestParam Optional<Integer> size) { //TODO: add method get only public exams

        Iterable<Exam> exams = examService.findAll(page, size.orElse(12));

        System.out.println(examMapper.toExamDtoList(exams));
        return ResponseEntity.ok(examMapper.toExamDtoList(exams));
    }

    @GetMapping("{id}")
    public ResponseEntity<ExamDto> getExamById(@PathVariable Long id) {
        log.info("EXAM REQUEST WITH ID: {}", id);
        Exam exam = examService.findById(id).orElseThrow(() -> new BadRequestException("Exam not found"));
        return ResponseEntity.ok(examMapper.toExamDto(exam));
    }

    @PostMapping
    public ResponseEntity<String> persistExam(@RequestBody ExamDto examDto, Principal principal) {
        examService.persist(examMapper.toExam(examDto), principal);
        return ResponseEntity.ok("Exam has been saved successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExamById(@PathVariable Long id) {
        examService.deleteById(id);
        return ResponseEntity.ok("Exam has been deleted successful");
    }

    @PutMapping
    public ResponseEntity<String> updateExam(@RequestBody ExamDto examDto) {
        examService.update(examMapper.toExam(examDto));
        return ResponseEntity.ok("Exam has been updated successful");
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<ExamDto>> getAllByUserId(@PathVariable Long id) {

        List<Exam> exams = examService.findAllByUserId(id);
        return ResponseEntity.ok(examMapper.toExamDtoList(exams));
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<List<ExamDto>> getAllByExamCategoryId(@PathVariable Long id,
                                                                @RequestParam int page,
                                                                @RequestParam Optional<Integer> size) {

        List<Exam> exams = examService.findAllByExamCategoryId(id);
        return ResponseEntity.ok(examMapper.toExamDtoList(exams));
    }

}
