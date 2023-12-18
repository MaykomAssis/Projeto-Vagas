/* const usuarioPermitidoAdmin = "admin";
const usuarioPermitidoUser = "user";

function logar() {
    var matricula = document.getElementById('Matricula').value;
    var senha = document.getElementById('Senha').value;

    if ((matricula === usuarioPermitidoAdmin && senha === usuarioPermitidoAdmin) ||
        (matricula === usuarioPermitidoUser && senha === usuarioPermitidoUser)) {
        alert('Login Bem-Sucedido!');
        location.href = "Vagas.html";
    } else {
        alert('Matrícula ou senha incorretos');
    }
} */


function logar() {

    var Matricula = document.getElementById('Matricula'),value;
    var Senha = document.getElementById('Senha'),value;

    if (Matricula === 'admin' && Senha === 'admin') {
        alert('Login como admin bem-sucedido!');
        location.href = "Vagas.html";
        exibirLinkAdmin();
    } else if (Matricula === 'user' && Senha === 'user') {
        alert('Login como user bem-sucedido!');
        location.href = "Vagas.html";
    } else {
        alert('Matrícula ou senha incorretos');
    }
}

function exibirLinkAdmin() {
    const linkAdmin = document.getElementById('linkAdmin');
    if (linkAdmin) {
        linkAdmin.classList.remove('hidden');
    }
}

