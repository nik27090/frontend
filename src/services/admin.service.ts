import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {OrdersModel} from '../models/orders/orders.model';
import {MastersModel} from '../models/roles/masters.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  registerMaster(username, password, fullName, phoneNumber, email, desc) {
    return this.http.post(
      `http://localhost:8080/api/v1/admin/masterReg`,
      {username, password, fullName, phoneNumber, email, desc},
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  fillMainPage(desc) {
    return this.http.get<OrdersModel>(
      `http://localhost:8080/api/v1/admin/main`,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  getMastersForCall(callId) {
    return this.http.get<MastersModel>(
      `http://localhost:8080/api/v1/admin/masterCall/` + callId + `/selectMaster`,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  setMasterForCall(callId, masterId) {
    return this.http.post(
      `http://localhost:8080/api/v1/admin/masterCall/` + callId + `/selectMaster`,
      masterId,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  getMastersForKeyCar(callId) {
    return this.http.get<MastersModel>(
      `http://localhost:8080/api/v1/admin/keyCar/` + callId + `/selectMaster`,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

  setMasterForKeyCar(callId, masterId) {
    return this.http.post(
      `http://localhost:8080/api/v1/admin/keyCar/` + callId + `/selectMaster`,
      masterId,
      {headers: {authorization: `Basic ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`}}
    );
  }

}
