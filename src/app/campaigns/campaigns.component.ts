import { Component, OnInit, ViewChild } from '@angular/core';
import { CampaignsService } from '../campaigns.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Campaign>();
  displayedColumns: string[] = ['edit', 'id', 'campaignid', 'userid', 'camp_cpc', 'date', 'frienddomainid', 'freeclick', 'network', 'PlistaProduct'];

  constructor(private campaignsService: CampaignsService) { }

  ngOnInit() {
    this.getCampaigns();
    this.dataSource.paginator = this.paginator;
  }

  getCampaigns(): void {
    this.campaignsService.getCampaigns()
      .subscribe(campaigns => this.dataSource.data = campaigns);
  }

}
