import { Injectable } from '@angular/core';
import { MsAsset } from './ms-asset';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';


const httpOptions = {
  headers: new HttpHeaders(({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  }))
};

@Injectable()
export class MsAssetService {

  private accessTokenURL = environment.baseURL + '/access_token';
  accessToken: object;

  constructor(private http: HttpClient) { }

  /**FOR TEST ONLY: Get access token */
  getAccessToken(): Observable<any> {
    return this.http.get(this.accessTokenURL);
  }

  /**FOR TEST ONLY: Get Raw assetManagementURL response */
  getRawResponse() {
    return this.http.get(environment.assetManagementURL);
  }

  /**GET method for the AssetManagement API*/
  getUrlCallAssetManagement(urlCall: string): Observable<MsAsset> {
    const url = `${environment.assetManagementURL}${urlCall}`;
    return this.http.get<MsAsset>(url);
  }

  /** Gets ALL the assets */
  getMsAssets(): Observable<MsAsset[]> {
    return this.http.get<MsAsset[]>(environment.assetsURL);
  }

  /*Gets MS Assets per page*/
  getMsAssetPerPage(page): Observable<MsAsset[]>{
    return this.http.get<MsAsset[]>(environment.assetsURL+ '/?page=' + page)
  }

  /** GET asset by Id*/
  getMsAsset(assetId: number): Observable<MsAsset> {
    const url = `${environment.assetManagementURL}/${assetId}`;
    return this.http.get<MsAsset>(url);
  }

  /** GET: retrieves the raw data without any format*/
  getRawMsAsset() {
    return this.http.get(environment.assetManagementURL);
  }

  /** GET: retrieves assets by page*/
  getRawMsAssetsPage(page) {
    return this.http.get(environment.assetManagementURL+ '?page=' + page);
  }

  /** POST: add a new asset**/
  postMsAsset (msAsset: MsAsset): Observable<MsAsset> {
    return this.http.post<MsAsset>(environment.assetManagementURL, msAsset, httpOptions);
    // TODO: Change the URL
  }

  /** DELETE: delete an asset */
  deleteMsAsset (assetId: string): Observable<MsAsset> {
    const url = `${environment.assetManagementURL}` + `/` + assetId;
    return this.http.delete<MsAsset>(url, httpOptions);
  }

  /**PUT: update an asset  */
  putMsAsset (bodyMsAsset: String, assetId: String): Observable<any> {
    const url = `${environment.assetManagementURL}` + `/` + assetId;
    return this.http.put(url, bodyMsAsset, httpOptions);
  }
}
