package com.mockexam.mockexamservice.controller.advice;

import com.mockexam.mockexamservice.controller.response.HttpResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.util.Date;

@RestControllerAdvice
@Slf4j
public class AdviceController {

    @ExceptionHandler(NumberFormatException.class)
    public ResponseEntity<HttpResponse> handleCastNumberFormatException(NumberFormatException exception) {
        log.error("CAST NUMBER FORMAT EXCEPTION MESSAGE: {}", exception.getMessage());
        return createHttpResponse(HttpStatus.BAD_REQUEST, "Value must be a number");
    }

    private ResponseEntity<HttpResponse> createHttpResponse(HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(HttpResponse
                .builder()
                .timeStamp(new Date())
                .httpStatusCode(httpStatus.value())
                .httpStatus(httpStatus)
                .reason(httpStatus.getReasonPhrase())
                .message(message)
                .build(), httpStatus);
    }

}
