//Varibles tomadas del index
const form = document.getElementById("formCurso");
const lista = document.getElementById("listaCursos");
const contador = document.getElementById("contador");
const error = document.getElementById("error");
let totalCursos = 0;

//funcion que actualiza contador
function actualizarContador(){
contador.textContent = "Cursos disponibles: " + totalCursos;
}

//Evento que escucha el boton 
form.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const docente = document.getElementById("docente").value.trim();
    const duracion = document.getElementById("duracion").value.trim();

    //creacion de la tarjeta para los cursos
    const card = document.createElement("div");
    card.classList.add("card");

    //Insertar la informacion que llevara la tarjeta
    card.innerHTML = `
    <h3>${nombre}</h3>
    <p>Docente: ${docente}</p>
    <p>Duración: ${duracion}</p>
    <button class="eliminar">Eliminar</button>
    `;

    //agrega la tarjeta al contenedor de cursos del index.html
    lista.appendChild(card);

    totalCursos++;
    actualizarContador();

    form.reset();

    const btnEliminar = card.querySelector(".eliminar");

    //evento para eliminar la tarjeta del curso
    btnEliminar.addEventListener("click", function(){
        card.remove();
        totalCursos--;
        actualizarContador();
    });

});


const botones = document.querySelectorAll("nav button");

//recorremos todos los botones del menu de navegacion 
botones.forEach(boton=>{
    boton.addEventListener("click", ()=>{

        document.querySelectorAll("main section").forEach(sec=>{
            sec.classList.add("hidden");
        });

    const id = boton.dataset.section;
    document.getElementById(id).classList.remove("hidden");

    });
});