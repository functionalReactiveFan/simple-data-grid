import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsComponent } from './campaigns.component';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { CampaignsService } from '../campaigns.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';

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

    const campaignService = fixture.debugElement.injector.get(CampaignsService);
    spyOn(campaignService, 'getCampaigns').and.returnValue(Observable.of([{
      PlistaProduct: 'Product 8',
      a: 8,
      camp_cpc: 0.271,
      campaignid: '210a0e48ec0aea780bb747fe56a72d92',
      date: '2016-02-29T10:00:06',
      freeclick: true,
      frienddomainid: '9a8799e6ac57db61203d74b98d78e2ee',
      network: 'b',
      userid: '16d798b3ae9d72408a91a8737bedb661'
    }]));
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('datagrid should not be empty', () => {
    expect(component.dataSource.data.length).toEqual(1);
  });

  it('datagrid should display table rows(header and content)', () => {
    const view = fixture.debugElement.nativeElement;
    expect(view.querySelectorAll('tr').length).toEqual(2);
  });
});
