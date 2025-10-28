<?php
  // configurações de conexão do bd
  $dbHost = ""; //se for pelo xampp, use localhost
  $dbUser = ""; //geralmente é root
  $dbPass = ""; //senha do sql na sua máquina
  $dbName = "formulario"; //eu criei o bd com esse nome mas pode ser alterado

  $conexao = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

  if ($conexao->connect_error) {
    echo "Erro";
  } else {
    echo "Conexão efetuada com sucesso";
  }
?>