import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main-master',
  templateUrl: './main-master.component.html',
  styleUrls: ['./main-master.component.css']
})
export class MainMasterComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  newOrders() {
    return this.router.navigate(['/newOrders']);
  }

  orders() {
    return this.router.navigate(['/ordersMaster']);
  }

}
