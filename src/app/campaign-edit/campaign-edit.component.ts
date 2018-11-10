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
  maxDate = new Date();
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

  public getMaxTime() {
    const d = new Date();
    const h = this.addZero(d.getHours());
    const m = this.addZero(d.getMinutes());

    return h + ':' + m;
  }

  private addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }
}
