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
@Table(name = "EXAM")
public class Exam extends BaseEntity{

    private String title;

    @Column(length = 2048)
    private String description;

    private boolean isPublic;

    private int time;

    private int passPercentage;

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @JsonIgnore
    @ToString.Exclude
    private User user;

    @ManyToMany(cascade = {CascadeType.REFRESH}, fetch = FetchType.LAZY)
    @JoinTable(name = "EXAM_CATEGORIES",
            joinColumns = {@JoinColumn(name = "exam_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "exam_category_id", referencedColumnName = "id")})
    @ToString.Exclude
    private Set<ExamCategory> examCategories = new HashSet<>();

    @OneToMany(cascade = {CascadeType.REFRESH, CascadeType.REMOVE}, mappedBy = "exam")
    @ToString.Exclude
    @JsonIgnore
    private Set<Question> questions = new HashSet<>();

    public void addExamCategory(ExamCategory examCategory) {
        examCategory.getExams().add(this);
        this.examCategories.add(examCategory);
    }
}
