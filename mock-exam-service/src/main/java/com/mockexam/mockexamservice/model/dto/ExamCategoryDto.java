package com.mockexam.mockexamservice.model.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class ExamCategoryDto {

    private Long id;
    private String name;

}
