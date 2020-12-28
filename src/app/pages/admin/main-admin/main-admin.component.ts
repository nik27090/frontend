import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MasterCallModel} from '../../../../models/orders/masterCall.model';
import {KeyCarModel} from '../../../../models/orders/keyCar.model';
import {AdminService} from '../../../../services/admin.service';
import {MasterModel} from '../../../../models/roles/master.model';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {

  setMaster = false;
  setCall = false;
  setKey = false;
  masterCalls: MasterCallModel[];
  keyCars: KeyCarModel[];
  masters: MasterModel[];

  callId: string;

  invalidSetMaster = false;
  invalidMessage = 'dont set master';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.adminService.fillMainPage('').subscribe(data => {
      console.log(data);
      this.keyCars = data.keyCar;
      this.masterCalls = data.masterCalls;
    }, () => {
    });
  }

  getMastersCall(callId) {
    this.setMaster = true;
    this.callId = callId;
    this.setCall = true;
    this.adminService.getMastersForCall(callId).subscribe(data => {
      this.masters = data.master;
      console.log(this.masters);
    }, () => {
    });
  }

  setMasterCall(masterId) {
    this.setMaster = false;
    this.setCall = false;
    console.log('masteriD' + masterId);
    this.adminService.setMasterForCall(this.callId, masterId).subscribe(data => {
      return this.router.navigate(['/mainAdmin']);
    }, () => {
      this.invalidSetMaster = true;
    });
  }

  getMastersKeyCar(callId) {
    this.setMaster = true;
    this.setKey = true;
    this.callId = callId;
    this.adminService.getMastersForKeyCar(callId).subscribe(data => {
      this.masters = data.master;
      console.log(this.masters);
    }, () => {
    });
  }

  setMasterKeyCar(masterId) {
    this.setMaster = false;
    this.setKey = false;
    console.log('masteriD' + masterId);
    this.adminService.setMasterForKeyCar(this.callId, masterId).subscribe(data => {
      return this.router.navigate(['/mainAdmin']);
    }, () => {
      this.invalidSetMaster = true;
    });
  }

  registerMaster() {
    return this.router.navigate(['/registerMaster']);
  }

  back() {
    this.setMaster = false;
    this.setKey = false;
    return this.router.navigate(['/mainAdmin']);
  }
}
