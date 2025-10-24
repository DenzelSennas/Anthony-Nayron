document.addEventListener('DOMContentLoaded', () => {
    // Código para a tela de Login
    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', handleLogin);
    }
    
    // NOVO: Código para a tela de Cadastro
    const formCadastro = document.getElementById('formCadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', handleCadastro);
    }


    // NOVO: Código para a tela de Confirmação de E-mail
    const formConfirmacaoEmail = document.getElementById('formConfirmacaoEmail');
    if (formConfirmacaoEmail) {
        formConfirmacaoEmail.addEventListener('submit', handleConfirmacaoEmail);
    }
});


    /* Lógica de Validação e Envio para o Login* só para a validação básica,mas
    pode ser aprimorada se o grajau pedi algo */
                            
function handleLogin(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById('emailLogin').value.trim();
    const senha = document.getElementById('senhaLogin').value.trim();

    // 1. Validação de campos (Tarefa 3)
    if (!email || !senha) {
        alert("Preencha o e-mail e a senha para entrar.");
        return;
    }

    // Validação básica de formato de e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("O formato do e-mail é inválido.");
        return;
    }

    // 2. Preparar e Enviar dados ao servidor (Tarefa 4)
    enviarDados('/login', { email, senha })
        .then(response => {
            // Se o Backend(O kaua, vulgo errei fui paia) retornar sucesso:
            if (response.sucesso) {
                alert("Login bem-sucedido! Redirecionando...");
                // Redirecionar para a página inicial (que ainda será desenvolvida pelo irviton nayron)
                window.location.href = 'pagina_inicial.html'; 
            } else {
                // Mensagem do Backend, ex: "Credenciais inválidas"
                alert(response.mensagem || "Erro ao fazer login.");
            }
        })
        .catch(error => {
            console.error('Erro de rede ou servidor:', error);
            alert("Não foi possível conectar ao servidor. Tente novamente mais tarde.");
        });
}


 /* Lógica de Validação e Envio para o Cadastro */
function handleCadastro(event) {
    event.preventDefault(); 

    // 1. Coleta os dados dos campos
    const nome = document.getElementById('nomeCadastro').value.trim();
    const email = document.getElementById('emailCadastro').value.trim();
    const senha = document.getElementById('senhaCadastro').value.trim();
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

    // 2. Validação de campos (Tarefa 3)
    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

    // Validação de formato de e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("O formato do e-mail é inválido.");
        return;
    }
    
    // Validação mais importante: Senhas devem ser iguais
    if (senha !== confirmarSenha) {
        alert("A senha e a confirmação de senha não coincidem.");
        return;
    }

    // Validação de força da senha, a coisa que não pode faltar, lembrete : muda para 5 ou 7.
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    // 3. Preparar e Enviar dados ao servidor (Tarefa 4)
    enviarDados('/cadastro', { nome, email, senha }) // Não enviamos a confirmação de senha
        .then(response => {
            // Se o Backend(Anhtony) retornar sucesso, o fluxo é para confirmação de e-mail (conforme Figma)
            if (response.sucesso) {
                alert("Cadastro realizado! Verifique seu e-mail.");
                // Redireciona para a próxima tela do fluxo
                window.location.href = 'confirmar_email.html'; 
            } else {
                // Ex: "E-mail já cadastrado" (Resposta do Backend)
                alert(response.mensagem || "Erro ao tentar cadastrar.");
            }
        })
        .catch(error => {
            console.error('Erro de rede ou servidor:', error);
            alert("Não foi possível realizar o cadastro. Tente novamente mais tarde.");
        });
}

/**
 * Função genérica para comunicação com o Backend*/
async function enviarDados(endpoint, dados) {
    // ATENÇÃO: A URL base deve ser a do servidor Backend (Etapa 4 - Kauã)
    const URL_BASE_BACKEND = 'http://localhost:3000'; // Exemplo padrão

    try {
        const response = await fetch(URL_BASE_BACKEND + endpoint, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados) 
        });

        // O Front-end só está OK se a resposta for HTTP 200-299
        if (!response.ok) {
            // Tenta obter a mensagem de erro do servidor
            const errorData = await response.json().catch(() => ({ mensagem: `Erro HTTP ${response.status}` }));
            throw new Error(errorData.mensagem);
        }

        return await response.json();

    } catch (error) {
        throw error;
    }
}




 /*Lógica de Validação e Envio para o Cadastro*/
function handleCadastro(event) {
    event.preventDefault(); 

   
    const nome = document.getElementById('nomeCadastro').value.trim();
    const email = document.getElementById('emailCadastro').value.trim();
    const senha = document.getElementById('senhaCadastro').value.trim();
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

    // 2. Validação de campos (Tarefa 3)

   
    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

    // B. Validação MAIS IMPORTANTE: Senhas devem ser iguais
    if (senha !== confirmarSenha) {
        // Se as senhas forem DIFERENTES, o código para aqui
        alert("Erro: A senha e a confirmação de senha não coincidem!");
        return; 
    }

    // C. Outras validações (tamanho mínimo, formato de e-mail, etc.)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("O formato do e-mail é inválido.");
        return;
    }
    
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    // 3. Se a validação passou, envia dados ao servidor (Tarefa 4)
    enviarDados('/cadastro', { nome, email, senha }) 
        .then(response => {
            if (response.sucesso) {
                alert("Cadastro realizado! Verifique seu e-mail.");
                window.location.href = 'confirmar_email.html'; 
            } else {
                alert(response.mensagem || "Erro ao tentar cadastrar.");
            }
        })
        .catch(error => {
            console.error('Erro de rede ou servidor:', error);
            alert("Não foi possível realizar o cadastro. Tente novamente mais tarde.");
        });
}


function handleCadastro(event) {
   
    
    // --- Aqui seria mais um código pra se testar o fluxo, o fluxo seria como que o codigo ta se
    // comportando. ---
    const emailCadastro = document.getElementById('emailCadastro').value.trim();
    
    alert("Simulando sucesso de Cadastro para: " + emailCadastro);
    
    // aqui ele ignora o Fetch que seria a parte do back end
    window.location.href = 'confirmar_email.html'; 
    return; 

   

    /* Lembrete Importante, a validação só funciona quando o Kauã fizer o back end

     ai aqui seria o codigo comentado da tela de validação, mas da pra eu fazer so a parte visual
     e depois meio que excluir isso. provalmente posso fazer igual o confirma senha.

    enviarDados('/cadastro', { nome, email, senha }) 
        .then(response => {
            if (response.sucesso) {
                alert("Cadastro realizado! Verifique seu e-mail.");
                window.location.href = 'confirmar_email.html'; 
            } else {
                alert(response.mensagem || "Erro ao tentar cadastrar.");
            }
        })
        .catch(error => {
            console.error('Erro de rede ou servidor:', error);
            alert("Não foi possível realizar o cadastro. Tente novamente mais tarde.");
        });
    */
}