package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.exception.BadRequestException;
import com.mockexam.mockexamservice.model.QuestionAnswer;
import com.mockexam.mockexamservice.model.dto.QuestionAnswerDto;
import com.mockexam.mockexamservice.service.abstracts.QuestionService;
import org.mapstruct.Builder;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public abstract class QuestionAnswerMapper extends MapperUtil<QuestionAnswer>{

    public static final QuestionAnswerMapper INSTANCE = Mappers.getMapper(QuestionAnswerMapper.class);

//    @Autowired
//    protected QuestionService questionService;

    @Mapping(target = "questionId", source = "questionAnswer.question.id")
    public abstract QuestionAnswerDto toQuestionAnswerDto(QuestionAnswer questionAnswer);

    @Mapping(target = "question.id", source = "questionAnswerDto.questionId")
    public abstract QuestionAnswer toQuestionAnswer(QuestionAnswerDto questionAnswerDto);

    public abstract List<QuestionAnswerDto> questionAnswerDtoList(Iterable<QuestionAnswer> questionAnswers);

}
