import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { BusinessRatingComponent } from './components/business-rating/business-rating.component';
import { DataSharingService } from '../core/services/data-sharing.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    BusinessCardComponent,
    BusinessRatingComponent,
  ],
  exports: [HeaderComponent, BusinessCardComponent, BusinessRatingComponent],
  providers: [],
})
export class SharedModule {}
