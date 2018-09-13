import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MeuFormComponent } from './meu-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MeuFormComponent],
  exports: [
    MeuFormComponent
  ]
})
export class MeuFormModule { }
