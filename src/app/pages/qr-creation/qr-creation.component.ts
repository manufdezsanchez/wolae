import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-qr-creation',
  templateUrl: './qr-creation.component.html',
  styleUrls: ['./qr-creation.component.scss'],
})
export class QrCreationComponent implements OnInit {

  @ViewChild('stepper') private myStepper: MatStepper;

  constructor() { }



  ngOnInit() {}

  formValues(form: FormGroup) {
   if (form) {
        this.myStepper.next();
      }
  }

}
