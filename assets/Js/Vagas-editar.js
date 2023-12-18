const value = document.getElementById('value');
const plusButton = document.getElementById ('plus');
const menosButton = document.getElementById ('menos');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;

let intervalid = 0;

// let contador = parseInt(localStorage.getItem('count')) || 0;

//document.getElementById('limit').innerText = contador;

plusButton.addEventListener('click', () => {
        count += 1;

      //  localStorage.setItem('count', count);

        updateValue();
        

});

menosButton.addEventListener('click', () => {
        count -= 1;

       // localStorage.setItem('count', count);
    
        updateValue();

});

document.addEventListener('mouseup', () => clearInterval(intervalid)); 
