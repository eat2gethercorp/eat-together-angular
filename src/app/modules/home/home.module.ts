import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home.routing.module';
import { HomeViewComponent } from './views/home-view/home-view.component';

@NgModule({
  declarations: [HomeViewComponent],
  imports: [HomeRoutingModule],
  providers: [],
  bootstrap: [],
})
export class HomeModule {}
