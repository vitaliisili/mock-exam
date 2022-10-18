package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.model.dto.ExamDto;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import java.util.List;
import java.util.Set;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public abstract class ExamMapper extends MapperUtil<Exam>{

    public static final ExamMapper INSTANCE = Mappers.getMapper(ExamMapper.class);

    public abstract ExamDto toExamDto(Exam exam);
    public abstract Exam toExam (ExamDto examDto);
    public abstract List<ExamDto> toExamDtoList(List<Exam> exams);
    public abstract Set<Exam> toExamSet(List<ExamDto> examDtoList);

}
