import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

//formulario para agregar un nuevo caracter
@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output()
  onNewCharacter:EventEmitter<Character>=new EventEmitter();

  character1:Character={
    nombre:'',
    poder:0
  }

  saveCharacter():void{
    if(this.character1.nombre.length === 0) return;
    this.onNewCharacter.emit(this.character1);
    this.character1={nombre:'',poder:0};
  }


}
