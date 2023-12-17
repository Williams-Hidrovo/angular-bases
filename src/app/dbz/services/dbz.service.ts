import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public personajes:Character[]=[
    {
      id:uuid(),
    nombre:'goku',
    poder:15000,},
    {
      id:uuid(),
    nombre:'Vegeta',
    poder:10000,},
    {
      id:uuid(),
    nombre:'krilin',
    poder:1600,},
  ];

  onNewCharacter(character:Character):void{
    const newCharacter:Character={...character,id:uuid()};
    this.personajes.unshift(newCharacter);
    console.log(character);
  }

  onDeleteId(id:string){
    this.personajes=this.personajes.filter(x => x.id !== id);

  }

}
