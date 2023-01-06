/*Aqui vamos darle la logica necesaria para que nuestra calculadora sea capas de funcionar por si sola */

/* Aqi vamos a crear varias variables para poder manejar nuestro display*/
const displayvalor_anterior = document.getElementById('valor-anterior');
const displayvalor_actual = document.getElementById('valor-actual');

const botonesnumeros = document.querySelectorAll('.numero');
const botonesoperadores = document.querySelectorAll('.operador');

const display = new Display(displayvalor_anterior, displayvalor_actual);


botonesnumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregar_numero(boton.innerHTML));
});

botonesoperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});


