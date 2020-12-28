import {Component, OnInit} from '@angular/core';
import {MasterCallModel} from '../../../../models/orders/masterCall.model';
import {KeyCarModel} from '../../../../models/orders/keyCar.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../../../services/client.service';

@Component({
  selector: 'app-orders-client',
  templateUrl: './orders-client.component.html',
  styleUrls: ['./orders-client.component.css']
})
export class OrdersClientComponent implements OnInit {

  masterCalls: MasterCallModel[];
  keyCars: KeyCarModel[];

  starsForCall: string;
  starsForKeyCar: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService
  ) {
  }

  ngOnInit(): void {
    this.clientService.getOrders('').subscribe(data => {
      console.log(data);
      this.keyCars = data.keyCar;
      this.masterCalls = data.masterCalls;
    }, () => {
    });
  }

  setStarsForCall(callId) {
    this.clientService.setStarsForCall(callId, this.starsForCall).subscribe(data => {
    }, () => {
    });
  }

  setStarsForKeyCar(keyCarId) {
    this.clientService.setStarsForKeyCar(keyCarId, this.starsForCall).subscribe(data => {
    }, () => {
    });
  }

  checkOffers(keyId) {
    this.clientService.workId = keyId;
    return this.router.navigate(['/checkOffer']);
  }

  back() {
    return this.router.navigate(['/mainClient']);
  }
}
