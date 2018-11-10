import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CampaignsService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getCampaigns (): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
