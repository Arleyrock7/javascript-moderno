//ACCEDER A ELEMENTOS DEL DOM
let elemento;
/*--------------------------------------------------------*/
elemento = document;
/*--------------------------------------------------------*/
elemento = document.all;
//OTRAS FORMAS:
elemento = document.all[12];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;

elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src;
elemento = document.images[2].getAttribute('src');

//PARA SABER CUANTOS SCRIPTS TENGO
elemento = document.scripts;


elemento = document.imagenes;


//CONVERTIR HTML COLLECTION EN ARREGLO:

let imag = document.images;
let imagenesArr = Array.from(imag);
//Ordenar imagenes:
imagenesArr.forEach(function(imagen){
  console.log(imagen);
});




console.log(imagenesArr);
