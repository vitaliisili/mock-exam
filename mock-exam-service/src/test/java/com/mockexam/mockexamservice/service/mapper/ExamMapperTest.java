package com.mockexam.mockexamservice.service.mapper;

import com.mockexam.mockexamservice.model.Exam;
import com.mockexam.mockexamservice.model.ExamCategory;
import com.mockexam.mockexamservice.model.dto.ExamCategoryDto;
import com.mockexam.mockexamservice.model.dto.ExamDto;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.time.Instant;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class ExamMapperTest {

    @Test
    void toExamDtoTest() {
        ExamCategory examCategory = new ExamCategory();
        examCategory.setName("Exam Category");
        examCategory.setId(1L);

        Exam exam = new Exam();
        exam.setId(1L);
        exam.setTitle("Exam Title");
        exam.setPublic(true);
        exam.setExamCategories(Set.of(examCategory));
        exam.setDescription("Exam description");
        exam.setCreatedAt(Instant.parse("2022-07-04T13:08:00Z"));

        ExamDto examDto = ExamMapper.INSTANCE.toExamDto(exam);

        Assertions.assertEquals(1L, examDto.getId());
        assertTrue(examDto.isPublic());
        Assertions.assertEquals(1, examDto.getExamCategories().size());
        Assertions.assertEquals("Exam description", examDto.getDescription());
        Assertions.assertEquals(1L, examDto.getExamCategories().iterator().next().getId());
        Assertions.assertEquals("Exam Category", examDto.getExamCategories().iterator().next().getName());
        Assertions.assertEquals("04.07.2022", examDto.getCreatedAt());
        Assertions.assertEquals("Exam Title", examDto.getTitle());
    }

    @Test
    void toExamTest() {
        ExamCategoryDto examCategoryDto = ExamCategoryDto.builder()
                .id(1L)
                .name("Category Name")
                .build();

        ExamDto examDto = ExamDto.builder()
                .id(1L)
                .isPublic(true)
                .description("Exam description")
                .title("Exam Title")
                .examCategories(Set.of(examCategoryDto))
                .build();

        Exam exam = ExamMapper.INSTANCE.toExam(examDto);

        Assertions.assertEquals(1L, exam.getId());
        Assertions.assertTrue(exam.isPublic());
        Assertions.assertEquals("Exam description", exam.getDescription());
        Assertions.assertEquals("Exam Title", exam.getTitle());
        Assertions.assertEquals(1L, exam.getExamCategories().iterator().next().getId());
        Assertions.assertEquals("Category Name", exam.getExamCategories().iterator().next().getName());

    }

//    @Test
//    void toExamDtoListTest() {
//    }
//
//    @Test
//    void toExamSetTest() {
//    }
}