import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';



@NgModule({
  declarations: [ContactListComponent],
  exports: [ContactListComponent],
  imports: [
    CommonModule
  ]
})
export class ContactListModule { }
