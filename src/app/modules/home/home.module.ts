import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeSearchBarComponent } from './components/home-search-bar/home-search-bar.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { TaggedBusinessComponent } from './components/tagged-business/tagged-business.component';
import { PopularBusinessComponent } from './components/popular-business/popular-business.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeViewComponent,
    HomeSearchBarComponent,
    TaggedBusinessComponent,
    PopularBusinessComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [],
  bootstrap: [],
})
export class HomeModule {}
