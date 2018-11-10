import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignsComponent,
    CampaignEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }
}
