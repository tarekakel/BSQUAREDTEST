import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GeoLocationInfo } from './models/geo-location';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Exchange } from './models/exchange';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  Base_Url = environment.API_URL;
  constructor(private http: HttpClient, private socket: Socket) {}

  getGeoLocation(ipAddress: string): Observable<GeoLocationInfo> {
    return this.http.get(`${this.Base_Url}/get-geo-location`, {
      params: { ip: ipAddress },
    });
  }

  sendMessage(msg: string) {
    this.socket.emit('my_response', msg);
  }
  getMessage(): Observable<any> {
    return this.socket.fromEvent('my_response');
  }
}
