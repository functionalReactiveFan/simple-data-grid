import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignsService } from '../campaigns.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.scss']
})
export class CampaignEditComponent implements OnInit {
  campaignData: any;
  networks = ['a', 'b', 'c'];
  products = ['Product 1', 'Product 2', 'Product n'];
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private campaignsService: CampaignsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCampaignById(id);
    this.form = new FormGroup({
      'camp_cpc': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'freeclick': new FormControl(false),
      'networks': new FormControl('a'),
      'PlistaProduct': new FormControl(null, Validators.required)
    });
  }

  getCampaignById(id: number) {
    this.campaignsService.getCampaignsById(id).subscribe(campaign => this.campaignData = campaign);
  }

  onSubmit() {

  }
}
