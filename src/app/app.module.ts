import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CampaignsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
