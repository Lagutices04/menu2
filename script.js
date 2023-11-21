document.querySelector(".menuBarra").addEventListener("click", animacionMenu);
// Query trae la clase menuBarra.
// El add cuando se escuche click trae todo el contenedor sin importar en qué barra se haga.
// AnimacionMenu donde se haga click y llama esta función.

let barra1 = document.querySelector(".fila1");
// El query trae la clase del span fila1.
let barra2 = document.querySelector(".fila2");
let barra3 = document.querySelector(".fila3");

function animacionMenu() {
    // Activa los estilos en el CSS.
    barra1.classList.toggle("fila1Animacion");
    // Hara un classlist toggle pondrá la fila1 animacion.
    barra3.classList.toggle("fila3Animacion");
    // Toggle por defecto está en off y cuando se llama en este caso en el add se pondrá on.
    barra2.classList.toggle("fila2Animacion");
}








