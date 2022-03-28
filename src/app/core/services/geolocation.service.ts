import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  apiKey = environment.API_KEY_GOOGLE;
  constructor(private http: HttpClient) {}

  getDetails(placeId: string) {
    return this.http.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${this.apiKey}`
    );
  }
}
