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
@Table(name = "ROLE")
public class Role extends BaseEntity {

    private String name;

    @ManyToMany(cascade = CascadeType.DETACH)
    @JoinTable(name = "USERS_ROLE",
            joinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "users_id", referencedColumnName = "id")})
    @ToString.Exclude
    private List<User> users;
}
