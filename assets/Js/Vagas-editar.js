/* const value2 = document.getElementById('value2');
const plusButton = document.getElementById ('plus');
const menosButton = document.getElementById ('menos');
const limitButton = document.getElementById ('limit')

const updateValue = () => {
    value2.innerHTML = count;
};

let count = 0;

let intervalid = 0;

 //let contador = parseInt(localStorage.getItem('count')) || 0;

//document.getElementById('limit').innerText = contador;

plusButton.addEventListener('click', () => {
        count += 1;

     //  localStorage.setItem('count', count);
        updateValue();
});

menosButton.addEventListener('click', () => {
        count -= 1;

     //  localStorage.setItem('count', count);
        updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalid)); 


function enviarValor() {
        const valorParaEnviar = document.getElementById('enviarValor').value;
        
        // Verifica se o valor é um número
        if (!isNaN(valorParaEnviar)) {
            // Redireciona para outra página e passa o valor como parâmetro
            window.location.href = '/Vagas.html' + valorParaEnviar;
        } else {
            alert('Digite um valor válido!');
        }
    } */

const value2 = document.getElementById('value2');
const plusButton = document.getElementById('plus');
const menosButton = document.getElementById('menos');
const limitButton = document.getElementById('limit');

const updateValue = () => {
    value2.innerHTML = count;
};

let count = 0;

plusButton.addEventListener('click', () => {
    count += 1;
    updateValue();
});

menosButton.addEventListener('click', () => {
    count -= 1;
    updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalid));

function enviarValor() {
    const valorParaEnviar = count;

    // Faz uma solicitação para a outra página usando fetch
    fetch('/Vagas.html', {
        method: 'POST', // ou 'GET' dependendo da sua necessidade
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ valor: valorParaEnviar })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar o valor para Vagas.html');
        }
        return response.json();
    })
    .then(data => {
        console.log('Resposta da outra página:', data);
    })
    .catch(error => {
        console.error('Erro:', error.message);
    });
}

