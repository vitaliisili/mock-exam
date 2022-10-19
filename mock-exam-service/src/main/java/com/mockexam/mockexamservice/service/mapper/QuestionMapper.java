package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.exception.BadRequestException;
import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.model.Question;
import com.mockexam.mockexamservice.model.QuestionAnswer;
import com.mockexam.mockexamservice.model.dto.QuestionAnswerDto;
import com.mockexam.mockexamservice.model.dto.QuestionDto;
import com.mockexam.mockexamservice.service.abstracts.ExamService;
import org.mapstruct.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = QuestionAnswerMapper.class, builder = @Builder(disableBuilder = true))
public abstract class QuestionMapper extends MapperUtil<Question>{

    @Autowired
    protected ExamService examService;

    @Mapping(target = "examId", source = "question.exam.id")
    public abstract QuestionDto toQuestionDto(Question question);

    public Question toQuestion(QuestionDto questionDto) {
        Question question = Question.builder()
                .title(questionDto.getTitle())
                .explanation(questionDto.getExplanation())
                .isMultiple(questionDto.isMultiple())
                .questionAnswers(new HashSet<>())
                .exam(new Exam())
                .build();

        question.setId(questionDto.getId());
        question.getExam().setId(questionDto.getExamId());
        questionDto.getQuestionAnswers().forEach(answer -> question.addAnswer(toQuestionAnswer(answer)));
        return question;
    }

    public abstract QuestionAnswer toQuestionAnswer(QuestionAnswerDto questionAnswerDto);

    public abstract List<QuestionDto> toQuestionDtoList(List<Question> questions);

}
