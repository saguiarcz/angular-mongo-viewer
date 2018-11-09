import { Component, OnInit, Input } from '@angular/core';
import { MsAsset } from '../ms-asset';
import {MsAssetService} from '../ms-asset.service';
import {MsAssetsJSON} from '../stringMsAsset';

@Component({
  selector: 'app-ms-asset-detail',
  templateUrl: './ms-asset-detail.component.html',
  styleUrls: ['./ms-asset-detail.component.css'],

})

export class MsAssetDetailComponent implements OnInit {
  @Input()
  msAsset: MsAsset;
  stringCode: string;
  public msAssetsJSON: MsAssetsJSON[];

  constructor(private msAssetService: MsAssetService) { }

  ngOnInit() {
    this.getRawMsAsset();
  }
  /**Gets the raw data of an asset from the service**/
  getRawMsAsset() {
    this.msAssetService.getRawMsAsset().subscribe(
      result => {
        this.msAssetsJSON = result as MsAssetsJSON[];
      });
  }
/**Stringifies the JSON object of an asset**/
  get code () {
    //return JSON.stringify(this.msAsset["assets"], null, 2);
   this.stringCode = JSON.stringify(this.msAsset, null, 2);
    return this.stringCode;
  }

  set code (v) {
    try {
      this.msAssetsJSON = JSON.parse(v);
    }
    catch (e) {
      console.log('Error occured while you were typing the JSON');
    }
    ;
  }
}

