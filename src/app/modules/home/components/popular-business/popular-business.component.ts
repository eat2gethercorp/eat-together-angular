import { Component, OnInit } from '@angular/core';
import { popularBusinessMock } from 'src/app/core/mocks/business-mock';
import { Business } from 'src/app/shared/models/business.interface';

@Component({
  selector: 'eat-together-popular-business',
  templateUrl: './popular-business.component.html',
  styleUrls: ['./popular-business.component.scss'],
})
export class PopularBusinessComponent implements OnInit {
  popularBusinessMock: Business[] = popularBusinessMock;

  constructor() {}

  ngOnInit() {}
}
