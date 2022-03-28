import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { BusinessManagerComponent } from './components/business-manager/business-manager.component';
const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      { path: 'main-info', component: MainInfoComponent },
      { path: 'business-manager', component: BusinessManagerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
