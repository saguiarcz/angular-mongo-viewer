import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsAssetsComponent } from './ms-assets.component';

describe('MsAssetsComponent', () => {
  let component: MsAssetsComponent;
  let fixture: ComponentFixture<MsAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
