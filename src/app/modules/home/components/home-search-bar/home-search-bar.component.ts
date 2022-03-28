import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { GeolocationService } from '../../../../core/services/geolocation.service';

@Component({
  selector: 'eat-together-home-search-bar',
  templateUrl: './home-search-bar.component.html',
  styleUrls: ['./home-search-bar.component.scss'],
})
export class HomeSearchBarComponent implements OnInit {
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  options: Options = new Options();
  constructor(public _geoService: GeolocationService) {}

  ngOnInit() {
    this.options.types = [];
    this.options.componentRestrictions = { country: 'ES' };
  }

  handleAddressChange(address: Address) {
    console.log(address);
    this._geoService.getDetails(address.place_id).subscribe((res) => {
      console.log(res);
    });
  }
}
