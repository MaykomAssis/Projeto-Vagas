const value__limitButton = document.getElementById('value__limit');
const plusButton = document.getElementById('plus');
const menosButton = document.getElementById('menos');
const limitButton = document.getElementById('limit');

const updateValue = () => {
    value__limitButton.innerHTML = count;
};

let count = 0;

let contador2 = parseInt(localStorage.getItem('count')) || 0;

document.getElementById('value__limit').innerHTML = contador2

plusButton.addEventListener('click', () => {
    count += 1;

    localStorage.setItem('count', count);

    updateValue();
});

menosButton.addEventListener('click', () => {
    count -= 1;

    localStorage.setItem('count', count);

    updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalid));


