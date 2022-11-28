package com.mockexam.mockexamservice.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class QuestionDto {

    private Long id;
    private String title;
    private String explanation;
    @JsonProperty("isMultiple")
    private boolean isMultiple;
    private Long examId;
    private List<QuestionAnswerDto> questionAnswers;

}
