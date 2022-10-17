package com.mockexam.mockexamservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
@Table(name = "QUESTION_CATEGORY")
public class QuestionCategory extends BaseEntity{

    private String name;

    @ManyToMany(cascade = CascadeType.REFRESH, mappedBy = "questionCategories")
    @JsonIgnore
    @ToString.Exclude
    private Set<Question> questions;

}
