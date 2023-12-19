function logar() {
    var matricula = document.getElementById('Matricula').value;
    var senha = document.getElementById('Senha').value;
    

    if (matricula === 'admin' && senha === 'admin') {
        alert('Login como admin bem-sucedido!');
        location.href = "Vagas.html";
        localStorage.setItem('admin', matricula && senha)


    } else if (matricula === 'user' && senha === 'user') {
        alert('Login como user bem-sucedido!');
        location.href = "Vagas.html";
        localStorage.setItem('admin' , matricula && senha)


    } else {
        alert('Matrícula ou senha incorretos');
    }
}

function exibirLinkAdmin() {
    const matricula = document.getElementById('Matricula').value;
    if (matricula === 'admin' && senha === 'admin') {
        const linkAdmin = document.getElementById('linkAdmin');
        if (linkAdmin) {
            linkAdmin.classList.remove('hidden');
        }
    }
} 




