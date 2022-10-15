package com.mockexam.mockexamservice.service.abstracts;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface ReadWriteService <T, K>{

    Optional<T> findById(K id);
    List<T> findAll();
    boolean isPresentById(K id);
    void persist(T entity);
    void update(T entity);
    void delete(T entity);
    void deleteById(K id);
    void deleteAll(Collection<T> entities);

}
