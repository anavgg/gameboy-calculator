const displayPreValue = document.getElementById('pre-value');
const displayCurrentValue = document.getElementById('current-value');
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayPreValue, displayCurrentValue);

numButtons.forEach(boton => {
    boton.addEventListener('click', () => display.agregarnum(boton.innerHTML));
});

operatorButtons.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

let primernum = false;
const actualDisplay = document.getElementById('valor-actual');
const placeholder = document.getElementById('placeholder');

document.querySelectorAll('.num').forEach(function(boton) {
  boton.addEventListener('click', function() {
    if (!primernum) {
      actualDisplay.textContent = this.value;
      primernum = true;
      placeholder.style.display = 'none';
    } else {
      actualDisplay.textContent += this.value;
    }
  });
});
