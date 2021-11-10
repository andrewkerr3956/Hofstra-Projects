CREATE DATABASE website

CREATE TABLE articles
(
id int primary key auto_increment not null,
title varchar(200),
summary varchar(300),
content text,
created datetime
)

INSERT INTO articles (title, summary, content, created)
VALUES 
("Super Smash Bros. Final DLC Leaked", "The final character for Super Smash Bros. Ultimate has been revealed by modders.", "Some text really should go here ideally.", NOW()),
("Article Title", "This is a summary for the article.", "This is the content section of the article", NOW());

SELECT * FROM articles

CREATE TABLE users
(
id int primary key auto_increment not null,
username varchar(60),
password varchar(60)
)

INSERT INTO users (username, password)
VALUES
("alex", "password"),
("billy", "cat")

SELECT * FROM users