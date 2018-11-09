import { TestBed, inject } from '@angular/core/testing';

import { MsAssetService } from './ms-asset.service';

describe('MsAssetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsAssetService]
    });
  });

  it('should be created', inject([MsAssetService], (service: MsAssetService) => {
    expect(service).toBeTruthy();
  }));
});
