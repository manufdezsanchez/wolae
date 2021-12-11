import { Component, OnInit } from '@angular/core';
import { AccessToken } from 'src/app/core/models/access-token.model';
import { LoginCredentials } from 'src/app/core/models/login-credentials.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  loginCredentials(loginCredentials: LoginCredentials) {
    this.auth.login(loginCredentials).subscribe((response: AccessToken) => {
      console.log(response);
    });
  }
}
