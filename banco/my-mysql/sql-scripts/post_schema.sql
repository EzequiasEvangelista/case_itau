create database twitter;
use twitter;

CREATE TABLE posts (
id MEDIUMINT NOT NULL AUTO_INCREMENT,
usuario varchar(25),
seguidores  INTEGER(25),
mensagem varchar(200),
PRIMARY KEY (id)
) COMMENT='testando criacao do schema';