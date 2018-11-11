import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignEditComponent } from './campaign-edit.component';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule, MatOptionModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {CampaignsService} from '../campaigns.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

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
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatOptionModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ CampaignEditComponent ],
      providers: [CampaignsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignEditComponent);
    component = fixture.componentInstance;
    const campaignService = fixture.debugElement.injector.get(CampaignsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
