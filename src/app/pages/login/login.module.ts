import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormModule } from 'src/app/shared/forms/login-form/login-form.module';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { AuthModule } from 'src/app/core/services/auth/auth.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthModule, LoginPageRoutingModule, LoginFormModule],
})
export class LoginModule {}
