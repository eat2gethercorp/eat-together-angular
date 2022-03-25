import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { UsersRoutingModule } from './users.routing.module';
import { DataSharingService } from '../../core/services/data-sharing.service';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, UsersRoutingModule],
  providers: [],
  bootstrap: [],
})
export class UsersModule {}
