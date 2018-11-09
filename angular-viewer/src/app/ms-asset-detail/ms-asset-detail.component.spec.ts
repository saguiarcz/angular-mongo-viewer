import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsAssetDetailComponent } from './ms-asset-detail.component';

describe('MsAssetDetailComponent', () => {
  let component: MsAssetDetailComponent;
  let fixture: ComponentFixture<MsAssetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsAssetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsAssetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
