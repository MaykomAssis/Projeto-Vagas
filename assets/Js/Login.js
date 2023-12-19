/*const usuarioPermitidoAdmin = "admin";
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

    function exibirLinkAdmin() {
        const linkAdmin = document.getElementById('linkAdmin');
        if (linkAdmin) {
            linkAdmin.classList.remove('hidden');
        }
} */


 /*function logar() {

    var Matricula = document.getElementById('Matricula').value;
    var Senha = document.getElementById('Senha').value;

    if (Matricula === 'admin' && Senha === 'admin') {
        alert('Login como admin bem-sucedido!');
        location.href = "Vagas.html";
    } else if (Matricula === 'user' && Senha === 'user') {
        alert('Login como user bem-sucedido!');
        location.href = "Vagas.html";
        exibirLinkAdmin();
    } else {
        alert('Matrícula ou senha incorretos');
    }
}

function exibirLinkAdmin() {
    const linkAdmin = document.getElementById('linkAdmin');
    if (linkAdmin) {
        linkAdmin.classList.remove('hidden');
    }
}*/

 function logar() {
    var matricula = document.getElementById('Matricula').value;
    var senha = document.getElementById('Senha').value;

    if (matricula === 'admin' && senha === 'admin') {
        alert('Login como admin bem-sucedido!');
        location.href = "Vagas.html";
    } else if (matricula === 'user' && senha === 'user') {
        alert('Login como user bem-sucedido!');
        location.href = "Vagas.html";
    } else {
        alert('Matrícula ou senha incorretos');
    }
}

// Chama a função exibirLinkAdmin() apenas se o usuário for "admin"
function exibirLinkAdmin() {
    const matricula = document.getElementById('Matricula').value;
    if (matricula === 'admin' && senha === 'admin') {
        const linkAdmin = document.getElementById('linkAdmin');
        if (linkAdmin) {
            linkAdmin.classList.remove('hidden');
        }
    }
} 

/*function logar() {
    var matricula = document.getElementById('Matricula').value;
    var senha = document.getElementById('Senha').value;

    if (matricula === 'admin' && senha === 'admin') {
        alert('Login como admin bem-sucedido!');
        location.href = "Vagas.html";
    } if (matricula === 'user' && senha === 'user') {
        alert('Login como user bem-sucedido!');
        location.href = "Vagas.html";
       
    } else {matricula != 'admin' && senha != 'admin' || matricula != 'user' && senha != 'user'} {
        alert('Matrícula ou senha incorretos');
    }
}*/




