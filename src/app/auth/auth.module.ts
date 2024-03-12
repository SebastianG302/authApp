import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AuthLayoutComponent, LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
