import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CampaignsService } from '../campaigns.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.scss']
})
export class CampaignEditComponent implements OnInit {
  campaignData: Campaign;
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

  /**
   * Make a request to get the campaign data. Set form when done.
   */
  getCampaignById(id: number): void {
    this.campaignsService.getCampaignsById(id).subscribe(campaign => {
      this.campaignData = campaign;
      this.setupForm();
    });
  }

  /**
   * Triggered when the user finished adding the date
   */
  dateChanged(type: string, event: MatDatepickerInputEvent<Date>): void {
    this.form.patchValue({
      'datetime': {
        'date': this.getDate(new Date(event.value))
      }
    });
  }

  /**
   * Format date and time and then update CampaignData based on form values passed.
   */
  onSubmit(): void {
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

  onGoBack(): void {
    this.location.back();
  }

  /**
   * Custom validator to check that a period in the future cannot be selected
   */
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

  private setupForm(): void {
    const d = new Date(this.campaignData.date);
    this.form = new FormGroup({
      'camp_cpc': new FormControl(this.campaignData.camp_cpc, Validators.required),
      'datetime': new FormGroup({
          'date': new FormControl(this.getDate(d), Validators.required),
          'time': new FormControl(this.getTime(d), Validators.required),
        },
        [this.validateDateTime]),
      'freeclick': new FormControl(this.campaignData.freeclick),
      'network': new FormControl(this.campaignData.network),
      'PlistaProduct': new FormControl(this.campaignData.PlistaProduct, Validators.required)
    });
  }

  /**
   * prepend a zero to passed param if below 10
   */
  private prependZero(i): string {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  private getDate(d: Date): string {
    return d.getFullYear() + '-' + this.prependZero(d.getMonth() + 1) + '-' + this.prependZero(d.getDate());
  }

  private getTime(d: Date): string {
    return this.prependZero(d.getHours()) + ':' + this.prependZero(d.getMinutes());
  }
}
