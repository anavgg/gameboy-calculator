const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

let primerNumero = false;
const displayActual = document.getElementById('valor-actual');
const placeholder = document.getElementById('placeholder');

document.querySelectorAll('.numero').forEach(function(boton) {
  boton.addEventListener('click', function() {
    if (!primerNumero) {
      displayActual.textContent = this.value;
      primerNumero = true;
      placeholder.style.display = 'none';
    } else {
      displayActual.textContent += this.value;
    }
  });
});
