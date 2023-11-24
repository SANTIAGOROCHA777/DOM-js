var figura = document.getElementById("figura");
var body = document.querySelector("body");
var titulo = document.getElementById("titulo");
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var section = document.querySelector('section');



function circulo(){
    titulo.innerText = 'Circulo';
    figura.classList.toggle("circulo");
}

function moveTop(){
    titulo.innerText = 'Mover hacia arriba';
    figura.classList.toggle("moveTop");
}

function rectangulo(){
    titulo.innerText = 'Rectangulo';
    figura.classList.toggle("rectangulo");
}

function rombo(){
    titulo.innerText = 'Rombo';
    figura.classList.toggle("rombo");
}

function imagen(){
    titulo.innerText = 'Imagen';
    figura.classList.toggle("imagen");
}

function gif(){
    titulo.innerText = 'GIF';
    figura.classList.toggle("gif");
}
function triangulo(){
    titulo.innerText = 'Triangulo';
    figura.classList.toggle("triangulo");
}


function hoja(){
    titulo.innerText = 'Hoja';
    figura.classList.toggle("hoja");
}
function pacMan(){
    titulo.innerText = 'PacMan';
    figura.classList.toggle("pacMan");
}



function luna(){
    titulo.innerText = 'Luna';
    figura.classList.toggle("luna");
}

function huevo(){
    titulo.innerText = 'Huevo';
    figura.classList.toggle("huevo");
}

function trapecio(){
    titulo.innerText = 'Trapecio';
    figura.classList.toggle("trapecio");
}

function moveLeft(){
    titulo.innerText = 'Mover hacia la izquierda';
    figura.classList.toggle("moveLeft");
}
function moveButtom(){
    titulo.innerText = 'Mover hacia abajo';
    figura.classList.toggle("moveButtom");
}

function moveRight(){
    titulo.innerText = 'Mover hacia la derecha';
    figura.classList.toggle("moveRight");
}
8
function panelLATERAL(){
    titulo.innerText = 'Panel lateral';
    const panel = document.querySelector(".panel-lateral");

    panel.classList.toggle("active");
}

function panelSuperior(){
    titulo.innerText = 'Panel superior';
    const panel = document.querySelector(".panel-superior");

    panel.classList.toggle("active");
}

function imgFondo(){
    titulo.innerText = 'Cambiar imagen de fondo';
    body.classList.toggle('back1');
}

function colorPri(){
    titulo.innerText = 'Cambiar color principal';
    left.classList.toggle('colorPri');
    right.classList.toggle('colorPri');
    section.classList.toggle('colorSection');
}
function ojo(){
    titulo.innerText = 'Ojo';
    figura.classList.toggle("ojo");
}