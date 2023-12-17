import { Component } from '@angular/core';


@Component({
  selector:'app-counter',
  template: `
  <h1>Contador: {{counter}}</h1>
  <button (click)="Aumentar(1)">Aumentar</button>
  <button (click)= "disminuir(1)">Disminuir</button>
  <button (click)="reset()">Reset</button>

  `,

})
export class CounterComponent{
  public base:number=10;
  public counter:number=this.base;

  Aumentar(valor:number):void{
    this.counter+=valor;
  }

  disminuir(valor:number):void{
    this.counter-=valor;
  }

  reset():void{
    this.counter=this.base;
  }

}
