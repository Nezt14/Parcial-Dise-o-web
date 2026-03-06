const form = document.getElementById("formCurso");
const lista = document.getElementById("listaCursos");
const contador = document.getElementById("contador");
const error = document.getElementById("error");

let totalCursos = 0;

function actualizarContador(){
contador.textContent = "Cursos disponibles: " + totalCursos;
}

form.addEventListener("submit", function(e){

e.preventDefault();

const nombre = document.getElementById("nombre").value.trim();
const docente = document.getElementById("docente").value.trim();
const duracion = document.getElementById("duracion").value.trim();

if(nombre.length < 3 || docente.length < 5 || duracion === ""){
error.textContent = "Complete todos los campos correctamente";
return;
}

error.textContent = "";

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<h3>${nombre}</h3>
<p>Docente: ${docente}</p>
<p>Duración: ${duracion}</p>
<button class="eliminar">Eliminar</button>
`;

lista.appendChild(card);

totalCursos++;
actualizarContador();

form.reset();

const btnEliminar = card.querySelector(".eliminar");

btnEliminar.addEventListener("click", function(){
card.remove();
totalCursos--;
actualizarContador();
});

});


const botones = document.querySelectorAll("nav button");

botones.forEach(boton=>{
boton.addEventListener("click", ()=>{

document.querySelectorAll("main section").forEach(sec=>{
sec.classList.add("hidden");
});

const id = boton.dataset.section;
document.getElementById(id).classList.remove("hidden");

});
});