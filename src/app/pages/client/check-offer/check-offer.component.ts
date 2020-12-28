import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../../../services/client.service';
import {AuthenticationService} from '../../../../services/authentication.service';

@Component({
  selector: 'app-check-offer',
  templateUrl: './check-offer.component.html',
  styleUrls: ['./check-offer.component.css']
})
export class CheckOfferComponent implements OnInit {

  offers: string[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService,
              private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.clientService.checkOffers(this.clientService.workId).subscribe(data => {
      this.offers = data.offers;
    }, () => {
    });
  }

  back() {
    const role = this.authService.getUserRole();
    if (role === 'USER') {
      return this.router.navigate(['/mainClient']);
    } else {
      return this.router.navigate(['/mainMaster']);
    }
  }

}
