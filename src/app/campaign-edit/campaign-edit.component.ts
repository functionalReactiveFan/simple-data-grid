import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
              private location: Location,
              private campaignsService: CampaignsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCampaignById(id);
    this.form = new FormGroup({
      'camp_cpc': new FormControl(null, Validators.required),
      'datetime': new FormGroup({
        'date': new FormControl(null, Validators.required),
        'time': new FormControl(null, Validators.required),
      },
        [this.validateDateTime]),
      'freeclick': new FormControl(false),
      'networks': new FormControl('a'),
      'PlistaProduct': new FormControl(null, Validators.required)
    });
  }

  getCampaignById(id: number) {
    this.campaignsService.getCampaignsById(id).subscribe(campaign => this.campaignData = campaign);
  }

  onSubmit() {
    if (!this.form.invalid) {
      this.location.back();
    }
  }

  validateDateTime(control: FormControl): {[key: string]: boolean} {
    const dateControl = control.get('date');
    const timeControl = control.get('time');

      if ((dateControl.invalid && dateControl.errors['required']) || (timeControl.invalid && timeControl.errors['required'])) {
        return {'dateTimeRequired': true};
      } else {
        const d = new Date(dateControl.value);
        const hours = parseInt(timeControl.value.split(':')[0], 10);
        const minutes = parseInt(timeControl.value.split(':')[1], 10);
        d.setHours(hours);
        d.setMinutes(minutes);

        if (d.getTime() > new Date().getTime()) {
          dateControl.setErrors({'dateTimeInvalid': true});
          timeControl.setErrors({'dateTimeInvalid': true});

          return {'dateTimeInvalid': true};
        } else {
          dateControl.setErrors(null);
          timeControl.setErrors(null);
        }
      }

    return null;
  }
}
