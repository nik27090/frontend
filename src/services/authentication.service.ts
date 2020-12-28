import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //BASE_PATH: 'http://localhost:8080/';
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  TOKEN = 'token';
  ROLE = 'role';

  public username: string;
  public password: string;

  constructor(private http: HttpClient) {

  }

  authenticationService(username: string, password: string) {
    return this.http.get(`http://localhost:8080/api/v1/basicauth`,
      {headers: {authorization: this.createBasicAuthToken(username, password)}}).pipe(map((userRole) => {
      console.log(userRole);
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username, this.createBasicAuthToken(username, password), userRole);
    }));
  }

  register(username, password, fullName, phoneNumber, email, cardNumber) {
    return this.http.post(
      `http://localhost:8080/api/v1/client/registration`,
      {username, password, fullName, phoneNumber, email, cardNumber},
      {headers: {authorization: this.createBasicAuthToken('nik27090', '123')}});
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username, token, role) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem(this.TOKEN, token);
    sessionStorage.setItem(this.ROLE, role);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.TOKEN);
    sessionStorage.removeItem(this.ROLE);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return false;
    }
    return true;
  }

  private getAuthUsername() {
    const username = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (username === null) {
      return '';
    }
    return username;
  }

  getUserRole() {
    const role = sessionStorage.getItem(this.ROLE);
    if (role === null) {
      return '';
    }
    return role;
  }

  getUserToken() {
    const token = sessionStorage.getItem(this.TOKEN);
    if (token === null) {
      return '';
    }
    return token;
  }
}
