const value = document.getElementById('value');
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

document.addEventListener('mouseup', () => clearInterval(intervalid));
