const value = document.getElementById('value');
const plusButton = document.getElementById ('plus');
const menosButton = document.getElementById ('menos');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;

let intervalid = 0;

plusButton.addEventListener('click', () => {
        count += 1;

        updateValue();
        
    }, 100);

menosButton.addEventListener('click', () => {
        count -= 1;
    
        updateValue();

    }, 100);

document.addEventListener('mouseup', () => clearInterval(intervalid)); 
