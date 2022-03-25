import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-panel.routing.module';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { MenuAdminPanelComponent } from './components/menu-admin-panel/menu-admin-panel.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    MainInfoComponent,
    MenuAdminPanelComponent,
  ],
  imports: [CommonModule, AdminPanelRoutingModule, SharedModule],
  providers: [],
  bootstrap: [],
})
export class AdminPanelModule {}
