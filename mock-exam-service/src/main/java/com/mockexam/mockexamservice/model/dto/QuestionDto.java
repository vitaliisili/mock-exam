package com.mockexam.mockexamservice.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class QuestionDto {

    private Long id;
    private String title;

    @JsonProperty("isMultiple")
    private boolean isMultiple;

}
