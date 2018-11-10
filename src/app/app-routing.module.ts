import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/campaigns', pathMatch: 'full' },
  { path: 'campaigns', component: CampaignsComponent },
  { path: 'campaign-edit/:id', component: CampaignEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
