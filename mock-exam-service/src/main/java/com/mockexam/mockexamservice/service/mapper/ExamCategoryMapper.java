package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.model.dto.ExamCategoryDto;
import org.mapstruct.Builder;
import org.mapstruct.Mapper;
import java.util.List;
import java.util.Set;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public abstract class ExamCategoryMapper extends MapperUtil<ExamCategory>{

    public abstract ExamCategoryDto toExamCategoryDto(ExamCategory examCategory);
    public abstract ExamCategory toExamCategory(ExamCategoryDto examCategoryDto);
    public abstract List<ExamCategoryDto> toExamCategoryDtoList(List<ExamCategory> examCategories);
    public abstract Set<ExamCategory> toExamCategorySet(List<ExamCategoryDto> examCategoryDtoList);

}
