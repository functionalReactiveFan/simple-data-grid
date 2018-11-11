import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CampaignsService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getCampaigns(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }

  getCampaignsById(id: number) {
    return this.getCampaigns().pipe(
      map(campaigns => campaigns.find(campaign => campaign.a === id))
    );
  }

  updateCampaignById(id: number, data: any) {
    console.log('do an update');
    console.log(data);
  }
}
