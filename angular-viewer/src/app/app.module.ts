import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { CollectionViewerComponent } from './collection-viewer/collection-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { MongoComponent } from './mongo/mongo.component';
import { MongoService } from './mongo.service';

import { MsAssetsComponent } from './ms-assets/ms-assets.component';
import { MsAssetDetailComponent } from './ms-asset-detail/ms-asset-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { provideRoutes } from '@angular/router';
import { MongoDashboardComponent } from './mongo-dashboard/mongo-dashboard.component';
import { BeJobsComponent } from './be-jobs/be-jobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {AceEditorModule} from 'ng2-ace-editor';
import { MsAssetFormComponent } from './ms-asset-form/ms-asset-form.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    MongoComponent,
    CollectionViewerComponent,
    MsAssetsComponent,
    MsAssetDetailComponent,
    MongoDashboardComponent,
    BeJobsComponent,
    DashboardComponent,
    MsAssetFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgxJsonViewerModule,
    AceEditorModule,
    NgxPaginationModule
  ],
  providers: [MongoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
