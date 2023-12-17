const value = document.getElementById('reset');
const plusButton = document.getElementById ('plus');
const menosButton = document.getElementById ('menos');
const resetButton = document.getElementById ('reset');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;

let intervalid = 0;

plusButton.addEventListener('mousedown', () => {
    intervalid = setInterval(() => {
        count += 1;
        updateValue();

    }, 100);

});
