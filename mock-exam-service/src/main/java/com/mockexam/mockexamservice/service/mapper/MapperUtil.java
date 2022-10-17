package com.mockexam.mockexamservice.service.mapper;

import org.mapstruct.BeanMapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

public abstract class MapperUtil<T> {

    public String timeToString(Instant instant) {
        return new SimpleDateFormat("dd.MM.yyyy").format(Date.from(instant));
    }

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    public abstract T updateMapping (T entity, @MappingTarget T toUpdate);
}
