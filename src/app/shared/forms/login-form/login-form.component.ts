import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginCredentials } from 'src/app/core/models/login-credentials.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() formValueEmitter: EventEmitter<LoginCredentials> =
    new EventEmitter<LoginCredentials>();

  public loginForm: FormGroup;

  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  public submitForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {
      const email = this.emailField.value;
      const password = this.passField.value;
      this.formValueEmitter.emit(this.setLoginCredentials(email, password));
    }
  }

  private initForm() {
    this.loginForm = this.fb.group({
      mail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      pass: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get emailField() {
    return this.loginForm.get('mail');
  }

  get passField() {
    return this.loginForm.get('pass');
  }

  private setLoginCredentials(
    email: string,
    password: string
  ): LoginCredentials {
    const userCredentials: LoginCredentials = new LoginCredentials();
    userCredentials.email = email;
    userCredentials.password = password;
    return userCredentials;
  }
}
