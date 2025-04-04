// Função para verificar o login
function verificarLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtenha os valores dos campos de login
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Definir credenciais pré-determinadas
    const usuarioValido = "User";
    const senhaValida = "1234";

    // Verificar se o nome de usuário e a senha correspondem aos armazenados
    if (username === usuarioValido && password === senhaValida) {
        alert('Login bem-sucedido!');
        // Abrir a página do jogo (game.html) em uma nova aba
        window.open('game.html', '_blank'); // Abre a página em uma nova aba
        // Opcional: Fechar a aba de login após login bem-sucedido
        window.close();  // Fecha a janela atual, caso você queira que o login feche a página de login
    } else {
        // Exibir mensagem de erro se o login for incorreto
        alert('Usuário ou senha incorretos.');
    }
}

// Função para criar um novo usuário (caso ainda não tenha sido criado)
function criarUsuario(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtenha os valores dos campos de login
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Verificar se já existe um usuário registrado
    const usuarioSalvo = localStorage.getItem('usuario');

    if (usuarioSalvo) {
        alert('Usuário já registrado! Tente fazer login.');
    } else {
        // Armazenar as credenciais no localStorage
        localStorage.setItem('usuario', username);
        localStorage.setItem('senha', password);
        alert('Usuário registrado com sucesso! Você pode fazer login agora.');
    }
}

// Adicionar evento ao botão de login
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', verificarLogin);

// Adicionar evento ao botão para registrar usuário (caso você tenha esse recurso)
const btnRegister = document.querySelector('.btn-register');
if (btnRegister) {
    btnRegister.addEventListener('click', criarUsuario);
}
