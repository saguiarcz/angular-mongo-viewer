import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsAssetFormComponent } from './ms-asset-form.component';

describe('MsAssetFormComponent', () => {
  let component: MsAssetFormComponent;
  let fixture: ComponentFixture<MsAssetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsAssetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsAssetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
