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
@Table(name = "QUESTION")
public class Question extends BaseEntity{

    private String title;
    private boolean isMultiple;
    private String explanation;

}
