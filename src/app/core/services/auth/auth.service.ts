import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { AccessToken } from '../../models/access-token.model';
import { LoginCredentials } from '../../models/login-credentials.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(loginCredentials: LoginCredentials): Observable<AccessToken> {
    return this.http.post<AccessToken>(
      `${environment.api}/authentication/login`,
      loginCredentials
    );
  }
}
