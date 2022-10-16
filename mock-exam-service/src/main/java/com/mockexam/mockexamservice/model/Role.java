package com.mockexam.mockexamservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
@Table(name = "ROLE")
public class Role extends BaseEntity {

    private String name;

    @ManyToMany(cascade = CascadeType.REFRESH, mappedBy = "roles")
    @ToString.Exclude
    @JsonIgnore
    private Set<User> users;

}
