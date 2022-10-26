package com.mockexam.mockexamservice.controller;

import com.mockexam.mockexamservice.model.QuestionAnswer;
import com.mockexam.mockexamservice.model.dto.QuestionAnswerDto;
import com.mockexam.mockexamservice.service.abstracts.QuestionAnswerService;
import com.mockexam.mockexamservice.service.mapper.QuestionAnswerMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@Slf4j
@RequestMapping("/api/question-answer")
@AllArgsConstructor
public class QuestionAnswerController {

    private final QuestionAnswerService questionAnswerService;
    private final QuestionAnswerMapper questionAnswerMapper;

    @GetMapping
    public ResponseEntity<List<QuestionAnswerDto>> getAllQuestionAnswers() {
        Iterable<QuestionAnswer> questionAnswers = questionAnswerService.findAll();
        return ResponseEntity.ok(questionAnswerMapper.questionAnswerDtoList(questionAnswers));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getQuestionAnswerById(@PathVariable Long id) {
        Optional<QuestionAnswer> questionAnswer = questionAnswerService.findById(id);
        if (questionAnswer.isPresent()) {
            return ResponseEntity.ok(questionAnswerMapper.toQuestionAnswerDto(questionAnswer.get()));
        }
        return new ResponseEntity<>(String.format("QuestionAnswer with id %s not found", id), HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<String> persistQuestionAnswer(@RequestBody QuestionAnswerDto questionAnswerDto) {
        questionAnswerService.persist(questionAnswerMapper.toQuestionAnswer(questionAnswerDto));
        return ResponseEntity.ok("QuestionAnswer has been saved successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuestionAnswerById(@PathVariable Long id) {
        questionAnswerService.deleteById(id);
        return ResponseEntity.ok("QuestionAnswer has been deleted successful");
    }

    @PutMapping
    public ResponseEntity<String> updateQuestionAnswer(@RequestBody QuestionAnswer questionAnswer) {
        questionAnswerService.update(questionAnswer);
        return ResponseEntity.ok("QuestionAnswer has been updated successful");
    }
}
