insert into USERS ( email, username, password, first_name, second_name, created_at, modified_at) values ( 'demo-admin@email.com', 'demo-admin', '{bcrypt}$2a$10$gEIahWZGw7P3d2xkJpCC4OxWO1pEEJbBQGQDt3f4bhra3I.LD2oOe', 'Sara', 'Crown', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z');
insert into USERS ( email, username, password, first_name, second_name, created_at, modified_at) values ( 'demo-user@email.com', 'demo-user', '{bcrypt}$2a$10$gEIahWZGw7P3d2xkJpCC4OxWO1pEEJbBQGQDt3f4bhra3I.LD2oOe', 'Jeremy', 'Brown', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z');

insert into ROLE ( name, created_at, modified_at) values ( 'ROLE_ADMIN', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z');
insert into ROLE ( name, created_at, modified_at) values ( 'ROLE_USER', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z');
insert into ROLE ( name, created_at, modified_at) values ( 'ROLE_MODERATOR', '2022-07-04T13:08:21.899448819Z', '2022-07-04T13:08:21.899448819Z');

insert into USERS_ROLE (USERS_id, ROLE_id) values (1, 1);
insert into USERS_ROLE (USERS_id, ROLE_id) values (1, 2);
insert into USERS_ROLE (USERS_id, ROLE_id) values (1, 3);
insert into USERS_ROLE (USERS_id, ROLE_id) values (2, 2);