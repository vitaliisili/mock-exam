package com.mockexam.mockexamservice.model;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
@Table(name = "QUESTION_ANSWER")
public class QuestionAnswer extends BaseEntity{

    private String content;
    private boolean isCorrect;

}