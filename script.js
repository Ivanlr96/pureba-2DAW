const btn = document.querySelector('button');
const body = document.querySelector('body');
const colores=['green', 'red', 'white', 'pink', 'black'];

btn.addEventListener('click', fondo);

function fondo() {
    const indice=parseInt(Math.random() * colores.length);
    body.style.backgroundColor - colores[indice];

}