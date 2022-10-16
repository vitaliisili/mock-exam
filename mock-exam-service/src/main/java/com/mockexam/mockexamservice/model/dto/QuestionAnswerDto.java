package com.mockexam.mockexamservice.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class QuestionAnswerDto {

    private Long id;
    private String content;
    @JsonProperty("isCorrect")
    private boolean isCorrect;
    private Long questionId;

}
