import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { GeoLocationInfo } from '../models/geo-location';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-geo-location-info',
  templateUrl: './geo-location-info.component.html',
  styleUrls: ['./geo-location-info.component.css'],
})
export class GeoLocationInfoComponent implements OnInit {
  geoLocationInfo = {} as GeoLocationInfo;
  isLoading = false;
  geoLocationInfoForm = new FormGroup({
    ip: new FormControl('', [Validators.required]),
  });
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.isLoading = false;
  }
  onSubmit() {
    this.isLoading = true;
    this.apiService
      .getGeoLocation(this.geoLocationInfoForm.value.ip)
      .subscribe((x) => {
        this.geoLocationInfo = x;
        this.isLoading = false;
      });
  }
}
