package com.mockexam.mockexamservice.service.abstracts;

import com.mockexam.mockexamservice.repository.ReadWriteRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Collection;
import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public abstract class ReadWriteServiceAbstraction<T, K> implements ReadWriteService<T, K> {

    private final ReadWriteRepository<T, K> readWriteRepository;

    @Transactional(readOnly = true)
    @Override
    public Optional<T> findById(K id) {
        return readWriteRepository.findById(id);
    }

    @Transactional(readOnly = true)
    @Override
    public Iterable<T> findAll() {
        return readWriteRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Iterable<T> findAll(Sort sort) {
        return readWriteRepository.findAll(sort);
    }

    @Transactional(readOnly = true)
    @Override
    public Page<T> findAll(Pageable pageable) {
        return readWriteRepository.findAll(pageable);
    }

    @Transactional(readOnly = true)
    @Override
    public boolean isPresentById(K id) {
        return readWriteRepository.existsById(id);
    }

    @Override
    public T persist(T entity) {
        return readWriteRepository.save(entity);
    }

    @Override
    public void persistAll(Collection<T> entities) {
        readWriteRepository.saveAll(entities);
    }

    @Override
    public T update(T entity) {
        return readWriteRepository.save(entity);
    }

    @Override
    public void delete(T entity) {
        readWriteRepository.delete(entity);
    }

    @Override
    public void deleteById(K id) {
        readWriteRepository.deleteById(id);
    }

    @Override
    public void deleteAll(Collection<T> entities) {
        readWriteRepository.deleteAll();
    }
}
