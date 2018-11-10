import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AppRoutingModule } from './app-routing.module';
import { CampaignsService } from './campaigns.service';
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
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' },
    CampaignsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }
}
