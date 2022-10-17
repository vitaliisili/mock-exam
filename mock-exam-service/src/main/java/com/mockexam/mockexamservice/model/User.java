package com.mockexam.mockexamservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
@Table(name = "USERS")
public class User extends BaseEntity{

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true, nullable = false)
    private String username;

    private String password;

    private String firstName;

    private String secondName;

    @ManyToMany(cascade = CascadeType.REFRESH)
    @JoinTable(name = "USERS_ROLE",
            joinColumns = {@JoinColumn(name = "users_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "id")})
    @ToString.Exclude
    private Set<Role> roles;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "user")
    @ToString.Exclude
    @JsonIgnore
    private Set<Exam> exams;

}
