import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {OrdersModel} from '../models/orders/orders.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  public workId: string;

  fillNewOrders(desc) {
    return this.http.get<OrdersModel>(
      `http://localhost:8080/api/v1/master/newOrders`,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  fillOrders(desc) {
    return this.http.get<OrdersModel>(
      `http://localhost:8080/api/v1/master/orders`,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  sendReport(report, idCall) {
    return this.http.post(
      `http://localhost:8080/api/v1/master/report/` + idCall,
      report,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  sendOffer(offer, idKey) {
    return this.http.post(
      `http://localhost:8080/api/v1/master/addOffer/` + idKey,
      offer,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  closeKey(idKey) {
    return this.http.get(
      `http://localhost:8080/api/v1/master/closeKeyCar/` + idKey,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  closeCall(idCall) {
    return this.http.get(
      `http://localhost:8080/api/v1/master/closeCall/` + idCall,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  okCall(callId) {
    return this.http.get(
      `http://localhost:8080/api/v1/master/masterCall/` + callId + `/ok`,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  cancelCall(callId) {
    return this.http.get(
      `http://localhost:8080/api/v1/master/masterCall/` + callId + `/cancel`,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  okKey(keyId) {
    return this.http.get(
      `http://localhost:8080/api/v1/master/keyCar/` + keyId + `/ok`,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  cancelKey(keyId) {
    return this.http.get(
      `http://localhost:8080/api/v1/master/keyCar/` + keyId + `/cancel`,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }
}
