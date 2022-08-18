const btnDesencriptar = document.querySelector('#desencriptar');
const btnCopiar       = document.querySelector('#btnCopiar');
const btnEncriptar    = document.querySelector('#encriptar');
const formulario      = document.querySelector('.form');
const sectionMensaje  = document.querySelector('.section__p');
const textArea        = document.querySelector('#input');
const sectionHeader   = document.querySelector('.section__header');
const section         = document.querySelector('.section');
const sectionImg         = document.querySelector('.section__img');

let resultadoEncriptado = '';
let resultadoDesencriptado = '';

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded',iniciarApp)
    textArea.addEventListener('input', validarFormulario);
    btnEncriptar.addEventListener('click', mostrarMensajeEncriptado);
    btnDesencriptar.addEventListener('click', mostrarMensajeDesencriptado);
    btnCopiar.addEventListener('click', copiarMensaje);
}

function iniciarApp(){
    btnEncriptar.disabled = true;
    btnEncriptar.classList.add('disabled');
    btnDesencriptar.disabled = true;
    btnDesencriptar.classList.add('disabled');
    btnCopiar.classList.add('display');
}


function validarFormulario(evt) {
    const mensaje = evt.target.value;
    const regex = /[A-Z-á-ü-,]/;

    if(regex.test(mensaje)){
        // crear mensajes de errores
        evt.target.classList.add('error');
        mostrarError('No usar Mayusculas o caracteres especiales')

    } else {
        // Eliminar los errores
        evt.target.classList.remove('error');
        const error = document.querySelector('p.mensaje-error');
        if( error ){
            error.remove();
        }
        btnEncriptar.disabled = false;
        btnDesencriptar.disabled = false;
        btnEncriptar.classList.remove('disabled');
        btnDesencriptar.classList.remove('disabled');
        encriptarMensaje(mensaje);
        desencriptar(mensaje);
    }
}

function mostrarError( texto ){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = texto ;
    mensajeError.classList.add('mensaje-error');

    const errores = document.querySelectorAll('.mensaje-error');
    if( errores.length === 0 ){
        formulario.appendChild(mensajeError);
    }

}

function encriptarMensaje(mensaje){
    
    // Modificación de mensaje
    let nuevoMensaje = mensaje.replace(/e/gm, "enter");
    nuevoMensaje = nuevoMensaje.replace(/o/gm, "ober");
    nuevoMensaje = nuevoMensaje.replace(/i/gm, "imes");
    nuevoMensaje = nuevoMensaje.replace(/a/gm, "ai");
    nuevoMensaje = nuevoMensaje.replace(/u/gm, "ufat");

     return resultadoEncriptado = nuevoMensaje;
}

function desencriptar(mensaje){

    let nuevoMensaje = mensaje.replace(/enter/gm, "e");
    nuevoMensaje = nuevoMensaje.replace(/ober/gm, "o");
    nuevoMensaje = nuevoMensaje.replace(/imes/gm, "i");
    nuevoMensaje = nuevoMensaje.replace(/ai/gm, "a");
    nuevoMensaje = nuevoMensaje.replace(/ufat/gm, "u");

    return resultadoDesencriptado = nuevoMensaje;

}

function mostrarMensajeEncriptado( evt ) {
    evt.preventDefault();

    if( resultadoEncriptado === ' ') {
        return mostrarError('el mensaje no puede estar vacio')
    }

    sectionMensaje.innerHTML= resultadoEncriptado;
    sectionHeader.textContent = '';
    btnCopiar.classList.remove('display');
    sectionImg.classList.add('display');

}

function mostrarMensajeDesencriptado(){

    if( resultadoDesencriptado === ' ') {
        return mostrarError('el mensaje no puede estar vacio')
    }

    sectionMensaje.textContent = resultadoDesencriptado;
    sectionHeader.textContent = '';
    btnCopiar.classList.remove('display');

}

function copiarMensaje(){
    const elementoCopiar = section.children[2].innerHTML;

    navigator.clipboard.writeText(elementoCopiar).then(() => {
            alert("Copiado");
    });
    

}












