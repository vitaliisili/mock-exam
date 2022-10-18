package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.model.dto.ExamCategoryDto;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import java.util.Set;

class ExamCategoryMapperTest {

    @Test
    void toExamCategoryDtoTest() {
        Exam exam = new Exam();
        exam.setId(1L);

        ExamCategory examCategory = new ExamCategory();
        examCategory.setId(1L);
        examCategory.setName("Exam Test");
        examCategory.setExams(Set.of(exam));

        ExamCategoryDto examCategoryDto = ExamCategoryMapper.INSTANCE.toExamCategoryDto(examCategory);

        Assertions.assertEquals(1L, examCategoryDto.getId());
        Assertions.assertEquals("Exam Test", examCategoryDto.getName());
    }

    @Test
    void toExamCategory() {
        ExamCategoryDto examCategoryDto = ExamCategoryDto.builder()
                .id(1L)
                .name("Exam Test")
                .build();

        ExamCategory examCategory = ExamCategoryMapper.INSTANCE.toExamCategory(examCategoryDto);

        Assertions.assertEquals(1L, examCategory.getId());
        Assertions.assertEquals("Exam Test", examCategory.getName());
    }

//    @Test
//    void toExamCategoryDtoList() {
//    }
//
//    @Test
//    void toExamCategorySet() {
//    }
}