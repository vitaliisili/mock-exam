package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.model.dto.ExamCategoryDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ExamCategoryMapper {

    ExamCategoryDto toExamCategoryDto(ExamCategory examCategory);
    ExamCategory toExamCategory(ExamCategoryDto examCategoryDto);
}
