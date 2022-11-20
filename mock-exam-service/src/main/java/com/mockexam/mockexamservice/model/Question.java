package com.mockexam.mockexamservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
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

    @Column(columnDefinition="text", length=4048)
    @NotNull
    private String title;

    @Column(columnDefinition="text", length=4048)
    private String explanation;

    @NotNull
    private boolean isMultiple;

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @JsonIgnore
    @ToString.Exclude
    private Exam exam;

    @OneToMany(cascade = {
            CascadeType.REMOVE,
            CascadeType.REFRESH,
            CascadeType.MERGE,
            CascadeType.PERSIST}, mappedBy = "question")
    @ToString.Exclude
    private Set<QuestionAnswer> questionAnswers = new HashSet<>();

    @ManyToMany(cascade = CascadeType.REFRESH)
    @JoinTable(name = "QUESTION_CATEGORIES",
            joinColumns = @JoinColumn(name = "question_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "question_category_id", referencedColumnName = "id"))
    @ToString.Exclude
    private Set<QuestionCategory> questionCategories = new HashSet<>();


    public void addAnswer(QuestionAnswer questionAnswer) {
        if (questionAnswers.contains(questionAnswer)) {
            return;
        }
        questionAnswers.add(questionAnswer);
        questionAnswer.setQuestion(this);
    }

    public void removeAnswer(QuestionAnswer questionAnswer) {
        if (!questionAnswers.contains(questionAnswer)) {
            return;
        }
        questionAnswers.remove(questionAnswer);
        questionAnswer.setQuestion(null);
    }
}
