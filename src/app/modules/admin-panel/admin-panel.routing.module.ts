import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [{ path: 'main-info', component: MainInfoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
