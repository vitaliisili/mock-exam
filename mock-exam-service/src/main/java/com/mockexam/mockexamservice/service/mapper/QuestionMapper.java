package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.exception.BadRequestException;
import com.mockexam.mockexamservice.model.Question;
import com.mockexam.mockexamservice.model.QuestionAnswer;
import com.mockexam.mockexamservice.model.dto.QuestionAnswerDto;
import com.mockexam.mockexamservice.model.dto.QuestionDto;
import com.mockexam.mockexamservice.service.abstracts.ExamService;
import org.mapstruct.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = QuestionAnswerMapper.class, builder = @Builder(disableBuilder = true))
public abstract class QuestionMapper extends MapperUtil<Question>{

    @Autowired
    protected ExamService examService;

    @Mapping(target = "examId", source = "question.exam.id")
    public abstract QuestionDto toQuestionDto(Question question);

    public abstract Question toQuestion(QuestionDto questionDto);

//    public Question toQuestion(QuestionDto questionDto) {
//        Question question = Question.builder()
//                .title(questionDto.getTitle())
//                .explanation(questionDto.getExplanation())
//                .isMultiple(questionDto.isMultiple())
//                .exam(examService.findById(questionDto.getExamId()).orElseThrow(() -> new BadRequestException(
//                        String.format("Exam with id %s not found", questionDto.getExamId()))))
//                .questionAnswers(toQuestionAnswerList(questionDto.getQuestionAnswers()))
//                .build();
//        question.setId(questionDto.getId());
//        return question;
//    }

    public abstract List<QuestionDto> toQuestionDtoList(List<Question> questions);

    public Set<QuestionAnswer> toQuestionAnswerList(List<QuestionAnswerDto> answers) {
        return answers.stream().map(answer -> {
            QuestionAnswer questionAnswer = QuestionAnswer.builder()
                    .content(answer.getContent())
                    .isCorrect(answer.isCorrect())
                    .question(new Question())
                    .build();
            questionAnswer.setId(answer.getId()); //TODO fix__ if in DB answer doesn't exist exception will be thrown
            questionAnswer.getQuestion().setId(answer.getQuestionId());
            return questionAnswer;
        }).collect(Collectors.toSet());
    }
}
