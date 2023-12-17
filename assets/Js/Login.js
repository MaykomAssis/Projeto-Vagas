
function logar(){
    var Matricula = document.getElementById('Matricula').value;
    var Senha = document.getElementById('Senha').value;

    if(Matricula == "admin" && Senha == "admin") {
        alert('Sucesso');
        location.href = "Vagas.html";
    } else {
        alert('Matricula ou senha incorretos');
    }
}


