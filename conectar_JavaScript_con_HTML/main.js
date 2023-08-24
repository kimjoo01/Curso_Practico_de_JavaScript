const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#suma');
const parrafo = document.querySelector('#parrafo');
const operacion = document.querySelector('#operacion')

function suma () {
    const suma = Number(input1.value) + Number(input2.value);
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