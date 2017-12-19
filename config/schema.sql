DROP DATABASE IF EXISTS `sequelize_library`;
CREATE DATABASE `sequelize_library`;


CREATE TABLE user_external_login
(
	id int NOT NULL AUTO_INCREMENT,
		user_account_id int NOT NULL,
		external_authentication_provider_id int NOT NULL,
		external_user_id varchar(255) NOT NULL,
		name varchar(30) NOT NULL,
		first_name varchar(30),
		last_name varchar(30),
		email varchar(30),
		login_name varchar(30),
	PRIMARY KEY (id),
	FOREIGN KEY (user_account_id) REFERENCES user_account(id),
  FOREIGN KEY (external_authentication_provider_id) REFERENCES external_authentication_provider_id(id)
);

CREATE TABLE external_authentication_provider
(
	id int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE user_account
(
	id int NOT NULL AUTO_INCREMENT,
    screen_user_name varchar(255) NOT NULL,
    user_details_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_details_id) REFERENCES user_details(id)
);


CREATE TABLE async_operation
(
	id int NOT NULL AUTO_INCREMENT,
    external_authentication_provider_id int NOT NULL,
    async_operation_status_type_id int NOT NULL,
    user_external_login_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (external_authentication_provider_id) REFERENCES external_authentication_provider_id(id),
	FOREIGN KEY (user_external_login_id) REFERENCES user_external_login(id),
	FOREIGN KEY (async_operation_status_type_id) REFERENCES async_operation_status_type(id)
);

CREATE TABLE async_operation_status_type
(
	id int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE user_details
(
	id int NOT NULL AUTO_INCREMENT,
		first_name varchar(30),
		last_name varchar(30),
		email varchar(30),
		password_salt varchar(255) NOT NULL,
		password_hash varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
