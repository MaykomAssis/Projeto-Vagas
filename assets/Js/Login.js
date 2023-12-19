 function logar() {
    var matricula = document.getElementById('Matricula').value;
    var senha = document.getElementById('Senha').value;
    

     if ((matricula === 'admin' || matricula === 'user') && senha === matricula) { // matricula === 'admin' || senha === 'admin' &&  matricula === 'senha' || senha === 'senha' 
        alert('Login bem-sucedido!');
        location.href = "Vagas.html";
        localStorage.setItem('Matricula', matricula); // matricula && senha
    } else {
        alert('Matrícula ou senha incorretos');
    }
}

function exibirLinkAdmin() {
    const matricula = document.setItem('Matricula');
    if (matricula === 'admin') {
        const linkAdmin = document.getElementById('linkAdmin');
        if (linkAdmin) {
            linkAdmin.classList.remove('hidden');
        }
    }
} 

