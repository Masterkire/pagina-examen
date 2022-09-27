let btnMenu = document.querySelector('.menu');
let ventanaMenu = document.querySelector('.nav');
let btnCerrar = document.getElementsByClassName('btn-cerrar');
let btnContacto = document.getElementById('contacto');
let modal = document.getElementById('modal');
const form = document.getElementById("form");
const parrafo = document.getElementById('error');
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const estado = document.getElementById("estado");
const municipio = document.getElementById("municipio");
const colonia = document.getElementById("colonia");
const postal = document.getElementById("postal");
const mensaje = document.getElementById("mensaje");

btnMenu.onclick = () => {
    ventanaMenu.classList.toggle('active');
}

function cerrar() {
    ventanaMenu.classList.toggle('active');
}

btnContacto.addEventListener("click", () => {
    modal.style.transform = "translateY(0)";
    modal.style.display = "flex";
});

form.addEventListener("blur", () => {
    modal.style.transform = "translateY(110vh)";
    modal.style.display = "none";
});

window.addEventListener("click",function(event) {
    if (event.target == modal) {
        modal.style.transform = "translateY(110vh)";
        modal.style.display = "none";
    }
});

form.addEventListener("submit", e => {
	
	let warnings = ""
	let texto = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
	let numeros = /^\d[0-9\.]{5}$/
	let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/ 
	let entrar = false
	parrafo.innerHTML = ""
	if(nombre.value.lenght < 6 || !texto.test(nombre.value)){
		warnings += `El nombre no es valido <br>`
		entrar = true
	}
	if(!regexEmail.test(email.value)){
		warnings += `El email no es valido <br>`
		entrar = true
	}
	if(!texto.test(estado.value)){
		warnings += `El estado no es valido <br>`
		entrar = true
	}
	if(!texto.test(municipio.value)){
		warnings += `El municipio no es valido <br>`
		entrar = true
	}
	if(!texto.test(colonia.value)){
		warnings += `El colonia no es valido <br>`
		entrar = true
	}
	if(isNaN(postal.value)){
		warnings += `Ingresa un numero de 5 digitos <br>`
		entrar = true
	}
	if(!texto.test(mensaje.value)){
		warnings += `El mensaje no es valido <br>`
		entrar = true
	}
	if(entrar){
		parrafo.innerHTML = warnings
	}else{
		parrafo.innerHTML = "Enviado"
	}
	if(entrar) {
		e.preventDefault()
	}
})