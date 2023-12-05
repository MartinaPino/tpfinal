class Principal{
constructor(){
 this.estado = "inicio";
 this.objJuego = new PrincipalJuego();
 this.fondo = [];
 this.fondoHistoria = [];
 this.carga();
 
 
}
 dibujar() {
    if (this.estado == "inicio") {
      this.inicio();
    } else if (this.estado == "creditos") {
      this.creditos();
    } else if (this.estado == "pantalla1") { 
      this.pantalla1();
    } else if (this.estado == "pantalla2") {
      this.pantalla2();
    } else if (this.estado == "pantalla3") {
      this.pantalla3();
    }else if (this.estado == "pantalla4") {
      this.pantalla4();
    }else if (this.estado == "prejuego") {
        this.prejuego();
    }else if (this.estado == "juego1") {
      this.juego1();
    } else if (this.estado == "juego2") {
      this.juego2();
    } else if (this.estado == "juego3") {
      this.juego3();
    } else if (this.estado == "ganastejuego") {
      this.pantallaBuena();
    } else if (this.estado == "perdistejuego") {
      this.pantallaMala();
    } else if (this.estado == "pantalla5") {
        this.pantalla5();
    }else if (this.estado == "pantalla6") {
        this.pantalla6();
    }else if (this.estado == "opcionA") {
        this.opcionA();
    } else if (this.estado == "opcionB") {
        this.opcionB();
    } else if (this.estado == "fin2") {
        this.fin2();
    }else if (this.estado == "pantalla7") {
        this.pantalla7();
    }else if (this.estado == "fin1") {
        this.fin1();
 }
 }
  
    inicio() {
   push();
    background(0);
    image(this.fondoHistoria[0], 0, 0, 500, 400);
    fill(255);
    textAlign(CENTER);
    text("inicio", 280, 230 );
    text("toca control para ir a los creditos", 350, 100 );
     text("toca enter para continuar", 350, 300 );
    pop();
  }
   creditos(){
    push();
     background(0);
     image(this.fondoHistoria[1], 0, 0, 500, 400);
   fill(255);
    text("creditos", 280, 170 );
      text("toca control para volver", 350, 300 );
    pop();
    pop();
   }
   
   pantalla1(){
    push();
     background(0);
     image(this.fondoHistoria[2], 0, 0, 500, 400);
     textAlign(CENTER);
   fill(255);
    text("pantalla1", 280, 170 );
      text("toca enter para continuar", 350, 300 );
     pop();
   }
   
   pantalla2(){
   push();
     background(0);
     image(this.fondoHistoria[3], 0, 0, 500, 400);
   fill(255);
    text("pantalla2", 280, 170 );
     text("toca enter para continuar", 350, 300 );
    pop();
   
   }
   
   pantalla3(){
   push();
     background(0);
     image(this.fondoHistoria[4], 0, 0, 500, 400);
     textAlign(CENTER);
   fill(255);
    text("pantalla3", 280, 170 );
      text("toca shift para la opcionA", 100, 300 );
      text("toca control para la opcionB", 350, 300 );
      pop();
  }
  
  pantalla4(){
   push();
     background(0);
     image(this.fondoHistoria[5], 0, 0, 500, 400);
     textAlign(CENTER);
   fill(255);
    text("pantalla4", 280, 170 );
       text("toca enter para continuar", 350, 300 );
    pop();
  
  }
  prejuego(){
   push();
     background(0);
     image(this.fondoHistoria[10], 0, 0, 500, 400);
     textAlign(CENTER);
   fill(255);
    text("prejuego", 280, 170 );
    text("toca enter para continuar", 350, 300 );
    pop();
  }
  pantalla5(){ //sacar esta
  push();
     background(0);
     textAlign(CENTER);
   fill(255);
    text("pantalla5", 280, 170 );
    text("toca enter para continuar", 350, 300 );
    pop();
  
  }
  
  pantalla6(){
  push();
     background(0);
     image(this.fondoHistoria[6], 0, 0, 500, 400);
     textAlign(CENTER);
   fill(255);
    text("pantalla6", 280, 170 );
    text("toca shift para la opcionA", 100, 300 );
      text("toca control para la opcionB", 350, 300 );
    pop();
  
  
  }
  opcionA(){
     push();
     background(0);
     image(this.fondoHistoria[7], 0, 0, 500, 400);
     textAlign(CENTER);
   fill(255);
    text("opcionA", 280, 170 );
     text("toca enter para continuar", 350, 300 );
    pop();
  
  }
  opcionB(){ //sacar esta
     push();
     background(0);
     textAlign(CENTER);
   fill(255);
    text("opcionB", 280, 170 );
     text("toca enter para continuar", 350, 300 );
    pop();
 }
  fin2(){
     push();
     background(0);
     image(this.fondoHistoria[9], 0, 0, 500, 400);
     textAlign(CENTER);
   fill(255);
    text("fin2", 280, 170 );
     text("toca enter para volver al inicio", 350, 300 );
    pop();
  }
  pantalla7(){ //sacar esta
     push();
     background(0);
     textAlign(CENTER);
   fill(255);
    text("pantalla7", 280, 170 );
     text("toca enter para continuar", 350, 300 );
    pop();
  }
  fin1(){
     push();
     background(0);
     image(this.fondoHistoria[8], 0, 0, 500, 400);
     textAlign(CENTER);
   fill(255);
    text("fin1", 280, 170 );
     text("toca enter para volver al inicio", 350, 300 );
    pop();
  }
  
    juego1() {
    background(0);
    image(this.fondo[3], 0, 0, 550, 400);
    push();
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text("EL SONIDO DE UN TRUENO\n ray bradbury ", 280, 170 );
    pop();
    fill(255);
    textAlign(CENTER);
    text("Somos un cazador que viajo al pasado para matar a un tyrannosaurus rex\n, pero la cosa se salio de control\n y debemos volver a la maquina del tiempo antes que\n vuelva al futuro", 280, 230 );
  }
  juego2() { // estado 1
    //push();
    background(0);
    image(this.fondo[4], 0, 0, 500, 400);
    push();
    textAlign(CENTER);
    textSize(20);
    fill(5, 5, 5);
    text("OBJETIVO", 250, 200);
    text("OBJETIVO", 250, 202);
    pop();
    push();
    fill(5, 5, 5);
    textSize(15);
    text("debemos esquivar las piedras volcanicas,CUIDADO!!!\n si una de estas nos toca perderemos. Debemos llegar a la\n nave en un periodo de 20 segundos ", 250, 220);
    text("debemos esquivar las piedras volcanicas,CUIDADO!!!\n si una de estas nos toca perderemos. Debemos llegar a la\n nave en un periodo de 20 segundos ", 250, 221);
    pop();
    //pop();
  }

  juego3() {
    image(this.fondo[0], 0, -100, 500, 530);
    this.objJuego.tocado();
    this.objJuego.timer++;
    if (this.objJuego.timer >= 60) {
      this.objJuego.timerSeg++;
      this.objJuego.timer = 0;
    }
    text("tiempo: "+this.objJuego.timerSeg, 25, 10);

    this.objJuego.personaje.dibujar();
    for (let i=0; i<5; i++) {
      this.objJuego.enemi[i].dibujarEnemigo();
    }
    this.objJuego.tocado();
    if (this.objJuego.tocaron == 1) {
      this.estado = "perdistejuego";
    }

    if (this.objJuego.timerSeg==20) {
      this.estado = "ganastejuego";
    }
  }

  pantallaBuena() { // estado 3
    push();
    background(0);
    image(this.fondo[2], 0, 0, 500, 400);
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("ganaste", 250, 200);
    text("presione Enter", 250, 230);
    pop();
    this.objJuego.reinicio();
  }
  pantallaMala() { // estado 4
    push();
    background(0);
    image(this.fondo[4], 0, 0, 500, 400);
    fill(5, 5, 5);
    textAlign(CENTER);
    textSize(20);
    text("perdiste", 250, 200);
    text("presione Enter", 250, 230);
    pop();
    this.objJuego.reinicio();
  }
  

    teclaPresionada(keyCode) {
      this.objJuego.personaje.teclaPresionada(keyCode);
    
      if (keyCode == ENTER && this.estado == "inicio") {
        this.estado = "pantalla1";
      }else if (keyCode == CONTROL && this.estado == "inicio") {
        this.estado = "creditos";
      }else if (keyCode == CONTROL && this.estado == "creditos") {
        this.estado = "inicio";
      } else if (keyCode == ENTER && this.estado == "pantalla1") {
        this.estado = "pantalla2";
      } else if (keyCode == ENTER && this.estado == "pantalla2") {
        this.estado = "pantalla3";
      } else if (keyCode == SHIFT && this.estado == "pantalla3") {
        this.estado = "pantalla4";
      }else if (keyCode == CONTROL && this.estado == "pantalla3") {
        this.estado = "prejuego";
      }else if (keyCode == ENTER && this.estado == "pantalla4") {
        this.estado = "pantalla5";
      }else if (keyCode == ENTER  && this.estado == "pantalla5") {
        this.estado = "pantalla6";
      }else if (keyCode == SHIFT && this.estado == "pantalla6") {
        this.estado = "opcionA";
      }else if (keyCode == CONTROL && this.estado == "pantalla6") {
        this.estado = "opcionB";
      }else if (keyCode == ENTER && this.estado == "opcionB") {
        this.estado = "fin2";
      }else if (keyCode == ENTER && this.estado == "fin2") {
        this.estado = "inicio";
      }else if (keyCode == ENTER && this.estado == "opcionA") {
        this.estado = "pantalla7";
      }else if (keyCode == ENTER && this.estado == "pantalla7") {
        this.estado = "fin1";
      }else if (keyCode == ENTER && this.estado == "fin1") {
        this.estado = "inicio";
      }else if(keyCode == ENTER && this.estado == "prejuego"){
        this.estado = "juego1"
      } else if (keyCode == ENTER && this.estado == "juego1") {
        this.estado = "juego2";
      } else if (keyCode == ENTER && this.estado == "juego2") {
        this.estado = "juego3";
      } else if (keyCode == ENTER && this.estado == "ganastejuego") {
        this.estado = "inicio";
      } else if (keyCode == ENTER && this.estado == "perdistejuego") {
       this.estado = "inicio";
      }
    
    }
    
    carga() {
    for (let i=0; i<5; i++) {
      this.fondo.push(loadImage('data/fondo' +i+ '.png'));
    }
    for (let i=0; i<11; i++) {
      this.fondoHistoria.push(loadImage('data/fondoHistoria' +i+ '.jpeg'));
    }
  
   
    }
}


    
