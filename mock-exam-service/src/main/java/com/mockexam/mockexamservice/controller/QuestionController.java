package com.mockexam.mockexamservice.controller;

import com.mockexam.mockexamservice.model.Question;
import com.mockexam.mockexamservice.service.abstracts.QuestionService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/question")
@AllArgsConstructor
@CrossOrigin(value = "*")
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping
    public ResponseEntity<List<Question>> getAllQuestions() {
        List<Question> questions = questionService.findAll();
        return ResponseEntity.ok(questions);
    }

    @GetMapping("{id}")
    public ResponseEntity<Question> getQuestionById(@PathVariable Long id) {
        Question question = questionService.findById(id).orElseThrow();
        return ResponseEntity.ok(question);
    }

    @PostMapping
    public ResponseEntity<String> persistQuestion(@RequestBody Question question) {
        questionService.persist(question);
        return ResponseEntity.ok("Question has been saved successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuestionById(@PathVariable Long id) {
        questionService.deleteById(id);
        return ResponseEntity.ok("Question has been deleted successful");
    }

    @PutMapping
    public ResponseEntity<String> updateQuestion(@RequestBody Question question) {
        questionService.update(question);
        return ResponseEntity.ok("Question has been updated successful");
    }


}
