import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eat-together-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
})
export class BusinessCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() imgSrc: string = '';
  @Input() rating: number = 0;

  constructor() {}

  ngOnInit() {}
}
