package com.mockexam.mockexamservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
@Table(name = "EXAM_CATEGORY")
public class ExamCategory extends BaseEntity{

    private String name;

    @ManyToMany(cascade = {CascadeType.REFRESH}, mappedBy = "examCategories", fetch = FetchType.LAZY)
    @ToString.Exclude
    @JsonIgnore
    private Set<Exam> exams = new HashSet<>();

}
