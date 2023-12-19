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





