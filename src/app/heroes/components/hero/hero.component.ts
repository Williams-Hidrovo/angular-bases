import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nombre:string='Spiderman';
  public edad:number=25;


  public get getCapitalizado() : string {
    return 'hola mundo';
  }

  getHeroDescription():string{
    return this.nombre + ' ' + this.edad
  }

  changeHero():void{
    this.nombre='Batman';
  }
  changeAge():void{
    this.edad=35;
  }

  reset():void{
    this.nombre='Spiderman';
    this.edad=25;
  }


}
