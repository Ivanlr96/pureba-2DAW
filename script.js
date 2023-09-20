

/* const bot = document.querySelector('button');
const body = document.querySelector('body');
const colores=['green', 'red', 'white', 'pink', 'black'];

bot.addEventListener('click', fondo);

function fondo() {
    const indice=parseInt(Math.random() * colores.length);
    body.style.backgroundColor - colores[indice];

}
*/


const generateRandomColor = () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    console.log("Color hexadecimal generado: " + color)
    return color
}
function generateRandomColor2() {
    const color= '#'+ Math.floor (Math.random()* 16777215).toString(16)
    console.log("Color hexadecimal generado: "+ color)
    return color
}
// Función para cambiar el color de fondo del body //
const changeBackgroundColor = () => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;

}
// Botón //
const changeColorBtn = document.getElementById("cambiar_color");