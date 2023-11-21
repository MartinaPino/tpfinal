//Pratto Priscila, Pino Martina
//tpfinal, comision 1


let p;
let objJuego;

function setup() {
  createCanvas(500,400);
  p = new Principal();
 objJuego = new PrincipalJuego();

}


function draw() {
   background(8, 3, 3);
   if(p.estado !== "juego"){
     p.dibujar();
    }else{
       objJuego.dibujarJuego();   
       if(objJuego.terminoJuego && objJuego.estadoJuego == "ganastejuego" || objJuego.estadoJuego == "perdistejuego"){
         p.estado = "inicio";
       }
    }
   

}

function keyPressed() {
  p.teclaPresionada(keyCode);
  if(p.estado == "juego"){
    objJuego.teclaPresionada(keyCode);
  }
}
