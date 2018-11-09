import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MsAssetsComponent } from './ms-assets/ms-assets.component';
import {MongoDashboardComponent} from './mongo-dashboard/mongo-dashboard.component';
import {BeJobsComponent} from './be-jobs/be-jobs.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'assets', component: MsAssetsComponent},
  { path: 'mongodashboard', component: MongoDashboardComponent},
  { path: 'bejobs', component: BeJobsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
