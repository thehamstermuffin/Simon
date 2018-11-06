let on=false;
let strict=false;
let turnoJugador=false;
let serie=[];
let serieJugador=[];
let nivel=1;
let ganar;
let sonido=true;
let cuenta=0;

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
  //  limpiarSerie();
  }
});



//Boton de modo estricto
BOTON_STRICT.addEventListener('click',(event) => {
  strict = (BOTON_ON.checked == true);
});

//Boton de inicio
BOTON_EMPEZAR.addEventListener('click',(event) => {
  if(on){
    comenzarJuego();
  }

});
//al hacer click en los colores
ARRIBA_IZQ.addEventListener("click", (event)=>{
  if(turnoJugador && on){
    iluminar(0);
    cuenta++;
    if(cuenta>=serie.length){
      turnoPC();
    }

  }
});



function limpiarColor(){
  ARRIBA_IZQ.style.background="darkgreen";
  ARRIBA_DER.style.background="darkred";
  ABAJO_IZQ.style.background="DarkGoldenRod";
  ABAJO_DER.style.background="darkblue";
}
/*
function limpiarSerie(){
  return [];
}*/
//restaurar valores
function reiniciar(){
  //Reiniciar Variables
  nivel=1;
  CONT_NIVEL.innerHTML="1";
  limpiarColor();
  serie=[];
  serieJugador=[];
  cuenta=0;

}
//iluminar y hacer sonido correspondiente
function iluminar(pos){
  switch (pos) {
    case 0:ARRIBA_IZQ.style.background="lightgreen";
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
  setTimeout(()=>{
    limpiarColor()
  },500);
}

function comenzarJuego(){
  reiniciar();

  turnoPC();
  //serie.push(sig+1);//
}

function turnoPC(){
  cuenta=0;
  //elegir siguiente color
  let sig=Math.floor(Math.random()*4);
  serie.push(sig);
  CONT_NIVEL.innerHTML=serie.length;//actualizar nivel
  //mostrar serie
  console.log(serie);

  let inter = setInterval(() =>{
    iluminar(serie[cuenta]);
    //setTimeout(()=>{limpiarColor();}, 800);

    cuenta++;
    if(cuenta >=serie.length){
      clearInterval(inter);
    }
  },1000);

  //cambiar turno a jugador y reiniciar cuenta
  turnoJugador=true;
}
//que pasa al perder
function perder(){

}
