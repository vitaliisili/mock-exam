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
@Table(name = "QUESTION")
public class Question extends BaseEntity{

    private String title;
    private boolean isMultiple;
    private String explanation;

}
