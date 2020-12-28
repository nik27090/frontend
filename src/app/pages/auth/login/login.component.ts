import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  USER = 'USER';
  ADMIN = 'ADMIN';
  MASTER = 'MASTER';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe(result => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      const userRole = this.authenticationService.getUserRole();
      console.log(userRole);
      if (userRole === this.USER) {
        this.router.navigate(['/mainClient']);
      }
      if (userRole === this.ADMIN) {
        this.router.navigate(['/mainAdmin']);
      }
      if (userRole === this.MASTER) {
        this.router.navigate(['/mainMaster']);
      }
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

  createAccount() {
    return this.router.navigate(['/register']);
  }
}
