import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  cardNumber: string;

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
  }

  handleRegister() {
    this.authenticationService.register(this.username, this.password, this.fullName, this.phoneNumber, this.email, this.cardNumber)
      .subscribe(data => {
          this.invalidLogin = false;
          console.log(data);
          this.router.navigate(['/login']);
        },
        () => {
          this.invalidLogin = true;
        });
  }

  back() {
    return this.router.navigate(['/login']);
  }

}
