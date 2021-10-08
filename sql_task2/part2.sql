/* PART 1*/
CREATE TABLE permissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);

/* PART 2*/
INSERT INTO permissions(name) values('compaign');
INSERT INTO permissions(name) values('line_item');
INSERT INTO permissions(name) values('creative');

/* add MANY_TO_MANY between clients, users and permissions */
CREATE TABLE users_permissions (
    user_id INT,
    permissions_id INT,
    PRIMARY KEY(user_id, permissions_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY(permissions_id) REFERENCES permissions(id)
);

CREATE TABLE clients_permissions (
    user_id INT,
    permissions_id INT,
    PRIMARY KEY(user_id, permissions_id),
    FOREIGN KEY (user_id) REFERENCES clients(id),
    FOREIGN KEY(permissions_id) REFERENCES permissions(id)
);

INSERT INTO clients_permissions values (1, 1);
INSERT INTO clients_permissions values (1, 2);
INSERT INTO users_permissions values (3, 2);

INSERT INTO clients_permissions values (2, 1);

/* PART 3 */
SELECT user_name, pn as user_permission, clients.name as client_name, permissions.name as client_permission
FROM (
    SELECT users.user_id, users.name as user_name, permissions.name as pn from users
        INNER JOIN users_permissions
        ON users_permissions.user_id = users.id
        INNER JOIN permissions
        ON permissions_id = permissions.id
) as perms
LEFT JOIN clients
ON user_id = clients.id
LEFT JOIN clients_permissions
ON clients_permissions.user_id = clients.id
LEFT JOIN permissions
ON permissions.id = clients_permissions.permissions_id
