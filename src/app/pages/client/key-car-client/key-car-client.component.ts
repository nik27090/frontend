import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../../services/authentication.service';
import {ClientService} from '../../../../services/client.service';

@Component({
  selector: 'app-key-car-client',
  templateUrl: './key-car-client.component.html',
  styleUrls: ['./key-car-client.component.css']
})
export class KeyCarClientComponent implements OnInit {

  desc: string;

  isLoggedIn = false;
  sendSuccess = false;
  invalidSend = false;
  successMessage = 'Sent';
  invalidMessage = 'dont sent';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private clientService: ClientService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
  }

  send() {
    this.clientService.createKeyCar(this.desc).subscribe(data => {
      this.sendSuccess = true;
      this.invalidSend = false;
    }, () => {
      this.sendSuccess = false;
      this.invalidSend = true;
    });
  }

  back() {
    return this.router.navigate(['/mainClient']);
  }

}
