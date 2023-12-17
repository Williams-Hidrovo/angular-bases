import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main-page.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    ListaComponent,
    FormComponent,
  ],
  exports:[
    MainComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
