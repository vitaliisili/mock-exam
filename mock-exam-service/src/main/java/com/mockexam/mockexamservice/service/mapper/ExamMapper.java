package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.model.dto.ExamDto;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ExamMapper {

    @Mapping(target = "userId", source = "exam.user.id")
    ExamDto toExamDto(Exam exam);
//    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    default Exam toExam(ExamDto examDto) {
        Exam exam =  Exam.builder()
                .description(examDto.getDescription())
                .isPublic(examDto.isPublic())
                .title(examDto.getTitle())
                .examCategories(examDto.getExamCategories().stream().map(category -> {
                    ExamCategory examCategory = ExamCategory.builder()
                            .name(category.getName())
                            .build();
                    examCategory.setId(category.getId());
                    return examCategory;
                }).collect(Collectors.toSet()))
                .build();
        exam.setId(examDto.getId());
        return exam;
    }

    List<ExamDto> toExamDtoList(List<Exam> exams);
}
