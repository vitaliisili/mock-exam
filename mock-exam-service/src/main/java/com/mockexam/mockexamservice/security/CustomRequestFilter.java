package com.mockexam.mockexamservice.security;

import com.mockexam.mockexamservice.exception.UserAuthenticationException;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Slf4j
@AllArgsConstructor
public class CustomRequestFilter extends OncePerRequestFilter {

    private final JwtUtils jwtUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        try {
            String token = jwtUtils.parseJwt(request);
            if (token != null && jwtUtils.validateJwtToken(token)) {
                String username = jwtUtils.getUsernameFromJwtToken(token);
                jwtUtils.authenticateUser(username);
            }
        }catch (Exception e) {
            log.error("Authentication User Error: {}", e.getMessage());
            throw new UserAuthenticationException(e.getMessage());
        }

        filterChain.doFilter(request, response);
    }
}
