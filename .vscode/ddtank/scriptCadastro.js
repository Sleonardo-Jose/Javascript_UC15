// Função para criar um novo usuário
function criarCadastro(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores dos campos
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

    // Verificar se a senha e a confirmação de senha coincidem
    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    // Verificar se o usuário já existe
    const usuarioExistente = localStorage.getItem(username);

    if (usuarioExistente) {
        alert('Usuário já cadastrado. Tente um nome de usuário diferente.');
    } else {
        // Armazenar os dados no localStorage
        localStorage.setItem(username, password);
        alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
        // Redirecionar para a página de login
        window.location.href = 'login.html';
    }
}

// Adicionar evento ao formulário de cadastro
const formCadastro = document.getElementById('formCadastro');
formCadastro.addEventListener('submit', criarCadastro);
