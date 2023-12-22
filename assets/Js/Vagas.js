const value = document.getElementById('value');
const ocuparButton = document.getElementById ('ocupar');
const liberarButton = document.getElementById ('liberar');
const limitValue = document.getElementById("limit")

var count = 0;
let contador = parseInt(localStorage.getItem('count')) || 0;
let contadorlimit = parseInt(localStorage.getItem('limit')) || 0;


limitValue.innerHTML = parseInt(contadorlimit)
value.innerHTML = contador;

ocuparButton.addEventListener('click', () => {
    count += 1;
    localStorage.setItem('count', count);

    if (count >= 1){
        ocuparButton.disabled = true;
    } {
        liberarButton.disabled = false;
    }
        updateValue2();
    });

liberarButton.addEventListener('click', () => {
    if (count == 0) {
        
    } else {count -= 1} 
        localStorage.setItem('count', count);

    if (count <= 1) {
        ocuparButton.disabled = null;
    } {
        liberarButton.disabled = true;
    }
        updateValue2();
});


const updateValue2 = () => {
    value.innerHTML = count;
};





