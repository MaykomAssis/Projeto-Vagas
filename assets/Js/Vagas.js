/* const value = document.getElementById('value');
const ocuparButton = document.getElementById ('ocupar');
const liberarButton = document.getElementById ('liberar');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;

let intervalid = 0;

ocuparButton.addEventListener('mousedown', () => {
    intervalid = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);

});
liberarButton.addEventListener('mousedown', () => {
    intervalid = setInterval(() => {
        count -= 1;
        updateValue();

    }, 100);

});

document.addEventListener('mouseup', () => clearInterval(intervalid)); */



const value = document.getElementById('value');
const ocuparButton = document.getElementById ('ocupar');
const liberarButton = document.getElementById ('liberar');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;

let intervalid = 0;

let contador = parseInt(localStorage.getItem('count')) || 0;

document.getElementById('value').innerText = contador;

ocuparButton.addEventListener('click', () => {
        count += 1;

        localStorage.setItem('count', count);

        if (count >= 1){

            ocuparButton.disabled = true;
        }

            liberarButton.disabled = false;

        updateValue();
    }, 100);

liberarButton.addEventListener('click', () => {
    if (count == 0) {

        

    } else {count -= 1} 
        
        localStorage.setItem('count', count);

        if (count <= 1) {

            ocuparButton.disabled = null;
        }
            liberarButton.disabled = true;

        updateValue();

    }, 100);

document.addEventListener('mouseup', () => clearInterval(intervalid)); 







/* const value = document.getElementById('value');
const ocuparButton = document.getElementById('ocupar');
const liberarButton = document.getElementById('liberar');

const updateValue = () => {
    value.innerHTML = count;
};

// Recupera o valor armazenado no localStorage ao iniciar a página
let count = parseInt(localStorage.getItem('count')) || 0;

ocuparButton.addEventListener('click', () => {
    count += 1;

    localStorage.setItem('count', count);

    if (count >= 1) {
        ocuparButton.disabled = true;
    }

    liberarButton.disabled = false;

    updateValue();
});

liberarButton.addEventListener('click', () => {
    count -= 1;

    localStorage.setItem('count', count);

    if (count <= 1) {
        ocuparButton.disabled = false;
    }

    liberarButton.disabled = true;

    updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalid));*/
