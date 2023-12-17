import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl:'lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {

  @Output()
  onDeleteId:EventEmitter<string>=new EventEmitter();

  @Input()
  public characterList:Character[]=[];

  onDeleteCharacterById(id?:string):void{
    if(!id) return;
    console.log('index emitido')
    this.onDeleteId.emit(id);
  }

}
