import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {OrdersModel} from '../models/orders/orders.model';
import {OffersModel} from '../models/orders/offers.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public workId: string;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  checkOffers(idKey) {
    return this.http.get<OffersModel>(
      `http://localhost:8080/api/v1/keyCar/offers/` + idKey,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  createCall(desc) {
    console.log(desc);
    return this.http.post(
      `http://localhost:8080/api/v1/client/masterCall`,
      {desc},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`
        })
      });
  }

  createKeyCar(desc) {
    console.log(desc);
    return this.http.post(
      `http://localhost:8080/api/v1/client/keyCar`,
      {desc},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`
        })
      }
    );
  }

  getOrders(desc) {
    return this.http.get<OrdersModel>(
      `http://localhost:8080/api/v1/client/orders`,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  setStarsForCall(callId, stars) {
    console.log('stars: ' + stars + ' ' + 'callId: ' + callId);
    return this.http.get(
      `http://localhost:8080/api/v1/client/starsForCall/` + stars + `/` + callId,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  setStarsForKeyCar(callId, stars) {
    console.log('stars: ' + stars + ' ' + 'callId: ' + callId);
    return this.http.get(
      `http://localhost:8080/api/v1/client/starsForKeyCar/` + stars + `/` + callId,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }
}
