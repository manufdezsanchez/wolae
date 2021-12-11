import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qr-cr-up-form',
  templateUrl: './qr-cr-up-form.component.html',
  styleUrls: ['./qr-cr-up-form.component.scss'],
})
export class QrCrUpFormComponent implements OnInit {
  @Output() formValueEmitter: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  public qrForm: FormGroup;

  defaultDate = new Date();

  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.qrForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      startHour: ['', [Validators.required]],
      expires: ['', [Validators.required]],
      expiresHour: ['', [Validators.required]],
      uses: ['', [Validators.required]],
    });
  }

  getHour(e, name: string) {
    const date = new Date(e.target.value).toISOString();
    this.qrForm.get(`${name}`).setValue(date, {
      onlyself: true,
    });
  }

  getDate(e, name: string) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.qrForm.get(`${name}`).setValue(date, {
      onlyself: true,
    });
  }

  getType(event) {
    this.qrForm.get('type').setValue(event.detail.value, {
      onlyself: true,
    });
  }

  get errorControl() {
    return this.qrForm.controls;
  }

  submitForm() {
    this.formValueEmitter.emit(this.qrForm);
    this.isSubmitted = true;
    if (!this.qrForm.valid) {
      return false;
    } else {
      this.formValueEmitter.emit(this.qrForm);
    }
  }
}
