import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['edit', 'id', 'campaignid', 'userid', 'camp_cpc', 'date', 'frienddomainid', 'freeclick', 'network', 'PlistaProduct'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCampaigns();
    this.dataSource.paginator = this.paginator;
  }

  getCampaigns(): void {
    this.dataService.getData()
      .subscribe(campaigns => this.dataSource.data = campaigns);
  }

}
