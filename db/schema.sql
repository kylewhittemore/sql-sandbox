DROP DATABASE IF EXISTS sandbox_db;
CREATE DATABASE sandbox_db;

USE sandbox_db;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT NOT NULL,
    username VARCHAR(255),
    password VARCHAR(255),
    PRIMARY KEY(id)  
)

