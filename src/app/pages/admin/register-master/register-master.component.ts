import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../../services/authentication.service';
import {AdminService} from '../../../../services/admin.service';

@Component({
  selector: 'app-register-master',
  templateUrl: './register-master.component.html',
  styleUrls: ['./register-master.component.css']
})
export class RegisterMasterComponent implements OnInit {

  username: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  desc: string;

  invalidRegister = false;
  invalidMessage = 'dont register';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private adminService: AdminService
  ) {
  }

  ngOnInit(): void {
  }

  handleRegister() {
    this.adminService.registerMaster(this.username, this.password, this.fullName, this.phoneNumber, this.email, this.desc).subscribe(
      data => {
      },
      () => {
        this.invalidRegister = true;
      });
  }

  back() {
    return this.router.navigate(['/mainAdmin']);
  }
}
