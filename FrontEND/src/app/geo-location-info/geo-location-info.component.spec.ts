import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocationInfoComponent } from './geo-location-info.component';

describe('GeoLocationInfoComponent', () => {
  let component: GeoLocationInfoComponent;
  let fixture: ComponentFixture<GeoLocationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoLocationInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
