
function logar(){
    var Matricula = document.getElementById('Matricula').value;
    var Senha = document.getElementById('Senha').value;

    if(Matricula == "admin" && Senha == "admin") {
        alert('Login Bem-Sucedido!');
        location.href = "Vagas.html";
    } else {
        alert('Matricula ou senha incorretos');
    }
}
