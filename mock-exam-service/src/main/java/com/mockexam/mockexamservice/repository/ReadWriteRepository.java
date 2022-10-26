package com.mockexam.mockexamservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

@NoRepositoryBean
public interface ReadWriteRepository<T, K> extends PagingAndSortingRepository<T, K> {

}
