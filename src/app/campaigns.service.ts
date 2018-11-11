import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Campaign } from './campaign';

@Injectable()
export class CampaignsService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.dataUrl);
  }

  getCampaignsById(id: number) {
    return this.getCampaigns().pipe(
      map(campaigns => campaigns.find(campaign => campaign.a === id))
    );
  }
}
