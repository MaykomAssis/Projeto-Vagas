function logar() {
    var matricula = document.getElementById('Matricula').value;
    var senha = document.getElementById('Senha').value;
    

     if ((matricula === 'admin' || matricula === 'user') && senha === matricula) { // matricula === 'admin' || senha === 'admin' &&  matricula === 'senha' || senha === 'senha' 
        alert('Login bem-sucedido!');
        location.href = "Vagas.html";
        localStorage.setItem('matricula', matricula); // matricula && senha
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



/* function logar() {
    var matricula = document.getElementById('Matricula').value;
    var senha = document.getElementById('Senha').value;

    if ((matricula === 'admin' || matricula === 'user') && senha === matricula) {
        alert('Login bem-sucedido!');
        location.href = "Vagas.html";
        localStorage.setItem('matricula', matricula);
    } else {
        alert('Matrícula ou senha incorretos');
    }
}

function exibirLinkAdmin() {
    const matricula = localStorage.getItem('matricula');
    const linkAdmin = document.getElementById('linkAdmin');

    if (matricula === 'admin' && linkAdmin) {
        linkAdmin.classList.remove('hidden');
    } else {
        linkAdmin.classList.add('hidden');
    }
}
*/
