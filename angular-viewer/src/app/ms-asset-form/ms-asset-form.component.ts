/**Component for the Asset Management API from*/

import { Component, OnInit } from '@angular/core';
import {MsAssetFormModel} from '../ms-asset-form-model';import { MsAssetService } from '../ms-asset.service';
import { MsAsset } from '../ms-asset';
import {ActivatedRoute} from '@angular/router';
import { environment} from '../../environments/environment';


@Component({
  selector: 'app-ms-asset-form',
  templateUrl: './ms-asset-form.component.html',
  styleUrls: ['./ms-asset-form.component.css'],
  providers: [MsAssetService]
})
export class MsAssetFormComponent implements OnInit {
  msAsset: MsAsset;
  msAssets: MsAsset[];
  method: string;
  inputUrl: string;
  stringMsAsset: string;
  private msAssetsURL = environment.baseURL; // URL to web api
  submitted = false;
  msAssetFormModel: MsAssetFormModel;

  methods = ['get', 'post', 'put', 'delete'];

  categories = ['Aspecttypes', 'Assettypes', 'Assets', 'Structure', 'Location', 'Files']

  model = new MsAssetFormModel(
    this.msAssetsURL,
    'get',

    '{\n' +
    '  "name": "XWingEdit",\n' +
    '  "assetId": "A0021",\n' +
    '  "id": "B0021",\n' +
    '  "description": "Hyperspace jump capable space ship",\n' +
    '  "parentTypeId": "mdsp.spaceship",\n' +
    '  "instantiable": true,\n' +
    '  "scope": "private",\n' +
    '  "variables": [\n' +
    '    {\n' +
    '      "name": "temperature",\n' +
    '      "dataType": "STRING",\n' +
    '      "unit": "C",\n' +
    '      "searchable": true,\n' +
    '      "length": 3\n' +
    '    }\n' +
    '  ],\n' +
    '  "fileAssignments": [\n' +
    '    {\n' +
    '      "key": "logo_small",\n' +
    '      "fileId": "c27a28b6eb16b507fabc11e75da8b4ce"\n' +
    '    }\n' +
    '  ],\n' +
    '  "aspects": [\n' +
    '    {\n' +
    '      "name": "leftWing",\n' +
    '      "aspectTypeId": "mdsp.wing"\n' +
    '    }\n' +
    '  ]\n' +
    '}');

  constructor(
    private route: ActivatedRoute,
    private msAssetService: MsAssetService
  ) { }

  ngOnInit() {
  }

  /**Submit this form**/
  onSubmit() { this.submitted = true; }


  /**Call the API with parameters**/
  public callApiWithParams() {
    const urlCall = this.model.url + '/' + this.model.method + '/' + JSON.stringify(this.model.body);
    console.log(urlCall);
  }
  /**Call the API Asset Management*/
  getUrlCallAssetManagement(urlCall): void{
    this.msAssetService.getUrlCallAssetManagement(urlCall).subscribe(msAsset => this.msAsset = msAsset);
    console.log('GET method was called Asset Management API');
  }
  /** Get MsAsset **/
  getMsAsset(assetId): void {
    this.msAssetService.getMsAsset(assetId).subscribe(msAsset => this.msAsset = msAsset);
    console.log('GET method was called');
  }

  /**Subscribes to the POST request in the MsAssetService**/
  postMsAsset(newMsAsset): void {
    this.msAssetService.postMsAsset(newMsAsset)
      .subscribe(msAsset => this.msAssets.push(msAsset));
    console.log('POST method was called' + newMsAsset);
  }

  /**Subscribes to the PUT request in the MsAssetService**/
  putMsAsset(bodyMsAsset, assetId): void {
    this.msAssetService.putMsAsset(bodyMsAsset, assetId)
      .subscribe();
    console.log('PUT method was called');
  }

  /**Subscribes to the DELETE request in the MsAssetService**/
  deleteMsAsset(assetId): void {
    this.msAssetService.deleteMsAsset(assetId).subscribe();
    console.log('DELETE method was called');
  }

  /**Stringifies the JSON object of an asset**/
  get msAssetResponse () {
    return JSON.stringify(this.msAsset, null, 2);
  }

  /**Stringifies the JSON object of an asset*/
  stringifymsAssetResponse () {
    this.stringMsAsset = JSON.stringify(this.msAsset, null, 2);
    return this.stringMsAsset;
  }

  set code (v) {
    try {
      this.model.body = JSON.parse(v);
    }
    catch (e) {
      console.log('Error occured while you were typing the JSON');
    }
    ;
  }

 // TODO: Remove this when we're done
  // get diagnostic() {return JSON.stringify(this.model)}

}
