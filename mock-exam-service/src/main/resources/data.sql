-- Insert User data
insert into users (email, username, password, first_name, second_name, created_at, modified_at, version) values ('demo-admin@email.com', 'demo-admin', 'password', 'Sara', 'Crown', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0);
insert into users (email, username, password, first_name, second_name, created_at, modified_at, version) values ('demo-user@email.com', 'demo-user', 'password', 'Jeremy', 'Brown', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0);
insert into users (email, username, password, first_name, second_name, created_at, modified_at, version) values ('demo-user1@email.com', 'demo-user1', 'password', 'Jeremy', 'Brown', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0);

insert into role (name, created_at, modified_at, version) values ('ROLE_ADMIN', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0);
insert into role (name, created_at, modified_at, version) values ('ROLE_USER', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0);
insert into role (name, created_at, modified_at, version) values ('ROLE_MODERATOR', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0);

insert into users_role(users_id, role_id) values (1, 1);
insert into users_role(users_id, role_id) values (1, 2);
insert into users_role(users_id, role_id) values (1, 3);
insert into users_role(users_id, role_id) values (2, 2);
insert into users_role(users_id, role_id) values (3, 3);

insert into exam (created_at, modified_at, version, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 'Pivotal Spring Boot Certification Exam Mock', 'This is mock exam for spring boot pivotal certification', true, 1);
insert into exam (created_at, modified_at, version, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 'Oracle Java 8 Certification Mock test', 'This Java 8 certification mock test', false, 1);
insert into exam (created_at, modified_at, version, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 'Oracle Java 11 Certification Mock test', 'This Java 11 certification mock test', false, 2);

insert into exam_category(created_at, modified_at, version, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 'Mock Exam');
insert into exam_category(created_at, modified_at, version, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 'Spring Boot');
insert into exam_category(created_at, modified_at, version, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 'Spring Framework');
insert into exam_category(created_at, modified_at, version, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 'Java');
insert into exam_category(created_at, modified_at, version, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 'Java Script');
insert into exam_category(created_at, modified_at, version, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 'Python');

insert into exam_categories(exam_id, exam_category_id) values (1, 2);
insert into exam_categories(exam_id, exam_category_id) values (2, 2);
insert into exam_categories(exam_id, exam_category_id) values (1, 3);
insert into exam_categories(exam_id, exam_category_id) values (3, 3);
insert into exam_categories(exam_id, exam_category_id) values (2, 3);

insert into question(created_at, modified_at, version, exam_id, title, explanation, is_multiple) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 1, 'What is Spring boot ?', 'Spring boot is framework', true);
insert into question(created_at, modified_at, version, exam_id, title, explanation, is_multiple) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 1, 'What is application.properties ?', 'application.properties is configuration file', false);
insert into question(created_at, modified_at, version, exam_id, title, explanation, is_multiple) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 1, 'What is spring.factory ?', 'spring.factory is a xml file for autoconfiguration spring boot', true);

insert into question_answer(created_at, modified_at, version, question_id, content, is_correct) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 1, 'Is Framework', true);
insert into question_answer(created_at, modified_at, version, question_id, content, is_correct) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 1, 'Is Design Pattern', false);
insert into question_answer(created_at, modified_at, version, question_id, content, is_correct) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 1, 'Java Implementation', false);
insert into question_answer(created_at, modified_at, version, question_id, content, is_correct) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0, 1, 'Has starter dependency', true);