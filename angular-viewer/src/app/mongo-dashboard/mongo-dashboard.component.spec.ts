import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDashboardComponent } from './mongo-dashboard.component';

describe('MongoDashboardComponent', () => {
  let component: MongoDashboardComponent;
  let fixture: ComponentFixture<MongoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
