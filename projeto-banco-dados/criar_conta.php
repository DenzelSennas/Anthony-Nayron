<?php

  if(isset($_POST['submit'])){
    // print_r($_POST['nome']);
    // print_r($_POST['email']);
    // print_r($_POST['senha']);

    include_once('config.php');

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $result = mysqli_query($conexao, "INSERT INTO users(nome, email, senha) 
    VALUES ('$nome', '$email', '$senha')");
    
  }

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criar Conta | Plataforma BD</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="background-container">
        <div class="form-box">
            <h2>Criar uma conta</h2>
            
            <form action="formulario.php" method="POST" id="formCadastro">
                
                <div class="input-group">
                    <label for="nomeCadastro">Nome</label>
                    <input type="text" id="nomeCadastro" name="nome" required placeholder="Seu nome completo">
                </div>
                
                <div class="input-group">
                    <label for="emailCadastro">E-mail</label>
                    <input type="email" id="emailCadastro" name="email" required placeholder="Seu melhor e-mail">
                </div>
                
                <div class="input-group">
                    <label for="senhaCadastro">Senha</label>
                    <input type="password" id="senhaCadastro" name="senha" required placeholder="Crie uma senha forte">
                </div>
                
                <div class="input-group">
                    <label for="confirmarSenha">Confirmar a senha</label>
                    <input type="password" id="confirmarSenha" name="confirmarSenha" required placeholder="Digite a senha novamente">
                </div>
                
                <button type="submit" class="btn-primary">Criar Conta</button>
            </form>
            
            <a href="index.html" class="link-secundary">Já tenho uma conta. Voltar ao Login</a>

            
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>