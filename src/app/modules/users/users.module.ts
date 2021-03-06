import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { UsersRoutingModule } from './users.routing.module';
import { DataSharingService } from '../../core/services/data-sharing.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [],
})
export class UsersModule {}
