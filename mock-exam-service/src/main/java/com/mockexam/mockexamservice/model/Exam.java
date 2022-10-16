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
@Table(name = "EXAM")
public class Exam extends BaseEntity{

    private String title;
    private String description;
    private Type type;

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @JsonIgnore
    @ToString.Exclude
    private User user;

    @ManyToMany(cascade = {CascadeType.REFRESH})
    @JoinTable(name = "EXAM_CATEGORIES",
            joinColumns = {@JoinColumn(name = "exam_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "exam_category_id", referencedColumnName = "id")})
    @ToString.Exclude
    private Set<ExamCategory> examCategories;

}
