package com.mockexam.mockexamservice.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

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

}
