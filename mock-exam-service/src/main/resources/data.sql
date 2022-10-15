-- Insert User data
insert into users (email, username, password, first_name, second_name, created_at, modified_at, version) values ('demo-admin@email.com', 'demo-admin', 'password', 'Sara', 'Crown', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0);
insert into users (email, username, password, first_name, second_name, created_at, modified_at, version) values ('demo-user@email.com', 'demo-user', 'password', 'Jeremy', 'Brown', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0);

insert into role (name, created_at, modified_at, version) values ('ROLE_ADMIN', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0);
insert into role (name, created_at, modified_at, version) values ('ROLE_USER', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0);
insert into role (name, created_at, modified_at, version) values ('ROLE_MODERATOR', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z', 0);

insert into users_role(users_id, role_id) values (1, 1);
insert into users_role(users_id, role_id) values (1, 2);
insert into users_role(users_id, role_id) values (1, 3);
insert into users_role(users_id, role_id) values (2, 2);
-- insert into question(id, is_multiple, title) values (1, false, 'Is the following statement correct? Auto-configuration classes can be annotated with multiple @Conditional annotation.');
-- insert into question(id, is_multiple, title) values (2, true, 'Which of the following statements are correct regarding FilterChainProxy? Select all that apply.');
--
-- insert into question_answer(id, question_id, is_correct, content) values (1, 1, true, 'True');
-- insert into question_answer(id, question_id, is_correct, content) values (2, 1, false, 'False');
--
-- insert into question_answer(id, question_id, is_correct, content) values (3, 2, true, 'We can insert additional filters in a filter chain');
-- insert into question_answer(id, question_id, is_correct, content) values (4, 2, false, 'FilterChainProxy''s role is to delegate');
-- insert into question_answer(id, question_id, is_correct, content) values (5, 2, true, 'FilterChainProxy holds a list');
-- insert into question_answer(id, question_id, is_correct, content) values (6, 2, false, 'Spring management filter beans');
