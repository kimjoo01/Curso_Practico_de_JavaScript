const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const img = document.createElement('img');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = "La oruga pepe";
// console.log (h1.getAttribute('class'));
// h1.setAttribute('class' , 'verde');

h1.classList.add('rojo');
h1.classList.remove('nexodo');

input.value = "512365";

img.src = "https://img.redbull.com/images/c_fill,w_2880,h_1460,g_auto,f_auto,q_auto/redbullcom/2023/4/19/mxdrfhmrauci8vbengho/rb19-main-hero";

pid.append(img);