import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCreationComponent } from './qr-creation.component';
import { QrCreationPageRoutingModule } from './qr-creation-routing.module';
import { QrCrUpFormModule } from 'src/app/shared/forms/qr-cr-up-form/qr-cr-up-form.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ContactListModule } from 'src/app/shared/components/contact-list/contact-list.module';


@NgModule({
  declarations: [QrCreationComponent],
  imports: [
    CommonModule,
    QrCreationPageRoutingModule,
    QrCrUpFormModule,
    MaterialModule,
    ContactListModule
  ]
})
export class QrCreationModule { }
