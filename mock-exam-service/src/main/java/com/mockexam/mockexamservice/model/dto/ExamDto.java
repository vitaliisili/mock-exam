package com.mockexam.mockexamservice.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class ExamDto {

    private Long id;
    private String title;
    private String description;
    @JsonProperty("isPublic")
    private boolean isPublic;
    private Long userId;
    private Set<ExamCategoryDto> examCategories;

}
