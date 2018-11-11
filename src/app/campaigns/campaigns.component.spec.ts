import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsComponent } from './campaigns.component';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {CampaignsService} from '../campaigns.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CampaignsComponent', () => {
  let component: CampaignsComponent;
  let fixture: ComponentFixture<CampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        RouterTestingModule,
        MatPaginatorModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [ CampaignsComponent ],
      providers: [CampaignsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
