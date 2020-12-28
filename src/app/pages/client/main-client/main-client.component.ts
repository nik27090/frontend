import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../../services/authentication.service';

@Component({
  selector: 'app-main-client',
  templateUrl: './main-client.component.html',
  styleUrls: ['./main-client.component.css']
})
export class MainClientComponent implements OnInit {

  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
  }

  masterCall() {
    return this.router.navigate(['/masterCallClient']);
  }

  clientKeyCar() {
    return this.router.navigate(['/keyCarClient']);
  }

  clientOrders() {
    return this.router.navigate(['/ordersClient']);
  }
}
