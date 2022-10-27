insert into users (email, username, password, first_name, second_name, created_at, modified_at) values ('demo-admin@email.com', 'demo-admin', '{bcrypt}$2a$10$gEIahWZGw7P3d2xkJpCC4OxWO1pEEJbBQGQDt3f4bhra3I.LD2oOe', 'Sara', 'Crown', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z');
insert into users (email, username, password, first_name, second_name, created_at, modified_at) values ('demo-user@email.com', 'demo-user', '{bcrypt}$2a$10$gEIahWZGw7P3d2xkJpCC4OxWO1pEEJbBQGQDt3f4bhra3I.LD2oOe', 'Jeremy', 'Brown', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z');
insert into users (email, username, password, first_name, second_name, created_at, modified_at) values ('demo-user1@email.com', 'demo-user1', '{bcrypt}$2a$10$gEIahWZGw7P3d2xkJpCC4OxWO1pEEJbBQGQDt3f4bhra3I.LD2oOe', 'Jeremy', 'Brown', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z');

insert into role (name, created_at, modified_at) values ('ROLE_ADMIN', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z');
insert into role (name, created_at, modified_at) values ('ROLE_USER', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z');
insert into role (name, created_at, modified_at) values ('ROLE_MODERATOR', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z');

insert into users_role(users_id, role_id) values (1, 1);
insert into users_role(users_id, role_id) values (1, 2);
insert into users_role(users_id, role_id) values (1, 3);
insert into users_role(users_id, role_id) values (2, 2);
insert into users_role(users_id, role_id) values (3, 3);

insert into exam (created_at, modified_at, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Pivotal Spring Boot Certification Exam Mock', 'This Java 11 certification mock test This Java 11 certification mock test This Java 11 certification mock test This Java 11 certification mock test This Java 11 certification mock test This Java 11 certification mock test This Java 11 certification mock test', true, 1);
insert into exam (created_at, modified_at, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Oracle Java 8 Certification Mock test', 'This Java 8 certification mock test', false, 1);
insert into exam (created_at, modified_at, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Oracle Java 11 Certification Mock test', 'This Java 11 certification mock test', false, 1);
-- delete start
insert into exam (created_at, modified_at, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Oracle Java 11 Certification Mock test', 'This Java 11 certification mock test', false, 1);
insert into exam (created_at, modified_at, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Oracle Java 11 Certification Mock test', 'This Java 11 certification mock test', false, 1);
insert into exam (created_at, modified_at, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Oracle Java 11 Certification Mock test', 'This Java 11 certification mock test This Java 11 certification mock test This Java 11 certification mock test', false, 1);
insert into exam (created_at, modified_at, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Oracle Java 11 Certification Mock test', 'This Java 11 certification mock test This Java 11 certification mock test This Java 11 certification mock test This Java 11 certification mock test This Java 11 certification mock test This Java 11 certification mock test This Java 11 certification mock test', false, 1);
insert into exam (created_at, modified_at, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Oracle Java 11 Certification Mock test', 'This Java 11 certification mock test', false, 1);
insert into exam (created_at, modified_at, title, description, is_public, user_id) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Oracle Java 11 Certification Mock test', 'This Java 11 certification mock test', false, 1);
-- delete end
insert into exam_category(created_at, modified_at, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Mock Exam');
insert into exam_category(created_at, modified_at, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Spring Boot');
insert into exam_category(created_at, modified_at, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Spring Framework');
insert into exam_category(created_at, modified_at, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Java');
insert into exam_category(created_at, modified_at, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Math');
insert into exam_category(created_at, modified_at, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Spring');
insert into exam_category(created_at, modified_at, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'Computer');

insert into exam_categories(exam_id, exam_category_id) values (1, 1);
insert into exam_categories(exam_id, exam_category_id) values (1, 2);
insert into exam_categories(exam_id, exam_category_id) values (1, 3);
insert into exam_categories(exam_id, exam_category_id) values (2, 4);
insert into exam_categories(exam_id, exam_category_id) values (2, 5);
insert into exam_categories(exam_id, exam_category_id) values (2, 6);
insert into exam_categories(exam_id, exam_category_id) values (2, 7);

insert into question(created_at, modified_at, exam_id, title, explanation, is_multiple) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 1, 'What is Spring boot ?', 'Spring boot is framework', true);
insert into question(created_at, modified_at, exam_id, title, explanation, is_multiple) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 1, 'What is application.properties ?', 'application.properties is configuration file', false);
insert into question(created_at, modified_at, exam_id, title, explanation, is_multiple) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 1, 'What is spring.factory ?', 'spring.factory is a xml file for autoconfiguration spring boot', true);

insert into question_category(created_at, modified_at, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'security');
insert into question_category(created_at, modified_at, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'configuration');
insert into question_category(created_at, modified_at, name) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 'hibernate');

insert into question_categories(question_id, question_category_id) values (1, 1);
insert into question_categories(question_id, question_category_id) values (2, 2);
insert into question_categories(question_id, question_category_id) values (3, 3);

insert into question_answer(created_at, modified_at, question_id, content, is_correct) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 1, 'Is Framework', true);
insert into question_answer(created_at, modified_at, question_id, content, is_correct) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 1, 'Is Design Pattern', false);
insert into question_answer(created_at, modified_at, question_id, content, is_correct) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 1, 'Java Implementation', false);
insert into question_answer(created_at, modified_at, question_id, content, is_correct) values ('2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 1, 'Has starter dependency', true);
