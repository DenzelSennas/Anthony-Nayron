<?php
  $dbHost = "localhost";
  $dbUser = "root";
  $dbPass = "sql1050";
  $dbName = "formulario";

  $conexao = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

  if ($conexao->connect_error) {
    echo "Erro";
  } else {
    echo "Conexão efetuada com sucesso";
  }
?>