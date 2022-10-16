package com.mockexam.mockexamservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
@Table(name = "QUESTION")
public class Question extends BaseEntity{

    private String title;
    private String explanation;
    private boolean isMultiple;

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @JsonIgnore
    @ToString.Exclude
    private Exam exam;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "question")
    @ToString.Exclude
    private Set<QuestionAnswer> questionAnswers;

}
