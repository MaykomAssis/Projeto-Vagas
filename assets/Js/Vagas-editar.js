const value__limitButton = document.getElementById('value__limit');
const plusButton = document.getElementById('plus');
const menosButton = document.getElementById('menos');
const voltarButton = document.getElementById('voltar')
const enviarValor = document.getElementById('enviarValor')

const updateValue = () => {
    value__limitButton.innerHTML = limit;
};

let contador2 = parseInt(localStorage.getItem('limit')) || 0;
let limit = contador2;

document.getElementById('value__limit').innerHTML = contador2

plusButton.addEventListener('click', () => {
    limit += 1;
    updateValue();
});

menosButton.addEventListener('click', () => {
    limit -= 1;
    updateValue();
});

enviarValor.addEventListener('click', () => {
    localStorage.setItem('limit', limit);
    updateValue();
});


voltarButton.addEventListener ('click', () => {
    location.href = "Vagas.html";
});