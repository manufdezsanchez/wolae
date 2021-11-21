import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrCreationComponent } from './qr-creation.component';

const routes: Routes = [
  {
    path: '',
    component: QrCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCreationPageRoutingModule {}
