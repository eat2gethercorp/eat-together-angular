import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eat-together-business-rating',
  templateUrl: './business-rating.component.html',
  styleUrls: ['./business-rating.component.scss'],
})
export class BusinessRatingComponent implements OnInit {
  @Input() rating: number = 0;

  ratings: string[] = [];

  fullStar: string = 'fa-solid fa-star';
  halfStar: string = 'fa-regular fa-star-half-stroke';
  emptyStar: string = 'fa-regular fa-star';

  starNumbers = 5;

  constructor() {}

  ngOnInit() {
    this.setRatings();
  }

  setRatings() {
    let aux = this.rating + 1;
    aux = aux - 1;
    for (let s = 0; s < 5; s++) {
      if (aux >= 1) {
        this.ratings.push(this.fullStar);
      } else if (aux > 0 && aux < 1) {
        this.ratings.push(this.halfStar);
      } else {
        this.ratings.push(this.emptyStar);
      }
      aux = aux - 1;
    }
  }
}
