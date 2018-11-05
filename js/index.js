let on=false;
let strict=false;
let serie=[];
let serieJugador=[];
let nivel=1;
let ganar;
let sonido=true;

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
  ARRIBA_IZQ.style.background="darkgreen";
  ARRIBA_DER.style.background="darkred";
  ABAJO_IZQ.style.background="DarkGoldenRod";
  ABAJO_DER.style.background="darkblue";
}

function limpiarSerie(){
  return [];
}

function reiniciar(){
  //Reiniciar Variables
  nivel=1;
  CONT_NIVEL.innerHTML("1");
  limpiarColor();
  serie=[];
  serieJugador=[];

}

function iluminar(pos){
  switch (pos) {
    case 0:ARRIBA_IZQ.style.background="green";
      if(sonido){
        let audio=document.getElementById("clip0");
        audio.play();
      };
      break;
    case 1:ARRIBA_DER.style.background="red";
      if(sonido){
        let audio=document.getElementById("clip1");
        audio.play();
      };
        break;
    case 3:ABAJO_IZQ.style.background="yellow";
      if(sonido){
        let audio=document.getElementById("clip3");
        audio.play();
      };
        break;
    case 2:ABAJO_DER.style.background="blue";
      if(sonido){
        let audio=document.getElementById("clip2");
        audio.play();
      };
        break;
    default:

  }
}

function jugar(){
  reiniciar();

  let sig=Math.floor(Math.random()*4);
  serie.push(sig);
  serie.push(sig+1);

  for(let i=0; i<serie.length; i++){
    iluminar(serie[i]);//
  }
}
