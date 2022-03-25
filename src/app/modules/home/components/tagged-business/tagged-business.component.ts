import { Component, OnInit } from '@angular/core';
import { Business } from '../../../../shared/models/business.interface';
import { taggedBusinessMock } from '../../../../core/mocks/business-mock';

@Component({
  selector: 'eat-together-tagged-business',
  templateUrl: './tagged-business.component.html',
  styleUrls: ['./tagged-business.component.scss'],
})
export class TaggedBusinessComponent implements OnInit {
  taggedBusinessMock: Business[] = taggedBusinessMock;

  constructor() {}

  ngOnInit() {}
}
