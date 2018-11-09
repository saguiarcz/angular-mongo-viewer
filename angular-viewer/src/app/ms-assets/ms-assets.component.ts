import { Component, OnInit } from '@angular/core';
import { MsAsset } from '../ms-asset';
import { MsAssetsJSON } from '../stringMsAsset';
import { MsAssetService } from '../ms-asset.service';
import { MsAssets } from '../ms-assets';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-ms-assets',
  templateUrl: './ms-assets.component.html',
  styleUrls: ['./ms-assets.component.css'],
  providers: [MsAssetService]
})

export class MsAssetsComponent implements OnInit {
  // MsAssets: Object;
  p: number = 1;
  msAssets: MsAssets;
  msAssetsTotal: number;
  msAssetsByPage: MsAsset;
  selectedMsAsset: MsAsset;
  msAssetsJSON: Object;
  data: any = {};

  constructor(private msAssetService: MsAssetService) {
  }

  ngOnInit() {
   // this.getMsAssets();
    this.getRawMsAsset();
    this.getRawMsAssetPage();
    this.getMsAssets();
    this.getMsAssetsTotal();
    this.getMsAssetsByPage();
  }

  /** Displays the detail of a selected asset */
  onSelect(msAsset: MsAsset): void {
    this.selectedMsAsset = msAsset;
  }

  /**GETs all the assets*/
  getMsAssets(): void {
    this.msAssetService.getMsAssets().subscribe(msAssets => this.msAssets = msAssets['_embedded']['assets']);
  }

  /**GETs the totalElements of assets*/
  getMsAssetsTotal(): void {
    this.msAssetService.getMsAssets().subscribe(msAssets => this.msAssetsTotal = msAssets['page']['totalElements']);
    //console.log('msAssetsTotalElements: ' + this.msAssetsTotal)
  }

  /**GETs assets by specified page*/
  getMsAssetsByPage(): void {
    this.msAssetService.getMsAssetPerPage(this.p).subscribe(msAssets => this.msAssetsByPage = msAssets['_embedded']['assets']);
  }

  /**FOR TEST ONLY: Gets the raw data of all the assets**/
  getRawMsAsset() {
    this.msAssetService.getRawMsAsset().subscribe(
      result => {
        this.msAssetsJSON = result['_embedded']['assets'] as MsAssetsJSON[];
        //console.log( "msAssetsJSON['assets']: " + this.msAssetsJSON["assets"]);
      });
  }
  /**FOR TEST ONLY:Gets the raw data of all the assets by page**/
  getRawMsAssetPage() {
    this.msAssetService.getRawMsAssetsPage(this.p).subscribe(
      result => {
        this.msAssetsJSON = result['_embedded']['assets'] as MsAssetsJSON[];
        //console.log( "msAssetsJSON['assets']: " + this.msAssetsJSON["assets"]);
      });
  }

}
