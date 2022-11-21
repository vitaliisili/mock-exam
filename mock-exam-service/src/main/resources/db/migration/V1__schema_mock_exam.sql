CREATE TABLE USERS(
    id          BIGSERIAL,
    email       varchar UNIQUE NOT NULL,
    username    varchar UNIQUE NOT NULL,
    password    varchar        NOT NULL,
    first_name  varchar,
    second_name varchar,
    created_at  timestamp      NOT NULL,
    modified_at timestamp,
    PRIMARY KEY (id));


CREATE TABLE ROLE(
    id          BIGSERIAL,
    name        varchar   NOT NULL,
    created_at  timestamp NOT NULL,
    modified_at timestamp,
    PRIMARY KEY (id));


CREATE TABLE EXAM(
    id              BIGSERIAL,
    title           varchar   NOT NULL,
    description     varchar(2048),
    time            int4      NOT NULL,
    is_public       boolean   NOT NULL,
    pass_percentage int4      NOT NULL,
    created_at      timestamp NOT NULL,
    modified_at     timestamp,
    user_id        BIGSERIAL,
    PRIMARY KEY (id));


CREATE TABLE EXAM_CATEGORY(
    id          BIGSERIAL,
    name        varchar,
    created_at  timestamp NOT NULL,
    modified_at timestamp,
    exam_id     BIGSERIAL,
    PRIMARY KEY (id));


CREATE TABLE QUESTION(
    id          BIGSERIAL,
    title       text      NOT NULL,
    explanation text,
    is_multiple boolean   NOT NULL,
    created_at  timestamp NOT NULL,
    modified_at timestamp,
    exam_id     BIGSERIAL,
    PRIMARY KEY (id));


CREATE TABLE QUESTION_CATEGORY(
    id          BIGSERIAL,
    name        varchar,
    created_at  timestamp NOT NULL,
    modified_at timestamp,
    PRIMARY KEY (id));


CREATE TABLE QUESTION_ANSWER(
    id          BIGSERIAL,
    content     varchar,
    is_correct  boolean   NOT NULL,
    created_at  timestamp NOT NULL,
    modified_at timestamp,
    question_id BIGSERIAL,
    PRIMARY KEY (id));


CREATE TABLE USERS_ROLE(
    USERS_id BIGSERIAL,
    ROLE_id  BIGSERIAL,
    PRIMARY KEY (USERS_id, ROLE_id));


ALTER TABLE USERS_ROLE
    ADD FOREIGN KEY (USERS_id) REFERENCES USERS (id);


ALTER TABLE USERS_ROLE
    ADD FOREIGN KEY (ROLE_id) REFERENCES ROLE (id);


ALTER TABLE EXAM
    ADD FOREIGN KEY (user_id) REFERENCES USERS (id);


ALTER TABLE EXAM_CATEGORY
    ADD FOREIGN KEY (exam_id) REFERENCES EXAM;


ALTER TABLE QUESTION
    ADD FOREIGN KEY (exam_id) REFERENCES EXAM;

CREATE TABLE QUESTION_CATEGORIES(
    QUESTION_id          BIGSERIAL,
    QUESTION_CATEGORY_id BIGSERIAL,
    PRIMARY KEY (QUESTION_id, QUESTION_CATEGORY_id));


ALTER TABLE QUESTION_CATEGORIES
    ADD FOREIGN KEY (QUESTION_id) REFERENCES QUESTION (id);


ALTER TABLE QUESTION_CATEGORIES
    ADD FOREIGN KEY (QUESTION_CATEGORY_id) REFERENCES QUESTION_CATEGORY (id);


ALTER TABLE QUESTION_ANSWER
    ADD FOREIGN KEY (question_id) REFERENCES QUESTION (id);
