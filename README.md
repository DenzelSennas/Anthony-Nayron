# Banco de Dados Login

Uma breve descrição do projeto.

![Build](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

## Sumário
- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Banco de Dados](#banco-de-dados)
- [Testes](#testes)
- [Deploy](#deploy)
- [Contribuição](#contribuição)
- [Autores](#autor)

## Sobre
(Explique o objetivo, contexto e público-alvo.)

## Funcionalidades
- Lista de features.

## Requisitos
- navegador

## Instalação
```bash
git clone https://seu-repo.git
cd Banco-de-dados-Login
mvn clean install
mvn spring-boot:run
```


## Configuração
Crie `src/main/resources/application.properties` com:
spring.datasource.url=jdbc:mysql://localhost:3306/login_db
spring.datasource.username=root
spring.datasource.password=senha
server.port=8080


## Banco de Dados
Exemplo de criação da tabela `users`:
```sql
CREATE TABLE users(
  id_user INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(80) NOT NULL,
  email VARCHAR(80) NOT NULL,
  senha VARCHAR(55) NOT NULL
);
```

## Uso
Exemplo de requisição de login:
```bash
curl -X POST http://localhost:8080/api/login \
  -H "Content-Type: application/json" \
  -d '{"username":"teste","password":"1234"}'
```

## Testes
mvn test

## Deploy
docker build -t banco-login .
docker run -p 8080:8080 -e SPRING_PROFILES_ACTIVE=prod banco-login


## Contribuição
1. Fork o repositório.
2. Crie uma branch: `git checkout -b feat/nova-funcionalidade`
3. Faça commits pequenos e com mensagens claras.
4. Envie um Pull Request descrevendo a mudança.

## Autor 
- Clecio Ferreira Freire <clecioferreira011@gmail.com>
- Vicente Gomes — <seu-email@exemplo.com>

