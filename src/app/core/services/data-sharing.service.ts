import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  public isUserLoggedIn: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isUserAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}
}
