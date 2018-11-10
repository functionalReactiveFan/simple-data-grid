import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignsService } from '../campaigns.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.scss']
})
export class CampaignEditComponent implements OnInit {
  campaignData: any;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private campaignsService: CampaignsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCampaignById(id);
    this.form = new FormGroup({
      'camp_cpc': new FormControl(null),
      'date': new FormControl(null),
      'freeclick': new FormControl(null),
      'network': new FormControl(null),
      'PlistaProduct': new FormControl(null)
    });
  }

  getCampaignById(id: number) {
    this.campaignsService.getCampaignsById(id).subscribe(campaign => this.campaignData = campaign);
  }

  onSubmit() {

  }
}
