import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'eat-together-menu-admin-panel',
  templateUrl: './menu-admin-panel.component.html',
  styleUrls: ['./menu-admin-panel.component.scss'],
})
export class MenuAdminPanelComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  navigateToAdminPanel() {
    this._router.navigateByUrl('admin-panel/main-info');
  }
}
