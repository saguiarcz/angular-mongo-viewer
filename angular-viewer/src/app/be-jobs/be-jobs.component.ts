import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { AuthService } from '../auth.service';
import {Observable} from 'rxjs/Observable';
import { MsAssetService } from '../ms-asset.service';

@Component({
  selector: 'app-be-jobs',
  templateUrl: './be-jobs.component.html',
  styleUrls: ['./be-jobs.component.css'],
  providers: [AuthService,
  MsAssetService]
})
export class BeJobsComponent implements OnInit {
  userEmail: string;
  userPassword: string;

  runningStatus = true;
  accessToken: string;

  constructor(
    private authService: AuthService,
    private msAssetService: MsAssetService) {  }

  ngOnInit() {
  }

  /**Get Access Token from service*/
  /*
  getAccessToken(): void {
    this.msAssetService.getAccessToken().subscribe(accessToken => this.accessToken => accessToken);
    console.log(urlCall);
  }
  */
/*
  getMsAsset(assetId): void {
    // const assetId = +this.route.snapshot.paramMap.get('assetId');
    this.msAssetService.getMsAsset(assetId).subscribe(msAsset => this.msAsset = msAsset);
    console.log('GET method was called');
  }
*/
  public getApiToken (userEmail, userPassword): void {
    this.authService.attemptAuth(userEmail, userPassword)
      .subscribe();
    console.log(this.authService);
  }

  public fetchToken () {
    fetch('http://localhost:3030/access_token',
      {
        credentials: 'include',
        headers: {'Cache-Control': 'no-cache'}
      }).then(function (resp) {
      return resp.json();
    }).then(function (parsedResp) {
      console.log('Access Token ' + parsedResp.access_token);
      this.runningStatus = parsedResp.this.runningStatus;
    });
  }
  public startBeJobs() {
    this.runningStatus = true;
  }
  public stopBeJobs() {
    this.runningStatus = false;
  }
}


