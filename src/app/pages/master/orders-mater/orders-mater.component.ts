import {Component, OnInit} from '@angular/core';
import {MasterCallModel} from '../../../../models/orders/masterCall.model';
import {KeyCarModel} from '../../../../models/orders/keyCar.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MasterService} from '../../../../services/master.service';
import {ClientService} from '../../../../services/client.service';

@Component({
  selector: 'app-orders-mater',
  templateUrl: './orders-mater.component.html',
  styleUrls: ['./orders-mater.component.css']
})
export class OrdersMaterComponent implements OnInit {

  masterCalls: MasterCallModel[];
  keyCars: KeyCarModel[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private masterService: MasterService,
    private clientService: ClientService
  ) {
  }

  ngOnInit(): void {
    this.masterService.workId = '';
    this.masterService.fillOrders('').subscribe(data => {
      this.masterCalls = data.masterCalls;
      this.keyCars = data.keyCar;
    }, () => {
    });
  }

  createReport(callId) {
    this.masterService.workId = callId;
    return this.router.navigate(['/createReport']);
  }

  closeCall(callId) {
    this.masterService.closeCall(callId).subscribe(data => {
    }, () => {
    });
  }

  addOffer(keyId) {
    this.masterService.workId = keyId;
    return this.router.navigate(['/createOffer']);
  }

  checkOffers(keyId) {
    this.clientService.workId = keyId;
    return this.router.navigate(['/checkOffer']);
  }

  closeKeyCar(keyId) {
    this.masterService.closeKey(keyId).subscribe(data => {
    }, () => {
    });
  }

  back() {
    return this.router.navigate(['/mainMaster']);
  }
}
