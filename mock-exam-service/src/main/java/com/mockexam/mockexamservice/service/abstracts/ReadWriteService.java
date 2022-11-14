package com.mockexam.mockexamservice.service.abstracts;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface ReadWriteService <T, K>{

    Optional<T> findById(K id);
    Iterable<T> findAll();
    Page<T> findAll(Pageable pageable);
    Iterable<T> findAll(Sort sort);
    boolean isPresentById(K id);
    T persist(T entity);
    void persistAll(Collection<T> entities);
    T update(T entity);
    void delete(T entity);
    void deleteById(K id);
    void deleteAll(Collection<T> entities);

}
