import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MasterService} from '../../../../services/master.service';
import {MasterCallModel} from '../../../../models/orders/masterCall.model';
import {KeyCarModel} from '../../../../models/orders/keyCar.model';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.css']
})
export class NewOrdersComponent implements OnInit {

  masterCalls: MasterCallModel[];
  keyCars: KeyCarModel[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private masterService: MasterService
  ) {
  }

  ngOnInit(): void {
    this.masterService.fillNewOrders('').subscribe(data => {
      this.masterCalls = data.masterCalls;
      this.keyCars = data.keyCar;
    }, () => {
    });
  }

  okCall(callId) {
    this.masterService.okCall(callId).subscribe(data => {
    }, () => {
    });
  }

  cancelCall(callId) {
    this.masterService.cancelCall(callId).subscribe(data => {
    }, () => {
    });
  }

  okKey(keyId) {
    this.masterService.okKey(keyId).subscribe(data => {
    }, () => {
    });
  }

  cancelKey(keyId) {
    this.masterService.cancelKey(keyId).subscribe(data => {
    }, () => {
    });
  }

  back() {
    return this.router.navigate(['/mainMaster']);
  }
}
