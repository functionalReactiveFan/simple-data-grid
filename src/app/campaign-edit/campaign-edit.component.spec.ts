import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignEditComponent } from './campaign-edit.component';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CampaignsService } from '../campaigns.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

describe('CampaignEditComponent', () => {
  let component: CampaignEditComponent;
  let fixture: ComponentFixture<CampaignEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatOptionModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [ CampaignEditComponent ],
      providers: [CampaignsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const campaignService = fixture.debugElement.injector.get(CampaignsService);
    spyOn(campaignService, 'getCampaignsById').and.returnValue(Observable.of({
      PlistaProduct: 'Product 8',
      a: 8,
      camp_cpc: 0.271,
      campaignid: '210a0e48ec0aea780bb747fe56a72d92',
      date: '2016-02-29T10:00:06',
      freeclick: true,
      frienddomainid: '9a8799e6ac57db61203d74b98d78e2ee',
      network: 'b',
      userid: '16d798b3ae9d72408a91a8737bedb661'
    }));
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeTruthy();
  });

  it('camp_cpc field validity', () => {
    const camp_cpc = component.form.controls['camp_cpc'];
    expect(camp_cpc.valid).toBeTruthy();
  });

  it('date group validity', () => {
    const date = component.form.controls['datetime'];
    expect(date.valid).toBeTruthy();
  });

  it('freeclick field validity', () => {
    const freeclick = component.form.controls['freeclick'];
    expect(freeclick.valid).toBeTruthy();
  });

  it('network field validity', () => {
    const network = component.form.controls['network'];
    expect(network.valid).toBeTruthy();
  });

  it('PlistaProduct field validity', () => {
    const PlistaProduct = component.form.controls['PlistaProduct'];
    expect(PlistaProduct.valid).toBeTruthy();
  });

  it('camp_cpc field validity with no data', () => {
    component.form.patchValue({'camp_cpc': ''});
    const camp_cpc = component.form.controls['camp_cpc'];
    expect(camp_cpc.valid).toBeFalsy();
  });

  it('date group validity with no data', () => {
    component.form.patchValue({'datetime': {'date': '', 'time': ''}});
    const date = component.form.controls['datetime'];
    expect(date.valid).toBeFalsy();
  });

  it('PlistaProduct field validity with no data', () => {
    component.form.patchValue({'PlistaProduct': ''});
    const PlistaProduct = component.form.controls['PlistaProduct'];
    expect(PlistaProduct.valid).toBeFalsy();
  });
});
