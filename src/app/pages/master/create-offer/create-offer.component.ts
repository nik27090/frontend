import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MasterService} from '../../../../services/master.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {

  offer: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private masterService: MasterService
  ) {
  }

  ngOnInit(): void {
  }

  handleOffer() {
    this.masterService.sendOffer(this.offer, this.masterService.workId).subscribe(data => {
      this.masterService.workId = '';
      return this.router.navigate(['/ordersMaster']);
    }, () => {
    });
  }

  back() {
    return this.router.navigate(['/ordersMaster']);
  }

}
