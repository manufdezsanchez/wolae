import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCrUpFormComponent } from './qr-cr-up-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [QrCrUpFormComponent],
  exports: [QrCrUpFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class QrCrUpFormModule { }
