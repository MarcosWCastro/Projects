create database cadastros;
use cadastros;

create table usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(30),
email varchar(30),
senha varchar(20)
);

create table publicacao (
idPublicacao int primary key auto_increment,
descricao text(100),
dataHora datetime default current_timestamp,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

select * from usuario;
select * from publicacao;