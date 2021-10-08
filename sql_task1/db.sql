/* 1 */
CREATE DATABASE sql_test;

USE sql_test;

/* USER TABLE */
/* name, flag (active or not), password */
/*
    TODO: should the name of the user to be unique or not ? length suppose 200 chars
    TODO: password length depend on the hash
*/
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    flag BOOLEAN DEFAULT FALSE
);

/* CLIENTS TABLE */
CREATE TABLE clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    flag BOOLEAN DEFAULT FALSE
);

/* USER BELONGS TO ONE CLIENT / CLIENT HAS MANY USERS (MANY TO ONE)*/
/*
    TODO on delete/update cascade or not
*/
ALTER TABLE users
ADD COLUMN user_id int,
ADD FOREIGN KEY (user_id) REFERENCES users(id);

/* PART 2 */
INSERT INTO clients(name, password, flag) VALUES('client1', 's3cr3t', TRUE);
INSERT INTO clients(name, password, flag) VALUES('client2', 's3cr3t', TRUE);

INSERT INTO users(name, password, flag, user_id) VALUES('client1 user1', 's3cr3t', TRUE, 1);
INSERT INTO users(name, password, flag, user_id) VALUES('client2 user2', 's3cr3t', TRUE, 2);
INSERT INTO users(name, password, flag, user_id) VALUES('client1 user3', 's3cr3t', TRUE, 1);
/* FLAG BY DEFAULT IS FALSE */
INSERT INTO users(name, password, user_id) VALUES('client1 user3', 's3cr3t', 2);

SELECT clients.name, users.name FROM clients, users
WHERE users.user_id = clients.id;

/* PART 3 */
SELECT clients.name, count(*) as users_count from clients, users
WHERE users.user_id = clients.id
GROUP BY clients.name;

/* PART 4 */
SELECT clients.name, count(*) as active_users_count from clients, users
WHERE users.user_id = clients.id AND users.flag = TRUE
GROUP BY clients.name;