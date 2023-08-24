const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#suma');
const parrafo = document.querySelector('#parrafo');
const operacion = document.querySelector('#operacion');
const suma_but = document.querySelector('#suma');
const resta_but = document.querySelector('#resta');
const multi_but = document.querySelector('#multi');
const divi_but = document.querySelector('#divi');
const form = document.querySelector('#form');

suma_but.addEventListener('click', suma);
resta_but.addEventListener('click', resta);
multi_but.addEventListener('click', multi);
divi_but.addEventListener('click', divi);

// form.addEventListener('submit', suma)

function suma () {
    const suma = Number(input1.value) + Number(input2.value);
    // event.preventDefault();
    parrafo.innerText = "= " + suma;
    operacion.innerText = "+";
}
function resta () {
    const resta = Number(input1.value) - Number(input2.value);
    parrafo.innerText = "= " + resta;
    operacion.innerText = "-";
}
function multi () {
    const multi = Number(input1.value) * Number(input2.value);
    parrafo.innerText = "= " + multi;
    operacion.innerText = "x";
}
function divi () {
    const divi = Number(input1.value) / Number(input2.value);
    parrafo.innerText = "= " + divi;
    operacion.innerText = "/";
}