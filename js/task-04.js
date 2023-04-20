
const value = document.querySelector('#value');

const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrBtn.addEventListener("click", () => {
counterValue--;
value.textContent = counterValue;
});

incrBtn.addEventListener("click", () => {
    counterValue++;    
value.textContent = counterValue;
    });