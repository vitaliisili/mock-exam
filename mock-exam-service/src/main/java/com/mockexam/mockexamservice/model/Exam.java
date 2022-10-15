package com.mockexam.mockexamservice.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

}
