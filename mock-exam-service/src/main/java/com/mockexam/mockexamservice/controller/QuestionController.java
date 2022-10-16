package com.mockexam.mockexamservice.controller;

import com.mockexam.mockexamservice.model.Question;
import com.mockexam.mockexamservice.model.dto.QuestionDto;
import com.mockexam.mockexamservice.service.abstracts.QuestionService;
import com.mockexam.mockexamservice.service.mapper.QuestionMapper;
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
    private final QuestionMapper questionMapper;

    @GetMapping
    public ResponseEntity<List<QuestionDto>> getAllQuestions() {
        List<Question> questions = questionService.findAll();
        return ResponseEntity.ok(questionMapper.toQuestionDtoList(questions));
    }

    @GetMapping("{id}")
    public ResponseEntity<QuestionDto> getQuestionById(@PathVariable Long id) {
        Question question = questionService.findById(id).orElseThrow(); // TODO: throw exception
        return ResponseEntity.ok(questionMapper.toQuestionDto(question));
    }

    @PostMapping
    public ResponseEntity<String> persistQuestion(@RequestBody QuestionDto questionDto) {
        questionService.persist(questionMapper.toQuestion(questionDto));
        return ResponseEntity.ok("Question has been saved successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuestionById(@PathVariable Long id) {
        questionService.deleteById(id);
        return ResponseEntity.ok("Question has been deleted successful");
    }

    @PutMapping
    public ResponseEntity<String> updateQuestion(@RequestBody QuestionDto questionDto) {
        questionService.update(questionMapper.toQuestion(questionDto));
        return ResponseEntity.ok("Question has been updated successful");
    }

    @GetMapping("/exam/{id}")
    public ResponseEntity<List<QuestionDto>> getAllByExamId(@PathVariable Long id) {
        List<Question> questions = questionService.findAllByExamId(id);
        return ResponseEntity.ok(questionMapper.toQuestionDtoList(questions));
    }

}
