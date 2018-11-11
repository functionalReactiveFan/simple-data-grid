import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CampaignsService } from '../campaigns.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.scss']
})
export class CampaignEditComponent implements OnInit {
  campaignData: any;
  network = ['a', 'b', 'c'];
  products = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6', 'Product 7', 'Product 8', 'Product 9'];
  maxDate = new Date();
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private campaignsService: CampaignsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCampaignById(id);
  }

  getCampaignById(id: number) {
    this.campaignsService.getCampaignsById(id).subscribe(campaign => {
      this.campaignData = campaign;
      const d = new Date(this.campaignData.date);
      const date = d.getFullYear() + '-' + this.addZero(d.getMonth() + 1) + '-' + this.addZero(d.getDate());
      const time = this.addZero(d.getHours()) + ':' + this.addZero(d.getMinutes());
      this.form = new FormGroup({
        'camp_cpc': new FormControl(this.campaignData.camp_cpc, Validators.required),
        'datetime': new FormGroup({
            'date': new FormControl(date, Validators.required),
            'time': new FormControl(time, Validators.required),
          },
          [this.validateDateTime]),
        'freeclick': new FormControl(this.campaignData.freeclick),
        'network': new FormControl(this.campaignData.network),
        'PlistaProduct': new FormControl(this.campaignData.PlistaProduct, Validators.required)
      });
    });
  }

  dateChanged(type: string, event: MatDatepickerInputEvent<Date>) {
    const d = new Date(event.value);
    const date = d.getFullYear() + '-' + this.addZero(d.getMonth() + 1) + '-' + this.addZero(d.getDate());
    this.form.patchValue({
      'datetime': {
        'date': date
      }
    });
  }

  onSubmit() {
    if (!this.form.invalid) {
     const hours = this.form.value.datetime.time.split(':')[0];
     const minutes = this.form.value.datetime.time.split(':')[1];
     const timeString = hours + ':' + minutes + ':00';
     const dateString = this.form.value.datetime.date + 'T';
     this.campaignData.date = dateString + timeString;
     delete this.form.value.datetime;
     this.campaignData = Object.assign(this.campaignData, this.form.value);
     this.location.back();
    }
  }

  onGoBack() {
    this.location.back();
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

  private addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }
}
