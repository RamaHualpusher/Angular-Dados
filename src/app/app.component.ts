import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dados';
  dadoL = "../assets/img/dice1.png";
  dadoR = "../assets/img/dice5.png";
  num1:number;
  num2:number;
  resultado:string;
  ganaste:boolean=false;
  contador:number=0;

  tirarDados():void{
    this.contador++;
    this.num1 = Math.floor(Math.random() * 6) + 1;
    this.num2 = Math.floor(Math.random() * 6) + 1;
    this.dadoL = "../assets/img/dice" + this.num1 + ".png";
    this.dadoR = "../assets/img/dice" + this.num2 + ".png";
    if(this.validarDados()){
      this.resultado = (this.contador===1)?"Ganaste en 1 intento":"Ganaste en "+this.contador+" intentos"; 
      this.ganaste = true;
      //SetTimeout para que se vea el mensaje de ganaste antes de que se reinicie el juego
      setTimeout(() => {
        this.reiniciar();
      }, 2000);
    }
  }
  validarDados():boolean{
    if(this.num1 == this.num2){
      return true;
    }
    return false;
  }
  reiniciar():void{
    this.dadoL = "../assets/img/dice1.png";
    this.dadoR = "../assets/img/dice5.png";
    this.contador = 0;
    this.ganaste = false;
    this.resultado = "";
  }
}
