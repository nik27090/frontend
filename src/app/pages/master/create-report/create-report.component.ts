import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MasterService} from '../../../../services/master.service';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  report: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private masterService: MasterService
  ) {
  }

  ngOnInit(): void {
  }

  handleReport() {
    this.masterService.sendReport(this.report, this.masterService.workId).subscribe(data => {
      this.masterService.workId = '';
      return this.router.navigate(['/ordersMaster']);
    }, () => {
    });
  }

  back() {
    return this.router.navigate(['/ordersMaster']);
  }
}
