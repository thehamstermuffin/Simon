let on=false;
let strict=false;
let serie=[];
let serieJugador=[];
let nivel;

//Botones e interfaz
const BOTON_ON =document.querySelector("#on");
const BOTON_STRICT=document.querySelector("#strict");
const BOTON_EMPEZAR = document.querySelector("#boton-empezar");
const CONT_NIVEL = document.querySelector("#nivel");

//Colores
const ARRIBA_IZQ = document.querySelector("#arriba-izq");
const ARRIBA_DER = document.querySelector("#arriba-der");
const ABAJO_IZQ = document.querySelector("#abajo-izq");
const ABAJO_DER = document.querySelector("#abajo-der");


//Boton de encendido
BOTON_ON.addEventListener('click',(event) => {
  on = (BOTON_ON.checked == true);
  if(on){
    CONT_NIVEL.innerHTML="-";
  }
  else{
    CONT_NIVEL.innerHTML="";
    limpiarColor();
    limpiarSerie();
  }
});



//Boton de modo estricto
BOTON_STRICT.addEventListener('click',(event) => {
  strict = (BOTON_ON.checked == true);
});

//Boton de modo estricto
BOTON_EMPEZAR.addEventListener('click',(event) => {
  if(on){
    jugar();
  }

});



function limpiarColor(){

}

function limpiarSerie(){

}

function jugar(){
  //Reiniciar Variables
  serie=[];
  serieJugador[];


  limpiarColor();
  limpiarSerie();


}
